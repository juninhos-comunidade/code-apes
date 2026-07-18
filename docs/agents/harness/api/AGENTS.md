# Harness — Team api

Skill: `merge-quest-api` · **Implementa** aplicação/infra atrás de contratos.

## Owner Linear

**Hahn** (quando convidado). Até lá: issues API **unassigned** + comment blocked.

## Entrada

Approval + `[mq:api]`; Approval extra para DB compartilhado / serviços pagos.

## Escopo

Use cases (`StartRun`, `SubmitAnswer`, `SaveCheckpoint`, …), portas (`RunRepository`, `AIGateway`, `AuthGateway`), controllers Fastify finos, Zod na boundary, adapters (Drizzle, Supabase Auth, OpenAI SDK).

## Fronteiras

- Controllers sem regra de negócio de jogo.
- IA só via porta; resposta estruturada validada; core decide recompensas/veredito.
- Domínio interno sem framework; infra implementa portas.
- Sandbox de desafios: worker + container descartável (limites CPU/mem/tempo; sem rede) — fora do núcleo do committee docs, mas API orquestra o job.

## Handoff

| De | Para | Critério |
|----|------|----------|
| api | Reviewer | testes + schemas versionados |
| api | web | contratos estáveis |

## Nunca

- Mover combate determinístico para a API
- Inventar catálogo ativo
- Mutar banco compartilhado sem Approval

## Skills

`merge-quest-api`, `zod-validation-expert`, `api-design-principles`, `supabase` / postgres skills, `nodejs-best-practices`, `merge-quest-architecture-guard`.
