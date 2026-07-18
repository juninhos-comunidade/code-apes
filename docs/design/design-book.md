# Design Book v1 — Merge Quest (placeholder canônico)

**Status:** placeholder P0-VS · **Owners:** Eduardo + Guilherme  
**Issue:** MER-10

Este arquivo é o ponto canônico referenciado por `AGENTS.md`, `merge-quest-art-pipeline` e issues de arte/UI. Enquanto o Design Book completo não for preenchido, as regras abaixo + docs linkados são a verdade operacional.

## Regras vigentes (obrigatórias)

| Tema | Regra |
|------|--------|
| Resolução lógica | 480×270 |
| Escala | inteira 2x → 960×540 |
| Pixel art | real; sem antialiasing |
| Personagens | canvas 48×48; pivô nos pés |
| Mix | 75% técnico / 25% fantasia |
| Assets `approved` | nunca overwrite silencioso — nova versão candidata |
| Preview | 1x e ampliado obrigatórios |

## Fontes canônicas (ler nesta ordem)

1. [`05-visual-design-and-asset-rules.md`](05-visual-design-and-asset-rules.md)
2. [`13-codex-aseprite-pipeline.md`](13-codex-aseprite-pipeline.md)
3. Protótipo aprovado: `assets/reference/prototipo-visual-aprovado.png` (se existir)
4. Assets mínimos: [`../product/09-vertical-slice-and-acceptance.md`](../product/09-vertical-slice-and-acceptance.md)

## Escopo deste placeholder

**In:** pointer canônico + regras duras + links  
**Out:** folhas de personagem finais, paleta fechada numerada, UI kit completo (entregas MER-10 / MER-34)

## Próximo incremento (MER-10)

- [ ] Paleta nomeada (hex) alinhada ao protótipo
- [ ] Silhuetas herói / aliados / inimigos / chefe / lojista
- [ ] Tokens de UI (React) coerentes com pixel HUD
- [ ] Referência de cartas e cronômetros
