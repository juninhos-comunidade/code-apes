# Decomposition — `2026-07-21-mer-10-34-aseprite-pipeline`

**Base:** `brief.md` + `approvals/2026-07-21-brief.md`
**Trilha:** Asset-Content
**Linear SoT:** MER-10, MER-34

## Veredito de documentação

- Nenhuma issue nova é necessária.
- Nenhuma mutação no Linear está proposta nesta sessão.
- Nenhuma ADR nova é necessária: ADR-0002 e ADR-0003 continuam preservadas.
- `docs/design/design-book.md` e `docs/design/13-codex-aseprite-pipeline.md` são a especificação suficiente para esta fatia.
- MER-10 e MER-34 permanecem em branches e PRs separados.

## Entregas verificáveis

### `D-001` `[mq:docs]` `[mq:art]` — MER-10

**Responsável:** Eduardo Neves
**Entrega:** Design Book v1 deixa de ser placeholder e passa a definir o contrato visual executável.

**Aceite:**

- paleta nomeada com valores hex e função de cada família;
- regras de silhueta para herói, aliados, inimigos, chefe e lojista;
- tokens de UI alinhados ao HUD pixel;
- anatomia de cartas e cronômetros;
- contrato de canvas, layers, tags, pivôs, transparência, versionamento e status;
- links para protótipo, referências, pipeline e MER-34;
- 480×270, escala inteira e ausência de antialiasing mantidos;
- nenhum asset binário alterado nesta entrega.

### `D-002` `[mq:art]` — MER-34 parcial

**Responsável:** Eduardo Neves
**Entrega:** fundação reproduzível da pipeline Aseprite, validada por testes de tooling.

**Aceite:**

- contrato de asset versionado e validável;
- `art:doctor` detecta Aseprite por `ASEPRITE_PATH`, instalação direta ou biblioteca Steam;
- versão testada 1.3.17.2 registrada sem caminho absoluto;
- criação, exportação, preview e inspeção executáveis em batch/Lua;
- criação recusa sobrescrever fonte existente;
- validators cobrem tamanho, paleta, layers, tags, pivô, frames, alpha e destino;
- nenhum pacote novo instalado na primeira versão;
- testes isolados não exigem abrir a interface do Aseprite.

### `D-003` `[mq:art]` — MER-34 parcial

**Responsável:** Eduardo Neves
**Entrega:** família piloto de herói em estado `candidate`, suficiente para provar o ciclo completo.

**Aceite:**

- fonte `.aseprite`, PNG/JSON, manifest e previews 1x/8x;
- canvas 48×48 e pivô nos pés;
- layers e tags obedecem ao contrato;
- leitura visual em fundo claro e escuro;
- relatório de validators sem bloqueios;
- autoria e licença registradas como obra original de Eduardo Neves;
- nenhum arquivo escrito em `source/approved`;
- a entrega não declara MER-34 concluída.

## Dependências

```text
D-001 MER-10
  └─> D-002 MER-34 pipeline
        └─> D-003 MER-34 família piloto
```

## Fora desta sessão

- demais lotes da MER-34;
- integração dos exports no Phaser;
- animações finais de todas as direções;
- packs externos;
- mudança de status, label ou comentário no Linear;
- conclusão de MER-10/MER-34;
- commit, push e PR.

## Handoff

Orchestrator deve produzir plano sequencial, com comandos PowerShell/Node reproduzíveis e Challenger obrigatório antes do segundo Approval.
