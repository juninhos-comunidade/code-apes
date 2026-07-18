---
name: merge-quest-architecture-guard
description: Review Merge Quest code changes for layered architecture, POO boundaries, deterministic game-core rules, TDD coverage, contracts, and forbidden cross-layer dependencies. Use before finishing a feature, PR, refactor, or architecture change — typically as part of Reviewer evidence review.
---

# Architecture Guard

Use junto com **`merge-quest-reviewer`** (eixo CODE). Este skill ataca **evidência no diff**, não o plano pré-Approval (isso é Challenger).

## Docs canônicos

- ADR-0002 — `game-core` fonte de verdade: `docs/architecture/adr/ADR-0002-game-core-source-of-truth.md`
- Doc 07 — POO/TDD/camadas: `docs/engineering/07-poo-tdd-layered-architecture.md`
- ADR-0003 — IA não inventa: `docs/architecture/adr/ADR-0003-ai-does-not-invent.md`
- Workflow: `docs/agents/workflow.md`

## Checks

### Layers

- domain imports no framework;
- application depends on ports;
- infrastructure implements ports;
- presentation has no business rule.

### Game

- rule belongs to game-core;
- Phaser only presents;
- React only presents;
- events and commands are typed;
- replay stays deterministic;
- **game-core não importa React, Phaser, browser, DB ou SDK de IA**.

### POO

- entities protect invariants;
- value objects are immutable;
- composition preferred;
- repositories are interfaces;
- DTO is not entity.

### TDD

- new rule has test;
- regression has failing test first;
- tests assert behavior;
- no excessive mocking.

### Contracts & AI

- schema versioned;
- validation at boundary;
- event and DTO updated;
- docs updated;
- AI path does not invent verdict/catalog truth (ADR-0003).

## Processo

- Rodar após Team, sob Reviewer — **não** substitui Challenger.
- **Chat ≠ Approval** de arquitetura; bloqueio vai no review.
- Citar `MQ-*` / aceite do plan quando falhar fidelidade de escopo.
- Sem Cursor hooks obrigatórios.

## Output

Create a concise report with:

- passed checks;
- failures;
- severity;
- exact files;
- recommended fix;
- whether merge should be blocked.

## Referências

- `merge-quest-reviewer`, `merge-quest-challenger`, `merge-quest-game-core`
- `docs/agents/harness/reviewer/AGENTS.md`
