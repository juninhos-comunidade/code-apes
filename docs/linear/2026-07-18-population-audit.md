# Audit — população Linear P0-VS — 2026-07-18

**Workspace:** https://linear.app/mergequest  
**Team key atual no MCP:** ainda **`MER`** (alterar para **`MQ`** em Settings → Teams → Identifier)  
**Repo:** nomenclatura canônica já é `MQ-*` (`docs/linear/naming.md`)

## Contagem

| Métrica | Valor |
|---------|-------|
| Issues ativas (não arquivadas) | 30 |
| Backlog | 26 |
| In Progress | 2 (MER-5, MER-8) |
| Done | 2 (MER-6, MER-7) |
| Canceled onboarding | MER-2, MER-3, MER-4 |

## Por project

| Project | Issues |
|---------|--------|
| Arquitetura e infraestrutura | 9 |
| Jogo Phaser | 4 |
| IA e conteúdo técnico | 4 |
| Frontend React | 4 |
| Backend e banco | 3 |
| Produto e requisitos | 2 |
| Arte e animação | 1 |
| UX/UI e Design Book | 1 |
| QA | 1 |
| Demo e entrega | 1 |

## Árvore P0-VS

- **Épico** MER-8 — filhos: jornada MER-11…20, core MER-9+21…23, React MER-24, contrato MER-27, API MER-25/26, conteúdo MER-29/30, arte MER-34, QA MER-33, demo MER-31
- **RF mapping:** `docs/history/pdf-extraction-2026-07-18.md`

## Gaps / ações humanas

1. **Trocar identifier MER → MQ** (Settings) — só assim IDs passam a `MQ-*`
2. Criar Initiative na UI e vincular 10 projects
3. Convidar **Hahn** ao workspace (assignee hoje placeholder Gui em issues de API)
4. PR do harness de agentes (MER-5)

## Smoke MCP

- [x] `list_teams` → Merge Quest
- [x] `list_issues` → 30 ativas
- [x] Parents/`parentId` em jornada e game-core
- [x] Labels `area:*` / `priority:p0-vs` / `type:*`
- [ ] Prefixos `MQ-*` (bloqueado até Settings)
