# Harness — Team qa

Skill: `merge-quest-qa` (+ `merge-quest-delivery-gate`) · **Implementa** verificação.

## Entrada

Approval + tag `[mq:qa]` (ou suporte explícito a outra fatia).

## Escopo

Planos de teste, E2E/smoke, a11y, telemetria de QA, reprodução de bugs, gates de entrega, builds reprodutíveis.

## Regras

- Evidência > opinião
- Preferir testes automatizados no escopo
- Reportar gaps sem bloquear indevidamente Light chores documentados
- Não mover regra de jogo para adaptadores

## Handoff

| De | Para | Critério |
|----|------|----------|
| QA | Reviewer | Comandos + resultados anexáveis |
| QA | Team domínio | Falha atribuível pedindo fix |

## Nunca

- “Testei no chat”
- Aprovar produto no lugar do Reviewer
- Ignorar critérios da issue Linear

## Skills

`merge-quest-qa`, `merge-quest-delivery-gate`, `vitest-skill` / vitest externa, playwright, a11y skills.
