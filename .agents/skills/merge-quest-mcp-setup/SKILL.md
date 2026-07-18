---
name: merge-quest-mcp-setup
description: Authenticate and smoke-test Merge Quest MCP integrations (Linear P0, Supabase/GitHub next) in a tool-agnostic way. Use when MCP is needsAuth, broken, or a new machine/tool needs setup. No secrets in repo; mutations need Approval.
---

# MCP Setup

## Quando usar

- servidor MCP `needsAuth` / erro de auth;
- onboarding Cursor / Codex / Claude Code;
- antes do primeiro ciclo Documentação/Concluidor que depende de Linear.

## Inventário

| Prio | Integração | Notas |
|------|------------|--------|
| P0 | Linear `plugin-linear-linear` | auth + smoke; ver evaluation |
| P0/P1 | Supabase | quando projeto existir |
| P1 | GitHub | `gh` já ok; MCP se disponível |
| P1 | Browser/Playwright | smoke UI depois |
| P2 | OpenAI MCP | opcional; SDK+env na API por padrão |
| Fora | Firebase | não é stack MQ |

## Workflow

1. Ler `docs/agents/mcp-setup.md` (passos multi-tool, sem segredos).
2. Descobrir tools (`GetMcpTools` / equivalente na tool).
3. Auth guiada (`mcp_auth` ou fluxo da ferramenta) — humano completa OAuth.
4. Smoke **read-only** primeiro; mutações só com Approval.
5. Registrar achados (Go / Go com gaps / No-go) como em `mcp-linear-evaluation.md`.
6. Se MCP cair: fallback documentado; **não** bloquear harness de processo.

## Regras duras

- Nunca commitar tokens / `.env` / OAuth leftovers.
- Criar issues Linear / mutar Supabase / gasto pago → Approval.
- **Chat ≠ Approval**.
- Agnóstico de tool: contrato comum no doc; exemplos por harness.
- Sem Cursor hooks obrigatórios para o processo MQ.

## Saída

- status auth + catálogo útil;
- gaps e fallbacks;
- próximos passos com Approval.

## Referências

- `docs/agents/mcp-setup.md`, `docs/agents/mcp-linear-evaluation.md`
- `merge-quest-linear`, ADR-0005
