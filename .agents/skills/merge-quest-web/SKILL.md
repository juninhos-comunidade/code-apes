---
name: merge-quest-web
description: Implement Merge Quest React shell (apps/web) — UX flows, Design System, mounting Phaser, AI UX surfaces — without evaluation rules or inventing catalog content. Use for [mq:web] after plan Approval.
---

# Team — web (React)

## Quando usar

- task `[mq:web]`;
- shell, rotas, formulários de perfil/vaga, HUD React, montagem Phaser.

## Quando não usar

- regra de veredito/combate no componente;
- inventar pergunta/rubrica (ADR-0003);
- acessar DB direto do browser.

## Workflow

1. Ler `docs/agents/harness/web/AGENTS.md`, contratos, plan, `MQ-*`.
2. UI consome contratos/adaptadores; estado de jogo vem do core/runtime.
3. Superfícies de IA: mostrar interpretação/contexto; **não** fabricar competência.
4. Acessibilidade e estados loading/error explícitos.
5. Testes de UI no escopo; typecheck/lint.
6. Hand-off Reviewer com evidência.

## Fronteiras

- Pode depender de UI, contratos, adaptadores.
- Não embutir regra de avaliação.
- Phaser montado dentro do app; core permanece puro.

## Regras duras

- **Chat ≠ Approval**.
- Propose Linear só via Documentação/Concluidor.
- Sem hooks Cursor obrigatórios.

## Saída

- diff web + critérios `MQ-*` cobertos;
- notas de contrato/API consumidos.

## Referências

- `docs/product/04-ai-assessment-and-content.md`, ADR-0003
- `merge-quest-runtime`, `merge-quest-api`, `merge-quest-architecture-guard`
