# Spec — Agent Workflow Committee

**Status:** normativa  
**ADR:** [ADR-0006](../architecture/adr/ADR-0006-agent-workflow-committee.md)  
**Data:** 2026-07-18

## 1. Objetivo

Definir o contrato verificável do committee multi-agente Merge Quest: papéis, fases, trilhas, artefatos, SoT Linear↔repo e gates de Approval.

## 2. Escopo

### In

- Papéis, trilhas, fases, tags `[mq:<área>]`
- Sessões em `docs/agents/sessions/<id>/`
- Contrato Linear (`MQ-*`) ↔ repo
- Challenger pré-Team
- Ausência de hooks Cursor no núcleo

### Out

- Implementação de features de jogo
- Vendorar skills externas em massa
- Initiative/Projects Linear (cobertos pelo doc 12 + Approval)

## 3. Fontes de verdade

| Artefato | SoT | Espelho |
|----------|-----|---------|
| Issue, status, assignee, priority, milestone, labels | Linear (`MQ-n`) | Proposals opcionais em `docs/linear/proposals/` (offline) |
| Spec, ADR, RFC, contratos, Design Book | Repo | — |
| Sessão (brief, plan, challenge, reviews, conclusion, approvals) | Repo | — |
| Estado/regras de jogo | `game-core` | — |

**Proibido:** árvore canônica `docs/backlog/` com Epic/US como verdade paralela ao Linear.

## 4. Papéis

| Papel | Implementa? | Responsabilidade | Saída tipica |
|-------|-------------|------------------|--------------|
| Helper | Não | Discovery, lentes MQ, trilha, `[FATO]`/`[DECISÃO]` | `brief.md` |
| Documentação | Não | Spec/ADR/RFC; propor issues Linear | docs + proposal |
| Orchestrator | Não | Plano fatiado, tags, `pendingTeamTasks` | `plan.md` |
| Challenger | Não | Atacar plano/escopo/fronteiras | `challenge.md` |
| Team (`game-core`…`qa`) | Sim | TDD + implementação na área | código/assets |
| Reviewer | Não | Eixo spec + eixo código | `reviews/*` |
| Concluidor | Não | Fechar sessão; propor Linear/PR | `conclusion.md` |

Humano: única fonte de **Approval** e de mutações sensíveis.

## 5. Fases

Ordem canônica:

`helper` → `decomposition` → `planning` → `challenge` → `approval` → `team` → `review` → `conclusion`

### Critérios de avanço

| De → Para | Pré-condição |
|-----------|--------------|
| helper → decomposition | `brief.md` existente; trilha escolhida |
| decomposition → planning | Spec/ADR necessários versionados **ou** justificados N/A (Light); proposal Linear se houver issues novas |
| planning → challenge | `plan.md` com fatias, `[mq:…]`, `linearIssues[]` |
| challenge → approval | `challenge.md` com veredito; plan atualizado se achados bloqueantes |
| approval → team | Artefato Approval explícito na sessão |
| team → review | Critérios da fatia cumpridos ou bloqueio documentado; lista de tasks pendentes vazia ou justificada |
| review → conclusion | Ambos eixos Reviewer sem bloqueio aberto (ou waivers aprovados) |
| conclusion | `conclusion.md`; updates Linear/PR **propostos** (mutate só com Approval) |

Light pode colapsar `decomposition`+`challenge` conforme [`tracks.md`](../agents/tracks.md), mantendo Approval.

## 6. Trilhas

Ver [`docs/agents/tracks.md`](../agents/tracks.md). Resumo normativo:

- **Full:** Challenger obrigatório; Documentação normalmente ativa.
- **Light:** Challenger opcional; Approval leve obrigatória.
- **Asset-Content:** Challenger obrigatório; Reviewer usa checklist Design Book / catálogo.

## 7. Artefatos de sessão

Diretório: `docs/agents/sessions/<sessionId>/`

| Arquivo | Obrigatório |
|---------|-------------|
| `brief.md` | Sim (exceto sessão só-review documentada) |
| `plan.md` | Sim antes de `team` |
| `challenge.md` | Full e Asset-Content; Light se escopo expandir |
| `phase.md` | Sim — track, `linearIssues`, checklist de fases |
| `reviews/spec.md` | Antes de conclusion (enxuto na Light) |
| `reviews/code.md` | Antes de conclusion quando houve código/assets |
| `conclusion.md` | Sim ao fechar |
| `approvals/*.md` | Sim para entrar em `team` e para mutações Linear/externas |

Templates: [`docs/agents/templates/`](../agents/templates/) e [`sessions/_template/`](../agents/sessions/_template/).

### `phase.md` (campos mínimos)

```yaml
sessionId: string
track: Full | Light | Asset-Content
linearIssues: [MQ-n, ...]
phase: helper|decomposition|planning|challenge|approval|team|review|conclusion
pendingTeamTasks: [string]
approvals: [path]
updatedAt: ISO-8601
```

## 8. Tags `[mq:<área>]`

Áreas válidas: `game-core`, `runtime`, `web`, `api`, `content`, `art`, `qa`, `docs`, `process`.

Orchestrator **deve** taggear cada fatia do plano. Fatia sem tag é inválida para execução Team.

## 9. Approval

- **Definição:** arquivo sob `approvals/` (ou seção inequívoca referenciada por `phase.md`) com: o quê foi aprovado, por quem, quando, escopo, trilha, IDs Linear.
- **Chat ≠ Approval.** Frases no chat são hipóteses até o artefato existir.
- Mutar Linear, banco compartilhado, deploy, secrets: Approval dedicada.

## 10. Linear

Workspace: mergequest · Team: Merge Quest · Prefixo: `MQ-`.

Fluxo Documentação:

1. Propor (proposal file e/ou preview MCP)
2. Approval humana
3. Criar/atualizar via MCP `plugin-linear-linear` (ou UI)
4. Auditar listagem vs proposta

Concluidor **propõe** fechamento/comentário; não fecha issue sem Approval quando a política da sessão exigir.

## 11. Critérios de aceite desta spec

- [ ] ADR-0006 aceita e referenciada
- [ ] Docs em `docs/agents/` alinhados a esta spec
- [ ] Harnesses por papel/domínio existem
- [ ] Templates e `_template` de sessão cobrem artefatos obrigatórios
- [ ] Dry-run mental Full + Light possível sem hooks
- [ ] Nenhum doc exige `docs/backlog/` canônico

## 12. Não-objetivos de qualidade de produto

Esta spec não define cobertura de código do jogo; gates de produto permanecem em `AGENTS.md` e specs de feature.
