---
name: merge-quest-bootstrap
description: Propose and scaffold the Merge Quest monorepo when starting the repository, reorganizing its root structure, or preparing the repository before implementation. Use ONLY for bootstrap/reorg — not the default feature cycle (use Helper → Documentação → Orchestrator instead).
---

# Merge Quest Bootstrap

## Escopo — ONLY bootstrap / reorg

Esta skill **não** é o ciclo padrão de feature. Para pedidos normais use:

`merge-quest-helper` → `merge-quest-decomposition` / `merge-quest-docs` → `merge-quest-orchestrator` → Challenger → Approval → Team → Reviewer → Concluidor

(`docs/agents/workflow.md`)

Use bootstrap **somente** quando:

- criar/reorganizar árvore do monorepo;
- scaffolding inicial de apps/packages/docs;
- auditoria pós-scaffold antes de Linear/features.

## Inputs

- `AGENTS.md`;
- `PROJECT-MAP.md`;
- arquitetura do monorepo;
- arquitetura POO/TDD/camadas;
- vertical slice;
- `docs/agents/workflow.md` (para não misturar papéis).

## Workflow

1. Read all required files.
2. Inspect current directory.
3. Produce a proposed tree.
4. Explain ownership and dependencies.
5. Identify open decisions.
6. Ask for **Approval** (artefato — **chat ≠ Approval**).
7. Create directories and documentation.
8. Create placeholder configs.
9. Do not install dependencies unless approved.
10. Create `docs/repository-bootstrap-report.md`.
11. Stop — **não** iniciar funcionalidades; Linear vem depois (`merge-quest-linear`, doc 12).

## Required report

- tree created;
- files created;
- decisions applied;
- open decisions;
- commands not executed;
- risks;
- next approval required.

## Regras duras

- `game-core` permanece sem React/Phaser/DB desde o scaffold.
- Não criar issues Linear sem proposta + Approval.
- Sem Cursor hooks obrigatórios.
- Após bootstrap estável, **retire** esta skill do caminho feliz.

## Done

The repository is organized, documented and reviewable without any product feature implementation.

## Referências

- `docs/architecture/06-monorepo-and-repository-architecture.md`
- `merge-quest-helper`, `merge-quest-linear`, ADR-0001
