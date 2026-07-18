# Conclusion — `2026-07-18-workflow-refinement`

**Trilha:** Full  
**Fase final:** conclusion  
**linearIssues:** MER-5, MER-9, MER-10, MER-12, MER-21, MER-22, MER-23, MER-25, MER-26, MER-30, MER-32

## Resumo

Refinamento máximo do harness do PR #1: feedback loop, deepen de harnesses/skills em todos os domínios, skills externas P0 instaladas e mapeadas, higiene Linear (ownership), dry-runs Full/Light/Asset-Content honestos.

## Arquivos alterados (principais)

- `docs/agents/**` (workflow, CHANGELOG, harnesses, sessions, templates)
- `docs/specs/agent-workflow-committee.spec.md`
- `docs/skills-map.md`, `docs/agents/skill-sets.md`
- `.agents/skills/merge-quest-*` (+ nova `merge-quest-qa`)
- `AGENTS.md`, `README-FIRST.md`, `MANIFEST.md`, `docs/product/10-team-responsibilities.md`
- `docs/linear/proposals/2026-07-18-workflow-refinement.md`

## Testes executados

| Comando | Resultado |
|---------|-----------|
| Inventário skills in-repo vs mapa | 20 merge-quest-* (incl. qa) |
| `npx skills add` P0 package | OK → `~/.agents/skills/` (PromptScript -g falhou) |
| MCP Linear mutate (MER-5/32/assignees/comments) | OK |

## Riscos restantes

- Merge PR #1 pendente
- Hahn / Initiative UI pendentes (MER-32)
- Skills Phaser externas podem ser mal usadas → deny-list + harness

## Decisões tomadas

- game-core → Eduardo; Design Book co-owners; Hahn unassigned
- NEW-A absorvida em MER-5; NEW-B = inventário no skills-map
- Swarm = tática sob Orchestrator

## Propostas (não mutar sem Approval)

- [ ] Linear: MER-5 → Done após merge do PR #1
- [ ] PR/commit: push commits do refinement na branch do PR #1 (pedido humano)
- [x] Linear: hygiene assignees/comments/MER-32 já mutados sob Approval

## Learnings

- Dry-runs sem `approvals/`/`reviews/` mentem o harness
- Install `-g` PromptScript falha; copy em `~/.agents/skills/` funciona
- Ownership Linear deve espelhar harness/docs de responsabilidades

## Learnings disposition

| Learning | Disposition | Owner | Target |
|----------|-------------|-------|--------|
| Dry-runs precisam artefatos reais | practice | Guilherme | learned-practices |
| PromptScript não faz global install | practice | Guilherme | skills-map / mcp-setup note |
| Disposition fecha o feedback loop | promote-to-ADR | Guilherme | já em ADR-0006 + spec §4.1 (done) |

## Próximos passos (dependem de Approval)

1. Commit + push no PR #1 (pedido explícito)
2. Review humano do PR → merge → MER-5 Done
3. Convidar Hahn + Initiative UI (MER-32)
