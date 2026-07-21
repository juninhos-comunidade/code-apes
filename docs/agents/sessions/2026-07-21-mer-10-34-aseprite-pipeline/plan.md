# Pipeline Aseprite — Implementation Plan

> **Para execução:** usar `merge-quest-art-pipeline` e executar cada tarefa na ordem. Este plano não autoriza `team`; requer Challenger e Approval em arquivo.

**Goal:** tornar o Design Book executável e provar uma pipeline Aseprite reproduzível com uma família piloto de herói em estado `candidate`.

**Architecture:** Node ESM orquestra contratos, descoberta do executável e processos; Lua roda exclusivamente dentro do Aseprite para criar e inspecionar documentos. Arquivos `.aseprite` são fontes binárias, enquanto contratos, manifests, JSON, PNG, previews e relatórios fornecem revisão e rastreabilidade.

**Tech Stack:** Node.js 24.14, módulos ESM, `node:test`, Aseprite 1.3.17.2, Lua da API Aseprite, JSON, PNG e pnpm 11.9.

**Trilha:** Asset-Content
**linearIssues:** MER-10, MER-34
**Base:** `brief.md`, `decomposition.md`, `approvals/2026-07-21-brief.md`
**Revisão do plano:** 2 — pós-Challenger

## Global Constraints

- 480×270 lógico; personagens em canvas 48×48; escala inteira; sem antialiasing.
- O protótipo aprovado orienta linguagem, paleta e composição; seus pixels não são copiados como asset final.
- Direção 75% técnica e 25% fantasia; fundo frio e interesse quente.
- Todo asset novo começa como `candidate`; nenhum comando deste plano escreve em `art/source/approved`.
- Criação e exportação recusam sobrescrever destino existente, salvo export regenerável do mesmo `id` + `version` com `--force-export` explícito.
- `game-core` permanece sem arte, Aseprite, Phaser, React, banco ou IA.
- Nenhuma dependência nova será instalada.
- O executável/licença do Aseprite nunca será copiado, empacotado ou enviado ao repositório/CI.
- Checks de repo/CI não dependem do Aseprite; smoke e inspeção visual são gates locais de delivery.
- Caminho absoluto do Aseprite não será versionado.
- Autoria e licença dos assets originais serão registradas como Eduardo Neves.
- MER-10 e MER-34 serão entregues em branches e PRs separados.
- Commit, push, PR, merge, Linear e promoção para `approved` exigem autorizações próprias.

---

## Mapa de arquivos

### Wave A — MER-10, branch `docs/MER-10-design-book-v1`

- Modify: `docs/design/design-book.md` — contrato visual canônico completo.
- Modify: `docs/design/13-codex-aseprite-pipeline.md` — ciclo operacional e comandos aprovados.
- Modify: `art/README.md` — fronteiras entre source, export, preview, licença e status.
- Modify: `docs/agents/sessions/2026-07-21-mer-10-34-aseprite-pipeline/phase.md` — avanço de fases.
- Create/modify: artefatos da sessão — approval, decomposition, plan, challenge, reviews e conclusion.

### Wave B — MER-34, branch futura `feat/MER-34-aseprite-pipeline`

