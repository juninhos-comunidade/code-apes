# Glossário de processo — Merge Quest

| Termo | Significado |
|-------|-------------|
| **Committee** | Conjunto de papéis (Helper…Concluidor) e contrato de artefatos |
| **Harness** | `AGENTS.md` local do papel/domínio com limites e saídas |
| **Sessão** | Pasta `docs/agents/sessions/<id>/` com brief→conclusion |
| **Trilha** | Full / Light / Asset-Content — nível de cerimônia |
| **Fase** | Estado do processo em `phase.md` |
| **Brief** | Discovery estruturado; não é Approval |
| **Plan** | Fatias executáveis com tags e issues |
| **Challenge** | Ataque adversarial ao plano *antes* do Team |
| **Approval** | Artefato em arquivo que autoriza avanço/mutação |
| **Hipótese** | Afirmação humana ou de agente **sem** Approval |
| **Chat ≠ Approval** | Conversa não autoriza Team nem mutações externas |
| **`[FATO]`** | Verificável em código/spec/Linear sem julgamento de produto |
| **`[DECISÃO]`** | Exige humano (escopo, trade-off, prioridade) |
| **`[mq:<área>]`** | Tag de roteamento da fatia |
| **`MQ-n`** | ID canônico de issue no Linear |
| **SoT** | Source of truth |
| **Dual backlog** | Antipattern: markdown Epic/US + Linear como duas verdades |
| **Documentação** | Papel que escreve specs e *propõe* Linear |
| **Orchestrator** | Planeja; não implementa |
| **Challenger** | Critica plano; ≠ Reviewer (que valida evidência pós-código) |
| **Team** | Implementa numa área (`game-core`…`qa`) |
| **Reviewer** | Dois eixos: aceite/spec e código/arch |
| **Concluidor** | Fecha sessão; propõe PR/Linear |
| **Lentes MQ** | Checklist Helper: slice, fronteira core, IA-não-inventa, Design Book, contratos |
| **Proposal file** | Markdown em `docs/linear/proposals/` pré-mutação |
| **MCP** | Model Context Protocol — integração Linear/etc. |
| **Agnóstico de tool** | Mesmos artefatos em Cursor/Codex/Claude Code; sem hooks Cursor no núcleo |
| **pendingTeamTasks** | Fatias ainda não concluídas pelo Team |
| **Waiver** | Exceção documentada + Approval a um gate |
