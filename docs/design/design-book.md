# Design Book v1: Merge Quest

**Status:** candidata para revisão do co-owner
**Issue:** MER-10
**Responsável pela entrega:** Eduardo Neves
**Co-owner de revisão:** Guilherme
**Atualizado em:** 2026-07-21

Este é o contrato visual canônico do Merge Quest. React, Phaser, arte e
automação podem escolher técnicas diferentes, mas devem produzir o mesmo
vocabulário visual e preservar as regras deste documento.

## 1. Tese visual

O Merge Quest mistura infraestrutura de software com fantasia de dungeon:

- 75% técnico: módulos, terminais, cabos, branches, encaixes, grids e máquinas;
- 25% fantasia: heróis, criaturas, relíquias, chefes e atmosfera;
- pixel art real, construída por clusters intencionais;
- fundo frio e escuro;
- interesse, perigo e recompensa destacados por acentos quentes;
- informação visual antes de ornamento;
- energia de HQ restrita a impacto, transições e onomatopeias curtas;
- nenhuma cópia de personagens, cenários ou assets das referências.

## 2. Base técnica obrigatória

| Tema | Contrato |
|------|----------|
| Resolução lógica | 480×270 |
| Escala de referência | 2x para 960×540 |
| Escala permitida | somente inteira |
| Filtragem | nearest-neighbor |
| Antialiasing | proibido |
| Alpha | 0 ou 255; sem pixel semitransparente |
| Canvas de personagem | 48×48 |
| Área visível do herói | aproximadamente 32×40 |
| Pivô de personagem | `(24,44)`, origem no topo esquerdo |
| Luz principal | topo esquerdo |
| Preview | 1x e 8x |
| Modo recomendado | indexed color |
| Texto | renderizado em runtime; texto falso em sprite é proibido |

## 3. Paleta v1

Os valores abaixo foram normalizados pela mediana dos swatches da prancha
aprovada. Eles definem a intenção cromática. Um asset individual não deve usar
todas as cores disponíveis.

### 3.1 Base

| Token | Hex | Uso |
|-------|-----|-----|
| `base-950` | `#151817` | fundo principal, outline profundo |
| `base-900` | `#2B2A26` | superfície elevada escura |
| `base-800` | `#39342D` | metal e pedra em sombra |
| `base-600` | `#705E4B` | borda neutra, madeira e latão apagado |
| `base-400` | `#A0866C` | material neutro iluminado |
| `base-100` | `#E8D1B7` | texto primário e highlight neutro |

### 3.2 QA

| Token | Hex | Uso |
|-------|-----|-----|
| `qa-950` | `#0D0B1B` | sombra profunda |
| `qa-900` | `#180D27` | superfície QA escura |
| `qa-800` | `#27163E` | módulo inativo |
| `qa-700` | `#471C4F` | borda e selo |
| `qa-600` | `#6C1F50` | estado QA ativo |
| `qa-400` | `#9D386A` | acento e badge |
| `qa-200` | `#D380A4` | texto/ícone QA sobre fundo escuro |

### 3.3 Backend

| Token | Hex | Uso |
|-------|-----|-----|
| `backend-950` | `#0F2533` | painel técnico profundo |
| `backend-900` | `#21486D` | superfície técnica |
| `backend-800` | `#36638C` | módulo secundário |
| `backend-600` | `#5688B5` | borda e seleção backend |
| `backend-400` | `#81ABD2` | texto secundário e telemetria |
| `backend-200` | `#C2D1EB` | highlight e leitura sobre escuro |

### 3.4 Alerta

| Token | Hex | Uso |
|-------|-----|-----|
| `alert-950` | `#5F1104` | sombra crítica |
| `alert-900` | `#841D04` | superfície de perigo |
| `alert-800` | `#B23508` | preenchimento crítico |
| `alert-600` | `#D35914` | ícone e borda; não usar em texto pequeno |
| `alert-400` | `#E9871B` | texto de alerta sobre fundo escuro |
| `alert-200` | `#F2AC1F` | foco, recompensa e tempo urgente |
| `alert-muted` | `#B58141` | latão, moldura e alerta desativado |

### 3.5 Purificação

| Token | Hex | Uso |
|-------|-----|-----|
| `purified-950` | `#063F43` | sombra purificada |
| `purified-800` | `#0E6F5D` | superfície estável |
| `purified-700` | `#127763` | borda estável |
| `purified-500` | `#25AD96` | sucesso e purificação ativa |
| `purified-300` | `#72BF97` | highlight e leitura positiva |
| `purified-100` | `#E5E0B1` | brilho final, uso restrito |

### 3.6 Confiança

