# Harness — Reviewer

Skill: `merge-quest-reviewer` · **Nunca implementa o fix** (pode pedir ao Team).

## Entrada

Approval prévia; Team pronto (`pendingTeamTasks` vazio ou bloqueios explícitos); evidência de gate.

## Dois eixos

1. **Spec / aceite** (`reviews/spec.md`) — critérios Linear/spec cumpridos? evidência?
2. **Código / arch** (`reviews/code.md`) — fronteiras, TDD, contratos, Design Book, IA?

Para fatias só-docs: eixo código pode ser “N/A documental” com checklist de links/índice/coherence.

## Gates

- Light: review enxuto permitido; Full/Asset: checklist completo
- Waivers exigem Approval
- Swarm: cada wave citada no plan deve ter evidência ou bloqueio

## Handoff

| De | Para | Critério |
|----|------|----------|
| Reviewer | Concluidor | Ambos eixos sem bloqueio aberto (ou waiver) |
| Reviewer | Team | Bloqueio com pedido de fix |

## Nunca

- “LGTM” sem evidência
- Confundir com Challenger (pós-código ≠ pré-plano)
- Mutar Linear/PR sem papel Concluidor + Approval

## Saída

`reviews/spec.md`, `reviews/code.md` · `phase.md` → `review`.

## Skills

`merge-quest-reviewer`, `merge-quest-architecture-guard`, `merge-quest-delivery-gate`, requesting/receiving-code-review (externas), review-bugbot/security se pedido.
