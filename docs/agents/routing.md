# Roteamento — pedido → Team + tag

## Tags obrigatórias

Orchestrator marca cada fatia com `[mq:<área>]`. Sem tag → fatia inválida para Team.

Áreas: `game-core` · `runtime` · `web` · `api` · `content` · `art` · `qa` · `docs` · `process`

## Tabela de roteamento

| Sinal no pedido / paths | Team | Tag | Trilha típica |
|-------------------------|------|-----|---------------|
| Regras, estado, combate, veredito determinístico | game-core | `[mq:game-core]` | Full se contrato; Light se bug local |
| Cenas Phaser, input visual, animação sem regra | runtime | `[mq:runtime]` | Full se acopla core; Light se polish |
| Shell React, rotas, HUD DOM, wiring | web | `[mq:web]` | Light/Full |
| Fastify/contratos HTTP, persistência, IA gateway | api | `[mq:api]` | Full se contrato/IA |
| Catálogo, rubricas, perguntas curadas | content | `[mq:content]` | Asset-Content / Full |
| Pixel art, Design Book, Aseprite, assets | art | `[mq:art]` | Asset-Content |
| Testes E2E, a11y, telemetria de QA | qa | `[mq:qa]` | Conforme escopo |
| Spec/ADR/workflow/harness | Documentação (não Team) | `[mq:docs]` / `[mq:process]` | — |
| Revisar diff / aceite | Reviewer | — | — |
| Fechar sessão / prep PR | Concluidor | — | — |

## Paralelo

Fatias sem dependência podem rodar em paralelo. Orchestrator lista todas em `pendingTeamTasks`; Reviewer espera lista vazia (ou bloqueios explícitos).

## Fronteiras críticas

| Se o pedido… | Então |
|--------------|--------|
| Move regra para React/Phaser | Obrigar fatia `[mq:game-core]` + Challenger |
| IA “decide” veredito | Rejeitar; API só interpreta; core decide |
| Altera asset `approved` | Nova versão candidata; trilha Asset-Content |
| Cruza 3+ áreas | Trilha **Full**; preferir fatias sequenciais |

## Escolha de trilha (atalho)

| Pedido | Trilha |
|--------|--------|
| “Ajusta tipagem local / typo / chore isolado” | Light |
| “Novo contrato API + UI + core” | Full |
| “Novo sprite / frame / item de catálogo” | Asset-Content |
| “Corrige bug de dano no combate” | Full se regra; Light só se repro local + teste |

Detalhe: [`tracks.md`](tracks.md).
