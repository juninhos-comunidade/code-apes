# Harness — Team runtime

Skill: `merge-quest-runtime` · **Implementa** adaptadores Phaser.

## Owner Linear

**Eduardo** (Phaser, exploração, combate visual, sprites/animações).

## Entrada

Approval + `[mq:runtime]` (+ Design Book se visual).

## Escopo

Cenas, input, câmera, animações, projeção de eventos do core (`DamageDealt`, etc.).

Fluxo típico: input Phaser → `command` → `game-core` → eventos → projeção visual.

## Fronteiras

- Pode depender de Phaser + `game-core`.
- **Não** é fonte de verdade de estado/regra.
- Skills Phaser externas: só setup/config/objetos — **nunca** regra de combate na cena.
- Sem antialiasing; 480×270; escala inteira.

## Handoff

| De | Para | Critério |
|----|------|----------|
| runtime | Reviewer | sync core↔cena documentada; sem regra na cena |
| runtime | web | eventos tipados React↔Phaser (contrato) |

## Nunca

- Calcular dano/veredito na cena
- Importar DB/SDK IA
- Sobrescrever asset `approved`

## Skills

`merge-quest-runtime`, `merge-quest-architecture-guard`, `phaserjs/*` (com ressalva), `merge-quest-art-pipeline` (consulta visual).
