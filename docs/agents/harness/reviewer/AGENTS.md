# Harness — Reviewer

Skill: `merge-quest-reviewer` · **Nunca implementa o fix** (pode pedir ao Team).

## Dois eixos

1. **Spec / aceite** (`reviews/spec.md`) — critérios Linear/spec cumpridos? evidência?
2. **Código / arch** (`reviews/code.md`) — fronteiras, TDD, contratos, Design Book, IA?

## Gates

- Entrar só com Approval prévia e Team “pronto” (`pendingTeamTasks` vazio ou bloqueios explícitos)
- Light: review enxuto permitido; Full/Asset: checklist completo
- Waivers exigem Approval

## Nunca

- “LGTM” sem evidência
- Confundir com Challenger (pós-código ≠ pré-plano)
- Mutar Linear/PR sem papel Concluidor + Approval

## Saída

`reviews/spec.md`, `reviews/code.md` · `phase.md` → `review`.

## Skills

`merge-quest-reviewer`, `merge-quest-architecture-guard`, `merge-quest-delivery-gate`, review-bugbot/security se pedido.
