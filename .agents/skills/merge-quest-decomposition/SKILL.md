---
name: merge-quest-decomposition
description: Turn an approved Merge Quest brief into Linear-ready issue proposals, acceptance criteria, and session decomposition artifacts. Use after Helper approval — before Orchestrator plans. Propose MER-* issues; never create without Approval.
---

# Decomposition (Documentação + Linear)

## Quando usar

- brief aprovado;
- learnings do Concluidor pedindo novos cortes;
- gap hunt em specs/workflow (sem inventar backlog paralelo).

## Quando não usar

- implementação;
- criar Linear sem Approval;
- manter árvore `docs/backlog/` estilo PICK (proibido como SoT).

## Workflow

1. Ler `docs/agents/harness/documentation/AGENTS.md` e `docs/agents/decomposition-linear.md`.
2. Partir o brief em entregas verificáveis (1 responsável, 1–2 dias, critérios).
3. Para cada fatia: aceite testável, dependências, docs/ADR/spec, área `[mq:<area>]`.
4. **Propor** issues `MER-*` (artefato no repo / preview MCP) — **não criar** ainda.
5. Se precisar spec/RFC/ADR: rascunhar no repo (SoT de especificação).
6. Atualizar sessão: `phase.md` → `decomposition`; listar `linearIssues` propostos.
7. Aguardar Approval → então `merge-quest-linear` cria via MCP.
8. Hand-off Orchestrator com IDs reais ou “pending create”.

## Regras duras

- **Linear = SoT** de issues/status/assignee; prefixo **MER-**.
- **Repo = SoT** de specs/ADR/sessões.
- Propose → Approval → create (doc 12 + `merge-quest-linear`).
- **Chat ≠ Approval**.
- Não inventar prioridade sem humano.
- Sem dual-backlog canônico em markdown.

## Saída

- proposta de issues + critérios;
- links a docs/specs;
- gaps de processo (se houver) para Orchestrator.

## Referências

- `docs/agents/decomposition-linear.md`, `docs/linear/12-linear-bootstrap.md`
- `docs/agents/templates/brief.md`, `merge-quest-docs`, `merge-quest-linear`
