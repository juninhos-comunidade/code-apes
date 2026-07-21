# Phase — `2026-07-21-mer-10-34-aseprite-pipeline`

```yaml
sessionId: 2026-07-21-mer-10-34-aseprite-pipeline
track: Asset-Content
linearIssues: [MER-10, MER-34]
phase: team
pendingTeamTasks: [T-001, T-002, T-003, T-004]
approvals:
  - approvals/2026-07-21-brief.md
  - approvals/2026-07-21-plan-post-challenger.md
  - approvals/2026-07-21-git-pr-mer-10.md
updatedAt: 2026-07-21T22:45:41Z
updatedBy: workflow:team-art
```

## Checklist de fases

- [x] **helper** — brief preenchido; trilha Asset-Content escolhida
- [x] **decomposition** — issues existentes conferidas; sem nova issue necessária
- [x] **planning** — plano com fatias, arquivos, comandos, gates e mapeamento MER-*
- [x] **challenge** — rework incorporado; veredito final `pass`
- [x] **approval** — plano revisão 2 aprovado em arquivo
- [ ] **team** — conteúdo da T-001 produzido; checks canônicos e co-owner pendentes; T-002–T-004 aguardam gate da MER-10
- [ ] **review** — checklist visual, validators e evidências
- [ ] **conclusion** — conclusão e propostas de Linear/PR

## Notas

- Plano pós-Challenger aprovado; Wave A da MER-10 autorizada nesta branch.
- Acesso ao Aseprite foi autorizado; instalação e configuração global permanecem fora do escopo.
- O protótipo aprovado abriu no Aseprite Steam 1.3.17.2, confirmando o fluxo visual local.
- O build Steam não entregou `print()` do Lua ao terminal no smoke em batch. Antes da Wave B, o plano precisa trocar a inspeção por um canal reproduzível e passar novamente por Challenger e Approval.
- Os checks documentais equivalentes passaram, mas os comandos canônicos via `pnpm` estão bloqueados pela tentativa de reconstrução de `node_modules` no OneDrive; nenhum check foi tratado como verde sem exit code `0`.
- O verificador subjacente de reproducibilidade passou 21 checks com Node 24.15.0 e pnpm 11.9.0 informados no processo; o wrapper canônico continua pendente.
- A revisão 3 da Wave B também deve alinhar o contrato de layers à ordem canônica do Design Book: `shadow`, `body`, `equipment`, `effects`, `guides`.
- O pedido de revisão do co-owner e suas evidências estão em `co-owner-review-request.md`.
- Commit, push e PR draft da MER-10 foram autorizados em `approvals/2026-07-21-git-pr-mer-10.md`; merge permanece fora do Approval.
