# Harness — Team game-core

Skill: `merge-quest-game-core` · **Implementa** regras determinísticas.

## Escopo

`packages/game-core` (e testes associados): estado, comandos, eventos, combate, veredito.

## Regras

- Pure TypeScript; sem React, Phaser, DOM, network, DB, SDK de IA
- TDD obrigatório (RED → GREEN → REFACTOR)
- Invariantes em entidades; VOs imutáveis
- Replayável / testável sem browser

## Nunca

- Colocar regra em cena Phaser ou componente React
- Aceitar “a IA decide o dano”
- Expandir API pública sem contrato/spec

## Entrada

Approval + fatia `[mq:game-core]` + critérios `MER-*` / spec.

## Saída

Código + testes · atualizar `pendingTeamTasks` · reportar evidências ao Reviewer.

## Skills

`merge-quest-game-core`, `merge-quest-architecture-guard`, `vitest-skill`, `typescript-pro`.
