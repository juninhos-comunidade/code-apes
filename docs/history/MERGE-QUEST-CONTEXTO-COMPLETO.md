# MERGE QUEST — CONTEXTO COMPLETO PARA CODEX

> Documento consolidado. Os arquivos modulares do pacote continuam sendo a fonte mais fácil de manter.



---

<!-- SOURCE: README-FIRST.md -->

# Merge Quest — contexto canônico para Codex

Este pacote existe para o Codex **entender o projeto, propor a árvore do monorepo e preparar a organização do trabalho**.

## Primeira missão

1. Leia `AGENTS.md`.
2. Leia `PROJECT-MAP.md`.
3. Leia `docs/architecture/06-monorepo-and-repository-architecture.md`.
4. Leia `docs/engineering/07-poo-tdd-layered-architecture.md`.
5. Leia `docs/product/09-vertical-slice-and-acceptance.md`.
6. Leia `docs/linear/12-linear-bootstrap.md`.
7. Inspecione o diretório atual.
8. Proponha a árvore final do repositório.
9. Explique cada diretório e fronteira.
10. Aguarde aprovação antes de instalar dependências ou implementar o jogo.

## Ordem obrigatória

### Fase A — árvore e documentação

- criar a árvore do monorepo;
- copiar estes documentos para os locais corretos;
- criar arquivos vazios ou placeholders;
- criar `package.json`, `pnpm-workspace.yaml` e `turbo.json` somente após mostrar a proposta;
- não instalar frameworks ainda;
- não escrever funcionalidades.

### Fase B — revisão da árvore

- executar uma auditoria da estrutura;
- verificar conflitos de responsabilidade;
- identificar decisões ainda abertas;
- gerar um relatório em `docs/repository-bootstrap-report.md`;
- aguardar aprovação do usuário.

### Fase C — Linear

Somente após a árvore ser aprovada:

- propor a estrutura do Linear;
- aguardar aprovação;
- criar projetos, milestones, labels, issues e dependências;
- não iniciar implementação automaticamente.

## Fontes principais

- `PROJECT-MAP.md`: visão canônica resumida.
- `MERGE-QUEST-CONTEXTO-COMPLETO.md`: versão única e longa para leitura linear.
- `docs/history/decision-log-v7.8.md`: histórico completo das decisões.
- `sources/carta-magna-v1.5.pdf`: documento de apresentação.
- `assets/reference/prototipo-visual-aprovado.png`: referência visual aprovada.

## Regra de precedência

Quando houver conflito:

1. `AGENTS.md`;
2. documentos canônicos numerados;
3. ADRs;
4. `PROJECT-MAP.md`;
5. histórico e fontes antigas.

Não use uma decisão antiga quando um documento canônico disser que ela foi substituída.



---

<!-- SOURCE: AGENTS.md -->

# AGENTS.md — Merge Quest

## Escopo destas instruções

Estas instruções valem para todo o repositório. Arquivos `AGENTS.md` mais próximos de um diretório podem acrescentar regras específicas, mas não podem contrariar as regras de produto, segurança, arquitetura e escopo deste arquivo.

## Missão do agente

Ajudar a equipe a construir o Merge Quest com:

- escopo controlado;
- arquitetura testável;
- conteúdo técnico auditável;
- pixel art consistente;
- integração segura entre React, Phaser, API, banco e IA;
- documentação atualizada;
- tarefas rastreáveis no Linear.

## Regra zero

**Não implemente antes de entender.**

Antes de qualquer mudança relevante:

1. leia os documentos associados;
2. resuma o entendimento;
3. liste arquivos que pretende criar ou alterar;
4. identifique riscos e dependências;
5. aguarde aprovação quando a ação for destrutiva, externa ou ampliar escopo.

## Ações que exigem confirmação

- instalar ou remover dependências;
- apagar ou mover arquivos aprovados;
- alterar configuração global;
- criar recursos externos;
- executar comandos fora do workspace;
- publicar deploy;
- alterar banco compartilhado;
- criar ou modificar itens no Linear;
- substituir assets aprovados;
- mudar stack, arquitetura ou escopo;
- usar serviços pagos;
- enviar dados a serviços externos.

## Primeira missão do repositório

1. propor a árvore;
2. criar apenas scaffolding e documentação;
3. auditar a estrutura;
4. aguardar aprovação;
5. somente depois preparar o Linear;
6. não iniciar funcionalidades.

## Arquitetura obrigatória

- monorepo;
- pnpm Workspaces;
- Turborepo;
- uma aplicação web principal;
- React como shell do produto;
- Phaser montado dentro da aplicação;
- `game-core` como fonte de verdade do estado do jogo;
- regras determinísticas fora de React e das cenas Phaser;
- API e persistência atrás de contratos;
- IA atrás da API;
- conteúdo técnico vindo de catálogo curado;
- arquitetura em camadas com dependências apontando para o domínio;
- TDD para regras de negócio e fluxos críticos.

## Regras de dependência

- `game-core` não importa React, Phaser, navegador, banco ou SDK de IA;
- `game-runtime` pode depender de Phaser e `game-core`;
- `apps/web` pode depender de UI, contratos e adaptadores;
- `apps/api` depende de aplicação, contratos e infraestrutura;
- domínio não depende de infraestrutura;
- adaptadores implementam interfaces definidas pelas camadas internas;
- nenhum pacote pode importar diretamente detalhes internos de outro pacote;
- imports circulares são proibidos.

## POO

- preferir composição a herança;
- entidades protegem invariantes;
- value objects são imutáveis;
- casos de uso coordenam domínio e portas;
- repositórios são interfaces, não classes de banco;
- controllers não possuem regra de negócio;
- cenas Phaser não possuem regra central;
- componentes React não possuem regra de avaliação;
- serviços de IA não decidem o veredito fora do motor determinístico.

## TDD

Para regras e correções:

