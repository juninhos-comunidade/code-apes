# Audit — backlog quality P0-VS — 2026-07-18

**Sessão:** `docs/agents/sessions/2026-07-18-linear-backlog-quality/`  
**Proposal:** `docs/linear/proposals/2026-07-18-backlog-quality.md`  
**Barra:** `docs/linear/naming.md` (template + ≥4 Aceite + Verify + deps MER-* + Owner + `[mq:]`)

## Resultado

| Métrica | Valor |
|---------|-------|
| Issues ativas não-Done auditadas | 33 |
| Passam barra (get_issue completo) | **33/33** |
| Falhas | 0 |
| Issues criadas nesta fatia | MER-35…MER-39 |

> Nota: `list_issues` trunca `description` (~500 chars) — audit usou `get_issue`.

## Estrutura

- MER-9 `parentId` = MER-8
- Hahn MER-12/25/26/30: `assignee=null`, label `blocked`, `blockedBy` inclui MER-32
- Novas: contratos, grafo salas, telemetria, run lifecycle, overlay pergunta

## MER-35…39

| ID | Título | Owner |
|----|--------|-------|
| MER-35 | Contratos — DTOs/Zod compartilhados | Guilherme |
| MER-36 | Grafo de salas VS (Lab/Oficina/Backend) | Eduardo |
| MER-37 | Telemetria mínima VS | Eduardo |
| MER-38 | Run lifecycle RF-10 | Guilherme (+ Eduardo core) |
| MER-39 | Overlay pergunta combate | Guilherme |

## Gaps humanos restantes

1. Convite Hahn + Initiative UI (MER-32)
2. Merge PR #1 / MER-5 Done

## Veredito

**PASS** — backlog P0-VS consumível sob a barra de qualidade.
