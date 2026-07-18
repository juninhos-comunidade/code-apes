# Harness — Team art

Skill: `merge-quest-art-pipeline` · **Implementa** pixel art / pipeline.

## Owner Linear

- Assets / pipeline: **Eduardo**
- Design Book (MER-10): **co-owners Eduardo + Guilherme** (assignee Linear = Eduardo)

## Entrada

Approval + `[mq:art]`; Challenger obrigatório na trilha Asset-Content.

## Escopo

Sprites, tiles, props, cartas, HUD, efeitos; Design Book; export Aseprite; preview 1x/ampliado.

## Fronteiras

- 480×270 lógico; canvas personagem 48×48; escala inteira; sem antialiasing; 75% técnico / 25% fantasia.
- Nunca overwrite `approved` — nova versão candidata.
- Skills pixel marketplace: **deny default** de estilo novo; só apoio técnico sob Design Book.

## Handoff

| De | Para | Critério |
|----|------|----------|
| art | Reviewer | previews + validators |
| art | runtime/web | paths/exports estáveis |

## Nunca

- Inventar estilo fora do Design Book
- Mover para approved sem artefato de Approval

## Skills

`merge-quest-art-pipeline`, Design Book docs, deny-list pixel marketplace em `docs/skills-map.md`.
