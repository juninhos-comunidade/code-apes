# Merge Quest — Documento de Handoff Completo

> Consolidação de tudo que foi decidido, criado e produzido até agora no projeto. Serve como contexto completo para qualquer ferramenta ou pessoa que entre no projeto a partir daqui (brand guide, logo, levantamento de requisitos, desenvolvimento).

---

## 1. Contexto do projeto

- **Evento:** Hackathon Comunidade Juninhos & Nortjobs
- **Prazo:** 1 mês de desenvolvimento
- **Equipe:** 3 pessoas (perfis Python/React; Eduardo assume adicionalmente a arte/sprites)
- **Objetivo do edital:** fomentar aplicações que ajudem candidatos a validarem conhecimentos técnicos antes de processos seletivos, mitigando a insegurança de profissionais em início de carreira. Liberdade total de stack. Uso de IA permitido como recurso auxiliar, com autoria e domínio da equipe sobre a solução.
- **Contexto de negócio:** a Nortjobs é uma plataforma de recrutamento inverso para devs. O jogo conversa diretamente com esse posicionamento: as competências do candidato viram literalmente o exército dele.

---

## 2. O nome: Merge Quest

Nome definido pela equipe (anteriormente placeholder "A Torre da Vaga").

**Racional:** trocadilho imediato com *merge request* para qualquer dev. A metáfora central: **ser contratado é ser mergeado no time**. A jornada do jogo é "o caminho do teu PR até a main".

**Linguagem de flavor que o nome desbloqueia:**

- Vitória na run: tela "**MERGED ✓**" (estilo badge de PR aprovado, roxo)
- Inimigos: **conflitos** — cada monstro é um merge conflict a resolver (encaixa no conceito de inimigo = lacuna de conhecimento)
- Veredito final em graus, mapeado no vocabulário de code review:
  - **Merged** — pronto para a vaga
  - **Changes Requested** — bom, mas desenvolva X e Y antes
  - **Draft** — ainda não está pronto para abrir esse PR
- Sala do Recrutador = o code review final antes do merge

**Ressalva registrada:** existe um gênero mobile de jogos "merge" (Merge Dragons etc.). Para o público-alvo (devs, Nortjobs, Juninhos), a leitura de git domina. Se virar produto real, conferir disponibilidade de marca.

---

## 3. Pitch e conceito

**Pitch em uma frase:** o candidato cola a descrição da vaga que quer e a descrição do próprio perfil; a IA transforma a vaga numa torre de desafios personalizada e o perfil no deck inicial de cartas do jogador. Ele sobe a torre andar por andar num RPG dungeon crawler com batalhas de cartas, enfrentando as próprias lacunas de conhecimento, até o veredito final sobre sua prontidão para a vaga.

**Mensagem central:** a insegurança pré-processo seletivo transformada em mecânica de jogo (a vida do jogador é a barra de **Confiança**), e o conhecimento do candidato como moeda e arma da jornada (a loja é paga resolvendo desafios técnicos).

---

## 4. Referências criativas

| Referência | O que emprestamos |
|---|---|
| **The Binding of Isaac** | Navegação da dungeon: minimapa do andar, movimentação sala a sala adjacente |
| **9 Kings** | Espírito do combate: grid, resolução automática de confrontos por posição |
| **Inscryption** | Gameplay de cartas protegendo o jogador, clima, iluminação dramática |
| **Scott Pilgrim (jogo/HQ)** | Estética pixel art vibrante de HQ, balões de fala, onomatopeias (POW/BAM), telas de "VS" antes dos chefes, humor |
| **Hearthstone** | Referência de vida/dano nas cartas, cartas protegem a face, curva de mana |

---

## 5. Direção de arte

### Princípios
- **Pixel art 2D que simula profundidade 3D usando primordialmente luz e sombra**
- **Paleta dupla:** tons quentes (vermelho/laranja/marrom) contra tons frios (roxo/azul/preto)
- Regra de ouro: **a luz vem sempre do topo-esquerda** em todos os sprites do jogo
- Sombras coloridas (puxando roxo/azul), nunca cinza escurecido — é o que dá o look profissional
- Salas de combate puxam a paleta quente; salas de loja/descanso puxam a fria
- Clima geral: HQ old school estilo Scott Pilgrim — quadrinhos, balões, onomatopeias, telas de VS

### Paletas de referência (hex, extraídas dos sprites já produzidos)

**Base (soldado limpo):**
`#808080` (armadura) · `#393A39` (contorno) · `#9E292C` (vermelho) · `#DEBB93` (pele) · `#282827` (preto) · `#4F4A45` (marrom)

