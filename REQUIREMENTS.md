# Requisitos e instalação

Este projeto é um monorepo Node.js + TypeScript. As dependências instaláveis são declaradas nos arquivos `package.json`; não é usado `requirements.txt`, que pertence ao ecossistema Python.

## Pré-requisitos

- Node.js 22 ou superior;
- pnpm 11.9.0;
- Git;
- Aseprite somente quando o pipeline de arte for iniciado;
- Docker somente se a equipe aprovar serviços locais que dependam dele.

## Instalar todas as dependências

Na raiz do repositório:

```powershell
pnpm install
```

O mesmo comando está disponível como:

```powershell
pnpm bootstrap
```

O pnpm lê `pnpm-workspace.yaml` e instala, de uma vez, as dependências da raiz, de `apps/*` e de `packages/*`.

## Dependências já declaradas

- monorepo e qualidade: Turborepo, TypeScript, ESLint, Prettier, Vitest e Playwright;
- web: React, React DOM e Vite;
- jogo: Phaser;
- contratos: Zod;
- execução TypeScript da API: `tsx` e tipos do Node.js;
- pacotes internos conectados com o protocolo `workspace:*`.

## Stack de infraestrutura aprovada

- Fastify para HTTP;
- Drizzle ORM e driver `pg` para PostgreSQL;
- Supabase JavaScript SDK para Auth e operações administrativas encapsuladas;
- SDK oficial `openai` com Responses API;
- `fastify-type-provider-zod` para contratos HTTP tipados.

## Deliberadamente não escolhidas

- biblioteca de estado React;
- observabilidade e provedor de deploy.

O framework HTTP, ORM e SDKs aprovados estão registrados no ADR-0005. As escolhas restantes exigem decisão arquitetural antes da instalação.

## Após a instalação

```powershell
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

Os scripts dos workspaces serão implementados junto das respectivas configurações; no scaffolding atual eles permanecem vazios intencionalmente.
