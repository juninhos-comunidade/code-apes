# Changelog — workflow de agentes

Alterações de processo (committee, harnesses, skills, trilhas). Não cobre features de produto.

## 2026-07-20 — proveniência das skills externas

- skills externas preservadas com inventário de fonte, commit, licença, caminho e hash;
- gate de reprodutibilidade detecta drift entre conteúdo vendorizado, lock e inventário;
- onboarding de skills documentado para PowerShell e shell POSIX;
- nova vendorização externa exige auditoria explícita no mesmo PR.

## 2026-07-18 — refinement harness + feedback loop

- Feedback loop: Learnings disposition (`practice` | `promote-to-skill` | `promote-to-ADR` | `discard`) em conclusion
- Swarm orquestrado permitido como tática sob Orchestrator (não substitui committee)
- Skill `merge-quest-qa` para simetria com harness `[mq:qa]`
- Discovery de skills documentada (`.agents/skills/` canônico)
- Dry-runs alinhados a `MER-*` e tags válidas
- Prefix canônico Linear permanece `MER-*` (sem rename MQ)
