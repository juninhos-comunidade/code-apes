# Proposal Linear — workflow refinement — 2026-07-18

**Sessão:** `docs/agents/sessions/2026-07-18-workflow-refinement/`  
**PR:** https://github.com/juninhos-comunidade/code-apes/pull/1  
**Status:** Approved (`approvals/2026-07-18-linear-mutate.md`) · mutações aplicadas 2026-07-18  
**Nota:** NEW-A absorvida em MER-5; NEW-B = inventário em `docs/skills-map.md` (não criada)

## Ownership (acordado)

| Issues | Assignee | Owner (descrição) |
|--------|----------|-------------------|
| MER-9, MER-21, MER-22, MER-23 (game-core) | Eduardo Neves de Souza | Eduardo |
| MER-10 (Design Book) | Eduardo Neves de Souza | Eduardo + Guilherme |
| MER-12, MER-25, MER-26, MER-30 (API/Hahn) | *(unassigned)* | Hahn (quando convidado) |
| MER-5 | Guilherme de Deus Dalosto | Guilherme |

## Updates em issues existentes

### MER-5 — Bootstrap agent workflow

- Remover aceite “Team identifier Linear = MQ”
- Manter prefixo canônico `MER-*`
- Acrescentar aceite: feedback loop (learnings disposition) + dry-runs honestos + skills-map P0
- Link PR #1

### MER-32 — retitular

- **De:** Linear — identifier MQ + audit pós-repopulação  
- **Para:** Linear — higiene pós-população (Hahn, Initiative, audit)
- Remover critérios de rename MER→MQ
- Aceite restante: Hahn convidado; Initiative na UI; audit doc coerente com `MER-*`

### Comentários (Hahn blocked)

Em MER-12, MER-25, MER-26, MER-30: comentário `blocked: aguardando convite Hahn ao workspace`.

## Issues novas propostas

### NEW-A — Agent quality feedback loop

- **Título:** Processo — feedback loop de qualidade dos agentes  
- **Project:** Arquitetura e infraestrutura  
- **Labels:** `type:tech-debt`, `priority:p0`, `area:product`  
- **Assignee:** Guilherme  
- **Aceite:**
  - [ ] Spec/workflow com Learnings disposition
  - [ ] Templates conclusion + concluidor/helper atualizados
  - [ ] `docs/agents/CHANGELOG.md` iniciado
  - [ ] Promote practice→skill só via proposal + Approval
- **Docs:** ADR-0006, `docs/agents/workflow.md`, sessão refinement
- **Nota:** pode ser absorvida por MER-5 se Approval preferir; caso contrário criar `MER-*`

### NEW-B — External skills P0 inventory (opcional)

- **Título:** Processo — inventário skills externas P0  
- **Labels:** `type:research`, `priority:p1`, `area:product`  
- **Assignee:** Guilherme  
- **Aceite:**
  - [ ] Matriz present/install/deny em `docs/skills-map.md`
  - [ ] Barra ≥1K ou fonte oficial
  - [ ] Pixel-art marketplace documentado deny-default

## Mutações só após Approval

Arquivo esperado: `docs/agents/sessions/2026-07-18-workflow-refinement/approvals/*.md`
