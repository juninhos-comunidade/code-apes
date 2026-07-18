# Merge Quest — Planejamento Criativo e Inventário de Assets v7.8

> Documento vivo para organizar o processo criativo, limitar o escopo artístico e transformar decisões visuais em arquivos de produção no Aseprite/Phaser.

## 0. Objetivo deste arquivo

Este documento existe para impedir que a arte do Merge Quest vire uma coleção de sprites isolados. Cada asset deve ter:

- função dentro do jogo;
- prioridade de produção;
- formato e dimensões definidos;
- regra de reutilização;
- destino técnico no Phaser;
- critério de pronto.

O inventário será refinado em três etapas: **Brand Guide → Kit Vertical Slice → Sets de Domínio → Compositor de Andar**.

---

## 1. Decisões já travadas

- Pixel art 2D com profundidade construída por luz e sombra.
- Luz principal vindo do topo-esquerda.
- Sombras coloridas em azul/roxo, nunca apenas cinza escurecido.
- Paleta dupla: fundo frio e pontos de interesse quentes.
- Navegação por salas, uma sala por tela, com minimapa e portas visíveis.
- Batalha em palco separado, com herói ao fundo observando e grid 3x3 por lado.
- Personagens-base em canvas 48x48.
- Animações manuais limitadas a `idle` e `attack`; hit, deslocamento, morte, brilho e números ficam majoritariamente no Phaser.
- Chefes derivados de inimigos-base por escala, recolor, acessório e efeito especial.
- Cenários partem de tiles CC0, adaptados para a identidade do jogo.
- A marca comunica **Git/PR/merge em primeiro lugar**; torre, cartas e dungeon pertencem principalmente à key art e às telas do jogo.
- O lettering principal usa **pixel art pura**, com uma versão reduzida simplificada para tamanhos pequenos.
- A cor líder da identidade é **vermelho/laranja**; roxo e azul sustentam contraste, estados frios e o momento especial `MERGED ✓`.
- A interface usa uma base **GBA limpa e funcional**, acentos de HQ e um toque controlado de dungeon/Inscryption em molduras e telas especiais.
- Ornamentação pesada fica restrita a momentos de impacto: chefes, loja, nocaute e veredito final.

---

## 2. Pilares visuais do jogo

1. **Sala legível:** paredes, portas, área jogável e ponto de interesse reconhecíveis em menos de um segundo.
2. **Foco por temperatura:** cenário frio; interações, perigo e recompensa em cores quentes.
3. **Cartas viram unidades:** a ilustração e a unidade em campo precisam parecer duas versões do mesmo personagem.
4. **HQ de dev brasileiro:** balões, telas VS, onomatopeias e humor sem comprometer a leitura.
5. **Reuso visível, não preguiçoso:** bases compartilhadas recebem acessórios, silhuetas, paletas e efeitos temáticos.

---

## 3. Processo criativo obrigatório

### Fase A — Brand Guide

Entregáveis:

- logo principal e versão reduzida;
- paleta funcional, separada por função de UI e ambiente;
- tipografia de título e tipografia de interface;
- gramática de molduras, cantos, bordas e sombras;
- padrão de ícones;
- tom de voz e exemplos de microtexto;
- folha de referências aprovada.

### Fase B — Vertical Slice visual

Produzir apenas um recorte completo antes de criar vários andares:

- 1 sala de exploração;
- 1 cena de batalha;
- 1 aliado;
- 1 inimigo;
- 1 carta;
- HUD mínimo;
- 1 pergunta ou diálogo;
- 1 tela de vitória/derrota.

O objetivo é validar escala, legibilidade, contraste e custo real de produção.

### Fase C — Sistema modular

Depois do vertical slice aprovado:

- transformar a sala em kit reutilizável;
- transformar personagem em template de animação;
- transformar cartas e HUD em componentes;
- criar sets modulares por domínio de conhecimento, combináveis pelo compositor de andares.

### Fase D — Polimento

Somente após o loop completo funcionar:

- onomatopeias adicionais;
- variações cosméticas;
- retratos extras;
- transições elaboradas;
- telas VS mais complexas.

---

## 4. Inventário P0 — obrigatório para o MVP

### 4.1 Arquivos-base de produção

- [ ] `template-character-48x48.aseprite`
- [ ] `template-enemy-48x48.aseprite`
- [ ] `template-card.aseprite` — dimensões ainda em aberto
- [ ] `template-ui-icons.aseprite`
- [ ] `template-room-preview.aseprite`
- [ ] `palette-master.aseprite`
- [ ] `export-profile.json` ou script equivalente para Phaser

### 4.2 Identidade e telas gerais

- [ ] logo principal `Merge Quest`
- [ ] símbolo reduzido da marca
- [ ] badge `MERGED ✓`
- [ ] tela/título principal
- [ ] painel genérico de interface
- [ ] botão normal, hover, pressionado e desabilitado
- [ ] cursor/indicador de seleção
- [ ] loading simples

### 4.3 Exploração de salas

- [ ] moldura/base da sala
- [ ] piso base
- [ ] parede base com topo legível
- [ ] cantos internos e externos
- [ ] porta norte, sul, leste e oeste
- [ ] porta bloqueada
- [ ] saída/escada
- [ ] marcador visual de sala de batalha
- [ ] marcador visual de item
- [ ] marcador visual de loja
- [ ] marcador visual de pergunta
- [ ] marcador visual de chefe
- [ ] minimapa: atual, visitada, desconhecida, especial e conexão
- [ ] 3 props reutilizáveis de cenário
- [ ] 1 fonte de luz reutilizável

### 4.4 Cena de batalha

- [ ] fundo/palco de batalha
- [ ] grid 3x3 do jogador
- [ ] grid 3x3 do inimigo
- [ ] indicação de pista ativa
- [ ] slot vazio, ocupado, selecionável e bloqueado
- [ ] área da mão de cartas
- [ ] área do deck e descarte
- [ ] herói de costas, idle mínimo
- [ ] oponente/recrutador em composição frontal
- [ ] barra de Confiança
- [ ] barra/contador de vida do inimigo
- [ ] indicador de mana 1–5
- [ ] indicador de turno
- [ ] botão de encerrar turno

### 4.5 Cartas

- [ ] moldura de carta aliada
- [ ] moldura de carta inimiga
- [ ] verso da carta
- [ ] área de retrato/ilustração
- [ ] custo de mana
- [ ] ataque
- [ ] vida
- [ ] nome
- [ ] área de palavra-chave
- [ ] ícone `Provocar`
- [ ] ícone `Escudo`
- [ ] ícone `Ataque Duplo`
- [ ] estados: normal, hover, selecionada, inválida, buff, debuff, dano

### 4.6 Personagens e unidades — orçamento recomendado para sets combináveis

#### Aliados

- [ ] 4 arquétipos-base compartilhados entre áreas
- [ ] cada base com `idle` de 2–3 frames
- [ ] cada base com `attack` de 3 frames
- [ ] acessórios/recolors catalogados por domínio

#### Inimigos

- [ ] 4 arquétipos-base compartilhados entre áreas
- [ ] cada base com `idle` de 2–3 frames
- [ ] cada base com `attack` de 3 frames
- [ ] acessórios/recolors catalogados por domínio

#### Chefes

- [ ] chefes montados a partir do domínio dominante do andar e de bases de inimigo reutilizáveis
- [ ] 1 chefe final Recrutador
- [ ] 1 acessório/silhueta exclusiva por chefe
- [ ] 1 efeito visual de mecânica especial por chefe

> **Guarda de escopo:** não produzir um bestiário fechado para cada andar. Os andares são composições geradas a partir dos requisitos da JD; portanto, os sprites precisam pertencer a sets de domínio combináveis e não a mapas fixos.

### 4.7 Mentor e diálogos

- [ ] busto do mentor
- [ ] expressão neutra
- [ ] expressão zoando
- [ ] expressão aprovando
- [ ] expressão preocupada
- [ ] balão de fala comum
- [ ] balão de aviso
- [ ] caixa de diálogo longa
- [ ] indicador de continuação

### 4.8 Efeitos e feedback

Assets desenhados:

- [ ] onomatopeia curta de impacto
- [ ] `CRÍTICO`
- [ ] `MERGED ✓`
- [ ] ícone de buff
- [ ] ícone de debuff
- [ ] brilho de recompensa

Efeitos por Phaser:

- [ ] flash de hit
- [ ] tremor de unidade
- [ ] avanço e retorno de ataque
- [ ] fade/dissolução de morte
- [ ] número de dano
- [ ] partículas simples
- [ ] pulso de seleção
- [ ] tint quente/frio por sala

### 4.9 Telas de estado

- [ ] VS de chefe, versão simples
- [ ] nocaute
- [ ] replay pedagógico/checkpoint
- [ ] escolha de item 1 entre 3
- [ ] loja/desafio
- [ ] pergunta de múltipla escolha
- [ ] veredito `Merged`
- [ ] veredito `Changes Requested`
- [ ] veredito `Draft`

---

## 5. Modelo correto: sets de domínio e composição de andar

As categorias **Dev Back, Dev Front, QA, Banco de Dados, Cloud, IA, Cyber e Mobile não são andares fixos**. Elas são **sets de conhecimento** usados pelo gerador.

A IA lê a descrição da vaga, identifica os requisitos e atribui pesos às áreas. Em seguida, o sistema seleciona conteúdo e assets prontos do catálogo para compor cada andar. Um mesmo andar pode misturar mais de um domínio.

### 5.1 Exemplo de composição

Uma JD pode resultar em:

```text
Backend: 45%
Banco de Dados: 30%
QA: 15%
Cloud: 10%
```

Um andar dessa run pode então combinar:

- estrutura e props de Backend;
- inimigos de Banco de Dados;
- uma sala de pergunta de QA;
- iluminação ou hazard de Cloud;
- chefe baseado no requisito dominante daquele estágio.

### 5.2 Consequência para a arte

Não existem `andar_backend` ou `andar_qa` como pacotes fechados. Existem bibliotecas modulares:

- **base arquitetônica compartilhada**: paredes, pisos, portas, cantos e salas;
- **overlays de domínio**: cabos, formulários, terminais, tabelas, bugs, pipelines, locks;
- **props de domínio**;
- **acessórios e recolors de unidades**;
- **efeitos e hazards**;
- **símbolos e ícones**;
- **variantes de iluminação**;
- **chefes e mecânicas catalogados por tags**.

### 5.3 Kit mínimo por domínio

Cada domínio recebe inicialmente:

- 1 símbolo/ícone;
- 1 subpaleta ou regra de tint;
- 1 decalque de piso;
- 1 overlay de parede;
- 3 props;
- 1 fonte de luz ou emissivo;
- 2 acessórios de inimigo;
- 2 acessórios de aliado;
- 1 efeito/hazard;
- 1 assinatura visual de chefe;
- 1 tratamento leve para molduras especiais.

### 5.4 Regras de compatibilidade

Todo asset de domínio precisa declarar metadados para que a mistura não vire ruído visual:

```text
id
domain
asset_type
slot
rarity
visual_weight
palette_role
compatible_room_types
incompatible_tags
```

Exemplo:

```json
{
  "id": "prop_database_locked_chest",
  "domain": "database",
  "asset_type": "prop",
  "slot": "floor_large",
  "visual_weight": 2,
  "palette_role": "cold_with_warm_focus",
  "compatible_room_types": ["battle", "question", "boss"],
  "incompatible_tags": ["narrow_center"]
}
```

### 5.5 Regra de composição visual

Para impedir que o andar pareça uma colagem aleatória:

- cada sala tem **1 domínio dominante**;
- pode receber **no máximo 1 domínio secundário**;
- a arquitetura base permanece igual;
- o domínio dominante controla paleta, luz e props principais;
- o secundário aparece em um elemento focal ou mecânico;
- o andar inteiro compartilha uma paleta-base para manter continuidade.

Essa regra é mais importante do que produzir muitos assets: sem ela, o cruzamento da JD gera variedade, mas destrói identidade visual.

---

## 6. Estrutura sugerida de arquivos

```text
assets/
  brand/
    logo/
    badges/
    palette/
  aseprite/
    templates/
    characters/
      hero/
      mentor/
      allies/
      enemies/
      bosses/
    cards/
    ui/
    rooms/
    domains/
      shared/
      backend/
      frontend/
      qa/
      database/
      cloud/
      ai/
      cyber/
      mobile/
  exported/
    spritesheets/
    ui/
    rooms/
    atlases/
  phaser/
    atlas-json/
    animations/
    manifests/
  docs/
    decisions/
    asset-checklists/
    references/
```

---

## 7. Convenções de arquivos Aseprite

### Personagens

Camadas sugeridas:

```text
_GUIDES
FX_FRONT
ACCESSORY
HIGHLIGHT
BODY
SHADOW
OUTLINE
FX_BACK
GROUND_SHADOW
```

Tags obrigatórias:

- `idle`
- `attack`

Tags opcionais somente quando justificadas:

- `special`
- `portrait-pose`

### Nomes

```text
ally_<archetype>_<variant>.aseprite
enemy_<archetype>_<domain>.aseprite
boss_<domain>_<name>.aseprite
ui_<component>_<state>.aseprite
room_<type>_<variant>.aseprite
prop_<domain>_<name>.aseprite
```

### Critério de pronto para personagens

- canvas correto;
- origem/pivô consistente;
- sem pixels semitransparentes acidentais;
- paleta aprovada;
- silhueta legível em 1x;
- luz topo-esquerda consistente;
- tags corretas;
- exportação PNG + JSON funcionando;
- preview dentro da cena real do Phaser.

---

## 8. Integração Aseprite ↔ assistente

### Nível 1 — fluxo manual, recomendado para começar

1. Salvar `.aseprite`.
2. Exportar PNG/sprite sheet.
3. Enviar o PNG e uma captura em escala 4x.
4. Receber análise objetiva: silhueta, clusters, contraste, paleta, direção da luz e animação.
5. Aplicar correções no Aseprite.

### Nível 2 — automação local

Criar scripts Lua e comandos de CLI para:

- exportar automaticamente PNG + JSON;
- gerar preview ampliado sem interpolação;
- validar dimensões;
- validar nomes de tags;
- contar cores;
- detectar pixels semitransparentes;
- montar contact sheet;
- copiar exports para o projeto Phaser.

### Nível 3 — MCP/app personalizada

Um servidor intermediário pode expor ferramentas como:

- `list_sprites`
- `inspect_sprite_metadata`
- `export_sprite`
- `validate_sprite`
- `generate_preview`
- `apply_palette_map`
- `create_variant_from_template`

O servidor não deve permitir alterações destrutivas sem confirmação. Arquivos-fonte precisam continuar versionados em Git.

---

## 9. Decisões de Brand Guide fechadas

### 9.1 Eixo da marca

- O símbolo central usa a linguagem de **Git/PR/merge**.
- Torre, cartas, dungeon e personagens não precisam coexistir no logo.
- A key art é responsável por comunicar aventura e fantasia.

### 9.2 Sistema de logo

- O wordmark principal de `Merge Quest` usa **lettering pixelado puro**.
- O sistema precisa obrigatoriamente de duas versões:
  1. **wordmark pixelado**, para tela de título, banners e pitch;
  2. **símbolo reduzido**, para favicon, HUD, ícone e tamanhos pequenos.
- A versão reduzida não deve tentar preservar todas as letras do wordmark.

### 9.3 Hierarquia cromática

- **Vermelho/laranja:** energia, aventura, conflito, ação e principais chamadas.
- **Roxo:** Git/merge, aprovação, recompensa especial e assinatura do estado `MERGED ✓`.
- **Azul/roxo escuro:** fundos, sombras e estados frios.
- O roxo continua conceitualmente importante, mas não lidera toda a marca.

### 9.4 Linguagem da interface

A interface segue a fórmula:

> **GBA limpa + impacto de HQ + textura leve de dungeon**

- HUD comum: simples, legível e pouco ornamentado.
- HQ: balões, VS, onomatopeias e transições de impacto.
- Dungeon/Inscryption: bordas, textura e profundidade discretas.
- Ornamentação pesada apenas em telas especiais.

---

## 10. Questões em aberto

1. Qual forma será o símbolo reduzido da marca?
   - A. duas setas/linhas convergindo em um único caminho;
   - B. branch de Git formando uma espada ou caminho ascendente;
   - C. badge quadrado de PR com símbolo de merge e check.

2. Qual composição dominará a tela de título?
   - A. logo grande sobre a silhueta da torre;
   - B. interface de pull request transformada em tela de jogo;
   - C. herói diante do portão, com branches subindo como caminho.

3. Como representar o jogador durante a exploração?
   - A. avatar andando entre centros de sala;
   - B. ícone/token que salta entre salas;
   - C. transição de porta sem avatar explorável.

---

## 11. Próxima decisão

Definir o **símbolo reduzido** e a **composição da tela de título**. Essas duas decisões fecham a base para começar os primeiros rascunhos do logo e validar a identidade em contexto real.

---

## 12. Decisões adicionais de identidade (rodada seguinte)

### 12.1 Símbolo reduzido da marca

Escolha fechada: **A — linhas convergindo**

- O símbolo reduzido representa dois caminhos/branches que convergem em um único fluxo.
- Ele deve ser extremamente legível em tamanhos pequenos (16x16, 24x24, 32x32).
- O símbolo reduzido prioriza clareza e reconhecimento; não precisa contar toda a fantasia do jogo.
- Uso ideal: favicon, ícone do projeto, HUD, selo, avatar social e marcador de interface.

### 12.2 Tela de título

Escolha fechada: **C — portão e caminho de branches**

- A tela de título mostra o herói diante do portão/entrada da torre.
- No chão e/ou no cenário, linhas de branch/merge formam visualmente o caminho até a torre.
- O logo paira acima como título principal.
- Essa solução equilibra o conceito de aventura com o conceito de Git sem sobrecarregar o símbolo reduzido.

### 12.3 Tradução visual prática

- **Ícone pequeno:** técnico, simples, forte.
- **Wordmark:** pixelado, retrô, protagonista.
- **Tela de título/key art:** é onde a fantasia aparece com força máxima.
- **HUD comum:** clareza acima de espetáculo.
- **Telas especiais:** espaço para drama, textura, HQ e impacto visual.

---

## 13. Brand guide v0.3 — síntese consolidada

### Marca
- Conceito dominante: **merge / pull request / aprovação**.
- Energia visual: **jogo retrô de aventura com humor dev**.
- Assinatura emocional: superar conflitos para ser `MERGED ✓`.

### Logo
- Wordmark principal em **pixel art pura**.
- Símbolo reduzido em forma de **branches convergindo**.
- O logo não tenta embutir torre, carta, herói e dungeon ao mesmo tempo.

### Cores
- Principal: **vermelho/laranja**.
- Secundária conceitual: **roxo** para merge, recompensa e veredito.
- Estrutural: **azul/roxo escuro** para fundos frios e sombras.
- Apoio: **tons claros quentes** para leitura e highlights.

### Interface
- Base funcional inspirada em **GBA/Pokémon**.
- Acentos de **HQ** em momentos de impacto.
- Toque leve de **dungeon/Inscryption** em molduras e telas especiais.

### Tela de título
- Herói diante do portão.
- Caminho/ramificações de merge levando à torre.
- Logo no topo e atmosfera dramática de luz quente contra ambiente frio.

---

## 14. Próxima etapa sugerida

Com a identidade-base fechada e o modelo procedural corrigido, a próxima etapa é projetar os **sets de domínio**, não uma sequência fixa de andares.

A ordem recomendada é:

1. definir a gramática visual compartilhada de todas as salas;
2. escolher os 4 domínios com conteúdo profundo no MVP;
3. criar o kit mínimo modular de cada domínio;
4. definir regras de mistura e incompatibilidades;
5. montar 3 JDs fictícias e validar se o compositor gera andares visualmente coerentes.

---

## 15. Regra de composição dos andares

Escolha fechada: **cada andar recebe um requisito/domínio dominante e, opcionalmente, um secundário**.

### 15.1 Objetivo

Evitar que a personalização por IA transforme o cenário em uma colagem visual e pedagógica. A vaga inteira pode cruzar várias áreas, mas cada andar precisa comunicar um problema central de forma legível.

### 15.2 Regra-base

- Cada andar possui **1 domínio dominante**.
- Cada andar pode possuir **até 1 domínio secundário**.
- O domínio dominante controla:
  - paleta e iluminação;
  - props principais;
  - família visual dos inimigos;
  - assinatura do chefe;
  - tema das salas e do mentor.
- O domínio secundário aparece de forma controlada em:
  - um inimigo especial;
  - um prop focal;
  - uma mecânica;
  - uma pergunta/desafio;
  - um detalhe de ambientação.
- Cada sala reforça **um requisito específico** dentro do agrupamento do andar.

### 15.3 Responsabilidade da IA e do motor

- A IA interpreta a JD e retorna pesos, domínios e tags de requisitos.
- O motor agrupa os requisitos em andares coerentes.
- O motor escolhe apenas assets cadastrados e compatíveis.
- A IA não referencia arquivos diretamente e não inventa sprites inexistentes.

### 15.4 Regra de legibilidade

> A run representa a complexidade da vaga; cada andar representa um problema compreensível.

---

## 16. Questões seguintes

1. Um domínio dominante pode se repetir em mais de um andar quando a JD enfatiza fortemente aquela área?
2. Qual proporção visual deve existir entre domínio dominante e secundário?

---

## 15. Regras fechadas para composição dos andares

### 15.1 Repetição de domínio dominante

Escolha fechada: **repetição permitida**.

- Um mesmo domínio pode dominar mais de um andar quando a vaga atribuir peso suficiente a ele.
- A repetição só é válida quando cada andar aborda agrupamentos de requisitos diferentes.
- Andares do mesmo domínio devem variar em chefe, mecânica, props, iluminação e foco pedagógico.
- O sistema não força diversidade artificial quando isso distorceria a vaga.

Exemplo:

- Backend I: APIs, autenticação e tratamento de erros.
- Backend II: arquitetura, filas, concorrência e escalabilidade.

### 15.2 Presença do domínio secundário

Escolha fechada: **proporção visual 80/20**.

- Cerca de 80% da identidade do andar vem do domínio dominante.
- Cerca de 20% vem do domínio secundário.
- O secundário aparece como interferência localizada: um inimigo especial, um prop focal, uma mecânica, um overlay ou uma sala específica.
- O secundário nunca disputa o comando visual da cena.

Regra de leitura:

> O jogador deve identificar o domínio dominante em poucos segundos e perceber o secundário apenas ao explorar o andar.

### 15.3 Consequência para o compositor

Cada andar gerado deve conter, no mínimo:

- domínio dominante;
- domínio secundário opcional;
- agrupamento de requisitos principal;
- subtemas por sala;
- kit visual dominante;
- interferências visuais secundárias limitadas;
- chefe e mecânica coerentes com o agrupamento principal.

---

## 15. Decisões sobre arquitetura-base e progressão visual

### 15.1 Duas arquiteturas-base compartilhadas no MVP

Escolha fechada: **B — duas arquiteturas compartilhadas**.

O jogo terá dois esqueletos estruturais de cenário, ambos modulares e reutilizáveis:

1. **Fortaleza / Arquivo**
   - pedra, corredores, cofres, estantes, registros, portões, pilares;
   - adequado para Banco de Dados, QA, Cyber e partes de Backend;
   - leitura mais pesada, defensiva e institucional.

2. **Laboratório / Oficina**
   - cabos, painéis, bancadas, terminais, tubulações, mecanismos, telas;
   - adequado para Frontend, Backend, IA, Cloud e Mobile;
   - leitura mais técnica, experimental e dinâmica.

#### Regra de uso

- Cada andar escolhe **uma arquitetura-base dominante**.
- O domínio dominante aplica props, paleta, overlays, inimigos e iluminação.
- O domínio secundário interfere em aproximadamente 20% da cena.
- Não será permitido misturar as duas arquiteturas livremente dentro da mesma sala, salvo em salas especiais justificadas.

#### Custo de produção reconhecido

A escolha B aumenta o trabalho de:

- cantos e variações de parede;
- portas e transições;
- colisões e leitura espacial;
- testes de composição;
- adaptação de props e iluminação.

Para impedir que esse custo dobre de fato, as duas arquiteturas devem compartilhar:

- a mesma métrica de tile;
- as mesmas dimensões de porta;
- a mesma grade de colisão;
- o mesmo conjunto de formatos de sala;
- o mesmo sistema de iluminação e overlays.

Assim, muda a linguagem visual, mas não o motor de montagem.

### 15.2 Corrupção progressiva para indicar dificuldade

Escolha fechada: **A — corrupção progressiva**.

Quando um domínio dominar mais de um andar, a diferença não virá apenas de inimigos mais fortes. O cenário deve mostrar que o jogador está entrando em uma camada mais profunda e instável do sistema.

#### Estágios sugeridos

1. **Estável**
   - ambiente organizado;
   - iluminação regular;
   - poucos sinais de conflito.

2. **Instável**
   - rachaduras, falhas, cabos soltos, registros fora do lugar;
   - luzes de alerta e efeitos intermitentes;
   - maior presença visual do domínio secundário.

3. **Crítico**
   - corrupção visual intensa;
   - glitches, vazamentos, bloqueios, sobrecarga e objetos deslocados;
   - concentração alta de conflitos e assinatura forte do chefe.

#### Regra de reaproveitamento

A corrupção deve ser construída principalmente por:

- overlays;
- decals;
- recolor;
- partículas;
- props adicionais;
- variações de iluminação;
- efeitos por código.

Ela não deve exigir um novo tileset completo.

---

## 16. Estado atual do compositor de andares

Cada andar será montado a partir de:

- 1 domínio dominante;
- até 1 domínio secundário em proporção aproximada de 80/20;
- 1 agrupamento central de requisitos da JD;
- 1 arquitetura-base entre Fortaleza/Arquivo e Laboratório/Oficina;
- 1 estágio de corrupção;
- salas e desafios selecionados do catálogo;
- assets existentes e compatíveis com as tags do andar.

Exemplo:

```json
{
  "primaryDomain": "backend",
  "secondaryDomain": "database",
  "requirementCluster": ["rest-api", "authentication", "transactions"],
  "architecture": "laboratory_workshop",
  "corruptionStage": 2,
  "visualMix": {"backend": 0.8, "database": 0.2}
}
```

---

## 17. Próxima decisão recomendada

Definir os **formatos de sala reutilizáveis** e a **quantidade máxima de props exclusivos por domínio**. Essas duas decisões controlam diretamente o volume de arte e a variedade percebida.

---

## 15. Decisões de composição de salas e props

### 15.1 Formatos de sala do MVP

Escolha fechada: **B — 6 formatos de sala**

1. quadrada;
2. horizontal;
3. vertical;
4. cruz;
5. pequena;
6. arena de chefe.

Regras:
- todos os formatos usam a mesma grade lógica;
- portas ocupam posições padronizadas;
- as duas arquiteturas-base compartilham colisão e proporções;
- variação visual vem de layout, props, iluminação e domínio, não de geometrias incompatíveis.

### 15.2 Quantidade de props exclusivos por domínio

Escolha fechada: **produção em duas camadas**

- Domínios profundos do MVP — Backend, Frontend, QA e Banco de Dados: **5 props exclusivos por domínio**.
- Domínios presentes apenas na arquitetura — Cloud, IA, Cyber e Mobile: **3 props exclusivos por domínio**.

Total planejado: **32 props exclusivos de domínio**.

Esse total não inclui props compartilhados, como:
- caixas;
- barris;
- tochas/luzes;
- correntes;
- estantes genéricas;
- terminais genéricos;
- rachaduras e decals;
- marcadores de porta;
- elementos de corrupção.

### 15.3 Regra de controle de escopo

Os props de domínio devem cumprir pelo menos uma função clara:

- identificar o domínio;
- sinalizar requisito técnico;
- apoiar navegação;
- indicar perigo/interação;
- reforçar progressão de corrupção.

Props puramente decorativos não entram no P0.

### 15.4 Resultado esperado

A variedade percebida será produzida pela combinação:

> **formato da sala + arquitetura-base + domínio dominante + domínio secundário + nível de corrupção + iluminação + props**

O sistema evita criar um tileset inteiro para cada área, mas ainda permite que salas geradas para vagas diferentes tenham identidade própria.

---

## 16. Próxima etapa de definição

A próxima rodada deve fechar:

1. a regra de ocupação e decoração das salas;
2. a quantidade de props compartilhados do kit estrutural;
3. os primeiros 5 props exclusivos de cada domínio profundo do MVP.

---

## 15. Decisões de montagem das salas

### 15.1 Modelo de geração

Escolha fechada: **C — sistema híbrido**

- A estrutura principal de cada sala vem de um **template autoral validado**.
- Obstáculos estruturais, portas, área de combate e circulação ficam travados no template.
- Props decorativos, overlays, decals, corrupção e elementos do domínio entram em **slots seguros**.
- O motor nunca posiciona livremente elementos que possam bloquear portas, comprometer leitura ou quebrar colisões.

### 15.2 Quantidade de layouts

Escolha fechada: **B — 3 layouts por formato**

- 6 formatos de sala × 3 layouts = **18 templates estruturais**.
- Os mesmos templates servem às duas arquiteturas-base.
- A variedade percebida vem da combinação de:
  - arquitetura-base;
  - domínio dominante;
  - domínio secundário;
  - nível de corrupção;
  - props em slots;
  - iluminação;
  - inimigos e eventos.

### 15.3 Regra técnica

Cada template precisa declarar explicitamente:

- pontos de porta;
- zonas livres de circulação;
- slots de prop pequeno;
- slots de prop grande;
- pontos de luz;
- área segura do grid de batalha;
- regiões proibidas para spawn;
- compatibilidade com tipos de sala.

Exemplo conceitual:

```json
{
  "templateId": "square_01",
  "doors": ["north", "south"],
  "smallPropSlots": ["p1", "p2", "p3"],
  "largePropSlots": ["l1"],
  "lightAnchors": ["top_left"],
  "blockedZones": ["door_north", "door_south", "battle_center"],
  "compatibleRoomTypes": ["battle", "question", "item"]
}
```

### 15.4 Consequência de produção

- Não existem 18 cenários completos desenhados do zero.
- Existem 18 esqueletos espaciais reutilizáveis.
- O Aseprite produz as peças visuais; o editor de mapa ou JSON posiciona as peças.
- A composição precisa ser testada em jogo antes de receber decoração detalhada.

---

## 16. Decisões de exploração e leitura das salas

### 16.1 Representação do jogador na exploração

Escolha fechada: **A — personagem com movimentação livre dentro da sala**, com escopo controlado.

Esta decisão altera a premissa anterior de navegação apenas por transição entre salas. Para não criar um segundo jogo de ação dentro do dungeon crawler, a movimentação terá limites explícitos:

- movimento em quatro direções;
- apenas animação de caminhada/idle essencial;
- sem ataque, esquiva, pulo ou interação física complexa durante a exploração;
- colisão simples com paredes, props grandes e portas;
- mudança de sala apenas ao atravessar uma porta válida;
- batalhas continuam abrindo uma cena própria de card battler;
- interação por proximidade ou botão único;
- velocidade e hitbox padronizadas;
- câmera fixa dentro de cada sala, sem scroll.

A exploração livre existe para dar presença ao herói e permitir que o jogador observe o ambiente. Ela não deve competir em complexidade com o combate de cartas.

#### Assets adicionais provocados por esta decisão

P0:
- herói de exploração em 4 direções;
- idle simples;
- caminhada com 2 a 4 frames por direção;
- marcador de interação;
- feedback visual de porta ativa;
- hitbox e sombra-base do personagem.

O custo desta escolha deve ser considerado na priorização: qualquer animação adicional do herói substitui tempo que poderia ser gasto em inimigos ou HUD.

### 16.2 Comunicação do tipo de sala

Escolha fechada: **A — arquétipo funcional reconhecível com variação visual por domínio e arquitetura**.

Cada tipo de sala preserva um objeto ou composição semântica constante. O jogador reconhece a função rapidamente, mas a aparência não é idêntica em todas as runs.

Exemplo central:

> Uma loja sempre possui um balcão ou ponto claro de atendimento, mas o balcão pode mudar de material, formato, cor, iluminação, acessórios e estado de corrupção.

### 16.3 Regra: núcleo invariável + skin contextual

Cada sala especial é composta por duas camadas.

#### Núcleo invariável

Elemento que comunica a função da sala:

| Tipo de sala | Núcleo invariável |
|---|---|
| Loja | balcão/ponto de atendimento |
| Item | pedestal ou suporte de recompensa |
| Pergunta | terminal, altar ou estação de desafio |
| Descanso | assento, fogueira, cápsula ou estação de recuperação |
| Chefe | portão, arena e emblema de ameaça |
| Escada/saída | passagem vertical, elevador ou portal de progressão |
| Batalha | marca de conflito e área central livre |

#### Skin contextual

Elementos que variam conforme a composição do andar:

- arquitetura-base;
- domínio dominante;
- domínio secundário em proporção aproximada de 80/20;
- material;
- silhueta secundária;
- cor;
- props;
- iluminação;
- overlays;
- nível de corrupção;
- NPC ou dispositivo associado.

### 16.4 Exemplos de adaptação

#### Loja

- **Fortaleza/Arquivo + Banco de Dados:** balcão de arquivo, gavetas, chaves e registros.
- **Laboratório/Oficina + Backend:** bancada técnica, tubos, terminais e peças de serviço.
- **Frontend dominante:** balcão com painéis, molduras, vitrines e elementos de interface.
- **QA dominante:** balcão de inspeção, carimbos, checklists e luz de diagnóstico.

A loja continua sendo lida como loja antes de ser lida como domínio.

#### Sala de pergunta

- QA: bancada de teste ou terminal de validação;
- Frontend: painel quebrado que precisa ser interpretado;
- Backend: console de serviço ou estação de logs;
- Banco de Dados: mesa de consulta, arquivo ou terminal de registros.

### 16.5 Teste obrigatório de leitura

Uma sala especial só é aprovada quando:

1. sua função é reconhecível sem texto em poucos segundos;
2. o domínio dominante é perceptível;
3. o domínio secundário não disputa a leitura principal;
4. a porta e a circulação continuam claras;
5. a variação visual não remove o núcleo semântico.

---

## 17. Consequência para o inventário de assets

O inventário não deve listar apenas uma imagem final para cada sala. Deve separar:

1. **módulo funcional compartilhado**;
2. **variações de arquitetura**;
3. **skins ou acessórios de domínio**;
4. **overlays de corrupção**;
5. **estados de interação**.

Exemplo:

```text
rooms/shop/
  shared/
    counter_base
    interaction_marker
    shop_sign
  fortress_archive/
    counter_stone
    counter_wood
  laboratory_workshop/
    counter_metal
    counter_console
  domain_overlays/
    qa_inspection_set
    frontend_display_set
    backend_service_set
    database_archive_set
  corruption/
    unstable_overlay
    critical_overlay
```

Esta organização evita criar uma loja completa do zero para cada domínio.

---

## 18. Próxima decisão recomendada

Antes de listar os props de cada domínio, definir:

1. a perspectiva e o tamanho visual do herói durante a exploração;
2. a forma de interação com objetos e NPCs;
3. quais salas especiais realmente precisam de NPC visível no MVP.

---

## 19. Decisões de exploração — perspectiva e interação

### 19.1 Perspectiva do herói

Escolha fechada: **A — top-down em 3/4**.

A exploração usa uma leitura visual próxima de dungeon crawlers top-down:

- personagem visto de cima em 3/4;
- paredes com topo aparente;
- chão totalmente legível;
- portas posicionadas nos pontos cardeais;
- colisões simples;
- câmera fixa em uma sala por vez;
- sem scroll dentro da sala.

Esta perspectiva será a referência para:

- escala do herói;
- tamanho das portas;
- profundidade dos props;
- ordem de renderização;
- sombras;
- sobreposição entre personagem e cenário.

### 19.2 Interação

Escolha fechada: **B — botão único com indicador de proximidade**.

Fluxo de interação:

1. o jogador entra na área de alcance do objeto ou NPC;
2. aparece um indicador visual discreto;
3. o jogador pressiona um único botão;
4. a cena, diálogo ou painel correspondente é aberto.

Regras:

- nenhuma interação importante dispara automaticamente;
- o mesmo botão é usado para loja, pedestal, pergunta, descanso, NPC e saída;
- portas comuns podem continuar sendo atravessadas diretamente;
- portas especiais e saídas de andar podem exigir confirmação;
- o indicador deve desaparecer imediatamente ao sair do alcance;
- apenas um alvo pode estar ativo por vez.

