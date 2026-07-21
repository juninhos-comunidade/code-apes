# Brief — `2026-07-21-mer-10-34-aseprite-pipeline`

**Trilha:** Asset-Content
**Data:** 2026-07-21
**Solicitante:** Eduardo Neves
**Áreas:** `[mq:art]` `[mq:docs]`
**linearIssues (conhecidas):** MER-10, MER-34

## Pedido (resumo)

> Estruturar uma pipeline de produção artística entre Eduardo e a automação do
> repositório, usando o Aseprite como fonte editável e scripts Lua para criar,
> exportar e validar assets sem retirar de Eduardo a decisão artística ou a
> autoria das entregas.

## Lentes MQ

| Lente | Achado |
|-------|--------|
| Slice mínimo | Fechar o contrato visual da MER-10 e provar a pipeline com uma família piloto antes de produzir em massa a MER-34. |
| Fronteira game-core | A pipeline produz apresentação e metadados de runtime; não contém combate, veredito ou estado autoritativo do jogo. |
| IA não inventa | A automação pode propor no máximo três variações e gerar bases técnicas; Eduardo escolhe, corrige e aprova a direção visual. |
| Design Book / assets | `docs/design/design-book.md` é o contrato canônico. Todo asset nasce `candidate`; `approved` nunca é sobrescrito. |
| Contratos / SoT | Linear continua como SoT de MER-10/MER-34; repo é SoT do Design Book, fontes, manifests, previews, validações e approvals. |
| Trilha | Asset-Content, com Challenger obrigatório antes da produção e Reviewer depois das evidências. |

## `[FATO]`

- Eduardo informou que o Aseprite está disponível e autorizou seu uso por scripts Lua.
- O diagnóstico local encontrou a instalação Steam do Aseprite 1.3.17.2; o caminho absoluto permanece configuração local e não será versionado.
- Aseprite oferece execução batch, scripts Lua e exportação PNG/JSON.
- O repositório já separa conceitualmente fontes, exports, previews, referências e licenças em `art/`.
- As regras vigentes exigem 480×270 lógico, escala inteira, pixel art sem antialiasing, personagens em canvas 48×48, pivô nos pés e previews 1x/8x.
- A direção aprovada é 75% técnica e 25% fantasia, com fundo frio e pontos de interesse quentes.
- MER-10 está atribuída a Eduardo, tem Guilherme como co-owner e bloqueia MER-34.
- MER-34 está atribuída a Eduardo e exige assets mínimos, previews, validators, inventário de licenças e ausência de overwrite de `approved`.
- A branch anterior era `fix/MER-5-agent-workflow-hygiene`; esta sessão foi isolada em `docs/MER-10-design-book-v1`, baseada na `origin/main` atualizada.

## `[DECISÃO]` (humano, pendente de Approval em arquivo)

- Adotar Node do próprio monorepo para orquestração e Lua do Aseprite para criação/inspeção, sem dependência nova na primeira versão.
- Usar uma variável local `ASEPRITE_PATH` com autodetecção opcional; caminho da instalação não será versionado.
- Fixar o ciclo por asset: contrato → até três variações → escolha → candidato → refino → export → validação → Approval → `approved`.
- Registrar Eduardo Neves como autor das entregas; scripts e automações não se registram como autores.
- Manter MER-10 e MER-34 em branches e PRs separados.
- Usar uma família piloto para validar a pipeline antes da produção em lotes; a piloto não encerra sozinha a MER-34.
- Fazer Approval por família de assets, evitando microaprovação por frame sem permitir promoção silenciosa.

## Escopo In / Out

- **In:**
  - contrato de asset com tamanho, paleta, layers, tags, slices/pivô, frames, versão, status e licença;
  - paleta e regras executáveis derivadas do Design Book;
  - diagnóstico local do Aseprite;
  - templates e scripts Lua para criação e validação;
  - exportação batch para PNG/JSON;
  - previews 1x e 8x com nearest-neighbor;
  - manifest e relatório de validação por asset;
  - documentação do ciclo Eduardo ↔ automação;
  - família piloto antes dos lotes da MER-34.
- **Out:**
  - configuração global ou instalação do Aseprite;
  - compra/download de packs ou serviços;
  - promoção automática para `approved`;
  - integração de regras com `game-core`;
  - regras de combate em Phaser;
  - encerramento da MER-34 antes de todos os assets e evidências exigidos;
  - alteração de Linear, push, PR, merge ou deploy sem autorização própria.

## Arquivos previstos

### MER-10

- `docs/design/design-book.md`
- `docs/design/13-codex-aseprite-pipeline.md`
- `docs/agents/sessions/2026-07-21-mer-10-34-aseprite-pipeline/*`

### MER-34 (branch posterior)

- `art/README.md`
- `art/contracts/*`
- `art/palettes/*`
- `art/templates/*`
- `art/scripts/*`
- `art/source/candidates/*`
- `art/source/approved/*`
- `art/exports/*`
- `art/previews/*`
- `art/licenses/*`
- `tooling/art/*`
- `package.json`

## Dependências

- MER-10 deve estabelecer a paleta, os tokens visuais e o contrato antes da produção definitiva da MER-34.
- O executável local do Aseprite precisa ser localizado e ter versão registrada pelo diagnóstico, sem versionar seu caminho absoluto.
- Challenger e Approval de domínio são obrigatórios antes da fase `team`.
- Assets externos exigem origem e licença antes de entrar como candidato.

## Riscos

- MER-34 é ampla para dois pontos; a produção deve usar lotes, derivação e reutilização documentada.
- Arquivos `.aseprite` são binários; comparação deve ser apoiada por manifest, JSON, PNG e previews versionados.
- Uma paleta não fechada gera retrabalho em todas as famílias.
- Scripts Lua podem depender de API específica da versão instalada; `art:doctor` deve falhar cedo quando incompatível.
- Autodetecção de executável pode variar entre instalação direta e Steam; `ASEPRITE_PATH` permanece o fallback explícito.
- Previews ampliados podem parecer corretos mesmo quando a leitura 1x falha; ambos são gates.

## Próxima fase

Após Approval deste brief em `approvals/`: `decomposition`, seguida de `planning`, `challenge` e novo Approval do plano antes da produção.
