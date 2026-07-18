---
name: merge-quest-content
description: Author and curate Merge Quest technical catalog content — questions, rubrics, challenges, competencies — with human review. Use for [mq:content] / Asset-Content track. AI may draft; AI must not invent active truth or verdicts (ADR-0003).
---

# Team — content

## Quando usar

- task `[mq:content]` ou trilha Asset/Content;
- catálogo, rubricas, desafios de loja, copy técnica curada.

## Quando não usar

- ativar pergunta sem revisão humana;
- deixar IA decidir veredito/combate;
- misturar asset pixel com catálogo na mesma issue sem necessidade.

## Workflow

1. Ler `docs/agents/harness/content/AGENTS.md`, doc 04, ADR-0003, plan.
2. Trilha Asset/Content: Challenger obrigatório no plano.
3. Rascunhar no schema/contrato; marcar status (draft / review / active).
4. IA: interpretar/redigir; **humano** libera ativo.
5. Ausência de evidência ≠ incompetência (princípio de produto).
6. Validadores/schemas; hand-off Reviewer com checklist de conteúdo.

## Regras duras (ADR-0003)

IA **não** pode:

- inventar resposta correta;
- criar pergunta ativa sem revisão;
- fabricar competência;
- alterar resultado de combate;
- decidir veredito sem motor;
- ignorar rubrica.

## Processo

- **Chat ≠ Approval** (nem para “pode publicar”).
- Linear SoT `MER-*`; propose → create.
- Sem hooks Cursor.

## Saída

- entradas de catálogo + status;
- notas de revisão humana pendentes;
- links a schemas.

## Referências

- `docs/product/04-ai-assessment-and-content.md`, ADR-0003
- `merge-quest-challenger`, `merge-quest-art-pipeline`, `merge-quest-docs`
