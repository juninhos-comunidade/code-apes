# Nomenclatura Linear — Merge Quest

## Prefixo de issue

- Canônico no repo e no processo: **`MER-*`**
- Team identifier no Linear: **`MER`** (Settings → Teams → Merge Quest → Identifier)
- Não renomear para `MQ` — o workspace e o contrato do repo usam `MER-*`

Branches: `tipo/MER-123-descricao` (ver `CONTRIBUTING.md` / `AGENTS.md`).

## Labels (usar estas)

| Grupo | Labels |
|-------|--------|
| Área | `area:product`, `area:design`, `area:react`, `area:phaser`, `area:backend`, `area:database`, `area:ai`, `area:art`, `area:content`, `area:qa` |
| Prioridade produto | `priority:p0-vs`, `priority:p0`, `priority:p1`, `priority:p2` |
| Tipo | `type:feature`, `type:bug`, `type:research`, `type:content`, `type:asset`, `type:tech-debt` |
| Fluxo | `needs-review`, `blocked` |

Não preferir labels default `Feature` / `Improvement` / `Bug` — usar `type:*`.

## Campo Priority do Linear

Alinhar ao label de produto:

| Label | Linear priority |
|-------|-----------------|
| `priority:p0-vs` | 1 Urgent |
| `priority:p0` | 2 High |
| `priority:p1` | 3 Medium |
| `priority:p2` | 4 Low |

## Template de descrição

```markdown
## Objetivo

## Aceite
- [ ] …

## Docs
- path/canônico

## Depende de
- MER-…

## Owner
Eduardo | Hahn | Guilherme
```

## Granularidade

Issue = entrega verificável, 1–2 dias, um owner, um project, docs linkados, sem misturar disciplinas.