- Create: `art/toolchain.json` — versão Aseprite testada e política de compatibilidade.
- Create: `art/contracts/asset-contract.schema.json` — schema estrutural v1.
- Create: `art/contracts/hero-protagonist-v01.json` — contrato da família piloto.
- Create: `art/palettes/merge-quest-v01.json` — paleta por família e função semântica.
- Create: `art/palettes/merge-quest-v01.gpl` — paleta importável no Aseprite.
- Create: `art/palettes/merge-quest-v01.provenance.json` — origem, hash e racional de redução.
- Create: `art/scripts/create-from-contract.lua` — criação idempotente sem overwrite.
- Create: `art/scripts/inspect-asset.lua` — inspeção em stdout de canvas, layers, tags, slices, paleta e alpha.
- Create: `tooling/art/contract.mjs` — leitura e validação do contrato JSON.
- Create: `tooling/art/palette.mjs` — geração GPL e verificação de proveniência/sincronia.
- Create: `tooling/art/steam-libraries.mjs` — descoberta somente leitura de bibliotecas Steam.
- Create: `tooling/art/aseprite.mjs` — localização, versão e execução segura do binário.
- Create: `tooling/art/cli.mjs` — comandos `doctor`, `create`, `export`, `preview`, `validate` e `check`.
- Create: `tooling/art/test/contract.test.mjs` — testes do contrato.
- Create: `tooling/art/test/palette.test.mjs` — testes de JSON/GPL/proveniência.
- Create: `tooling/art/test/aseprite.test.mjs` — testes de descoberta e montagem de comandos.
- Create: `tooling/art/test/cli.test.mjs` — testes de códigos de saída e proteção contra overwrite.
- Modify: `package.json` — scripts `art:*` sem dependências novas.
- Generate: `art/source/candidates/hero/hero-protagonist-v01.aseprite` — fonte piloto.
- Generate: `art/exports/candidates/hero/hero-protagonist-v01.png` — spritesheet.
- Generate: `art/exports/candidates/hero/hero-protagonist-v01.json` — frames/tags.
- Generate: `art/previews/candidates/hero/hero-protagonist-v01-1x.png` — leitura real.
- Generate: `art/previews/candidates/hero/hero-protagonist-v01-8x.png` — inspeção ampliada.
- Generate: `art/reports/hero-protagonist-v01.validation.json` — evidência legível e reproduzível.

## Interfaces fixadas pelo plano

### Contrato JSON v1

```json
{
  "$schema": "./asset-contract.schema.json",
  "schemaVersion": 1,
  "frameBase": 1,
  "coordinateBase": 0,
  "id": "hero-protagonist",
  "version": 1,
  "status": "candidate",
  "family": "character",
  "canvas": { "width": 48, "height": 48, "colorMode": "indexed" },
  "palette": "merge-quest-v01",
  "layers": ["guides", "shadow", "body", "equipment", "effects"],
  "hiddenLayers": ["guides"],
  "tags": [
    { "name": "idle-down", "from": 1, "to": 4, "direction": "forward", "frameDurationMs": 140 },
    { "name": "walk-down", "from": 5, "to": 10, "direction": "forward", "frameDurationMs": 100 }
  ],
  "pivot": { "slice": "origin", "x": 24, "y": 44 },
  "license": { "kind": "original", "author": "Eduardo Neves" },
  "exports": {
    "sheet": "art/exports/candidates/hero/hero-protagonist-v01.png",
    "data": "art/exports/candidates/hero/hero-protagonist-v01.json",
    "preview1x": "art/previews/candidates/hero/hero-protagonist-v01-1x.png",
    "preview8x": "art/previews/candidates/hero/hero-protagonist-v01-8x.png"
  }
}
```

### Node

```js
readAssetContract(path) -> AssetContract
validateAssetContract(value) -> { ok, errors[] }
renderGpl(palette) -> string
validatePaletteProvenance(palette, provenance, referenceBytes) -> { ok, errors[] }
discoverSteamLibraries({ platform, env, readFile, exists }) -> string[]
locateAseprite({ platform, env, exists, steamLibraries }) -> string
readAsepriteVersion({ executable, spawn }) -> string
runAseprite({ executable, args, spawn }) -> { status, stdout, stderr }
inspectAsset({ contract, source, executable }) -> InspectionReport
runCommand(argv, dependencies) -> Promise<number>
```

### CLI

```text
node tooling/art/cli.mjs doctor
node tooling/art/cli.mjs doctor --verbose
node tooling/art/cli.mjs create --contract art/contracts/hero-protagonist-v01.json
node tooling/art/cli.mjs export --contract art/contracts/hero-protagonist-v01.json
node tooling/art/cli.mjs preview --contract art/contracts/hero-protagonist-v01.json
node tooling/art/cli.mjs validate --contract art/contracts/hero-protagonist-v01.json
node tooling/art/cli.mjs check:repo
node tooling/art/cli.mjs check
```

