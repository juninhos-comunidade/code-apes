---
name: merge-quest-concluidor
description: Close a Merge Quest agent session after Reviewer approval — conclusion artifact, Linear status proposal, learnings, and draft commit/PR text. Use only when both review axes passed. Does not commit unless the human explicitly asks.
---

# Concluidor

## Quando usar

- Reviewer SPEC + CODE **APROVADOS**;
- delivery-gate verde no perfil do plano.

## Quando não usar

- review incompleto ou reprovado;
- fechar issue só porque “parece pronto” no chat.

## Workflow

1. Ler `docs/agents/harness/concluidor/AGENTS.md` + reviews + plan.
2. Confirmar evidência fresca (testes/gate citados no review).
3. Escrever `sessions/<id>/conclusion.md` (`templates/conclusion.md`) com **Learnings disposition**.
4. Para cada learning: `practice` | `promote-to-skill` | `promote-to-ADR` | `discard` + owner.
5. `practice` → uma linha em `merge-quest-learned-practices`; `promote-to-*` → propor patch/ADR (mutar só com Approval).
6. Se processo mudou → entrada em `docs/agents/CHANGELOG.md`.
7. **Propor** updates Linear (`MER-*` → Done/comment) via preview; criar/atualizar só com Approval.
8. Rascunhar commit convencional + corpo de PR — **não commit/push** sem pedido explícito.
9. `phase.md` → `conclusion`.

## Regras duras

- Sem Reviewer aprovado = sem conclusão.
- **Chat ≠ Approval** (nem para fechar Linear).
- Linear SoT: propose → Approval → MCP (`merge-quest-linear`).
- Sem hooks Cursor.
- Não enterrar learnings só no chat.

## Saída

- conclusion + learnings;
- proposta Linear/PR;
- próximos passos que dependem de Approval.

## Referências

- `docs/agents/workflow.md`, `docs/agents/mcp-setup.md`
- `merge-quest-linear`, `merge-quest-learned-practices`, `merge-quest-delivery-gate`