1. RED — escrever teste que falha;
2. GREEN — implementar a menor mudança que faz passar;
3. REFACTOR — melhorar sem mudar comportamento.

Não considerar concluído sem:

- teste relevante;
- typecheck;
- lint;
- validação de contratos;
- atualização de documentação quando aplicável.

## Conteúdo técnico e IA

A IA interpreta, contextualiza e redige. A IA não pode:

- inventar resposta correta;
- criar pergunta ativa sem revisão;
- fabricar competência;
- alterar resultado do combate;
- decidir o veredito sem regras;
- selecionar asset inexistente;
- ignorar rubrica;
- confundir ausência de evidência com incompetência.

## Arte

- seguir o Design Book;
- pixel art real;
- resolução lógica 480x270;
- escala inteira 2x;
- personagens em canvas técnico 48x48;
- sem antialiasing;
- 75% técnico e 25% fantasia;
- nenhuma alteração silenciosa em asset `approved`;
- criar nova versão candidata;
- mostrar preview 1x e ampliado;
- não inventar estilo novo.

## Git e PR

- `main` protegida;
- branch curta por issue;
- padrão `tipo/MER-123-descricao`;
- PR obrigatório;
- squash merge;
- commits convencionais;
- issue do Linear vinculada;
- critérios de aceite no PR;
- não misturar múltiplas áreas sem necessidade.

## Qualidade

Cada entrega deve ser:

- verificável;
- pequena;
- testada;
- documentada;
- rastreável;
- reversível;
- coerente com o vertical slice;
- sem expandir escopo silenciosamente.

## Comunicação

Ao concluir uma tarefa, reportar:

- resumo;
- arquivos alterados;
- testes executados;
- resultado;
- riscos restantes;
- decisões tomadas;
- próximos passos que dependem de aprovação.



---

<!-- SOURCE: PROJECT-MAP.md -->

# Merge Quest — Mapa do Projeto

## 1. Visão

Merge Quest é uma experiência web gamificada em pixel art que transforma a preparação para uma vaga em uma jornada de exploração e batalhas de cartas.

- o perfil profissional gera o deck inicial;
- a descrição da vaga gera a torre e seus conflitos;
- perguntas rápidas geram consequências táticas;
- desafios de loja avaliam aplicação prática;
- o relatório final organiza aderências, evidências, treinamento e lacunas.

## 2. Princípio central

> O perfil define os recursos do jogador. A vaga define os conflitos da jornada.

O sistema não declara que uma pessoa “não sabe” algo apenas porque não encontrou evidência no perfil.

## 3. Fluxo

1. cadastro/login;
2. entrada e análise do perfil;
3. revisão do perfil estruturado;
4. entrada e análise da vaga;
5. revisão dos requisitos;
6. cruzamento perfil × vaga;
7. deck inicial;
8. geração da run;
9. exploração;
10. batalha;
11. perguntas e desafios;
12. chefe;
13. veredito e relatório.

## 4. Mecânicas canônicas

- exploração livre em salas top-down 3/4;
- grid 3x3 por lado;
- três pistas;
- comandante fora do grid;
- unidades entram por cartas;
- resolução determinística;
- Confiança como vida do jogador;
- perguntas dentro da batalha;
- 30 segundos por pergunta;
- desafios de loja de 10 minutos por tentativa;
- duas tentativas;
- chefes com duas fases;
- escolha de uma entre três recompensas;
- Recrutador como conflito final;
- relatório com `MERGED`, `CHANGES REQUESTED` ou `DRAFT`.

## 5. Stack e arquitetura

- monorepo;
- pnpm Workspaces;
- Turborepo;
- React + Vite;
- Phaser 3 montado na web;
- `game-core` TypeScript puro;
- API atrás de contratos;
- PostgreSQL/Supabase como baseline;
- IA acessada apenas via API;
- testes unitários, integração, E2E e visuais;
- pipeline Codex + Aseprite.

## 6. Direção visual

- pixel art intermediária;
- 480x270 ampliado para 960x540;
- 75% técnico e 25% fantasia;
- oficinas, laboratórios, arquivos e infraestrutura;
- cenários e personagens artesanais;
- UI técnica, modular e limpa;
- domínio aparece em 20–30% da composição;
- iluminação indica estável, instável, crítico e purificado;
- símbolo da marca: branches convergindo em merge.

## 7. Vertical slice

- um agrupamento de requisitos;
- Backend dominante e QA secundário;
- uma arquitetura;
- 5–6 salas;
- uma batalha comum;
- uma loja;
- um desafio;
- um chefe;
- um relatório resumido;
- duração-alvo de 12–18 minutos.

## 8. Equipe

- Eduardo: Phaser, sprites, animações, integração visual, QA E2E e entrega;
- Hahn: API, banco, auth, schemas, catálogo, checkpoints e sandbox;
- Guilherme: React, Design System, UX de IA, prompts e relatórios;
- testes e deploy da própria área permanecem com cada responsável.

## 9. Ordem operacional

1. árvore do monorepo;
2. revisão da árvore;
3. Linear;
4. vertical slice;
5. playtests;
6. MVP.



---

<!-- SOURCE: docs/product/01-product-vision-and-scope.md -->

# 01 — Visão do produto e escopo

## Problema

Candidatos frequentemente chegam a processos seletivos sem clareza sobre:

- quais requisitos já cobrem;
- quais lacunas são prioritárias;
- quais conhecimentos apenas declararam;
- quais conhecimentos conseguem aplicar;
- como estudar de forma direcionada.

## Proposta

Transformar a comparação entre perfil e vaga em uma experiência jogável, auditável e pedagógica.

## Público

- estudantes;
- pessoas em início de carreira;
- profissionais em transição;
- candidatos preparando-se para processos seletivos técnicos.

## Diferenciais

