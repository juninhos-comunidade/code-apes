# Harness — Team web

Skill: `merge-quest-web` · **Implementa** shell React.

## Owner Linear

**Guilherme** (React, Design System, UX, IA UX, relatório, deploy frontend).

## Entrada

Approval + `[mq:web]` + contratos.

## Escopo

Shell, rotas, formulários, overlays, HUD DOM, montagem Phaser, superfícies de IA (interpretação/contexto).

## Fronteiras

- UI/forms/overlays — **não** calculam combate nem veredito.
- Consome contratos versionados; chama API (não DB direto).
- Phaser montado no app; estado de jogo via core/runtime.
- Design Book / tokens: co-ownership com arte quando visual.

## Handoff

| De | Para | Critério |
|----|------|----------|
| web | Reviewer | fluxos + loading/error; sem regra de avaliação |
| web | api | DTOs/erros alinhados |

## Nunca

- Inventar catálogo/pergunta (ADR-0003)
- Regra de combate no componente
- Mutar Linear sem Approval

## Skills

`merge-quest-web`, `vercel-react-best-practices`, `web-design-guidelines`, `frontend-*`, `merge-quest-architecture-guard`.
