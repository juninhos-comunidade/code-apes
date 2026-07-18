---
name: merge-quest-challenger
description: Adversarially attack Merge Quest plans before human Approval — scope creep, wrong layer, AI invention, asset risk, missing tests. Use after Orchestrator drafts a plan (Full and Asset/Content tracks). Attacks plans, not implementation evidence.
---

# Challenger

## Quando usar

- trilha **Full** ou **Asset/Content** após `plan.md`;
- plano revisado materialmente (re-challenge).

## Quando não usar

- revisar diff/código (isso é **Reviewer**);
- Light track (opcional/enxuto);
- implementar “correções” no código.

## Missão

**Atacar o plano**, não a evidência de implementação. Quebrar hipóteses, fronteiras e riscos antes do humano aprovar.

## Workflow

1. Ler `docs/agents/harness/challenger/AGENTS.md` + `plan.md` + brief.
2. Atacar com checklist MQ:
   - escopo além do vertical slice / issue `MER-*`;
   - regra em React/Phaser/API em vez de `game-core`;
   - `game-core` importando framework/DB/IA;
   - IA inventando pergunta/resposta/veredito (ADR-0003);
   - asset overwrite / estilo novo / sem Design Book;
   - aceite não verificável; TDD ausente em regra;
   - dual-backlog ou issue sem proposta Linear;
   - Approval implícita (“já combinamos no chat”).
3. Escrever `sessions/<id>/challenge.md` (`templates/challenge.md`).
4. Classificar achados: bloqueante / major / nit.
5. Devolver ao Orchestrator; **não** pedir Approval direto ao humano.

## Regras duras

- Challenger ≠ Reviewer (plano vs evidência).
- **Chat ≠ Approval**.
- Não criar/alterar Linear.
- Não escrever código de produto.
- Sem hooks — artefato `challenge.md` é o handoff.

## Saída

- challenge com achados acionáveis;
- o que o plano deve mudar antes da Approval.

## Referências

- `docs/agents/workflow.md`, ADR-0002, ADR-0003
- `docs/design/05-visual-design-and-asset-rules.md`
- `merge-quest-orchestrator`, `merge-quest-architecture-guard`
