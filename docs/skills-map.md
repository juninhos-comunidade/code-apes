# Mapa de Skills — Merge Quest

> Complementa o ciclo em [`agent.md`](../agent.md). Skill-sets: [`docs/agents/skill-sets.md`](agents/skill-sets.md).

Usar skill quando houver ganho claro. Skills do usuário anexadas têm prioridade operacional, mas **não** vencem ADR/`AGENTS.md`.

---

## Por etapa SDD

| Etapa | Skills |
|-------|--------|
| 0 DISCOVERY | `merge-quest-helper`, `merge-quest-learned-practices`, brainstorming (opcional) |
| 1 SPEC | `merge-quest-docs`, `merge-quest-decomposition`, `merge-quest-linear` |
| 2 PLANEJAR | `merge-quest-orchestrator`, `writing-plans`, `concise-planning` |
| 2b DESAFIO | `merge-quest-challenger`, `merge-quest-architecture-guard` |
| 3–5 TDD/impl | skill do domínio (`game-core`…`art`) + `typescript-pro` / `vitest-skill` / etc. |
| 6 VALIDAÇÃO | `merge-quest-reviewer`, `code-review-excellence` |
| 6b QUALIDADE | `merge-quest-delivery-gate`, `verification-before-completion`, `lint-and-validate` |
| 7 FECHAMENTO | `merge-quest-concluidor`, `merge-quest-learned-practices`, `merge-quest-linear` |

---

## Por área

### game-core

| Tarefa | Skill |
|--------|-------|
| Regra / combate / estado | `merge-quest-game-core` + TDD |
| Fronteira camadas | `merge-quest-architecture-guard` |

### runtime (Phaser)

| Tarefa | Skill |
|--------|-------|
| Cena, input, VFX | `merge-quest-runtime` |
| Evitar regra na cena | `merge-quest-architecture-guard` |

### web (React)

| Tarefa | Skill |
|--------|-------|
| Shell / HUD / wiring | `merge-quest-web` |
| Performance React | `vercel-react-best-practices` (se aplicável) |

### api

| Tarefa | Skill |
|--------|-------|
| Contratos / Fastify | `merge-quest-api`, `api-design-principles`, `zod-validation-expert` |
| Postgres | `postgres-best-practices` |
| IA gateway | `merge-quest-api` + ADR-0003 |

### content / art

| Tarefa | Skill |
|--------|-------|
| Catálogo / rubrica | `merge-quest-content` |
| Pixel art pipeline | `merge-quest-art-pipeline` |
| Marketplace pixel-art | **deny default** |

### processo / Linear / MCP

| Tarefa | Skill |
|--------|-------|
| Auth/setup MCP | `merge-quest-mcp-setup` |
| Issues / bootstrap | `merge-quest-linear` + doc 12 |
| Bootstrap repo | `merge-quest-bootstrap` |

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

---

## Fluxo integrado (lembrete)

```
Helper → Documentação(+Linear propose) → Orchestrator → Challenger
  → Approval → Team(skill domínio) → Reviewer → Concluidor
```
