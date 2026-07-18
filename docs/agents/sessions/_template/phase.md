# Phase — `_template`

```yaml
sessionId: _template
track: Full # Full | Light | Asset-Content
linearIssues: [] # ex.: [MER-12, MER-13]
phase: helper # helper|decomposition|planning|challenge|approval|team|review|conclusion
pendingTeamTasks: []
approvals: [] # ex.: [approvals/2026-07-18-plan.md]
updatedAt: 2026-07-18T00:00:00Z
updatedBy: agent:template
```

## Checklist de fases

- [ ] **helper** — `brief.md` preenchido; trilha escolhida
- [ ] **decomposition** — spec/ADR ou N/A justificado; proposal Linear se houver issues novas
- [ ] **planning** — `plan.md` com fatias, `[mq:…]`, mapeamento MER-*
- [ ] **challenge** — `challenge.md` (obrigatório Full / Asset-Content)
- [ ] **approval** — artefato em `approvals/` (chat ≠ Approval)
- [ ] **team** — fatias executadas; `pendingTeamTasks` vazio ou bloqueios listados
- [ ] **review** — `reviews/spec.md` + `reviews/code.md` (enxuto na Light)
- [ ] **conclusion** — `conclusion.md`; updates Linear/PR apenas propostos até Approval

## Notas

-