- o deck nasce do perfil;
- a torre nasce da vaga;
- conteúdo técnico é curado;
- IA não inventa a verdade técnica;
- aplicação prática tem peso maior que respostas rápidas;
- evidências são separadas de treinamento;
- relatório final evita falsas certezas.

## Escopo P0

- auth;
- perfil;
- vaga;
- análise;
- cruzamento;
- deck;
- uma run funcional;
- exploração;
- batalha;
- perguntas;
- loja;
- desafio;
- chefe;
- confiança;
- veredito;
- relatório;
- telemetria básica.

## Fora do P0

- ranking;
- perfil público;
- multiplayer;
- criação livre de cartas;
- geração técnica não revisada por IA;
- conteúdo profundo nas oito áreas;
- mobile completo;
- dez andares completos;
- editor avançado.



---

<!-- SOURCE: docs/product/02-functional-and-nonfunctional-requirements.md -->

# 02 — Requisitos funcionais e não funcionais

## Requisitos funcionais

### RF-01 — Autenticação

Permitir cadastro, login, logout, sessão e associação de runs ao usuário.

### RF-02 — Entrada e manutenção do perfil

Permitir texto livre e campos estruturados para competências, tecnologias, experiências, projetos, formação e interesses.

### RF-03 — Análise do perfil

Produzir competências normalizadas com:

- domínio;
- origem;
- evidência;
- contexto;
- estado;
- tags;
- incerteza.

O usuário deve revisar e confirmar.

### RF-04 — Entrada da vaga

Permitir colar, revisar e armazenar uma descrição de vaga.

### RF-05 — Análise da vaga

Identificar:

- requisitos obrigatórios;
- desejáveis;
- responsabilidades;
- tecnologias;
- senioridade;
- pesos;
- domínios;
- agrupamentos;
- dificuldade.

### RF-06 — Cruzamento perfil × vaga

Classificar cada requisito como:

- coberto;
- parcialmente coberto;
- competência transferível;
- em treinamento;
- não identificado;
- incerto.

### RF-07 — Deck inicial

Montar 15 cartas:

- 13 do perfil;
- até 2 de treinamento.

### RF-08 — Geração da run

Compor agrupamentos de requisitos, salas, encontros, perguntas, desafios, recompensas e chefe.

### RF-09 — Exploração

- movimento livre em quatro direções;
- colisões;
- salas fixas;
- portas;
- minimapa;
- interações;
- encontro físico com comandante.

### RF-10 — Combate

- grid aliado 3x3;
- grid inimigo 3x3;
- três pistas;
- mana;
- mão;
- deck;
- descarte;
- cartas;
- unidades;
- comandante;
- intenção parcial;
- resolução determinística.

### RF-11 — Perguntas

Quantidade:

- comum: 2;
- elite: 3;
- chefe: 4;
- Recrutador: 4.

Regras:

- 30 segundos;
- banco curado;
- correta/parcial/incorreta;
- efeito tático;
- sem dano direto;
- sem perda direta de Confiança;
- acessibilidade de tempo.

### RF-12 — Loja e desafio

- 10 minutos;
- duas tentativas;
- autosave;
- envio automático;
- rubrica;
- sandbox;
- recompensa reduzida na segunda tentativa.

### RF-13 — Confiança

- 10 segmentos;
- persiste no andar;
- zerar causa nocaute;
- recuperação parcial em eventos e chefe.

### RF-14 — Nocaute e replay

- mostrar erros;
- explicar conceitos;
- recomendar próximo passo;
- retornar ao checkpoint;
- evitar farm.

### RF-15 — Chefes

- duas fases;
- gatilho próprio;
- regra evolutiva;
- quatro perguntas;
- três recompensas;
- arena derivada da sala.

### RF-16 — Veredito

- `MERGED`;
- `CHANGES REQUESTED`;
- `DRAFT`.

Pesos:

- cobertura do perfil: 45%;
- perguntas: 15%;
- desafios: 25%;
- treinamento/evolução: 15%.

### RF-17 — Relatório

Mostrar aderências, evidências, treinamento, lacunas, atividades e recomendações.

### RF-18 — Persistência

Salvar checkpoints no fim de sala, batalha, andar, nocaute, recompensa e veredito.

## Requisitos não funcionais

### RNF-01 — Segurança

- segredos fora do repositório;
- sandbox;
- rede bloqueada no código do usuário;
- limite de tempo e memória;
- minimização de dados;
- logs seguros.

### RNF-02 — Acessibilidade

- teclado e mouse;
- foco visível;
- cor não é único indicador;
- redução de movimento;
- cronômetros configuráveis;
- texto ampliável.

### RNF-03 — Desempenho

- carregamento por atlas;
- nearest-neighbor;
- builds seletivos;
- animações aceleráveis;
- estado local durante combate.

### RNF-04 — Testabilidade

- game-core sem navegador;
- contratos versionados;
- testes unitários;
- integração;
- E2E;
- visual.

### RNF-05 — Auditabilidade

Cada evidência, pergunta e desafio registra versão, origem, competência, resultado, data e run.

### RNF-06 — Manutenibilidade

- camadas;
- dependência invertida;
- módulos pequenos;
- documentação próxima do código;
- nenhuma regra escondida em UI.



---

<!-- SOURCE: docs/product/03-game-design.md -->

# 03 — Game design canônico

## Loop principal

1. ler briefing;
2. explorar;
3. escolher rota;
4. enfrentar conflito;
5. responder perguntas;
6. receber recompensa;
7. resolver desafio opcional;
8. enfrentar chefe;
9. receber veredito.

## Exploração

- salas top-down 3/4;
- movimento livre;
- tela fixa por sala;
- sem combate de ação;
- um botão de interação;
- seis formatos de sala;
- três templates por formato;
- slots procedurais seguros;
- centro livre;
- props concentrados nas bordas.

## Arquiteturas

### Laboratório/Oficina

- metal;
- vidro;
- cabos;
- máquinas;
- bancadas;
- manutenção;
- produção.