Códigos de saída: `0` sucesso, `1` contrato/asset inválido, `2` configuração ou invocação inválida.

### Lua

Node lê e valida o contrato. `create-from-contract.lua` recebe somente parâmetros achatados por `--script-param` (`output`, `width`, `height`, `palette`, `layers`, `hiddenLayers`, `tags`, `pivot`) e não usa `io.open`. Cria um sprite `ColorMode.INDEXED`, aplica a paleta, cria frames/layers/tags e a slice `origin`, salva e fecha. Deve falhar antes de criar o sprite quando o destino já existe.

`inspect-asset.lua` recebe `source` e expectativas achatadas, percorre `Image:pixels()`, palettes, layers, tags e slices, e imprime uma única linha JSON em stdout. Node interpreta a linha e grava o relatório. Alpha permitido: apenas `0` ou `255` em qualquer pixel RGBA inspecionado; em modo indexed, o índice transparente deve ser `0` e toda cor usada precisa pertencer à paleta do contrato. Nenhum script Lua usa `io.open` ou `os.execute`.

---

### Task 1: Fechar o Design Book executável — MER-10

**Files:**

- Modify: `docs/design/design-book.md`
- Modify: `docs/design/13-codex-aseprite-pipeline.md`
- Modify: `art/README.md`

**Interfaces:**

- Consumes: `assets/reference/prototipo-visual-aprovado.png`, `docs/design/05-visual-design-and-asset-rules.md`, `docs/history/art-references.md`.
- Produces: nomes e hex da paleta v1, regras de silhueta, tokens de UI e contrato utilizado na Task 2.

- [x] **Step 1:** registrar seis ramps semânticos do protótipo: base, QA, backend, alerta, purificação e confiança.
- [x] **Step 2:** limitar cada ramp aos swatches funcionais da prancha e registrar hex, função, contraste e uso proibido.
- [x] **Step 3:** documentar canvas, proporção visível, pivô, direção da luz, clusters, materiais e leitura 1x para personagens.
- [x] **Step 4:** documentar tokens de HUD, carta, cronômetro, badge e estados estável/instável/crítico/purificado.
- [x] **Step 5:** documentar o contrato source → candidate → export → validation → Approval → approved.
- [x] **Step 6:** atualizar links cruzados entre Design Book, pipeline, art README e MER-34.
- [ ] **Step 7:** executar:

```powershell
pnpm.cmd exec prettier --check docs/design/design-book.md docs/design/13-codex-aseprite-pipeline.md art/README.md
pnpm.cmd check:reproducibility
```

Expected: Prettier sem diferenças; reproducibility com exit code `0`.

Evidência de execução em 2026-07-21: ambos os comandos foram tentados e
interrompidos por `ERR_PNPM_ABORTED_REMOVE_MODULES_DIR_NO_TTY`; o segundo também
registrou `ERR_PNPM_META_FETCH_FAIL` porque a rede do registry estava
indisponível. `git diff --check`, links Markdown locais, whitespace final e
newline final passaram. O script subjacente de reproducibilidade também passou
os 21 checks quando executado diretamente com Node 24.15.0 e o user agent do
pnpm 11.9.0 confirmado por `pnpm.cmd --version`. O Step 7 permanece aberto até
o ambiente executar os comandos canônicos sem reconstrução destrutiva de
`node_modules` e o Prettier fixado puder ser lido pelo processo.

- [ ] **Step 8:** obter revisão do co-owner Guilherme antes de propor merge da MER-10.

### Task 2: Contrato e testes do tooling — MER-34 parcial

**Files:**

- Create: `art/toolchain.json`
- Create: `art/contracts/asset-contract.schema.json`
- Create: `art/contracts/hero-protagonist-v01.json`
- Create: `art/palettes/merge-quest-v01.json`
- Create: `art/palettes/merge-quest-v01.gpl`
- Create: `art/palettes/merge-quest-v01.provenance.json`
- Create: `tooling/art/contract.mjs`
- Create: `tooling/art/palette.mjs`
- Create: `tooling/art/test/contract.test.mjs`
- Create: `tooling/art/test/palette.test.mjs`
- Modify: `package.json`

