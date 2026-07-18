# Agentes — Merge Quest

Índice do committee multi-agente. Hierarquia: [`AGENTS.md`](../../AGENTS.md) → [`agent.md`](../../agent.md) → este diretório → harnesses.

## Leitura rápida

| Doc | Para quê |
|-----|----------|
| [`workflow.md`](workflow.md) | Fluxo, papéis, autonomia pós-Approval |
| [`tracks.md`](tracks.md) | Full / Light / Asset-Content |
| [`routing.md`](routing.md) | Pedido → domínio Team + tag |
| [`decomposition-linear.md`](decomposition-linear.md) | Spec no repo + issues no Linear |
| [`glossary-process.md`](glossary-process.md) | Vocabulário do processo |
| [`mcp-setup.md`](mcp-setup.md) | Linear / Supabase / GitHub |
| [`mcp-linear-evaluation.md`](mcp-linear-evaluation.md) | Veredito smoke Linear MCP |
| [`skill-sets.md`](skill-sets.md) | Conjuntos de skills |
| [`../skills-map.md`](../skills-map.md) | Mapa por etapa/área |
| [`../specs/agent-workflow-committee.spec.md`](../specs/agent-workflow-committee.spec.md) | Contrato normativo |
| [`../architecture/adr/ADR-0006-agent-workflow-committee.md`](../architecture/adr/ADR-0006-agent-workflow-committee.md) | ADR |

## Papéis

| Papel | Harness | Implementa? |
|-------|---------|-------------|
| Helper | [`harness/helper/`](harness/helper/AGENTS.md) | Não |
| Documentação | [`harness/documentation/`](harness/documentation/AGENTS.md) | Não |
| Orchestrator | [`harness/orchestrator/`](harness/orchestrator/AGENTS.md) | Não |
| Challenger | [`harness/challenger/`](harness/challenger/AGENTS.md) | Não |
| Team game-core | [`harness/game-core/`](harness/game-core/AGENTS.md) | Sim |
| Team runtime | [`harness/runtime/`](harness/runtime/AGENTS.md) | Sim |
| Team web | [`harness/web/`](harness/web/AGENTS.md) | Sim |
| Team api | [`harness/api/`](harness/api/AGENTS.md) | Sim |
| Team content | [`harness/content/`](harness/content/AGENTS.md) | Sim |
| Team art | [`harness/art/`](harness/art/AGENTS.md) | Sim |
| Team qa | [`harness/qa/`](harness/qa/AGENTS.md) | Sim |
| Reviewer | [`harness/reviewer/`](harness/reviewer/AGENTS.md) | Não |
| Concluidor | [`harness/concluidor/`](harness/concluidor/AGENTS.md) | Sim (só docs/fecho; não feature) |

## Fluxo (Full)

```
Helper → Documentação(+Linear propose) → Orchestrator → Challenger
  → Approval (arquivo) → Team → Reviewer → Concluidor
```

Contexto: `sessions/<id>/`. Issues: Linear `MQ-*`. **Sem** hooks Cursor. **Chat ≠ Approval.**

## Templates e sessões

- Templates: [`templates/`](templates/)
- Sessão modelo: [`sessions/_template/`](sessions/_template/)
- Sessões reais: `sessions/<sessionId>/`