### Fortaleza/Arquivo

- madeira técnica;
- pedra tratada;
- ferro;
- latão;
- estantes;
- trilhos;
- cofres;
- registros.

## Domínios

- Backend;
- Frontend;
- QA;
- Banco de Dados;
- Cloud;
- IA;
- Cyber;
- Mobile.

Cada agrupamento tem um domínio dominante e até um secundário.

## Combate

### Tabuleiro

- 3x3 aliado;
- 3x3 inimigo;
- três pistas;
- profundidade frente/meio/trás.

### Fonte de verdade

O `game-core` calcula o resultado. Animação não muda regra.

### Resolução

- cálculo simultâneo;
- apresentação esquerda → centro → direita;
- pista inimiga vazia causa dano direto ao comandante;
- avanço ocorre após a resolução;
- unidade que avança não ataca novamente no mesmo ciclo.

### Cartas

Sempre visível:

- custo;
- ataque;
- vida;
- nome;
- keyword;
- domínio;
- treinamento;
- arte.

### Arquétipos aliados

- Vanguard;
- Attacker;
- Support;
- Specialist.

### Funções inimigas

- Blocker;
- Aggressor;
- Saboteur;
- Anomaly.

## Confiança

- vida do jogador;
- 10 segmentos;
- estados estável, abalado e crítico;
- sem flashing agressivo.

## Perguntas

São microdesafios integrados ao combate.

Consequências possíveis:

- escudo;
- mana;
- compra;
- intenção oculta;
- custo temporário;
- slot temporariamente bloqueado;
- debuff leve;
- avanço de regra.

## Loja

Desafios aplicados:

- correção de função;
- debugging;
- code review;
- SQL;
- teste;
- decisão arquitetural;
- acessibilidade;
- segurança.

## Chefes

- fase 1;
- gatilho próprio;
- transição;
- fase 2;
- uma mecânica que evolui;
- recompensa entre três opções.

## Recrutador

Comandante final que sintetiza a vaga e a run. O resultado gera `MERGED`, `CHANGES REQUESTED` ou `DRAFT`.

## Duração-alvo

- comum: 3,5–5 min;
- elite: 5,5–8 min;
- chefe: 8–11 min;
- Recrutador: 9–13 min;
- vertical slice: 12–18 min;
- run completa: 60–90 min.



---

<!-- SOURCE: docs/product/04-ai-assessment-and-content.md -->

# 04 — IA, avaliação e conteúdo

## Princípio

> A IA escolhe, contextualiza e explica. O catálogo e o motor determinístico definem a verdade técnica.

## Pipeline do perfil

1. receber texto;
2. extrair itens;
3. normalizar termos;
4. classificar domínio;
5. registrar origem;
6. estimar nível de evidência;
7. marcar incerteza;
8. pedir confirmação.

## Pipeline da vaga

1. extrair requisitos;
2. separar obrigatório/desejável;
3. mapear domínio;
4. atribuir peso;
5. agrupar requisitos;
6. relacionar catálogo;
7. indicar lacunas de conteúdo;
8. pedir confirmação.

## Cruzamento

Saídas:

- aderência;
- cobertura parcial;
- competências transferíveis;
- treinamento;
- lacunas;
- deck;
- dificuldade;
- agrupamentos;
- requisitos avaliáveis.

## Evidências

Estados:

- contato inicial;
- em experimentação;
- em treinamento;
- prática demonstrada.

Não usar percentuais falsos de domínio.

## Catálogo editorial

Estados:

`RASCUNHO → REVISÃO TÉCNICA → APROVADO → ATIVO → ARQUIVADO`

Cada item registra:

- autor;
- revisor;
- versão;
- fonte;
- justificativa;
- dificuldade;
- domínio;
- competência;
- histórico.

## Perguntas

P0 completo:

- Backend: 16;
- Frontend: 16;
- QA: 16;
- Banco: 16;
- Cloud: 8;
- IA: 8;
- Cyber: 8;
- Mobile: 8.

## Desafios

P0 completo: 16 desafios.

## Limites da IA

Não pode:

- fabricar evidência;
- trocar resposta correta;
- ignorar rubrica;
- criar conteúdo ativo sem revisão;
- dar veredito fora dos pesos;
- interpretar ausência como incompetência;
- executar código fora do sandbox.



---

<!-- SOURCE: docs/design/05-visual-design-and-asset-rules.md -->

# 05 — Direção visual e regras de assets

## Direção

- 75% técnico;
- 25% fantasia;
- pixel art intermediária;
- base 480x270;
- escala 2x para 960x540;
- cenários e personagens artesanais;
- UI técnica, limpa e modular.

## Referências

- Brotato: simplicidade e escala;
- Enter the Gungeon: salas;
- Binding of Isaac: função dos layouts;
- Dead Cells: luz e impacto;
- 9 Kings: cartas;
- Terraria: tiles e oficinas;
- Undertale: restrição e vazio;
- Vampire Survivors: feedback.

## Regras anti-IA

- clusters intencionais;
- paleta limitada;
- poucos tons por material;
- sem pintura reduzida;
- sem ruído em toda superfície;
- poucos props grandes;
- sem texto falso embutido;
- nenhum detalhe impossível de reproduzir no Aseprite.

## Personagens

- canvas 48x48;
- herói visível aproximadamente 32x40;
- pivô nos pés;
- silhueta antes do detalhe;
- trabalhadores de infraestrutura fantástica;
- ferramentas reinterpretadas.

## Criaturas

- dados;
- arquivos;
- cabos;
- máquinas;
- bugs;
- estados quebrados;
- módulos incompatíveis.

## UI

- módulos retos;
- pequenos chanfros;
- branches;
- encaixes;
- convergência;
- poucos ornamentos;
- leitura rápida.

## Cartas

- formato vertical;
- módulo técnico;
- arte pixel;
- custo grande;
- stats legíveis;
- domínio;
- treinamento;
- qualidade por estrutura e selo.

