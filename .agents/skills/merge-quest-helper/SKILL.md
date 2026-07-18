---
name: merge-quest-helper
description: Start every Merge Quest ask with discovery lenses, FATO/DECISÃO labeling, track choice (Full/Light/Asset-Content), and a session brief. Use at the beginning of a feature, bug, chore, or asset request — before planning or implementation.
---

# Helper

## Quando usar

- primeira mensagem de pedido novo;
- ambiguidade de escopo, trilha ou área;
- bug/chore que ainda não tem brief.

## Quando não usar

- brief já aprovado na mesma sessão (salvo rejeição humana);
- papel Team/Reviewer/Concluidor em andamento.

## Workflow

1. Ler `docs/agents/harness/helper/AGENTS.md` e `docs/agents/workflow.md`.
2. Escolher trilha via `docs/agents/tracks.md` e `docs/agents/routing.md`.
3. Aplicar lentes MQ (não só “perguntas genéricas”):
   - vertical slice / DoD;
   - fronteira `game-core` vs apresentação;
   - IA não inventa (ADR-0003);
   - Design Book / asset contract (se arte);
   - Linear `MER-*` existente vs proposta nova.
4. Ler `merge-quest-learned-practices` (Practices recentes) e skim de `docs/agents/CHANGELOG.md` se houver entradas novas.
5. Classificar cada ponto fechado como `[FATO]` (verificável) ou `[DECISÃO]` (precisa humano).
6. Escrever `docs/agents/sessions/<id>/brief.md` a partir de `docs/agents/templates/brief.md`.
7. Atualizar `phase.md` → `helper`; após Approval do brief → `decomposition`.
8. Passar para Documentação (`merge-quest-decomposition` / `merge-quest-docs`).

## Regras duras

- **Chat ≠ Approval** — frase humana é hipótese até artefato `approval`.
- Não implementar código.
- Não criar issues Linear; no máximo listar candidatos `MER-*`.
- Sem Cursor hooks — avanço de fase é manual/contrato em arquivo.
- Bugfix: grill curto (repro + FATO/DECISÃO + issue), ainda obrigatório.

## Saída

- brief com trilha, áreas `[mq:<area>]`, riscos, dependências;
- pedido explícito de Approval do brief.

## Referências

- `docs/agents/workflow.md`, `docs/agents/tracks.md`, `docs/agents/routing.md`
- `merge-quest-learned-practices`, `AGENTS.md`, ADR-0002, ADR-0003
