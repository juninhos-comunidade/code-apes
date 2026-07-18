# 06 — Arquitetura do monorepo e dos repositórios

## Decisão

Um único monorepo com:

- pnpm Workspaces;
- Turborepo;
- documentação canônica;
- aplicações;
- pacotes;
- conteúdo;
- arte;
- tooling;
- infraestrutura;
- testes.

## Árvore proposta

```text
merge-quest/
├── apps/
│   ├── web/
│   └── api/
├── packages/
│   ├── game-core/
│   ├── game-runtime/
│   ├── contracts/
│   ├── ui/
│   ├── config/
│   ├── telemetry/
│   └── testing/
├── content/
│   ├── cards/
│   ├── questions/
│   ├── challenges/
│   ├── encounters/
│   ├── rewards/
│   └── competencies/
├── art/
│   ├── source/
│   ├── exports/
│   ├── previews/
│   ├── references/
│   └── licenses/
├── docs/
├── tooling/
│   ├── aseprite/
│   ├── generators/
│   ├── validation/
│   └── linear/
├── infrastructure/
├── tests/
├── .agents/
│   └── skills/
├── AGENTS.md
├── PLANS.md
├── package.json
├── pnpm-workspace.yaml
└── turbo.json
```

## Responsabilidades

### apps/web

- shell React;
- auth;
- perfil;
- vaga;
- briefing;
- overlays;
- loja;
- relatório;
- montagem do Phaser.

### apps/api

Baseline aprovado: Node.js + TypeScript, isolado por contratos. O framework HTTP e o acesso a dados permanecem abertos, conforme ADR-0004.

- auth server-side;
- persistência;
- catálogo;
- IA;
- avaliação;
- checkpoint;
- sandbox;
- telemetria.

Se a equipe alterar o runtime ou a linguagem, deve registrar ADR antes da implementação.

### packages/game-core

- estado;
- comandos;
- eventos;
- reducer;
- combate;
- progressão;
- recompensas;
- avaliação determinística;
- serialização;
- replay.

Sem React, Phaser, browser, banco ou SDK externo.

### packages/game-runtime

- Phaser;
- cenas;
- renderização;
- input;
- sprites;
- animação;
- áudio;
- adaptadores do game-core.

### packages/contracts

- schemas;
- DTOs;
- eventos;
- IDs;
- versões;
- validação compartilhada.

### packages/ui

- tokens;
- componentes;
- HUD;
- painéis;
- badges;
- nine-slice;
- tipografia.

### content

Conteúdo curado versionado em dados, nunca escondido em código de cena.

## CI

Em PR:

- lint;
- typecheck;
- testes afetados;
- schemas;
- conteúdo;
- assets;
- build seletivo.

## Git

- main protegida;
- branches curtas;
- PR;
- squash;
- commits convencionais;
- issue Linear vinculada.

## O que Codex deve fazer primeiro

- propor árvore;
- explicar fronteiras;
- criar scaffolding;
- não instalar tudo;
- não implementar;
- gerar auditoria;
- aguardar aprovação.
