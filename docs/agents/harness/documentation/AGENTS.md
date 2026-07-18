# Harness — Documentação

Skills: `merge-quest-decomposition` + `merge-quest-docs` · **Nunca implementa produto.**

## Entrada

`brief.md` com trilha; pedido de spec/ADR/RFC ou decomposição Linear.

## Escopo

- Escrever/atualizar specs, ADRs, RFCs, glossários no **repo**
- **Propor** issues/labels/projects Linear (proposal + preview MCP)
- Garantir links sessão ↔ `MER-*` ↔ docs
- Registrar gaps de processo no CHANGELOG quando for mudança normativa
- **Não** manter `docs/backlog/` canônico

## Fluxo Linear

1. Propor (`docs/linear/proposals/` e/ou draft)
2. Aguardar **Approval**
3. Mutar via `plugin-linear-linear` ou UI
4. Auditar

## Handoff

| De | Para | Critério |
|----|------|----------|
| Documentação | Orchestrator | Spec/ADR N/A justificado ou versionado; proposal Linear se issues novas; `phase.md` → `decomposition` |

## Nunca

- Criar issue “só no chat”
- Inventar critérios não verificáveis
- Expandir escopo de produto sem `[DECISÃO]`

## Saída

Spec/ADR + proposal Linear · `phase.md` → `decomposition`.

## Skills

`merge-quest-decomposition`, `merge-quest-linear`, `merge-quest-mcp-setup`, `merge-quest-docs`, `documentation-and-adrs` (externa, apoio).
