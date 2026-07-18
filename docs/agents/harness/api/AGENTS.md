# Harness — Team api

Skill: `merge-quest-api` · **Implementa** API e infraestrutura atrás de contratos.

## Escopo

`apps/api` + contratos: HTTP, persistência, gateway de IA, auth conforme ADR.

## Regras

- Controllers sem regra de negócio de jogo
- IA interpreta/redige; **não** inventa resposta correta nem decide veredito (ADR-0003)
- Domínio não depende de infra; adaptadores implementam portas
- Mutar DB compartilhado / serviços pagos: Approval

## Nunca

- Bypass de schema/rubrica
- Segredos no repo
- Importar `game-core` rules no lugar errado da camada

## Entrada

Approval + `[mq:api]` + critérios/contratos.

## Skills

`merge-quest-api`, `api-design-principles`, `zod-validation-expert`, `postgres-best-practices`, `fastapi-pro` N/A se stack TS.
