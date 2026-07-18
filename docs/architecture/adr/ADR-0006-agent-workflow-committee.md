# ADR-0006 — Committee de agentes (workflow Merge Quest)

## Status

**Aceita / Revisável** — 2026-07-18.

Revisões futuras exigem atualização desta ADR, da spec normativa e do [`docs/agents/CHANGELOG.md`](../../agents/CHANGELOG.md), sem expandir escopo de produto. Feedback loop: Learnings disposition na conclusion (spec §4.1).

## Contexto

O time é pequeno; o produto cruza `game-core`, Phaser, React, API, conteúdo curado e arte pixel. Precisamos de um processo multi-agente **agnóstico de ferramenta**, com cerimônia proporcional ao risco, sem dual backlog e sem Approval implícita no chat.

Inspiração: papéis e artefatos do PICK — **adaptados** (Linear SoT, Challenger pré-execução, trilhas, sem hooks Cursor, sem `docs/backlog/` canônico).

## Decisão

Adotar um **committee de processo** versionado no repositório:

1. **Papéis:** Helper, Documentação, Orchestrator, Challenger, Team (por domínio), Reviewer, Concluidor.
2. **Team domains:** `game-core`, `runtime`, `web`, `api`, `content`, `art`, `qa`.
3. **Trilhas:** Full / Light / Asset-Content.
4. **Fases:** `helper` → `decomposition` → `planning` → `challenge` → `approval` → `team` → `review` → `conclusion`.
5. **SoT:** Linear = issues; repo = specs/ADRs/sessões.
6. **Approval:** artefato em arquivo; chat não autoriza.
7. **Sem Cursor hooks** no núcleo do processo.
8. **Tags** `[mq:<área>]` nas fatias do plano.

Contrato normativo: [`docs/specs/agent-workflow-committee.spec.md`](../../specs/agent-workflow-committee.spec.md).  
Operação: [`docs/agents/`](../../agents/).

## Motivos

- reduzir drift entre chat e entrega;
- proteger fronteiras `game-core` / IA / Design Book antes de código;
- permitir cerimônia leve em chores e rigor em mudanças de contrato;
- manter rastreio no Linear sem espelhar backlog em markdown;
- funcionar em Cursor, Codex ou Claude Code com os mesmos artefatos.

## Consequências

- toda sessão Full/Asset-Content passa pelo Challenger antes do Team;
- Documentação **propõe** Linear; mutação só pós-Approval;
- Reviewer tem dois eixos (spec/aceite e código/arquitetura);
- skills e harnesses vivem no repo e são revisáveis;
- ausência de hooks implica disciplina humana/agente no checklist `phase.md`.

## Alternativas rejeitadas

| Alternativa | Por quê não |
|-------------|-------------|
| Dual backlog (`docs/backlog/` + Linear) | Drift garantido |
| Hooks Cursor como gate | Quebra agnosticismo de tool |
| Só Reviewer (sem Challenger) | Crítica chega tarde, após implementação |
| Cerimônia Full em todo chore | Inviável para time pequeno |
| grill-me como núcleo do Helper | Não cobre lentes MQ (slice, IA, arte, game-core) |

## Referências

- [`agent.md`](../../../agent.md)
- [`docs/linear/12-linear-bootstrap.md`](../../linear/12-linear-bootstrap.md)
- [`docs/agents/mcp-linear-evaluation.md`](../../agents/mcp-linear-evaluation.md)
- ADR-0001…0005
