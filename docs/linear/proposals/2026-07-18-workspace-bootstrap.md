# Proposta — Bootstrap Linear (doc 12)

**Workspace:** https://linear.app/mergequest  
**Team:** Merge Quest  
**Issue prefix:** `MQ-`  
**Status:** aplicada 2026-07-18 — ver `docs/linear/2026-07-18-workspace-audit.md`

## Initiative

`Merge Quest — Vertical Slice e MVP`  
*(criar na UI se MCP não expuser create; projects podem existir sem initiative)*

## Projects (10)

1. Produto e requisitos
2. UX/UI e Design Book
3. Arquitetura e infraestrutura
4. Frontend React
5. Jogo Phaser
6. Backend e banco
7. IA e conteúdo técnico
8. Arte e animação
9. QA, acessibilidade e telemetria
10. Demo e entrega

## Milestones (no project Arquitetura + Demo conforme avanço)

- documentação canônica
- protótipo navegável
- vertical slice visual
- combate funcional
- exploração funcional
- conteúdo técnico
- integração
- playtest
- demo

*(v1: criar milestones no project **Arquitetura e infraestrutura** e **Demo e entrega**)*

## Labels a criar

### Área

`area:product`, `area:design`, `area:react`, `area:phaser`, `area:backend`, `area:database`, `area:ai`, `area:art`, `area:content`, `area:qa`

### Prioridade

`priority:p0-vs`, `priority:p0`, `priority:p1`, `priority:p2`

### Tipo

`type:feature`, `type:bug`, `type:research`, `type:content`, `type:asset`, `type:tech-debt`, `needs-review`, `blocked`

Manter defaults Feature / Improvement / Bug ou migrar gradualmente para `type:*`.

## Backlog inicial (fundação — não features de jogo)

| Título | Project | Labels |
|--------|---------|--------|
| Bootstrap agent workflow (harness + skills) | Arquitetura e infraestrutura | `area:product`, `priority:p0`, `type:tech-debt` |
| Documentar contrato Linear↔repo | Arquitetura e infraestrutura | `area:product`, `priority:p0`, `type:research` |
| Completar labels/projects Linear (audit) | Arquitetura e infraestrutura | `area:product`, `priority:p0`, `type:tech-debt` |
| Design Book v1 (placeholder canônico) | UX/UI e Design Book | `area:design`, `priority:p0-vs`, `type:asset` |
| Vertical slice — critérios jogáveis | Produto e requisitos | `area:product`, `priority:p0-vs`, `type:feature` |
| game-core — skeleton + primeiro teste | Arquitetura e infraestrutura | `area:backend`, `priority:p0-vs`, `type:feature` |

## Não fazer nesta leva

- Implementar combate, Phaser scenes, API de produção
- Cancelar issues de onboarding MQ-2..4 (deixar o time fechar)