### 19.3 Consequências para os assets

P0:

- herói top-down em 4 direções;
- idle e caminhada;
- sombra-base;
- indicador de interação;
- estado normal e ativo de objetos interativos;
- feedback de alvo selecionado;
- feedback de porta especial;
- prioridade visual para o objeto interativo mais próximo.

### 19.4 Consequência técnica

A lógica precisa separar:

- **zona de colisão**;
- **zona de interação**;
- **ponto de origem visual**;
- **profundidade de renderização**.

Isso evita que o sprite pareça estar atrás de um objeto enquanto a colisão o trata como se estivesse na frente.

---

## 20. Próxima decisão recomendada

Definir quais salas especiais precisam de NPC visível no MVP e qual será o tamanho do herói em relação ao tile de 48x48.

---

## 21. Decisões de escala e NPCs do MVP

### 21.1 Escala do herói

Escolha fechada: **A — sprite de aproximadamente 32x40 dentro de canvas 48x48**.

Regras:

- o canvas permanece em 48x48;
- o corpo visível ocupa aproximadamente 32x40;
- a sobra do canvas é reservada para sombra, balanço da animação, acessórios e alinhamento;
- a origem do sprite deve ser padronizada entre todas as direções;
- a hitbox não acompanha o corpo inteiro: ela deve ficar concentrada nos pés;
- portas e props serão dimensionados para manter o herói legível sem parecer grande demais para a sala.

A escala deve ser validada cedo em uma sala real, porque um personagem que parece bom isolado pode ocupar espaço demais quando combinado com paredes, balcões e portas.

### 21.2 NPCs visíveis

Escolha fechada: **A — mentor e lojista visíveis; demais salas usam objetos funcionais**.

P0:

- mentor com sprite ou presença visual recorrente;
- lojista com sprite próprio;
- sala de pergunta operada por terminal, altar ou estação;
- sala de item operada por pedestal;
- sala de descanso operada por fogueira, banco, cápsula ou estação;
- saída de andar operada por escada, elevador ou portal.

Esta regra concentra a arte autoral em personagens que realmente sustentam a identidade e evita criar NPCs descartáveis para cada função.

### 21.3 Trava de escopo

O lojista não deve receber o mesmo nível de animação do herói ou dos combatentes.

Para o MVP:

- idle de 2 a 4 frames;
- uma reação simples;
- retrato opcional somente se houver tempo;
- sem animação de caminhada;
- sem variações completas por domínio.

A variação do lojista entre andares deve acontecer prioritariamente por balcão, acessórios, paleta e props, não por novos sprites completos.

---

## 22. Próxima decisão recomendada

Definir:

1. se o mentor aparece fisicamente dentro das salas ou apenas por retrato/balão;
2. se o lojista é uma figura fixa em todas as runs ou um papel assumido por variações visuais do mesmo personagem.

---

## 23. Decisões sobre mentor e lojista

### 23.1 Mentor

Escolha fechada: **B — o mentor aparece por retrato e balão de fala, sem sprite físico na exploração**.

Consequências:

- o mentor pode comentar a run sem precisar estar logicamente presente em cada sala;
- economiza sprite de exploração, animações, colisão e posicionamento;
- permite concentrar esforço em expressões faciais e escrita;
- sua presença pertence à interface narrativa, não ao mapa;
- momentos importantes podem usar enquadramentos maiores, efeitos ou molduras especiais sem exigir um personagem jogável no cenário.

P0 recomendado:

- retrato neutro;
- retrato aprovando;
- retrato preocupado;
- retrato sarcástico/zoando;
- balão de fala;
- caixa de diálogo;
- indicador visual de quem está falando.

### 23.2 Lojista

Escolha fechada: **A — um único lojista recorrente em todas as runs**.

Função de identidade:

- personagem recorrente reconhecível;
- possível piada interna ou referência persistente;
- ponto de familiaridade entre andares personalizados;
- elemento de continuidade em uma torre que muda conforme a vaga.

A aparência-base do lojista permanece constante. A adaptação por andar ocorre por:

- balcão;
- acessórios pequenos;
- iluminação;
- props ao redor;
- paleta contextual;
- falas e produtos oferecidos.

### 23.3 Trava importante

O lojista pode virar referência recorrente, mas não deve depender de referência externa específica para funcionar.

A prioridade é criar um personagem autoral memorável. Referências, easter eggs ou piadas internas podem existir como camada secundária, nunca como fundamento do design.

---

## 24. Próxima decisão recomendada

Definir:

1. o papel narrativo do lojista;
2. a lógica visual das cartas aliadas: soldados genéricos, avatares de competências ou arquétipos profissionais.

---

## 25. Decisões sobre lojista e aliados

### 25.1 Personalidade do lojista

Escolha fechada: **D — ex-recrutador que virou camelô de conhecimento**.

O lojista é um personagem recorrente, sarcástico e informal, que conhece por dentro as contradições dos processos seletivos. Ele transforma desafios, upgrades e cartas em “ofertas” e comenta vagas absurdas, exigências incoerentes e promessas de contratação.

Regras de escrita:

- humor brasileiro e linguagem de dev;
- ironia dirigida ao sistema, não ao jogador;
- nunca humilha quem está aprendendo;
- pode exagerar vendas e benefícios;
- deve parecer oportunista, mas útil;
- mantém continuidade entre andares e runs.

Exemplos de função narrativa:

- traduzir desafios longos da loja em linguagem divertida;
- comentar exigências da vaga;
- oferecer contexto sobre a utilidade real de uma carta;
- servir como alívio cômico;
- virar referência recorrente e mascote secundário.

Trava de escopo:

- um único sprite-base;
- um idle curto;
- uma reação;
- variação por balcão, props, iluminação e falas;
- sem versões completas por domínio.

### 25.2 Natureza visual dos aliados

Escolha fechada: **C — competências transformadas em arquétipos de fantasia**.

Os soldados aliados não são profissionais de tecnologia literais. Cada competência técnica é traduzida para um papel de fantasia reconhecível.

Exemplos:

| Domínio | Tradução de fantasia |
|---|---|
| QA | inspetor, caçador de bugs, sentinela |
| Frontend | ilusionista, artesão de interfaces, bardo visual |
| Backend | engenheiro arcano, ferreiro de serviços, guardião de mecanismos |
| Banco de Dados | arquivista, guardião de cofres, cronista |
| Cloud | invocador de estruturas, navegador de tempestades |
| IA | oráculo, golem de aprendizado, alquimista de padrões |
| Cyber | vigia, caçador de intrusos, guardião de selos |
| Mobile | mensageiro, explorador, artesão portátil |

### 25.3 Regra de design dos aliados

Cada aliado deve comunicar três coisas em poucos segundos:

1. seu papel de fantasia;
2. a competência técnica que representa;
3. sua função mecânica no card battler.

Não basta parecer bonito. A silhueta, arma, acessório e efeito precisam ajudar o jogador a entender o que a carta faz.

### 25.4 Evitar literalidade excessiva

Elementos como notebooks, logos de frameworks, código flutuando e camisetas de tecnologia podem aparecer como detalhe ou piada, mas não devem substituir o design de fantasia.

A regra é:

> fantasia primeiro, competência em segundo plano, referência dev como camada final.

---

## 26. Próxima decisão recomendada

Definir:

1. quantos arquétipos aliados-base existirão no MVP;
2. como as competências específicas da JD modificam esses arquétipos sem exigir um sprite totalmente novo.

---

## 27. Decisões sobre o sistema visual dos aliados

### 27.1 Corpos-base aliados

Escolha fechada: **A — quatro arquétipos mecânicos-base**.

Os quatro corpos-base do MVP serão:

1. **Vanguarda**
   - alta vida;
   - leitura de linha de frente;
   - postura defensiva;
   - escudo, armadura pesada ou arma curta.

2. **Atacante**
   - dano direto;
   - silhueta agressiva;
   - arma de alcance ou golpe forte;
   - animação de ataque com leitura rápida.

3. **Suporte**
   - buffs, escudos, cura ou fortalecimento;
   - postura menos agressiva;
   - foco em instrumento, foco arcano ou estandarte.

4. **Especialista**
   - efeitos de regra, palavras-chave e manipulação;
   - silhueta mais incomum;
   - ferramenta, tomo, dispositivo ou familiar;
   - também absorve temporariamente o papel de Controlador no MVP.

Esses quatro arquétipos existem como linguagem mecânica. Os domínios e competências mudam sua aparência e flavor, não sua função-base.

### 27.2 Sistema modular de variação

Escolha fechada: **B — personalização modular controlada**.

Cada competência específica pode modificar:

- arma ou ferramenta;
- acessório de cabeça, costas ou cintura;
- paleta;
- pequeno efeito visual;
- ícone da competência;
- nome e flavor text.

O corpo-base, o rig visual, o ponto de origem e a animação permanecem iguais.

### 27.3 Regras de produção

Para o MVP:

- cada corpo-base recebe um idle e um ataque;
- acessórios devem caber sobre o mesmo canvas;
- nenhuma variação pode exigir redesenho completo da animação;
- armas precisam respeitar o alcance máximo do canvas;
- efeitos grandes ficam no Phaser, não na sprite sheet;
- recolors usam a paleta mestra;
- cada combinação precisa continuar legível em 48x48.

### 27.4 Estrutura de arquivos sugerida

```text
allies/
  vanguard/
    base/
    weapons/
    head/
    back/
    palettes/
  attacker/
    base/
    weapons/
    head/
    back/
    palettes/
  support/
    base/
    tools/
    head/
    back/
    palettes/
  specialist/
    base/
    tools/
    head/
    back/
    palettes/
```

### 27.5 Regra de coerência visual

Uma competência só pode gerar uma variação visual se conseguir ser expressa com até:

- 1 troca de arma/ferramenta;
- 1 acessório principal;
- 1 paleta;
- 1 efeito pequeno;
- 1 ícone.

Se exigir mais do que isso, ela deve virar apenas nome, efeito mecânico ou flavor text no MVP.

---

## 28. Próxima decisão recomendada

Definir:

1. quantas variações completas por arquétipo entram no MVP;
2. se os quatro corpos-base compartilham a mesma anatomia geral ou se cada um recebe uma silhueta realmente distinta.

---

## 29. Decisões sobre quantidade e silhueta dos aliados

### 29.1 Quantidade de variações

Escolha fechada: **A — duas variações visuais completas por corpo-base**.

Total planejado para o MVP:

```text
4 arquétipos × 2 variações = 8 aliados visuais completos
```

Distribuição:

- 2 Vanguarda;
- 2 Atacante;
- 2 Suporte;
- 2 Especialista.

Esta decisão reduz o risco de a arte bloquear o desenvolvimento. As oito áreas de conhecimento não precisam receber um aliado completo exclusivo. Domínios e requisitos adicionais podem ser representados por:

- paleta;
- acessório;
- arma/ferramenta;
- ícone;
- nome;
- efeito mecânico;
- flavor text.

### 29.2 Silhuetas

Escolha fechada: **B — silhuetas distintas sobre estrutura compatível**.

Leitura visual esperada:

- **Vanguarda:** mais larga e pesada;
- **Atacante:** mais angular e inclinada para frente;
- **Suporte:** mais vertical e organizada;
- **Especialista:** mais assimétrica e incomum.

Compatibilidades obrigatórias:

- mesmo canvas de 48x48;
- origem padronizada;
- altura aproximada semelhante;
- área segura comum para acessórios;
- pontos de alinhamento previsíveis;
- animações compatíveis com o sistema modular.

### 29.3 Trava de produção

As duas variações por arquétipo não devem ser tratadas como oito personagens totalmente independentes.

Cada par deve compartilhar:

- estrutura corporal;
- timing de animação;
- origem;
- partes reaproveitáveis;
- lógica de ataque.

A diferença deve vir principalmente de silhueta secundária, equipamento, paleta e efeito.

### 29.4 Consequência para o catálogo

O catálogo deve separar:

- **arquétipo mecânico**;
- **variante visual**;
- **domínio**;
- **tags de competência**;
- **paleta**;
- **equipamento**;
- **efeito**.

Exemplo:

```json
{
  "id": "ally_vanguard_02",
  "archetype": "vanguard",
  "visualVariant": "02",
  "compatibleDomains": ["qa", "cyber", "database"],
  "equipmentSlots": ["weapon", "head", "back"],
  "animationSet": "vanguard_base",
  "canvas": "48x48"
}
```

---

## 30. Próxima decisão recomendada

Definir:

1. se as oito variações serão distribuídas previamente por domínio ou escolhidas pelo motor conforme compatibilidade;
2. quantos equipamentos/acessórios modulares cada corpo-base recebe no MVP.

---

## 31. Decisões sobre afinidades e kits visuais dos aliados

### 31.1 Relação entre aliados e domínios

Escolha fechada: **C — afinidade principal com compatibilidades secundárias**.

Cada variação visual possui:

- um domínio de afinidade principal;
- até dois ou três domínios secundários compatíveis;
- tags de competência específicas;
- um arquétipo mecânico fixo.

Exemplo:

```json
{
  "id": "ally_vanguard_sentinel",
  "archetype": "vanguard",
  "primaryDomain": "qa",
  "compatibleDomains": ["cyber", "database"],
  "requirementTags": ["validation", "inspection", "protection"]
}
```

Esta regra preserva identidade visual sem obrigar um sprite exclusivo para cada domínio.

### 31.2 Seleção pelo motor

A IA não escolhe diretamente o arquivo do aliado.

Fluxo:

1. a IA interpreta a JD e retorna domínios, pesos e tags;
2. o motor consulta o catálogo;
3. o motor filtra aliados por afinidade e compatibilidade;
4. o motor escolhe apenas combinações curadas e existentes;
5. nome, flavor text e contexto podem ser adaptados posteriormente.

Prioridade de seleção:

1. afinidade principal compatível;
2. compatibilidade secundária;
3. tags de requisito;
4. necessidade mecânica do deck;
5. variedade em relação às cartas já escolhidas.

### 31.3 Kits visuais curados

Escolha fechada: **B — equipamentos e acessórios organizados em kits curados**.

Cada kit define uma combinação aprovada de:

- corpo-base;
- arma ou ferramenta;
- acessório principal;
- paleta;
- pequeno efeito;
- ícone;
- conjunto de animação.

Exemplo:

```json
{
  "kitId": "vanguard_sentinel_qa",
  "body": "vanguard_01",
  "weapon": "shield_inspection",
  "head": "visor_check",
  "palette": "qa_warm",
  "effect": "scan_pulse",
  "icon": "validation",
  "animationSet": "vanguard_base"
}
```

### 31.4 Motivo da curadoria

A combinação livre de peças foi rejeitada porque criaria:

- acessórios que atravessam o corpo;
- armas incompatíveis com a animação;
- silhuetas confusas;
- paletas sem contraste;
- combinações visualmente incoerentes;
- crescimento exponencial do número de testes.

O sistema continua modular internamente, mas o jogador recebe apenas montagens aprovadas.

### 31.5 Regra de expansão

Novos kits podem ser adicionados sem alterar o código do aliado, desde que respeitem:

- canvas 48x48;
- origem padronizada;
- slots existentes;
- paleta mestra;
- animação-base;
- limite visual de uma arma, um acessório principal e um efeito pequeno.

---

## 32. Próxima decisão recomendada

Definir:

1. quantos kits curados cada uma das oito variações recebe no MVP;
2. se cartas com o mesmo kit podem ter nomes e efeitos mecânicos diferentes ou se cada kit corresponde a uma carta única.

---

## 33. Decisões sobre quantidade de kits e reutilização nas cartas

### 33.1 Quantidade de kits por variação

Escolha fechada: **B — dois kits curados por cada uma das oito variações**.

Meta final do MVP:

```text
8 variações visuais × 2 kits = 16 kits curados
```

Ordem de produção:

1. produzir o primeiro kit de cada variação;
2. validar os oito aliados no vertical slice;
3. corrigir escala, leitura, animação e exportação;
4. produzir o segundo kit apenas depois da base estar aprovada.

Essa ordem evita duplicar erros de proporção, origem, paleta ou encaixe em dezesseis combinações.

### 33.2 Reutilização de um kit em várias cartas

Escolha fechada: **B — um mesmo kit representa várias cartas da mesma família conceitual**.

Um kit visual não corresponde obrigatoriamente a uma única carta. Ele representa uma família coerente de competências.

Exemplo:

```text
Kit visual: Arquivista de Dados

Cartas possíveis:
- Guardião de Índices
- Mestre das Consultas
- Vigia das Transações
```

O que pode variar entre cartas que compartilham o kit:

- nome;
- custo;
- ataque;
- vida;
- palavra-chave;
- texto de efeito;
- ícone técnico;
- flavor text;
- pequeno efeito por código.

O que deve permanecer coerente:

- domínio;
- arquétipo;
- função visual;
- família de competência;
- leitura da silhueta.

### 33.3 Regra contra reutilização enganosa

O mesmo kit não pode representar cartas com funções visuais contraditórias.

Exemplo inadequado:

- usar a mesma arte de um defensor pesado para uma carta frágil de dano rápido;
- usar um suporte com estandarte como atacante puro sem justificativa;
- usar um arquivista para uma carta de mobilidade ou investida.

A arte pode representar várias cartas, mas todas devem pertencer à mesma família mecânica e temática.

### 33.4 Consequência para o catálogo

O catálogo deve separar:

- `visualKitId`;
- `cardId`;
- `archetype`;
- `domain`;
- `requirementTags`;
- `mechanicFamily`;
- `stats`;
- `keyword`;
- `flavor`.

Exemplo:

```json
{
  "cardId": "database_index_guardian",
  "visualKitId": "specialist_archivist_01",
  "archetype": "specialist",
  "domain": "database",
  "requirementTags": ["indexes", "query-performance"],
  "mechanicFamily": "control",
  "cost": 3,
  "attack": 2,
  "health": 4,
  "keyword": "shield"
}
```

### 33.5 Trava de produção

Os dezesseis kits são meta, não condição para iniciar o jogo.

P0 inicial:

- 8 kits, um por variação;
- todos com idle e ataque;
- integração completa com carta, grid e Phaser.

P1:

- segundo kit para cada variação;
- total final de 16 kits.

---

## 34. Próxima decisão recomendada

Definir:

1. quantas famílias mecânicas de carta existirão dentro de cada arquétipo;
2. como os inimigos reutilizam ou contrastam com o mesmo sistema de corpos-base, kits e afinidades.

---

## 35. Decisões sobre famílias mecânicas e estrutura dos inimigos

### 35.1 Famílias mecânicas das cartas aliadas

Escolha fechada: **A — duas famílias mecânicas por arquétipo**.

Estrutura inicial:

| Arquétipo | Família 1 | Família 2 |
|---|---|---|
| Vanguarda | Proteção | Resistência |
| Atacante | Golpe forte | Ataque múltiplo |
| Suporte | Escudo/Cura | Fortalecimento |
| Especialista | Controle | Efeito técnico |

Total:

```text
4 arquétipos × 2 famílias = 8 famílias mecânicas
```

Essas famílias definem a leitura principal da carta. Domínio, requisito e flavor personalizam a forma como a família se manifesta.

Exemplos:

- um Vanguarda de QA pode proteger por validação;
- um Vanguarda de Cyber pode proteger por selos;
- um Especialista de Banco de Dados pode controlar por bloqueio;
- um Especialista de Frontend pode controlar por reposicionamento ou estado visual.

### 35.2 Regra de clareza

Cada carta deve comunicar, nesta ordem:

1. arquétipo;
2. família mecânica;
3. domínio;
4. requisito específico.

A competência técnica não deve esconder a função no combate.

### 35.3 Estrutura dos inimigos

Escolha fechada: **B — duas famílias próprias de inimigos**.

#### Família 1 — Conflitos humanoides

Representam problemas produzidos por decisões, processos ou implementação.

Exemplos conceituais:

- requisito contraditório;
- código legado;
- dependência quebrada;
- teste frágil;
- integração mal resolvida.

Leitura visual:

- postura humanoide;
- ferramentas, placas, documentos, armas improvisadas;
- silhueta mais organizada, porém corrompida;
- maior proximidade com erros causados por pessoas ou sistemas mal definidos.

#### Família 2 — Criaturas e constructos

Representam falhas, anomalias e efeitos emergentes do sistema.

Exemplos conceituais:

- bug;
- glitch;
- deadlock;
- vazamento;
- loop infinito;
- sobrecarga;
- falha de sincronização.

Leitura visual:

- anatomia não humana;
- formas quebradas, assimétricas ou mecânicas;
- efeitos de corrupção mais visíveis;
- maior liberdade para partículas e animações por código.

### 35.4 Funções mecânicas dos inimigos

As duas famílias visuais podem assumir funções equivalentes às dos aliados:

- linha de frente;
- dano;
- suporte;
- controle.

Mas os nomes e a apresentação não usam os mesmos rótulos visuais dos aliados. O jogador deve reconhecer o comportamento sem sentir que está enfrentando apenas recolors do próprio exército.

### 35.5 Reaproveitamento controlado

Os inimigos podem compartilhar:

- timing de idle;
- timing de ataque;
- canvas 48x48;
- origem;
- efeitos de hit;
- morte por código;
- lógica mecânica.

Eles não devem compartilhar diretamente:

- silhueta principal;
- equipamentos centrais;
- paleta de aliados;
- leitura heroica;
- postura corporal positiva.

### 35.6 Quantidade recomendada para o MVP

P0 inicial:

- 2 conflitos humanoides;
- 2 criaturas/constructos;
- 1 kit visual por inimigo;
- idle e ataque;
- variações por paleta, acessório e efeito.

P1:

- segundo kit para cada base;
- maior especialização por domínio;
- variações críticas de corrupção.

---

## 36. Próxima decisão recomendada

Definir:

1. quantos inimigos-base completos entram no MVP final;
2. como chefes derivam dessas duas famílias sem exigir design totalmente novo.

---

## 37. Decisões sobre quantidade de inimigos e construção dos chefes

### 37.1 Quantidade de inimigos-base

Escolha fechada: **B — seis inimigos-base completos no MVP final**.

Distribuição:

- 3 conflitos humanoides;
- 3 criaturas/constructos.

Estratégia de produção:

### Vertical slice

- 2 conflitos humanoides;
- 2 criaturas/constructos;
- 1 kit por base;
- idle e attack;
- integração completa com carta, pista, dano e morte por código.

### MVP final

- 3 conflitos humanoides;
- 3 criaturas/constructos;
- variações curadas por domínio;
- diferenças de acessório, paleta, efeito e corrupção.

### 37.2 Regra de variedade

Os seis inimigos-base não precisam pertencer a seis domínios distintos.

Cada base recebe:

- uma afinidade principal;
- domínios compatíveis;
- tags de requisito;
- função mecânica;
- kits visuais curados.

Assim, um mesmo corpo-base pode representar problemas diferentes sem virar recolor arbitrário.

### 37.3 Construção dos chefes

Escolha fechada: **B — base ampliada com nova cabeça ou torso**.

Cada chefe parte de uma das seis bases inimigas e recebe:

- escala maior;
- nova cabeça, torso ou silhueta superior;
- acessório grande;
- paleta própria;
- efeito exclusivo;
- mecânica especial de uma regra;
- apresentação de entrada;
- emblema ou assinatura visual.

O objetivo é preservar:

- pernas;
- origem;
- timing de animação;
- parte da estrutura corporal;
- lógica-base de ataque.

### 37.4 Regra de transformação

Um chefe deve parecer evolução ou manifestação extrema de um conflito já conhecido, e não apenas um inimigo esticado.

Para ser aprovado, precisa mudar pelo menos:

1. silhueta superior;
2. ponto focal;
3. paleta;
4. efeito;
5. mecânica.

### 37.5 Limite de produção

Para o MVP:

- chefes não recebem animação completa totalmente nova;
- o ataque reaproveita o timing da base;
- efeitos grandes são feitos no Phaser;
- transformação, aura, partículas e entrada ficam por código;
- nova cabeça ou torso deve caber sobre a estrutura existente.

### 37.6 Quantidade de chefes

A demo mantém:

- 1 chefe por andar;
- 5 chefes na run;
- 1 chefe final especial.

Nem todos os chefes precisam de uma base exclusiva. Uma mesma base pode gerar mais de um chefe quando:

- o domínio é diferente;
- o torso/acessório muda;
- a mecânica é distinta;
- a leitura final não parece repetida.

---

## 38. Próxima decisão recomendada

Definir:

1. como os seis inimigos-base se distribuem entre função mecânica e família visual;
2. se o chefe final Recrutador usa corpo humanoide próprio ou uma forma simbólica derivada do sistema de conflitos.

---

## 39. Correção estrutural do combate: todos os oponentes usam cartas

### 39.1 Correção de interpretação

Foi corrigida uma confusão entre:

- **oponente/conflito**, que comanda a batalha;
- **unidade de carta**, que entra no grid e executa os ataques.

Todos os encontros de batalha do Merge Quest usam o mesmo princípio central:

> jogador e oponente permanecem fora do grid e comandam seus próprios decks; quem ocupa as pistas e luta são as unidades representadas pelas cartas.

Isso vale para:

- inimigos comuns;
- elites;
- chefes de andar;
- Recrutador final.

### 39.2 Composição correta da batalha

```text
Jogador/Herói em primeiro plano
        ↓ joga cartas
Grid aliado 3x3
        ↕ confronto por pistas
Grid inimigo 3x3
        ↑ joga cartas
Oponente/Conflito ao fundo
```

O oponente não entra fisicamente no grid e não ataca com o próprio corpo.

### 39.3 Camadas de assets separadas

#### A. Oponentes/Comandantes

São os personagens ou entidades enfrentados em cada sala de batalha.

Precisam de:

- sprite ou retrato de observador;
- idle;
- gesto de jogar carta ou conjurar;
- reação a dano direto;
- reação de derrota;
- expressão/efeito de personalidade;
- emblema e identificação do conflito.

Não precisam de animação de ataque corpo a corpo.

#### B. Unidades inimigas de carta

São as criaturas, soldados, bugs, constructos e manifestações que entram no grid inimigo.

Precisam de:

- sprite 48x48;
- idle;
- attack;
- hit por código;
- morte por código;
- função mecânica;
- afinidade de domínio;
- kit visual curado.

### 39.4 Decisão sobre famílias de oponentes

Escolha mantida e reinterpretada: **B — funções próprias por família**.

As duas famílias descrevem o estilo dos oponentes e de seus decks, não ataques físicos diretos.

#### Conflitos humanoides

Tendem a comandar decks de:

- controle;
- sabotagem;
- suporte negativo;
- ataque técnico;
- manipulação de recursos e pistas.

#### Criaturas/constructos

Tendem a comandar decks de:

- resistência;
- agressão;
- pressão direta;
- anomalias;
- efeitos instáveis.

A família visual ajuda o jogador a antecipar o estilo de deck do adversário.

### 39.5 Recrutador final

Escolha fechada: **A — o Recrutador comanda o deck final**.

Correção importante:

- ele não é o único oponente que joga cartas;
- ele usa o mesmo núcleo de batalha de todos os outros;
- sua diferença está na composição e no papel narrativo.

Características do deck final:

- combina os principais domínios e requisitos da JD;
- usa informações da run e do desempenho do jogador;
- possui cartas-assinatura de avaliação;
- pode introduzir uma regra especial de code review;
- conduz falas e decisões durante a luta;
- após a batalha, entrega o veredito `Merged`, `Changes Requested` ou `Draft`.

### 39.6 Hierarquia dos encontros

#### Inimigo comum

- deck curto e curado;
- uma identidade mecânica clara;
- uma ou duas cartas-assinatura;
- IA simples.

#### Elite

- deck mais coeso;
- combinação de domínio dominante e secundário;
- regra ou abertura especial;
- maior pressão estratégica.

#### Chefe de andar

- deck temático do agrupamento de requisitos;
- uma mecânica especial;
- avatar derivado de um oponente-base com torso/cabeça alterados;
- entrada e apresentação próprias.

#### Recrutador final

- deck personalizado pela vaga;
- síntese da run;
- diálogo e veredito;
- mesma linguagem estrutural do card battler.

### 39.7 Consequência para o inventário

A lista anterior de “seis inimigos-base” deve ser tratada como **seis bases de oponentes/comandantes**, e não como seis unidades que entram no grid.

O inventário de unidades inimigas de carta deve ser planejado separadamente.

---

## 40. Decisões registradas nesta rodada

- **B:** famílias de oponentes possuem estilos próprios de deck.
- **A:** o Recrutador comanda o deck final.
- Todos os oponentes do jogo atacam por meio de cartas.
- Oponentes e unidades de carta são categorias de asset distintas.

---

## 41. Próxima decisão recomendada

Definir:

1. se cada oponente possui deck fixo ou deck montado a partir de um conjunto curado;
2. como as unidades inimigas de carta se relacionam visualmente com os quatro arquétipos aliados.

---

## 42. Decisões sobre decks dos oponentes e unidades inimigas

### 42.1 Deck dos oponentes

Escolha fechada: **C — núcleo fixo com slots variáveis**.

Cada oponente possui:

- cartas-assinatura;
- uma identidade mecânica estável;
- uma curva de mana esperada;
- slots variáveis preenchidos pelo motor;
- compatibilidade com domínio, requisito e dificuldade.

Exemplo:

```json
{
  "opponentId": "conflict_legacy_keeper",
  "signatureCards": [
    "legacy_wall",
    "deprecated_dependency"
  ],
  "variableSlots": 5,
  "compatibleDomains": ["backend", "database"],
  "mechanicFamily": "control"
}
```

O motor não cria cartas novas. Ele seleciona cartas existentes do catálogo curado.

### 42.2 Unidades inimigas de carta

Escolha fechada: **C — sistema híbrido**.

As unidades inimigas possuem funções mecânicas reconhecíveis, mas usam nomes, silhuetas e linguagem próprios.

Arquétipos de leitura sugeridos:

| Função | Nome inimigo sugerido |
|---|---|
| Linha de frente | Bloqueador |
| Dano | Agressor |
| Debuff/suporte negativo | Sabotador |
| Controle/efeito especial | Anomalia |

Elas não são versões recoloridas dos aliados. Compartilham apenas a clareza funcional necessária para o jogador aprender o combate.

---

## 43. Correção fundamental: origem do deck inicial do jogador

O deck inicial do jogador é gerado a partir do **perfil profissional do próprio jogador**, não da descrição da vaga.

### 43.1 Fontes distintas

#### Perfil profissional

Define:

- competências já possuídas;
- experiências;
- stack conhecida;
- pontos fortes;
- cartas iniciais disponíveis;
- afinidades do deck do jogador.

#### Descrição da vaga (JD)

Define:

- requisitos cobrados;
- domínios dominantes e secundários;
- estrutura da torre;
- oponentes;
- decks inimigos;
- perguntas;
- desafios;
- chefes;
- dificuldade relativa.

#### Cruzamento perfil × vaga

Define:

- lacunas de conhecimento;
- nível de ameaça de cada requisito;
- quais competências do jogador são relevantes;
- quais requisitos aparecem como conflitos;
- quais recompensas têm maior valor;
- veredito final.

### 43.2 Fluxo corrigido

```text
Perfil profissional
        ↓
Competências do jogador
        ↓
Pool de cartas iniciais
        ↓
Deck inicial

Descrição da vaga
        ↓
Requisitos e pesos
        ↓
Torre, andares, oponentes e decks inimigos

Perfil × Vaga
        ↓
Lacunas, dificuldade, progressão e veredito
```

### 43.3 Regra de autoria

A IA interpreta o texto do perfil e mapeia competências para cartas existentes do catálogo. Ela não inventa cartas, stats ou habilidades.

### 43.4 Ponto de atenção de design

O deck é baseado no perfil, mas o sistema ainda precisa decidir como lidar com competências verdadeiras porém pouco relevantes para a vaga.

Exemplo:

```text
Perfil: React, CSS, UX
Vaga: Python, FastAPI, PostgreSQL
```

O jogador realmente possui competências, mas elas não cobrem diretamente os requisitos principais da vaga.

Essa situação não deve ser escondida. Ela é parte central da avaliação.

---

## 44. Regra conceitual consolidada

> O jogador entra na torre armado com aquilo que já sabe. A torre é construída com aquilo que a vaga exige. O jogo acontece no espaço entre os dois.

---

## 45. Próxima decisão recomendada

Definir:

1. se o deck inicial inclui todas as competências do perfil ou apenas as mais relevantes para a vaga;
2. como competências ausentes são adquiridas ou representadas durante a run.

---

## 46. Decisões sobre composição do deck inicial e cartas provisórias

### 46.1 Deck inicial ponderado

Escolha fechada: **C — o deck inicial combina relevância para a vaga com identidade profissional do jogador**.

Estrutura de referência para o deck inicial de 15 cartas:

- aproximadamente 10 a 12 cartas ligadas a competências do perfil relevantes para a JD;
- aproximadamente 3 a 5 cartas ligadas a competências fortes do perfil, mesmo quando secundárias para a vaga.

Regras:

- a vaga influencia a seleção, mas não cria competências inexistentes;
- o perfil profissional continua sendo a única fonte de competências iniciais;
- competências muito fortes do jogador não desaparecem apenas por serem menos relevantes à vaga;
- o deck deve preservar jogabilidade, curva de mana e diversidade de arquétipos;
- a ponderação final é feita pelo motor a partir de cartas já existentes no catálogo.

### 46.2 Ordem de decisão para montar o deck inicial

1. extrair competências declaradas no perfil;
2. mapear essas competências para cartas existentes;
3. cruzar com os requisitos da JD;
4. pontuar relevância;
5. reservar espaço para competências fortes e identitárias do jogador;
6. validar curva de mana, arquétipos e famílias mecânicas;
7. montar o deck final de 15 cartas.

### 46.3 Competências ausentes como cartas provisórias

Escolha fechada: **C — competências exigidas pela vaga, mas ainda ausentes no perfil, podem virar cartas provisórias de treinamento durante a run**.

Possíveis marcas visuais:

- `EM TREINAMENTO`;
- `DRAFT`;
- `EXPERIMENTAL`.

Essas cartas:

- podem ser obtidas por loja, item, pergunta ou desafio;
- podem ser usadas normalmente durante a run;
- ajudam o jogador a experimentar uma competência nova;
- não contam automaticamente como competência comprovada;
- precisam permanecer distinguíveis das cartas já dominadas.

### 46.4 Regra contra falsa validação

Concluir uma pergunta ou desafio não significa dominar uma competência.

Portanto:

- cartas provisórias não entram no perfil permanente como domínio comprovado;
- o veredito final trata essas competências como exposição, prática inicial ou aprendizado em andamento;
- a interface deve separar claramente:
  - competência já possuída;
  - competência relevante para a vaga;
  - competência treinada durante a run;
  - competência ainda ausente.

### 46.5 Consequência visual para o objeto carta

As cartas provisórias precisam de um estado visual próprio, sem exigir uma moldura completamente nova.

Recomendação:

- selo `DRAFT` ou `EM TREINAMENTO`;
- faixa diagonal discreta;
- borda secundária;
- pequeno efeito pulsante;
- ícone de progresso;
- tooltip explicando que a carta não representa domínio comprovado.

### 46.6 Risco de balanceamento

Cartas provisórias não podem ser sempre superiores às cartas iniciais, ou o perfil do jogador perde valor.

Regra recomendada:

- elas resolvem lacunas específicas;
- podem ser fortes em contexto;
- têm custo, restrição ou condição;
- não substituem o núcleo do deck construído a partir do perfil.

---

## 47. Regra conceitual consolidada

> O perfil define o que o jogador já domina. A vaga define o que ele precisa enfrentar. A run permite experimentar competências ausentes, sem fingir que exposição equivale a domínio.

---

## 48. Próxima decisão recomendada

Definir:

1. como o jogador obtém cartas provisórias durante a run;
2. se alguma carta provisória pode ser convertida em progresso permanente após evidência adicional.

---

## 49. Decisões sobre aquisição e progressão de cartas provisórias

### 49.1 Aquisição por múltiplos caminhos

Escolha fechada: **C — cartas provisórias podem ser obtidas por diferentes tipos de sala, com níveis distintos de evidência e poder**.

#### Pergunta rápida

- concede versão básica ou temporária;
- representa contato inicial;
- pode durar apenas uma batalha ou um andar;
- exige pouca evidência;
- não deve entregar uma carta de alto impacto.

