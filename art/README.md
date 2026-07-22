# Arte

Esta pasta contém as fontes editáveis, contratos, exports, previews, reports,
referências e licenças da arte do Merge Quest.

Fonte visual canônica: [`docs/design/design-book.md`](../docs/design/design-book.md).
Fluxo operacional: [`docs/design/13-codex-aseprite-pipeline.md`](../docs/design/13-codex-aseprite-pipeline.md).

## Regras rápidas

- resolução lógica 480×270;
- personagens em canvas 48×48;
- escala inteira;
- sem antialiasing;
- alpha somente 0/255;
- 75% técnico e 25% fantasia;
- previews 1x e 8x;
- texto falso em sprite é proibido;
- source, export, preview e licença ficam separados;
- asset externo exige origem e licença;
- todo asset nasce `candidate`;
- `approved` nunca é sobrescrito silenciosamente.

## Estrutura contratada

```text
art/
├── contracts/
├── palettes/
├── templates/
├── scripts/
├── source/candidates/
├── source/approved/
├── exports/candidates/
├── exports/approved/
├── previews/candidates/
├── previews/local/
├── reports/
├── references/
├── licenses/
├── tmp/
└── scratch/
```

Diretórios são criados quando recebem o primeiro artefato. `tmp`, `scratch` e
`previews/local` permanecem ignorados pelo Git.

## Ciclo

```text
contrato → exploração → candidate → export → validation → Approval → approved
```

Até três variações podem ser propostas. Eduardo Neves escolhe e refina a
direção artística, permanece como autor da entrega e aprova o domínio visual.

## Estado atual

- MER-10: Design Book v1 preparado para revisão do co-owner;
- MER-34: tooling, scripts Lua e família piloto ainda não implementados nesta branch;
- Aseprite local validado: Steam 1.3.17.2;
- nenhum asset individual está em `approved`.
