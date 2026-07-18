# Avaliação MCP Linear — Merge Quest

**Data:** 2026-07-18  
**Servidor:** `plugin-linear-linear` (Cursor)  
**Veredito:** **Go com gaps**

## Smoke executado

| Checagem | Resultado |
|----------|-----------|
| `mcp_auth` | OK — OAuth concluiu; server `ready` |
| `list_teams` | OK — team **Merge Quest** (`b9b7bf9f-b83d-45b0-9478-bb2e7e4066d3`) |
| `list_users` | OK — Guilherme (sernusbr), Eduardo Neves; Hahn ainda ausente |
| `list_issues` | OK — MQ-1…MQ-4 (onboarding Linear); prefixo **MQ-** (não MQ-) |
| `list_issue_labels` | OK — defaults Feature / Improvement / Bug |
| `list_issue_statuses` | OK — Backlog, Todo, In Progress, Done, Canceled, Duplicate |
| `list_projects` (sem milestones) | OK — workspace sem projects ainda |
| `list_projects` + `includeMilestones: true` | **Falha** — complexity 16060 > 10000; usar milestones via `list_milestones` / project id |

## Catálogo útil para o fluxo de agentes

Cobertura forte: issues (`save_issue`, `list_issues`, `get_issue`), projects (`save_project`, `list_projects`), milestones (`save_milestone`, `list_milestones`), labels (`create_issue_label`, `list_issue_labels`), comments, documents, cycles, users/teams, status updates.

## Gaps

1. **Sem tool de criar Initiative** — `save_project` aceita `setInitiatives` / `addInitiatives` por nome/ID, mas não há `save_initiative`. Criar Initiative na UI se necessário; projects funcionam sem ela.
2. **`list_projects` + milestones** — query complexa demais; buscar milestones por project.
3. **Prefixo de issue** — workspace usa `MQ-N`, não `MQ-N`. Branches git sugeridas pelo Linear usam `mer-N-…`. Contrato do repo deve aceitar `MQ-*` como ID canônico.
4. **Agnosticismo** — este plugin é Cursor; Codex/Claude Code precisam de Linear MCP/API próprio (ver `mcp-setup.md`).

## Implicações

- Documentação / Concluidor / bootstrap do doc 12 podem usar este MCP.
- Fallback: UI Linear + proposal files em `docs/linear/proposals/`.
- Não bloquear o harness de processo se MCP cair — proposal-file continua válido.