## Estado do sistema

- estável;
- instável;
- crítico;
- purificado.

## Fluxo de aprovação

1. intenção;
2. exploração;
3. candidato;
4. validação;
5. aprovado.

Nunca sobrescrever `approved`. Criar versão candidata.

## Nome de arquivo

`hero-exploration-down-walk-v01.aseprite`

Exports:

- `.aseprite`;
- `.png`;
- `.json`;
- preview 1x;
- preview 8x.



---

<!-- SOURCE: docs/architecture/06-monorepo-and-repository-architecture.md -->

# 06 — Arquitetura do monorepo e dos repositórios

## Decisão

Um único monorepo com:

- pnpm Workspaces;
- Turborepo;
- documentação canônica;
- aplicações;
- pacotes;
- conteúdo;
- arte;
- tooling;
- infraestrutura;
- testes.

## Árvore proposta

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
├── tooling/
│   ├── aseprite/
│   ├── generators/
│   ├── validation/
│   └── linear/
├── infrastructure/
├── tests/
├── .agents/
│   └── skills/
├── AGENTS.md
├── PLANS.md
├── package.json
├── pnpm-workspace.yaml
└── turbo.json
```

## Responsabilidades

### apps/web

- shell React;
- auth;
- perfil;
- vaga;
- briefing;
- overlays;
- loja;
- relatório;
- montagem do Phaser.

### apps/api

Baseline atual: FastAPI + Python, isolado por contratos.

- auth server-side;
- persistência;
- catálogo;
- IA;
- avaliação;
- checkpoint;
- sandbox;
- telemetria.

Se a equipe alterar o framework, deve registrar ADR antes da implementação.

### packages/game-core

- estado;
- comandos;
- eventos;
- reducer;
- combate;
- progressão;
- recompensas;
- avaliação determinística;
- serialização;
- replay.

Sem React, Phaser, browser, banco ou SDK externo.

### packages/game-runtime

- Phaser;
- cenas;
- renderização;
- input;
- sprites;
- animação;
- áudio;
- adaptadores do game-core.

### packages/contracts

- schemas;
- DTOs;
- eventos;
- IDs;
- versões;
- validação compartilhada.

### packages/ui

- tokens;
- componentes;
- HUD;
- painéis;
- badges;
- nine-slice;
- tipografia.

### content

Conteúdo curado versionado em dados, nunca escondido em código de cena.

## CI

Em PR:

- lint;
- typecheck;
- testes afetados;
- schemas;
- conteúdo;
- assets;
- build seletivo.

## Git

- main protegida;
- branches curtas;
- PR;
- squash;
- commits convencionais;
- issue Linear vinculada.

## O que Codex deve fazer primeiro

- propor árvore;
- explicar fronteiras;
- criar scaffolding;
- não instalar tudo;
- não implementar;
- gerar auditoria;
- aguardar aprovação.



---

<!-- SOURCE: docs/engineering/07-poo-tdd-layered-architecture.md -->

# 07 — Arquitetura POO, TDD e em camadas

## 1. Objetivo

Aplicar POO e arquitetura em camadas sem transformar o projeto em um conjunto de classes artificiais.

O Merge Quest usa um modelo híbrido:

- POO para domínio, casos de uso, portas e adaptadores;
- funções puras/reducers para transições determinísticas do jogo;
- composição em vez de herança profunda;
- TDD para regras críticas.

## 2. Camadas

### 2.1 Domínio

Contém regras puras e conceitos do negócio.

Exemplos:

- `UserProfile`;
- `JobDescription`;
- `Competency`;
- `Run`;
- `Battle`;
- `CardDefinition`;
- `UnitInstance`;
- `Question`;
- `Challenge`;
- `Evidence`;
- `Verdict`.

Não conhece:

- HTTP;
- Supabase;
- React;
- Phaser;
- OpenAI;
- filesystem;
- framework.

### 2.2 Aplicação

Contém casos de uso que coordenam domínio e portas.

Exemplos:

- `AnalyzeProfile`;
- `AnalyzeJob`;
- `CompareProfileToJob`;
- `BuildInitialDeck`;
- `GenerateRun`;
- `StartBattle`;
- `AnswerQuestion`;
- `SubmitShopChallenge`;
- `CreateVerdict`;
- `SaveCheckpoint`.

### 2.3 Infraestrutura

Implementa portas.

Exemplos:

- `SupabaseProfileRepository`;
- `PostgresCatalogRepository`;
- `OpenAIProfileAnalyzer`;
- `SandboxChallengeRunner`;
- `FileAssetCatalog`;
- `TelemetryAdapter`.

### 2.4 Apresentação

- controllers FastAPI;
- componentes React;
- adaptadores Phaser;
- CLI e scripts;
- serialização externa.

Apresentação transforma entrada em comando e saída em view model. Não decide regra.

## 3. Dependência

```text
Presentation → Application → Domain
Infrastructure ────────────┘
```

A aplicação depende de interfaces. Infraestrutura implementa interfaces.

## 4. POO

### Entidades

Possuem identidade e protegem invariantes.

Exemplo:

```ts
class Run {
  private readonly id: RunId;
  private confidence: Confidence;
  private status: RunStatus;

