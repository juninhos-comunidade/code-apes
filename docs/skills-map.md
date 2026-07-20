# Mapa de Skills — Merge Quest

> Complementa o ciclo em [`agent.md`](../agent.md). Skill-sets: [`docs/agents/skill-sets.md`](agents/skill-sets.md).  
> Discovery: in-repo `.agents/skills/merge-quest-*` · externas tipicamente em `~/.agents/skills/` ou `~/.cursor/skills/`.

Usar skill quando houver ganho claro. Skills anexadas têm prioridade operacional, mas **não** vencem ADR/`AGENTS.md`.

**Barra P0 externas:** ≥1K installs (preferir ≥10K) **ou** fonte oficial · não violar deny-list.

---

## Por etapa SDD

| Etapa | Skills |
|-------|--------|
| 0 DISCOVERY | `merge-quest-helper`, `merge-quest-learned-practices`, `grill-me` / grilling (opcional) |
| 1 SPEC | `merge-quest-docs`, `merge-quest-decomposition`, `merge-quest-linear`, `documentation-and-adrs` |
| 2 PLANEJAR | `merge-quest-orchestrator`, `writing-plans`, `dispatching-parallel-agents`, `subagent-driven-development` |
| 2b DESAFIO | `merge-quest-challenger`, `merge-quest-architecture-guard`, `improve-codebase-architecture`, `domain-modeling` |
| 3–5 TDD/impl | skill do domínio + `tdd` / `test-driven-development` + `typescript-pro` / `vitest` |
| 6 VALIDAÇÃO | `merge-quest-reviewer`, `code-review`, `requesting-code-review`, `receiving-code-review` |
| 6b QUALIDADE | `merge-quest-delivery-gate`, `merge-quest-qa`, `verification-before-completion`, `lint-and-validate` |
| 7 FECHAMENTO | `merge-quest-concluidor`, `merge-quest-learned-practices`, `merge-quest-linear` |

---

## Por área (in-repo + externas)

### game-core (owner: Eduardo)

| Tarefa | Skill | Status |
|--------|-------|--------|
| Regra / combate / estado | `merge-quest-game-core` + TDD | in-repo |
| Fronteira camadas | `merge-quest-architecture-guard` | in-repo |
| Domain modeling | `domain-modeling` | externa P0 |

### runtime (Phaser, owner: Eduardo)

| Tarefa | Skill | Status |
|--------|-------|--------|
| Cena, input, VFX | `merge-quest-runtime` | in-repo |
| Setup Phaser | `game-setup-and-config`, `game-object-components` | externa oficial — **sem regra na cena** |
| Evitar regra na cena | `merge-quest-architecture-guard` | in-repo |

### web (React, owner: Guilherme)

| Tarefa | Skill | Status |
|--------|-------|--------|
| Shell / HUD / wiring | `merge-quest-web` | in-repo |
| Performance / composition | `vercel-react-best-practices`, `vercel-composition-patterns` | externa P0 |
| Guidelines UI | `web-design-guidelines` | externa P0 |

### api (owner: Hahn quando convidado)

| Tarefa | Skill | Status |
|--------|-------|--------|
| Contratos / Fastify | `merge-quest-api`, `api-design-principles`, `zod-validation-expert` | in-repo + local |
| Postgres / Supabase | `supabase-postgres-best-practices`, `supabase` | externa oficial |
| IA gateway | `merge-quest-api` + ADR-0003 | in-repo |

### content / art

| Tarefa | Skill | Status |
|--------|-------|--------|
| Catálogo / rubrica | `merge-quest-content` | in-repo |
| Pixel art pipeline | `merge-quest-art-pipeline` | in-repo |
| Marketplace pixel-art | — | **deny default** (avaliado; não instalar como estilo) |

### qa

| Tarefa | Skill | Status |
|--------|-------|--------|
| Fatia `[mq:qa]` | `merge-quest-qa` + `merge-quest-delivery-gate` | in-repo |
| Unit | `vitest` / `vitest-skill` | externa / local |
| E2E | `webapp-testing`, `playwright-cli` | externas P0 (anthropics / microsoft) |
| A11y | `accessibility-compliance-*` | local se presente |

### processo / Linear / MCP

| Tarefa | Skill | Status |
|--------|-------|--------|
| Auth/setup MCP | `merge-quest-mcp-setup` | in-repo |
| Issues | `merge-quest-linear` + doc 12 | in-repo |
| Bootstrap repo | `merge-quest-bootstrap` | in-repo |
| Swarm genérico como SoT | — | **deny** (committee MQ orquestra) |
| Swarm tática | `dispatching-parallel-agents` sob Orchestrator | permitida |