#### Sala de item

- oferece escolha entre opções curadas;
- concede uma carta provisória intermediária;
- representa descoberta ou experimentação;
- pode incluir restrições ou duração limitada.

#### Loja

- exige desafio longo;
- concede a versão provisória mais forte;
- representa evidência prática mais robusta;
- ainda não significa domínio comprovado;
- pode vir com selo de progresso superior.

#### Chefe

- concede carta temática, upgrade ou evolução temporária;
- representa superação de um agrupamento de requisitos;
- pode fortalecer uma carta provisória já obtida;
- deve continuar marcada como competência em desenvolvimento.

### 49.2 Escala de evidência sugerida

| Origem | Nível de evidência | Estado sugerido |
|---|---:|---|
| Pergunta | baixo | Contato inicial |
| Item | médio | Em experimentação |
| Loja | alto | Em treinamento |
| Chefe | alto/contextual | Prática consolidada na run |

Essa escala afeta:

- duração;
- força;
- restrição;
- texto do relatório;
- aparência do selo;
- possibilidade de upgrade.

### 49.3 Progressão permanente

Escolha fechada: **C — cartas provisórias não viram competências dominadas, mas geram registro de progresso**.

Ao final da run, o sistema pode registrar:

- teve contato com;
- demonstrou compreensão inicial;
- praticou em contexto;
- competência em desenvolvimento;
- recomendada para estudo posterior.

### 49.4 O que o registro de progresso pode influenciar

Em runs futuras, o registro pode:

- alterar falas do mentor;
- desbloquear perguntas de revisão;
- priorizar desafios de continuidade;
- permitir começar com uma versão de treinamento mais fraca;
- reduzir repetição de conteúdo já visto;
- alimentar o relatório de evolução.

### 49.5 O que o registro de progresso não pode fazer

Ele não deve:

- declarar domínio;
- adicionar automaticamente a competência ao perfil profissional;
- substituir comprovação real;
- elevar o veredito como se o jogador já possuísse experiência profissional;
- transformar exposição em certificação.

### 49.6 Regra conceitual

> A run pode gerar evidência de aprendizado, mas não fabricar experiência profissional.

### 49.7 Consequência visual

As cartas provisórias devem comunicar também seu nível de evidência.

Sistema sugerido:

- mesmo frame-base da carta normal;
- selo de estado;
- faixa lateral ou inferior;
- ícone de progresso;
- tooltip explicativo;
- intensidade visual proporcional ao nível de evidência;
- sem criar quatro molduras totalmente novas.

---

## 50. Próxima decisão recomendada

Definir:

1. se cartas provisórias desaparecem ao fim da run ou podem reaparecer como versões de treinamento em runs futuras;
2. se o relatório final mostra apenas o veredito geral ou também um mapa visual das competências do perfil, da vaga e das lacunas.

---

## 51. Decisões sobre persistência das cartas provisórias e relatório final

### 51.1 Persistência das cartas provisórias

Escolha registrada: **B — cartas provisórias permanecem disponíveis após a run**.

Esta decisão entra em tensão com uma regra anterior: o deck inicial representa as competências declaradas no perfil profissional. Para preservar a coerência do produto, a persistência será implementada com uma trava explícita.

#### Regra final

Cartas provisórias permanecem disponíveis em uma **Coleção de Treinamento**, mas:

- continuam marcadas como `DRAFT`, `EM TREINAMENTO` ou `EXPERIMENTAL`;
- não contam como competência comprovada;
- não alteram automaticamente o perfil profissional;
- não elevam diretamente o veredito como se fossem domínio real;
- não substituem cartas originadas do perfil;
- podem ser reutilizadas em runs futuras dentro de limites definidos.

#### Composição futura do deck

O deck inicial continua tendo como núcleo as competências do perfil.

Uma run futura pode incluir cartas persistentes de treinamento por meio de:

- slots específicos de treinamento;
- escolha manual antes da run;
- regras de revisão;
- desbloqueios condicionais;
- limite de quantidade.

Recomendação inicial:

```text
Deck de 15 cartas
- 12 a 14 cartas baseadas no perfil
- até 1 a 3 cartas persistentes de treinamento
```

Isso preserva progressão sem permitir que o jogador substitua o próprio perfil por cartas obtidas em runs anteriores.

### 51.2 Risco de design

Sem essa trava, o jogador poderia:

1. acumular cartas de competências ausentes;
2. começar runs futuras com um deck artificialmente completo;
3. parecer preparado para vagas que o perfil ainda não sustenta;
4. enfraquecer a proposta de avaliação honesta.

Portanto, “permanecer disponível” não significa “virar competência dominada”.

### 51.3 Relatório final

Escolha fechada: **B — veredito geral acompanhado de mapa visual de competências**.

O relatório final deve mostrar:

- competências já presentes no perfil;
- requisitos identificados na JD;
- competências do perfil relevantes para a vaga;
- competências treinadas durante a run;
- lacunas que permaneceram;
- desempenho por agrupamento de requisitos;
- veredito final:
  - `MERGED`;
  - `CHANGES REQUESTED`;
  - `DRAFT`.

### 51.4 Estrutura visual recomendada

#### Bloco 1 — Veredito

- selo grande;
- resumo curto;
- barra ou indicador de Confiança final;
- mensagem do Recrutador;
- mensagem do Mentor.

#### Bloco 2 — Mapa de competências

Quatro estados visuais:

| Estado | Significado |
|---|---|
| Dominada no perfil | competência declarada e mapeada |
| Relevante para a vaga | competência exigida pela JD |
| Em treinamento | praticada durante a run |
| Lacuna | exigida, mas ainda não demonstrada |

#### Bloco 3 — Evidências da run

- perguntas respondidas;
- desafios concluídos;
- chefes vencidos;
- cartas provisórias obtidas;
- agrupamentos com melhor e pior desempenho.

#### Bloco 4 — Próximos passos

- competências prioritárias;
- recomendações de estudo;
- desafios sugeridos;
- possíveis cartas de treinamento para revisão futura.

### 51.5 Consequências para UI e assets

P0:

- selo `MERGED`;
- selo `CHANGES REQUESTED`;
- selo `DRAFT`;
- ícones dos quatro estados de competência;
- barras ou marcadores de progresso;
- cards de competência;
- painel de resumo;
- moldura de recomendação;
- legenda visual.

P1:

- animação de entrada do veredito;
- transição entre mapa e detalhes;
- comparativo perfil × vaga;
- histórico entre runs.

### 51.6 Regra de clareza

O relatório precisa separar visualmente:

- o que o jogador já possuía;
- o que a vaga cobrava;
- o que foi apenas treinado;
- o que continua faltando.

Nenhum estado pode depender apenas de cor. Ícone, texto ou padrão também devem comunicar a diferença.

---

## 52. Regra consolidada

> Cartas de treinamento podem persistir como ferramentas de prática, mas nunca como prova automática de competência. O relatório final deve tornar essa diferença impossível de confundir.

---

## 53. Próxima decisão recomendada

Definir:

1. quantos slots de treinamento podem entrar em uma run futura;
2. qual estrutura visual será usada no mapa de competências: radar, matriz, trilhas ou cartões agrupados.

---

## 54. Decisões sobre slots de treinamento e visualização das competências

### 54.1 Slots de treinamento em runs futuras

Escolha fechada: **B — até 2 slots de treinamento por deck**.

Estrutura de referência:

```text
Deck de 15 cartas
- 13 cartas baseadas no perfil profissional
- até 2 cartas persistentes de treinamento
```

Regras:

- os slots de treinamento são opcionais;
- o jogador escolhe quais cartas de treinamento levar;
- essas cartas continuam marcadas como `DRAFT`, `EXPERIMENTAL` ou `EM TREINAMENTO`;
- não contam como competência comprovada;
- não substituem o núcleo do deck;
- podem ter restrições específicas de uso;
- o relatório final identifica separadamente o desempenho obtido com elas.

### 54.2 Critério de desbloqueio

Uma carta de treinamento só pode ocupar um desses slots quando:

- foi obtida em uma run anterior;
- possui registro de evidência associado;
- continua compatível com a vaga atual;
- não viola regras de domínio ou arquétipo;
- está dentro do limite de 2 slots.

### 54.3 Mapa de competências

Escolha fechada: **C — cartões agrupados por estado**.

A visualização será dividida em grupos de cartões:

1. **Presente no perfil**
2. **Relevante para a vaga**
3. **Em treinamento**
4. **Lacuna**

Cada cartão de competência deve conter, conforme o espaço permitir:

- nome da competência;
- domínio;
- ícone;
- estado;
- nível de relevância;
- evidência da run;
- recomendação curta;
- vínculo com cartas ou desafios.

### 54.4 Motivo da escolha

Cartões agrupados foram escolhidos porque:

- combinam com a linguagem visual de cartas do jogo;
- funcionam melhor em desktop e telas menores;
- evitam a falsa precisão de gráficos radar;
- permitem explicar competências específicas;
- são mais fáceis de filtrar, ordenar e expandir;
- facilitam acessibilidade com texto e ícones.

### 54.5 Regras visuais

Nenhum estado depende apenas de cor.

Cada grupo usa combinação de:

- cor;
- ícone;
- título;
- padrão de borda;
- selo textual;
- posição fixa na tela.

### 54.6 Priorização do relatório

P0:

- quatro grupos;
- cartões simples;
- selo de veredito;
- legenda;
- resumo de lacunas;
- próximos passos.

P1:

- filtros por domínio;
- ordenação por relevância;
- expansão de detalhes;
- histórico entre runs;
- comparação com runs anteriores.

---

## 55. Regra consolidada

> O perfil continua sendo o núcleo do deck. A progressão persistente ocupa no máximo dois slots claramente identificados como treinamento. O relatório traduz a jornada em cartões de competência fáceis de compreender.

---

## 56. Próxima decisão recomendada

Definir:

1. se o jogador escolhe manualmente os 2 slots de treinamento ou se o sistema recomenda e ele confirma;
2. como o cartão de competência mostra evidência: por barra, selos, níveis textuais ou histórico de desafios.

---

## 57. Decisões sobre escolha dos slots de treinamento e evidências

### 57.1 Escolha dos 2 slots de treinamento

Escolha fechada: **C — o sistema recomenda e o jogador confirma ou troca**.

Fluxo:

1. o sistema analisa a JD atual;
2. cruza os requisitos com a Coleção de Treinamento;
3. recomenda até duas cartas compatíveis;
4. explica por que cada carta foi sugerida;
5. o jogador pode aceitar, remover ou trocar;
6. qualquer substituição precisa respeitar compatibilidade com a vaga e limite de dois slots.

A recomendação deve considerar:

- relevância para a vaga;
- lacunas atuais;
- histórico de uso;
- nível de evidência;
- equilíbrio do deck;
- redundância com cartas já presentes.

### 57.2 Regra de autonomia

O jogador mantém a decisão final, mas não pode escolher cartas incompatíveis apenas por serem fortes.

A interface deve mostrar claramente:

- recomendação do sistema;
- motivo da recomendação;
- impacto esperado no deck;
- selo de treinamento;
- motivo de uma carta ser incompatível.

### 57.3 Evidência de competência

Escolha fechada: **B + C — níveis textuais na visão principal e histórico detalhado ao abrir o cartão**.

#### Visão principal

O cartão mostra um selo textual:

- `CONTATO INICIAL`
- `EM EXPERIMENTAÇÃO`
- `EM TREINAMENTO`
- `PRÁTICA DEMONSTRADA`

Também mostra:

- nome da competência;
- domínio;
- relevância para a vaga;
- estado atual;
- ícone;
- indicação de lacuna ou progresso.

#### Visão detalhada

Ao abrir o cartão, o jogador vê o histórico de evidências:

- perguntas respondidas;
- desafios concluídos;
- chefes relacionados;
- cartas usadas;
- resultados;
- erros recorrentes;
- pontos ainda não demonstrados;
- recomendação de próximo passo.

### 57.4 Regra contra falsa precisão

Percentuais de domínio não serão usados no MVP.

O sistema não deve afirmar algo como `SQL 72%`, pois isso transmite precisão que a avaliação não possui.

A linguagem preferida é qualitativa e baseada em evidências observáveis.

### 57.5 Consequências para UI

P0:

- card de competência em estado resumido;
- selo textual de evidência;
- painel de detalhe;
- lista de evidências;
- ícone de recomendação;
- botão de aceitar/trocar carta de treinamento;
- aviso de incompatibilidade.

P1:

- filtros por domínio;
- ordenação por relevância;
- comparação entre runs;
- linha do tempo de evidências;
- recomendação explicada pelo Mentor.

---

## 58. Regra consolidada

> O sistema recomenda com base na vaga, o jogador mantém a escolha final e toda afirmação de progresso precisa estar ligada a evidências visíveis.

---

## 59. Próxima decisão recomendada

Definir:

1. qual será a estrutura visual principal do HUD de exploração;
2. quais informações são obrigatórias na carta durante a batalha.

---

## 60. Decisões sobre HUD de exploração e anatomia das cartas

### 60.1 HUD de exploração em duas camadas

Escolha fechada: **C — HUD permanente mínimo com painel expandido sob demanda**.

#### Camada permanente

Fica sempre visível:

- barra de Confiança;
- minimapa compacto;
- indicador de interação;
- alertas essenciais;
- feedback de objetivo concluído ou perigo imediato.

#### Camada expandida

Aparece ao abrir um painel ou segurar uma tecla:

- andar atual;
- domínio dominante;
- domínio secundário;
- agrupamento de requisitos;
- objetivo atual;
- deck;
- cartas de treinamento;
- efeitos ativos;
- histórico curto da run.

### 60.2 Regra de prioridade visual

A exploração deve continuar sendo o foco da tela.

Por isso:

- o HUD permanente ocupa apenas as bordas;
- o centro da sala permanece livre;
- elementos temporários desaparecem após cumprir sua função;
- informações pedagógicas longas não ficam sobre o cenário;
- o painel expandido pausa ou bloqueia a movimentação.

### 60.3 Anatomia visual das cartas

Escolha fechada: **C — leitura de combate + identidade**.

Sempre visível na carta:

- custo;
- ataque;
- vida;
- nome;
- ícone da palavra-chave;
- ícone do domínio;
- selo `DRAFT`, `EXPERIMENTAL` ou `EM TREINAMENTO`, quando aplicável;
- ilustração da unidade.

Ao ampliar ou selecionar:

- texto completo do efeito;
- família mecânica;
- tags de competência;
- explicação da palavra-chave;
- origem da carta;
- nível de evidência;
- flavor text.

### 60.4 Hierarquia de leitura da carta

A carta deve ser lida nesta ordem:

1. custo;
2. ataque e vida;
3. arquétipo visual;
4. palavra-chave;
5. domínio;
6. estado de treinamento;
7. texto detalhado.

A interface não deve exigir leitura longa para uma decisão de combate simples.

### 60.5 Estados visuais necessários

P0:

- normal;
- selecionada;
- posicionável;
- bloqueada por mana;
- buffada;
- debuffada;
- recebendo dano;
- em treinamento;
- ampliada;
- descartada ou destruída.

P1:

- carta nova;
- carta recomendada;
- carta de chefe;
- carta rara;
- carta evoluída durante a run.

### 60.6 Consequências para assets

P0:

- moldura-base da carta;
- verso;
- área da ilustração;
- marcadores de custo, ataque e vida;
- ícones das palavras-chave;
- ícones dos domínios;
- selo de treinamento;
- moldura ampliada;
- estados de seleção e bloqueio;
- slot visual no grid;
- preview de posicionamento.

---

## 61. Regra consolidada

> A exploração mostra apenas o indispensável. A carta mostra tudo o que o jogador precisa para decidir, e revela o restante quando ele pede detalhes.

---

## 62. Próxima decisão recomendada

Definir:

1. a posição da barra de Confiança e do minimapa no HUD;
2. a proporção e orientação das cartas na mão e no grid.

---

## 63. Decisões sobre posição do HUD e formato das cartas

### 63.1 Posição dos elementos principais do HUD

Escolha fechada: **A — Confiança no topo esquerdo e minimapa no topo direito**.

#### Topo esquerdo

- barra de Confiança;
- valor atual;
- efeitos imediatos relacionados ao estado do jogador;
- feedback curto de cura, dano ou proteção.

#### Topo direito

- minimapa compacto;
- sala atual;
- conexões conhecidas;
- ícones de salas especiais descobertas;
- indicador de objetivo de navegação, quando necessário.

### 63.2 Regra de equilíbrio visual

A distribuição oposta dos dois elementos cria equilíbrio sem cobrir o centro da sala.

Regras:

- nenhum dos dois deve ultrapassar excessivamente a área das paredes;
- a barra de Confiança precisa ser legível sem dominar a cena;
- o minimapa usa ícones simples e poucos detalhes;
- diálogos e notificações não devem competir com esses cantos;
- em telas menores, o HUD pode reduzir escala ou agrupar elementos sem mudar sua hierarquia.

### 63.3 Formato das cartas

Escolha fechada: **B — cartas verticais na mão e versões compactas/quadradas no grid**.

#### Na mão

A carta vertical mostra:

- ilustração;
- nome;
- custo;
- ataque;
- vida;
- palavra-chave;
- domínio;
- selo de treinamento;
- identidade visual completa.

#### No grid

A unidade usa uma apresentação compacta:

- sprite da unidade;
- ataque;
- vida;
- palavra-chave;
- estado visual;
- domínio de forma discreta;
- efeitos ativos.

O grid não precisa exibir a moldura completa da carta vertical.

### 63.4 Transição carta → unidade

Ao jogar uma carta:

1. a carta sai da mão;
2. move-se até o slot escolhido;
3. reduz ou se transforma;
4. revela a unidade compacta no grid;
5. aplica efeito de entrada;
6. atualiza stats e estado.

A animação deve reforçar que a carta representa diretamente a unidade.

### 63.5 Consequências para assets e UI

P0:

- carta vertical completa;
- versão compacta de unidade no grid;
- slot vazio;
- slot válido;
- slot bloqueado;
- preview de posicionamento;
- transição visual carta → unidade;
- marcadores compactos de ataque e vida;
- ícone reduzido da palavra-chave;
- estados de buff, debuff e dano.

### 63.6 Regra de legibilidade

A versão compacta deve continuar legível quando várias unidades ocuparem o grid.

Prioridade de leitura:

1. sprite;
2. ataque e vida;
3. palavra-chave;
4. estado;
5. domínio.

---

## 64. Regra consolidada

> O HUD divide navegação e sobrevivência entre os cantos superiores. A mão preserva a fantasia da carta; o grid mostra apenas o necessário para resolver o combate.

---

## 65. Próxima decisão recomendada

Definir:

1. se a barra de Confiança usa corações, barra contínua ou segmentos;
2. como o minimapa representa salas desconhecidas, visitadas e especiais.

---

## 66. Decisões sobre Confiança e minimapa

### 66.1 Representação da Confiança

Escolha fechada: **C — barra segmentada**.

A Confiança será apresentada como uma barra dividida em segmentos, permitindo:

- leitura rápida do valor restante;
- feedback claro de perda e recuperação;
- indicação de faixas de estado;
- animações de quebra, recomposição e proteção;
- comunicação visual distinta de uma barra de vida genérica.

#### Estados sugeridos

- **Estável:** maioria dos segmentos preenchidos;
- **Abalada:** perda perceptível, mas sem efeito crítico;
- **Crítica:** poucos segmentos restantes, com animação ou alerta;
- **Protegida:** segmento temporário adicional ou overlay de escudo;
- **Recuperando:** segmento em animação de recomposição.

#### Regra visual

A barra deve continuar sendo reconhecida como Confiança, não apenas vida.

Possíveis elementos de identidade:

- ícone de determinação, foco ou merge;
- segmentos em forma de pequenos blocos/pixels;
- animação de “conflito” ao perder Confiança;
- reconstrução visual ao recuperar;
- mudança de temperatura da paleta conforme o estado.

### 66.2 Minimapa completo com salas especiais

Escolha fechada: **C — minimapa com estados de exploração e ícones de salas especiais**.

Estados obrigatórios:

- desconhecida;
- revelada;
- visitada;
- atual;
- bloqueada, quando aplicável.

Ícones especiais:

- batalha;
- item;
- loja;
- pergunta;
- descanso;
- chefe;
- saída/escada.

### 66.3 Regra de revelação

Ícones especiais não aparecem automaticamente em salas ainda desconhecidas.

Eles podem ser revelados por:

- visita direta;
- efeito de carta ou item;
- habilidade de exploração;
- evento narrativo;
- regra específica do andar.

Isso preserva descoberta e evita transformar o minimapa em uma lista de recompensas garantidas.

### 66.4 Prioridade de leitura do minimapa

O jogador deve identificar, nesta ordem:

1. sala atual;
2. conexões disponíveis;
3. salas visitadas;
4. salas reveladas;
5. salas especiais;
6. bloqueios ou caminhos ainda inacessíveis.

### 66.5 Consequências para assets

P0:

- moldura do minimapa;
- sala desconhecida;
- sala revelada;
- sala visitada;
- sala atual;
- sala bloqueada;
- conexão horizontal;
- conexão vertical;
- ícones de batalha, item, loja, pergunta, descanso, chefe e saída;
- animação simples de descoberta;
- destaque de objetivo.

P1:

- efeito de revelar área;
- rota sugerida;
- marcador de recompensa;
- minimapa ampliado;
- animação de desbloqueio de caminho.

### 66.6 Regra de acessibilidade

Os estados do minimapa não podem depender apenas de cor.

Cada estado deve combinar:

- cor;
- preenchimento;
- borda;
- padrão;
- ícone ou marcador.

---

## 67. Regra consolidada

> A Confiança usa segmentos para comunicar estabilidade e quebra. O minimapa mostra exploração, descoberta e função das salas sem antecipar informações que o jogador ainda não revelou.

---

## 68. Próxima decisão recomendada

Definir:

1. quantos segmentos a barra de Confiança possui;
2. qual estilo visual domina os ícones do minimapa: símbolos técnicos, símbolos de dungeon ou híbrido.

---

## 69. Decisões sobre segmentos de Confiança e linguagem do minimapa

### 69.1 Quantidade de segmentos da Confiança

Escolha fechada: **B — 10 segmentos**.

A barra de Confiança terá dez blocos visuais.

Vantagens:

- leitura imediata;
- dano e cura continuam granulares;
- cada segmento equivale visualmente a 10% da barra;
- estados críticos ficam fáceis de comunicar;
- proteção temporária pode aparecer como segmento adicional ou camada sobreposta;
- animações de quebra e recuperação continuam legíveis.

### 69.2 Regras de dano e feedback

A interface pode mostrar valores internos mais precisos, mas a barra visual permanece dividida em dez segmentos.

Exemplo:

```text
Confiança interna: 73/100
Barra visual: 7 segmentos completos + 1 segmento parcial
```

Regras:

- danos pequenos podem afetar parcialmente um segmento;
- danos grandes quebram vários segmentos em sequência;
- cura recompõe segmentos da esquerda para a direita;
- estado crítico começa, por padrão, em 2 segmentos ou menos;
- escudo não altera permanentemente o total de Confiança;
- a barra deve mostrar antecipação de dano quando necessário.

### 69.3 Linguagem dos ícones do minimapa

Escolha fechada: **C — linguagem híbrida entre dungeon e universo dev**.

Os ícones devem ser compreensíveis como funções de dungeon, mas possuir detalhes próprios do Merge Quest.

Direção proposta:

| Sala | Símbolo híbrido |
|---|---|
| Batalha | lâminas, setas ou linhas em conflito |
| Item | baú, pacote ou módulo de recompensa |
| Loja | balcão com `<>`, etiqueta ou símbolo de troca |
| Pergunta | terminal, pergaminho ou tela com `?` |
| Descanso | fogueira, checkpoint ou símbolo de pausa |
| Chefe | alerta, conflito crítico ou emblema quebrado |
| Saída | branches convergindo, escada ou seta ascendente |

### 69.4 Regra de desenho dos ícones

Todos os ícones do minimapa devem:

- funcionar em tamanho pequeno;
- usar silhueta forte;
- evitar detalhes internos excessivos;
- compartilhar espessura de linha;
- usar a mesma grade;
- possuir estado normal, descoberto e destacado;
- continuar legíveis em monocromia;
- evitar logos reais de frameworks, empresas ou ferramentas.

### 69.5 Identidade visual

A camada de dungeon comunica imediatamente a função da sala.

A camada dev transforma o ícone em algo próprio do Merge Quest.

A regra é:

> primeiro o jogador entende a sala; depois percebe a piada ou referência técnica.

---

## 70. Regra consolidada

> A Confiança usa dez segmentos para equilibrar precisão e leitura. O minimapa combina símbolos clássicos de dungeon com metáforas visuais de desenvolvimento, sem depender de ícones técnicos obscuros.

---

## 71. Próxima decisão recomendada

Definir:

1. como os dez segmentos mudam visualmente entre estado estável, abalado e crítico;
2. se o minimapa compacto mostra apenas o entorno imediato ou o andar inteiro já revelado.

---

## 72. Decisões sobre estados da Confiança e extensão do minimapa

### 72.1 Estados visuais da Confiança

Escolha fechada: **B — cor + animação + mudança estrutural**.

A barra de Confiança terá três leituras principais:

#### Estável

- segmentos sólidos;
- animação mínima;
- moldura íntegra;
- leitura limpa e discreta.

#### Abalada

- pequenas rachaduras nos segmentos;
- pulso leve ao receber dano;
- contraste maior entre segmentos cheios e vazios;
- feedback visual de instabilidade sem poluir a tela.

#### Crítica

- segmentos tremendo ou piscando de forma controlada;
- moldura parcialmente quebrada;
- alerta visual periódico;
- som e vinheta opcionais, mas não constantes;
- prioridade máxima para legibilidade.

### 72.2 Regra de conforto visual

O estado crítico não deve manter flashes agressivos contínuos.

Regras:

- animações curtas e espaçadas;
- sem estroboscopia;
- opção de reduzir efeitos;
- alerta sonoro não repetitivo;
- a mudança estrutural da barra continua comunicando perigo mesmo sem animação.

### 72.3 Minimapa compacto

Escolha fechada: **B — o minimapa mostra todo o andar já descoberto**.

O minimapa compacto exibe:

- sala atual;
- salas visitadas;
- salas reveladas;
- conexões conhecidas;
- salas especiais já identificadas;
- áreas ainda desconhecidas permanecem ocultas.

### 72.4 Regra de descoberta

O jogador nunca vê automaticamente:

- salas ainda não reveladas;
- tipo de sala desconhecida;
- caminhos secretos;
- recompensas especiais não descobertas.

O minimapa deve apoiar planejamento sem eliminar exploração.

### 72.5 Consequências para UI

P0:

- três estados visuais da barra de Confiança;
- rachaduras e moldura crítica;
- animação curta de dano;
- minimapa completo do andar descoberto;
- expansão dinâmica conforme novas salas são reveladas;
- ícones de salas especiais descobertas;
- destaque da sala atual.

P1:

- animação de revelação de setores;
- rotas sugeridas;
- efeitos de item que revelam áreas;
- configuração de redução de animações.

---

## 73. Regra consolidada

> A Confiança comunica perigo por estrutura, cor e movimento, sem depender de flashes constantes. O minimapa mostra tudo o que o jogador já descobriu, mas nunca antecipa o que a exploração ainda não revelou.

---

## 74. Próxima decisão recomendada

Definir:

1. onde a mão de cartas fica durante a batalha;
2. como o jogador seleciona e posiciona cartas no grid.

---

## 75. Decisões sobre posição da mão e interação com o grid

### 75.1 Posição da mão de cartas

Escolha fechada: **A — mão centralizada na base da tela**.

A mão permanece sempre visível durante a batalha e ocupa a faixa inferior da interface.

Regras:

- as cartas verticais ficam parcialmente sobrepostas quando necessário;
- a carta selecionada sobe e ganha destaque;
- a mão não pode cobrir o grid aliado;
- a quantidade de cartas visíveis precisa continuar legível em resoluções menores;
- cartas novas entram por animação lateral ou de baixo para cima;
- o centro da tela continua reservado ao confronto entre os dois grids.

### 75.2 Hierarquia da tela de batalha

Ordem vertical recomendada:

1. oponente/comandante inimigo;
2. indicadores do inimigo;
3. grid inimigo 3x3;
4. área de confronto;
5. grid aliado 3x3;
6. herói/jogador;
7. mão de cartas;
8. controles e confirmações contextuais.

A composição deve preservar a diagonal inspirada em batalhas de treinador, mas sem sacrificar a leitura do grid.

### 75.3 Seleção e posicionamento de cartas

Escolha fechada: **C — sistema híbrido**.

O jogador pode:

- arrastar uma carta da mão até um slot válido;
- clicar ou tocar na carta e depois selecionar o slot;
- cancelar a seleção clicando fora, pressionando voltar ou escolhendo outra carta.

### 75.4 Estados obrigatórios durante o posicionamento

P0:

- carta normal;
- carta selecionada;
- carta sendo arrastada;
- slots válidos destacados;
- slots inválidos bloqueados;
- preview da unidade no slot;
- custo de mana confirmado;
- cancelamento;
- posicionamento concluído;
- feedback de erro.

### 75.5 Regras de interação

- arrastar e clicar executam exatamente a mesma ação;
- nenhuma opção pode ser mais poderosa que a outra;
- o slot só confirma a jogada após validação de mana e regras;
- o preview não consome mana;
- o jogador deve conseguir cancelar antes da confirmação;
- o sistema precisa funcionar com mouse e toque;
- alvos pequenos devem ter áreas de toque maiores que o sprite visível.

### 75.6 Consequências para assets e UI

P0:

- bandeja visual da mão;
- estado de carta elevada;
- sombra da carta selecionada;
- ghost/preview da unidade;
- destaque de slot válido;
- bloqueio de slot inválido;
- linha ou arco de arraste opcional;
- feedback de mana insuficiente;
- animação carta → unidade;
- botão ou gesto de cancelamento.

P1:

- rearranjo fluido da mão;
- pré-visualização de dano;
- dica de slot recomendado;
- animação especial para cartas de treinamento.

---

## 76. Regra consolidada

> A mão fica sempre visível na base da tela. O jogador pode arrastar ou selecionar por clique, mas os dois caminhos usam as mesmas regras e os mesmos feedbacks.

---

## 77. Próxima decisão recomendada

Definir:

1. se a jogada é confirmada imediatamente ao soltar/clicar no slot ou exige uma confirmação extra;
2. onde ficam mana, deck restante e descarte durante a batalha.

---

## 78. Decisões sobre confirmação de jogada e posição dos recursos

### 78.1 Confirmação contextual da carta

Escolha fechada: **C — confirmação contextual**.

Regras:

- ao clicar em uma carta e depois em um slot válido, a jogada é confirmada imediatamente;
- ao arrastar, a carta entra em preview e confirma ao ser solta em um slot válido;
- soltar fora de um slot válido cancela a ação;
- ações especiais ou irreversíveis podem exigir confirmação adicional;
- o custo de mana só é consumido após a confirmação;
- o jogador deve receber feedback claro de erro, cancelamento e sucesso.

### 78.2 Ações que podem pedir confirmação extra

A confirmação adicional fica restrita a casos como:

- destruir uma carta aliada;
- substituir uma unidade importante;
- gastar um recurso raro;
- ativar uma carta de uso único;
- iniciar uma ação que encerra o turno.

Jogadas comuns não devem receber pop-ups extras.

### 78.3 Posição da mana, deck e descarte

Escolha fechada: **A — todos os recursos ficam próximos da mão**.

Distribuição:

- mana no canto inferior esquerdo;
- mão centralizada na base;
- deck e descarte no canto inferior direito.

### 78.4 Informações mostradas

#### Mana

- valor atual;
- valor máximo;
- crescimento por turno;
- estados de bônus ou bloqueio;
- animação de consumo e recuperação.

#### Deck

- quantidade de cartas restantes;
- feedback de compra;
- estado vazio.

#### Descarte

- quantidade de cartas descartadas;
- acesso a uma visualização resumida;
- feedback quando uma carta entra no descarte.

### 78.5 Regra de agrupamento visual

Os recursos de batalha permanecem na mesma faixa inferior para facilitar leitura e reduzir dispersão do olhar.

A faixa inferior deve seguir esta ordem:

```text
Mana | Mão de cartas | Deck + Descarte
```

### 78.6 Consequências para UI e assets

P0:

- contador de mana;
- indicador de mana máxima;
- animação de gasto;
- pilha de deck;
- contador de deck;
- pilha de descarte;
- contador de descarte;
- preview de carta;
- feedback de cancelamento;
- feedback de confirmação.

P1:

- visualização ampliada do descarte;
- animação de compra;
- efeito especial de deck vazio;
- preview de carta no topo do deck quando permitido por alguma habilidade.

---

## 79. Regra consolidada

> Jogadas comuns devem ser rápidas e diretas. Confirmações extras ficam reservadas para ações realmente irreversíveis. Mana, mão, deck e descarte formam uma única zona funcional na base da tela.

---

## 80. Próxima decisão recomendada

Definir:

1. se o turno termina automaticamente após o jogador não poder mais agir ou por botão manual;
2. como o inimigo apresenta visualmente a própria mão, mana e intenção.

---

## 81. Decisões sobre encerramento de turno e leitura do inimigo

### 81.1 Encerramento de turno

Escolha fechada: **C — botão manual com destaque contextual**.

Regras:

- o jogador sempre encerra o turno por decisão própria;
- o turno nunca termina automaticamente apenas porque a mana acabou;
- quando nenhuma ação válida estiver disponível, o botão `ENCERRAR TURNO` ganha destaque;
- o jogo pode sugerir o encerramento, mas não executá-lo sozinho;
- efeitos obrigatórios ainda pendentes impedem o encerramento;
- ações opcionais não impedem o jogador de encerrar.

### 81.2 Estados do botão

P0:

- normal;
- disponível;
- recomendado;
- bloqueado;
- pressionado;
- confirmação de encerramento por ação especial, quando necessário.

O estado recomendado deve chamar atenção sem piscar de forma agressiva.

### 81.3 Informação visível sobre o inimigo

Escolha fechada: **C — quantidade de cartas, mana e intenção parcial**.

O jogador vê:

- quantidade de cartas na mão inimiga;
- mana atual e máxima;
- pista provável;
- categoria de ação provável;
- estados e efeitos ativos;
- cartas específicas permanecem ocultas.

### 81.4 Tipos de intenção parcial

A intenção pode comunicar categorias como:

- atacar;
- defender;
- fortalecer;
- sabotar;
- controlar;
- preparar ação especial.

A interface não deve revelar necessariamente:

- nome exato da carta;
- valor final de ataque;
- alvo específico, quando a incerteza fizer parte da mecânica;
- sequência completa do turno inimigo.

### 81.5 Regra de honestidade estratégica

A intenção parcial deve ser informação real, não uma pista enganosa.

Se o sistema mostrar `ATAQUE NA PISTA CENTRAL`, o inimigo precisa agir de maneira compatível, exceto quando alguma regra explícita alterar a situação.

### 81.6 Consequências para UI e assets

P0:

- botão `ENCERRAR TURNO`;
- estados visuais do botão;
- contador de cartas inimigas;
- indicador de mana inimiga;
- ícones de intenção;
- destaque de pista provável;
- tooltip explicando a intenção;
- feedback de mudança de plano causada por efeito de carta.

P1:

- animação do oponente escolhendo carta;
- preview abstrato de ameaça;
- histórico de intenções anteriores;
- efeitos de ocultação ou leitura ampliada por cartas especiais.

---

## 82. Regra consolidada

> O jogo recomenda, mas não encerra o turno pelo jogador. O inimigo comunica intenção suficiente para permitir estratégia, sem revelar a mão inteira.

---

## 83. Próxima decisão recomendada

Definir:

1. como acontece a resolução dos ataques ao fim do turno;
2. quanto controle o jogador tem sobre a ordem dos confrontos entre as três pistas.

---

## 84. Decisões sobre resolução dos ataques e ordem visual das pistas

### 84.1 Cálculo simultâneo com animação sequencial

Escolha fechada: **C — os resultados são calculados simultaneamente e apresentados em sequência**.

Fluxo:

1. o jogador encerra o turno;
2. o sistema captura o estado das três pistas;
3. calcula todos os confrontos sem aplicar animações ainda;
4. trava os resultados;
5. executa as animações pista por pista;
6. aplica mortes, avanços e dano direto conforme o estado previamente calculado;
7. atualiza o tabuleiro ao final da sequência.

