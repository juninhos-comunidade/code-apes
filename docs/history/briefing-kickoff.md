# Merge Quest — Briefing de Kickoff: Brand Guide + Brainstorm de Andares e Assets

> Este documento é o contexto inicial de um projeto de trabalho colaborativo. Leia tudo antes de responder. Ele define o que é o projeto, o que já está decidido (e não deve ser reaberto), qual é a sua missão nas próximas conversas e o método de trabalho esperado. O documento de handoff completo (merge-quest-handoff.md) acompanha este briefing com todos os detalhes de mecânica, stack e escopo.

---

## 1. Contexto do projeto

Somos uma equipe de 3 pessoas participando do hackathon da Comunidade Juninhos & Nortjobs, com 1 mês de desenvolvimento. O edital pede aplicações que ajudem candidatos a validarem conhecimentos técnicos antes de processos seletivos, mitigando a insegurança de profissionais em início de carreira. A Nortjobs é uma plataforma de recrutamento inverso para devs, e o público-alvo é o dev júnior brasileiro.

Nossa resposta é o **Merge Quest**: um RPG dungeon crawler com batalhas de cartas em pixel art. O usuário cola a descrição da vaga que quer e a descrição do próprio perfil; a IA transforma a vaga numa torre personalizada de desafios e o perfil no deck inicial de cartas. O jogador sobe a torre enfrentando as próprias lacunas de conhecimento até o veredito final de prontidão para a vaga.

O nome vem do trocadilho com *merge request*: ser contratado é ser mergeado no time. Inimigos são **conflitos** (merge conflicts). O veredito final usa vocabulário de code review: **Merged** (pronto para a vaga), **Changes Requested** (bom, mas desenvolva X antes) e **Draft** (ainda não está pronto). Vitória mostra a tela "MERGED ✓" como badge de PR aprovado.

A mensagem central do produto: a insegurança pré-processo seletivo virando mecânica (a vida do jogador se chama **Confiança**) e o conhecimento como moeda (a loja é paga resolvendo desafios técnicos, não com dinheiro).

---

## 2. Decisões já travadas (não reabrir)

Estas decisões foram tomadas em levantamento anterior e são premissas, não tópicos de debate:

- **Estrutura:** torre com 5 andares na demo (arquitetura para 10), cada andar = uma área de competência da vaga. Navegação estilo Binding of Isaac (minimapa, sala a sala adjacente). Salas: batalha, item, loja, pergunta, chefe.
- **Combate:** card battler por turno, grid 3x3 por lado funcionando como 3 pistas com 3 posições de profundidade. Carta da frente luta; pista vazia = dano direto. Cartas com Ataque/Vida + no máximo 1 palavra-chave (Provocar, Escudo, Ataque Duplo). Mana crescente 1→5. Deck de 15 cartas, mão inicial de 4, compra 1 por turno. Personagem do jogador ao fundo assistindo (estilo Pokémon).
- **Confiança:** vida do jogador, persiste no andar; zerar = nocaute estilo HQ → checkpoint do andar + tela de replay pedagógica.
- **Perguntas entre batalhas:** múltipla escolha com alternativas de peso parcial (existe a "mais certa"); acerto = buff, erro = buff no inimigo.
- **Loja:** cada item tem um desafio longo associado (query SQL, código POO etc.), corrigido por IA com rubrica.
- **8 áreas de classificação da vaga:** Dev Back, Dev Front, QA, Cloud, IA, Cyber, Banco de Dados, Mobile. Conteúdo profundo no MVP em 4: Back, Front, QA e Banco de Dados.
- **IA escolhe, não inventa:** todo conteúdo técnico vem de catálogo curado pela equipe; a IA seleciona, ordena e gera apenas flavor.
- **Stack:** Phaser 3 embutido em React/Vite, FastAPI, Supabase, GPT-4o-mini, deploy Railway + Vercel. Detalhes no handoff.
- **Mentor:** NPC guia com personalidade (balão de fala de HQ), sarcástico-parceiro, comenta o progresso.

---

## 3. Direção de arte (base já definida)

- Pixel art 2D que simula profundidade 3D usando primordialmente **luz e sombra**
- **Paleta dupla:** tons quentes (vermelho/laranja/marrom) contra frios (roxo/azul/preto). Combate puxa o quente; loja/descanso puxa o frio
- Luz **sempre do topo-esquerda** em todos os sprites; sombras coloridas (roxo/azul), nunca cinza escurecido
- Clima de HQ old school estilo **Scott Pilgrim**: quadrinhos, balões de fala, onomatopeias (POW/BAM), telas de "VS" antes de chefes, humor
- Referências: Scott Pilgrim (vibração de HQ), Inscryption (iluminação dramática, cartas protegendo o jogador), Binding of Isaac (navegação), 9 Kings (combate em grid)
- Paletas hex de referência extraídas dos sprites já produzidos estão no handoff (seção 5)
- O roxo de "merged" do GitHub é candidato a cor-âncora da identidade

---

## 4. Sua missão neste projeto (3 fases, nesta ordem)

### Fase 1 — Brand Guide
Construir junto, via Q&A, o brand guide do Merge Quest: logo (conceito e direção), paleta final consolidada, tipografia (display retrô/pixelada para títulos + sans limpa para UI), tom de voz, motivos visuais (setas de merge/branch, badge MERGED ✓, torre, cartas, onomatopeias), e aplicação da marca (tela de título, HUD, materiais de pitch).