---

## Inventário externas P0 (2026-07-18)

**SoT no repo:** skills P0 vivem em [`.agents/skills/`](../.agents/skills/) (ao lado das `merge-quest-*`) e versões em [`skills-lock.json`](../skills-lock.json). Colegas recebem via `git pull` — sem instalação extra para o workflow MQ.

**Proveniência:** [`docs/agents/external-skills-inventory.json`](agents/external-skills-inventory.json) registra repositório, commit auditado, licença, caminho e hash. `skills-lock.json` continua sendo o lock operacional; o inventário é o registro de auditoria e ambos devem permanecer sincronizados.

**Onboarding / refresh:**

Shell POSIX:

```sh
# após clone ou para restaurar a partir do lock
npx skills experimental_install

# opcional: espelho global do operador (PromptScript -g falha; copy em ~/.agents/skills ok)
npx skills add <owner/repo> -s <skill> -g -y --copy
```

PowerShell:

```powershell
# após clone ou para restaurar a partir do lock
npx.cmd skills experimental_install

# opcional: espelho global do operador
npx.cmd skills add <owner/repo> -s <skill> -g -y --copy
```

Antes de atualizar uma externa, revise o diff, confirme a licença e atualize lock e inventário no mesmo PR.

| Skill | Pacote | Papel MQ |
|-------|--------|----------|
| grill-me | mattpocock/skills | Helper |
| tdd | mattpocock/skills | Team TDD |
| code-review | mattpocock/skills | Reviewer |
| improve-codebase-architecture | mattpocock/skills | Challenger/guard |
| domain-modeling | mattpocock/skills | game-core/api |
| writing-plans | obra/superpowers | Orchestrator |
| executing-plans | obra/superpowers | Team |
| dispatching-parallel-agents | obra/superpowers | Orchestrator swarm |
| subagent-driven-development | obra/superpowers | Orchestrator |
| verification-before-completion | obra/superpowers | Gate |
| requesting-code-review | obra/superpowers | Reviewer |
| receiving-code-review | obra/superpowers | Team |
| test-driven-development | obra/superpowers | Team |
| documentation-and-adrs | addyosmani/agent-skills | Docs |
| vercel-react-best-practices | vercel-labs/agent-skills | web |
| web-design-guidelines | vercel-labs/agent-skills | web |
| vercel-composition-patterns | vercel-labs/agent-skills | web |
| supabase-postgres-best-practices | supabase/agent-skills | api |
| supabase | supabase/agent-skills | api |
| vitest | antfu/skills | qa / core |
| game-setup-and-config | phaserjs/phaser | runtime (ressalva) |
| game-object-components | phaserjs/phaser | runtime (ressalva) |
| webapp-testing | anthropics/skills | qa |
| playwright-cli | microsoft/playwright-cli | qa |

### Avaliado / não instalado

| Skill | Motivo |
|-------|--------|
| pixel-art-sprites / pixel-art marketplace | Deny default de estilo; Design Book + art-pipeline |
| wshobson workflow-orchestration-patterns | Orquestração genérica ≠ committee MQ |
| Linear marketplace fraca | Usar MCP + `merge-quest-linear` |

### Locais úteis já presentes (`~/.cursor/skills/`)

`typescript-pro`, `zod-validation-expert`, `postgres-best-practices`, `code-review-excellence`, `frontend-*`, `api-*`, `vitest-skill`, `grilling`, `lint-and-validate`, a11y, etc.

---

## Por tipo de pedido

| Pedido | Caminho |
|--------|---------|
| Feature cross-cutting | Trilha Full + skills process → domain |
| Bug local | Light + domínio + teste repro |
| Novo asset | Asset-Content + art-pipeline + challenger |
| “Cria issues no Linear” | decomposition + linear; **Approval** antes de mutar |
| Review de PR | reviewer + bugbot/security se pedido |
| CI quebrada | `gh-fix-ci` / github-actions-debugger |
| Refino de processo | Full + `[mq:docs]`/`[mq:process]` + feedback loop |

---

## Fluxo integrado (lembrete)

```
Helper → Documentação(+Linear propose) → Orchestrator → Challenger
  → Approval → Team(skill domínio; swarm tático ok) → Reviewer → Concluidor
  → Learnings disposition → Practices / promote proposal
```

## Deny-list (resumo)

1. Skills que empurram regra de jogo para React/Phaser.
2. Skills de arte que inventam estilo fora do Design Book.
3. Skills que tratam chat como Approval.
4. Skills que criam backlog markdown paralelo ao Linear.
5. Qualquer skill que exija hooks Cursor para “funcionar”.
6. Multi-agent genérico como substituto do committee MQ.
