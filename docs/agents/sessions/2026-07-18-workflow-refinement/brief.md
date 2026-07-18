# Brief — `2026-07-18-workflow-refinement`

**Trilha:** Full  
**Data:** 2026-07-18  
**Solicitante:** Guilherme  
**linearIssues (conhecidas):** MER-5, MER-9, MER-10, MER-12, MER-21, MER-22, MER-23, MER-25, MER-26, MER-30, MER-32

## Pedido (resumo)

> Refinamento máximo do harness de agentes do PR #1: deepen de workflow/skills/harnesses em todos os domínios, higiene Linear (ownership), instalação de skills externas comprovadas, feedback loop de qualidade, validação dry-run — via swarm orquestrado sob o committee MQ.

## Lentes MQ

| Lente | Achado |
|-------|--------|
| Slice mínimo | Docs/processo no PR #1; sem feature de jogo |
| Fronteira game-core | Harness/skills devem reforçar domínio puro; owner Linear → Eduardo |
| IA não inventa | Skills/content não mudam veredito; ADR-0003 intacto |
| Design Book / assets | Co-owners Eduardo + Guilherme; pixel marketplace deny-default |
| Contratos / SoT | Linear `MER-*`; repo specs/sessões; Chat ≠ Approval |

## `[FATO]`

- PR #1 aberto (`docs/MER-5-agent-workflow-harness`); 19 skills in-repo mapeadas
- Dry-runs parciais; MER-5 AC ainda cita identifier MQ; MER-32 é rename MER→MQ (obsoleto)
- Hahn ausente do workspace; API issues unassigned
- Feedback loop para em learned-practices sem disposition/promote

## `[DECISÃO]` (humano)

- game-core (MER-9, 21–23) → Eduardo
- Design Book (MER-10) → co-owners Eduardo + Guilherme (assignee Eduardo)
- Hahn issues → unassigned até convite
- Swarm = tática sob Orchestrator MQ (não orquestração genérica concorrente)
- Escopo grande no mesmo PR #1 + propostas Linear

## Escopo In / Out

- **In:** workflow, harnesses, skills in-repo + externas P0, skills-map, dry-runs, sessão Full, proposal/mutações Linear pós-Approval, feedback loop, `merge-quest-qa`, CHANGELOG processo
- **Out:** implementação de features de jogo; Initiative Linear UI (humano); convite Hahn (humano); merge de PR sem pedido explícito

## Riscos

- Escopo grande → commits fatiados
- Skills Phaser/pixel podem empurrar anti-padrão → deny-list + Challenger
- Mutar Linear sem Approval — proibido até artefato

## Próxima fase

decomposition
