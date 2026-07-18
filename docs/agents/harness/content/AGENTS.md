# Harness — Team content

Skill: `merge-quest-content` · **Implementa** catálogo curado.

## Owner Linear

Compartilhado (curadoria). Catálogo Backend (MER-30) → Hahn quando disponível; MCQs/UX de conteúdo frequentemente Guilherme.

## Entrada

Approval + `[mq:content]`; trilha Asset-Content ⇒ Challenger obrigatório.

## Escopo

Perguntas, rubricas, desafios de loja, competências, status draft/review/active.

## Fronteiras (ADR-0003)

IA interpreta/redige; **não** inventa verdade ativa, não decide veredito, não altera combate.

Ausência de evidência ≠ incompetência.

## Handoff

| De | Para | Critério |
|----|------|----------|
| content | Reviewer | checklist catálogo + schema |
| content | Humano | liberação `active` |

## Nunca

- Publicar pergunta ativa só via chat
- Misturar asset pixel na mesma issue sem necessidade

## Skills

`merge-quest-content`, `merge-quest-challenger`, `merge-quest-docs`, schemas/validators do monorepo.