### 84.2 Regra de justiça mecânica

A animação não pode alterar resultados já calculados em outra pista.

Exemplo:

- se duas unidades deveriam morrer simultaneamente, ambas morrem;
- se uma unidade seria destruída na pista esquerda, isso não impede uma ação já calculada na pista direita;
- efeitos globais devem declarar explicitamente se acontecem antes, durante ou depois da resolução.

### 84.3 Ordem visual das pistas

Escolha fechada: **A — esquerda → centro → direita**.

A ordem é fixa e serve apenas para apresentação.

Ela não concede vantagem mecânica nem altera o resultado.

### 84.4 Fases da resolução

Ordem recomendada:

1. efeitos de início da resolução;
2. travamento dos alvos;
3. cálculo simultâneo das três pistas;
4. animação da pista esquerda;
5. animação da pista central;
6. animação da pista direita;
7. dano direto aos comandantes;
8. mortes e dissoluções;
9. avanço de unidades;
10. efeitos de fim de resolução;
11. compra e preparação do turno seguinte.

### 84.5 Regras para efeitos especiais

Cada efeito precisa declarar seu timing no catálogo:

- `before_resolution`;
- `on_attack`;
- `on_hit`;
- `on_death`;
- `after_lane`;
- `after_resolution`;
- `turn_start`;
- `turn_end`.

Isso evita ambiguidades em cartas de escudo, ataque duplo, morte e controle.

### 84.6 Consequências para animação e UI

P0:

- destaque da pista ativa;
- indicação da ordem esquerda → centro → direita;
- ataque da unidade da frente;
- número de dano;
- flash de hit;
- morte por fade/partículas;
- avanço automático da unidade de trás;
- dano direto ao comandante;
- pausa curta entre pistas;
- botão para acelerar animações.

P1:

- opção de pular animações repetidas;
- resolução acelerada;
- replay resumido do turno;
- câmera ou zoom leve na pista ativa.

### 84.7 Regra de legibilidade

A sequência completa de resolução deve ser curta o suficiente para não quebrar o ritmo.

Meta inicial:

- 0,4 a 0,7 segundo por confronto simples;
- resolução total comum abaixo de 3 segundos;
- chefes podem usar animações mais longas em ações especiais.

---

## 85. Regra consolidada

> O jogo resolve as três pistas ao mesmo tempo para manter justiça mecânica, mas mostra cada confronto em ordem fixa para que o jogador entenda o que aconteceu.

---

## 86. Próxima decisão recomendada

Definir:

1. como funciona o dano direto ao comandante quando uma pista está vazia;
2. se unidades que sobrevivem avançam automaticamente para a frente da pista ou apenas quando a unidade da frente morre.

---

## 87. Decisões sobre dano direto e avanço nas pistas

### 87.1 Dano direto ao comandante

Escolha fechada: **A — a unidade causa seu valor total de ataque quando a pista inimiga está vazia**.

Regras:

- se não houver unidade inimiga na frente daquela pista, o ataque vai direto ao comandante;
- o dano direto usa o valor integral de ataque da unidade;
- escudos, reduções ou efeitos do comandante podem modificar o dano apenas quando uma regra explícita disser isso;
- pistas abertas precisam representar uma ameaça real;
- o feedback visual deve deixar claro que o dano atravessou a linha de defesa.

### 87.2 Consequência estratégica

Controlar uma pista não serve apenas para trocar unidades.

Uma pista vazia:

- expõe o comandante;
- aumenta a pressão;
- valoriza unidades ofensivas;
- torna bloqueadores e vanguardas importantes;
- faz a profundidade de três posições ter função real.

### 87.3 Avanço dentro da pista

Escolha fechada: **A — unidades só avançam quando a unidade da frente morre**.

Regras:

- as posições frente, meio e trás permanecem estáveis durante a resolução;
- se a unidade da frente morrer, as unidades sobreviventes avançam apenas depois que toda a resolução do turno terminar;
- o avanço prepara o próximo turno;
- nenhuma unidade recém-avançada ataca no mesmo ciclo de resolução;
- espaços vazios atrás não provocam avanço automático.

### 87.4 Ordem correta após a resolução

1. calcular ataques das três pistas;
2. apresentar os confrontos;
3. aplicar dano direto;
4. resolver mortes;
5. aplicar efeitos de morte;
6. avançar unidades sobreviventes;
7. atualizar o grid;
8. iniciar o próximo turno.

### 87.5 Consequências para animação

P0:

- linha ou efeito visual de dano direto;
- reação do comandante;
- redução da Confiança ou vida do inimigo;
- animação curta de avanço;
- atualização dos slots ocupados;
- bloqueio temporário de interação durante a resolução.

### 87.6 Regra consolidada

> Uma pista vazia permite dano integral ao comandante. As unidades só avançam depois que a frente cai e toda a resolução do turno termina.

---

## 88. Próxima decisão recomendada

Definir:

1. como o dano direto afeta visualmente o herói e os oponentes;
2. se o grid mostra profundidade física real entre frente, meio e trás ou apenas três slots alinhados.

---

## 89. Decisões sobre dano direto e profundidade visual do grid

### 89.1 Feedback visual do dano direto

Escolha fechada: **C — ataque da unidade + reação do comandante + impacto na HUD**.

Sequência visual recomendada:

1. a unidade da frente prepara o ataque;
2. o efeito atravessa a pista vazia;
3. o comandante recebe o impacto;
4. a barra de Confiança ou vida sofre uma quebra visual;
5. o número de dano aparece;
6. a câmera ou o painel reage de forma curta e controlada.

### 89.2 Regras de legibilidade

O dano direto deve comunicar três relações:

- a pista estava aberta;
- a unidade causou o dano;
- o comandante foi atingido.

Por isso, o número de dano sozinho não é suficiente.

P0:

- animação de ataque da unidade;
- trajetória ou efeito até o comandante;
- reação curta do comandante;
- redução da barra;
- número de dano;
- flash ou tremor leve;
- efeito de quebra nos segmentos da Confiança.

P1:

- variações por tipo de ataque;
- reação específica de chefes;
- câmera levemente aproximada;
- onomatopeia contextual.

### 89.3 Profundidade visual do grid

Escolha fechada: **C — perspectiva leve**.

As posições frente, meio e trás serão diferenciadas por:

- deslocamento vertical;
- leve sobreposição;
- sombra;
- escala praticamente constante;
- redução discreta de contraste nas posições mais distantes;
- linhas ou molduras que reforçam cada pista.

A leitura dos stats permanece prioritária.

### 89.4 Regras de composição

- slots da frente ficam visualmente mais próximos do centro do confronto;
- slots do meio ficam recuados;
- slots de trás ficam mais próximos do comandante;
- o tamanho das unidades não muda de forma significativa;
- ataque, vida e palavra-chave mantêm escala constante;
- sobreposição nunca pode esconder stats ou estados;
- a perspectiva deve funcionar igualmente para o lado aliado e inimigo.

### 89.5 Regra de profundidade

A profundidade deve ser percebida antes de ser analisada, mas nunca pode exigir esforço para entender onde cada unidade está.

A regra é:

> profundidade para atmosfera, alinhamento para estratégia.

### 89.6 Consequências para assets e Phaser

P0:

- 3 estados visuais de slot por profundidade;
- sombras de unidade;
- máscara ou regra de sobreposição;
- ordem de renderização por linha;
- preview de posicionamento em cada profundidade;
- destaque de pista ativa;
- ajuste automático de origem do sprite.

P1:

- partículas com profundidade;
- efeitos atravessando múltiplos planos;
- zoom leve na pista ativa;
- parallax discreto do cenário de batalha.

---

## 90. Regra consolidada

> O dano direto precisa mostrar causa, trajetória e impacto. O grid usa profundidade leve para reforçar frente, meio e trás sem sacrificar a leitura dos stats.

---

## 91. Próxima decisão recomendada

Definir:

1. se o herói e o oponente aparecem inteiros ou em busto/recorte na batalha;
2. como o cenário de batalha deriva visualmente da sala em que o encontro começou.

---

## 92. Decisões sobre comandantes em batalha e arena derivada da sala

### 92.1 Herói e oponente na cena de batalha

Escolha fechada: **C — corpo inteiro simplificado**.

O herói e o oponente aparecem inteiros, em escala maior que a usada durante a exploração, mas com animação econômica.

#### Animações obrigatórias

P0:

- idle;
- jogar carta;
- receber dano direto;
- derrota.

P1:

- reação positiva;
- reação de preocupação;
- entrada especial;
- pose de vitória;
- gesto exclusivo de chefe.

### 92.2 Regras de composição

- herói em primeiro plano, no canto inferior esquerdo;
- oponente ao fundo, no canto superior direito;
- os grids ocupam a área central;
- os comandantes não podem cobrir slots, stats ou intenções;
- a pose deve reforçar que eles comandam as cartas, não lutam diretamente;
- a escala maior não exige novo nível de detalhe incompatível com o pixel art do projeto.

### 92.3 Reaproveitamento do herói

O herói de batalha não precisa ser uma animação independente completamente nova.

Recomendação:

- derivar da mesma identidade visual do herói de exploração;
- produzir uma versão maior ou reenquadrada;
- reaproveitar paleta, rosto, acessórios e silhueta;
- limitar o número de frames;
- usar efeitos por código para impacto, entrada e derrota.

### 92.4 Arena de batalha

Escolha fechada: **C — cena separada inspirada na sala de origem**.

A batalha abre uma arena própria, mas preserva a identidade do local em que o encontro começou.

Ela herda da sala:

- arquitetura-base;
- domínio dominante;
- domínio secundário;
- paleta;
- iluminação;
- nível de corrupção;
- props de assinatura;
- clima e efeitos ambientais.

### 92.5 O que a arena não herda diretamente

A arena não precisa copiar:

- layout exato da sala;
- posição original das portas;
- colisões;
- todos os props;
- formato de exploração.

Isso impede que cada sala precise funcionar também como tabuleiro de batalha.

### 92.6 Estrutura modular da arena

A arena será montada por camadas:

1. fundo da arquitetura;
2. plano médio;
3. plataformas ou áreas dos comandantes;
4. grid inimigo;
5. área central de confronto;
6. grid aliado;
7. primeiro plano;
8. overlays de domínio;
9. corrupção;
10. iluminação e efeitos.

### 92.7 Kit mínimo de arena

P0 compartilhado:

- 1 composição-base por arquitetura;
- plataforma do herói;
- plataforma do oponente;
- suporte visual do grid;
- plano de fundo;
- primeiro plano;
- pontos de luz;
- slots para props contextuais.

Variação por domínio:

- paleta;
- 2 a 3 props de assinatura;
- overlay;
- efeito ambiental;
- emblema;
- detalhes do domínio secundário em proporção 80/20.

### 92.8 Regra de coerência

O jogador deve perceber que a batalha aconteceu naquele andar, sem exigir que a arena seja uma cópia literal da sala.

A regra é:

> mesma identidade, composição própria.

---

## 93. Consequências para o inventário de assets

### Herói de batalha

P0:

- corpo inteiro simplificado;
- idle;
- jogar carta;
- reação de dano;
- derrota;
- sombra ou plataforma;
- versão de costas ou 3/4 coerente com a composição.

### Oponentes/comandantes

P0 por base:

- corpo inteiro simplificado;
- idle;
- jogar carta;
- reação de dano;
- derrota;
- emblema;
- plataforma;
- retrato opcional para fala.

### Arenas

P0:

- 2 composições-base, uma por arquitetura;
- módulos de grid;
- plataformas;
- camadas de fundo;
- slots de props;
- overlays de corrupção;
- iluminação;
- variações de domínio por tint, props e efeitos.

---

## 94. Regra consolidada

> Herói e oponente aparecem inteiros, mas com animação enxuta. A batalha acontece em uma cena própria que herda a identidade da sala, não seu layout literal.

---

## 95. Próxima decisão recomendada

Definir:

1. se os comandantes usam plataformas ovais visíveis, como em Pokémon, ou ficam integrados ao cenário;
2. como a transição da exploração para a batalha acontece.

---

## 96. Decisões sobre base dos comandantes e transição para batalha

### 96.1 Base visual dos comandantes

Escolha fechada: **C — base discreta híbrida, integrada à arquitetura**.

Herói e oponente ocupam uma área visualmente destacada, mas essa base não será uma plataforma oval genérica.

Ela pode variar como:

- passarela;
- tablado;
- círculo de luz;
- plataforma de pedra;
- estrutura metálica;
- balcão técnico;
- área elevada;
- sombra ou marca no chão.

### 96.2 Regra de função

A base precisa:

- separar visualmente o comandante do grid;
- reforçar profundidade;
- indicar posição de palco;
- combinar com a arquitetura da arena;
- não competir com cartas, stats ou intenção;
- permitir reação de dano sem confundir com uma unidade do grid.

### 96.3 Variação por arquitetura

#### Fortaleza/Arquivo

- degrau de pedra;
- piso elevado;
- círculo de runas;
- tablado de madeira;
- plataforma junto a estantes ou arquivos.

#### Laboratório/Oficina

- passarela metálica;
- painel de comando;
- plataforma iluminada;
- estação técnica;
- base com cabos e energia.

### 96.4 Transição exploração → batalha

Escolha fechada: **B — tela de conflito/VS antes da arena**.

Fluxo recomendado:

1. o jogador ativa ou cruza o gatilho do encontro;
2. a exploração congela;
3. a câmera ou tela dá um pequeno impacto;
4. aparece a composição `VS`;
5. herói e oponente são apresentados;
6. nome do conflito e domínio aparecem;
7. uma onomatopeia ou selo entra;
8. a tela corta ou desliza para a arena;
9. a batalha começa.

### 96.5 Conteúdo da tela VS

P0:

- retrato ou sprite do herói;
- retrato ou sprite do oponente;
- nome do conflito;
- domínio dominante;
- nível de ameaça;
- emblema do oponente;
- efeito de entrada;
- duração curta.

P1:

- fala do mentor;
- frase do oponente;
- animação em painéis de HQ;
- onomatopeia exclusiva;
- variação especial de chefe.

### 96.6 Regra de ritmo

A tela VS deve ser curta e pulável.

Meta inicial:

- 1,5 a 2,5 segundos em encontros comuns;
- até 4 segundos em chefes;
- botão ou toque para acelerar;
- depois de vista uma vez, animações repetidas podem ser encurtadas.

### 96.7 Uso de HQ

A transição comum usa uma composição simples de VS.

A quebra em painéis de HQ fica reservada para:

- chefes;
- Recrutador final;
- primeira aparição de um oponente;
- momentos narrativos especiais.

Isso preserva impacto e evita banalizar o recurso mais chamativo da direção de arte.

---

## 97. Consequências para o inventário de assets

### Bases dos comandantes

P0:

- base genérica de fortaleza;
- base genérica de laboratório;
- sombra/base do herói;
- sombra/base do oponente;
- estados normal e impacto;
- variações por domínio via tint e props.

### Tela VS

P0:

- moldura VS;
- divisor diagonal;
- espaço do herói;
- espaço do oponente;
- tipografia do nome do conflito;
- emblema;
- fundo quente/frio;
- efeito de entrada;
- versão comum;
- versão de chefe simplificada.

P1:

- painéis de HQ;
- rasgo de página;
- onomatopeias;
- animação de branch/merge;
- versão exclusiva do Recrutador.

---

## 98. Regra consolidada

> Os comandantes ocupam bases discretas que pertencem ao cenário. Antes da batalha, uma tela VS apresenta o conflito com rapidez; painéis de HQ completos ficam reservados para momentos especiais.

---

## 99. Próxima decisão recomendada

Definir:

1. se o conflito comum aparece fisicamente na sala antes da batalha ou só é revelado na tela VS;
2. como o jogador inicia um encontro: ao entrar na sala, ao interagir ou ao atravessar uma zona de gatilho.

---

## 100. Decisões sobre presença física dos conflitos e início dos encontros

### 100.1 Conflitos visíveis na exploração

Escolha fechada: **A — cada oponente/conflito possui sprite próprio e aparece fisicamente na sala antes da batalha**.

Esta decisão é tratada como requisito inegociável de identidade do jogo.

O jogador deve conseguir:

- ver o conflito no ambiente;
- reconhecer sua silhueta antes da tela VS;
- perceber que aquele encontro pertence ao domínio e ao requisito atual;
- aproximar-se voluntariamente;
- iniciar a batalha por interação.

### 100.2 Trava de escopo para manter a decisão viável

“Sprite próprio” significa sprite próprio para cada **base de oponente/comandante curada**, e não um personagem totalmente novo para cada combinação procedural possível.

Para o MVP:

- 6 bases de comandantes;
- 1 sprite top-down próprio por base;
- 1 idle curto de 2 frames, ou pose estática com efeito por código;
- sem caminhada;
- sem ataque físico;
- sem animação complexa de interação;
- variações por acessório, paleta, efeito, emblema e corrupção;
- chefes derivados dessas bases podem reutilizar a estrutura com torso/cabeça alterados.

Se cada encontro procedural exigisse um sprite totalmente novo, o custo de arte ultrapassaria o escopo do projeto.

### 100.3 Relação entre sprite de exploração e sprite de batalha

Cada comandante possui duas apresentações:

#### Exploração

- top-down 3/4;
- canvas compatível com a sala;
- leitura clara em 48x48 ou escala equivalente;
- idle mínimo;
- marcador de interação;
- sombra e efeito contextual.

#### Batalha

- corpo inteiro simplificado;
- escala maior;
- idle;
- jogar carta;
- receber dano;
- derrota.

As duas versões precisam compartilhar:

- silhueta;
- paleta;
- acessórios;
- emblema;
- ponto focal;
- identidade de domínio.

### 100.4 Início da batalha

Escolha fechada: **B — o jogador inicia o encontro ao interagir com o conflito**.

Fluxo:

1. o jogador entra na sala;
2. portas podem ser bloqueadas;
3. o conflito aparece fisicamente;
4. o jogador observa o cenário;
5. aproxima-se do oponente;
6. surge o indicador de interação;
7. o jogador pressiona o botão;
8. a tela VS é exibida;
9. a arena de batalha é carregada.

### 100.5 Regra de controle

A batalha não começa automaticamente ao entrar na sala.

Isso permite:

- leitura ambiental;
- antecipação do encontro;
- fala do mentor;
- inspeção do oponente;
- preparação emocional;
- escolha consciente de iniciar.

### 100.6 Bloqueio de fuga

Para salas de batalha obrigatórias:

- as portas podem fechar ao entrar;
- o encontro só começa após interação;
- o jogador não pode sair sem resolver o conflito.

Para encontros opcionais ou especiais:

- a saída pode permanecer aberta;
- a interface deve indicar claramente que o encontro é opcional.

### 100.7 Consequências para o inventário de assets

P0 por comandante-base:

- sprite top-down próprio;
- idle mínimo;
- sombra;
- marcador de interação;
- estado normal;
- estado destacado;
- efeito contextual;
- versão de batalha;
- emblema;
- retrato ou busto para VS, quando necessário.

P1:

- reação ao jogador se aproximar;
- pose especial;
- animação de aparição;
- variação crítica;
- fala pré-batalha no cenário.

---

## 101. Regra consolidada

> Todo conflito importante existe fisicamente no mundo antes de existir como adversário na arena. O jogador vê, reconhece e escolhe iniciar o confronto.

---

## 102. Próxima decisão recomendada

Definir:

1. se os comandantes permanecem parados em um ponto fixo ou reagem à aproximação;
2. se as portas fecham assim que o jogador entra na sala ou apenas após iniciar a batalha.

---

## 103. Decisões sobre reação dos comandantes e bloqueio das portas

### 103.1 Reação do comandante à aproximação

Escolha fechada: **B — reação curta feita principalmente por código**.

Ao entrar na área de proximidade do comandante, ele pode:

- virar-se para o jogador;
- pulsar ou tremer levemente;
- exibir o próprio emblema;
- ativar um brilho, glitch ou aura;
- mostrar um balão curto;
- reproduzir um som de alerta;
- mudar discretamente de pose.

Essa reação não exige uma animação longa ou uma sprite sheet exclusiva.

#### Regra de produção

Para o MVP, cada comandante-base precisa de:

- idle mínimo;
- estado de atenção;
- efeito contextual;
- emblema;
- indicador de interação.

O estado de atenção pode ser obtido por:

- espelhamento;
- pequeno deslocamento;
- mudança de frame;
- tween;
- brilho;
- partícula;
- overlay.

### 103.2 Portas e tipo de encontro

Escolha fechada: **C — o momento de fechamento das portas depende do tipo de encontro**.

#### Batalha obrigatória

- portas fecham ao entrar;
- o jogador pode observar a sala antes de iniciar;
- não pode abandonar o encontro;
- a batalha começa apenas após interação com o comandante.

#### Encontro opcional ou elite

- portas permanecem abertas inicialmente;
- o jogador pode sair sem lutar;
- ao interagir e confirmar o confronto, as portas fecham;
- a interface indica claramente o caráter opcional e o risco/recompensa.

#### Evento especial

- comportamento definido pelo evento;
- pode bloquear entrada, saída ou ambas;
- a regra precisa ser comunicada antes da perda de controle.

### 103.3 Estados visuais das portas

P0:

- aberta;
- fechada;
- bloqueada;
- desbloqueando;
- encontro obrigatório;
- encontro opcional.

P1:

- selo do domínio;
- corrupção;
- efeito de chefe;
- animação de fechamento;
- reação ao fim da batalha.

### 103.4 Regra de clareza

O jogador deve entender por que não pode sair.

Portas nunca fecham sem feedback visual ou sonoro.

### 103.5 Consequência para a composição da sala

Salas de batalha precisam reservar:

- área de entrada segura;
- linha de visão até o comandante;
- espaço para observar o cenário;
- distância suficiente para a reação de aproximação;
- rotas claras até as portas;
- zona de interação sem colisão confusa.

---

## 104. Regra consolidada

> Os comandantes reagem à aproximação sem exigir animações caras. O bloqueio das portas comunica o tipo de encontro e nunca remove o controle do jogador sem explicação.

---

## 105. Próxima decisão recomendada

Definir:

1. se o jogador recebe uma prévia do deck e da ameaça antes de confirmar encontros opcionais;
2. como a sala muda visualmente depois que o conflito é derrotado.

---

## 106. Decisões sobre prévia de ameaça e estado pós-vitória

### 106.1 Prévia de encontros opcionais

Escolha fechada: **B — nome, domínio, dificuldade e estilo provável do deck**.

Antes de confirmar um encontro opcional, o jogador vê:

- nome do conflito;
- domínio dominante;
- domínio secundário, quando existir;
- nível de ameaça;
- estilo provável do deck;
- risco e recompensa resumidos.

Exemplo:

```text
SABOTADOR DE REGRESSÃO
Domínio: QA + Backend
Ameaça: Alta
Estilo: Controle, debuffs e bloqueio de pista
Recompensa: Carta de treinamento + recuperação parcial de Confiança
```

### 106.2 Informação que permanece oculta

A prévia não revela:

- lista completa de cartas;
- ordem de compra;
- valores exatos de todas as unidades;
- carta-assinatura específica, salvo efeito de reconhecimento;
- sequência da IA.

A intenção é permitir uma escolha informada, não eliminar a surpresa.

### 106.3 Regra para encontros obrigatórios

Encontros obrigatórios também podem exibir:

- nome;
- domínio;
- estilo;
- ameaça.

Porém, a informação funciona como preparação, não como opção de recusa.

### 106.4 Mudança da sala após a vitória

Escolha fechada: **B — a corrupção diminui e as portas reabrem**.

Depois da vitória:

- o comandante desaparece ou é dissolvido;
- as portas são desbloqueadas;
- luzes se estabilizam;
- glitches e partículas diminuem;
- overlays críticos são removidos;
- props podem retornar ao estado normal;
- o ambiente recebe um feedback curto de recuperação.

### 106.5 Sistema de estados ambientais

Cada sala de batalha pode ter dois estados principais:

#### Antes da vitória

- corrupção ativa;
- iluminação instável;
- portas bloqueadas;
- emblema do conflito;
- efeitos ambientais;
- comandante presente.

#### Depois da vitória

- corrupção reduzida;
- iluminação mais estável;
- portas abertas;
- comandante ausente;
- efeitos críticos desativados;
- possível recompensa ou ponto de interação liberado.

### 106.6 Regra de produção

A versão pós-vitória não será um cenário novo completo.

Ela será construída por:

- ativar/desativar overlays;
- trocar iluminação;
- remover partículas;
- mudar tint;
- esconder o comandante;
- abrir portas;
- substituir poucos props de estado.

Isso evita duplicar o tileset e a composição da sala.

### 106.7 Consequências para assets e Phaser

P0:

- painel de prévia do encontro;
- ícones de ameaça;
- ícones de estilo de deck;
- resumo de recompensa;
- overlay de corrupção;
- estado de luz instável;
- estado de luz estabilizada;
- efeito de dissolução do comandante;
- animação de desbloqueio de portas;
- feedback de sala purificada.

P1:

- pequenas reações ambientais;
- props restaurados;
- fala do mentor após a vitória;
- recompensa surgindo no cenário;
- trilha sonora mudando brevemente.

---

## 107. Regra consolidada

> Encontros opcionais informam o suficiente para uma decisão consciente, sem revelar o deck inteiro. A vitória deixa uma marca visível na sala por meio da redução da corrupção, não pela criação de um segundo cenário completo.

---

## 108. Próxima decisão recomendada

Definir:

1. como o nível de ameaça será representado visualmente;
2. se a recompensa do encontro opcional aparece antes da luta de forma exata ou apenas por categoria.

---

## 109. Decisões sobre ameaça e prévia de recompensa

### 109.1 Representação do nível de ameaça

Escolha fechada: **C — selo textual acompanhado de marcas visuais de conflito**.

O nível de ameaça será mostrado por:

- texto explícito;
- quantidade de marcas de conflito;
- moldura;
- intensidade visual;
- ícone de alerta.

Escala inicial recomendada:

| Nível | Texto | Marcas |
|---|---|---:|
| 1 | Baixa | 1 |
| 2 | Moderada | 2 |
| 3 | Alta | 3 |
| 4 | Crítica | 4 |

O MVP evita uma escala de cinco níveis para não criar distinções artificiais difíceis de comunicar e balancear.

### 109.2 Regra de leitura

O jogador deve reconhecer primeiro o texto e depois usar os símbolos como leitura rápida.

Nenhum nível depende apenas de:

- cor;
- número;
- animação;
- formato.

A combinação de texto, marcas e moldura mantém acessibilidade e reduz ambiguidade.

### 109.3 Consequências visuais

#### Baixa

- moldura íntegra;
- uma marca de conflito;
- pouco movimento;
- baixo nível de corrupção.

#### Moderada

- duas marcas;
- contraste maior;
- pequenos efeitos de instabilidade.

#### Alta

- três marcas;
- moldura mais agressiva;
- corrupção visível;
- alerta de risco.

#### Crítica

- quatro marcas;
- moldura parcialmente quebrada;
- emblema pulsante;
- apresentação especial;
- uso reservado a elites, chefes ou encontros excepcionais.

### 109.4 Prévia de recompensa

Escolha fechada: **C — categoria da recompensa + qualidade provável**.

Antes de um encontro opcional, o jogador vê:

- categoria;
- qualidade provável;
- quantidade, quando relevante;
- nenhuma identificação exata do item ou carta.

Exemplos:

```text
Carta de treinamento — Rara
Upgrade de carta — Incomum
Recuperação de Confiança — Alta
Consumível — Especial
```

### 109.5 Regra de surpresa controlada

A recompensa final precisa respeitar a categoria e a qualidade mostradas.

O sistema não pode:

- prometer uma carta rara e entregar cura comum;
- mostrar upgrade e entregar consumível;
- alterar a qualidade sem uma regra explícita.

A surpresa existe dentro de um intervalo honesto.

### 109.6 Qualidades sugeridas

Para o MVP:

- Comum;
- Incomum;
- Rara;
- Especial.

`Especial` fica reservado a:

- chefe;
- elite;
- evento raro;
- recompensa temática;
- carta de treinamento marcante.

### 109.7 Consequências para UI e assets

P0:

- selo de ameaça;
- quatro níveis de moldura;
- marcas de conflito;
- ícone de alerta;
- selo de categoria de recompensa;
- selo de qualidade;
- painel de prévia;
- tooltip explicativo.

P1:

- animação especial de ameaça crítica;
- variações de som;
- brilho de qualidade;
- preview parcial da silhueta da recompensa;
- efeitos de descoberta.

---

## 110. Regra consolidada

> A ameaça é comunicada por texto e símbolos. A recompensa é revelada por categoria e qualidade, mantendo surpresa sem enganar o jogador.

---

## 111. Próxima decisão recomendada

Definir:

1. se a qualidade da recompensa representa raridade, poder ou nível de evidência;
2. como elites se diferenciam visualmente e mecanicamente de encontros comuns.

---

## 112. Decisões sobre qualidade contextual e encontros de elite

### 112.1 Significado da qualidade da recompensa

Escolha fechada: **C — a qualidade representa valor contextual**.

A qualidade de uma recompensa considera uma combinação de:

- utilidade para a vaga atual;
- sinergia com o deck do jogador;
- impacto mecânico;
- raridade no catálogo;
- relevância para uma lacuna identificada;
- dificuldade necessária para obtê-la.

Isso significa que uma recompensa `Rara` não é necessariamente universalmente melhor. Ela é mais valiosa dentro daquele contexto específico.

### 112.2 Separação entre qualidade e poder bruto

Para evitar confusão:

- qualidade não equivale automaticamente a maior ataque ou vida;
- uma recompensa comum pode ser mais eficiente em um deck específico;
- uma recompensa rara pode ser especializada;
- uma recompensa especial pode ter valor narrativo, pedagógico ou estratégico;
- o sistema deve explicar por que a recompensa é considerada valiosa.

### 112.3 Qualidades do MVP

| Qualidade | Leitura principal |
|---|---|
| Comum | útil e frequente |
| Incomum | mais específica ou sinérgica |
| Rara | alta relevância contextual ou efeito marcante |
| Especial | recompensa temática, de elite, chefe ou evento |

### 112.4 Informação mostrada ao jogador

A interface pode apresentar:

- qualidade;
- categoria;
- domínio;
- motivo resumido de relevância;
- compatibilidade com o deck;
- possível contribuição para uma lacuna.

Exemplo:

```text
Carta de treinamento — Rara
Alta relevância para a vaga
Sinergia com seu deck de Suporte
```

### 112.5 Encontros de elite

Escolha fechada: **B — comandante-base com acessório, aura, deck mais coeso e regra especial**.

Uma elite deriva de um dos seis comandantes-base, mas recebe:

- acessório exclusivo ou ampliado;
- aura;
- emblema de elite;
- paleta mais intensa;
- corrupção elevada;
- deck mais consistente;
- cartas-assinatura adicionais;
- uma regra especial simples;
- recompensa de qualidade superior.

### 112.6 Diferenças entre encontro comum e elite

| Elemento | Comum | Elite |
|---|---|---|
| Comandante | base | base modificada |
| Deck | núcleo + slots variáveis | núcleo mais coeso e especializado |
| Regra especial | nenhuma ou mínima | 1 regra clara |
| Ameaça | baixa a alta | alta ou crítica |
| Recompensa | comum a rara | rara ou especial |
| Apresentação | VS padrão | VS reforçado |
| Corrupção | normal | elevada |

### 112.7 Limite da regra especial

A elite recebe apenas **uma regra especial principal**.

Exemplos:

- começa com uma pista bloqueada;
- compra uma carta extra no primeiro turno;
- fortalece a primeira unidade jogada;
- aplica debuff ao primeiro aliado posicionado;
- protege uma carta-assinatura por um turno.

A regra precisa ser:

- legível;
- explicada antes da batalha;
- visualizável;
- curta;
- compatível com o deck da elite;
- reutilizável em variações futuras.

### 112.8 Reaproveitamento visual

Uma elite não exige sprite completo novo.

Ela reutiliza:

- corpo-base;
- animação-base;
- origem;
- timing;
- estrutura de batalha.

Ela modifica:

- cabeça ou acessório;
- aura;
- paleta;
- emblema;
- efeitos;
- detalhes de corrupção.

### 112.9 Consequências para assets

P0:

- emblema de elite;
- aura-base;
- overlay de corrupção elevada;
- moldura VS de elite;
- selo de ameaça alta/crítica;
- 1 acessório de elite por família de comandante;
- indicador de regra especial;
- painel de explicação da regra.

P1:

- variações de aura;
- entrada especial;
- animação de provocação;
- silhueta parcial diferenciada;
- efeitos exclusivos por domínio.

---

## 113. Regra consolidada

> A qualidade mede valor no contexto da vaga e do deck, não apenas força bruta. Elites reutilizam comandantes existentes, mas se distinguem por identidade visual, deck coeso e uma única regra especial clara.

---

## 114. Próxima decisão recomendada

Definir:

1. se a regra especial da elite é revelada integralmente antes da luta ou descoberta durante o combate;
2. como o jogador diferencia visualmente recompensa `Rara` de recompensa `Especial`.

---

## 115. Decisões sobre transparência das elites e diferenciação de recompensas

### 115.1 Regra especial da elite

Escolha fechada: **C — nome e efeito principal revelados antes da batalha**.

Antes do confronto, a prévia mostra:

- nome da regra especial;
- efeito principal;
- pista, recurso ou estado afetado;
- duração inicial, quando relevante;
- ícone próprio;
- resumo estratégico curto.

Exemplo:

```text
REGRA ESPECIAL: DEADLOCK
A pista central começa bloqueada.
```

Detalhes secundários podem ser explicados durante a batalha por tooltip, painel de efeito ou fala do Mentor.

### 115.2 Regra de justiça

A regra especial não pode depender de surpresa injusta.

O jogador precisa saber antes da luta:

- qual parte do campo será afetada;
- qual limitação será imposta;
- se o efeito é permanente ou temporário;
- qual condição encerra ou altera a regra.

O desafio deve vir da adaptação estratégica, não da ocultação de informação essencial.

### 115.3 Apresentação visual da regra especial

P0:

- ícone da regra;
- nome;
- frase curta;
- destaque na tela VS;
- marcador persistente durante a batalha;
- tooltip;
- animação curta de ativação.

P1:

- fala do oponente;
- comentário do Mentor;
- variação sonora;
- animação exclusiva de entrada.

### 115.4 Recompensas Raras e Especiais

Escolha fechada: **C — cor, selo e estrutura visual própria**.

#### Rara

- cor secundária de raridade;
- selo textual `RARA`;
- moldura reforçada;
- brilho discreto;
- animação curta de entrada;
- estrutura geral ainda próxima da moldura-base.

#### Especial

- selo textual `ESPECIAL`;
- emblema próprio;
- moldura assimétrica ou detalhe estrutural único;
- animação mais marcante;
- efeito de partículas ou destaque;
- uso reservado a chefes, elites, eventos e recompensas narrativas.

### 115.5 Regra de reaproveitamento

Rara e Especial não terão sistemas totalmente separados.

Ambas reutilizam:

- área da ilustração;
- posições de custo, ataque e vida;
- tipografia;
- ícones;
- estrutura principal da carta;
- estados de seleção e dano.

A diferenciação acontece por:

- borda;
- selo;
- emblema;
- overlay;
- animação;
- efeito de brilho.

### 115.6 Acessibilidade

Raridade e qualidade nunca serão comunicadas apenas por cor.

Cada estado deve combinar:

- texto;
- símbolo;
- formato;
- borda;
- animação opcional.

---

## 116. Regra consolidada

> Elites revelam sua regra principal antes da batalha. Recompensas Raras e Especiais usam a mesma anatomia-base, mas se diferenciam por selo, estrutura, emblema e intensidade de apresentação.

---

## 117. Próxima decisão recomendada

Definir:

1. se regras especiais de chefes seguem o mesmo padrão de uma única regra ou podem ter duas fases;
2. se recompensas Especiais podem aparecer fora de chefes e elites.

---

## 118. Decisões sobre chefes em duas fases e recompensas Especiais

### 118.1 Chefes com uma regra evolutiva em duas fases

Escolha fechada: **B — cada chefe usa uma única regra especial que evolui para uma segunda fase**.

O chefe não recebe duas mecânicas independentes. Em vez disso, a mesma regra muda de intensidade, alcance ou comportamento quando uma condição é atingida.

