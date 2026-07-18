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
3. Escrever `sessions/<id>/conclusion.md` (`templates/conclusion.md`).
4. Extrair learnings → alimentar `merge-quest-learned-practices` / Documentação (só práticas repetíveis).
5. **Propor** updates Linear (`MER-*` → Done/comment) via preview; criar/atualizar só com Approval.
6. Rascunhar commit convencional + corpo de PR — **não commit/push** sem pedido explícito.
7. `phase.md` → `conclusion`.

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
