---
name: merge-quest-bootstrap
description: Propose and scaffold the Merge Quest monorepo when starting the repository, reorganizing its root structure, or preparing the repository before implementation. Use before installing frameworks or creating product features.
---

# Merge Quest Bootstrap

## Inputs

- `AGENTS.md`;
- `PROJECT-MAP.md`;
- arquitetura do monorepo;
- arquitetura POO/TDD/camadas;
- vertical slice.

## Workflow

1. Read all required files.
2. Inspect current directory.
3. Produce a proposed tree.
4. Explain ownership and dependencies.
5. Identify open decisions.
6. Ask for approval.
7. Create directories and documentation.
8. Create placeholder configs.
9. Do not install dependencies unless approved.
10. Create `docs/repository-bootstrap-report.md`.
11. Stop.

## Required report

- tree created;
- files created;
- decisions applied;
- open decisions;
- commands not executed;
- risks;
- next approval required.

## Done

The repository is organized, documented and reviewable without any product feature implementation.
