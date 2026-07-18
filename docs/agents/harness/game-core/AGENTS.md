# Harness — Team game-core

Skill: `merge-quest-game-core` · **Implementa** regras determinísticas.

## Owner Linear

**Eduardo** (issues MER-9, MER-21–23 e fatias `[mq:game-core]`).

## Entrada

Approval + tag `[mq:game-core]` + critérios `MER-*`.

## Escopo

Centro estável do domínio: entidades, VOs, combate, progressão, Confiança, veredito.

Motor: `execute(state, command) → { state, events }` — TypeScript determinístico e testável.

## Fronteiras (camadas)

- **Proibido:** React, Phaser, DOM, DB, SDK de IA, HTTP.
- Apresentação e infra só consomem API pública do core.
- Trocar renderer/LLM **não** exige mudar game-core (tabela de isolamento).

## Handoff

| De | Para | Critério |
|----|------|----------|
| game-core | Reviewer | testes RED→GREEN + typecheck; superfície tipada |
| game-core | runtime/web | comandos/eventos estáveis documentados |

## Nunca

- Colocar I/O ou framework no pacote
- Decidir visual/animação como regra
- Expandir escopo sem Approval

## Skills

`merge-quest-game-core`, TDD (mattpocock/obra), `typescript-pro`, `vitest-skill`, `merge-quest-architecture-guard`.