  applyDamage(amount: PositiveInt): void {
    this.confidence = this.confidence.subtract(amount);
    if (this.confidence.isZero()) {
      this.status = RunStatus.KnockedOut;
    }
  }
}
```

### Value Objects

- imutáveis;
- validados na construção;
- comparados por valor.

Exemplos:

- `RunId`;
- `CompetencyId`;
- `Confidence`;
- `Mana`;
- `CardCost`;
- `DomainId`;
- `EvidenceLevel`.

### Serviços de domínio

Use quando uma regra não pertence naturalmente a uma entidade.

- `DeckCompositionPolicy`;
- `QuestionPenaltyPolicy`;
- `RewardQualityPolicy`;
- `VerdictPolicy`.

### Repositórios

Interfaces do domínio/aplicação:

```ts
interface RunRepository {
  findById(id: RunId): Promise<Run | null>;
  save(run: Run): Promise<void>;
}
```

Não retornar objetos crus do banco para o domínio.

### Herança

Evitar hierarquias profundas.

Preferir:

- composição;
- estratégias;
- policies;
- interfaces;
- dados + comportamento;
- factory.

Herança somente quando existe substituição real e estável.

## 5. Núcleo funcional determinístico

O combate pode usar reducer puro:

```ts
type GameCommand =
  | { type: "PLAY_CARD"; cardId: string; slot: Slot }
  | { type: "END_TURN" }
  | { type: "ANSWER_QUESTION"; optionId: string };

type GameResult = {
  state: GameState;
  events: GameEvent[];
};

