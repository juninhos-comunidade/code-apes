---
name: merge-quest-api
description: Implement Merge Quest API application/infrastructure behind contracts — auth, persistence, AI adapters, checkpoints — with layered architecture and TDD on critical paths. Use for [mq:api] after plan Approval. Controllers have no business rules.
---

# Team — api

## Quando usar

- task `[mq:api]`;
- casos de uso, portas, repos, schemas, sandbox, telemetria.

## Quando não usar

- regra determinística de batalha (vai para `game-core`);
- inventar conteúdo de catálogo ativo;
- mutar banco compartilhado sem Approval.

## Workflow

1. Ler `docs/agents/harness/api/AGENTS.md`, ADR-0004/0005, doc 08 contratos, plan.
2. Camadas: domain ← application ← infrastructure; controllers finos.
3. IA atrás da API; schemas obrigatórios; fallback quando IA falha (ADR-0003).
4. Validação na boundary; versionar contratos.
5. TDD em fluxos críticos; testes de integração onde portas cruzam.
6. Evidência para Reviewer + delivery-gate perfil `api` quando existir.

## Fronteiras

- Domínio sem framework/HTTP/DB.
- Adaptadores implementam portas.
- Sem importar detalhes internos de outros pacotes.

## Regras duras

- Approval para mutações externas / DB compartilhado / serviços pagos.
- **Chat ≠ Approval**.
- Linear `MQ-*`; propor antes de criar issues novas.
- Sem hooks Cursor.

## Saída

- diff + testes + impacto de contrato;
- riscos de infra.

## Referências

- ADR-0003, ADR-0004, ADR-0005, `docs/engineering/08-data-contracts-and-schemas.md`
- `merge-quest-architecture-guard`, `merge-quest-content`, `merge-quest-mcp-setup`
