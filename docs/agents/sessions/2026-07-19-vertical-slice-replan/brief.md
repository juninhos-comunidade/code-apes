# Brief — `2026-07-19-vertical-slice-replan`

**Trilha:** Full
**Data:** 2026-07-19
**Solicitante:** Eduardo Neves
**linearIssues (conhecidas):** MER-8, MER-9…MER-39

## Pedido (resumo)

> Corrigir o planejamento do vertical slice no Linear, principalmente a gestão de tempo das quatro semanas, considerando a equipe completa em disponibilidade total.

## Lentes MQ

| Lente | Achado |
|-------|--------|
| Slice mínimo | Cobertura funcional boa; integração ficou concentrada no ciclo 4 |
| Fronteira game-core | Preservar regras em MER-21/22/23; runtime apenas apresenta |
| IA não inventa | MER-26/29/30 continuam atrás de catálogo, schema e API |
| Design Book / assets | MER-34 precisa reutilização/derivação explícita para caber em dois dias |
| Contratos / SoT | Linear é SoT das issues; relações `blockedBy` estão incompletas |

## `[FATO]`

- 31 issues estão distribuídas em quatro ciclos; 30 são `priority:p0-vs`.
- Nenhuma issue dos ciclos possui estimativa.
- Ciclo 2 atribui seis entregas a Eduardo.
- Ciclo 4 contém exploração, combate, chefe, loja, relatório, overlay, telemetria e playtest.
- As issues de backend ainda aparecem sem assignee no snapshot auditado.
- Dependências escritas em `## Depende de` frequentemente não existem como relação `blockedBy`.
- Links de documentação em várias issues apontam para a branch antiga `docs/MER-5-agent-workflow-harness`.

## `[DECISÃO]` (humano)

- Prazo de demo mantido em 2026-08-14.
- A frente de backend terá disponibilidade total nas quatro semanas.
- Alterações no Linear dependem da aprovação do plano e da proposta desta sessão.

## Escopo In / Out

- **In:** ciclos 1–4, capacidade, estimativas, owners, dependências, links, splits mínimos, gates semanais, Phaser 4, áudio, deploy e smoke.
- **Out:** cinco andares, ranking, mobile completo, sandbox de código arbitrário e qualquer mudança de regra do produto.

## Riscos

- Owners precisam ser normalizados antes da auditoria final.
- Splits e remapeamento de dependências devem ser aplicados em ordem para não criar referências inexistentes.
- Ciclo 4 só é viável se combate comum e exploração estiverem integrados no ciclo 3.

## Próxima fase

decomposition
