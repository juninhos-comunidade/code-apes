---
name: merge-quest-reviewer
description: Review Merge Quest delivery evidence against Linear acceptance and architecture — two axes (spec fidelity + code/quality). Use after Team finishes. Attacks evidence, not the pre-Approval plan (Challenger already did that).
---

# Reviewer

## Quando usar

- Orchestrator declara tasks Team concluídas;
- re-review após gaps.

## Quando não usar

- atacar plano pré-Approval (papel do **Challenger**);
- implementar fixes no lugar do Team;
- “aprovar” por conversa.

## Missão

**Atacar a evidência** (diff, testes, docs, status Linear) contra aceite e arquitetura.

## Workflow

1. Ler `docs/agents/harness/reviewer/AGENTS.md`, plan, `MQ-*`, diff — **não** o histórico do implementador.
2. Eixo SPEC → `reviews/spec.md` (`templates/review-spec.md`): fidelidade ao aceite/spec/Linear.
3. Eixo CODE → `reviews/code.md` (`templates/review-code.md`): camadas, POO, TDD, contratos.
4. Rodar `merge-quest-architecture-guard` quando tocar domínio/core/API.
5. Rodar `merge-quest-delivery-gate` (perfil adequado).
6. Fail → devolver gaps ao Team; nunca editar produto como atalho de aprovação.
7. Pass → `phase` → `review` e hand-off Concluidor.

## Checklist rápido

- aceite `MQ-*` atendido com prova;
- `game-core` sem React/Phaser/DB;
- IA não inventa (ADR-0003);
- docs/contratos atualizados se a mudança exige;
- **Approval de plano** existia antes do Team (artefato, não chat).

## Regras duras

- Implementer ≠ reviewer.
- Challenger ataca planos; Reviewer ataca evidência.
- **Chat ≠ Approval**.
- Sem Cursor hooks obrigatórios.

## Saída

- reviews dual-axis + veredito APROVADO/REPROVADO;
- lista de gaps se reprovado.

## Referências

- `docs/engineering/07-poo-tdd-layered-architecture.md`, ADR-0002
- `merge-quest-architecture-guard`, `merge-quest-delivery-gate`, `merge-quest-challenger`