**Interfaces:**

- Consumes: paleta e regras aprovadas na Task 1.
- Produces: `readAssetContract()`, `validateAssetContract()`, `renderGpl()` e `validatePaletteProvenance()` para todas as tarefas seguintes.

- [ ] **Step 1:** escrever testes que rejeitam status `approved`, `frameBase` diferente de `1`, `coordinateBase` diferente de `0`, canvas diferente de 48×48, layer duplicada, tag sobreposta, pivô fora do canvas e caminho fora de `art/`.
- [ ] **Step 2:** executar `node --test tooling/art/test/contract.test.mjs`.

Expected: FAIL porque `contract.mjs` ainda não existe.

- [ ] **Step 3:** implementar leitura JSON e validação estrutural sem pacote externo.
- [ ] **Step 4:** criar schema, contrato piloto, toolchain e paleta JSON; registrar hash SHA-256 da prancha aprovada e racional de seleção em provenance.
- [ ] **Step 5:** gerar GPL exclusivamente a partir do JSON e testar igualdade exata entre saída gerada e arquivo versionado.
- [ ] **Step 6:** adicionar scripts:

```json
{
  "art:doctor": "node tooling/art/cli.mjs doctor",
  "art:create": "node tooling/art/cli.mjs create",
  "art:export": "node tooling/art/cli.mjs export",
  "art:preview": "node tooling/art/cli.mjs preview",
  "art:validate": "node tooling/art/cli.mjs validate",
  "art:check:repo": "node tooling/art/cli.mjs check:repo",
  "art:check": "node tooling/art/cli.mjs check",
  "art:test": "node --test tooling/art/test/*.test.mjs"
}
```

- [ ] **Step 7:** inserir `pnpm art:check:repo` no script `verify` antes de typecheck/test/lint/build; o gate não pode localizar nem executar Aseprite.
- [ ] **Step 8:** executar `pnpm.cmd art:test` e `pnpm.cmd art:check:repo`.

Expected: contrato válido passa; todos os casos inválidos falham com mensagens determinísticas.

### Task 3: Descoberta reproduzível do Aseprite — MER-34 parcial

**Files:**

- Create: `tooling/art/steam-libraries.mjs`
- Create: `tooling/art/aseprite.mjs`
- Create: `tooling/art/cli.mjs`
- Create: `tooling/art/test/aseprite.test.mjs`
- Create: `tooling/art/test/cli.test.mjs`

**Interfaces:**

- Consumes: `art/toolchain.json`.
- Produces: `locateAseprite()`, `readAsepriteVersion()`, `runAseprite()` e subcomando `doctor`.

- [ ] **Step 1:** escrever testes provando esta precedência: `ASEPRITE_PATH` → bibliotecas Steam → instalações diretas conhecidas → erro de configuração.
- [ ] **Step 2:** escrever fixture de `libraryfolders.vdf` com biblioteca em outra unidade e provar resolução de `steamapps/common/Aseprite/Aseprite.exe`.
- [ ] **Step 3:** testar argumentos como arrays, sem shell e sem interpolação de caminho.
- [ ] **Step 4:** executar `node --test tooling/art/test/aseprite.test.mjs tooling/art/test/cli.test.mjs`.

Expected: FAIL porque os módulos ainda não existem.

- [ ] **Step 5:** implementar descoberta somente leitura e execução via `spawnSync` com `shell: false`; saída padrão do doctor informa apenas `steam|direct|env` e versão.
- [ ] **Step 6:** implementar leitura de versão por `--version`; no Windows, quando stdout/stderr vier vazio, usar metadado `VersionInfo.ProductVersion` via PowerShell com caminho como argumento literal.
- [ ] **Step 7:** adicionar `--batch` e `--noinapp` a toda execução automatizada.
- [ ] **Step 8:** implementar `doctor --verbose` para mostrar caminho somente na sessão local, sem persistência em report.
- [ ] **Step 9:** executar:

