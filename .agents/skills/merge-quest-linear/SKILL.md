---
name: merge-quest-linear
description: Propose and (after Approval) create or update Merge Quest Linear issues, projects, labels, and milestones via MCP. Use for Documentação bootstrap, Concluidor status updates, and any MQ-* mutation. Never treat chat as Approval.
---

# Linear

## Quando usar

- bootstrap workspace (doc 12);
- criar/atualizar issues `MQ-*` após proposta aprovada;
- Concluidor propondo Done/comment;
- auditar estado vs proposta.

## Quando não usar

- mutar Linear só porque o humano “disse ok” no chat sem artefato;
- usar Linear como SoT de specs/ADR (repo é SoT disso).

## Workflow

1. Ler `docs/agents/mcp-setup.md`, `docs/agents/mcp-linear-evaluation.md`, doc 12.
2. Smoke read: team **Merge Quest**, issues, projects, labels.
3. **Propor** mudança (Initiative/Projects/labels/milestones/issues) em artefato no repo.
4. Aguardar Approval (`templates/approval.md`).
5. Executar via MCP (`plugin-linear-linear`): `save_issue`, `save_project`, labels, etc.
6. Auditar list vs proposta; registrar gaps.
7. Fallback se MCP falhar: UI + `docs/linear/proposals/` — **não** inventar SoT paralelo.

## Contrato

| SoT | O quê |
|-----|--------|
| Linear | issues, status, assignee, priority, milestone (`MQ-*`) |
| Repo | specs, ADR, Design Book, sessões, propostas |

## Regras duras

- Prefixo canônico **MQ-** (não MQ-).
- Propose → Approval → create/update.
- **Chat ≠ Approval**.
- Sem hooks Cursor.
- Não iniciar features de produto no bootstrap.

## Saída

- proposta ou diff Linear;
- IDs `MQ-*` criados;
- auditoria.

## Referências

- `docs/linear/12-linear-bootstrap.md`
- `docs/agents/decomposition-linear.md`
- `merge-quest-mcp-setup`, `merge-quest-decomposition`
