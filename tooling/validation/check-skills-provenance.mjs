import { createHash } from "node:crypto";
import { readFileSync, readdirSync } from "node:fs";
import { relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(import.meta.dirname, "../..");

function listFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = resolve(directory, entry.name);
    return entry.isDirectory() ? listFiles(path) : [path];
  });
}

export function computeVendoredTreeHash({ skillsDirectory, directories }) {
  const hash = createHash("sha256");
  const files = directories
    .filter((name) => !name.startsWith("merge-quest-"))
    .flatMap((name) => listFiles(resolve(skillsDirectory, name)))
    .sort((left, right) => left.localeCompare(right));

  for (const file of files) {
    const path = relative(skillsDirectory, file).replaceAll("\\", "/");
    hash.update(path);
    hash.update("\0");
    hash.update(readFileSync(file));
    hash.update("\0");
  }
  return hash.digest("hex");
}

export function validateSkillsProvenance({ lock, inventory, directories, vendoredTreeHash }) {
  const failures = [];
  const commitPattern = /^[0-9a-f]{40}$/u;
  const hashPattern = /^[0-9a-f]{64}$/u;
  const lockSkills = lock.skills ?? {};
  const inventorySkills = inventory.skills ?? {};
  const externalDirectories = directories.filter((name) => !name.startsWith("merge-quest-"));

  if (inventory.policy?.vendoredTreeHash !== vendoredTreeHash) {
    failures.push(
      `vendored content hash mismatch: expected ${inventory.policy?.vendoredTreeHash ?? "missing"}, got ${vendoredTreeHash}`,
    );
  }

  for (const [source, repository] of Object.entries(inventory.repositories ?? {})) {
    if (!commitPattern.test(repository.commit ?? "")) failures.push(`invalid commit for ${source}`);
    if (!repository.license) failures.push(`missing repository license status for ${source}`);
  }

  for (const [name, locked] of Object.entries(lockSkills)) {
    const audited = inventorySkills[name];
    if (!audited) {
      failures.push(`missing inventory entry for ${name}`);
      continue;
    }
    if (audited.source !== locked.source) failures.push(`source mismatch for ${name}`);
    if (audited.path !== locked.skillPath) failures.push(`path mismatch for ${name}`);
    if (audited.legacyContentHash !== locked.computedHash) failures.push(`hash mismatch for ${name}`);
    if (!hashPattern.test(audited.legacyContentHash ?? "")) failures.push(`invalid hash for ${name}`);
    const effectiveLicense = audited.license ?? inventory.repositories?.[audited.source]?.license;
    if (!effectiveLicense) failures.push(`missing license for ${name}`);
    if (effectiveLicense === "UNKNOWN" && audited.redistributionReview !== "required") {
      failures.push(`unknown license is not acknowledged for ${name}`);
    }
  }

  for (const name of Object.keys(inventorySkills)) {
    if (!lockSkills[name]) failures.push(`inventory entry without lock entry: ${name}`);
  }

  for (const directory of externalDirectories) {
    if (!lockSkills[directory]) failures.push(`vendored external directory without lock entry: ${directory}`);
  }

  for (const name of Object.keys(lockSkills)) {
    if (!externalDirectories.includes(name)) failures.push(`locked external skill is not vendored: ${name}`);
  }

  return failures;
}

export function checkRepositorySkillsProvenance() {
  const lock = JSON.parse(readFileSync(resolve(root, "skills-lock.json"), "utf8"));
  const inventory = JSON.parse(
    readFileSync(resolve(root, "docs/agents/external-skills-inventory.json"), "utf8"),
  );
  const directories = readdirSync(resolve(root, ".agents/skills"), { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
  const vendoredTreeHash = computeVendoredTreeHash({ skillsDirectory: resolve(root, ".agents/skills"), directories });
  return validateSkillsProvenance({ lock, inventory, directories, vendoredTreeHash });
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const failures = checkRepositorySkillsProvenance();
  if (failures.length > 0) {
    console.error(`Skills provenance checks failed: ${failures.length}`);
    for (const failure of failures) console.error(`FAIL ${failure}`);
    process.exit(1);
  }
  console.log("Skills provenance checks passed");
}