```powershell
pnpm.cmd art:test
pnpm.cmd art:doctor
```

Expected local: `installation=steam`, versão `1.3.17.2`, exit code `0`; caminho omitido sem `--verbose`.

### Task 4: Criação Lua protegida — MER-34 parcial

**Files:**

- Create: `art/scripts/create-from-contract.lua`
- Modify: `tooling/art/cli.mjs`
- Modify: `tooling/art/test/cli.test.mjs`

**Interfaces:**

- Consumes: contrato JSON e paleta da Task 2; executor da Task 3.
- Produces: `.aseprite` em `art/source/candidates/<family>/`.

- [ ] **Step 1:** testar parâmetros achatados, conversão explícita de frames base um e coordenadas base zero, `--script-param output=...` e `--script art/scripts/create-from-contract.lua`.
- [ ] **Step 2:** testar que fonte existente retorna exit code `1` antes de chamar o Aseprite.
- [ ] **Step 3:** implementar Lua com `ImageSpec`, `ColorMode.INDEXED`, `Palette`, `Sprite:newLayer()`, `Sprite:newTag()` e `Sprite:newSlice()`.
- [ ] **Step 4:** criar frames vazios com as durações do contrato, layers na ordem declarada e `guides` invisível.
- [ ] **Step 5:** salvar por `Sprite:saveAs()` somente no caminho `candidate` e fechar o documento.
- [ ] **Step 6:** executar:

```powershell
pnpm.cmd art:create -- --contract art/contracts/hero-protagonist-v01.json
pnpm.cmd art:create -- --contract art/contracts/hero-protagonist-v01.json
```

Expected: primeira execução cria a fonte; segunda recusa overwrite com exit code `1` e mantém o hash do arquivo.

### Task 5: Exportação, preview e validators — MER-34 parcial

**Files:**

- Create: `art/scripts/inspect-asset.lua`
- Modify: `tooling/art/cli.mjs`
- Modify: `tooling/art/test/cli.test.mjs`

**Interfaces:**

- Consumes: fonte candidata da Task 4.
- Produces: PNG/JSON, previews 1x/8x e relatório de validação.

- [ ] **Step 1:** testar argumentos de export com `--ignore-layer guides`, `--sheet`, `--data`, `--format json-array`, `--list-layers`, `--list-tags` e `--list-slices`.
- [ ] **Step 2:** testar previews com `--oneframe`, `--scale 8` e nomes determinísticos.
- [ ] **Step 3:** implementar `inspect-asset.lua` para imprimir inspeção JSON em stdout; Node compara com o contrato e grava o relatório por escrita atômica.
- [ ] **Step 4:** validar canvas, modo indexed, palette, transparência, layers, visibilidade, tags, frames, durações, slice/pivô e destinos.
- [ ] **Step 5:** garantir que `check:repo` valida contratos, provenance e JSON↔GPL sem Aseprite; para cada fonte existente, exige export, previews e report. Contrato ainda sem fonte é reportado explicitamente como `contract-only`, sem alegar asset entregue. `check` acrescenta doctor + inspeção Lua local.
- [ ] **Step 6:** limitar `--force-export` a `art/exports/candidates` e `art/previews/candidates`; recusar fonte e qualquer caminho `approved` incondicionalmente.
- [ ] **Step 7:** executar:

```powershell
pnpm.cmd art:export -- --contract art/contracts/hero-protagonist-v01.json
pnpm.cmd art:preview -- --contract art/contracts/hero-protagonist-v01.json
pnpm.cmd art:validate -- --contract art/contracts/hero-protagonist-v01.json
pnpm.cmd art:check:repo
pnpm.cmd art:check
```

Expected: cinco comandos com exit code `0`; relatório sem bloqueios; preview 1x em 48×48 e preview 8x em 384×384.

### Task 6: Produzir a família piloto com Eduardo — MER-34 parcial

**Files:**

- Modify: `art/source/candidates/hero/hero-protagonist-v01.aseprite`
- Regenerate: exports, previews e relatório do herói.

