import { existsSync, readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";

import { checkRepositorySkillsProvenance } from "./check-skills-provenance.mjs";

const root = resolve(import.meta.dirname, "../..");
const failures = [];
const passes = [];

function pass(message) {
  passes.push(message);
}

function fail(message) {
  failures.push(message);
}

function readText(path) {
  return readFileSync(resolve(root, path), "utf8");
}

function readJson(path) {
  return JSON.parse(readText(path));
}

const requiredFiles = [
  ".editorconfig",
  ".env.example",
  ".gitattributes",
  ".gitignore",
  ".node-version",
  ".npmrc",
  ".nvmrc",
  "AGENTS.md",
  "REQUIREMENTS.md",
  "package.json",
  "pnpm-lock.yaml",
  "pnpm-workspace.yaml",
  "tsconfig.base.json",
  "turbo.json",
];

for (const path of requiredFiles) {
  if (existsSync(resolve(root, path))) pass(`required file: ${path}`);
  else fail(`missing required file: ${path}`);
}

const rootPackage = readJson("package.json");
const expectedNode = readText(".node-version").trim();
const expectedPnpm = rootPackage.packageManager?.replace("pnpm@", "");

if (process.versions.node === expectedNode) {
  pass(`Node version pinned and active: ${expectedNode}`);
} else {
  fail(`Node ${expectedNode} required; active version is ${process.versions.node}`);
}

const activePnpm = process.env.npm_config_user_agent?.match(/pnpm\/([^\s]+)/u)?.[1];
if (activePnpm === expectedPnpm) pass(`pnpm version pinned and active: ${expectedPnpm}`);
else fail(`pnpm ${expectedPnpm} required; active version is ${activePnpm ?? "unknown"}`);

const manifestPaths = ["apps", "packages"].flatMap((base) =>
  readdirSync(resolve(root, base), { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => `${base}/${entry.name}/package.json`)
    .filter((path) => existsSync(resolve(root, path))),
);

for (const path of ["package.json", ...manifestPaths]) {
  const manifest = readJson(path);
  const groups = ["dependencies", "devDependencies", "peerDependencies"];
  for (const group of groups) {
    for (const [name, version] of Object.entries(manifest[group] ?? {})) {
      if (version === "*" || version === "latest" || /^(git|https?):/.test(version)) {
        fail(`${path}: non-reproducible ${group} entry ${name}@${version}`);
      }
    }
  }
}
pass(`parsed ${manifestPaths.length + 1} package manifests`);

const corePackage = readJson("packages/game-core/package.json");
const coreDependencies = {
  ...corePackage.dependencies,
  ...corePackage.peerDependencies,
};
const forbiddenCoreDependencies = [
  "@supabase/supabase-js",
  "drizzle-orm",
  "fastify",
  "openai",
  "pg",
  "phaser",
  "react",
  "react-dom",
];
for (const dependency of forbiddenCoreDependencies) {
  if (dependency in coreDependencies) fail(`game-core imports forbidden dependency: ${dependency}`);
}
if (!forbiddenCoreDependencies.some((name) => name in coreDependencies)) {
  pass("game-core dependency boundary");
}

const environmentExamples = [
  ".env.example",
  ...["apps", "packages"].flatMap((base) =>
    readdirSync(resolve(root, base), { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => `${base}/${entry.name}/.env.example`)
      .filter((path) => existsSync(resolve(root, path))),
  ),
];

for (const path of environmentExamples) {
  const suspicious = readText(path)
    .split(/\r?\n/u)
    .filter((line) => /(?:API_KEY|SECRET|SERVICE_ROLE_KEY)=\S+/u.test(line));
  if (suspicious.length === 0) pass(`no populated secrets in ${path}`);
  else fail(`populated secret-like value in ${path}`);
}

const lockfileBefore = readText("pnpm-lock.yaml");
if (lockfileBefore.includes("lockfileVersion:")) pass("pnpm lockfile present");
else fail("pnpm lockfile is malformed");

const provenanceFailures = checkRepositorySkillsProvenance();
if (provenanceFailures.length === 0) pass("external skills provenance");
else for (const message of provenanceFailures) fail(message);

console.log(`Reproducibility checks passed: ${passes.length}`);
for (const message of passes) console.log(`PASS ${message}`);

if (failures.length > 0) {
  console.error(`Reproducibility checks failed: ${failures.length}`);
  for (const message of failures) console.error(`FAIL ${message}`);
  process.exit(1);
}
