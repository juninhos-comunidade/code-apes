---
name: merge-quest-delivery-gate
description: Run Merge Quest verification before calling a delivery done — typecheck, lint, tests, contracts, and docs checks scoped by change type. Use at Reviewer step and before Concluidor. No Cursor hooks required; stamps live in session artifacts.
---

# Delivery Gate

## Quando usar

- Reviewer antes do veredito;
- Concluidor validando evidência;
- Orchestrator definindo verify profile no plan.

## Níveis (evolutivos)

| Nível | O quê | Quando |
|-------|--------|--------|
| Session | typecheck + lint + unit do escopo + contratos tocados | sempre |
| Delivery | + testes de integração/pacote conforme área | feature / bug não trivial |
| Release | + E2E/smoke ampliado quando existir | multi-feature / demo |

Comandos canônicos vivem no monorepo (`pnpm`/`turbo`); citar os que existirem no plan. Se o script ainda não existir, rodar checks equivalentes por pacote e registrar no review.

## Perfil por área

| Mudança | Foco |
|---------|------|
| `game-core` | unit determinístico; sem browser |
| `runtime` | adapter + não regredir core |
| `web` | UI + contratos client |
| `api` | unit/integration + schemas |
| `content` | validação de schema/catálogo |
| `art` | validators + previews (art-pipeline) |

## Workflow

1. Ler plan → perfil de verify.
2. Executar checks; falha = não “done”.
3. Anexar saída relevante em `reviews/*` ou conclusion.
4. `docs` tocados → checagem de links/índice quando aplicável.
5. Sem stamp/evidência → Reviewer bloqueia Concluidor.

## Regras duras

- Não declarar pronto só com chat verde.
- **Chat ≠ Approval**.
- Sem exigir Cursor hooks.
- Não expandir suite fora do escopo para “parecer completo”.

## Referências

- `docs/agents/workflow.md`, `docs/engineering/15-local-development-and-reproducibility.md`
- `merge-quest-reviewer`, `merge-quest-architecture-guard`
