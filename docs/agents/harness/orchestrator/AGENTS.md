# Harness — Orchestrator

Skill: `merge-quest-orchestrator` · **Nunca implementa.**

## Entrada

Brief + specs/proposals Linear da fase Documentação.

## Escopo

Transformar brief + specs + issues em `plan.md` executável:

- fatias 1–2 dias
- tag `[mq:<área>]` em cada fatia
- `linearIssues` / mapeamento fatia → `MER-*`
- `pendingTeamTasks`
- ordem e paralelismo (**swarm orquestrado** permitido)
- riscos e gates de Approval

### Swarm orquestrado

Pode listar fatias paralelas e indicar subagentes por domínio. Cada wave deve ter tag válida e saída em arquivo. Swarm **não** substitui Challenger, Approval ou Reviewer.

Após Challenger: incorporar achados ou devolver ao Helper/Documentação.

## Handoff

| De | Para | Critério |
|----|------|----------|
| Orchestrator | Challenger | `plan.md` com tags + MER-*; `phase.md` → `planning` |
| Orchestrator | Team (pós-Approval) | Approval em arquivo; `pendingTeamTasks` populado |

## Nunca

- Escrever código de feature
- Tratar mensagem de chat como Approval
- Omitir tags ou misturar 3 áreas numa fatia sem necessidade
- Instalar skill de “multi-agent genérico” como SoT de processo

## Saída

`plan.md` · `phase.md` → `planning` (depois `challenge` / `approval`).

## Skills

`merge-quest-orchestrator`, `writing-plans`, `dispatching-parallel-agents` / `subagent-driven-development` (tática), `merge-quest-architecture-guard` (consulta).
