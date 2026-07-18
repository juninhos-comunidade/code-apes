---
name: merge-quest-learned-practices
description: Capture and apply repeatable Merge Quest process/product practices when planning, reviewing, or after the human corrects the same preference twice. Living checklist — keep short and verifiable.
---

# Learned Practices

## Quando usar

- discovery / plan / review de qualidade de saída do agente;
- humano diz “sempre X” / “nunca Y” pela segunda vez em tarefas similares;
- fechamento do Concluidor com learning verificável.

## Quando não usar

- opinião one-off sem regra checável;
- segredos / dados pessoais;
- duplicar `AGENTS.md` / ADR — linkar em vez de copiar.

## Workflow

1. Ler esta skill + `docs/agents/workflow.md` + ADR relevantes.
2. Em planos/specs: citar arquivos, verify profile, aceite `MER-*`, QG.
3. Se correção humana repetida → acrescentar **uma** linha em Practices (data + check).
4. Preferir atualizar doc/ADR/standard a crescer esta lista sem limite (manter ≤30).

## Practices (living)

| Date | Practice | Check |
|------|----------|-------|
| 2026-07-18 | Chat ≠ Approval; Approval é artefato em sessão | `approvals[]` / `templates/approval.md` |
| 2026-07-18 | Linear SoT issues (`MER-*`); propor antes de criar | proposal + Approval antes de `save_issue` |
| 2026-07-18 | Sem hooks Cursor no core; handoff por arquivo | `phase.md` + mensagem explícita de papel |
| 2026-07-18 | Challenger ataca plano; Reviewer ataca evidência | `challenge.md` pré-Approval; reviews pós-Team |
| 2026-07-18 | `game-core` sem React/Phaser/DB/IA SDK | diff + architecture-guard |
| 2026-07-18 | IA não inventa (ADR-0003) | catálogo/rubrica; sem pergunta ativa inventada |
| 2026-07-18 | Trilhas Full / Light / Asset-Content | `docs/agents/tracks.md` citado no brief |
| 2026-07-18 | Tags `[mq:<area>]` em tasks Team | plan lista áreas |
| 2026-07-18 | Bootstrap skill só para reorg/scaffold | não usar no ciclo de feature |

## Pontos de falha comuns

1. Dual-backlog markdown + Linear → drift.
2. “Aprovado no chat” sem artefato.
3. Regra de combate na cena Phaser.
4. Skill de marketplace de pixel-art empurrando estilo novo.
5. Criar `MER-*` sem proposta.

## Referências

- `agent.md`, `docs/skills-map.md`, `docs/agents/glossary-process.md`
- `merge-quest-delivery-gate`, `merge-quest-docs`
