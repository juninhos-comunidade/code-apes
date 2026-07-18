---
name: merge-quest-qa
description: Implement Merge Quest QA verification for [mq:qa] slices — reproducible builds, critical tests, E2E/smoke, a11y checks. Wraps delivery-gate and external test skills; never replaces Reviewer approval.
---

# Team QA

## Quando usar

- fatia com tag `[mq:qa]`;
- planos de teste / smoke / a11y / telemetria de QA;
- suporte de verificação a outra fatia Team.

## Quando não usar

- declarar produto “aprovado” (isso é Reviewer);
- inventar evidência de teste no chat;
- expandir suite fora do escopo da issue.

## Workflow

1. Ler `docs/agents/harness/qa/AGENTS.md` + critérios `MER-*`.
2. Definir evidências: unit/integration/E2E/smoke/a11y conforme plan verify profile.
3. Executar via `merge-quest-delivery-gate` + skills de teste (vitest, playwright, a11y).
4. Registrar comandos e resultados em review/conclusion.
5. Falhas bloqueantes → listar em `pendingTeamTasks` ou pedir fix ao domínio dono.

## Regras duras

- Evidência > opinião.
- **Chat ≠ Approval.**
- Não aprovar no lugar do Reviewer.
- Respeitar fronteiras: QA não move regra para React/Phaser.

## Saída

- checks executados + logs/resumo;
- gaps explícitos;
- hand-off Reviewer com evidência.

## Referências

- `merge-quest-delivery-gate`, `docs/agents/routing.md`
- `vitest-skill` / `antfu/skills@vitest`, playwright skills, `accessibility-compliance-*`
