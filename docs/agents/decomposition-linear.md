# Decomposição + Linear

## Princípio

- **Repo** = specs, ADRs, RFCs, contratos, Design Book, sessões.
- **Linear** = issues verificáveis (`MQ-n`), status, assignee, prioridade, milestone, labels.
- **Não** criar `docs/backlog/` canônico (Epic/US markdown como SoT).

Espelho offline opcional: `docs/linear/proposals/<data>-*.md` — nunca substitui o Linear após sync.

## Quando decompor

Toda solicitação Full (e a maioria Light) vira:

1. **Brief** (Helper) — problema, trilha, fatos/decisões
2. **Spec/ADR** se houver contrato, comportamento ou decisão arquitetural
3. **Issues Linear** — uma entrega verificável por issue (1–2 dias, um responsável, critérios, deps, link a doc)

Granularidade: seguir [`docs/linear/12-linear-bootstrap.md`](../linear/12-linear-bootstrap.md).

## Fluxo Documentação ↔ Linear

```
Propor (proposal + preview MCP)
  → Approval em arquivo
  → Criar/atualizar via plugin-linear-linear (ou UI)
  → Auditar listagem vs proposta
  → Referenciar MQ-* em phase.md e plan.md
```

**Proibido:** criar Project/label/issue “porque o chat pediu” sem Approval quando a ação muta o workspace.

## Campos mínimos de uma issue proposta

- Título curto
- Descrição / contexto
- Critérios de aceite testáveis
- Área (label `area:*` quando existir)
- Tipo (`type:feature|bug|…`)
- Prioridade
- Dependências (`blocks` / texto)
- Link para spec/ADR/sessão no repo
- Sugestão de tag `[mq:<área>]`

## Sessão ↔ issues

Em `phase.md`:

```yaml
linearIssues: [MQ-12, MQ-13]
```

Cada fatia do `plan.md` aponta para ≥1 `MQ-*` (ou declara chore sem issue com justificativa Light + Approval).

## Fechamento

Concluidor:

1. Resume evidências vs critérios
2. **Propõe** comentário/status Linear
3. Só muta após Approval (ou política explícita da sessão)

## MCP

Setup: [`mcp-setup.md`](mcp-setup.md). Avaliação: [`mcp-linear-evaluation.md`](mcp-linear-evaluation.md).  
Se MCP cair: proposal file + UI Linear; processo continua.