**Interfaces:**

- Consumes: template vazio validado e Design Book v1.
- Produces: candidato visual para Reviewer; não produz asset `approved`.

- [ ] **Step 1:** gerar no máximo três explorações de silhueta dentro do canvas e da paleta.
- [ ] **Step 2:** Eduardo seleciona uma direção e faz ou orienta o refino manual no Aseprite.
- [ ] **Step 3:** desenhar `idle-down` e `walk-down` preservando o pivô `(24,44)` e leitura aproximada 32×40.
- [ ] **Step 4:** revisar animação em 1x para tremor, deslizamento, ruído, materiais e silhueta.
- [ ] **Step 5:** regenerar export, previews e relatório pelos comandos da Task 5.
- [ ] **Step 6:** comparar em fundo claro e escuro e registrar custo de produção e observações na sessão.

Expected: candidato completo e validado, ainda fora de `approved` e sem alegar conclusão da MER-34.

### Task 7: Delivery Gate e handoff

**Files:**

- Create: `docs/agents/sessions/2026-07-21-mer-10-34-aseprite-pipeline/reviews/spec.md`
- Create: `docs/agents/sessions/2026-07-21-mer-10-34-aseprite-pipeline/reviews/code.md`
- Modify: `docs/agents/sessions/2026-07-21-mer-10-34-aseprite-pipeline/phase.md`

- [ ] **Step 1:** executar:

```powershell
pnpm.cmd art:test
pnpm.cmd art:doctor
pnpm.cmd art:check:repo
pnpm.cmd art:check
pnpm.cmd check:reproducibility
pnpm.cmd typecheck
pnpm.cmd lint
pnpm.cmd test
pnpm.cmd build
```

- [ ] **Step 2:** registrar cada exit code real; nenhum comando não executado pode aparecer como verde.
- [ ] **Step 3:** Reviewer comparar MER-10 e a fatia parcial da MER-34 com Design Book, contratos, previews e validators.
- [ ] **Step 4:** solicitar Approval separado para promoção do candidato e para qualquer commit/push/PR.

## Ordem / paralelo

Sequencial por dependência:

```text
Wave A: Task 1 (MER-10)
  → review do co-owner
  → merge autorizado separadamente
  → branch MER-34 baseada na main atualizada
  → Task 2 → Task 3 → Task 4 → Task 5 → Task 6 → Task 7
```

Não há swarm: todos os arquivos de arte e decisão visual têm owner único, Eduardo Neves.

O primeiro PR mantém a sessão ativa e entrega somente MER-10; não cria `conclusion.md` final nem marca MER-34 como entregue.

## pendingTeamTasks propostos após Approval

- [ ] `T-001` `[mq:docs]` `[mq:art]` — Task 1 — MER-10
- [ ] `T-002` `[mq:art]` — Tasks 2–5 — MER-34 parcial
- [ ] `T-003` `[mq:art]` — Task 6 — MER-34 parcial
- [ ] `T-004` `[mq:art]` — Task 7 — MER-10/MER-34 parcial

## Gates

- [ ] Challenger obrigatório
- [ ] Approval do plano em `approvals/`
- [ ] Review do co-owner da MER-10
- [ ] Reviewer de evidências
- [ ] Approval de promoção para `approved`
- [ ] Approval de commit/push/PR

## Riscos residuais

- Paleta extraída da prancha pode conter variações demais; o Design Book deve reduzir, não replicar ruído.
- A API Lua pode variar fora da família Aseprite 1.3.17; doctor deve avisar e bloquear incompatibilidade conhecida.
- Scripts Lua não podem usar `io.open`/`os.execute`; todo I/O textual fica no processo Node.
- Aseprite é dependência licenciada de delivery local, nunca requisito do CI gratuito.
- `.aseprite` não oferece diff textual; contrato, export, relatório e preview são obrigatórios no review.
- A família piloto prova o processo, mas deixa o restante da MER-34 aberto.
- Revisão do co-owner pode alterar tokens visuais antes da Wave B.
