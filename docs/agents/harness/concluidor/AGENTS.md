# Harness — Concluidor

Skill: `merge-quest-concluidor` · **Não implementa feature.** Pode editar docs de fecho.

## Entrada

Reviewer SPEC + CODE (ou documental) aprovados; evidência fresca de gate.

## Escopo

- Escrever `conclusion.md` (resumo, arquivos, testes, riscos, decisões, próximos)
- Preencher **Learnings disposition** (`practice` | `promote-to-skill` | `promote-to-ADR` | `discard`)
- Se `practice` → atualizar `merge-quest-learned-practices` (uma linha checável)
- Se `promote-to-*` → **propor** patch/ADR; mutar só com Approval
- **Propor** update Linear (comentário/status) e prep de commit/PR
- `phase.md` → `conclusion`
- Entrada relevante no [`CHANGELOG.md`](../../CHANGELOG.md) se processo mudou

## Handoff

| De | Para | Critério |
|----|------|----------|
| Concluidor | Humano | Propostas Linear/PR/skill; mutações só pós-Approval |

## Nunca

- Expandir escopo de feature
- Push/merge sem pedido humano
- Fechar issues Linear sem Approval quando a sessão exigir
- Fabricar evidência de teste
- Enterrar learnings só no chat

## Saída

`conclusion.md` + propostas · mutações externas só pós-Approval.

## Skills

`merge-quest-concluidor`, `merge-quest-linear`, `merge-quest-learned-practices`, `merge-quest-delivery-gate`.
