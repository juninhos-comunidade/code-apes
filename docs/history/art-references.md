# Merge Quest — Dossiê de Referências Artísticas

> Companion do briefing de kickoff e do handoff. Documenta as 6 imagens de referência visual do projeto: o que cada uma mostra, qual conceito do Merge Quest ela ancora, o que extrair dela e o que adaptar. As imagens acompanham este documento com os nomes `ref-01` a `ref-06`. Use este dossiê como vocabulário visual comum durante o brand guide e o brainstorm de andares/assets.

**Nota de uso:** estas são referências de estudo de linguagem visual (composição, paleta, atmosfera, UI). Nenhum asset, personagem ou arte destes jogos será copiado ou reproduzido — toda arte do Merge Quest é autoral ou de asset packs CC0.

---

## ref-01 — The Binding of Isaac: Rebirth → estrutura das SALAS

**O que a imagem mostra:** gameplay visto de cima, uma sala única ocupando a tela inteira. Paredes de pedra escura emolduram o espaço jogável de chão de terra marrom; portas nos pontos cardeais conectam às salas vizinhas. HUD discreto nos cantos (corações de vida no topo-esquerda, recursos e itens no topo-direita, nome do andar embaixo-esquerda, barra de vida de inimigo embaixo). Personagem pequeno e inimigo grande no centro do espaço.

**O que ancorar no Merge Quest:**
- Sala como unidade de tela: **uma sala = uma tela**, sem scroll dentro da sala
- Paredes emoldurando o espaço, portas visíveis indicando as conexões adjacentes (é assim que o jogador entende a navegação Isaac-style)
- HUD periférico e discreto que não briga com o centro da tela
- Ambiência da sala contando a história do andar (textura de parede e chão mudam por tema)

**O que adaptar:** no Merge Quest não há combate em tempo real dentro da sala — a sala é navegação e evento; entrar numa sala de batalha abre a cena do card battler.

---

## ref-02 — 9 Kings → as CARTAS e unidades

**O que a imagem mostra:** visão tática de um campo em grid com construções e unidades posicionadas, valores numéricos sobre as células, e na parte inferior a **mão de cartas**: cartas verticais com moldura ornamentada, ilustração da unidade no topo, nome e caixa de texto embaixo. Molduras variam de cor/material indicando tipo ou raridade (dourada quente vs azul fria).

**O que ancorar no Merge Quest:**
- Anatomia da carta: moldura + ilustração da unidade + nome + stats legíveis num relance
- Carta como representação direta de uma unidade que entra no campo (a carta "vira" o soldado no grid)
- Molduras com temperatura de cor comunicando categoria (casa com nossa paleta dupla quente x fria)
- Legibilidade do campo: mesmo com várias unidades, cada célula é lida individualmente

**O que adaptar:** nosso campo é o grid 3x3 por lado com resolução por pistas; a mão fica na base da tela como em 9 Kings.

---

## ref-03 — Tileset de masmorra top-down → RESOLUÇÃO 48x48 e tiles

**O que a imagem mostra:** um andar de masmorra multi-salas construído inteiramente em tiles: paredes de pedra escura com topo visível, pisos de pedra irregular, e props de ambiente (barris, caixas, tochas acesas, camas, mesas, teias de aranha, escadas). Iluminação pontual quente das tochas contra a pedra fria.

**O que ancorar no Merge Quest:**
- **A resolução de trabalho: tiles de 48x48**, mesmo padrão do canvas dos personagens — tudo no jogo compartilha essa métrica
- Densidade de decoração: poucos props repetidos (barril, tocha, caixa) dão vida a muitas salas com custo de arte baixo
- Leitura clara de piso vs parede vs obstáculo, mesmo em paleta escura
- Tochas como pontos de luz quente em ambiente frio (nossa regra de paleta em miniatura)

**Nota de produção:** é exatamente o tipo de tileset que buscaremos em asset packs CC0, aplicando nossa paleta via tint no Phaser.

---

## ref-04 — Dead Cells (gameplay) → CORES e pontos focais

