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

## Template de descrição (obrigatório)

```markdown
## Objetivo

(1–3 frases; entrega verificável)

## Escopo

- In: …
- Out: …

## Aceite (DoD)

- [ ] critério observável / testável
- [ ] evidência (teste, comando, preview, schema…)
- [ ] fronteira MQ (game-core / IA / Design Book) quando aplicável
- [ ] (mínimo 4 checks)

## Verify

- perfil: Session | Delivery | Release
- checks: …

## Docs

- path/canônico — [abrir no GitHub](https://github.com/juninhos-comunidade/code-apes/blob/<branch>/path)
- ADR-… → path real em `docs/architecture/adr/` (ver `docs/architecture/adr/README.md`)
- Índice Linear: https://linear.app/mergequest/document/docs-canonicos-indice-p0-vs-2ea61c9e3079

## Depende de

- MER-… (ou `nenhuma`)

## Blocks

- MER-… (opcional; quem fica bloqueado)

## Owner

Eduardo | Hahn | Guilherme | co-owners

## [mq:área]

game-core | runtime | web | api | content | art | qa | docs | process
```

## Barra de qualidade

| Check | Regra |
|-------|--------|
| Granularidade | 1–2 dias, um assignee, um project, sem misturar disciplinas |
| Aceite | ≥4 itens testáveis; evidência implícita ou explícita |
| Deps | só IDs `MER-*` ou `nenhuma` |
| Owner | campo Owner preenchido; assignee = owner principal (Hahn unassigned + `blocked` até convite) |
| Tag | `[mq:área]` alinhada a `docs/agents/routing.md` |
| Verify | Session / Delivery / Release conforme `merge-quest-delivery-gate` |

## Granularidade

Issue = entrega verificável, 1–2 dias, um owner, um project, docs linkados, sem misturar disciplinas.
