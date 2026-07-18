# 14 — Decisões canônicas e pontos abertos

## Decisões canônicas

- monorepo;
- pnpm + Turborepo;
- React shell;
- Phaser interno;
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

## Pontos que não devem bloquear a árvore

- provedor final de deploy;
- ORM;
- biblioteca de estado React;
- biblioteca visual de teste;
- observabilidade;
- storage final.
- estratégia de pool PostgreSQL por ambiente;
- modelos OpenAI por caso de uso;
- serviço isolado de sandbox.

## Decisão de API reconciliada

O documento inicial usa FastAPI. Em 17 de julho de 2026, a equipe aprovou Node.js + TypeScript para `apps/api`, preservando os contratos e as fronteiras de camadas. O framework HTTP e o ORM/query builder continuam abertos.

## Decisões substituídas

- navegação somente entre salas → movimento livre dentro das salas;
- perguntas entre batalhas → perguntas dentro do combate;
- sem sandbox → sandbox para código;
- IA gerando verdade técnica → catálogo curado;
- slogan “Infraestrutura Inteligente” → removido da marca.
