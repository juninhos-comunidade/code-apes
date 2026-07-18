# ADR-0004 — API em Node.js e TypeScript

## Status

Aceita em 17 de julho de 2026.

## Contexto

Os documentos históricos apresentam FastAPI como baseline, enquanto a Carta Magna consolidada recomenda TypeScript para coerência do monorepo. A árvore precisava de uma direção antes da configuração do backend.

## Decisão

`apps/api` usará Node.js e TypeScript, isolado por contratos versionados. O framework HTTP e o ORM/query builder permanecem decisões separadas e deverão ser aprovados antes da instalação.

## Consequências

- web, game-core, contratos e API compartilham o ecossistema TypeScript;
- a API continua separada das regras determinísticas do jogo;
- SDKs de banco e IA permanecem em infraestrutura;
- trocar a linguagem ou o runtime exigirá novo ADR.