| Token | Hex | Uso |
|-------|-----|-----|
| `confidence-950` | `#122C59` | base da barra |
| `confidence-900` | `#193D78` | nível profundo |
| `confidence-800` | `#16498F` | nível baixo |
| `confidence-700` | `#1760A5` | nível médio |
| `confidence-600` | `#166BAE` | nível ativo |
| `confidence-500` | `#3584BC` | seleção e borda |
| `confidence-400` | `#61A8CF` | informação principal |
| `confidence-300` | `#88C5DE` | highlight |
| `confidence-100` | `#CEE7EF` | brilho e texto curto |

### 3.7 Limites de uso

- personagem comum: até 12 cores mais transparência;
- chefe: até 16 cores mais transparência;
- prop: até 8 cores mais transparência;
- efeito curto: até 4 cores mais transparência;
- tile family: até 16 cores compartilhadas;
- cada material deve usar poucos tons e clusters grandes;
- dithering é exceção, nunca textura automática;
- preto absoluto fica restrito a recortes muito profundos;
- branco absoluto fica restrito a flash temporário;
- não criar uma nova cor quando um token existente cumpre a mesma função.

## 4. Tokens de interface

| Token de produto | Valor | Contraste/função |
|------------------|-------|------------------|
| `surface.canvas` | `#151817` | fundo principal |
| `surface.panel` | `#0F2533` | painel técnico |
| `surface.raised` | `#2B2A26` | módulo elevado |
| `text.primary` | `#E8D1B7` | 12,12:1 sobre canvas |
| `text.secondary` | `#81ABD2` | 7,40:1 sobre canvas |
| `border.default` | `#705E4B` | moldura neutra |
| `border.active` | `#3584BC` | foco técnico |
| `focus.visible` | `#F2AC1F` | 9,10:1 sobre canvas |
| `domain.qa` | `#D380A4` | 6,29:1 sobre canvas |
| `domain.backend` | `#81ABD2` | domínio backend legível |
| `state.confidence` | `#61A8CF` | 6,82:1 sobre canvas |
| `state.warning` | `#F2AC1F` | alerta e tempo urgente |
| `state.critical` | `#E9871B` | 6,76:1 sobre canvas |
| `state.purified` | `#25AD96` | 6,38:1 sobre canvas |

Regras de contraste:

- texto normal busca pelo menos 4,5:1;
- texto grande, ícone essencial e foco buscam pelo menos 3:1;
- `alert-600` tem 4,43:1 sobre canvas e não pode carregar texto pequeno;
- cor nunca é o único indicador: usar forma, ícone, rótulo ou padrão junto;
- texto técnico permanece em React/Phaser, não rasterizado no asset.

## 5. Forma, luz e material

- silhueta é aprovada antes de detalhe interno;
- outline usa `base-950` ou a sombra profunda do domínio;
- luz principal vem do topo esquerdo;
- sombra é colorida, não cinza neutro automático;
- emissivo aparece somente em elementos interativos, perigo, confiança e purificação;
- metal usa planos, quinas e poucos highlights;
- cabo usa curva legível e espessura consistente;
- pedra e parede usam clusters maiores que um pixel;
- ruído distribuído por toda superfície é proibido;
- props grandes e reconhecíveis têm prioridade sobre microdetalhes.

## 6. Silhuetas por família

| Família | Envelope | Âncora visual | Proibido |
|---------|----------|---------------|----------|
| Herói | 32×40 dentro de 48×48 | capacete/boné, ferramenta e mochila técnica | cabeça genérica sem profissão; detalhe subpixel |
| Aliado | até 30×28 | núcleo luminoso e módulos laterais | mesma silhueta do inimigo; excesso de partículas |
| Inimigo comum | 24×24 a 34×36 | falha técnica única: cabo, arquivo, bug ou módulo | monstro medieval sem leitura técnica |
| Comandante | até 36×42 | volume vertical, insígnia e ferramenta de comando | apenas recolorir herói |
| Chefe | até 44×44 | núcleo central e massa derivada de inimigo existente | ocupar todo o canvas sem respiro |
| Lojista | aproximadamente 32×40 | postura neutra, mochila/estoque e sinal comercial | aparência de inimigo agressivo |

Todos os personagens usam pivô nos pés. Partículas podem ultrapassar a área
visível, mas não o canvas contratado.

## 7. Cena e composição

### Exploração

- uma sala corresponde a uma tela;
- parede, piso, porta e obstáculo precisam ser distinguíveis em 1x;
- portas ficam nos pontos cardeais;
- HUD ocupa a periferia e preserva o centro;
- poucos props repetíveis contam a história do ambiente;
- cada sala tem um foco de luz ou objetivo dominante.

### Batalha

- composição diagonal: jogador embaixo à esquerda e oponente acima à direita;
- o jogador observa; cartas/unidades ocupam o grid central;
- grid é 3×3 por lado;
- confiança e estados ficam nas laterais;
- diálogo/pergunta ocupa a faixa inferior quando necessário;
- animação comunica resultado, mas nunca altera o resultado do `game-core`.

## 8. Cartas, HUD e cronômetros

### Carta

