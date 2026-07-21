# 13: Pipeline de arte + Aseprite

## Objetivo

Transformar decisões visuais de Eduardo Neves em fontes editáveis, exports e
evidências reproduzíveis, sem automatizar a aprovação artística e sem acoplar
assets ao domínio do jogo.

## Autoridade e responsabilidades

| Papel | Responsabilidade |
|-------|------------------|
| Eduardo Neves | direção, seleção, desenho/refino, autoria e Approval de domínio |
| Automação | contratos, templates, scripts Lua, exports, previews, validators e relatórios |
| Guilherme | revisão de coerência entre Design Book, UI e Design System na MER-10 |
| Reviewer | conferir aceite, evidências, segurança e ausência de overwrite |

A automação não aparece como autora de assets, commits ou PRs.

## Pré-condições

Antes de produzir uma família:

1. ler o [Design Book](design-book.md);
2. identificar a issue `MER-*`;
3. conferir assets `approved` da mesma família;
4. registrar tamanho, paleta, layers, tags e pivô;
5. confirmar autoria ou licença;
6. limitar exploração a três variações;
7. garantir plan, Challenger e Approval em arquivo.

## Fluxo operacional

```text
brief visual
  → contrato
  → até três explorações
  → escolha de Eduardo
  → candidate vNN
  → refino no Aseprite
  → export PNG/JSON
  → preview 1x/8x
  → validação de repo
  → validação local com Aseprite
  → Reviewer
  → Approval de domínio
  → approved em nova versão
```

## Status e transições

| Status | Significado | Pode virar automaticamente? |
|--------|-------------|-----------------------------|
| `intention` | pedido e função visual | não |
| `exploration` | até três direções de forma/cor | não |
| `candidate` | fonte escolhida em produção | sim, após escolha humana |
| `validation` | exports e checks disponíveis | sim, quando gates passam |
| `approved` | versão aceita para integração | nunca; exige Approval |

Nenhuma transição sobrescreve um `approved`. Alteração gera novo `vNN`.

## Organização do repositório

```text
art/
├── contracts/              contratos versionados
├── palettes/               JSON canônico, GPL e provenance
├── templates/              fontes técnicas reutilizáveis
├── scripts/                Lua executado pelo Aseprite
├── source/
│   ├── candidates/         fontes em produção/revisão
│   └── approved/           fontes aprovadas, somente promoção autorizada
├── exports/
│   ├── candidates/         PNG/JSON regeneráveis
│   └── approved/           exports vinculados a Approval
├── previews/
│   ├── candidates/         1x/8x para revisão
│   └── local/              inspeção descartável, ignorada pelo Git
├── reports/                validação legível por máquina e humano
├── references/             referências permitidas
├── licenses/               origem e termos de uso
├── tmp/                    trabalho temporário ignorado
└── scratch/                explorações descartáveis ignoradas
```

Source, export, preview e licença nunca são misturados no mesmo diretório.

## Contrato de asset

Todo contrato declara:

- `schemaVersion`;
- `frameBase: 1`;
- `coordinateBase: 0`;
- `id`, `version`, `family` e `status`;
- canvas e modo de cor;
- paleta;
- layers em ordem de baixo para cima;
- layers ocultas no export;
- tags, frames, direção e duração;
- slice/pivô;
- autoria/licença;
- caminhos de source, exports, previews e report.

O contrato é validado antes de abrir o Aseprite.

## Fronteira Node + Lua

Node é responsável por:

- ler e validar JSON;
- descobrir o executável local;
- montar argumentos sem shell interpolation;
- comparar caminhos com os diretórios permitidos;
- gerar GPL a partir do JSON canônico;
- calcular hashes;
- validar PNG/JSON exportados;
- gravar reports por escrita atômica;
- retornar exit codes determinísticos.

Lua é responsável por:

- criar canvas indexed;
- carregar paleta;
- criar layers, frames, tags e slices;
- configurar duração e pivô;
- salvar fonte `.aseprite` candidata;
- executar operações de imagem suportadas pela API.

Scripts Lua não executam processos externos e não carregam regra de produto.
O executável/licença do Aseprite nunca entra no repositório.

## Contrato de comandos da MER-34

Os comandos abaixo serão implementados na Wave B. Eles ainda não são
considerados disponíveis enquanto a MER-34 não entregar o tooling.

