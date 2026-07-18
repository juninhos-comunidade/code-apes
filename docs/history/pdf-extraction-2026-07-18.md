# Extração PDF → canônicos / Linear — 2026-07-18

## Fontes

| PDF | Uso |
|-----|-----|
| `sources/carta-magna-v1.5.pdf` | Jornada, RF-01…, P0-VS, princípios IA |
| `sources/torre-da-vaga-requisitos.pdf` | Mecânicas antigas / stretch — **não** sobrescreve ADRs |
| `sources/merge-quest-matriz-de-responsabilidades-v1.1.pdf` | Ownership e handoffs |

## Promovido

- Backlog Linear P0-VS alinhado à jornada Carta Magna §2.2 e doc 09.
- Mapping RF → issues (ver abaixo).
- Handoffs React↔Phaser / Frontend↔API reforçados em issues MER-27 e docs/product/10.
- Nomenclatura canônica `MER-*` em `docs/linear/naming.md` (team identifier `MER`).

## Arquivado / não promover (conflito com canônicos)

| Ideia no PDF | Motivo |
|--------------|--------|
| FastAPI | Substituído por ADR-0004/0005 (Node + Fastify) |
| 5 andares jogáveis no MVP | P0-VS canônico = **1 andar**; 5 andares = stretch |
| 8 áreas profundas no MVP | VS usa domínio Backend; demais = stretch |
| “Torre da Vaga” naming | Produto = Merge Quest |
| LibreSprite / stacks antigas | Ver decision-log / ADRs |

## Mapping RF → Linear (`MER-*`)

| RF | Issue |
|----|-------|
| RF-01 Auth | MER-12 |
| RF-02..04 Perfil | MER-11 |
| RF-05..07 Vaga | MER-13 |
| RF-08 Cruzamento | MER-14 |
| RF-09 Deck | MER-15 |
| RF-10 Run | MER-38 (+ MER-15, MER-16, MER-25) |
| RF-11 Exploração | MER-16, MER-36 (grafo salas) |
| RF-12 Combate | MER-17, MER-23, MER-28 |
| RF-13 Perguntas | MER-29, MER-39 (overlay cronômetro) |
| RF-14 Loja | MER-18, MER-29 |
| RF-15 Confiança | MER-21 |
| RF-16 Recompensas | MER-17, MER-19 |
| RF-17 Chefes | MER-19 |
| RF-18 Nocaute/replay | MER-21, MER-23, MER-38 |
| RF-19 Veredito | MER-20 |

Transversal VS: MER-35 (contratos), MER-37 (telemetria).

Épico: MER-8.