- formato vertical;
- custo grande e reconhecível;
- arte ocupa a região superior;
- nome, domínio e stats são texto de runtime;
- moldura comunica domínio e estado por cor mais forma;
- selo de qualidade é estrutural, não ornamento aleatório;
- sem parágrafo rasterizado ou texto falso dentro do PNG.

### HUD

- módulos retos com pequenos chanfros;
- grid de 2 px na resolução lógica;
- borda externa de 1 px; separador importante de 2 px;
- números críticos têm prioridade sobre decoração;
- estados sempre combinam cor, ícone e rótulo;
- área clicável do React pode ultrapassar a moldura pixel sem alterar a arte.

### Cronômetro

- dígitos são texto de runtime;
- barra e moldura são assets modulares;
- normal usa confiança/backend;
- urgente usa alerta;
- crítico usa alerta mais pulso/ícone, nunca apenas troca de cor;
- a regra de quando o estado muda pertence à aplicação, não ao asset.

### Estados do sistema

| Estado | Cor | Forma |
|--------|-----|-------|
| Estável | confiança/backend | linha contínua e núcleo regular |
| Instável | alerta amarelo | triângulo e pulso irregular |
| Crítico | alerta vermelho/laranja | X, ruptura e borda agressiva |
| Purificado | purificação | check/losango e brilho controlado |

## 9. Contrato de asset

### Nome

```text
<family>-<subject>-<state>-<action>-vNN.aseprite
```

Exemplo:

```text
hero-protagonist-exploration-walk-down-v01.aseprite
```

### Status

```text
intention → exploration → candidate → validation → approved
```

- `candidate` nunca substitui um arquivo anterior;
- `validation` significa que exports e checks existem, não que a arte foi aprovada;
- `approved` exige artefato de Approval;
- revisão aprovada gera versão nova, não overwrite silencioso.

### Layers de personagem

Ordem de baixo para cima:

1. `shadow`;
2. `body`;
3. `equipment`;
4. `effects`;
5. `guides`, sempre oculta no export.

### Tags

- nomes em kebab-case;
- frames do contrato usam base 1;
- coordenadas de pixel usam base 0;
- direção faz parte do nome: `idle-down`, `walk-left`, `action-right`;
- piloto do herói: `idle-down` e `walk-down`;
- duração de frame é explícita, nunca implícita no nome.

### Pivôs

| Família | Pivô |
|---------|------|
| Personagem 48×48 | `(24,44)` |
| Prop de chão | centro da base visual |
| Tile | origem `(0,0)` |
| Efeito ligado a personagem | herda o pivô do personagem |

### Entregáveis mínimos

- fonte `.aseprite` com layers preservadas;
- PNG ou spritesheet;
- JSON de frames/tags/slices;
- preview 1x;
- preview 8x;
- contrato e relatório de validação;
- autoria/licença;
- notas de produção.

## 10. Fronteiras de implementação

- o Design Book define aparência, não regra de combate;
- Phaser apresenta sprites, input, câmera, som e animação;
- React apresenta shell, formulários, texto e acessibilidade;
- `game-core` permanece fonte de verdade;
- nenhum asset referencia diretamente banco, API ou IA;
- automação pode gerar base técnica e até três variações;
- Eduardo escolhe, corrige e aprova a direção artística;
- autoria das entregas permanece com Eduardo Neves;
- Guilherme revisa coerência com UI/Design System na MER-10.

## 11. Checklist de revisão

- [ ] leitura clara em 1x;
- [ ] canvas, escala e pivô corretos;
- [ ] apenas cores permitidas;
- [ ] alpha somente 0/255;
- [ ] silhueta coerente com a família;
- [ ] luz do topo esquerdo;
- [ ] material reconhecível;
- [ ] sem ruído distribuído;
- [ ] sem texto falso;
- [ ] sem tremor ou deslizamento de animação;
- [ ] funciona em fundo claro e escuro;
- [ ] source, export e preview separados;
- [ ] versão, autoria e licença registradas;
- [ ] nenhum `approved` sobrescrito;
- [ ] review do co-owner quando afetar UI.

## 12. Fontes canônicas

1. [`05-visual-design-and-asset-rules.md`](05-visual-design-and-asset-rules.md)
2. [`13-codex-aseprite-pipeline.md`](13-codex-aseprite-pipeline.md)
3. [Prancha visual aprovada](../../assets/reference/prototipo-visual-aprovado.png)
4. [`../history/art-references.md`](../history/art-references.md)
5. [`../product/09-vertical-slice-and-acceptance.md`](../product/09-vertical-slice-and-acceptance.md)
6. ADR-0002: `game-core` como fonte de verdade
7. ADR-0003: IA escolhe, não inventa

## 13. Escopo da MER-10

Esta versão fecha paleta, regras técnicas, silhuetas, tokens, cartas,
cronômetros e contrato de asset. A produção dos arquivos binários e dos assets
do vertical slice permanece na MER-34.
