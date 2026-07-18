# ADR-0001 — Monorepo

## Status

Aprovado.

## Decisão

Usar monorepo com pnpm Workspaces e Turborepo.

## Motivos

- tipos compartilhados;
- contratos versionados juntos;
- integração React/Phaser/API;
- CI seletiva;
- documentação e assets próximos;
- equipe pequena.

## Consequências

- fronteiras precisam ser explícitas;
- imports devem ser validados;
- Python pode ser orquestrado por scripts do Turbo sem fazer parte do pnpm workspace.