**Variante quente (combate):**
`#967C64` (armadura) · `#34221A` (contorno) · `#C44A26` (laranja-vermelho) · `#E8C094` (pele) · `#221612` (preto quente) · `#7A4C28` (marrom)

**Variante fria (loja/inimigo):**
`#6A7296` (armadura azulada) · `#241E3A` (contorno roxo) · `#9E2E60` (carmim) · `#C6B0A8` (pele fria) · `#141022` (preto roxo) · `#4C3E5C` (marrom roxo)

**Luz e sombra (demo):** highlight quente de armadura `#B0AA9C`, sombra fria de armadura `#605E78`

### Estratégia de produção de arte
- Canvas padronizado de **48x48** para todos os soldados/cartas (personagem centralizado)
- Sprites-chave feitos à mão por Eduardo: herói de costas (1 frame), 4-5 soldados (idle + attack), 3-4 inimigos (idle + attack), chefes como recolor ampliado de inimigo com acessório
- Cenários/tiles/efeitos: asset packs gratuitos CC0 (Kenney.nl, itch.io) com paleta ajustada via tint/iluminação do Phaser
- Animações mínimas por sprite: **idle** (2-4 frames) e **attack** (3-4 frames). Hit (flash branco), morte (fade + partículas) e movimento ficam por código no Phaser
- IA de geração de imagem apenas para retratos pontuais, nunca para sprite sheets animados
- Ferramenta de Eduardo: LibreSprite (grátis). Fluxo de melhoria: exporta PNG → envia ao Claude → análise + processamento via código (limpeza de grid, remapeamento de paleta, variações, sprite sheets, GIF de preview)

### Assets já produzidos
- `soldado-limpo.png` — sprite base 37x43, 6 cores, grid real, fundo transparente (game-ready)
- `soldado-quente.png` — variante paleta quente
- `soldado-frio.png` — variante paleta fria
- `soldado-sombreado.png` — demo de luz quente topo-esquerda + sombra fria
- `soldado-comparacao.png` — folha comparativa das 4 versões

---

## 6. Fluxo do usuário

1. **Cadastro/Login** (Supabase Auth)
2. **Entrada de dados:** usuário cola a descrição da vaga (JD) e a descrição do próprio perfil (competências, stack, experiências)
3. **Análise da vaga:** IA classifica nas 8 áreas e define quais andares, inimigos, perguntas e desafios do catálogo entram na torre, com peso e dificuldade proporcionais à ênfase da vaga
4. **Geração do deck inicial:** IA mapeia as competências do perfil para cartas do catálogo (soldados + itens/efeitos)
5. **Exploração:** navegação Isaac-style pelo andar (minimapa, sala a sala) — salas de batalha, item, loja e pergunta, até a escada
6. **Batalhas:** card battler por turno, grid 3x3 por lado, personagem do jogador ao fundo assistindo (estilo Pokémon)
7. **Chefe do andar:** batalha especial com mecânica única da área; vencer libera a escada
8. **Chefe final (Sala do Recrutador):** simulação de entrevista que consolida a jornada → veredito **Merged / Changes Requested / Draft**

---

## 7. Mecânicas de jogo (decisões travadas)

### Estrutura da torre
- Demo com **5 andares**; arquitetura configurável para até 10
- Cada andar = uma área de competência relevante para a vaga
- Salas por andar: batalhas comuns, item, loja, pergunta e chefe
- Navegação estilo Binding of Isaac (minimapa, salas adjacentes; sem movimento livre pixel a pixel)

### Batalha (card battler por pistas)
- Grid **3x3 para cada lado** (18 slots). As 3 colunas são 3 **pistas**; cada pista comporta até 3 cartas em profundidade (frente, meio, trás)
- Resolução por pista ao fim do turno: carta da frente ataca a carta da frente inimiga da mesma pista; pista inimiga vazia = dano direto na vida do inimigo; carta da frente morre → a de trás avança
- Cartas simples no MVP: **Ataque/Vida + no máximo 1 palavra-chave** (Provocar, Escudo, Ataque Duplo)
- **Mana crescente capada:** turno 1 = 1 mana, +1 por turno, teto de 5. Cartas custam 1 a 5
- Mão inicial de 4 cartas, compra 1 por turno, **deck de 15 cartas**
- Animações econômicas: carta avança, bate, treme, flash, número de dano voando (tweens do Phaser)

