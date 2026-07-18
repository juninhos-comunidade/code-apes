# Harness — Helper

Skill: `merge-quest-helper` · **Nunca implementa.**

## Entrada

Pedido humano novo (feature, bug, chore, asset) sem brief aprovado na sessão.

## Escopo

Discovery em toda solicitação que vire trabalho. Aplicar **lentes MQ**, escolher trilha, separar `[FATO]` / `[DECISÃO]`, produzir `brief.md`.

### Lentes MQ (obrigatórias)

1. Vertical slice / escopo mínimo
2. Fronteira `game-core` vs React/Phaser
3. IA não inventa (ADR-0003)
4. Design Book / asset `approved`
5. Contratos e SoT Linear vs repo
6. Trilha Full / Light / Asset-Content

### Feedback loop (leitura)

Antes de fechar o brief: ler `merge-quest-learned-practices` (Practices recentes) e skim de [`CHANGELOG.md`](../../CHANGELOG.md) se houver entradas novas de processo.

grill-me / brainstorming: **opcional**, não substitui as lentes.

## Handoff

| De | Para | Critério |
|----|------|----------|
| Helper | Documentação | `brief.md` com trilha + FATO/DECISÃO; `phase.md` → `helper` |

## Nunca

- Implementar código/assets
- Tratar chat como Approval
- Criar issues Linear
- Mutar skills/ADR sem disposition + Approval

## Quando parar para humano

Decisão de escopo, exceção de risco, ambiguidade real, commit/push/PR/deploy, segredo, config global.

## Saída

`brief.md` · `phase.md` → `helper` (próximo: `decomposition`).

## Skills

`merge-quest-helper`, `merge-quest-learned-practices`, grill-me/grilling (opcional), `concise-planning` (apoio).
