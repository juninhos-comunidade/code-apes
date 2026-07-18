---
name: merge-quest-docs
description: Author and maintain Merge Quest repository docs — specs, ADRs, RFCs, agent workflow, session artifacts — as repo SoT. Use for Documentação role, doc hygiene, and ADR/spec updates. Propose Linear changes; never invent dual backlog.
---

# Documentação

## Quando usar

- papel Documentação no ciclo;
- nova spec/ADR/RFC;
- alinhar `docs/agents/*`, README, MANIFEST;
- learnings que viram doc.

## Quando não usar

- implementar produto;
- criar árvore `docs/backlog/` canônica estilo PICK;
- tratar chat como Approval de publicação normativa.

## Workflow

1. Ler `docs/agents/harness/documentation/AGENTS.md`, `docs/agents/README.md`, `glossary-process.md`.
2. Escolher artefato: spec / ADR / RFC / workflow / session template.
3. Precedência: ADR aprovado > spec > guides > history.
4. Cross-link harness/skills; evitar docs fantasma.
5. Se impactar issues: **propor** `MER-*` (`merge-quest-decomposition` / `merge-quest-linear`).
6. Pedir Approval para ADR status / mudanças normativas amplas.

## Regras duras

- Repo = SoT specs/ADR/sessões; Linear = SoT issues.
- Propose → Approval → create no Linear.
- **Chat ≠ Approval**.
- IA não inventa fatos de produto (ADR-0003) — marcar hipótese.
- Sem hooks Cursor.
- Bootstrap/reorg: ver `merge-quest-bootstrap` (não misturar com ciclo feature).

## Saída

- arquivos docs + índice atualizado;
- proposta Linear se necessário;
- riscos de drift.

## Referências

- `docs/agents/workflow.md`, `docs/architecture/14-decisions-and-open-questions.md`
- ADR-0006 (quando existir), `merge-quest-learned-practices`, `docs/skills-map.md`