### Confiança (a vida do jogador)
- A vida se chama **Confiança** — a mensagem do produto virando mecânica
- Persiste entre batalhas do andar; vencer recupera um pouco; salas de descanso curam mais
- Confiança zerada = **nocaute** (cena exagerada de HQ) → retorna ao checkpoint do andar com **tela de replay** explicando o que errou e por quê (é onde entra o conteúdo pedagógico sem quebrar o ritmo)

### Perguntas de múltipla escolha (entre batalhas)
- Rápidas de responder, mas não fáceis (ex.: melhor estratégia de cache para um cenário)
- **Alternativas com peso parcial:** existe a resposta mais certa (buff cheio) e respostas parcialmente corretas (buff menor)
- Acerto = buff ao jogador na próxima batalha; erro = buff ao inimigo

### Sala de item
- Escolha de 1 entre 3 cartas aleatórias, filtradas pelas áreas da vaga
- Ocasionalmente um consumível (cura de Confiança, buff de uma batalha)

### Loja (a moeda é conhecimento)
- Cada carta/upgrade tem um **desafio longo** associado: resolveu, levou (sem dinheiro)
- Desafios: query SQL, código POO com herança/polimorfismo/encapsulamento, correção de bug — tematizados com a vaga
- Dificuldade proporcional ao poder do item
- Correção via **IA com rubrica explícita** + validação sintática básica (sem sandbox de execução no MVP)

### Chefes
- Chefe de andar: deck/atributos mais fortes + 1 mecânica especial da área (ex.: chefe de Banco de Dados abre com a carta "Deadlock" travando uma pista até ser destruída)
- Chefe final: Sala do Recrutador → veredito em graus (Merged / Changes Requested / Draft)

---

## 8. Papel da IA (princípio: a IA escolhe, não inventa)

Todo conteúdo técnico (cartas, inimigos, perguntas, desafios) vive num **catálogo curado e revisado pela equipe**. A IA atua sobre o catálogo, nunca gera conteúdo técnico do zero — elimina risco de pergunta errada por alucinação.

- **Classificação da vaga nas 8 áreas:** Dev Back, Dev Front, QA, Cloud, IA, Cyber, Banco de Dados, Mobile
- **Deck inicial:** mapeamento das competências do perfil → cartas do catálogo
- **Flavor text:** nomes/descrições de inimigos, falas do mentor, tom narrativo por andar, customizados à vaga
- **Correção dos desafios da loja** com rubrica
- **Veredito final** em graus

**Mentor:** NPC guia com personalidade (balão de fala estilo HQ), meio sarcástico, incentivador — comenta progresso e transições.

---

## 9. Escopo: MVP vs Stretch

### MVP (inegociável)
- Auth + telas de colar vaga e perfil
- Pipeline de IA: classificação nas 8 áreas + deck inicial (sobre catálogo)
- 5 andares jogáveis (arquitetura para 10)
- **Conteúdo curado profundo em 4 áreas: Dev Back, Dev Front, QA e Banco de Dados** (as de domínio real do time). As outras 4 existem na arquitetura
- Navegação Isaac-style com minimapa
- Card battler completo (pistas, mana, mão/deck, palavras-chave básicas, animações simples)
- MCQ com peso parcial e buff/debuff
- Sala de item (1 de 3) + loja com pelo menos 2 tipos de desafio longo corrigidos por IA
- Chefes de andar com 1 mecânica especial cada + chefe final
- Sistema de Confiança com checkpoint e tela de replay pedagógica
- Veredito final por IA

### Stretch (se sobrar tempo)
- Conteúdo profundo nas 4 áreas restantes (Cloud, IA, Cyber, Mobile)
- Mais andares na demo
- Mais palavras-chave e consumíveis
- Animações/efeitos mais ricos (telas de VS elaboradas, onomatopeias)
- Perfil público com troféus de competência (portfólio na comunidade)
- Ranking/leaderboard

---

## 10. Stack técnica

| Camada | Tecnologia | Uso |
|---|---|---|
| Motor do jogo | **Phaser 3** | Dungeon, sprites, grid de batalha, animações. Encaixado num componente React; comunicação por eventos |
| Frontend | **React + Vite** | Login, colar vaga/perfil, dashboard, tela de replay, perfil |
| Backend | **FastAPI (Python)** | API REST, orquestração da IA, progressão e checkpoints |
| Banco + Auth | **Supabase (PostgreSQL)** | Auth, catálogo, perfis, progresso, decks |
| IA | **OpenAI GPT-4o-mini** | Classificação da vaga, deck do perfil, flavor, correção, veredito |
| Deploy | **Railway + Vercel** | Backend no Railway, frontend na Vercel |
| QA | **Behave + Playwright** | BDD em Python (Gherkin) + automação de navegador do fluxo completo |

