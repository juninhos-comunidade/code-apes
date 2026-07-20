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
- Phaser 4 montado na web;
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