function reduceGameCommand(
  state: GameState,
  command: GameCommand,
): GameResult;
```

POO envolve o domínio maior; o reducer garante replay, teste e determinismo.

## 6. TDD

### Ciclo

1. RED;
2. GREEN;
3. REFACTOR.

### Ordem de testes

#### Unidade

- value objects;
- policies;
- reducer;
- cálculo de dano;
- seleção de perguntas;
- pesos do veredito;
- checkpoint.

#### Integração

- application service + repository fake;
- API + banco;
- React + game-core;
- Phaser + game-core;
- IA + schema;
- sandbox.

#### E2E

- perfil;
- vaga;
- deck;
- batalha;
- pergunta;
- loja;
- chefe;
- relatório.

## 7. Exemplo de TDD

Requisito:

> resposta incorreta não causa dano direto nem reduz Confiança.

Teste:

```ts
it("aplica apenas penalidade tática em resposta incorreta", () => {
  const state = battleBuilder().withConfidence(7).build();

  const result = reduceGameCommand(state, {
    type: "ANSWER_QUESTION",
    optionId: "wrong",
  });

  expect(result.state.run.confidence).toBe(7);
  expect(result.events).toContainEqual(
    expect.objectContaining({ type: "QUESTION_PENALTY_APPLIED" }),
  );
});
```

Depois implemente o mínimo.

## 8. Convenção por aplicação

### web

```text
src/
├── presentation/
├── application/
├── infrastructure/
└── composition-root/
```

### api

```text
app/
├── domain/
├── application/
├── infrastructure/
├── presentation/
└── tests/
```

### game-core

```text
src/
├── domain/
├── application/
├── commands/
├── events/
├── policies/
├── serialization/
└── tests/
```

## 9. Anti-padrões proibidos

- regra em controller;
- regra em componente React;
- regra em cena Phaser;
- service genérico com centenas de métodos;
- DTO usado como entidade;
- repository retornando row do banco;
- mocks de tudo;
- teste que depende de animação;
- IA decidindo regra;
- herança por conveniência;
- singleton global de estado;
- import circular;
- classe sem invariantes apenas por “usar POO”.

## 10. Definition of Done arquitetural

- camada correta;
- dependência correta;
- teste primeiro ou teste de regressão;
- contrato atualizado;
- sem regra duplicada;
- sem import proibido;
- documentação local;
- PR explica o design.



---

<!-- SOURCE: docs/engineering/08-data-contracts-and-schemas.md -->

# 08 — Contratos e schemas

## Objetivo

Todos os dados que cruzam fronteiras devem possuir schema versionado.

## Entidades principais

- UserProfile;
- StructuredProfile;
- JobDescription;
- StructuredJob;
- Requirement;
- Competency;
- ProfileJobMatch;
- CardDefinition;
- Deck;
- Run;
- FloorCluster;
- Encounter;
- BattleState;
- Question;
- Challenge;
- Reward;
- Evidence;
- Verdict.

## Exemplo — pergunta

```json
{
  "id": "backend-auth-003",
  "version": 1,
  "status": "active",
  "domain": "backend",
  "competencyId": "backend.authorization",
  "difficulty": "basic",
  "timeLimitSeconds": 30,
  "options": [
    { "id": "A", "text": "..." },
    { "id": "B", "text": "..." }
  ],
  "correctOptionIds": ["B"],
  "partialOptionIds": [],
  "effects": {
    "correct": { "type": "REVEAL_INTENT" },
    "wrong": { "type": "ENEMY_SHIELD", "amount": 2 }
  },
  "explanation": "...",
  "sources": ["..."]
}
```

## Exemplo — carta

```json
{
  "id": "backend-log-analysis",
  "version": 1,
  "name": "Análise de Logs",
  "domain": "backend",
  "archetype": "specialist",
  "family": "control",
  "cost": 2,
  "attack": 1,
  "health": 3,
  "keyword": "reveal",
  "training": false,
  "assetId": "card-backend-log-analysis-v01"
}
```

## Regras

- IDs estáveis;
- versionamento explícito;
- enums canônicos;
- validação na borda;
- migrations;
- compatibilidade;
- schema não contém segredo;
- UI não infere regras ausentes;
- assetId deve existir;
- conteúdo ativo precisa estar aprovado.

## Eventos

- `PROFILE_ANALYZED`;
- `JOB_ANALYZED`;
- `DECK_CREATED`;
- `RUN_STARTED`;
- `CARD_PLAYED`;
- `QUESTION_RESOLVED`;
- `CHALLENGE_SUBMITTED`;
- `CONFIDENCE_CHANGED`;
- `BATTLE_FINISHED`;
- `CHECKPOINT_SAVED`;
- `VERDICT_CREATED`.

## Comandos

- `ANALYZE_PROFILE`;
- `ANALYZE_JOB`;
- `CREATE_DECK`;
- `ENTER_ROOM`;
- `START_ENCOUNTER`;
- `PLAY_CARD`;
- `END_TURN`;
- `ANSWER_QUESTION`;
- `SUBMIT_CHALLENGE`;
- `SELECT_REWARD`;
- `CREATE_VERDICT`.



---

<!-- SOURCE: docs/product/09-vertical-slice-and-acceptance.md -->

# 09 — Vertical slice e critérios de aceite

## Objetivo

Provar o fluxo completo, não o volume total do jogo.

## Escopo

### Entrada

- título;
- perfil simplificado;
- vaga;
- análise;
- deck;
- briefing.

### Andar

- Backend dominante;
- QA secundário;
- Laboratório/Oficina;
- 5–6 salas.

### Conteúdo

- uma batalha comum;
- duas perguntas;
- uma loja;
- um desafio;
- uma recompensa;
- um chefe de duas fases;
- quatro perguntas;
- relatório resumido.

## Assets mínimos

- herói;
- dois aliados;
- duas unidades inimigas;
- um comandante;
- um chefe derivado;
- um Lojista;
- uma arquitetura;
- tiles;
- props;
- cartas;
- HUD;
- cronômetros;
- efeitos.

## Critérios de aceite

### Fluxo

- jogável sem intervenção técnica;
- reinício sem limpeza manual;
- checkpoint funcional;
- relatório usa dados da run.

### Phaser

- movimento;
- colisão;
- portas;
- comandante físico;
- transição;
- grid;
- animações;
- resposta visual.

### React

- perfil;
- vaga;
- briefing;
- pergunta;
- desafio;
- recompensa;
- relatório.

### Core

- determinismo;
- replay;
- comandos;
- eventos;
- serialização;
- testes.

### API

- auth;
- persistência;
- catálogo;
- IA;
- checkpoint;
- desafio;
- relatório.

### Qualidade

- build em outra máquina;
- sem segredo;
- testes críticos;
- acessibilidade básica;
- duração 12–18 minutos.

## Fora

- elites;
- cinco andares;
- oito domínios profundos;
- seis comandantes;
- ranking;
- mobile completo.



---

<!-- SOURCE: docs/product/10-team-responsibilities.md -->

# 10 — Responsabilidades da equipe

## Eduardo

Lidera:

- Phaser;
- exploração;
- combate;
- sprites;
- animações;
- assets;
- integração visual;
- E2E;
- demo;
- coordenação da entrega.

Não é o único testador nem o único responsável por deploy.

## Hahn

Lidera:

- API;
- banco;
- auth;
- schemas;
- migrações;
- catálogo;
- persistência;
- checkpoints;
- sandbox;
- deploy backend.

## Guilherme

Lidera:

- React;
- Design System;
- UX;
- IA do ponto de vista de prompt e experiência;
- relatório;
- deploy frontend.

Chamadas de IA passam pela API.

## Compartilhado

- produto;
- curadoria;
- code review;
- integração;
- documentação;
- playtest;
- revisão do backlog.

## Handoffs

### Eduardo ↔ Guilherme

- eventos;
- overlays;
- pausa;
- snapshots;
- design tokens;
- responsividade.

### Hahn ↔ Guilherme

- DTOs;
- IA;
- auth;
- erros;
- relatórios.

### Hahn ↔ Eduardo

- checkpoint;
- run state;
- catálogo;
- comandos;
- eventos;
- persistência.



---

<!-- SOURCE: docs/product/11-roadmap-risks-and-definition-of-done.md -->

# 11 — Roadmap, riscos e Definition of Done

## Roadmap macro

### Fundação

- árvore;
- contratos;
- core;
- auth;
- catálogo;
- pipeline;
- conteúdo de exemplo.

### Core loop

- exploração;
- combate;
- pergunta;
- checkpoint;
- recompensa.

### Sistemas de apoio

- loja;
- desafio;
- chefe;
- relatório;
- evidência.

### Acabamento

- arte;
- animação;
- acessibilidade;
- telemetria;
- balanceamento;
- demo.

## Riscos

### Escopo

Mitigação: vertical slice e prioridades P0-VS/P0/P1/P2.

### Integração React/Phaser

Mitigação: eventos tipados e game-core como fonte de verdade.

### IA

Mitigação: catálogo, schema, rubrica e fallback.

### Conteúdo

Mitigação: começar com poucos domínios e itens revisados.

### Arte

Mitigação: modularidade, Aseprite, validação e levas.

### Carga de Eduardo

Mitigação: cada pessoa testa e publica sua área.

## Definition of Done geral

- issue vinculada;
- critérios de aceite;
- teste;
- lint/typecheck;
- documentação;
- sem segredo;
- revisão;
- integração verificada;
- sem escopo extra;
- evidência de conclusão.

## Prioridades

- P0-VS: necessário ao vertical slice;
- P0: necessário ao MVP;
- P1: importante depois do MVP;
- P2: futuro.



---

<!-- SOURCE: docs/linear/12-linear-bootstrap.md -->

# 12 — Bootstrap do Linear

## Regra

O Codex deve propor antes de criar.

## Initiative

`Merge Quest — Vertical Slice e MVP`

## Projects

1. Produto e requisitos;
2. UX/UI e Design Book;
3. Arquitetura e infraestrutura;
4. Frontend React;
5. Jogo Phaser;
6. Backend e banco;
7. IA e conteúdo técnico;
8. Arte e animação;
9. QA, acessibilidade e telemetria;
10. Demo e entrega.

## Milestones

- documentação canônica;
- protótipo navegável;
- vertical slice visual;
- combate funcional;
- exploração funcional;
- conteúdo técnico;
- integração;
- playtest;
- demo.

## Labels

### Área

- `area:product`;
- `area:design`;
- `area:react`;
- `area:phaser`;
- `area:backend`;
- `area:database`;
- `area:ai`;
- `area:art`;
- `area:content`;
- `area:qa`.

### Prioridade

- `priority:p0-vs`;
- `priority:p0`;
- `priority:p1`;
- `priority:p2`.

### Tipo

- `type:feature`;
- `type:bug`;
- `type:research`;
- `type:content`;
- `type:asset`;
- `type:tech-debt`;
- `needs-review`;
- `blocked`.

## Granularidade

Uma issue deve:

- representar entrega verificável;
- ter um responsável;
- caber em 1–2 dias;
- possuir critérios;
- listar dependências;
- apontar para documento;
- não misturar disciplinas.

## Primeira ação no Linear

1. inspecionar workspace;
2. propor estrutura;
3. aguardar aprovação;
4. criar estrutura;
5. criar backlog;
6. auditar;
7. não iniciar implementação.



---

<!-- SOURCE: docs/design/13-codex-aseprite-pipeline.md -->

# 13 — Pipeline Codex + Aseprite

## Objetivo

Automatizar produção e validação sem perder aprovação humana.

## Fluxo

1. ler contrato;
2. listar regras;
3. propor até três variações;
4. gerar script Lua;
5. criar `.aseprite`;
6. exportar PNG/JSON;
7. gerar previews;
8. validar;
9. abrir no Aseprite;
10. aguardar aprovação.

## Dez levas

1. herói;
2. cenários;
3. cartas, grid e HUD;
4. aliados;
5. inimigos;
6. comandantes;
7. chefes;
8. NPCs e salas especiais;
9. efeitos e transições;
10. polimento.

## Validação automática

- tamanho;
- transparência;
- paleta;
- tags;
- pivô;
- frames;
- nome;
- JSON;
- pixels semitransparentes;
- destino.

## Validação visual

- silhueta;
- luz;
- material;
- ausência de ruído;
- sem tremor;
- sem deslizamento;
- leitura 1x;
- coerência;
- fundo claro/escuro.

## Autonomia

Codex pode:

- criar no workspace;
- rodar scripts;
- exportar;
- validar;
- versionar.

Precisa confirmar:

- instalar;
- baixar;
- apagar;
- mover approved;
- alterar configuração;
- executar fora do projeto.



---

<!-- SOURCE: docs/architecture/14-decisions-and-open-questions.md -->

# 14 — Decisões canônicas e pontos abertos

## Decisões canônicas

- monorepo;
- pnpm + Turborepo;
- React shell;
- Phaser interno;
- game-core determinístico;
- IA atrás da API;
- PostgreSQL/Supabase baseline;
- arquitetura em camadas;
- POO com composição;
- TDD;
- conteúdo curado;
- vertical slice de um andar;
- direção visual aprovada;
- equipe dividida em três frentes.

## Pontos que não devem bloquear a árvore

- provedor final de deploy;
- ORM;
- biblioteca de estado React;
- biblioteca visual de teste;
- observabilidade;
- storage final.

## Ponto que exige ADR antes de implementar

O documento inicial usa FastAPI. A arquitetura mais recente preserva `apps/api` atrás de contratos. Se a equipe trocar o framework, registrar ADR e ajustar tooling antes de código de negócio.

## Decisões substituídas

- navegação somente entre salas → movimento livre dentro das salas;
- perguntas entre batalhas → perguntas dentro do combate;
- sem sandbox → sandbox para código;
- IA gerando verdade técnica → catálogo curado;
- slogan “Infraestrutura Inteligente” → removido da marca.



---

<!-- SOURCE: TREE-PROPOSAL.md -->

# Árvore proposta para o Codex revisar

```text
merge-quest/
├── apps/
│   ├── AGENTS.md
│   ├── web/
│   └── api/
├── packages/
│   ├── game-core/
│   │   └── AGENTS.md
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
│   ├── AGENTS.md
│   ├── source/
│   ├── exports/
│   ├── previews/
│   ├── references/
│   └── licenses/
├── docs/
│   ├── product/
│   ├── design/
│   ├── engineering/
│   ├── architecture/
│   │   └── adr/
│   ├── linear/
│   └── history/
├── tooling/
│   ├── aseprite/
│   ├── generators/
│   ├── validation/
│   └── linear/
├── infrastructure/
├── tests/
│   ├── integration/
│   ├── e2e/
│   └── visual/
├── .agents/
│   └── skills/
├── AGENTS.md
├── PLANS.md
├── README-FIRST.md
├── PROJECT-MAP.md
├── package.json
├── pnpm-workspace.yaml
└── turbo.json
```

A árvore é uma proposta. O Codex deve explicar ajustes antes de aplicá-los.



---

<!-- SOURCE: PROMPT-CODEX-FIRST-RUN.md -->

# Prompt para a primeira execução do Codex

Leia integralmente:

- `README-FIRST.md`;
- `AGENTS.md`;
- `PROJECT-MAP.md`;
- `docs/architecture/06-monorepo-and-repository-architecture.md`;
- `docs/engineering/07-poo-tdd-layered-architecture.md`;
- `docs/product/09-vertical-slice-and-acceptance.md`;
- `docs/linear/12-linear-bootstrap.md`.

Sua missão inicial é **propor e criar a árvore do repositório**, não implementar o produto.

## Antes de criar arquivos

1. Resuma o projeto.
2. Mostre a árvore proposta.
3. Explique responsabilidades e fronteiras.
4. Identifique decisões ainda abertas.
5. Liste comandos e dependências que pretende usar.
6. Aguarde aprovação.

## Após aprovação

1. Crie o scaffolding.
2. Copie os documentos canônicos.
3. Crie placeholders e READMEs locais.
4. Crie AGENTS.md locais apenas quando necessário.
5. Configure workspaces e Turbo sem instalar frameworks não aprovados.
6. Gere `docs/repository-bootstrap-report.md`.
7. Pare e aguarde revisão.

## Segunda missão

Depois da árvore aprovada, leia `docs/linear/12-linear-bootstrap.md`, proponha a estrutura do Linear e aguarde aprovação antes de criar qualquer item.

Não implemente features, sprites ou integrações nesta primeira execução.