```powershell
pnpm.cmd art:doctor
pnpm.cmd art:create -- --contract <contract.json>
pnpm.cmd art:export -- --contract <contract.json>
pnpm.cmd art:preview -- --contract <contract.json>
pnpm.cmd art:validate -- --contract <contract.json>
pnpm.cmd art:check:repo
pnpm.cmd art:check
```

| Comando | Responsabilidade |
|---------|------------------|
| `art:doctor` | instalação, versão e compatibilidade local |
| `art:create` | criar fonte candidate sem overwrite |
| `art:export` | gerar PNG e JSON do mesmo id/versão |
| `art:preview` | gerar primeiro frame em 1x e 8x |
| `art:validate` | validar um asset com Aseprite local |
| `art:check:repo` | verificar contratos/evidências sem ferramenta paga |
| `art:check` | acrescentar smoke e inspeção local com Aseprite |

Códigos de saída:

- `0`: passou;
- `1`: contrato ou asset inválido;
- `2`: configuração ou invocação inválida.

## Descoberta do Aseprite

Precedência:

1. `ASEPRITE_PATH` local;
2. bibliotecas Steam;
3. instalações diretas conhecidas;
4. falha explícita com instrução de configuração.

A versão validada nesta sessão foi Aseprite Steam 1.3.17.2. O caminho absoluto
não é versionado nem incluído em report. `doctor --verbose` poderá mostrá-lo
somente na sessão local.

## Perfis de validação

### Repo/CI sem Aseprite

- schema e contrato;
- paths permitidos;
- JSON da paleta e GPL sincronizados;
- hash/provenance da referência;
- nomes e versões;
- presença de source/export/preview/report quando aplicável;
- ausência de arquivos licenciados do Aseprite;
- links de documentação.

### Delivery local com Aseprite

- canvas e color mode;
- paleta usada;
- alpha 0/255;
- layers e visibilidade;
- tags, frames e durações;
- slices e pivô;
- export PNG/JSON;
- preview 1x e 8x;
- leitura visual em fundo claro e escuro.

Um gate não substitui o outro. CI verde não aprova a arte.

## Regras de overwrite

- source existente nunca é substituído por `art:create`;
- qualquer caminho contendo `approved` é recusado por padrão;
- `--force-export` só pode regenerar `exports/candidates` e
  `previews/candidates` do mesmo id/versão;
- promoção copia uma versão candidata para uma nova versão aprovada somente
  após Approval em arquivo;
- deleção ou substituição de asset exige confirmação própria.

## Validação visual

- silhueta e função legíveis em 1x;
- luz do topo esquerdo;
- material reconhecível;
- clusters intencionais;
- sem ruído distribuído;
- sem tremor;
- sem deslizamento;
- sem texto falso;
- coerente com família e domínio;
- legível em fundo claro e escuro;
- 75% técnico e 25% fantasia.

## Dez levas da MER-34

1. herói;
2. cenários;
3. cartas, grid e HUD;
4. aliados;
5. inimigos;
6. comandante;
7. chefe;
8. lojista e salas especiais;
9. efeitos e transições;
10. polimento.

A família piloto valida o processo, mas não encerra a MER-34.

## Branches e revisão

- MER-10: `docs/MER-10-design-book-v1`;
- MER-34: `feat/MER-34-aseprite-pipeline`, criada a partir da `main` atualizada;
- Design Book precisa de revisão do co-owner antes do merge;
- assets candidatos precisam de Reviewer e Approval de domínio;
- commit, push e PR permanecem gates externos próprios.

## Tratamento de falhas

- falha de contrato impede abrir/criar o source;
- Aseprite incompatível falha no doctor;
- source existente interrompe create sem modificar bytes;
- export ausente ou divergente falha no check;
- caminho fora de `art/` falha antes de executar processo;
- output não confiável da distribuição local vira evidência para replanejar a
  integração antes da Wave B, nunca para marcar gate como verde.

## Autonomia

Após Approval do plano, a pipeline pode editar arquivos previstos, executar
scripts, exportar, validar e corrigir falhas locais.

Continuam exigindo confirmação:

- instalar ou remover;
- baixar pack externo;
- apagar;
- mover/promover `approved`;
- alterar configuração global;
- executar fora do escopo aprovado;
- usar serviço pago adicional;
- mutar Linear;
- commit, push, PR, merge ou deploy.
