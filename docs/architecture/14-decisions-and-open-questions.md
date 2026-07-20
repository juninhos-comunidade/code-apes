# 14 — Decisões canônicas e pontos abertos

## Decisões canônicas

- monorepo;
- pnpm + Turborepo;
- React shell;
- Phaser 4 interno, conforme ADR-0007;
- game-core determinístico;
- IA atrás da API;
- PostgreSQL/Supabase baseline;
- arquitetura em camadas;
- POO com composição;
- TDD;
- conteúdo curado;
- vertical slice de um andar;
- direção visual aprovada;
- equipe dividida em três frentes.
- API em Node.js + TypeScript, conforme ADR-0004.
- Fastify, Drizzle ORM, PostgreSQL/Supabase e SDK oficial da OpenAI, conforme ADR-0005.
- Committee multi-agente (Helper → … → Challenger → Team → Reviewer → Concluidor), Linear SoT, trilhas Full/Light/Asset-Content, sem hooks Cursor — ADR-0006.

## Pontos que não devem bloquear o vertical slice

- provedor final de deploy;
- biblioteca de estado React;
- biblioteca visual de teste;
- observabilidade;
- storage final (Supabase Storage só com caso de uso);
- estratégia de pool PostgreSQL por ambiente;
- modelos OpenAI por caso de uso;
- serviço isolado de sandbox;
- Initiative Linear criada na UI (MCP sem create initiative).

## Decisão de API reconciliada

O documento inicial usa FastAPI. Em 17 de julho de 2026, a equipe aprovou Node.js + TypeScript para `apps/api` (ADR-0004) e a stack Fastify/Drizzle/Supabase/OpenAI (ADR-0005). ORM não está mais aberto: **Drizzle**.

## Decisões substituídas

- navegação somente entre salas → movimento livre dentro das salas;
- perguntas entre batalhas → perguntas dentro do combate;
- sem sandbox → sandbox para código;
- IA gerando verdade técnica → catálogo curado;
- slogan “Infraestrutura Inteligente” → removido da marca.