Exemplo:

```text
REGRA ESPECIAL: DEADLOCK

Fase 1:
Uma pista começa bloqueada.

Fase 2:
O bloqueio muda de pista ao fim de cada turno.
```

### 118.2 Gatilhos possíveis para a segunda fase

A mudança de fase pode ocorrer quando:

- a vida do comandante chega a 50%;
- uma carta-assinatura é destruída;
- determinado número de turnos passa;
- uma condição do campo é cumprida;
- o jogador quebra a mecânica inicial.

Para o MVP, cada chefe deve usar apenas **um gatilho claro**.

### 118.3 Regras de clareza

Antes da batalha, o jogador deve conhecer:

- o nome da regra;
- o efeito da Fase 1;
- a existência de uma segunda fase;
- a condição geral de transição.

A Fase 2 pode revelar detalhes no momento da mudança, desde que não contradiga a informação inicial.

### 118.4 Apresentação da mudança de fase

P0:

- aviso de transição;
- alteração do emblema;
- mudança de aura ou paleta;
- efeito curto no comandante;
- atualização do painel da regra;
- destaque no grid da nova condição.

P1:

- fala do chefe;
- painel de HQ;
- pequena transformação visual;
- mudança de trilha;
- animação de câmera.

### 118.5 Limite de produção

A segunda fase não exige:

- sprite completamente novo;
- novo conjunto de animações;
- segunda arena;
- novo deck inteiro.

Ela deve reutilizar:

- comandante;
- deck-base;
- arena;
- regra principal;
- efeitos existentes.

A sensação de evolução vem de:

- intensidade;
- timing;
- alcance;
- reposicionamento;
- alteração visual controlada.

### 118.6 Recompensas Especiais fora de chefes e elites

Escolha fechada: **B — recompensas Especiais também podem aparecer em eventos raros e desafios excepcionais**.

Fontes válidas:

- chefes;
- elites;
- eventos raros;
- desafios longos excepcionais;
- salas secretas;
- conquistas narrativas;
- sequência incomum de decisões.

### 118.7 Regra de exclusividade

Recompensas Especiais não entram em sorteios comuns de sala.

Elas precisam estar ligadas a:

- risco elevado;
- condição rara;
- esforço maior;
- evento memorável;
- progressão narrativa.

Isso preserva valor e evita que `Especial` vire apenas uma raridade mais alta.

### 118.8 Comunicação antes da recompensa

Dependendo do evento, o jogo pode mostrar:

- categoria `ESPECIAL`;
- condição necessária;
- risco;
- pista narrativa;
- silhueta ou emblema parcial.

A identidade exata pode continuar oculta.

### 118.9 Consequências para assets

P0:

- painel de mudança de fase;
- estado Fase 1/Fase 2 da regra;
- aura de fase;
- atualização do emblema;
- selo `ESPECIAL`;
- apresentação especial de recompensa;
- efeito de descoberta rara.

P1:

- painel de HQ para mudança de fase;
- transformação parcial do chefe;
- animação exclusiva de recompensa;
- sala secreta visualmente distinta;
- trilha curta de descoberta.

---

## 119. Regra consolidada

> Chefes evoluem uma única mecânica em duas fases, mantendo clareza e reaproveitamento. Recompensas Especiais podem surgir fora de chefes e elites, mas apenas quando ligadas a eventos realmente raros ou exigentes.

---

## 120. Próxima decisão recomendada

Definir:

1. se a mudança de fase do chefe acontece sempre em 50% de vida ou se cada chefe usa um gatilho próprio;
2. se o jogador recebe uma recompensa garantida após todo chefe ou escolhe entre opções.

---

## 121. Decisões sobre gatilho de fase e recompensa de chefe

### 121.1 Gatilho próprio por chefe

Escolha fechada: **B — cada chefe possui um gatilho próprio, fixo e curado**.

O gatilho da segunda fase deve reforçar o conceito técnico e narrativo do chefe.

Exemplos:

- **Deadlock:** muda de fase quando a carta-assinatura que bloqueia a pista é destruída;
- **Loop Infinito:** muda após determinado número de turnos;
- **Regressão Crítica:** muda quando o jogador elimina a primeira unidade-chave;
- **Gargalo:** muda quando a vida do chefe chega a uma faixa específica;
- **Dependência Quebrada:** muda quando certo tipo de carta é jogado.

### 121.2 Regras para o gatilho

Cada chefe possui apenas um gatilho principal.

O gatilho deve ser:

- fixo;
- explicado antes da batalha;
- coerente com a mecânica;
- fácil de identificar;
- implementável sem lógica excessiva;
- testável;
- acompanhado de feedback visual claro.

O motor não sorteia gatilhos diferentes para o mesmo chefe no MVP.

### 121.3 Escolha de recompensa após o chefe

Escolha fechada: **B — o jogador escolhe 1 entre 3 recompensas temáticas**.

As três opções são selecionadas pelo motor a partir de um conjunto curado compatível com:

- domínio dominante do andar;
- domínio secundário;
- requisitos enfrentados;
- lacunas do jogador;
- composição atual do deck;
- nível de evidência obtido;
- dificuldade do chefe.

### 121.4 Tipos possíveis de recompensa

O conjunto de três pode incluir:

- carta de treinamento;
- upgrade de carta existente;
- consumível especial;
- recuperação de Confiança;
- melhoria temporária de run;
- registro de progresso;
- recompensa Especial, quando aplicável.

### 121.5 Regras de geração da escolha

A escolha de 1 entre 3 deve evitar:

- três opções quase idênticas;
- três opções incompatíveis com o deck;
- três recompensas do mesmo arquétipo;
- opção claramente superior às demais;
- recompensa que contradiga o desempenho da run.

Recomendação de diversidade:

1. uma opção de fortalecimento imediato;
2. uma opção de cobertura de lacuna;
3. uma opção de valor estratégico ou futuro.

### 121.6 Apresentação visual

P0:

- três cartas ou painéis de recompensa;
- selo de qualidade;
- domínio;
- motivo resumido de relevância;
- comparação simples;
- botão de confirmar;
- feedback de seleção.

P1:

- fala do Mentor;
- comentário do chefe derrotado;
- animação de revelação;
- recomendação automática destacada;
- comparação detalhada com o deck atual.

### 121.7 Regra de agência

A IA e o motor podem recomendar uma opção, mas o jogador mantém a decisão final.

A recomendação deve ser explicada, por exemplo:

```text
RECOMENDADA
Cobre uma lacuna de alta relevância para esta vaga.
```

---

## 122. Regra consolidada

> Cada chefe evolui por um gatilho próprio e previsível. Após a vitória, o jogador escolhe uma entre três recompensas temáticas, com opções relevantes e não redundantes.

---

## 123. Próxima decisão recomendada

Definir:

1. se derrotar o chefe também recupera Confiança automaticamente;
2. como a escada/saída do andar aparece após a vitória.

---

## 124. Decisões sobre recuperação após chefes e liberação da saída

### 124.1 Recuperação parcial fixa de Confiança

Escolha fechada: **B — derrotar um chefe recupera uma quantidade fixa de Confiança**.

Regra inicial recomendada:

```text
+2 segmentos de Confiança
```

Como a barra possui 10 segmentos, isso representa uma recuperação relevante sem apagar as consequências do andar.

### 124.2 Regras da recuperação

- ocorre após a vitória e antes da escolha de recompensa;
- nunca ultrapassa o máximo de Confiança;
- é comunicada por animação clara de recomposição;
- não depende do desempenho na batalha;
- não substitui salas de descanso;
- pode ser modificada apenas por efeito explícito de carta, item ou evento.

### 124.3 Motivo da escolha

A recuperação proporcional ao desempenho foi rejeitada porque puniria duas vezes quem já sofreu durante a luta:

1. termina com pouca Confiança;
2. recebe menos recuperação justamente por ter ido mal.

A recuperação fixa mantém a vitória recompensadora e previsível.

### 124.4 Saída do andar

Escolha fechada: **A com animação inspirada em C — a saída já existe no cenário, mas permanece bloqueada até a derrota do chefe**.

Antes da vitória:

- a escada, elevador, portal ou passagem já está visível;
- um selo, corrente, conflito ou barreira impede o uso;
- a saída funciona como objetivo visual da arena.

Depois da vitória:

1. fragmentos, energia ou branches saem do chefe derrotado;
2. convergem na direção da saída;
3. o bloqueio se rompe;
4. a passagem se ilumina;
5. o indicador de interação é ativado;
6. o jogador pode avançar quando decidir.

### 124.5 Regra de agência

A passagem não transporta o jogador automaticamente.

Depois da vitória, ele ainda pode:

- escolher a recompensa;
- observar a sala;
- conversar com o Mentor;
- verificar o deck;
- então interagir com a saída.

### 124.6 Variações por arquitetura

#### Fortaleza/Arquivo

- escada selada;
- portão com correntes;
- elevador de arquivos;
- arco de pedra com branches gravados.

#### Laboratório/Oficina

- elevador técnico;
- portal de energia;
- plataforma de transporte;
- porta de segurança com bloqueio de conflito.

### 124.7 Consequências para assets

P0:

- saída bloqueada;
- saída liberada;
- selo ou barreira;
- animação de ruptura;
- branches ou energia convergindo;
- luz de ativação;
- indicador de interação;
- animação de recuperação de 2 segmentos de Confiança.

P1:

- variações por domínio;
- fala do Mentor;
- partículas exclusivas de chefe;
- transição especial entre andares.

---

## 125. Regra consolidada

> Derrotar um chefe recupera 2 dos 10 segmentos de Confiança. A saída já existe como objetivo visual, mas só é liberada quando a energia do conflito derrotado rompe o bloqueio.

---

## 126. Próxima decisão recomendada

Definir:

1. se a escolha de recompensa acontece dentro da arena ou numa sala/tela separada;
2. como ocorre a transição visual entre um andar e o próximo.

---

## 127. Fluxo final aprovado: recompensa, transição, nocaute, replay e veredito

### 127.1 Recompensa de chefe

Decisão aprovada: **recompensa híbrida dentro da arena**.

Após derrotar o chefe:

1. três recompensas surgem fisicamente no cenário;
2. o jogador interage com uma delas;
3. abre-se um painel de comparação;
4. o painel mostra efeito, domínio, qualidade, compatibilidade com o deck e motivo da recomendação;
5. o jogador escolhe uma opção;
6. a arena reage;
7. a saída é liberada.

A recompensa existe no mundo, mas a comparação detalhada acontece em UI ampliada.

### 127.2 Transição entre andares

Decisão aprovada: **painel de progresso de pull request + subida curta**.

Sequência:

1. agrupamento vencido recebe selo `RESOLVIDO`;
2. branches convergem;
3. o próximo agrupamento é revelado;
4. aparecem domínio dominante e secundário;
5. uma cena curta mostra o herói avançando pela torre;
6. o novo andar começa.

A transição deve durar poucos segundos e ser acelerável.

### 127.3 Nocaute e checkpoint

Decisão aprovada: **retorno ao início do mesmo andar**.

Ao zerar a Confiança:

- tela de nocaute em estilo HQ;
- resumo dos principais erros;
- recomendação curta;
- retorno ao checkpoint de entrada do andar.

Ao recomeçar:

- o layout permanece;
- os oponentes permanecem;
- o deck retorna ao estado inicial do andar;
- buffs temporários são perdidos;
- recompensas obtidas naquele andar são revertidas;
- conteúdo técnico já concluído não entrega recompensa novamente.

Essa regra impede farm infinito e evita que a derrota gere automaticamente um andar mais fácil.

### 127.4 Replay pedagógico

Decisão aprovada: **replay curto baseado em eventos reais do jogo**.

O replay não tenta reconstruir cada ataque.

Ele mostra:

#### O que aconteceu
- pista aberta;
- mana desperdiçada;
- carta-chave mal posicionada;
- efeito técnico não compreendido;
- falha recorrente.

#### O que isso representa
Uma explicação curta do conceito profissional associado.

#### Próxima tentativa
Uma recomendação concreta de estratégia ou estudo.

A IA pode redigir a explicação, mas os erros precisam vir de eventos estruturados e registrados pelo jogo.

### 127.5 Veredito final

Decisão aprovada: **veredito baseado principalmente em perfil e evidências técnicas, não em habilidade no card game**.

Peso recomendado:

| Componente | Peso |
|---|---:|
| Cobertura do perfil frente à JD | 45% |
| Evidências técnicas em perguntas e desafios | 40% |
| Evolução e competências em treinamento | 15% |

O combate influencia progressão, acesso a conteúdo e contexto das evidências, mas não funciona como prova direta de competência profissional.

### 127.6 Resultados

#### MERGED

- boa cobertura dos requisitos prioritários;
- evidências técnicas suficientes;
- ausência de lacunas críticas impeditivas.

#### CHANGES REQUESTED

- base relevante;
- lacunas específicas e corrigíveis;
- plano de melhoria claro.

#### DRAFT

- pouca cobertura dos requisitos centrais;
- evidência insuficiente;
- necessidade de desenvolver fundamentos antes daquela vaga.

### 127.7 Regra de cálculo

A classificação é calculada por regras determinísticas.

A IA atua apenas para:

- explicar;
- personalizar;
- organizar;
- transformar o resultado em linguagem natural.

---

## 128. Regra consolidada

> O jogo avalia o profissional pelo cruzamento entre perfil, vaga e evidências técnicas. A habilidade no card game melhora a jornada, mas não fabrica competência profissional.

---

## 129. Próxima etapa

Rodada 2 de 5: definição dos sets modulares dos oito domínios.

---

## 130. Sets modulares dos oito domínios — aprovado

Os domínios não são andares fixos. São bibliotecas modulares de arte, conteúdo e mecânica usadas pelo compositor de andares.

Cada andar utiliza:

- 1 domínio dominante;
- até 1 domínio secundário;
- proporção visual aproximada de 80/20;
- uma das duas arquiteturas-base;
- props, overlays, efeitos, oponentes, unidades e regras compatíveis.

### 130.1 Backend — Oficina dos Serviços

- Arquitetura preferencial: Laboratório/Oficina.
- Metáfora: máquina invisível que mantém o sistema funcionando.
- Paleta: ferrugem, laranja queimado, azul-petróleo e roxo escuro.
- Props P0:
  1. tubulações de requisições;
  2. forja de serviços;
  3. portão de autenticação;
  4. mecanismo de fila;
  5. console de erros e logs.
- Efeitos: pulsos em tubos, engrenagens, pressão, vazamentos e alertas.
- Conflitos: dependência quebrada, código legado, exceção não tratada, gargalo e loop infinito.
- Ícone: engrenagem atravessada por linha de fluxo.

### 130.2 Frontend — Galeria das Interfaces

- Arquitetura preferencial: Laboratório/Oficina.
- Metáfora: superfície elegante sustentada por estruturas frágeis.
- Paleta: coral, magenta, creme, índigo e azul escuro.
- Props P0:
  1. molduras responsivas;
  2. painéis de componentes;
  3. tear de estilos;
  4. farol de acessibilidade;
  5. mesa de estados e interações.
- Efeitos: reorganização de painéis, overflow, camadas, foco e glitches de layout.
- Conflitos: layout quebrado, estado inconsistente, componente duplicado, foco invisível e dependência visual descontrolada.
- Ícone: janela de interface sobre moldura de dungeon.

### 130.3 QA — Tribunal da Validação

- Arquitetura preferencial: Fortaleza/Arquivo.
- Metáfora: investigação, julgamento e evidência.
- Paleta: âmbar, creme, vermelho de alerta, azul-marinho e violeta.
- Props P0:
  1. bancada de testes;
  2. mural de checklists;
  3. recipiente de bugs;
  4. alarme de regressão;
  5. scanner de cobertura.
- Efeitos: grades de inspeção, carimbos, varreduras e indicadores de estabilidade.
- Conflitos: teste frágil, bug fugitivo, falsa aprovação, regressão e caso de borda ignorado.
- Ícone: lupa ou visor sobre bug.

### 130.4 Banco de Dados — Arquivo das Chaves

- Arquitetura preferencial: Fortaleza/Arquivo.
- Metáfora: cofres, registros, relações e chaves.
- Paleta: dourado envelhecido, marrom, vermelho escuro, violeta e azul profundo.
- Props P0:
  1. estantes de índices;
  2. cofre de chaves;
  3. mesa de consultas;
  4. correntes de transação;
  5. estação de backup.
- Efeitos: registros em trilhos, chaves conectando estruturas, bloqueios e duplicatas.
- Conflitos: deadlock, consulta lenta, registro duplicado, índice ausente e transação inconsistente.
- Ícone: chave sobre pilha de registros.

### 130.5 Cloud — Bastilha das Instâncias

- Arquitetura preferencial: Laboratório/Oficina.
- Metáfora: estruturas que surgem, escalam e desaparecem.
- Props P0:
  1. cápsulas de instância;
  2. console de orquestração;
  3. portão de implantação.
- Efeitos: névoa digital, duplicação, escala e quedas em cascata.
- Conflitos: indisponibilidade, configuração incorreta, implantação quebrada e sobrecarga.
- Ícone: torre ou servidor cercado por nuvens pixeladas.

### 130.6 Inteligência Artificial — Observatório dos Padrões

- Arquitetura preferencial: Laboratório/Oficina.
- Metáfora: observatório alquímico que encontra padrões em constelações de dados.
- Props P0:
  1. prisma de padrões;
  2. núcleo de modelo;
  3. recipiente de treinamento.
- Efeitos: constelações, repetições, previsões divergentes e formas instáveis.
- Conflitos: alucinação, viés, sobreajuste e dado contaminado.
- Ícone: olho ou cristal formado por nós conectados.

### 130.7 Cyber — Fortaleza dos Selos

- Arquitetura preferencial: Fortaleza/Arquivo.
- Metáfora: cidadela protegida por camadas de selos, vigias e portões.
- Props P0:
  1. portão de autenticação;
  2. torre de vigilância;
  3. selo de proteção.
- Efeitos: varreduras, tentativas de invasão, barreiras rachando e alertas.
- Conflitos: credencial exposta, intrusão, permissão excessiva e vulnerabilidade desconhecida.
- Ícone: escudo com fechadura e pequena ruptura.

### 130.8 Mobile — Oficina dos Dispositivos

- Arquitetura preferencial: Laboratório/Oficina.
- Metáfora: oficina compacta sob limitações de tamanho, energia e conexão.
- Props P0:
  1. bancada de dispositivos;
  2. célula de energia;
  3. retransmissor de sinal.
- Efeitos: ondas de conexão, mudança de orientação, bateria oscilando e interfaces compactando.
- Conflitos: fragmentação, conexão instável, consumo excessivo e inconsistência entre dispositivos.
- Ícone: dispositivo portátil dentro de moldura de aventura.

### 130.9 Regras compartilhadas

- nenhum domínio recebe arquitetura completa própria;
- os sets alteram props, overlays, tint, luz, emblemas, corrupção e composição de decks;
- repetição de domínio muda agrupamento de requisitos, arquitetura, corrupção, chefe e domínio secundário;
- o secundário aparece em elementos focais e nunca divide igualmente o cenário;
- os 32 props devem reutilizar bases, overlays e efeitos sempre que possível.

---

## 131. Próxima etapa

Rodada 3 de 5: elenco final de aliados, comandantes, unidades inimigas e derivações de chefes.

---

## 132. Elenco definitivo — aprovado

A estrutura do elenco foi aprovada com separação explícita entre aliados, unidades inimigas, comandantes, elites, chefes e Recrutador final.

### 132.1 Aliados — oito variantes visuais

| Arquétipo | Variante | Afinidade principal | Compatibilidades | Leitura visual |
|---|---|---|---|---|
| Vanguarda | Sentinela de Validação | QA | Cyber, Banco de Dados | escudo de inspeção, visor, postura larga |
| Vanguarda | Guardião das Chaves | Banco de Dados | Cyber, Backend | armadura-cofre, chave e corrente |
| Atacante | Duelista de Interfaces | Frontend | Mobile, QA | lâmina-moldura, postura veloz e angular |
| Atacante | Ferreiro de Serviços | Backend | Cloud, Banco de Dados | martelo técnico, tubos e pressão |
| Suporte | Mensageira de Sinais | Mobile | Frontend, Cloud | transmissor, estandarte compacto e ondas |
| Suporte | Oráculo de Padrões | IA | QA, Banco de Dados | prisma, foco arcano e constelações |
| Especialista | Orquestrador de Instâncias | Cloud | Backend, Mobile | bastão de comando e módulos flutuantes |
| Especialista | Vigia dos Selos | Cyber | QA, Backend | selos, visor e ferramentas de bloqueio |

Cada variante possui:

- 1 kit P0 obrigatório;
- 1 segundo kit P1;
- corpo-base, animação e origem compartilhados por arquétipo;
- nomes de carta variáveis dentro da mesma família visual.

### 132.2 Unidades inimigas — quatro corpos-base

| Corpo-base | Função | Kit inicial | Segundo kit | Domínios comuns |
|---|---|---|---|---|
| Bloqueador | linha de frente | Muralha de Requisitos | Cofre Travado | QA, Banco de Dados, Cyber |
| Agressor | dano e pressão | Bug Fugitivo | Sobrecarga Voraz | Frontend, Mobile, Cloud |
| Sabotador | debuff e enfraquecimento | Dependência Quebrada | Agente de Regressão | Backend, QA, Cyber |
| Anomalia | controle e efeitos técnicos | Loop Fantasma | Estado Corrompido | IA, Frontend, Backend |

Meta:

```text
4 corpos inimigos
× 2 kits curados
= 8 unidades inimigas visuais
```

### 132.3 Seis comandantes-base

#### Conflitos humanoides

1. **Curador do Legado**
   - afinidades: Backend e Banco de Dados;
   - deck: controle, resistência e dependências antigas;
   - assinatura: reutilização de cartas antigas.

2. **Auditor da Regressão**
   - afinidades: QA e Frontend;
   - deck: debuffs, repetição e sabotagem;
   - assinatura: marca estratégias repetidas.

3. **Arquiteto dos Requisitos**
   - afinidades: Frontend, Mobile, Cloud e IA;
   - deck: manipulação e condições contraditórias;
   - assinatura: altera prioridades ou condições do campo.

#### Criaturas e constructos

4. **Gargalo de Ferro**
   - afinidades: Backend e Cloud;
   - deck: pressão crescente, acúmulo e ataque pesado;
   - assinatura: torna-se mais perigoso enquanto recursos ficam presos.

5. **Bug de Mil Faces**
   - afinidades: QA, Frontend, Mobile e IA;
   - deck: anomalias, transformação e instabilidade;
   - assinatura: muda propriedades das unidades.

6. **Cofre em Deadlock**
   - afinidades: Banco de Dados, Cyber e Backend;
   - deck: bloqueio, proteção e dependência entre pistas;
   - assinatura: trava espaços até uma condição ser resolvida.

Cada comandante possui:

- sprite top-down próprio;
- reação de proximidade;
- apresentação de batalha;
- gesto de jogar carta;
- reação a dano direto;
- derrota;
- emblema;
- estilo de deck.

### 132.4 Elites

Uma elite deriva de um comandante-base e recebe:

- acessório ampliado;
- aura;
- emblema de elite;
- corrupção maior;
- deck mais coeso;
- uma regra especial;
- recompensa rara ou especial.

Elites não recebem sprite completo novo.

### 132.5 Derivações de chefe

| Base | Derivação de chefe |
|---|---|
| Curador do Legado | Arquivista Eterno |
| Auditor da Regressão | Juiz da Cobertura Absoluta |
| Arquiteto dos Requisitos | Mestre do Escopo Infinito |
| Gargalo de Ferro | Colosso da Sobrecarga |
| Bug de Mil Faces | Aberração de Produção |
| Cofre em Deadlock | Cárcere das Transações |

Cada chefe usa:

- corpo-base ampliado;
- cabeça ou torso novo;
- acessório grande;
- paleta e emblema próprios;
- regra evolutiva em duas fases.

### 132.6 Recrutador final

O Recrutador é um personagem próprio, separado dos conflitos.

Necessita de:

- sprite top-down;
- corpo inteiro em batalha;
- retrato;
- quatro expressões;
- idle;
- gesto de jogar carta;
- reação;
- pose de veredito.

Ele não é um vilão. Seu papel é consolidar a avaliação da vaga e da jornada.

### 132.7 Teto de produção

| Categoria | Corpos-base | Kits P0 | Kits finais |
|---|---:|---:|---:|
| Aliados | 4 | 8 | 16 |
| Unidades inimigas | 4 | 4 | 8 |

Além disso:

- 6 comandantes top-down;
- 6 apresentações de batalha;
- 6 módulos superiores de chefe;
- 1 Recrutador;
- 1 Lojista;
- Mentor apenas por retrato;
- 1 Herói de exploração;
- 1 Herói de batalha.

Qualquer personagem adicional precisa substituir outro item do escopo.

---

## 133. Próxima etapa

Rodada 4 de 5: fechamento das telas e componentes visuais do jogo.

---

## 134. Telas e componentes visuais — aprovado

A interface foi aprovada com uma linguagem visual única e divisão clara entre Phaser e React.

### 134.1 Responsabilidades do Phaser

- exploração das salas;
- sprites e animações;
- portas e interações;
- arena de batalha;
- unidades no grid;
- efeitos de ataque;
- tela VS;
- transições de chefe;
- purificação da sala;
- subida entre andares.

### 134.2 Responsabilidades do React

- autenticação;
- entrada do perfil e da JD;
- perguntas;
- desafios da loja;
- comparação de recompensas;
- gerenciamento do deck;
- replay pedagógico;
- mapa de competências;
- relatório e veredito;
- configurações.

### 134.3 Camada visual compartilhada

Diálogos, painéis, tooltips, botões, selos e HUD usam o mesmo sistema visual, independentemente da tecnologia responsável por renderizá-los.

### 134.4 Fluxo P0 aprovado

1. Tela de título.
2. Login e cadastro.
3. Entrada do perfil profissional.
4. Entrada da descrição da vaga.
5. Análise e preparação da run.
6. Briefing da run.
7. Exploração.
8. Diálogo do Mentor.
9. Prévia de encontro.
10. Tela VS.
11. Batalha.
12. Pergunta técnica.
13. Sala de item.
14. Loja.
15. Descanso.
16. Recompensa de chefe.
17. Transição de andar.
18. Nocaute.
19. Replay pedagógico.
20. Sala do Recrutador.
21. Veredito e relatório.

### 134.5 Componentes compartilhados P0

#### Painéis

- comum;
- diálogo;
- batalha;
- recompensa;
- alerta;
- chefe;
- veredito.

#### Botões

- normal;
- hover/foco;
- pressionado;
- bloqueado;
- recomendado;
- perigoso;
- confirmação.

#### Tooltips

- palavras-chave;
- domínios;
- estados;
- evidências;
- ameaças;
- qualidade;
- regras especiais.

#### Ícones

- 8 domínios;
- 3 palavras-chave;
- 7 tipos de sala;
- 4 níveis de ameaça;
- 4 qualidades;
- 4 estados de evidência;
- mana;
- ataque;
- vida;
- Confiança;
- deck;
- descarte;
- interação;
- buffs e debuffs essenciais.

### 134.6 Tipografia

- títulos e selos: pixelada;
- textos longos e formulários: sans limpa;
- números de combate: bitmap ou pixelada altamente legível;
- fonte pixelada não é usada em parágrafos longos.

### 134.7 Resolução e prioridade de plataforma

- canvas lógico do Phaser: 960x540;
- proporção 16:9;
- nearest-neighbor;
- letterbox quando necessário;
- assets 48x48 mantidos em pixels inteiros;
- testes em 1366x768 e 1920x1080;
- desktop como prioridade do hackathon;
- suporte a toque permitido, mas sem adaptação móvel completa no P0.

### 134.8 Fora do P0

- editor completo de deck;
- inventário complexo;
- perfil social;
- leaderboard;
- árvore permanente de progressão;
- cutscenes longas;
- múltiplos lojistas;
- animações exclusivas para cada tela;
- dashboard profissional fora do relatório final;
- adaptação móvel completa.

---

## 135. Próxima etapa

Rodada 5 de 5: inventário final de assets, com prioridade, esforço, tamanho, frames, dependências e ordem de produção.

---

## 136. Inventário definitivo de assets — aprovado

O inventário final foi aprovado com quatro níveis de prioridade:

- **P0-VS:** vertical slice obrigatório;
- **P0:** demo completa;
- **P1:** variedade e acabamento;
- **P2:** conteúdo promocional ou evolução futura.

### 136.1 Escala de esforço

| Código | Estimativa aproximada |
|---|---:|
| XS | até 1 hora |
| S | 1–3 horas |
| M | 3–6 horas |
| L | 6–12 horas |
| XL | 12–24 horas |

### 136.2 Fundação técnica

P0-VS:

- template de personagem 48x48;
- template de unidade de batalha;
- templates de comandante;
- template de carta;
- paleta mestra;
- convenção de nomes;
- origens, pivôs e áreas seguras.

P0:

- script de exportação Aseprite;
- validador de dimensões, transparência, tags e paleta.

P1:

- preview automático por GIF ou spritesheet.

### 136.3 Marca e identidade

P0:

- wordmark pixelado;
- símbolo reduzido de branches convergindo;
- versões monocromáticas;
- badges `MERGED`, `CHANGES REQUESTED` e `DRAFT`;
- key art da tela de título.

P2:

- variações promocionais.

### 136.4 Personagens

#### Herói

- exploração top-down em quatro direções;
- idle e caminhada;
- corpo inteiro de batalha;
- jogar carta;
- dano;
- derrota;
- pose de vitória P1.

#### Mentor

- quatro retratos P0;
- retratos especiais P2.

#### Lojista

- sprite top-down;
- idle;
- reação curta;
- placa ou emblema;
- retrato P1.

#### Recrutador

- sprite top-down;
- corpo inteiro de batalha;
- quatro retratos;
- idle;
- jogar carta;
- dano;
- veredito.

### 136.5 Aliados

P0:

- quatro corpos-base;
- oito kits visuais;
- idle;
- ataque;
- ferramenta;
- acessório;
- paleta;
- efeito;
- ícone.

P1:

- oito kits adicionais.

### 136.6 Unidades inimigas

P0:

- quatro corpos-base;
- quatro kits iniciais;
- idle;
- ataque.

P1:

- quatro segundos kits.

Hit, morte, avanço e dissolução são resolvidos pelo Phaser.

### 136.7 Comandantes

Cada comandante usa:

```text
<id>-exploration.aseprite
<id>-battle.aseprite
```

Limites:

- exploração com 1–2 frames;
- batalha com 2–4 frames;
- sem caminhada;
- sem ataque físico;
- efeitos grandes feitos por código.

### 136.8 Elites e chefes

Elites reutilizam comandantes e adicionam:

- aura;
- emblema;
- corrupção;
- acessório;
- regra especial.

Chefes usam módulos superiores derivados das seis bases e adicionam:

- cabeça ou torso;
- acessório grande;
- emblema;
- paleta;
- aura de fase 1;
- aura de fase 2;
- transição.

### 136.9 Cartas e grid

P0-VS:

- moldura vertical-base;
- slots do grid;
- unidade compacta;
- estados válido e inválido.

P0:

- verso;
- molduras Rara e Especial;
- selos de treinamento;
- custo;
- ataque;
- vida;
- palavras-chave;
- oito domínios;
- seleção;
- falta de mana;
- buff e debuff;
- preview ampliado;
- ghost de posicionamento;
- transição carta para unidade.

Tamanhos provisórios:

- carta da mão: cerca de 80x112;
- arte interna: 48x48;
- unidade: 48x48;
- slot: cerca de 64x56.

### 136.10 HUD

Confiança:

- moldura;
- 10 segmentos;
- estado parcial;
- rachaduras;
- proteção;
- recuperação;
- ícone.

Minimapa:

- moldura;
- cinco estados de sala;
- conexões;
- sete tipos de sala;
- marcador atual;
- descoberta.

Batalha:

- mana;
- deck;
- descarte;
- mão e mana inimigas;
- intenção;
- Encerrar turno;
- regra especial;
- fase de chefe;
- destaque de pista.

### 136.11 Arquiteturas

Dois kits-base adaptados de material CC0:

- Fortaleza/Arquivo;
- Laboratório/Oficina.

Cada um inclui piso, paredes, cantos, pilares, bordas, sombras, portas, obstáculos e primeiro plano.

### 136.12 Salas e portas

- 6 formatos;
- 3 layouts por formato;
- 18 templates;
- arquivos em Tiled ou JSON;
- portas em quatro direções;
- estados aberta, fechada, bloqueada e desbloqueando.

### 136.13 Props

Compartilhados P0:

- barril;
- caixa;
- mesa;
- estante;
- pilar;
- luz;
- cabos;
- entulho;
- placa;
- recipiente.

Núcleos especiais P0:

- loja;
- item;
- pergunta;
- descanso;
- chefe;
- saída;
- batalha.

Domínios:

- 20 props conceituais nos quatro domínios profundos;
- 12 nos quatro domínios arquiteturais;
- produção baseada em 10–14 corpos-base, acessórios, overlays e efeitos.

### 136.14 Corrupção e iluminação

P0:

- estável;
- instável;
- crítico;
- glitch;
- rachaduras;
- vazamentos;
- feixe de luz;
- máscaras.

A luz é dirigida no Phaser e não fixada permanentemente nos tiles.

### 136.15 Arenas

P0:

- arena Fortaleza/Arquivo;
- arena Laboratório/Oficina;
- bases do herói;
- bases do oponente;
- suporte dos grids;
- slots de props;
- overlays de domínio;
- três níveis de corrupção.

P1:

- composições avançadas de chefe.

### 136.16 UI sistêmica

P0-VS:

- painel nine-slice;
- botões;
- diálogo.

P0:

- tooltip;
- VS;
- prévia;
- pergunta;
- recompensa;
- loja;
- descanso;
- transição;
- nocaute;
- replay;
- Recrutador;
- relatório e veredito.

P1:

- VS avançada;
- configurações.

### 136.17 Efeitos visuais

Efeitos P0 feitos por código:

- hit;
- tremor;
- morte;
- dano;
- avanço;
- pista;
- mana;
- compra;
- buffs;
- debuffs;
- quebra de Confiança;
- portas;
- purificação;
- branches;
- mudança de fase;
- aura.

Texturas mínimas:

- partícula quadrada;
- circular;
- faísca;
- slash;
- glitch;
- brilho;
- selo;
- fragmento;
- trajetória.

### 136.18 Áudio

P0:

- título;
- duas ambientações;
- batalha;
- chefe;
- Recrutador;
- UI;
- cartas;
- ataque;
- dano;
- porta;
- recompensa;
- cura;
- nocaute;
- veredito;
- transição.

P1:

- assinaturas dos oito domínios;
- vocalizações;
- variações de elite;
- trilha dinâmica.

### 136.19 Estrutura de pastas

```text
art/
├── brand/
├── characters/
├── environments/
├── ui/
├── effects/
├── audio/
├── templates/
├── scripts/
└── exports/
```

### 136.20 Ordem obrigatória de produção

#### Lote 0 — infraestrutura

- paleta;
- templates;
- exportação;
- resolução;
- nearest-neighbor.

#### Lote 1 — vertical slice

- uma sala;
- herói;
- um comandante;
- uma arena;
- um aliado;
- uma unidade inimiga;
- carta;
- grid;
- Confiança;
- minimapa;
- diálogo;
- VS.

#### Lote 2 — combate completo

- quatro corpos aliados;
- quatro corpos inimigos;
- mão;
- mana;
- deck e descarte;
- intenção;
- efeitos;
- fim de turno.

#### Lote 3 — exploração completa

- segunda arquitetura;
- portas;
- layouts;
- props;
- salas especiais;
- corrupção;
- luz.

#### Lote 4 — elenco

- oito kits aliados;
- seis comandantes;
- Recrutador;
- Lojista;
- Mentor.

#### Lote 5 — chefes e fluxo final

- módulos de chefe;
- recompensas;
- transição;
- nocaute;
- replay;
- veredito.

#### Lote 6 — variedade P1

- segundos kits;
- VS avançada;
- efeitos de domínio;
- animações extras.

### 136.21 Linha de corte

Cortar primeiro:

1. segundos kits aliados;
2. segundos kits inimigos;
3. animações P1;
4. efeitos exclusivos;
5. retrato do Lojista;
6. VS elaborada;
7. promoções;
8. aprofundamento dos quatro domínios arquiteturais.

