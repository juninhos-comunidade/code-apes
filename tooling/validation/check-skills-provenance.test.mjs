import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";

import { computeVendoredTreeHash, validateSkillsProvenance } from "./check-skills-provenance.mjs";

const hash = "b".repeat(64);
const lock = {
  skills: {
    external: { source: "owner/repo", skillPath: "skills/external/SKILL.md", computedHash: hash },
  },
};
const inventory = {
  policy: { vendoredTreeHash: "d".repeat(64) },
  repositories: { "owner/repo": { commit: "a".repeat(40), license: "MIT" } },
  skills: {
    external: { source: "owner/repo", path: "skills/external/SKILL.md", legacyContentHash: hash },
  },
};

test("accepts synchronized lock, inventory and vendored directory", () => {
  assert.deepEqual(
    validateSkillsProvenance({
      lock,
      inventory,
      directories: ["merge-quest-helper", "external"],
      vendoredTreeHash: "d".repeat(64),
    }),
    [],
  );
});

test("rejects an untracked external directory", () => {
  const failures = validateSkillsProvenance({
    lock,
    inventory,
    directories: ["merge-quest-helper", "external", "untracked"],
    vendoredTreeHash: "d".repeat(64),
  });
  assert.ok(failures.includes("vendored external directory without lock entry: untracked"));
});

test("rejects lock and inventory drift", () => {
  const drifted = structuredClone(inventory);
  drifted.skills.external.legacyContentHash = "c".repeat(64);
  const failures = validateSkillsProvenance({
    lock,
    inventory: drifted,
    directories: ["external"],
    vendoredTreeHash: "d".repeat(64),
  });
  assert.ok(failures.includes("hash mismatch for external"));
});

test("requires explicit review when a license is unknown", () => {
  const unknown = structuredClone(inventory);
  unknown.repositories["owner/repo"].license = "UNKNOWN";
  const failures = validateSkillsProvenance({
    lock,
    inventory: unknown,
    directories: ["external"],
    vendoredTreeHash: "d".repeat(64),
  });
  assert.ok(failures.includes("unknown license is not acknowledged for external"));

  unknown.skills.external.redistributionReview = "required";
  assert.deepEqual(
    validateSkillsProvenance({
      lock,
      inventory: unknown,
      directories: ["external"],
      vendoredTreeHash: "d".repeat(64),
    }),
    [],
  );
});

test("requires repository commit provenance for every locked skill", () => {
  const withoutRepository = structuredClone(inventory);
  delete withoutRepository.repositories["owner/repo"];
  withoutRepository.skills.external.license = "MIT";

  const failures = validateSkillsProvenance({
    lock,
    inventory: withoutRepository,
    directories: ["external"],
    vendoredTreeHash: "d".repeat(64),
  });

  assert.ok(failures.includes("missing repository provenance for external: owner/repo"));
});

test("detects a real vendored file change while metadata stays unchanged", () => {
  const directory = mkdtempSync(join(tmpdir(), "merge-quest-skills-"));
  try {
    const skillDirectory = join(directory, "external");
    mkdirSync(skillDirectory);
    const skillFile = join(skillDirectory, "SKILL.md");
    writeFileSync(skillFile, "original", "utf8");
    const expected = computeVendoredTreeHash({ skillsDirectory: directory, directories: ["external"] });
    const fixtureInventory = structuredClone(inventory);
    fixtureInventory.policy.vendoredTreeHash = expected;

    writeFileSync(skillFile, "changed", "utf8");
    const actual = computeVendoredTreeHash({ skillsDirectory: directory, directories: ["external"] });
    const failures = validateSkillsProvenance({
      lock,
      inventory: fixtureInventory,
      directories: ["external"],
      vendoredTreeHash: actual,
    });
    assert.ok(failures.some((failure) => failure.startsWith("vendored content hash mismatch:")));
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
});