**O que a imagem mostra:** cena de plataforma em caverna dominada por azuis e roxos profundos, com acentos quentes concentrados nos pontos de interesse: portal laranja incandescente, moedas douradas, ataques vermelhos, cristais ciano. Camadas de fundo progressivamente mais escuras e dessaturadas criando profundidade.

**O que ancorar no Merge Quest:**
- A regra de ouro da nossa paleta em ação: **fundo frio, interesse quente** — o olho vai automaticamente para o que importa
- Elementos interativos com glow/emissivo (portais, itens, perigo)
- Profundidade por camadas de valor (fundo escuro → primeiro plano contrastado), nosso "3D simulado por luz e sombra"

---

## ref-05 — Dead Cells (arte de ambiente) → ILUMINAÇÃO e atmosfera (referência-mestra)

**O que a imagem mostra:** interior de masmorra com uma janela gradeada no alto por onde entra um feixe de **luz volumétrica amarela** que banha a parede e o chão. A parede de pedra transita do amarelo-esverdeado iluminado para azul-petróleo na sombra. Sombras são coloridas (verdes, azuis), nunca cinza. Um personagem pequeno de vermelho contrasta contra o ambiente grande, com um ponto de brilho quente (o olho/chama) puxando o foco. Props contam história (machado no tronco, lanças, correntes).

**O que ancorar no Merge Quest:**
- **Esta é a materialização exata da nossa direção de arte:** paleta dupla quente x frio na mesma cena, luz com direção clara, sombras coloridas, profundidade inteira construída por iluminação sobre pixel art
- Gradiente de temperatura como composição: o quente marca origem de luz e ponto focal; o frio preenche o resto
- Personagem pequeno + ambiente grande = senso de jornada/escala (bom para telas de transição de andar)
- Props ambientais narrativos em vez de decoração aleatória

**Papel no projeto:** referência-mestra de fotografia/cor. Quando houver dúvida de iluminação ou atmosfera em qualquer tela, voltar a esta imagem.

---

## ref-06 — Pokémon (estilo GBA, batalha de treinador) → COMPOSIÇÃO da cena de batalha

**O que a imagem mostra:** o enquadramento clássico de batalha: o jogador **de costas, grande, em primeiro plano no canto inferior-esquerdo**; o oponente **de frente, menor, ao fundo no canto superior-direito**, cada um sobre sua plataforma oval. Indicadores de equipe (pokébolas) ao lado de cada lado. Caixa de diálogo ocupando a base da tela com borda dupla e texto do evento.

**O que ancorar no Merge Quest:**
- **O conceito central da cena de batalha: o jogador está acima/atrás, observando — quem luta são as cartas/soldados dele contra as do inimigo**
- Composição diagonal: jogador embaixo-frente (de costas) ↔ oponente em cima-fundo (de frente); entre os dois fica o palco da luta — no nosso caso, o grid 3x3 vs 3x3
- Caixa de diálogo na base para falas do mentor, eventos e perguntas
- Indicadores de estado de cada lado nas laterais (nossa barra de Confiança do jogador vs vida do inimigo)
- Senso de "palco": a batalha é uma cena apresentada, não uma arena explorável

---

## Síntese: o mapa de referências do Merge Quest

| Aspecto | Referência-âncora |
|---|---|
| Navegação e estrutura de salas | The Binding of Isaac (ref-01) |
| Anatomia das cartas e unidades no campo | 9 Kings (ref-02) |
| Resolução, tiles e props de ambiente | Tileset 48x48 (ref-03) |
| Regra de cor: fundo frio, interesse quente | Dead Cells gameplay (ref-04) |
| Iluminação, atmosfera e fotografia (mestra) | Dead Cells ambiente (ref-05) |
| Composição da cena de batalha (jogador observa) | Pokémon GBA (ref-06) |
| Energia de HQ, onomatopeias, telas de VS, humor | Scott Pilgrim (ver briefing) |
| Cartas protegendo o jogador, clima de tensão | Inscryption (ver briefing) |

A identidade do Merge Quest nasce do cruzamento: **estrutura de Isaac + cartas de 9 Kings + fotografia de Dead Cells + palco de Pokémon + energia de Scott Pilgrim**, tudo em pixel art 48x48 com a paleta dupla quente x fria e luz do topo-esquerda.