Não cortar:

- herói;
- cartas;
- grid;
- Confiança;
- um kit por aliado;
- um kit por unidade inimiga;
- comandantes físicos;
- salas e arenas legíveis;
- Recrutador;
- veredito.

---

## 137. Situação do planejamento

As cinco rodadas finais estão concluídas:

1. fluxo restante;
2. sets dos domínios;
3. elenco;
4. telas;
5. inventário de assets.

Resta apenas a revisão final e a preparação do pacote canônico.

---

## 138. Revisão final de consistência

A revisão final encontrou pontos que precisavam ser consolidados para impedir interpretações diferentes durante a implementação. Nenhuma correção abaixo altera a direção criativa aprovada.

### 138.1 Documento histórico versus documento canônico

Este arquivo v5.5 continua sendo um registro acumulativo do processo e contém propostas antigas antes de suas correções.

Regra final:

- `merge-quest-planejamento-criativo-assets-v5.5-revisao-final.md` fica como histórico;
- um novo `merge-quest-documento-mestre-final-v1.0.md` será a única fonte canônica;
- versões v0.1–v5.4 não devem ser usadas simultaneamente como fontes ativas.

### 138.2 Composição final do deck inicial

Regra consolidada:

```text
15 cartas no deck inicial
= 13 cartas derivadas do perfil
+ até 2 cartas de treinamento confirmadas pelo jogador
```

Quando não houver carta de treinamento adequada, o espaço continua ocupado por uma carta do perfil. Assim, o deck sempre possui 15 cartas.

As cartas do perfil são escolhidas por relevância para a vaga, mantendo espaço para competências fortes secundárias.

### 138.3 Separação definitiva do elenco

- aliados: unidades invocadas pelas cartas do jogador;
- unidades inimigas: unidades invocadas pelas cartas do oponente;
- comandantes: personagens externos ao grid que controlam decks;
- elites: variações dos comandantes;
- chefes: derivações ampliadas dos comandantes;
- Recrutador: avaliador final próprio.

O termo genérico “inimigo-base” não deve ser usado para descrever a origem visual dos chefes.

### 138.4 Escopo de animações

A regra `idle + attack` aplica-se aos corpos de unidades do grid.

Comandantes e personagens de apresentação usam um conjunto diferente:

- idle;
- jogar carta;
- reação a dano direto;
- derrota ou veredito;
- reação de proximidade na exploração.

Movimentação, flash, tremor, avanço, dissolução e partículas continuam sendo feitos majoritariamente por código.

### 138.5 Sequência única após chefe

Fluxo consolidado:

1. chefe é derrotado;
2. corrupção da arena diminui;
3. Confiança recupera 2 dos 10 segmentos;
4. três recompensas aparecem;
5. jogador compara e escolhe uma;
6. branches e energia convergem;
7. bloqueio da saída se rompe;
8. jogador pode explorar a arena e avançar quando decidir.

Essa sequência resolve a divergência entre “recuperação antes da recompensa” e “saída liberada depois da recompensa”.

### 138.6 Progressão entre andares

Cada run é composta por cinco agrupamentos de requisitos.

Um domínio pode dominar mais de um agrupamento. Os agrupamentos não correspondem obrigatoriamente a cinco domínios diferentes.

A transição mostra:

- agrupamento resolvido;
- próximo agrupamento;
- domínio dominante;
- domínio secundário, quando houver;
- subida curta pela torre.

### 138.7 Veredito profissional

Pesos consolidados:

| Componente | Peso |
|---|---:|
| Cobertura do perfil frente à JD | 45% |
| Evidências em perguntas e desafios | 40% |
| Evolução e competências em treinamento | 15% |

O desempenho no card game:

- não recebe peso profissional próprio;
- influencia acesso, contexto e progressão;
- pode gerar feedback de estratégia;
- não cria evidência falsa de competência.

Os limiares numéricos de `MERGED`, `CHANGES REQUESTED` e `DRAFT` serão calibrados durante testes e armazenados em configuração, sem deixar a IA decidir livremente.

### 138.8 Evidências e treinamento

Estados textuais oficiais:

1. Contato inicial;
2. Em experimentação;
3. Em treinamento;
4. Prática demonstrada.

Não existem porcentagens inventadas de domínio.

Cartas provisórias:

- podem persistir na Coleção de Treinamento;
- ocupam no máximo dois espaços em runs futuras;
- não são exibidas como experiência profissional comprovada;
- mostram origem e atividades associadas.

### 138.9 IA e motor determinístico

A IA pode:

- interpretar perfil e JD;
- mapear requisitos para domínios e tags;
- redigir explicações;
- recomendar cartas compatíveis;
- personalizar nomes e flavor dentro de limites.

A IA não pode:

- inventar assets;
- inventar arquivos;
- criar regras fora do catálogo;
- fabricar evidências profissionais;
- decidir o veredito sem regras;
- alterar resultados do combate depois do cálculo.

O motor determinístico seleciona layouts, assets, decks, regras e recompensas a partir de catálogos validados.

### 138.10 Responsabilidade técnica da interface

Regra simples:

> Phaser apresenta mundo, movimento e combate. React apresenta leitura longa, comparação, formulários e relatórios.

Componentes visuais devem compartilhar tokens, ícones, nine-slices, tipografia e estados, mesmo quando implementados em tecnologias diferentes.

### 138.11 Resolução

- canvas lógico: 960x540;
- proporção 16:9;
- nearest-neighbor;
- desktop como alvo principal;
- testes em 1366x768 e 1920x1080;
- tamanhos de cartas e slots permanecem provisórios até o vertical slice.

### 138.12 Escopo e risco

O escopo completo aprovado é superior ao necessário para provar o conceito.

A ordem de proteção é:

1. P0-VS precisa funcionar antes da expansão;
2. P0 só cresce após validação do slice;
3. P1 e P2 não podem atrasar a demonstração;
4. seis comandantes e seis chefes são o teto, não a primeira entrega;
5. qualquer personagem novo substitui outro item de escopo.

### 138.13 Licenças e fontes externas

Todo asset externo deve ter registro com:

- nome;
- autor;
- URL de origem;
- licença;
- versão ou data de acesso;
- modificações realizadas;
- local de uso no projeto.

Somente materiais compatíveis com o uso pretendido devem entrar no repositório. “Gratuito” não é sinônimo de CC0.

---

## 139. Estrutura do pacote canônico final

Após aprovação desta revisão, o pacote final conterá:

1. documento mestre limpo;
2. inventário estruturado de assets;
3. roadmap de produção por lotes;
4. guia de identidade e UI;
5. catálogo dos oito domínios;
6. catálogo de personagens e oponentes;
7. regras de geração e avaliação;
8. registro de fontes e licenças;
9. briefing e handoff originais;
10. referências visuais;
11. histórico completo separado.

---

## 140. Estado final da revisão

Não foram encontrados bloqueios conceituais.

Pontos que continuam deliberadamente abertos para teste, e não para nova rodada de decisões:

- dimensões finais da carta e dos slots;
- limiares numéricos do veredito;
- duração exata das animações;
- quantidade final de conteúdo P0 dentro do prazo real;
- seleção concreta de packs CC0;
- balanceamento de cartas, mana e dificuldade.

Esses itens devem ser resolvidos por protótipo e teste, não por discussão abstrata.

---

## 141. Plano futuro: Codex local + Aseprite + scripts Lua

Esta etapa será executada **depois da consolidação do pacote final do Merge Quest**.

A ideia aprovada é usar o Codex local dentro do repositório do projeto para:

1. ler os documentos de contexto;
2. localizar e executar o Aseprite instalado;
3. criar scripts Lua;
4. gerar sprites e animações;
5. salvar arquivos `.aseprite`;
6. exportar PNG e JSON para o Phaser;
7. criar previews ampliados;
8. validar dimensões, paleta, tags e nomes;
9. produzir novas versões sem sobrescrever originais;
10. abrir os resultados no Aseprite para revisão humana.

### 141.1 Regra central

O Codex não deve receber apenas:

> “Gere o que achar melhor.”

Ele deve receber liberdade controlada:

> “Gere uma proposta dentro das regras visuais, técnicas e de escopo do Merge Quest. Produza uma nova versão, exporte previews e aguarde aprovação antes de promover o resultado.”

Isso mantém velocidade sem perder consistência artística.

### 141.2 Ciclo de trabalho

```text
contexto do projeto
        ↓
prompt da leva
        ↓
Codex cria ou atualiza script Lua
        ↓
Aseprite gera uma nova versão
        ↓
exportação PNG + JSON + preview 8x
        ↓
validação automática
        ↓
revisão humana
        ↓
aprovar, corrigir ou descartar
```

### 141.3 Proteções obrigatórias

- nunca sobrescrever arquivos originais;
- sempre gerar `v01`, `v02`, `v03` e assim por diante;
- manter backups;
- salvar o `.aseprite` editável;
- exportar preview em tamanho real e ampliado;
- preservar transparência;
- não usar antialiasing;
- respeitar a paleta;
- manter a luz superior esquerda;
- preservar pivôs e posição dos pés;
- registrar alterações;
- pedir aprovação antes de promover um asset;
- não alterar várias famílias de assets na mesma execução;
- não usar modo de execução sem confirmações de segurança.

### 141.4 Arquivos de contexto para o Codex

O pacote enviado ao Codex deverá conter:

- documento mestre final;
- inventário de assets;
- guia de identidade visual;
- catálogo dos oito domínios;
- catálogo de aliados, inimigos e comandantes;
- regras de UI e HUD;
- roadmap de produção;
- referências visuais;
- paleta;
- convenção de nomes;
- estrutura de pastas;
- arquivo `AGENTS.md`;
- arquivo `config/merge-quest-style.json`.

### 141.5 Estrutura recomendada

```text
merge-quest/
├── AGENTS.md
├── config/
│   ├── aseprite-path.json
│   └── merge-quest-style.json
├── docs/
│   ├── master/
│   ├── art/
│   └── references/
├── art/
│   ├── brand/
│   ├── characters/
│   ├── environments/
│   ├── ui/
│   ├── effects/
│   ├── templates/
│   └── exports/
├── scripts/
│   └── aseprite/
├── tools/
├── logs/
└── previews/
```

---

## 142. Produção dividida em 10 levas

Cada leva funciona como uma entrega fechada. O Codex só avança para a próxima depois de:

- gerar os arquivos;
- executar validações;
- criar previews;
- receber correções;
- obter aprovação.

### Leva 1 — Jogador

Escopo:

- herói top-down 3/4;
- idle para baixo;
- caminhada nas quatro direções;
- versão de batalha;
- gesto de jogar carta;
- reação a dano;
- derrota;
- sombra;
- pivô;
- exportação Phaser.

Objetivo:

> validar o estilo de personagem antes de produzir qualquer outro personagem.

### Leva 2 — Cenários-base

Escopo:

- Fortaleza/Arquivo;
- Laboratório/Oficina;
- pisos;
- paredes;
- cantos;
- pilares;
- portas;
- obstáculos;
- primeiro plano;
- uma sala funcional de cada arquitetura;
- estados estável, instável e crítico.

Objetivo:

> validar tiles, iluminação, escala e leitura da exploração.

### Leva 3 — Cartas, grid e HUD

Escopo:

- moldura de carta;
- verso;
- carta rara;
- carta especial;
- selo de treinamento;
- slots do grid;
- frame compacto de unidade;
- mana;
- ataque;
- vida;
- Confiança;
- minimapa;
- deck;
- descarte;
- botão Encerrar turno;
- estados de seleção.

Objetivo:

> fechar a linguagem visual do combate antes de multiplicar unidades.

### Leva 4 — Aliados

Escopo:

- quatro corpos-base;
- oito variantes P0;
- idle;
- ataque;
- ferramentas;
- acessórios;
- ícones;
- palettes e efeitos por afinidade.

Objetivo:

> criar uma biblioteca modular de unidades do jogador sem desenhar uma animação nova para cada carta.

### Leva 5 — Unidades inimigas

Escopo:

- Bloqueador;
- Agressor;
- Sabotador;
- Anomalia;
- quatro kits P0;
- idle;
- ataque;
- estados de seleção e dano por código;
- exportações para o grid inimigo.

Objetivo:

> fechar o vocabulário visual das cartas adversárias.

### Leva 6 — Comandantes

Escopo:

- seis sprites de exploração;
- seis versões de batalha;
- idle;
- atenção;
- gesto de carta;
- reação a dano direto;
- derrota;
- emblemas.

Objetivo:

> produzir os oponentes físicos que aparecem nas salas e comandam os decks.

### Leva 7 — Elites, chefes e Recrutador

Escopo:

- overlays de elite;
- acessórios;
- auras;
- seis módulos de chefe;
- fase 1 e fase 2;
- efeitos de transição;
- Recrutador top-down;
- Recrutador em batalha;
- retratos;
- pose de veredito.

Objetivo:

> concluir os personagens de maior impacto usando as bases aprovadas.

### Leva 8 — NPCs e salas especiais

Escopo:

- Mentor em quatro expressões;
- Lojista;
- balcão;
- loja;
- item;
- pergunta;
- descanso;
- saída;
- portão de chefe;
- marcas de interação;
- recompensas físicas.

Objetivo:

> completar a exploração e as interações fora do combate.

### Leva 9 — Domínios, corrupção e efeitos

Escopo:

- props de Backend;
- Frontend;
- QA;
- Banco de Dados;
- Cloud;
- IA;
- Cyber;
- Mobile;
- emblemas;
- overlays;
- partículas;
- corrupção;
- purificação;
- branches;
- buffs;
- debuffs;
- transições.

Objetivo:

> ampliar variedade por composição modular sem criar oito tilesets independentes.

### Leva 10 — Telas finais, polimento e exportação

Escopo:

- title screen;
- tela VS;
- nocaute;
- recompensa de chefe;
- transição entre andares;
- relatório e veredito;
- badges;
- revisão da paleta;
- validação de nomes;
- atlas;
- JSON;
- previews;
- organização final;
- checklist de integração no Phaser.

Objetivo:

> transformar os assets aprovados em um pacote consistente e pronto para implementação.

---

## 143. Prompt-base para iniciar uma leva

```text
Leia o AGENTS.md e todos os documentos canônicos do Merge Quest.

Execute somente a leva solicitada.

Antes de criar qualquer asset:
1. liste os arquivos que pretende criar;
2. informe quais bases serão reutilizadas;
3. confirme dimensões, tags, paleta, pivô e destino;
4. não altere arquivos fora do escopo da leva.

Para cada asset:
- crie ou atualize um script Lua;
- gere um arquivo .aseprite editável;
- use versionamento incremental;
- nunca sobrescreva o original;
- exporte PNG;
- exporte JSON quando houver animação;
- exporte preview 8x com nearest-neighbor;
- valide dimensões, transparência, tags, paleta e nomes;
- registre o resultado em logs;
- abra o .aseprite final para revisão.

Quando houver liberdade artística, gere no máximo três propostas e explique as diferenças.

Não avance para a próxima leva sem aprovação.
```

---

## 144. Critério para pedir alterações

Evitar pedidos vagos como:

> “Deixe mais bonito.”

Usar correções observáveis:

- aumentar a cabeça em 1 pixel;
- separar melhor as pernas;
- reduzir o ruído no torso;
- melhorar contraste entre braço e corpo;
- manter o limite de 16 cores;
- corrigir luz no lado direito;
- remover pixels isolados;
- preservar pivô;
- aumentar leitura em tamanho real;
- criar nova versão sem alterar a anterior.

---

## 145. Momento de execução

Este plano não será iniciado agora.

Ordem atual:

1. terminar a revisão final;
2. gerar o pacote canônico;
3. organizar os arquivos que já existem;
4. enviar o contexto completo ao Codex;
5. configurar a pipeline;
6. iniciar a Leva 1.

A configuração prática de Codex + Aseprite será retomada depois da entrega dos documentos finais.

---

## 146. Sistema de perguntas em batalha — aprovado

### 146.1 Quantidade por encontro

| Tipo de encontro | Perguntas |
|---|---:|
| Batalha comum | 2 |
| Elite | 3 |
| Chefe de andar | 4 |
| Recrutador final | 4 |

A quantidade é fixa por tipo de encontro.

### 146.2 Distribuição

#### Batalha comum

1. pergunta de abertura após a tela VS;
2. pergunta de situação antes do terceiro turno ou em gatilho equivalente.

#### Elite

1. abertura;
2. desenvolvimento do combate;
3. ativação da regra especial.

#### Chefe

1. abertura;
2. durante a fase 1;
3. transição de fase;
4. início do trecho final.

#### Recrutador

1. requisito prioritário;
2. competência relevante do perfil;
3. lacuna ou competência em treinamento;
4. situação integrada.

Nunca aparecem duas perguntas consecutivas, exceto a pergunta inicial antes do primeiro turno.

### 146.3 Formato

As perguntas são microdesafios de 15 a 40 segundos:

- enunciado curto;
- três ou quatro opções;
- sem cronômetro no MVP;
- feedback técnico curto;
- formatos de escolha, ordenação, identificação de erro ou melhor correção.

### 146.4 Banco curado e IA

O banco curado define:

- verdade técnica;
- resposta correta;
- respostas parciais;
- dificuldade;
- domínio;
- competência;
- efeito de combate;
- evidência;
- tags;
- contextos permitidos.

A IA pode:

- selecionar;
- contextualizar;
- evitar repetição;
- adaptar linguagem;
- explicar.

A IA não pode:

- trocar a resposta correta;
- inventar evidência;
- alterar dificuldade livremente;
- criar consequências fora do catálogo;
- publicar pergunta inédita sem revisão humana.

### 146.5 Consequências no combate

Resposta correta pode conceder:

- revelar intenção;
- recuperar 1 mana;
- pequeno escudo;
- desconto temporário;
- compra adicional;
- remoção de debuff.

Resposta parcial:

- efeito reduzido;
- informação parcial;
- resultado neutro.

Resposta incorreta pode causar:

- escudo inimigo;
- mana inimiga;
- compra adicional;
- intenção oculta;
- custo aumentado;
- slot temporariamente bloqueado;
- debuff leve;
- avanço da regra do comandante.

Limites:

- sem dano direto;
- sem perda direta de Confiança;
- normalmente dura um turno;
- não impede completamente a ação do jogador;
- apenas uma penalidade de pergunta permanece ativa por vez;
- nenhuma carta é descartada permanentemente.

### 146.6 Banco inicial

Vertical slice:

- 20 a 24 perguntas;
- dois ou três domínios;
- revisão manual obrigatória.

P0 completo:

| Domínio | Perguntas |
|---|---:|
| Backend | 16 |
| Frontend | 16 |
| QA | 16 |
| Banco de Dados | 16 |
| Cloud | 8 |
| IA | 8 |
| Cyber | 8 |
| Mobile | 8 |
| **Total** | **96** |

### 146.7 Evidência no veredito

| Componente | Peso |
|---|---:|
| Cobertura do perfil frente à JD | 45% |
| Perguntas de batalha | 15% |
| Desafios aplicados das lojas | 25% |
| Treinamento e evolução | 15% |
| **Total** | **100%** |

Perguntas medem reconhecimento e decisão rápida. Não substituem aplicação prática.

---

## 147. Desafios das lojas — aprovado

### 147.1 Duração

| Tipo | Duração |
|---|---:|
| Normal | 3–6 minutos |
| Raro ou excepcional | 6–10 minutos |

### 147.2 Formatos

- correção de função;
- debugging;
- code review;
- consulta de banco de dados;
- criação de casos de teste;
- ordenação de componentes;
- decisão arquitetural;
- acessibilidade;
- configuração insegura;
- análise de dados ou modelo.

### 147.3 Tentativas

- primeira tentativa: recompensa integral;
- segunda tentativa: permitida após feedback, com recompensa reduzida;
- depois disso: disponível apenas para estudo, sem nova recompensa na mesma run.

### 147.4 Avaliação

Cada desafio utiliza rubrica curada com:

- objetivo;
- critérios obrigatórios;
- soluções aceitas;
- erros críticos;
- pontos parciais;
- feedback;
- recompensa.

A IA interpreta respostas abertas e reconhece soluções equivalentes. O motor determina aprovação, parcial, reprovação e recompensa.

### 147.5 Quantidade

Vertical slice:

- 3 ou 4 desafios.

P0 completo:

- 3 Backend;
- 3 Frontend;
- 3 QA;
- 3 Banco de Dados;
- 1 Cloud;
- 1 IA;
- 1 Cyber;
- 1 Mobile;
- total de 16 desafios.

---

## 148. Duração dos combates — aprovado

| Encontro | Perguntas | Turnos esperados | Duração-alvo |
|---|---:|---:|---:|
| Comum | 2 | 3–4 | 3,5–5 min |
| Elite | 3 | 5–6 | 5,5–8 min |
| Chefe | 4 | 7–8 | 8–11 min |
| Recrutador | 4 | 8–10 | 9–13 min |

Metas de percentil:

| Encontro | Mediana desejada | 90% abaixo de |
|---|---:|---:|
| Comum | 4 min | 6 min |
| Elite | 6,5 min | 9 min |
| Chefe | 9 min | 13 min |
| Recrutador | 11 min | 15 min |

### 148.1 Tempo das perguntas

Cada pergunta adiciona aproximadamente 30 segundos:

- 15–30 s para leitura e resposta;
- 5–10 s para feedback;
- 2–4 s para aplicação do efeito.

### 148.2 Metas de animação

| Evento | Duração recomendada |
|---|---:|
| Jogar carta | 0,4–0,7 s |
| Ataque de unidade | 0,5–0,9 s |
| Resolver uma pista | 1–2 s |
| Resolver três pistas | 4–7 s |
| Buff ou debuff | 0,5–1 s |
| Compra | 0,3–0,6 s |
| Mudança de fase | 4–7 s |
| Vitória comum | 3–5 s |
| Vitória de chefe | 8–12 s |

Animações já vistas podem ser aceleradas em 1x ou 2x.

### 148.3 Duração da run

- demonstração vertical slice: 12–18 minutos;
- run completa: 60–90 minutos.

### 148.4 Telemetria

Registrar:

- duração total;
- duração por turno;
- tempo em perguntas;
- tempo de animação;
- quantidade de turnos;
- cartas jogadas;
- acertos e erros;
- uso de aceleração;
- desistências;
- reinícios.

Caso um combate exceda as metas, revisar antes de remover perguntas:

1. vida excessiva;
2. turnos sem decisões;
3. animações lentas;
4. decks defensivos;
5. textos longos;
6. feedback excessivo.

---

## 149. Travas de implementação das perguntas e desafios — aprovadas

Foram aprovadas as seguintes regras:

1. perguntas são selecionadas e validadas antes da batalha;
2. a distribuição garante que todas apareçam;
3. desafios de código usam execução isolada;
4. o banco possui fluxo formal de revisão e versionamento;
5. acessibilidade, salvamento e abandono são tratados explicitamente.

### 149.1 Preparação antes da batalha

O encontro reserva previamente:

- 2 perguntas em batalha comum;
- 3 em elite;
- 4 em chefe;
- 4 no Recrutador.

Antes da tela VS, o motor valida:

- existência;
- compatibilidade com a JD;
- domínio;
- competência;
- dificuldade;
- ausência de repetição na run;
- resposta correta;
- respostas parciais;
- efeito de combate;
- evidência;
- status `ATIVO`.

A IA não cria uma pergunta emergencial para preencher lacunas.

### 149.2 Garantia de exibição

#### Comum

1. pergunta de abertura;
2. pergunta após a primeira resolução completa.

#### Elite

1. abertura;
2. após a primeira resolução;
3. ativação da regra especial.

#### Chefe

1. abertura;
2. fase 1;
3. transição de fase;
4. trecho final.

A batalha não é artificialmente prolongada apenas para exibir uma pergunta.

### 149.3 Segurança nos desafios de código

Execução exige:

- ambiente isolado;
- tempo máximo;
- memória limitada;
- rede desativada;
- arquivos restritos;
- dependências permitidas;
- encerramento automático;
- casos públicos e ocultos.

No MVP, priorizar:

- completar função curta;
- corrigir poucas linhas;
- analisar código;
- SQL sobre base temporária;
- ordenar ou escolher solução.

### 149.4 Fluxo editorial do banco

```text
RASCUNHO → REVISÃO TÉCNICA → APROVADO → ATIVO → ARQUIVADO
```

Cada item registra:

- autor;
- revisor;
- data;
- versão;
- domínio;
- competência;
- fontes;
- justificativa;
- dificuldade;
- histórico de mudanças.

Alterar resposta correta ou rubrica cria nova versão.

---

## 150. Cronômetro tático nas perguntas de batalha — aprovado para o MVP

O cronômetro pode existir no MVP, desde que seja tratado como **mecânica de ritmo do combate**, não como prova direta de competência profissional.

### 150.1 Motivo da restrição anterior

Um cronômetro rígido poderia misturar:

- conhecimento técnico;
- velocidade de leitura;
- familiaridade com o idioma;
- ansiedade;
- necessidades de acessibilidade;
- problemas de conexão ou foco da aba.

Por isso, o tempo não entra diretamente na nota profissional.

### 150.2 Regra P0

- tempo padrão: **60 segundos por pergunta**;
- aviso visual e sonoro nos últimos 15 segundos;
- sem bônus por responder mais rápido;
- feedback congela o cronômetro;
- a batalha permanece pausada durante a pergunta.

### 150.3 Fim do tempo

Quando o cronômetro chega a zero:

1. a pergunta é registrada como `SEM RESPOSTA`;
2. nenhuma evidência positiva é concedida;
3. aplica-se uma penalidade tática leve;
4. o sistema mostra a explicação;
5. o combate continua.

`SEM RESPOSTA` não é exibido como erro conceitual confirmado no relatório. Ele indica evidência insuficiente naquela questão.

### 150.4 Penalidade por tempo esgotado

A penalidade deve ser igual ou menor que a de uma resposta incorreta:

- inimigo ganha 1 escudo;
- intenção permanece oculta;
- oponente recebe 1 mana no próximo turno;
- pequena limitação por um turno.

Nunca:

- dano direto;
- perda de Confiança;
- descarte permanente;
- bloqueio completo do turno.

### 150.5 Acessibilidade

Como o tempo não compõe a nota profissional, o jogador pode usar:

- modo padrão: 60 s;
- tempo ampliado: 90 s;
- modo sem contagem regressiva, quando necessário.

Essas opções não reduzem recompensas nem alteram o veredito.

### 150.6 Eventos externos

O cronômetro pausa quando:

- a aba perde foco;
- o jogo detecta desconexão;
- um modal do sistema é aberto;
- ocorre erro de carregamento;
- o jogador abre uma configuração de acessibilidade.

O objetivo é controlar ritmo, não punir problemas externos.

### 150.7 Desafios das lojas

Desafios longos não usam contagem regressiva rígida no P0.

Eles mostram apenas:

- duração estimada;
- tempo já gasto;
- opção de abandonar sem registrar erro técnico.

Um modo cronometrado pode existir futuramente como desafio especial, sem substituir o formato padrão.

---

## 151. Telemetria do cronômetro

Registrar:

- tempo disponível;
- tempo usado;
- resposta antes ou após o aviso;
- tempo esgotado;
- uso de tempo ampliado;
- pausa por perda de foco;
- taxa de abandono;
- relação entre tempo e acerto.

O playtest deve verificar se 60 segundos é suficiente. O valor permanece configurável.

---

## 152. Tempos finais das perguntas e desafios — aprovado

### 152.1 Perguntas de batalha

O tempo padrão foi reduzido para:

```text
30 segundos por pergunta
```

Regras:

- aviso visual e sonoro nos últimos 10 segundos;
- sem bônus por responder mais rápido;
- a batalha permanece pausada;
- feedback e explicação aparecem somente após a confirmação ou o fim do tempo;
- o cronômetro não entra diretamente no cálculo profissional;
- perguntas devem ser curtas, com no máximo quatro linhas e três ou quatro opções.

Ao zerar:

1. registrar `SEM RESPOSTA`;
2. não conceder evidência positiva;
3. aplicar penalidade tática leve;
4. exibir a explicação;
5. retomar o combate.

A penalidade nunca causa:

- perda direta de Confiança;
- dano direto;
- descarte permanente;
- bloqueio completo do turno.

### 152.2 Acessibilidade

O padrão competitivo e narrativo do MVP é 30 segundos.

Também devem existir opções de acessibilidade:

- 45 segundos;
- 60 segundos;
- sem contagem regressiva.

Essas opções não reduzem recompensa nem alteram o veredito, porque o cronômetro mede ritmo de jogo, não competência profissional.

### 152.3 Desafios das lojas

Os desafios aplicados das lojas possuem:

```text
10 minutos por tentativa
```

Regras:

- contador visível;
- aviso aos 5 minutos restantes;
- novo aviso no último minuto;
- salvamento automático;
- execução de código continua limitada por sandbox;
- a contagem pausa em desconexões ou falhas técnicas detectadas;
- abandonar voluntariamente não conta como erro técnico.

Quando os 10 minutos terminam:

1. o sistema envia automaticamente o estado atual da resposta;
2. a rubrica pode conceder aprovação parcial;
3. o resultado é registrado como tentativa concluída;
4. o feedback é exibido;
5. o jogador pode usar a segunda tentativa, quando disponível.

### 152.4 Segunda tentativa

- também possui 10 minutos;
- começa após o feedback da primeira;
- recompensa reduzida em um nível;
- registra evolução entre as respostas;
- não permite recompensas adicionais depois da segunda tentativa na mesma run.

### 152.5 Impacto estimado na duração

| Conteúdo | Tempo máximo |
|---|---:|
| Pergunta de batalha | 30 s |
| Batalha comum — 2 perguntas | 1 min |
| Elite — 3 perguntas | 1 min 30 s |
| Chefe — 4 perguntas | 2 min |
| Recrutador — 4 perguntas | 2 min |
| Desafio de loja por tentativa | 10 min |

Os alvos gerais de duração dos combates permanecem:

| Encontro | Duração-alvo |
|---|---:|
| Comum | 3,5–5 min |
| Elite | 5,5–8 min |
| Chefe | 8–11 min |
| Recrutador | 9–13 min |

A duração completa da run deve considerar que desafios de loja são opcionais.

---

## 153. Impacto dos cronômetros na HUD — decisão visual e técnica

Os tempos aprovados não são apenas regras abstratas. Eles exigem componentes próprios de HUD, estados visuais, animações, sons e assets de pixel art.

A interface precisa comunicar claramente:

- quanto tempo resta;
- quando o tempo está acabando;
- quando o cronômetro está pausado;
- quando a resposta foi enviada;
- quando ocorreu envio automático;
- se o jogador está na primeira ou na segunda tentativa;
- se o modo de acessibilidade alterou ou removeu a contagem regressiva.

Cor nunca pode ser o único indicador.

---

### 153.1 HUD das perguntas de batalha

As perguntas de batalha aparecem em um painel React sobre o combate pausado, mas usam a mesma linguagem de pixel art da HUD do Phaser.

#### Composição

```text
┌─────────────────────────────────────────┐
│ Domínio / Competência       [⏳ 00:30]  │
│ ████████████████████████████████████    │
│                                         │
│ Enunciado curto                         │
│                                         │
│ [A] Alternativa                         │
│ [B] Alternativa                         │
│ [C] Alternativa                         │
│                                         │
│                         [CONFIRMAR]      │
└─────────────────────────────────────────┘
```

Elementos obrigatórios:

- moldura pixelada do painel;
- ícone de cronômetro;
- números `00:30`;
- barra temporal;
- domínio e competência;
- alternativas;
- estado selecionado;
- botão Confirmar;
- feedback após resposta;
- indicação de penalidade ou bônus aplicado ao combate.

#### Posição

- cronômetro no canto superior direito do painel;
- barra temporal logo abaixo do cabeçalho;
- não cobrir a Confiança nem o minimapa sem necessidade;
- combate permanece visível e escurecido ao fundo.

#### Estados do cronômetro

| Estado | Intervalo | Comunicação |
|---|---:|---|
| Normal | 30–11 s | moldura estável e animação discreta |
| Alerta | 10–4 s | ícone muda de pose, borda pulsa lentamente e surge aviso sonoro |
| Crítico | 3–1 s | número aumenta levemente, barra fica quase vazia e há pulso estrutural |
| Pausado | qualquer | ícone de pausa e texto `PAUSADO` |
| Sem limite | acessibilidade | símbolo de infinito no lugar dos números |
| Esgotado | 0 s | selo `SEM RESPOSTA`, envio automático e efeito tático |
| Confirmado | após resposta | cronômetro congela e aparece selo de resposta enviada |

Não usar flashing rápido.

#### Comportamento visual

- a barra diminui continuamente;
- os números são a fonte precisa de tempo;
- a barra comunica urgência por forma e preenchimento;
- os últimos 10 segundos usam aviso visual e sonoro;
- o feedback congela completamente o contador;
- o efeito da resposta é mostrado antes de retornar à batalha.

---

### 153.2 Pixel art necessária para perguntas de batalha

Assets P0:

| Asset | Quantidade/estados | Uso |
|---|---:|---|
| Moldura de cronômetro | normal, alerta, crítico, pausado | cabeçalho da pergunta |
| Ícone de ampulheta/clock | 4 frames | animação discreta |
| Dígitos bitmap | 0–9 + `:` | contador |
| Barra temporal | cheia, parcial e vazia | leitura rápida |
| Selo `SEM RESPOSTA` | 1 | tempo esgotado |
| Selo `RESPONDIDO` | 1 | confirmação |
| Ícone de pausa | 1 | perda de foco ou pausa técnica |
| Ícone de infinito | 1 | modo sem contagem |
| Moldura de alternativa | normal, foco, selecionada, correta, parcial e incorreta | respostas |
| Ícone de bônus | 4–6 tipos | consequência positiva |
| Ícone de penalidade | 4–6 tipos | consequência negativa |
| Partícula de aplicação | 1 atlas pequeno | transição de volta ao combate |

Os dígitos podem ser uma fonte bitmap própria, não sprites separados em arquivos individuais.

---

### 153.3 HUD dos desafios das lojas

Os desafios das lojas usam um painel React mais amplo, mas continuam visualmente integrados ao mundo.

#### Composição

```text
┌──────────────────────────────────────────────────┐
│ DESAFIO DO LOJISTA       Tentativa 1/2  [10:00] │
│ Competência • Dificuldade • Recompensa provável  │
│ ████████████████████████████████████████████     │
├──────────────────────────────────────────────────┤
│ Enunciado / código / editor / dados              │
│                                                  │
│                                                  │
├──────────────────────────────────────────────────┤
│ Salvamento automático ✓         [ENVIAR RESPOSTA]│
└──────────────────────────────────────────────────┘
```

Elementos obrigatórios:

- contador de 10 minutos;
- barra temporal;
- indicador `Tentativa 1/2` ou `2/2`;
- ícone de salvamento automático;
- estado de conexão;
- duração estimada;
- botão de envio manual;
- aviso de envio automático;
- feedback de rubrica;
- resultado integral, parcial ou não aprovado.

#### Alertas

- início: `10:00`;
- 5 minutos restantes: aviso curto;
- 1 minuto restante: aviso reforçado;
- 10 segundos finais: contagem visual mais forte, sem flashing agressivo;
- ao zerar: envio automático do estado atual.

#### Estados

| Estado | Comunicação visual |
|---|---|
| Em andamento | contador e barra ativos |
| Salvando | pequeno ícone animado |
| Salvo | selo discreto de confirmação |
| Desconectado | contador pausado e aviso textual |
| Enviando | painel bloqueado com indicador |
| Enviado automaticamente | selo próprio e explicação |
| Primeira tentativa | badge `1/2` |
| Segunda tentativa | badge `2/2` e aviso de recompensa reduzida |
| Finalizado | resultado e rubrica |

---

### 153.4 Pixel art necessária para os desafios das lojas

Assets P0:

| Asset | Quantidade/estados | Uso |
|---|---:|---|
| Moldura longa de timer | normal, alerta, crítico, pausado | cabeçalho |
| Ícone de relógio/ampulheta | 4 frames | contador |
| Barra de 10 minutos | cheia, parcial e vazia | progresso |
| Badge de tentativa | `1/2` e `2/2` | estado da tentativa |
| Ícone de autosave | salvando, salvo e erro | persistência |
| Ícone de conexão | online, pausado e offline | falha técnica |
| Selo `ENVIO AUTOMÁTICO` | 1 | fim do tempo |
| Selo de resultado | aprovado, parcial e não aprovado | rubrica |
| Moldura de editor | normal, foco e bloqueada | código/resposta |
| Aviso de recompensa reduzida | 1 | segunda tentativa |

