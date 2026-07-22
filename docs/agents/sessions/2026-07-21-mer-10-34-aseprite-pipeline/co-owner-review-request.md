# Handoff de revisão do co-owner — MER-10

**Status:** aguardando Guilherme

**Entrega:** Design Book v1

**Responsável:** Eduardo Neves

**Branch:** `docs/MER-10-design-book-v1`

## Escopo da revisão

- [`docs/design/design-book.md`](../../../design/design-book.md)
- [`docs/design/13-codex-aseprite-pipeline.md`](../../../design/13-codex-aseprite-pipeline.md)
- [`art/README.md`](../../../../art/README.md)
- [`assets/reference/prototipo-visual-aprovado.png`](../../../../assets/reference/prototipo-visual-aprovado.png)

Esta revisão cobre somente a MER-10. Tooling, scripts Lua, fontes `.aseprite` e
sprites candidatos pertencem à futura branch da MER-34.

## O que conferir

- [ ] a paleta e os tokens representam a prancha aprovada sem criar uma nova direção visual;
- [ ] QA, backend, alerta, purificação e confiança funcionam com o Design System;
- [ ] HUD, cartas, badges, cronômetro e estados têm hierarquia suficiente para React e Phaser;
- [ ] cor não é o único indicador de estado e os contrastes documentados são aceitáveis;
- [ ] silhuetas e envelopes 48×48 são viáveis para herói, aliado, inimigo, comandante, chefe e lojista;
- [ ] a ordem `shadow`, `body`, `equipment`, `effects`, `guides` é adequada, com `guides` oculta no export;
- [ ] texto de runtime continua fora dos PNGs;
- [ ] arte e apresentação não assumem regras do `game-core`;
- [ ] o fluxo `candidate → validation → Approval → approved` impede overwrite silencioso;
- [ ] a documentação fornece contrato suficiente para planejar a MER-34.

## Evidência disponível

- seis ramps semânticos com hex, função e restrições;
- contrastes documentados para tokens essenciais;
- canvas 480×270 e personagem 48×48 preservados;
- links locais, newline final, code fences e `git diff --check`: passaram;
- verificador subjacente de reproducibilidade: 21 checks passaram;
- `pnpm.cmd exec prettier --check ...`: pendente porque o Prettier fixado está inacessível no `node_modules` do OneDrive;
- `pnpm.cmd check:reproducibility`: wrapper pendente porque o pnpm tenta reconstruir `node_modules` sem TTY;
- nenhum asset binário foi modificado.

## Achados que não bloqueiam a revisão visual

- o Aseprite Steam 1.3.17.2 abriu a prancha aprovada sem alterar o arquivo;
- o smoke Lua em batch não entregou `print()` ao terminal nesta distribuição;
- a Wave B precisa de plano revisão 3, novo Challenger e novo Approval antes de implementar inspeção ou gerar assets.

## Registro do co-owner

Preencher após a revisão:

```yaml
verdict: pending # approved | changes-requested
reviewedBy: Guilherme
reviewedAt:
comments:
```

O veredito do co-owner não substitui o Reviewer de evidências nem autoriza
commit, push, PR, merge ou mudança no Linear.
