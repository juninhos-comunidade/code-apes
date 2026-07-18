---
name: merge-quest-game-core
description: Implement deterministic Merge Quest game rules and state in packages/game-core with TDD — no React, Phaser, browser, DB, or AI SDK. Use for battle, cards, confidence, verdicts, reducers, and pure domain transitions after plan Approval.
---

# Team — game-core

## Owner

Linear: **Eduardo**. Pacote: domínio puro `execute(state, command) → { state, events }`.

## Quando usar

- task `[mq:game-core]` com plan + Approval;
- regra/ determinismo / replay / veredito.

## Quando não usar

- UI React, cenas Phaser, HTTP, persistência, prompts de IA.

## Workflow

1. Ler `docs/agents/harness/game-core/AGENTS.md`, ADR-0002, doc 07, plan, `MER-*`.
2. TDD: RED → GREEN → REFACTOR para a regra.
3. Manter funções puras / entidades / VOs; composição > herança.
4. Exportar comandos/eventos tipados; sem I/O.
5. Rodar testes do pacote + typecheck; atualizar contratos se a superfície pública mudar.
6. Reportar evidência para Reviewer (não auto-aprovar).

## Fronteiras

- **Proibido importar:** React, Phaser, DOM, Node fs, DB, SDK de IA.
- Apresentação (React/Phaser) só consome API do core.
- IA não decide veredito fora do motor determinístico (ADR-0003).

## Regras duras

- Só após Approval do plano (artefato).
- **Chat ≠ Approval**.
- Citar `MER-*`; não expandir escopo silencioso.
- Sem hooks Cursor.

## Saída

- diff + testes;
- notas de replay/determinismo;
- gaps para Reviewer.

## Referências

- ADR-0002, `docs/engineering/07-poo-tdd-layered-architecture.md`
- `merge-quest-architecture-guard`, `merge-quest-delivery-gate`