**Arquitetura de estado:** estado da sessão (Confiança, sala atual, streak) em memória no frontend durante a sala — combate fluido, sem rede a cada ação. Supabase salva **apenas em checkpoints**: fim de sala, fim de andar, nocaute e veredito final. Fechar o navegador no meio de uma sala = volta ao último checkpoint (mesmo mecanismo do nocaute — uma regra, dois usos).

---

## 11. Divisão de trabalho (3 pessoas)

| Papel | Responsabilidades |
|---|---|
| Backend/Dados | Modelagem do catálogo, motor de geração da torre, Confiança/checkpoints, API REST |
| Frontend/Jogo | Integração React + Phaser, grid de batalha e animações, navegação com minimapa, telas de loja/item/pergunta/replay |
| IA + Conteúdo/QA | Prompts (classificação, deck, flavor), rubricas de correção, curadoria do catálogo nas 4 áreas do MVP, testes Behave + Playwright |

**Eduardo assume adicionalmente a arte (sprites/animação).** Divisão será refinada conforme o levantamento de requisitos avançar. Guarda de escopo: manter o set de sprites enxuto para a arte não virar gargalo.

---

## 12. Cronograma sugerido (4 semanas)

| Semana | Foco | Entregas |
|---|---|---|
| 1 | Fundação | Schema do catálogo e progresso; setup (React + Phaser + FastAPI + Supabase rodando); prompts de classificação e deck em protótipo; conteúdo completo de 1 área; **contrato de eventos React↔Phaser definido** |
| 2 | Core loop | Card battler jogável ponta a ponta; navegação entre salas com minimapa; Confiança com checkpoint |
| 3 | Sistemas de apoio | Loja com correção por IA; sala de item; MCQ com buff/debuff; chefes de andar; conteúdo das 4 áreas completo; veredito final |
| 4 | Acabamento | Direção de arte aplicada; testes Behave + Playwright; balanceamento; roteiro de apresentação e demo gravada como backup |

---

## 13. Riscos e mitigações

| Risco | Mitigação |
|---|---|
| Balanceamento do card battler | Cartas simples (ataque/vida + 1 keyword), mana capada em 5, deck de 15 |
| Volume de arte | Asset packs CC0 + paleta via tint; sprites-chave enxutos; IA só para retratos |
| Correção de código aberto na loja | Rubrica explícita por IA + validação sintática; sem sandbox no MVP |
| Volume de conteúdo curado | 4 áreas profundas no MVP, 8 na arquitetura |
| Integração React + Phaser | Contrato de eventos definido na semana 1 |
| Escopo crescente | O documento de requisitos é a referência: o que não está no MVP não entra antes do MVP fechar |

---

## 14. Insumos para Brand Guide / Logo (próxima etapa)

- **Nome:** Merge Quest
- **Tagline candidatas:** "suba a torre, vença a vaga" / "o caminho do teu PR até a main" / "resolva seus conflitos antes da entrevista"
- **Tom de voz:** zoeira gamer-dev brasileira, retrô, incentivadora sem ser corporativa (o mentor sarcástico-parceiro é a personificação)
- **Público:** devs juniores BR, comunidade Juninhos, usuários da Nortjobs
- **Motivos visuais:** setas de merge/branch do git, badge "MERGED ✓" roxo de PR, pixel art, torre, cartas, telas de VS, onomatopeias de HQ (POW/BAM), barra de Confiança
- **Paleta:** dupla quente x fria (hexes na seção 5); o roxo de "merged" do GitHub pode ancorar a identidade
- **Direção tipográfica sugerida:** display pixelada/retrô para títulos + sans limpa para UI e texto longo
- **Estética de referência:** Scott Pilgrim (HQ vibrante) + Inscryption (iluminação dramática)

---

## 15. Materiais já gerados nesta fase

- Documento de escopo e requisitos (docx editável + PDF, 5 páginas, ainda com o nome antigo "A Torre da Vaga" — atualizar para Merge Quest)
- Diagrama da stack (SVG vetorial + JPEG alta resolução)
- Prompt detalhado para geração de imagem de fluxograma da stack em estilo pixel art/comic
- Sprites do soldado (base limpa + 3 variantes + folha de comparação)
- Plano de aprendizado de pixel art/animação de 2 semanas para Eduardo (fundamentos → idle/attack)
