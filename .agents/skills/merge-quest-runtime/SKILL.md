---
name: merge-quest-runtime
description: Implement Merge Quest Phaser runtime adapters that present game-core state — scenes, sprites, input mapping — without owning combat or verdict rules. Use for [mq:runtime] tasks after plan Approval.
---

# Team — runtime (Phaser)

## Quando usar

- task `[mq:runtime]` / integração Phaser;
- animação, input, câmera, montagem de cenas.

## Quando não usar

- colocar regra de combate/avaliação na cena;
- alterar `game-core` sem task `[mq:game-core]`.

## Workflow

1. Ler `docs/agents/harness/runtime/AGENTS.md`, plan, Design Book se visual.
2. Adaptar: Phaser apresenta; **game-core decide**.
3. Mapear input → comandos tipados do core; renderizar snapshots/eventos.
4. Sem antialiasing; respeitar 480×270 / escala inteira.
5. Testes no nível adequado (unit do adapter / smoke); não exigir browser para regra.
6. Entregar evidência ao Reviewer.

## Fronteiras

- Pode depender de Phaser + `game-core`.
- Não importar DB/SDK IA.
- Animação **não** muda resultado (ADR-0002).

## Regras duras

- Approval de plano obrigatória (não chat).
- Linear `MER-*` citado.
- IA não inventa conteúdo técnico na cena.
- Sem hooks Cursor.

## Saída

- diff runtime + notas de sync com core;
- riscos de acoplamento.

## Referências

- ADR-0002, `docs/design/05-visual-design-and-asset-rules.md`
- `merge-quest-game-core`, `merge-quest-art-pipeline`, `merge-quest-architecture-guard`
