# Harness — Team runtime

Skill: `merge-quest-runtime` · **Implementa** adaptação Phaser.

## Escopo

`game-runtime` / cenas Phaser: render, input, animação, wiring para comandos do `game-core`.

## Regras

- Animação **não** muda resultado
- Cenas não possuem regra central de avaliação
- Pode depender de Phaser + `game-core`; não inverter dependência

## Nunca

- Duplicar regra de combate no runtime
- Antialiasing / resolução fora do Design Book
- Importar API/DB/SDK de IA no runtime sem porta explícita aprovada

## Entrada

Approval + `[mq:runtime]` + critérios.

## Skills

`merge-quest-runtime`, `merge-quest-architecture-guard`, `merge-quest-art-pipeline` (consulta visual).