O editor pode usar tipografia monoespaçada normal, mas sua moldura, badges, ícones e feedback seguem a identidade pixel art.

---

## 154. Atualização do inventário e das levas de produção

### 154.1 Inventário de HUD

Adicionar ao P0:

- cronômetro de batalha de 30 segundos;
- cronômetro de loja de 10 minutos;
- fonte bitmap numérica;
- barras temporais;
- estados de alerta;
- pausa;
- sem limite;
- envio automático;
- autosave;
- conexão;
- badges de tentativa;
- selos de resultado;
- ícones de bônus e penalidade.

### 154.2 Leva 3 — Cartas, grid e HUD

Passa a incluir obrigatoriamente:

- protótipo visual do cronômetro de batalha;
- dígitos bitmap;
- barra de 30 segundos;
- estados normal, alerta, crítico, pausado e esgotado;
- aplicação visual de bônus ou penalidade;
- teste em 960x540.

O cronômetro deve ser validado no vertical slice junto das perguntas.

### 154.3 Leva 8 — NPCs e salas especiais

Passa a incluir:

- painel visual do desafio da loja;
- contador de 10 minutos;
- tentativa 1/2 e 2/2;
- autosave;
- conexão;
- envio manual e automático;
- resultado da rubrica;
- integração visual com o Lojista e o balcão.

### 154.4 Leva 10 — Polimento

Revisar:

- legibilidade dos números;
- animações dos últimos segundos;
- volume dos avisos sonoros;
- contraste;
- modo de acessibilidade;
- comportamento em perda de foco;
- envio automático;
- consistência entre React e Phaser;
- telemetria dos tempos.

---

## 155. Regra consolidada da HUD temporal

> As perguntas de batalha usam um cronômetro pixel art de 30 segundos integrado ao painel de pergunta. Os desafios das lojas usam um cronômetro pixel art de 10 minutos com autosave, duas tentativas e envio automático. Ambos exigem assets, estados e animações próprios e fazem parte do inventário P0, não sendo apenas lógica de programação.

---

## 156. Roadmap definitivo para encerrar o planejamento e preparar o Codex

O encerramento do planejamento será dividido em fases. A produção de sprites e implementação não começa antes de existir uma base canônica, técnica e organizacional suficientemente clara.

### Fase 1 — Fechamento criativo

Objetivos:

- concluir referências artísticas;
- fechar direção de arte;
- definir design das telas;
- revisar linguagem visual;
- consolidar decisões de HUD;
- selecionar referências aprovadas;
- remover decisões substituídas do documento canônico.

Entregas:

- guia de direção artística;
- painel de referências;
- regras de pixel art;
- mapa de componentes visuais;
- lista de decisões finais de UX e HUD.

### Fase 2 — Arquitetura dos repositórios

Antes de criar tarefas ou gerar código, definir:

- quantidade de repositórios;
- responsabilidades de cada repositório;
- monorepo versus múltiplos repositórios;
- frontend React;
- jogo Phaser;
- backend;
- banco de dados;
- serviço de IA;
- conteúdo curado;
- pipeline de arte;
- documentação;
- infraestrutura;
- testes;
- automações;
- propriedade das equipes;
- estratégia de branches;
- convenção de commits;
- pull requests;
- releases e ambientes.

A arquitetura dos repositórios precisa mostrar claramente:

```text
quem mantém
o que contém
como se comunica
como é executado
como é testado
como é entregue
```

Entregas:

- diagrama de repositórios;
- árvore de pastas;
- limites entre módulos;
- contratos de integração;
- convenções de Git;
- matriz de responsabilidade.

### Fase 3 — Protótipo de telas e Design Book

Depois da direção visual e da arquitetura técnica, produzir:

- wireframes;
- protótipos das telas principais;
- fluxo navegável;
- HUD de exploração;
- HUD de batalha;
- perguntas cronometradas;
- desafios da loja;
- tela de relatório;
- componentes compartilhados;
- estados de erro, pausa e carregamento;
- design responsivo mínimo para desktop.

O Design Book deve conter:

- identidade;
- cores;
- tipografia;
- ícones;
- spacing;
- grids;
- nine-slices;
- cards;
- botões;
- painéis;
- tooltips;
- HUD;
- animações;
- acessibilidade;
- regras de uso;
- exemplos corretos e incorretos;
- handoff React/Phaser.

Entregas:

- protótipo navegável;
- design book;
- catálogo de componentes;
- especificação de estados;
- assets de referência aprovados.

### Fase 4 — Carta Magna do Merge Quest

Criar um documento canônico único para apresentação e execução.

A Carta Magna reúne:

1. visão do produto;
2. problema;
3. público;
4. proposta de valor;
5. jornada do usuário;
6. requisitos funcionais;
7. requisitos não funcionais;
8. regras do jogo;
9. combate;
10. exploração;
11. perguntas;
12. desafios;
13. avaliação profissional;
14. IA e motor determinístico;
15. direção artística;
16. Design Book;
17. arquitetura dos repositórios;
18. arquitetura de software;
19. schemas de dados;
20. segurança;
21. acessibilidade;
22. telemetria;
23. vertical slice;
24. critérios de aceite;
25. roadmap;
26. responsabilidades;
27. riscos;
28. inventário de assets;
29. pipeline Codex + Aseprite;
30. plano de tarefas.

A Carta Magna deve servir para:

- alinhar parceiros;
- apresentar o projeto;
- orientar design;
- orientar desenvolvimento;
- alimentar o Codex;
- gerar o backlog do Linear;
- impedir decisões contraditórias.

### Fase 5 — Especificação executável

Produzir:

- vertical slice com critérios de aceite;
- contrato técnico de assets;
- schemas de cartas;
- schemas de perguntas;
- schemas de desafios;
- schemas de encontros;
- schemas de evidências;
- schemas de recompensas;
- tokens visuais;
- paleta;
- nomes;
- versionamento;
- convenções de exportação;
- definição de pronto.

### Fase 6 — Contexto operacional do Codex

Produzir:

- `AGENTS.md`;
- instruções de segurança;
- regras de autonomia;
- estrutura de workspace;
- scripts de validação;
- prompts das 10 levas;
- checklist de revisão;
- arquivo de fontes e licenças;
- pacote canônico sem histórico contraditório.

---

## 157. Primeira missão do Codex: construir o Linear

Antes de gerar sprites ou implementar funcionalidades, a primeira missão operacional do Codex será organizar o projeto no Linear a partir da Carta Magna.

### 157.1 Pré-condições

O Codex deve receber:

- Carta Magna;
- roadmap;
- arquitetura de repositórios;
- vertical slice;
- critérios de aceite;
- inventário de assets;
- Design Book;
- responsabilidades da equipe;
- lista de integrantes;
- prioridades e prazo;
- acesso autorizado ao Linear.

### 157.2 Ordem de execução

O Codex deve:

1. ler toda a documentação canônica;
2. resumir o entendimento do projeto;
3. verificar o workspace, teams e projects disponíveis no Linear;
4. propor a estrutura antes de criar conteúdo;
5. aguardar aprovação;
6. criar projetos, milestones, labels, cycles e issues;
7. dividir épicos em tarefas pequenas;
8. associar critérios de aceite;
9. marcar dependências;
10. separar tarefas por disciplina;
11. sugerir responsáveis, sem atribuir pessoas silenciosamente;
12. gerar uma revisão final do backlog;
13. aguardar aprovação antes de iniciar implementação.

### 157.3 Estrutura proposta no Linear

#### Initiative

```text
Merge Quest — Vertical Slice e MVP
```

#### Projects

1. Produto e requisitos;
2. UX/UI e Design Book;
3. Arquitetura e infraestrutura;
4. Frontend React;
5. Jogo Phaser;
6. Backend e banco;
7. IA e conteúdo técnico;
8. Arte e animação;
9. QA, acessibilidade e telemetria;
10. Demo, apresentação e entrega.

#### Milestones

- documentação canônica;
- protótipo navegável;
- vertical slice visual;
- combate funcional;
- exploração funcional;
- conteúdo técnico funcional;
- integração completa;
- playtest;
- demo final.

#### Labels

- `area:product`
- `area:design`
- `area:react`
- `area:phaser`
- `area:backend`
- `area:database`
- `area:ai`
- `area:art`
- `area:content`
- `area:qa`
- `priority:p0-vs`
- `priority:p0`
- `priority:p1`
- `type:feature`
- `type:bug`
- `type:research`
- `type:content`
- `type:asset`
- `type:tech-debt`
- `blocked`
- `needs-review`

### 157.4 Regra de granularidade

Uma issue deve:

- representar uma entrega verificável;
- ter um responsável principal;
- ter critérios de aceite;
- caber preferencialmente em até um ou dois dias;
- registrar dependências;
- apontar para o documento ou seção relevante;
- não misturar design, arte, backend e frontend numa única tarefa.

Épicos maiores devem ser quebrados em sub-issues.

### 157.5 Primeira instrução canônica para o Codex

```text
Leia integralmente a Carta Magna do Merge Quest, o Design Book,
a arquitetura dos repositórios, o vertical slice, os critérios de aceite,
o inventário de assets e o AGENTS.md.

Sua primeira missão é estruturar o projeto no Linear.

Antes de criar ou alterar qualquer item:
1. inspecione o workspace e os times disponíveis;
2. proponha a estrutura de initiative, projects, milestones, cycles e labels;
3. apresente a decomposição do vertical slice e do MVP;
4. identifique dependências e riscos;
5. sugira a distribuição entre os integrantes;
6. aguarde aprovação.

Após aprovação:
- crie a estrutura;
- transforme os requisitos em issues e sub-issues;
- adicione critérios de aceite;
- vincule dependências;
- aplique prioridades P0-VS, P0, P1 e P2;
- separe produto, design, React, Phaser, backend, banco, IA,
  conteúdo, arte, QA, acessibilidade, telemetria e apresentação;
- não inicie implementação;
- não atribua pessoas sem confirmação;
- não altere escopo;
- ao terminar, gere um relatório de auditoria do backlog.
```

---

## 158. Ordem final consolidada

A ordem aprovada passa a ser:

1. concluir referências artísticas e design;
2. limpar o documento mestre;
3. definir a arquitetura dos repositórios;
4. definir o vertical slice e seus critérios de aceite;
5. criar o contrato técnico de assets;
6. criar schemas;
7. fechar paleta, nomes e versionamento;
8. gerar protótipos de telas;
9. produzir o Design Book;
10. construir a Carta Magna;
11. escrever o `AGENTS.md`;
12. montar os prompts das 10 levas;
13. preparar o pacote canônico para o Codex;
14. conectar Codex ao Linear;
15. executar como primeira missão a criação do backlog no Linear;
16. revisar tarefas com a equipe;
17. iniciar implementação e produção de assets;
18. começar a Leva 1 do Codex + Aseprite somente depois da aprovação do backlog.

---

## 159. Arquitetura de repositórios — decisão inicial

Decisão aprovada:

```text
O Merge Quest será mantido em um monorepo.
```

O monorepo deverá concentrar, com limites claros:

- frontend React;
- jogo Phaser;
- backend;
- banco e migrações;
- serviço de IA;
- conteúdo curado;
- design system;
- contratos e schemas;
- pipeline de arte;
- documentação;
- testes;
- infraestrutura;
- automações.

### 159.1 Objetivos do monorepo

- compartilhar tipos e schemas;
- evitar duplicação entre React, Phaser e backend;
- manter contratos versionados juntos;
- facilitar refactors coordenados;
- permitir CI seletiva por pacote;
- centralizar documentação e regras do Codex;
- simplificar o setup da equipe;
- manter assets, conteúdo e código alinhados.

### 159.2 Regra de limites

Monorepo não significa um código único e acoplado.

Cada aplicação ou pacote deve possuir:

- responsabilidade própria;
- dependências explícitas;
- API ou contrato definido;
- testes próprios;
- comandos próprios;
- dono ou responsáveis;
- fronteiras que impeçam imports indevidos.

### 159.3 Próximas decisões de arquitetura

A definição do monorepo será conduzida em formato Q&A, cobrindo:

1. package manager e orquestração;
2. divisão entre `apps`, `packages`, `content`, `art` e `docs`;
3. frontend React e jogo Phaser;
4. backend e banco;
5. serviço de IA;
6. contratos e schemas;
7. autenticação;
8. armazenamento de assets;
9. pipeline de conteúdo;
10. testes;
11. CI/CD;
12. ambientes;
13. observabilidade;
14. segurança;
15. ownership;
16. Git e pull requests;
17. integração com Linear;
18. setup do Codex;
19. Definition of Done;
20. estratégia de releases.

---

## 160. Arquitetura do monorepo — rodada 1 aprovada

### 160.1 Ferramentas

Decisão aprovada:

```text
pnpm Workspaces + Turborepo
```

Responsabilidades:

- `pnpm`: dependências, workspaces e links entre pacotes;
- `Turborepo`: execução de `dev`, `build`, `test`, `lint`, cache e tarefas afetadas;
- TypeScript compartilhado;
- scripts padronizados na raiz;
- CI seletiva por aplicação ou pacote.

Arquivos-base esperados:

```text
package.json
pnpm-workspace.yaml
turbo.json
tsconfig.base.json
eslint.config.js
```

### 160.2 React e Phaser

Decisão aprovada:

```text
uma única aplicação web
+
Phaser modularizado em pacotes internos
```

Estrutura conceitual:

```text
apps/
└── web/

packages/
├── game-runtime/
├── game-core/
├── game-content/
└── ui/
```

Responsabilidades:

- `apps/web`: autenticação, perfil, vaga, perguntas, loja, relatórios e montagem do canvas;
- `game-runtime`: inicialização do Phaser, cenas, renderização, input e ciclo visual;
- `game-core`: regras determinísticas de combate, exploração e progressão;
- `game-content`: cartas, encontros, perguntas, recompensas e catálogos;
- `ui`: componentes React e tokens compartilhados.

Regras:

- Phaser não importa React;
- React não contém regras centrais de combate;
- `game-core` não depende do navegador;
- `game-runtime` traduz eventos entre o motor e a interface;
- o usuário percebe um único produto e um único fluxo;
- autenticação, sessão e estado da run permanecem integrados.

---

## 161. Mudança de método: decisões em pacotes macro

A partir desta etapa, o planejamento deixa de discutir cada detalhe técnico isoladamente.

Novo formato:

1. apresentar um pacote completo de decisões;
2. explicar apenas os impactos relevantes;
3. registrar riscos e pontos ainda abertos;
4. aprovar o conjunto ou corrigir apenas divergências;
5. avançar para o próximo bloco.

As decisões pequenas de implementação ficam para protótipo, testes e execução do Codex.

---

## 162. Pacote consolidado de arquitetura do monorepo

### 162.1 Base tecnológica

- monorepo;
- `pnpm Workspaces`;
- `Turborepo`;
- TypeScript compartilhado;
- uma aplicação web principal;
- React como estrutura do produto;
- Phaser montado dentro da aplicação;
- backend separado como aplicação interna do mesmo monorepo.

### 162.2 Estrutura recomendada

```text
merge-quest/
├── apps/
│   ├── web/
│   └── api/
├── packages/
│   ├── game-core/
│   ├── game-runtime/
│   ├── contracts/
│   ├── ui/
│   ├── config/
│   ├── telemetry/
│   └── testing/
├── content/
│   ├── cards/
│   ├── questions/
│   ├── challenges/
│   ├── encounters/
│   ├── rewards/
│   └── competencies/
├── art/
│   ├── source/
│   ├── exports/
│   ├── previews/
│   ├── references/
│   └── licenses/
├── docs/
│   ├── carta-magna/
│   ├── design-book/
│   ├── architecture/
│   ├── requirements/
│   └── decisions/
├── tooling/
│   ├── aseprite/
│   ├── generators/
│   ├── validation/
│   └── linear/
├── infrastructure/
├── tests/
├── AGENTS.md
├── pnpm-workspace.yaml
├── turbo.json
└── package.json
```

### 162.3 Responsabilidades

#### `apps/web`

- login;
- perfil;
- descrição da vaga;
- perguntas;
- desafios;
- loja;
- relatório;
- componentes React;
- montagem do canvas Phaser.

#### `apps/api`

- autenticação;
- persistência;
- geração de runs;
- integração com IA;
- conteúdo técnico;
- avaliação;
- telemetria;
- relatórios.

#### `packages/game-core`

Fonte oficial das regras determinísticas:

- estado da run;
- combate;
- exploração;
- Confiança;
- recompensas;
- progressão;
- comandos;
- eventos;
- snapshots;
- replay.

Não depende de React, Phaser ou navegador.

#### `packages/game-runtime`

- inicialização do Phaser;
- cenas;
- input;
- sprites;
- animações;
- áudio;
- adaptação entre `game-core` e canvas.

#### `packages/contracts`

- schemas;
- tipos compartilhados;
- DTOs;
- validações;
- eventos;
- versões dos contratos.

#### `packages/ui`

- design tokens;
- componentes React;
- nine-slices;
- HUD;
- tooltips;
- botões;
- estados visuais.

#### `content`

Conteúdo curado versionado em dados:

- cartas;
- perguntas;
- desafios;
- recompensas;
- encontros;
- competências;
- rubricas.

#### `art`

- fontes editáveis;
- exports;
- previews;
- referências;
- licenças.

### 162.4 Fonte de verdade do jogo

Decisão recomendada:

```text
game-core = fonte oficial do estado
React e Phaser = adaptadores visuais
```

Fluxo:

```text
comando
  ↓
game-core calcula novo estado
  ↓
gera eventos e snapshot
  ↓
React e Phaser atualizam a apresentação
```

Consequências:

- animação nunca decide resultado;
- React não controla combate;
- Phaser não guarda regra escondida;
- replay e salvamento ficam determinísticos;
- testes podem rodar sem abrir o jogo.

### 162.5 Backend e banco

Proposta P0:

- API Node.js com TypeScript;
- PostgreSQL;
- ORM ou query builder escolhido pela equipe;
- migrações versionadas;
- conteúdo técnico armazenado e validado por schemas;
- assets pesados fora do banco;
- logs e telemetria separados dos dados profissionais.

O documento canônico não deve travar framework específico antes de validar a experiência e a capacidade da equipe.

### 162.6 Serviço de IA

A IA fica atrás da API.

Responsabilidades:

- interpretar perfil e JD;
- mapear requisitos;
- contextualizar conteúdo curado;
- redigir feedback;
- produzir explicações e relatórios.

Não pode:

- decidir combate;
- inventar evidência;
- criar pergunta ativa sem revisão;
- alterar resposta correta;
- selecionar asset inexistente;
- calcular veredito fora das regras.

### 162.7 Armazenamento de arte e exports

- `.aseprite` permanece em `art/source`;
- PNG e JSON aprovados vão para `art/exports`;
- previews ficam fora do bundle de produção;
- assets finais são copiados ou empacotados no build;
- arquivos grandes podem usar Git LFS quando necessário;
- toda fonte externa possui registro de licença.

### 162.8 Testes

#### Unitários

- `game-core`;
- regras de avaliação;
- schemas;
- seleção de perguntas;
- recompensas;
- progressão.

#### Integração

- React ↔ game-core;
- Phaser ↔ game-core;
- API ↔ banco;
- IA ↔ motor determinístico;
- sandbox dos desafios.

#### End-to-end

- criação de perfil;
- entrada de JD;
- início da run;
- batalha;
- pergunta;
- loja;
- chefe;
- relatório.

#### Visual

- snapshots de UI;
- previews dos sprites;
- validação de HUD em 960x540.

### 162.9 CI/CD

Em todo pull request:

- lint;
- typecheck;
- testes afetados;
- validação de schemas;
- validação de conteúdo;
- validação de assets;
- build seletivo pelo Turborepo.

Ambientes:

- local;
- preview por pull request;
- staging;
- produção ou demo final.

### 162.10 Git

Estratégia recomendada:

- `main` protegida;
- branches curtas por tarefa;
- pull request obrigatório;
- squash merge;
- commits convencionais;
- issue do Linear vinculada ao branch e ao PR;
- nenhuma alteração direta em asset aprovado sem nova versão.

Padrão de branch:

```text
feat/MQ-123-battle-timer
fix/MQ-201-card-placement
art/MQ-305-hero-walk
docs/MQ-044-carta-magna
```

### 162.11 Ownership

Cada área precisa de responsáveis principais:

- produto;
- design;
- React;
- Phaser;
- backend;
- IA e conteúdo;
- arte;
- QA.

Pode haver colaboração cruzada, mas cada issue possui um dono principal.

### 162.12 Segurança

- segredos apenas em variáveis de ambiente;
- nenhuma chave no repositório;
- código dos desafios executado em sandbox;
- IA sem acesso irrestrito ao banco;
- dados profissionais minimizados;
- logs sem conteúdo sensível desnecessário;
- permissões do Codex limitadas ao workspace;
- confirmação para instalações, deleções e ações externas.

### 162.13 Linear

O Linear será criado a partir da Carta Magna.

A primeira missão do Codex continua sendo:

1. ler o contexto;
2. propor estrutura;
3. aguardar aprovação;
4. criar projects, milestones, labels e issues;
5. separar vertical slice e MVP;
6. registrar dependências e critérios de aceite;
7. não começar implementação automaticamente.

### 162.14 O que fica aberto para implementação

Não precisa ser debatido agora:

- framework exato da API;
- ORM específico;
- provedor de deploy;
- biblioteca de estado do React;
- biblioteca de testes visual;
- serviço de armazenamento;
- formato final de observabilidade.

Essas escolhas devem considerar experiência da equipe, prazo e protótipo.

---

## 163. Próximos blocos macro

Após aprovação deste pacote:

### Bloco A — Vertical slice

- escopo;
- fluxo;
- critérios de aceite;
- Definition of Done;
- linha de corte.

### Bloco B — Design

- referências;
- protótipos;
- Design Book;
- componentes;
- telas prioritárias.

### Bloco C — Contratos executáveis

- assets;
- schemas;
- nomes;
- paleta;
- versionamento;
- `AGENTS.md`;
- prompts das 10 levas.

### Bloco D — Carta Magna e operação

- documento final;
- resumo executivo;
- pacote do Codex;
- primeira instrução;
- organização do Linear.

---

## 164. Correção de direção visual após os primeiros protótipos

Os primeiros protótipos de tela servem apenas como exploração de composição e não estão aprovados como direção final.

Problemas identificados:

- excesso de detalhamento visual;
- pixels pequenos demais;
- aparência próxima demais de RPG medieval tradicional;
- cenários pouco conectados ao conceito de oficinas, laboratórios, arquivos e infraestrutura técnica;
- UI excessivamente ornamental;
- ambientação fantástica dominando a identidade de produto;
- distância entre a estética dos cenários aprovados e a linguagem dos protótipos.

### 164.1 Regras provisórias aprovadas

A nova rodada de design parte destas premissas:

- toda a experiência visual usa pixel art;
- pixels maiores e leitura mais simples;
- menos ruído, ornamento e microdetalhe;
- formas e silhuetas mais fortes;
- fantasia técnica em vez de medievalismo genérico;
- cenários inspirados em oficinas, laboratórios, arquivos, salas de servidores, centrais de controle e ambientes de produção;
- elementos de RPG aparecem como metáfora, não como tema dominante;
- UI precisa parecer parte de um sistema técnico gamificado;
- materiais, props e arquitetura devem comunicar função;
- React e Phaser compartilham a mesma linguagem visual;
- nenhuma tela é aprovada apenas por parecer “bonita”; ela precisa reforçar a proposta do Merge Quest.

### 164.2 Status dos protótipos gerados

Os protótipos existentes ficam classificados como:

```text
EXPLORAÇÃO DE LAYOUT — NÃO APROVADO
```

Podem ser usados para discutir:

- hierarquia;
- posição dos painéis;
- densidade de informação;
- organização do HUD;
- fluxo visual.

Não devem ser usados como referência final para:

- nível de detalhe;
- tamanho dos pixels;
- ornamentação;
- arquitetura;
- ambientação;
- figurino;
- materiais;
- acabamento.

### 164.3 Processo de descoberta de design

Antes de gerar novos protótipos, o projeto passará por rodadas curtas de Q&A para definir:

1. proporção entre fantasia e tecnologia;
2. nível de detalhe;
3. tamanho aparente dos pixels;
4. materiais predominantes;
5. arquitetura de oficinas, laboratórios e arquivos;
6. linguagem das interfaces;
7. silhueta dos personagens;
8. aparência das cartas;
9. intensidade de cor e iluminação;
10. diferença visual entre exploração, batalha e telas React;
11. referências positivas;
12. referências que devem ser evitadas.

As respostas serão registradas no documento antes de qualquer nova geração visual.

---

## 165. Objetivo da próxima etapa

Construir uma direção visual suficientemente precisa para orientar:

- protótipos de tela;
- Design Book;
- cinco assets de referência;
- pipeline Codex + Aseprite;
- Carta Magna;
- apresentação para a equipe.

---

## 166. Direção visual — rodada 1 aprovada

### 166.1 Proporção entre tecnologia e fantasia

Decisão aprovada:

```text
75% ambiente técnico
25% fantasia
```

A leitura principal dos espaços deve ser técnica e funcional.

Ambientes-base:

- oficinas;
- laboratórios;
- arquivos;
- centrais de controle;
- depósitos;
- salas de servidores;
- estações de teste;
- áreas de manutenção;
- zonas de processamento.

A fantasia entra como camada de transformação:

- cristais energéticos;
- branches luminosos;
- anomalias;
- corrupção;
- criaturas;
- artefatos;
- efeitos impossíveis;
- sistemas que ganharam comportamento próprio.

Regra de interpretação:

> O Merge Quest não é um castelo com computadores. É uma infraestrutura técnica fantástica que se tornou viva, instável e hostil.

### 166.2 Densidade da pixel art

Decisão aprovada:

```text
pixel art intermediária
base visual próxima de 480x270
ampliada para 960x540
```

Consequências:

- pixels claramente visíveis;
- leitura forte em tamanho real;
- detalhes controlados;
- personagens e props legíveis;
- UI compatível com cartas, HUD e perguntas;
- sem microdetalhamento de ilustração;
- sem aparência de pintura digital pixelizada;
- escala preferencial inteira de 2x.

### 166.3 Regras provisórias de produção

- personagens continuam usando canvas técnico de 48x48;
- o cenário deve trabalhar com tiles e formas de leitura ampla;
- detalhes pequenos precisam justificar função;
- texturas repetitivas não podem competir com HUD;
- silhueta tem prioridade sobre ornamentação;
- fundos devem possuir áreas de descanso visual;
- telas React também devem respeitar a densidade intermediária;
- elementos grandes podem usar pixel art modular, sem depender de ilustração de alta resolução.

### 166.4 Consequência para os protótipos anteriores

Os protótipos anteriores falham principalmente em:

- proporção excessiva de fantasia medieval;
- excesso de ornamentos;
- pixels aparentes pequenos;
- texturas e fundos densos demais;
- pouca presença de oficina, laboratório e infraestrutura.

Eles continuam úteis apenas para estudar posição de componentes.

---

## 167. Direção visual — rodada 2 aprovada

### 167.1 Materiais por arquitetura

Decisão aprovada:

```text
mistura controlada por arquitetura
```

#### Laboratório/Oficina

Materiais dominantes:

- metal pintado;
- aço escuro;
- vidro;
- cabos;
- painéis;
- tubos;
- bancadas;
- máquinas;
- caixas modulares;
- etiquetas técnicas;
- superfícies de manutenção.

Leitura desejada:

- ambiente funcional;
- peças acessíveis;
- manutenção constante;
- energia circulando;
- sistemas expostos;
- espaço de produção e teste.

#### Fortaleza/Arquivo

Materiais dominantes:

- madeira técnica;
- pedra tratada;
- ferro;
- latão;
- estantes;
- trilhos;
- cofres;
- gavetas;
- arquivos;
- mecanismos;
- selos;
- etiquetas e registros.

Leitura desejada:

- armazenamento;
- organização;
- controle;
- acesso restrito;
- memória institucional;
- sistemas antigos ainda em funcionamento.

### 167.2 Regra contra medievalismo genérico

Elementos tradicionais de fantasia só entram quando reinterpretados tecnicamente.

Exemplos:

- runa → diagrama de fluxo;
- grimório → registro técnico ou log;
- altar → estação de processamento;
- cofre → sistema de acesso;
- torre → infraestrutura vertical;
- cristal → núcleo energético ou dado condensado;
- corrente → dependência ou bloqueio;
- selo → autenticação, permissão ou estado do sistema.

Nenhum ambiente deve parecer apenas uma dungeon medieval decorada com computadores.

### 167.3 Linguagem da UI

Decisão aprovada:

```text
sistema técnico gamificado
+
HUD de jogo
```

Características:

- painéis modulares;
- bordas simples;
- grids;
- abas;
- barras grandes;
- cards fortes;
- números legíveis;
- poucos ornamentos;
- ícones de domínio;
- símbolos de merge;
- estados claros;
- feedback visual rápido;
- pixel art intermediária;
- textos longos em tipografia limpa.

### 167.4 Diferença entre interface e dashboard corporativo

A UI não deve parecer:

- painel administrativo comum;
- software empresarial genérico;
- dashboard cheio de gráficos;
- formulário cinza sem identidade;
- HUD medieval ornamentada.

Ela deve parecer:

> uma estação técnica jogável, com leitura rápida, módulos claros e energia visual de um game.

### 167.5 Consequência para React e Phaser

React e Phaser compartilham:

- paleta;
- ícones;
- tokens;
- bordas;
- estados;
- tipografia;
- linguagem de feedback.

Diferenças:

- Phaser prioriza mundo, ação e impacto;
- React prioriza leitura, comparação e decisão;
- ambos devem parecer partes do mesmo sistema.

---

## 168. Direção visual — rodada 3 aprovada

### 168.1 Cor e iluminação por estado

Decisão aprovada:

```text
iluminação variável por estado
+
ambiente funcional como base
```

#### Estado estável

- iluminação clara o bastante para compreender materiais e função;
- equipamentos, bancadas, arquivos e fluxos visíveis;
- contraste moderado;
- cor de domínio em pontos focais;
- sensação de sistema operando normalmente.

#### Estado instável

- luz irregular;
- pequenas falhas;
- painéis piscando lentamente;
- áreas com contraste maior;
- sombras coloridas mais evidentes;
- sinais de erro e corrupção em pontos específicos.

#### Estado crítico

- áreas parcialmente escurecidas;
- alertas visuais intensos;
- corrupção ocupando estruturas;
- cabos, vazamentos, rachaduras ou anomalias;
- vermelho, roxo ou cor de domínio usados com maior força;
- leitura do espaço preservada mesmo em emergência.

#### Estado purificado

- iluminação limpa;
- menos ruído;
- caminhos e equipamentos reorganizados;
- energia estabilizada;
- materiais mais visíveis;
- sensação de sistema recuperado.

### 168.2 Regra de cor

A paleta não usa neon constante.

Cores saturadas aparecem principalmente em:

- alertas;
- energia;
- domínio dominante;
- corrupção;
- efeitos de combate;
- interação;
- recompensas;
- estados especiais.

Materiais-base mantêm cores mais funcionais e controladas.

### 168.3 Personagens humanoides

Decisão aprovada:

```text
trabalhadores de uma infraestrutura fantástica
```

Aliados, herói, Lojista, Recrutador e comandantes humanoides usam:

- roupas de oficina;
- uniformes;
- coletes;
- equipamentos de proteção;
- cintos de ferramenta;
- módulos técnicos;
- crachás, selos ou emblemas;
- acessórios associados aos domínios;
- silhuetas simples e reconhecíveis.

Ferramentas reinterpretadas como recursos de combate:

- scanner;
- chave técnica;
- martelo de manutenção;
- escudo de validação;
- dispositivo de controle;
- módulo de sinal;
- projetor;
- bastão de orquestração;
- ferramenta de diagnóstico.

### 168.4 Criaturas, constructos e anomalias

Decisão aprovada:

```text
formas abstratas e simbólicas
```

Esses inimigos podem ser formados por:

- arquivos;
- cabos;
- dados;
- módulos;
- cofres;
- peças incompatíveis;
- máquinas;
- bugs;
- ruído;
- estados quebrados;
- estruturas duplicadas.

Eles não precisam parecer animais ou monstros medievais convencionais.

### 168.5 Regra contra o arquétipo medieval genérico

Evitar como padrão:

- cavaleiro de armadura completa;
- mago de cajado;
- arqueiro de capa;
- monstro de dungeon sem relação técnica;
- espada comum;
- escudo heráldico;
- couro e metal usados apenas por convenção de RPG.

Quando um elemento tradicional aparecer, deve ser reinterpretado pela função técnica.

### 168.6 Prioridade de leitura

Em personagens 48x48:

1. silhueta;
2. função;
3. domínio;
4. ferramenta;
5. personalidade;
6. detalhe.

Detalhe nunca pode comprometer os cinco pontos anteriores.

---

## 169. Direção visual — rodada 4 aprovada

### 169.1 Cartas como módulos técnicos jogáveis

Decisão aprovada:

```text
formato de card game
+
estrutura visual de módulo técnico
```

As cartas mantêm:

- formato vertical;
- arte pixel art;
- nome forte;
- custo destacado;
- ataque e vida legíveis;
- palavra-chave;
- domínio;
- selo de treinamento;
- qualidade.

A linguagem visual evita molduras medievais ornamentadas.

Elementos desejados:

- bordas retas;
- divisões modulares;
- etiquetas técnicas;
- pequenos indicadores;
- encaixes;
- marcações de sistema;
- símbolos de merge;
- cor de domínio aplicada com controle;
- poucos efeitos decorativos.

#### Hierarquia da carta

1. custo;
2. arte e silhueta;
3. nome;
4. ataque e vida;
5. palavra-chave;
6. domínio;
7. estado de treinamento;
8. qualidade.

A carta deve ser compreendida rapidamente na mão, sem precisar abrir o painel detalhado.

#### Qualidade

A qualidade não depende apenas de cor.

- Comum: estrutura-base;
- Incomum: pequeno reforço de moldura e selo;
- Rara: moldura estrutural reforçada e efeito discreto;
- Especial: assimetria controlada, emblema próprio e efeito adicional.

### 169.2 Composição funcional das salas

Decisão aprovada:

```text
cenário funcional
+
áreas claras de circulação e descanso visual
```

As salas usam:

- poucos props grandes;
- objetos concentrados nas bordas;
- centro livre para movimentação;
- corredores claros;
- máquinas, estantes ou bancadas que expliquem a função;
- pontos focais bem definidos;
- espaços vazios intencionais;
- detalhes agrupados, não espalhados.

#### Regra de densidade

Cada sala deve possuir:

- 1 elemento focal;
- 2 a 4 grupos de props secundários;
- área central legível;
- rota de circulação óbvia;
- no máximo um efeito visual dominante;
- contraste suficiente para destacar herói, comandante e interação.

#### Distribuição recomendada

```text
bordas: função, props e narrativa
centro: movimento e conflito
ponto focal: objetivo ou interação
```

### 169.3 Consequência para os templates de sala

Os 18 templates continuam válidos, mas os slots procedurais devem respeitar:

- áreas proibidas no centro;
- distância mínima das portas;
- limite de props por grupo;
- ausência de obstáculos em rotas obrigatórias;
- preservação de leitura do comandante;
- preservação da área de interação;
- nenhuma decoração deve competir com HUD ou personagem.

---

## 170. Direção visual — rodada 5 aprovada

### 170.1 Arena derivada da sala

Decisão aprovada:

```text
a batalha usa uma arena derivada da sala de exploração
```

A arena herda:

- arquitetura;
- materiais;
- domínio dominante;
- domínio secundário;
- paleta;
- iluminação;
- nível de corrupção;
- props reconhecíveis;
- identidade do comandante.

Mas simplifica:

- fundo;
- quantidade de props;
- texturas;
- circulação;
- elementos decorativos;
- contraste.

Objetivo:

> manter continuidade entre exploração e combate sem prejudicar a leitura do grid, das unidades, das cartas e das intenções.

#### Regra de transformação

Exploração:

- ambiente funcional completo;
- circulação;
- portas;
- props;
- interações;
- comandante presente no espaço.

Batalha:

- mesma identidade visual;
- composição mais aberta;
- fundo com menos ruído;
- grids priorizados;
- bases do herói e do comandante integradas ao cenário;
- elementos focais preservados;
- props periféricos reduzidos.

#### O que não fazer

- não usar o cenário literal inteiro atrás do grid;
- não trocar para fundo abstrato sem relação com a sala;
- não usar plataformas genéricas flutuantes;
- não transformar toda batalha em arena medieval;
- não esconder o domínio técnico do encontro.

### 170.2 Forma predominante da UI

Decisão aprovada:

```text
base modular reta
+
cortes técnicos
```

Características:

- retângulos;
- pequenos chanfros;
- encaixes;
- recortes;
- linhas inspiradas em branches;
- junções de merge;
- módulos conectáveis;
- bordas simples;
- poucos ornamentos;
- leitura em pixel art intermediária.

#### Linguagem formal

A UI evita:

- molduras góticas;
- pergaminhos;
- cantos excessivamente arredondados;
- cards flutuantes genéricos;
- gradientes corporativos;
- excesso de brilho;
- ornamentação medieval.

A UI busca:

- estrutura;
- função;
- conexão;
- modularidade;
- estado;
- fluxo;
- leitura rápida;
- identidade técnica gamificada.

### 170.3 Uso dos cortes técnicos

Os cortes e encaixes devem comunicar função.

Exemplos:

- corte superior indica cabeçalho;
- encaixe lateral indica conexão;
- bifurcação indica escolha;
- convergência indica merge;
- módulo acoplado indica efeito adicional;
- peça destacada indica estado temporário;
- ruptura indica erro ou corrupção.

Eles não devem ser usados apenas como decoração.

### 170.4 Consequência para o Design Book

O Design Book deverá incluir:

- grid-base dos painéis;
- tipos de chanfro;
- conectores;
- encaixes;
- bordas permitidas;
- tamanhos;
- exemplos de merge;
- exemplos de erro;
- aplicação em cartas;
- aplicação em HUD;
- aplicação em telas React;
- aplicação em elementos Phaser.

---

## 171. Direção visual — rodada 6 aprovada

### 171.1 Aplicação das cores dos domínios

Decisão aprovada:

```text
arquitetura mantém paleta-base
+
domínio entra como destaque em 20–30% da composição
```

A arquitetura define:

- materiais;
- cor principal das superfícies;
- iluminação geral;
- contraste;
- temperatura visual;
- sensação de uso e função.

O domínio aparece em:

- luzes;
- telas;
- etiquetas;
- cabos;
- emblemas;
- sinalização;
- partículas;
- props focais;
- acessórios de personagens;
- efeitos de corrupção;
- elementos de interação.

#### Regra de preservação dos materiais

A cor de domínio não deve transformar toda a sala em um filtro.

Exemplos:

- Backend pode usar laranja queimado em fluxos, telas e forjas, sem tornar todo o laboratório laranja;
- QA pode usar âmbar e violeta em scanners, checklists e alertas, preservando metal, madeira e pedra;
- Banco de Dados pode usar dourado envelhecido em chaves, trilhos e registros, sem recolorir todo o arquivo;
- Cyber pode usar vermelho controlado em selos, bloqueios e alertas, sem dominar o cenário inteiro.

#### Objetivo

Permitir que o jogador reconheça o domínio sem perder:

- função do espaço;
- identidade da arquitetura;
- leitura dos materiais;
- clareza do gameplay;
- variedade entre salas.

### 171.2 Telas externas ao mundo jogável

Decisão aprovada:

```text
estação técnica pixelada
+
interface limpa e modular
```

Proporção visual recomendada:

```text
70% interface
30% cenário funcional simplificado
```

Aplica-se a:

- perfil profissional;
- entrada da vaga;
- análise;
- briefing;
- relatório;
- configurações;
- gerenciamento de deck;
- replay pedagógico;
- telas de preparação.

#### Cenários de apoio permitidos

- terminal;
- bancada;
- arquivo;
- central de controle;
- estação de análise;
- sala de planejamento;
- oficina;
- laboratório;
- mural de requisitos;
- mesa de revisão.

#### Regras

- poucos props grandes;
- animações pequenas e não intrusivas;
- personagem ou ilustração apenas quando ajuda a narrativa;
- formulários e textos continuam sendo o foco;
- toda moldura, ícone e indicador respeita a linguagem pixel art;
- textos longos usam fonte sans limpa;
- nenhuma tela deve parecer um dashboard corporativo genérico;
- nenhuma tela deve parecer uma dungeon ornamentada com formulário por cima.

### 171.3 Consequência para os protótipos

Os novos protótipos devem:

- reduzir cenário decorativo;
- aumentar áreas de descanso visual;
- usar fundos funcionais;
- preservar legibilidade de formulários;
- evitar ilustrações gigantes sem função;
- mostrar claramente a arquitetura técnica do mundo;
- manter a mesma linguagem de UI usada no Phaser.

### 171.4 Regra de consistência entre telas

A interface externa e o jogo compartilham:

- paleta;
- ícones;
- módulos;
- cortes técnicos;
- tipografia;
- estados;
- linguagem de feedback;
- símbolos de merge;
- badges;
- cronômetros;
- componentes de evidência e recompensa.

A diferença está apenas na prioridade:

- telas externas priorizam leitura e decisão;
- exploração prioriza espaço e interação;
- batalha prioriza grid, cartas e estado;
- relatório prioriza síntese e evidência.

---

## 172. Direção visual — rodada final aprovada

### 172.1 Sistema de referências artísticas

Decisão aprovada:

```text
1 referência central
+
referências especializadas por componente
```

A referência central define:

- sensação geral;
- densidade visual;
- escala dos pixels;
- personalidade;
- equilíbrio entre técnico e fantástico;
- nível de simplicidade;
- atmosfera.

As referências especializadas podem cobrir:

- cenários;
- materiais;
- arquitetura;
- personagens;
- unidades;
- cartas;
- HUD;
- formulários;
- iluminação;
- animações;
- efeitos;
- composição de telas.

Cada referência deverá ser registrada com:

- nome;
- origem;
- componente afetado;
- princípio aproveitado;
- intensidade da influência;
- elementos que não devem ser copiados;
- compatibilidade com a direção visual;
- observações de produção.

### 172.2 Regra de uso das referências

Nenhuma referência será usada como modelo completo do jogo.

O objetivo é combinar princípios específicos sem transformar o Merge Quest em cópia de outro projeto.

Exemplo:

```text
Referência central
→ escala, simplicidade e atmosfera

Referência de cenário
→ função dos ambientes e distribuição de props

Referência de UI
→ modularidade, hierarquia e leitura

Referência de personagem
→ proporção, silhueta e animação

Referência de cartas
→ organização da informação
```

### 172.3 Critérios de aprovação de protótipos

Decisão aprovada:

```text
aprovação visual
+
aprovação funcional
+
aprovação técnica
```

Cada tela será avaliada em cinco critérios:

| Critério | Pergunta de validação |
|---|---|
| Identidade | Parece Merge Quest sem depender do logo? |
| Função | A ação principal é compreendida rapidamente? |
| Legibilidade | Textos, personagens, cartas e estados estão claros? |
| Consistência | Respeita pixel art, materiais, UI e proporção técnico/fantasia? |
| Produção | Pode ser implementada no prazo e reaproveita componentes? |

### 172.4 Regras de aprovação

Um protótipo só é aprovado quando:

- não falha em nenhum critério;
- identidade, função e legibilidade estão claras;
- respeita 75% técnico e 25% fantasia;
- usa pixel art intermediária;
- evita medievalismo genérico;
- usa cenários funcionais;
- preserva áreas de descanso visual;
- utiliza UI modular com cortes técnicos;
- é viável para React e Phaser;
- possui correções registradas;
- foi explicitamente aprovado.

Protótipo visualmente bonito, mas inviável, não é aprovado.

Protótipo funcional, mas genérico, também não é aprovado.

### 172.5 Telas obrigatórias antes do PDF final

1. tela de título;
2. perfil e vaga;
3. briefing e exploração;
4. batalha;
5. pergunta de 30 segundos;
6. loja e desafio de 10 minutos;
7. recompensa;
8. chefe;
9. nocaute e replay;
10. relatório final.

Somente versões aprovadas entram:

- no Design Book;
- na Carta Magna;
- no PDF de apresentação;
- no pacote do Codex;
- nas instruções de implementação.

### 172.6 Encerramento do Q&A visual

O Q&A de direção visual está concluído.

Próximas etapas:

1. receber e classificar referências artísticas;
2. definir a referência central;
3. montar painéis por componente;
4. produzir wireframes;
5. produzir protótipos revisados;
6. revisar com o usuário;
7. aprovar as dez telas;
8. montar o Design Book;
9. inserir os protótipos aprovados no PDF final.

---

## 173. Referência central — direção artesanal + técnica aprovada

Decisão aprovada:

```text
personagens e cenários artesanais
+
UI, cartas e módulos técnicos e limpos
```

Essa combinação passa a ser a referência central de execução visual do Merge Quest.

### 173.1 Personagens e cenários

Devem parecer:

- desenhados manualmente no Aseprite;
- construídos por clusters de pixels;
- simples, legíveis e intencionais;
- com silhuetas fortes;
- com poucos detalhes realmente úteis;
- com pequenas imperfeições controladas;
- com repetição modular consciente;
- com materiais reconhecíveis;
- com áreas de descanso visual.

Evitar:

- pintura digital reduzida;
- microtexturas aleatórias;
- excesso de brilho;
- excesso de acessórios;
- formas inconsistentes;
- ruído visual distribuído por toda a cena;
- aparência genérica de RPG cyberpunk.

### 173.2 UI, cartas e módulos

Devem parecer:

- precisos;
- modulares;
- limpos;
- reaproveitáveis;
- organizados por grids;
- construídos com módulos retos;
- com cortes técnicos;
- com hierarquia clara;
- com estados previsíveis;
- com poucos ornamentos.

A precisão da UI não deve contaminar os personagens e cenários com rigidez excessiva.

### 173.3 Regras anti-“cara de IA”

- resolução lógica rígida de 480x270;
- escala inteira de 2x para 960x540;
- sem filtros de suavização;
- paleta limitada e compartilhada;
- poucos tons por material;
- no máximo 1 ou 2 highlights por objeto;
- texturas usadas apenas quando comunicam material ou estado;
- sem brilho aplicado em quase tudo;
- poucos props grandes;
- personagens com ferramentas visualmente fortes;
- módulos de UI reutilizados entre telas;
- iluminação complexa preferencialmente feita no Phaser;
- textos reais renderizados no React;
- nada de “texto falso” embutido em geração de imagem;
- nenhuma tela deve conter detalhe que não possa ser reproduzido no pipeline real.

### 173.4 Critério de autenticidade visual

Um protótipo ou asset só é aprovado quando parece plausível que tenha sido:

1. desenhado em pixel art real;
2. dividido em layers e tiles;
3. animado em poucos frames;
4. exportado pelo Aseprite;
5. integrado no Phaser sem depender de pintura complexa.

### 173.5 Uso do moodboard anterior

O moodboard anterior fica classificado como:

```text
DIREÇÃO CONCEITUAL APROVADA PARCIALMENTE
ACABAMENTO VISUAL NÃO APROVADO
```

Aproveitar:

- laboratórios;
- arquivos técnicos;
- 75% técnico e 25% fantasia;
- cores de domínio como destaque;
- trabalhadores da infraestrutura;
- criaturas formadas por sistemas;
- cartas como módulos;
- UI com cortes técnicos;
- centro das salas mais limpo.

Descartar:

- excesso de microdetalhes;
- acabamento pintado;
- brilho excessivo;
- densidade alta;
- personagens genéricos;
- ornamentação sem função;
- texto gerado dentro das imagens;
- inconsistência de escala dos pixels.

### 173.6 Consequência para os próximos protótipos

Os próximos protótipos devem ser:

- mais simples;
- mais modulares;
- com pixels maiores;
- com menos objetos;
- com menos cores;
- com personagens mais reconhecíveis;
- com UI mais organizada;
- com tecnologia funcional mais presente;
- com fantasia restrita aos pontos de energia, corrupção, domínio e anomalia.

---

## 174. Referências artísticas aprovadas

Referências indicadas:

- Brotato;
- Enter the Gungeon;
- Dead Cells;
- 9 Kings;
- Terraria;
- Undertale;
- The Binding of Isaac;
- Vampire Survivors.

Essas referências não serão copiadas como estilos completos. Cada uma fornece princípios específicos.

### 174.1 Referência central provisória — Brotato

Brotato passa a funcionar como principal referência de execução para:

- pixels grandes;
- leitura imediata;
- silhuetas simples;
- personagens com poucos detalhes;
- equipamentos visualmente exagerados;
- HUD clara;
- alto reaproveitamento;
- animações econômicas;
- produção viável para equipe pequena.

Não aproveitar:

- fundo excessivamente vazio;
- identidade cômica obrigatória;
- estrutura de arena única;
- excesso de inimigos simultâneos.

### 174.2 Enter the Gungeon — salas, circulação e combate top-down

Aproveitar:

- leitura top-down;
- composição de salas;
- áreas centrais livres;
- props nas bordas;
- circulação clara;
- portas e transições;
- arena derivada do ambiente;
- impacto visual de ataques.

Não aproveitar:

- medievalismo;
- linguagem de armas como tema central;
- excesso de detalhe em props;
- ornamentação de dungeon tradicional.

### 174.3 Dead Cells — luz, cor e impacto

Aproveitar:

- iluminação por estado;
- contraste entre materiais e energia;
- cores fortes em pontos focais;
- feedback de dano;
- partículas e impacto;
- fundos com profundidade sem prejudicar leitura.

Não aproveitar:

- densidade de pixels muito alta;
- pintura detalhada;
- animações complexas demais;
- escala lateral como estrutura do jogo.

### 174.4 9 Kings — cartas e legibilidade sistêmica

Aproveitar:

- leitura rápida de cartas;
- informação essencial sempre visível;
- separação clara entre unidades e sistema;
- progressão visual;
- iconografia forte;
- sensação de módulo jogável.

Não aproveitar:

- estrutura de campo que não corresponda ao grid 3x3;
- excesso de dependência em texto pequeno;
- cópia direta de molduras ou composição.

### 174.5 Terraria — modularidade e materiais

Aproveitar:

- construção modular;
- leitura de materiais;
- tiles reaproveitáveis;
- oficinas e estações;
- props funcionais;
- variedade sem perder consistência;
- uso de pequenos conjuntos para formar ambientes ricos.

Não aproveitar:

- excesso de objetos por tela;
- densidade de inventário;
- escala lateral;
- liberdade de construção como requisito do MVP.

### 174.6 Undertale — restrição e clareza

Aproveitar:

- economia visual;
- poucos elementos fortes;
- interfaces legíveis;
- personagens simples e memoráveis;
- contraste alto;
- uso intencional do vazio;
- feedback direto.

Não aproveitar:

- preto e branco como regra geral;
- minimalismo extremo em todos os cenários;
- estrutura narrativa ou combate específica.

### 174.7 The Binding of Isaac — estrutura de salas

Aproveitar:

- salas fixas;
- leitura imediata da função;
- centro aberto;
- variações sobre layouts consistentes;
- transições rápidas;
- ícones claros;
- distribuição de encontros e recompensas.

Não aproveitar:

- estética grotesca;
- paleta suja;
- simbolismo corporal;
- repetição visual sem função técnica.

### 174.8 Vampire Survivors — feedback e progressão

Aproveitar:

- feedback rápido;
- leitura de melhorias;
- ícones fortes;
- recompensas claras;
- progressão visível;
- efeitos simples e eficientes;
- produção baseada em reaproveitamento.

Não aproveitar:

- poluição extrema de inimigos e partículas;
- passividade do combate;
- excesso de números simultâneos;
- caos visual como identidade.

### 174.9 Síntese da direção

```text
Brotato
→ escala, simplicidade e produção viável

Enter the Gungeon + Binding of Isaac
→ salas, circulação e composição top-down

Dead Cells
→ luz, cor e impacto

9 Kings
→ cartas, módulos e leitura do sistema

Terraria
→ materiais, tiles e oficinas

Undertale
→ restrição, vazio e clareza

Vampire Survivors
→ feedback, ícones e progressão
```

### 174.10 Regra de combinação

O Merge Quest deve parecer:

- mais técnico que Enter the Gungeon;
- menos detalhado que Dead Cells;
- mais ambiental que Brotato;
- mais organizado que Vampire Survivors;
- menos medieval que Terraria;
- mais modular que Undertale;
- mais integrado ao cenário que 9 Kings;
- menos grotesco que The Binding of Isaac.

### 174.11 Critério de coerência

Uma nova referência só entra se:

- reforçar um componente ainda mal resolvido;
- não contradizer 75% técnico / 25% fantasia;
- respeitar pixel art intermediária;
- for reproduzível no Aseprite;
- não exigir complexidade incompatível com o vertical slice;
- tiver claro o que aproveitar e o que evitar.

---

## 175. Formato dos próximos protótipos visuais — decisão registrada

Os próximos protótipos visuais **não devem ser gerados como uma única cena finalizada**.

O formato aprovado será:

```text
concept sheet
+
spritesheet de exploração visual
```

### 175.1 Objetivo

Permitir avaliar separadamente:

- personagens;
- silhuetas;
- poses;
- ferramentas;
- props;
- tiles;
- módulos de cenário;
- cartas;
- HUD;
- paleta;
- estados de corrupção;
- variações de domínio.

O material deve servir como referência de produção para:

- Design Book;
- Aseprite;
- Codex;
- Phaser;
- revisão com a equipe.

### 175.2 Estrutura recomendada da prancha

Cada prancha poderá reunir:

1. título do conjunto;
2. paleta reduzida;
3. personagem em tamanho real;
4. ampliações 4x ou 8x;
5. vistas ou direções;
6. poses principais;
7. ferramentas e acessórios;
8. props modulares;
9. tiles ou partes de cenário;
10. módulos de UI relacionados;
11. estados estável, instável, crítico e purificado;
12. observações curtas de produção.

### 175.3 Regras visuais

- pixel art real;
- clusters claros;
- paleta limitada;
- sem pintura digital reduzida;
- sem texto gerado dentro da imagem;
- sem excesso de partículas;
- fundo simples;
- organização por grade;
- escala consistente;
- nenhum elemento precisa parecer “arte final”;
- prioridade em clareza de forma e reutilização.

### 175.4 Tipos de prancha previstos

#### Personagens

- turnaround simplificado;
- idle;
- caminhada;
- ataque ou gesto;
- dano;
- derrota;
- ferramentas;
- variações de domínio;
- silhuetas alternativas.

#### Cenários

- tiles;
- paredes;
- portas;
- bancadas;
- máquinas;
- estantes;
- props;
- corrupção;
- iluminação;
- exemplo de sala montada.

#### Combate

- cartas;
- unidades;
- slots;
- grids;
- HUD;
- efeitos;
- intenção;
- cronômetros.

#### Telas React

- painéis;
- módulos;
- botões;
- badges;
- cronômetros;
- estados de formulário;
- exemplos de composição.

### 175.5 Status

Nenhuma nova imagem deve ser gerada antes de o usuário fornecer as instruções específicas de composição e conteúdo da primeira prancha.

---

## 176. Conteúdo obrigatório das pranchas e do Design Book

As futuras pranchas visuais e o Design Book não devem mostrar apenas sprites e telas.

Elas precisam incluir a identidade visual completa do Merge Quest.

### 176.1 Referências visuais

Cada prancha deve registrar:

- referência central;
- referências especializadas;
- componente influenciado;
- princípio aproveitado;
- aspectos que devem ser evitados;
- intensidade da influência;
- observações de produção.

Referências já aprovadas:

- Brotato;
- Enter the Gungeon;
- Dead Cells;
- 9 Kings;
- Terraria;
- Undertale;
- The Binding of Isaac;
- Vampire Survivors.

### 176.2 Paletas

Devem ser apresentados:

- paleta mestra;
- cores-base das duas arquiteturas;
- cores de domínio;
- sombras coloridas;
- cores de alerta;
- corrupção;
- purificação;
- estados da UI;
- raridades;
- Confiança;
- cronômetros;
- contraste para fundos claros e escuros.

A paleta deve ser mostrada com:

- nome;
- código hexadecimal;
- função;
- combinações permitidas;
- exemplos de aplicação;
- limites de uso.

### 176.3 Tipografia

O material deve incluir:

- fonte pixelada para títulos, selos e números;
- fonte bitmap para cronômetros e HUD;
- fonte sans limpa para textos longos e formulários;
- fonte monoespaçada para código;
- hierarquia tipográfica;
- tamanhos;
- pesos;
- espaçamento;
- exemplos de uso correto e incorreto.

Nenhum texto importante deve depender de texto gerado dentro de imagens conceituais.

### 176.4 Logo e sistema de marca

A identidade deve retomar a decisão original:

```text
branches separados
        ↓
convergência
        ↓
merge
```

Elementos obrigatórios:

- wordmark `MERGE QUEST` em pixel art;
- símbolo reduzido de duas branches convergindo;
- versão horizontal;
- versão compacta;
- versão monocromática;
- aplicação em fundo claro;
- aplicação em fundo escuro;
- favicon/ícone;
- badges `MERGED`, `CHANGES REQUESTED` e `DRAFT`;
- uso do símbolo em UI, cartas, transições e recompensas.

### 176.5 Princípio da marca

A logo deve comunicar:

- progresso;
- combinação;
- integração;
- resolução de conflitos;
- transformação de caminhos separados em um resultado único.

Evitar:

- brasões medievais;
- espadas;
- castelos;
- escudos heráldicos;
- runas genéricas;
- estética de guilda.

### 176.6 Estrutura ampliada da concept sheet

As futuras pranchas podem conter:

1. logo;
2. símbolo reduzido;
3. paleta;
4. tipografia;
5. referências;
6. personagem;
7. unidade;
8. ferramentas;
9. props;
10. tiles;
11. cartas;
12. HUD;
13. estados de sistema;
14. arquitetura;
15. corrupção;
16. exemplos de aplicação;
17. observações de produção.

### 176.7 Status

Nenhuma nova concept sheet, spritesheet, logo, tela ou PDF deve ser gerado antes da autorização explícita do usuário.

---

## 177. Ordem oficial de produção do protótipo e da Carta Magna

A Carta Magna em PDF **não será gerada antes da aprovação dos protótipos de tela**.

A ordem oficial passa a ser:

1. concluir referências visuais;
2. produzir concept sheets e spritesheets de direção;
3. gerar wireframes;
4. gerar protótipos visuais das telas prioritárias;
5. revisar os protótipos com o usuário;
6. corrigir e aprovar cada tela;
7. consolidar o Design Book;
8. limpar o documento mestre;
9. reunir requisitos, arquitetura, design e operação;
10. gerar a Carta Magna final em PDF;
11. apresentar o PDF à equipe;
12. preparar o pacote canônico para o Codex;
13. usar o Codex para estruturar o Linear;
14. iniciar implementação e produção de assets.

### 177.1 Regra de aprovação

Nenhum protótipo entra na Carta Magna enquanto estiver classificado como:

- exploração;
- rascunho;
- não aprovado;
- aguardando correções.

Somente versões com status `APROVADO` entram no PDF, no Design Book e no pacote do Codex.

---

## 178. Conteúdo obrigatório da Carta Magna em PDF

O PDF final deve ser um documento completo de apresentação, alinhamento e execução.

### 178.1 Visão do produto

- nome;
- propósito;
- problema;
- público;
- proposta de valor;
- diferenciais;
- visão da experiência;
- resumo executivo.

### 178.2 Levantamento de requisitos

#### Requisitos funcionais

- autenticação;
- entrada do perfil;
- entrada da descrição da vaga;
- análise de requisitos;
- geração do deck;
- criação da run;
- exploração;
- combate;
- perguntas;
- desafios da loja;
- recompensas;
- chefes;
- veredito;
- relatório;
- treinamento;
- evidências;
- telemetria;
- salvamento.

#### Requisitos não funcionais

- desempenho;
- segurança;
- acessibilidade;
- auditabilidade;
- responsividade;
- disponibilidade;
- manutenção;
- testabilidade;
- proteção de dados;
- observabilidade;
- compatibilidade de navegador.

### 178.3 Game design

- loop principal;
- exploração;
- composição dos andares;
- domínios;
- salas;
- comandantes;
- unidades;
- aliados;
- cartas;
- grid;
- mana;
- Confiança;
- perguntas;
- desafios;
- recompensas;
- elites;
- chefes;
- Recrutador;
- nocaute;
- replay;
- progressão;
- veredito.

### 178.4 Sistema de avaliação profissional

- relação perfil × vaga;
- competências;
- lacunas;
- evidências;
- treinamento;
- perguntas de batalha;
- desafios das lojas;
- pesos do veredito;
- limites da IA;
- motor determinístico;
- estados de evidência;
- relatório final.

### 178.5 Direção artística

- 75% técnico e 25% fantasia;
- pixel art intermediária;
- cenários artesanais;
- UI técnica e limpa;
- referências;
- paletas;
- tipografia;
- logo;
- branches convergindo;
- personagens;
- cenários;
- cartas;
- HUD;
- iluminação;
- corrupção;
- efeitos;
- regras anti-“cara de IA”.

### 178.6 Protótipos aprovados

Incluir as versões finais de:

1. tela de título;
2. perfil e vaga;
3. briefing;
4. exploração;
5. batalha;
6. pergunta de 30 segundos;
7. loja e desafio de 10 minutos;
8. recompensa;
9. chefe;
10. nocaute e replay;
11. relatório final.

Cada protótipo deve apresentar:

- objetivo;
- fluxo;
- componentes;
- estados;
- responsabilidade React/Phaser;
- critérios de aceite;
- observações de implementação.

### 178.7 Design Book

- identidade;
- paletas;
- tipografia;
- grid;
- spacing;
- componentes;
- cards;
- botões;
- painéis;
- tooltips;
- ícones;
- HUD;
- cronômetros;
- estados;
- acessibilidade;
- motion;
- exemplos corretos;
- exemplos incorretos.

### 178.8 Arquitetura do monorepo

- pnpm Workspaces;
- Turborepo;
- aplicações;
- pacotes;
- conteúdo;
- arte;
- documentação;
- tooling;
- infraestrutura;
- testes;
- responsabilidades;
- fronteiras;
- fluxo de dados;
- `game-core`;
- React;
- Phaser;
- API;
- IA;
- banco;
- segurança;
- CI/CD;
- Git;
- ownership.

### 178.9 Arquitetura de software

- diagramas;
- responsabilidades;
- comandos;
- eventos;
- snapshots;
- integração React ↔ game-core;
- integração Phaser ↔ game-core;
- integração API ↔ IA;
- persistência;
- avaliação;
- sandbox;
- telemetria.

### 178.10 Schemas e contratos

- cartas;
- perguntas;
- desafios;
- encontros;
- recompensas;
- competências;
- evidências;
- runs;
- assets;
- eventos;
- estados;
- versionamento;
- validações.

### 178.11 Vertical slice

- objetivo;
- fluxo;
- escopo;
- linha de corte;
- telas;
- personagens;
- conteúdo;
- perguntas;
- desafio;
- chefe;
- veredito;
- duração;
- critérios de aceite;
- Definition of Done.

### 178.12 Assets e produção

- inventário;
- P0-VS;
- P0;
- P1;
- P2;
- ordem de produção;
- 10 levas;
- spritesheets;
- concept sheets;
- Aseprite;
- Codex;
- exports;
- validações;
- licenças;
- versionamento.

### 178.13 Roadmap e equipe

- fases;
- milestones;
- dependências;
- riscos;
- responsabilidades;
- matriz de ownership;
- cronograma;
- linha de corte;
- critérios de prioridade.

### 178.14 Linear

- estrutura proposta;
- projects;
- milestones;
- labels;
- cycles;
- issues;
- sub-issues;
- dependências;
- critérios de aceite;
- primeira missão do Codex;
- revisão do backlog.

### 178.15 Fontes e anexos

- referências artísticas;
- documentos iniciais;
- briefing;
- handoff;
- decisões;
- fontes técnicas;
- licenças;
- glossário;
- anexos visuais.

---

## 179. Função da Carta Magna

A Carta Magna será:

- documento de apresentação para os parceiros;
- fonte oficial de requisitos;
- referência do time de design;
- referência da arquitetura;
- base do backlog;
- contexto do Codex;
- registro das decisões;
- guia de implementação;
- guia de produção visual;
- base para revisão e auditoria.

### 179.1 Regra de canonicidade

Depois de criada:

- a Carta Magna passa a ser a fonte principal;
- o histórico permanece separado;
- decisões novas atualizam primeiro os módulos canônicos;
- o PDF deve ser regenerado a partir desses módulos;
- não se mantém duas versões conflitantes manualmente.

---

## 180. Status atual

O projeto ainda está na fase de direção visual e preparação dos protótipos.

Portanto:

```text
NÃO GERAR O PDF AINDA
```

A geração da Carta Magna só começa depois da aprovação dos protótipos e do Design Book.

---

## 181. Modelo artístico estrito, porém criativo

A direção visual do Merge Quest deve seguir um sistema de criação com regras rígidas de consistência e espaços controlados de experimentação.

O objetivo não é produzir imagens “livres” nem repetir mecanicamente uma referência. O objetivo é permitir criatividade **dentro de um sistema visual canônico**.

### 181.1 Princípio central

```text
liberdade criativa dentro de limites claros
```

Todo asset deve obedecer aos padrões do projeto antes de explorar variações.

A criatividade pode aparecer em:

- silhueta;
- ferramenta;
- composição;
- combinação de módulos;
- uso de props;
- personalidade;
- pequenas assimetrias;
- soluções de animação;
- leitura de domínio;
- transformação entre estados.

A criatividade não pode romper:

- escala;
- densidade de pixels;
- paleta;
- iluminação;
- proporção técnico/fantasia;
- linguagem dos materiais;
- forma da UI;
- convenções de arquivo;
- legibilidade;
- escopo de produção.

---

## 182. Camadas de regras

### 182.1 Regras inegociáveis

Todo material visual deve respeitar:

- pixel art real;
- resolução lógica de 480x270;
- escala inteira de 2x para 960x540;
- personagens em canvas técnico de 48x48;
- sem antialiasing;
- sem suavização;
- clusters de pixels intencionais;
- paleta limitada;
- poucos tons por material;
- iluminação principal superior esquerda;
- sombras coloridas;
- silhuetas legíveis;
- 75% técnico e 25% fantasia;
- tecnologia funcional como leitura principal;
- fantasia como energia, corrupção, anomalia e transformação;
- UI modular com cortes técnicos;
- nenhum medievalismo genérico;
- nenhuma pintura digital reduzida;
- nenhum microdetalhe impossível de reproduzir no Aseprite;
- nenhum texto falso embutido em imagens;
- nenhum asset aprovado sobrescrito diretamente.

### 182.2 Regras de consistência

Todos os assets devem parecer parte do mesmo projeto por meio de:

- paleta compartilhada;
- escala aparente consistente;
- espessura de outline compatível;
- proporções de personagem compatíveis;
- materiais reutilizados;
- ícones coerentes;
- módulos de UI reaproveitados;
- símbolos de domínio padronizados;
- mesma lógica de corrupção;
- mesma lógica de iluminação;
- mesmos estados de sistema;
- mesmos badges e selos;
- mesmo princípio de branches convergindo.

### 182.3 Espaços de criatividade

O artista ou o Codex pode propor:

- até 3 silhuetas;
- até 3 variações de ferramenta;
- até 3 composições de props;
- até 3 soluções de cor dentro da paleta;
- até 3 soluções de animação;
- até 3 formas de representar um conceito técnico.

Toda proposta deve explicar:

- qual regra está seguindo;
- qual problema resolve;
- quais módulos reaproveita;
- qual impacto de produção possui;
- o que muda em relação às versões anteriores.

---

## 183. Modelo de aprovação por etapas

Nenhum asset deve ir diretamente de ideia para produção final.

### Etapa 1 — Intenção

Definir:

- função;
- domínio;
- estado;
- tamanho;
- contexto;
- prioridade;
- dependências;
- referências relevantes.

### Etapa 2 — Exploração

Produzir apenas:

- silhuetas;
- paleta;
- blocos de forma;
- variações simples;
- composição;
- testes em tamanho real.

Sem acabamento excessivo.

### Etapa 3 — Candidato

O candidato deve possuir:

- tamanho correto;
- paleta correta;
- layers;
- tags;
- pivô;
- nome;
- preview 1x;
- preview 8x;
- comparação;
- justificativa.

### Etapa 4 — Validação

Avaliar:

- identidade;
- função;
- legibilidade;
- consistência;
- viabilidade;
- integração;
- reutilização;
- custo de produção.

### Etapa 5 — Aprovado

Somente após aprovação explícita:

- promover para `approved`;
- exportar para Phaser;
- registrar no Design Book;
- registrar na Carta Magna;
- atualizar inventário;
- criar tarefa de integração.

---

## 184. Matriz de avaliação visual

Cada asset recebe nota binária em oito critérios.

| Critério | Pergunta |
|---|---|
| Identidade | Parece Merge Quest sem depender do logo? |
| Função | A função técnica está clara? |
| Legibilidade | É compreensível em tamanho real? |
| Pixel art | Parece produzido no Aseprite? |
| Consistência | Respeita escala, paleta, luz e materiais? |
| Reutilização | Usa módulos e bases existentes? |
| Produção | Cabe no prazo e no escopo? |
| Integração | Pode ser usado no Phaser ou React sem retrabalho estrutural? |

Regra:

```text
qualquer falha bloqueia aprovação
```

---

## 185. Modelo visual canônico das pranchas

As futuras concept sheets e spritesheets devem seguir um layout de produção consistente.

### 185.1 Estrutura

- grade visível;
- áreas numeradas;
- títulos em PT-BR;
- fundo neutro claro ou escuro;
- elementos separados por função;
- escala indicada;
- paleta exibida;
- versões 1x e ampliadas;
- notas curtas;
- nenhuma composição excessivamente promocional.

### 185.2 Conteúdo mínimo

1. marca;
2. referências;
3. paleta;
4. tipografia;
5. personagem;
6. inimigos;
7. props;
8. cenário modular;
9. cartas;
10. HUD;
11. estados;
12. observações de produção.

### 185.3 Hierarquia

A prancha deve priorizar:

1. sistema visual;
2. componentes reutilizáveis;
3. leitura de produção;
4. criatividade controlada;
5. acabamento.

Ela não deve priorizar espetáculo visual.

---

## 186. Regras específicas para evitar aparência genérica ou “de IA”

Evitar:

- excesso de elementos únicos;
- detalhes sem função;
- variação inconsistente de pixels;
- luz pintada em excesso;
- reflexos aleatórios;
- personagens cheios de acessórios;
- ruído em todas as superfícies;
- texto ilegível;
- perspectiva inconsistente;
- materiais indefinidos;
- símbolos genéricos;
- medievalismo;
- cyberpunk genérico;
- paletas saturadas em toda a tela;
- interfaces com módulos diferentes em cada seção.

Exigir:

- repetição modular consciente;
- poucos materiais por cena;
- silhuetas claras;
- props grandes;
- espaços vazios intencionais;
- domínio aplicado em 20–30%;
- luz usada para estado;
- fantasia aplicada como função do sistema;
- módulos de UI compartilhados;
- referência clara do que foi aproveitado;
- explicação do que foi evitado.

---

## 187. Contrato para Codex e Aseprite

O Codex deverá receber a seguinte instrução permanente:

```text
Você não possui liberdade para inventar um novo estilo.

Você possui liberdade para criar soluções novas dentro do sistema visual aprovado do Merge Quest.

Antes de criar:
1. leia o AGENTS.md;
2. leia o Design Book;
3. consulte a paleta;
4. consulte o contrato do asset;
5. consulte os assets aprovados da mesma família;
6. liste as regras aplicáveis;
7. proponha no máximo três variações;
8. não finalize sem aprovação.

Toda proposta precisa ser reproduzível no Aseprite,
versionada, validada e integrada sem quebrar os padrões existentes.
```

---

## 188. Regra consolidada

> O Merge Quest seguirá um modelo artístico estrito e modular. A criatividade existe na forma de resolver cada problema visual, nunca na quebra dos padrões de escala, paleta, linguagem, legibilidade, produção e integração.

---

## 189. Status

Nenhuma nova imagem, spritesheet, concept sheet, logo, tela ou PDF deve ser gerado até nova autorização explícita do usuário.