### Fase 2 — Conceito dos andares
Com o brand guide fechado, fazer o brainstorm conceitual de cada andar/área: tema visual e narrativo de cada uma das 8 áreas (com prioridade nas 4 do MVP), ambientação, tipos de inimigo-conflito característicos, o chefe de cada andar e sua mecânica especial de 1 regra, e as falas/tom do mentor naquele andar.

### Fase 3 — Inventário de assets
Consolidar a lista completa e priorizada de sprites e assets do jogo, usando a taxonomia da seção 6 como ponto de partida. A saída é a parte final do levantamento de requisitos: uma lista com prioridade (P0 = MVP inegociável, P1 = importante, P2 = stretch) e estimativa de esforço, respeitando as restrições de produção da seção 5.

---

## 5. Restrições de produção (fundamentais para o brainstorm não virar lista dos sonhos)

- O artista da equipe (Eduardo) está **aprendendo pixel art agora**, em paralelo ao desenvolvimento, usando LibreSprite
- Prazo total de 1 mês, e a arte é só uma das frentes dele
- Canvas padronizado de **48x48** para soldados/inimigos/cartas
- Animações por sprite: apenas **idle (2-4 frames) e attack (3-4 frames)**. Hit, morte e movimento são feitos por código no Phaser (flash, fade, partículas, tweens)
- Chefes = recolor ampliado de inimigo existente + acessório, não design do zero
- Cenários, tiles e efeitos vêm de **asset packs CC0** (Kenney.nl, itch.io) com a paleta aplicada via tint/iluminação no Phaser; sprite autoral é reservado para personagens e o que define identidade
- Geração de imagem por IA apenas para retratos pontuais, nunca para sprite sheets animados
- Todo design proposto deve caber nessas restrições ou ser explicitamente marcado como P2/stretch

---

## 6. Taxonomia inicial do inventário de assets (ponto de partida da Fase 3)

**Personagens**
- Herói (jogador): sprite de costas assistindo a batalha; possível evolução visual simples por progresso
- Mentor: busto/retrato para balões de fala, com 3-4 expressões (neutro, zoando, aprovando, preocupado)
- Lojista (decidir se existe como NPC visível)

**Soldados aliados (cartas do jogador)**
- 4-5 soldados base tematizados por área, cada um com idle + attack
- Variações por recolor de paleta

**Inimigos (conflitos)**
- 3-4 inimigos base por área do MVP (ou base compartilhada com recolor por área), idle + attack
- Design conceitual: cada inimigo materializa uma lacuna de conhecimento / merge conflict

**Chefes**
- 1 por andar (5 na demo): recolor ampliado + acessório + mecânica especial visualizável (ex.: carta "Deadlock" em campo)
- Chefe final: o Recrutador (Sala do Recrutador)

**O objeto carta**
- Moldura frente e verso, indicadores de ataque/vida/custo de mana, ícones das palavras-chave (Provocar, Escudo, Ataque Duplo), estados visuais (selecionada, buffada, debuffada, recebendo dano)

**Itens e consumíveis**
- Ícones de consumíveis (cura de Confiança, buff de uma batalha) e de upgrades da loja

**Salas e tiles**
- Identidade visual por tipo de sala: batalha, item, loja, pergunta, descanso, chefe, escada
- Portas/passagens e decoração ambiente

**Andares (ambientação)**
- Tema de cenário por área (4-5 no MVP, 8 na arquitetura), com versão quente (combate) e fria (loja/descanso) via paleta

**UI/HUD**
- Minimapa (sala atual, visitada, desconhecida, especial)
- Barra de Confiança, indicador de mana, contador de combo/streak
- Balões de fala de HQ, caixas de diálogo
- Onomatopeias (POW, BAM, CRÍTICO, MERGED ✓)
- Telas especiais: VS de chefe, nocaute, replay/checkpoint, veredito (Merged / Changes Requested / Draft), vitória MERGED ✓
- Ícones das 8 áreas de competência; troféus/insígnias

**Efeitos (majoritariamente por código, listar o que precisa de frame)**
- Hit flash, dissolução de morte, aura de buff/debuff, cura, números de dano, brilho de carta nova

---

## 7. Método de trabalho esperado

- **Q&A iterativo:** no máximo 2-3 perguntas por rodada, sempre com opções concretas para escolher (decidir entre opções é fácil; decidir no vácuo é difícil). Uma decisão por vez, consolidada antes de avançar.
- **Referências artísticas:** sempre que propuser uma direção visual, ancorar em referências nomeadas e descritas; pedir referências de volta quando útil.
- **Registrar como decisão, não como possibilidade:** ao fechar cada rodada, resumir o que foi travado em linguagem definitiva ("o logo usa X", não "o logo poderia usar X"). Manter uma lista viva de "decisões travadas" e outra de "questões em aberto".
- **Respeitar o que já está travado** (seção 2) e as restrições de produção (seção 5). Propostas que estourem as restrições devem ser marcadas explicitamente como stretch.
- **Saídas finais esperadas:** (1) brand guide consolidado, (2) documento de conceito dos andares, (3) inventário de assets priorizado P0/P1/P2 — os três em formato que a equipe possa colar no levantamento de requisitos.

Comece pela Fase 1: abra com a primeira rodada de Q&A do brand guide.
