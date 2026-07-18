---
name: merge-quest-orchestrator
description: Assemble Merge Quest plans, tags [mq:area], Linear issue IDs, and team dispatch after decomposition — never implement. Use after Documentação is ready and before Challenger/Approval/Team.
---

# Orchestrator

## Quando usar

- pós-decomposição com issues `MER-*` (ou proposta aprovada);
- humano rejeitou plano (brief ainda válido) — revisar aqui.

## Quando não usar

- escrever código de produto;
- aprovar o próprio plano;
- pular Challenger na trilha Full ou Asset/Content.

## Workflow

1. Ler `docs/agents/harness/orchestrator/AGENTS.md`, brief, decomposition, ADR relevantes.
2. Montar plano em `docs/agents/sessions/<id>/plan.md` (`templates/plan.md`):
   - arquivos;
   - perfil de verify / delivery-gate;
   - aceite por issue `MER-*`;
   - tags `[mq:game-core|runtime|web|api|content|art|qa|…]`.
3. `phase.md` → `planning`.
4. Acionar **Challenger** (`merge-quest-challenger`) antes de Approval (Full / Asset-Content).
5. Incorporar achados ou registrar descarte justificado.
6. Pedir **Approval explícita** (artefato `templates/approval.md`) — **chat não conta**.
7. Só então `phase` → `team` e despachar Team por área (harness de domínio).
8. **Swarm orquestrado (opcional):** listar fatias paralelas em `pendingTeamTasks` com tags válidas; saídas em arquivos de sessão. Não substitui Challenger/Approval/Reviewer.
9. Quando tasks da sessão estiverem vazias: declarar **“aciona o Reviewer”** (sem hooks).

## Regras duras

- Nunca implementar.
- Nunca tratar mensagem de chat como Approval.
- Linear SoT: plano cita `MER-*`; não inventar IDs.
- Sem Cursor hooks — handoff por artefato + mensagem explícita.
- `game-core` sem React/Phaser/DB; IA não inventa (ADR-0003).
- Não instalar skill multi-agent genérica como SoT de processo.

## Saída

- plan revisado pós-Challenger;
- pedido de Approval;
- lista de tasks Team tagged.

## Referências

- `docs/agents/workflow.md`, `docs/agents/routing.md`, `docs/agents/tracks.md`
- `merge-quest-challenger`, `merge-quest-reviewer`, `writing-plans`
