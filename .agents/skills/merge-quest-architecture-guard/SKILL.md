---
name: merge-quest-architecture-guard
description: Review Merge Quest code changes for layered architecture, POO boundaries, deterministic game-core rules, TDD coverage, contracts, and forbidden cross-layer dependencies. Use before finishing a feature, PR, refactor, or architecture change.
---

# Architecture Guard

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
- replay stays deterministic.

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

### Contracts

- schema versioned;
- validation at boundary;
- event and DTO updated;
- docs updated.

## Output

Create a concise report with:

- passed checks;
- failures;
- severity;
- exact files;
- recommended fix;
- whether merge should be blocked.
