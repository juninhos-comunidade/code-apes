# Proposal — backlog quality 2026-07-18
**Status:** Applied 2026-07-18 — audit PASS 33/33  
**Creates:** MER-35 contratos · MER-36 grafo salas · MER-37 telemetria · MER-38 run lifecycle · MER-39 overlay pergunta  
**Issues updated:** MER-5, MER-8…MER-34 (+ parent MER-9→MER-8; Hahn blocked)

## MER-5 — Bootstrap agent workflow (harness + skills)
- assignee: Guilherme de Deus Dalosto
- labels: type:tech-debt, priority:p0, area:product

<details><summary>description</summary>

## Objetivo

Harness multi-agente mergeado no PR #1, com feedback loop e skills mapeadas.

## Escopo

**In:**
- ADR-0006 + spec + workflow
- skills merge-quest-* + mapa P0
- dry-runs honestos
- feedback loop disposition

**Out:**
- features de jogo
- Initiative UI

## Aceite (DoD)

- [ ] PR #1 mergeado em main
- [ ] docs/agents/CHANGELOG.md e Learnings disposition presentes
- [ ] skills-map lista in-repo + P0 externas + deny-list
- [ ] prefixo Linear canônico permanece MER-* (sem rename MQ)
- [ ] dry-runs Full/Light/Asset-Content com approvals/reviews

## Verify

- perfil: Session
- checks: review documental do PR; links sessão 2026-07-18-workflow-refinement

## Docs

- docs/agents/
- docs/skills-map.md
- docs/linear/naming.md
- ADR-0006

## Depende de

- nenhuma

## Blocks
- MER-32 (parcial — hygiene restante)

## Owner

Guilherme

## [mq:área]

`process`

</details>

## MER-8 — P0-VS — Vertical slice jogável (épico)
- assignee: Eduardo Neves de Souza
- labels: type:feature, priority:p0-vs, area:product

<details><summary>description</summary>

## Objetivo

Épico: vertical slice jogável 12–18 min cobrindo jornada Carta Magna + doc 09.

## Escopo

**In:**
- filhos MER-9…34 + gaps NEW
- DoD playtest doc 09

**Out:**
- 5 andares
- 8 domínios profundos
- mobile completo
- ranking

## Aceite (DoD)

- [ ] Fluxo perfil→vaga→deck→andar→combate→loja→chefe→veredito jogável sem intervenção técnica
- [ ] Checkpoint e reinício sem limpeza manual
- [ ] Relatório usa dados da run
- [ ] Filhos críticos Done ou waiver documentado
- [ ] Demo MER-31 atende duração 12–18 min

## Verify

- perfil: Release
- checks: playtest humano + delivery-gate Release

## Docs

- docs/product/09-vertical-slice-and-acceptance.md
- docs/product/11-roadmap-risks-and-definition-of-done.md

## Depende de

- nenhuma

## Blocks
- (nenhum explícito)

## Owner

Eduardo (coordenação)

## [mq:área]

`process`

</details>

## MER-9 — game-core — skeleton + primeiro teste TDD
- assignee: Eduardo Neves de Souza
- labels: type:feature, priority:p0-vs, area:product
- parentId: MER-8

<details><summary>description</summary>

## Objetivo

Pacote game-core puro com skeleton e primeiro teste TDD verde.

## Escopo

**In:**
- package boundary
- teste unitário mínimo
- export público tipado

**Out:**
- React/Phaser
- persistência
- IA SDK

## Aceite (DoD)

- [ ] Pacote existe e typecheck passa no pacote
- [ ] ≥1 teste unitário passando (Vitest)
- [ ] Nenhum import React/Phaser/DOM/DB/SDK IA
- [ ] README/AGENTS do pacote aponta ADR-0002
- [ ] CI local: pnpm test --filter game-core (ou equivalente)

## Verify

- perfil: Session
- checks: pnpm test no pacote game-core; rg imports proibidos

## Docs

- ADR-0002
- docs/engineering/07-poo-tdd-layered-architecture.md
- packages/game-core/AGENTS.md

## Depende de

- nenhuma

## Blocks
- MER-21
- MER-22

## Owner

Eduardo

## [mq:área]

`game-core`

</details>

## MER-10 — Design Book v1 (placeholder canônico)
- assignee: Eduardo Neves de Souza
- labels: type:asset, priority:p0-vs, area:art, area:design

<details><summary>description</summary>

## Objetivo

Design Book v1 canônico no repo para orientar arte e UI do VS.

## Escopo

**In:**
- arquivo canônico
- paleta/escala/pixel rules
- link em AGENTS/art-pipeline

**Out:**
- redesign de marca completo
- assets finais aprovados em massa

## Aceite (DoD)

- [ ] Arquivo canônico versionado (ex. docs/design/design-book.md)
- [ ] Alinha docs/design/05 + protótipo aprovado
- [ ] Referenciado por merge-quest-art-pipeline e MER-34
- [ ] Define 480×270, escala inteira, sem antialiasing
- [ ] Co-owners Eduardo + Guilherme registrados no corpo

## Verify

- perfil: Session
- checks: links quebrados; preview regras vs protótipo

## Docs

- docs/design/05-visual-design-and-asset-rules.md
- docs/design/13-codex-aseprite-pipeline.md

## Depende de

- nenhuma

## Blocks
- MER-34

## Owner

Eduardo + Guilherme (co-owners)

## [mq:área]

`art`

</details>

## MER-11 — Jornada — Perfil (RF-02..04)
- assignee: Guilherme de Deus Dalosto
- labels: type:feature, priority:p0-vs, area:ai, area:react

<details><summary>description</summary>

## Objetivo

Fluxo React de perfil simplificado (RF-02..04) alimentando a jornada VS.

## Escopo

**In:**
- form/tela perfil
- validação client
- contrato com API

**Out:**
- avaliação de competência no client
- perguntas inventadas

## Aceite (DoD)

- [ ] Tela perfil usável no shell React
- [ ] Validação Zod/schema alinhada ao contrato
- [ ] Dados enviados à API sem segredo no client
- [ ] Estados loading/error explícitos
- [ ] Sem regra de combate/veredito no componente

## Verify

- perfil: Delivery
- checks: testes UI ou RTL + typecheck apps/web

## Docs

- docs/product/09-vertical-slice-and-acceptance.md
- docs/product/04-ai-assessment-and-content.md

## Depende de

- MER-12
- MER-24

## Blocks
- MER-14

## Owner

Guilherme

## [mq:área]

`web`

</details>

## MER-12 — Jornada — Auth (RF-01)
- assignee: None
- labels: type:feature, priority:p0-vs, area:backend, blocked

<details><summary>description</summary>

## Objetivo

Auth RF-01 via API (Supabase Auth atrás de porta), sessão válida para o VS.

## Escopo

**In:**
- signup/login mínimo
- AuthGateway
- tokens protegidos no server

**Out:**
- OAuth social completo
- RBAC avançado

## Aceite (DoD)

- [ ] Endpoints auth documentados e validados Zod
- [ ] Sessão autenticada necessária para checkpoint/run
- [ ] Chaves só no server
- [ ] Testes com fake AuthGateway
- [ ] Issue marcada blocked até Hahn no workspace

## Verify

- perfil: Delivery
- checks: testes api auth + smoke MCP/local

## Docs

- ADR-0005
- docs/engineering/08-data-contracts-and-schemas.md

## Depende de

- nenhuma

## Blocks
- MER-11
- MER-13
- MER-25

## Owner

Hahn

## [mq:área]

`api`

</details>

## MER-13 — Jornada — Vaga (RF-05..07)
- assignee: Guilherme de Deus Dalosto
- labels: type:feature, priority:p0-vs, area:ai, area:react

<details><summary>description</summary>

## Objetivo

Fluxo React de vaga (RF-05..07) no shell.

## Escopo

**In:**
- tela vaga
- campos mínimos VS
- contrato API

**Out:**
- matching profundo multi-domínio

## Aceite (DoD)

- [ ] Tela vaga no shell
- [ ] Schema validado
- [ ] Persiste via API quando auth ok
- [ ] Loading/error
- [ ] Sem inventar requisitos de vaga via IA no client

## Verify

- perfil: Delivery
- checks: typecheck + teste UI/contrato

## Docs

- docs/product/09-vertical-slice-and-acceptance.md

## Depende de

- MER-12
- MER-24

## Blocks
- MER-14

## Owner

Guilherme

## [mq:área]

`web`

</details>

## MER-14 — Jornada — Cruzamento perfil × vaga
- assignee: Guilherme de Deus Dalosto
- labels: type:feature, priority:p0-vs, area:ai, area:product

<details><summary>description</summary>

## Objetivo

Cruzamento perfil×vaga com IA atrás da API; resultado estruturado validado.

## Escopo

**In:**
- use case AnalyzeProfile/Job
- UI de resultado
- fallback se IA falhar

**Out:**
- IA decide veredito/combate
- perguntas ativas inventadas

## Aceite (DoD)

- [ ] Chamada só via API gateway
- [ ] Resposta Zod-validada
- [ ] Fallback determinístico documentado
- [ ] UI mostra interpretação sem fabricar competência
- [ ] ADR-0003 respeitado

## Verify

- perfil: Delivery
- checks: testes use case com fake AIGateway

## Docs

- ADR-0003
- docs/product/04-ai-assessment-and-content.md

## Depende de

- MER-11
- MER-13
- MER-26

## Blocks
- MER-15

## Owner

Guilherme

## [mq:área]

`web`

</details>

## MER-15 — Jornada — Deck inicial + briefing
- assignee: Guilherme de Deus Dalosto
- labels: type:feature, priority:p0-vs, area:content, area:ai

<details><summary>description</summary>

## Objetivo

Deck inicial + briefing da run a partir do cruzamento (RF-09).

## Escopo

**In:**
- seleção/atribuição deck VS
- briefing UI
- estado inicial run

**Out:**
- metagame de crafting completo

## Aceite (DoD)

- [ ] Deck inicial determinístico a partir de inputs
- [ ] Briefing renderizado no React
- [ ] Estado inicial serializável (liga MER-35 run lifecycle)
- [ ] Sem regra de combate no React
- [ ] Conteúdo de cartas vem do catálogo (MER-30/29)

## Verify

- perfil: Delivery
- checks: teste de montagem deck + snapshot briefing

## Docs

- docs/product/09-vertical-slice-and-acceptance.md
- docs/product/03-game-design.md

## Depende de

- MER-14
- MER-30
- MER-35

## Blocks
- MER-16

## Owner

Guilherme

## [mq:área]

`web`

</details>

## MER-16 — Jornada — Exploração do andar VS
- assignee: Eduardo Neves de Souza
- labels: type:feature, priority:p0-vs, area:phaser

<details><summary>description</summary>

## Objetivo

Exploração Phaser do andar VS: movimento, colisão, portas, transição de salas.

## Escopo

**In:**
- movimento
- colisão
- portas
- transição
- integração grafo MER-36

**Out:**
- regra de dano na cena
- 5 andares

## Aceite (DoD)

- [ ] Herói move e colide
- [ ] Portas abrem/fecham com feedback
- [ ] Transição entre salas do grafo MER-36
- [ ] Input vira comandos tipados; core decide estado de exploração se aplicável
- [ ] Sem antialiasing; escala inteira

## Verify

- perfil: Delivery
- checks: smoke cena + testes adapter se houver

## Docs

- docs/product/09-vertical-slice-and-acceptance.md
- ADR-0002

## Depende de

- MER-9
- MER-27
- MER-36
- MER-34

## Blocks
- MER-17
- MER-18

## Owner

Eduardo

## [mq:área]

`runtime`

</details>

## MER-17 — Jornada — Combate card battler 3x3
- assignee: Eduardo Neves de Souza
- labels: type:feature, priority:p0-vs, area:phaser

<details><summary>description</summary>

## Objetivo

Batalha comum VS: grid 3x3 apresentado no runtime; resolução no game-core.

## Escopo

**In:**
- cena combate
- projeção eventos
- gancho perguntas MER-37

**Out:**
- cálculo de dano na cena
- IA altera HP

## Aceite (DoD)

- [ ] Grid 3x3 jogável visualmente
- [ ] Resolução exclusivamente via game-core (MER-23)
- [ ] Perguntas no combate via MER-37
- [ ] Recompensas aplicadas pelo core
- [ ] Replay/serialização não quebra após batalha

## Verify

- perfil: Delivery
- checks: teste core combate + smoke runtime

## Docs

- docs/product/03-game-design.md
- ADR-0002
- docs/product/09-vertical-slice-and-acceptance.md

## Depende de

- MER-23
- MER-28
- MER-29
- MER-37

## Blocks
- MER-19

## Owner

Eduardo

## [mq:área]

`runtime`

</details>

## MER-18 — Jornada — Loja + desafio aplicado
- assignee: Guilherme de Deus Dalosto
- labels: type:feature, priority:p0-vs, area:content, area:react

<details><summary>description</summary>

## Objetivo

Loja + desafio aplicado do VS (UI React + conteúdo MER-29).

## Escopo

**In:**
- UI loja
- fluxo desafio
- hooks API/catálogo

**Out:**
- economia completa multi-andar
- sandbox container (stretch se não P0)

## Aceite (DoD)

- [ ] Loja navegável no VS
- [ ] Desafio usa item de catálogo revisado
- [ ] Resultado Pass/Fail alimenta core/recompensa sem IA inventar
- [ ] Estados loading/error
- [ ] Sem regra de combate no React

## Verify

- perfil: Delivery
- checks: teste fluxo UI + contrato

## Docs

- docs/product/09-vertical-slice-and-acceptance.md
- ADR-0003

## Depende de

- MER-16
- MER-29
- MER-24

## Blocks
- (nenhum explícito)

## Owner

Guilherme

## [mq:área]

`web`

</details>

## MER-19 — Jornada — Chefe duas fases
- assignee: Eduardo Neves de Souza
- labels: type:feature, priority:p0-vs, area:phaser

<details><summary>description</summary>

## Objetivo

Chefe de duas fases no VS com perguntas e feedback visual.

## Escopo

**In:**
- duas fases
- transição
- perguntas (catálogo)
- projeção visual

**Out:**
- elites
- múltiplos chefes

## Aceite (DoD)

- [ ] Fase 1 e 2 jogáveis
- [ ] Transição de fase clara
- [ ] Resolução no game-core
- [ ] Perguntas do catálogo (não inventadas)
- [ ] Nocaute/checkpoint respeitam MER-25/35

## Verify

- perfil: Delivery
- checks: smoke chefe + testes core se regras novas

## Docs

- docs/product/09-vertical-slice-and-acceptance.md
- docs/product/03-game-design.md

## Depende de

- MER-17
- MER-23
- MER-29

## Blocks
- MER-20

## Owner

Eduardo

## [mq:área]

`runtime`

</details>

## MER-20 — Jornada — Veredito e relatório
- assignee: Guilherme de Deus Dalosto
- labels: type:feature, priority:p0-vs, area:ai, area:react

<details><summary>description</summary>

## Objetivo

Veredito determinístico no core + relatório React com dados da run (RF-19).

## Escopo

**In:**
- UI relatório
- consumo snapshot run
- copy IA só interpretação

**Out:**
- IA decide veredito
- ranking

## Aceite (DoD)

- [ ] Veredito calculado no game-core
- [ ] Relatório usa dados reais da run
- [ ] IA no máximo interpreta texto; não muda scores
- [ ] A11y básica na tela
- [ ] Export/print opcional não bloqueia DoD

## Verify

- perfil: Delivery
- checks: teste veredito core + UI relatório

## Docs

- ADR-0003
- docs/product/09-vertical-slice-and-acceptance.md

## Depende de

- MER-19
- MER-21
- MER-25

## Blocks
- MER-31

## Owner

Guilherme

## [mq:área]

`web`

</details>

## MER-21 — game-core — estado da run e Confiança
- assignee: Eduardo Neves de Souza
- labels: type:feature, priority:p0-vs, area:product

<details><summary>description</summary>

## Objetivo

Modelo de estado da run com Confiança como vida (RF-15).

## Escopo

**In:**
- entidades/VOs
- invariantes Confiança
- serialização estado

**Out:**
- UI
- persistência HTTP

## Aceite (DoD)

- [ ] Estado imutável/transições puras
- [ ] Confiança sobe/desce só via comandos tipados
- [ ] Testes TDD cobrindo bordas (0, max)
- [ ] Serialização round-trip
- [ ] Sem frameworks UI

## Verify

- perfil: Session
- checks: vitest game-core

## Docs

- ADR-0002
- PROJECT-MAP.md

## Depende de

- MER-9

## Blocks
- MER-23
- MER-20

## Owner

Eduardo

## [mq:área]

`game-core`

</details>

## MER-22 — game-core — comandos e eventos determinísticos
- assignee: Eduardo Neves de Souza
- labels: type:feature, priority:p0-vs, area:product

<details><summary>description</summary>

## Objetivo

Pipeline comando→evento determinístico consumível por React/Phaser.

## Escopo

**In:**
- tipos Command/Event
- execute(state,command)
- docs de contrato

**Out:**
- side-effects I/O

## Aceite (DoD)

- [ ] API tipada de comandos
- [ ] Eventos serializáveis
- [ ] Mesmo input → mesmo output (teste)
- [ ] Documentado para MER-27
- [ ] Sem I/O

## Verify

- perfil: Session
- checks: vitest determinismo

## Docs

- docs/engineering/08-data-contracts-and-schemas.md
- ADR-0002

## Depende de

- MER-9

## Blocks
- MER-23
- MER-27

## Owner

Eduardo

## [mq:área]

`game-core`

</details>

## MER-23 — game-core — combate 3x3 + serialização/replay
- assignee: Eduardo Neves de Souza
- labels: type:feature, priority:p0-vs, area:product

<details><summary>description</summary>

## Objetivo

Resolução de combate 3x3 + payload checkpoint/replay no core.

## Escopo

**In:**
- regras combate
- replay
- integração Confiança

**Out:**
- animações
- Phaser

## Aceite (DoD)

- [ ] Combate unit-tested
- [ ] Serialização round-trip
- [ ] Replay determinístico
- [ ] Integra com MER-21/22
- [ ] Nenhuma dependência UI

## Verify

- perfil: Delivery
- checks: vitest combate+replay

## Docs

- docs/product/03-game-design.md
- docs/product/09-vertical-slice-and-acceptance.md
- ADR-0002

## Depende de

- MER-21
- MER-22

## Blocks
- MER-17
- MER-19

## Owner

Eduardo

## [mq:área]

`game-core`

</details>

## MER-24 — React — shell + Design System mínimo
- assignee: Guilherme de Deus Dalosto
- labels: type:feature, priority:p0-vs, area:react, area:design

<details><summary>description</summary>

## Objetivo

Shell React + DS mínimo para montar Phaser e fluxos VS.

## Escopo

**In:**
- app shell
- tokens/DS mínimo
- mount Phaser
- rotas base

**Out:**
- design system completo
- regra de combate

## Aceite (DoD)

- [ ] App sobe localmente
- [ ] Phaser monta dentro do shell
- [ ] Tokens básicos alinhados Design Book
- [ ] Rotas para perfil/vaga/briefing/relatório
- [ ] A11y básica navegação

## Verify

- perfil: Delivery
- checks: pnpm dev web + typecheck

## Docs

- docs/product/09-vertical-slice-and-acceptance.md
- docs/design/05-visual-design-and-asset-rules.md

## Depende de

- MER-10

## Blocks
- MER-11
- MER-13
- MER-27

## Owner

Guilherme

## [mq:área]

`web`

</details>

## MER-25 — API — persistência perfil/vaga/run/checkpoint
- assignee: None
- labels: type:feature, priority:p0-vs, area:database, area:backend, blocked

<details><summary>description</summary>

## Objetivo

Persistência Drizzle/Supabase para perfil, vaga, run e checkpoints.

## Escopo

**In:**
- migrations
- RunRepository
- checkpoint fim sala/andar/nocaute

**Out:**
- analytics warehouse

## Aceite (DoD)

- [ ] Migrações versionadas
- [ ] Checkpoint nos pontos do VS
- [ ] Testes com fakes (sem cloud obrigatório)
- [ ] Portas sem vazar SQL no domain
- [ ] blocked até Hahn

## Verify

- perfil: Delivery
- checks: testes integration com sqlite/fake

## Docs

- ADR-0005
- docs/engineering/08-data-contracts-and-schemas.md

## Depende de

- MER-12
- MER-38

## Blocks
- MER-16
- MER-17
- MER-31

## Owner

Hahn

## [mq:área]

`api`

</details>

## MER-26 — API — adapters IA + validação Zod
- assignee: None
- labels: type:feature, priority:p0-vs, area:ai, area:backend, blocked

<details><summary>description</summary>

## Objetivo

AIGateway + adapters OpenAI com validação Zod e fallback.

## Escopo

**In:**
- porta AIGateway
- adapter
- schemas
- fallback

**Out:**
- IA no client
- IA decide veredito

## Aceite (DoD)

- [ ] Toda IA atrás da API
- [ ] Zod na boundary
- [ ] Fallback testado
- [ ] Logs sem vazar segredo
- [ ] ADR-0003 checklist no PR

## Verify

- perfil: Delivery
- checks: unit adapter fake + schema tests

## Docs

- ADR-0003
- ADR-0004
- docs/engineering/08-data-contracts-and-schemas.md

## Depende de

- MER-38

## Blocks
- MER-14

## Owner

Hahn

## [mq:área]

`api`

</details>

## MER-27 — Contrato React ↔ Phaser (eventos tipados)
- assignee: Eduardo Neves de Souza
- labels: type:feature, priority:p0-vs, area:phaser, area:react

<details><summary>description</summary>

## Objetivo

Contrato tipado de eventos/comandos entre React shell e Phaser runtime.

## Escopo

**In:**
- tipos compartilhados
- bridge
- pausa/retomada
- snapshots

**Out:**
- acesso a estado interno cross-side

## Aceite (DoD)

- [ ] Eventos tipados documentados
- [ ] Nenhum lado acessa estado interno do outro
- [ ] Pausa/retomada funciona
- [ ] Alinha a MER-22 comandos/eventos
- [ ] Teste de contrato ou type-level check

## Verify

- perfil: Delivery
- checks: typecheck + teste bridge

## Docs

- docs/product/10-team-responsibilities.md
- docs/engineering/08-data-contracts-and-schemas.md

## Depende de

- MER-22
- MER-24
- MER-38

## Blocks
- MER-16
- MER-17

## Owner

Eduardo

## [mq:área]

`runtime`

</details>

## MER-28 — Phaser — grid, comandante e resposta visual
- assignee: Eduardo Neves de Souza
- labels: type:feature, priority:p0-vs, area:phaser

<details><summary>description</summary>

## Objetivo

Apresentação visual: grid, comandante físico, feedbacks de combate.

## Escopo

**In:**
- grid visual
- comandante
- VFX/feedback
- assets MER-34

**Out:**
- regras de dano
- pathfinding complexo stretch

## Aceite (DoD)

- [ ] Grid renderiza 3x3
- [ ] Comandante físico presente na exploração/combate conforme doc 09
- [ ] Feedback visual de acerto/erro/seleção
- [ ] Sem regra de resolução na cena
- [ ] Assets approved/candidatos sem overwrite silencioso

## Verify

- perfil: Delivery
- checks: smoke visual 1x e 2x

## Docs

- docs/product/09-vertical-slice-and-acceptance.md
- ADR-0002

## Depende de

- MER-34
- MER-23

## Blocks
- MER-17

## Owner

Eduardo

## [mq:área]

`runtime`

</details>

## MER-29 — Conteúdo — MCQs + desafio loja + rubrica VS
- assignee: Guilherme de Deus Dalosto
- labels: type:content, priority:p0-vs, area:content

<details><summary>description</summary>

## Objetivo

MCQs, desafio de loja e rubrica curados para o VS (status review→active).

## Escopo

**In:**
- 2 perguntas batalha comum
- 4 perguntas chefe
- 1 desafio loja
- rubrica

**Out:**
- perguntas ativas inventadas por IA
- banco infinito

## Aceite (DoD)

- [ ] Itens no schema do catálogo
- [ ] Status draft/review/active explícito
- [ ] Humano libera active
- [ ] Rubrica verificável
- [ ] ADR-0003: IA não inventa resposta correta

## Verify

- perfil: Session
- checks: validador de catálogo + review checklist

## Docs

- docs/product/04-ai-assessment-and-content.md
- ADR-0003
- docs/product/09-vertical-slice-and-acceptance.md

## Depende de

- MER-30

## Blocks
- MER-17
- MER-18
- MER-19
- MER-37

## Owner

Guilherme

## [mq:área]

`content`

</details>

## MER-30 — Conteúdo — catálogo Backend do andar VS
- assignee: None
- labels: type:content, priority:p0-vs, area:content, blocked

<details><summary>description</summary>

## Objetivo

Catálogo técnico domínio Backend para o andar VS.

## Escopo

**In:**
- itens catálogo Backend
- competências mínimas
- schema

**Out:**
- 8 áreas profundas

## Aceite (DoD)

- [ ] Catálogo Backend versionado no repo/DB
- [ ] Schema validado
- [ ] Sem perguntas active sem review
- [ ] Servido via API
- [ ] blocked até Hahn (persistência/API) com Guilherme na curadoria

## Verify

- perfil: Delivery
- checks: schema validate + seed load

## Docs

- docs/product/04-ai-assessment-and-content.md
- docs/product/09-vertical-slice-and-acceptance.md

## Depende de

- MER-25
- MER-38

## Blocks
- MER-29
- MER-15

## Owner

Hahn (API) + Guilherme (curadoria)

## [mq:área]

`content`

</details>

## MER-31 — Demo — playtest 12–18 min + DoD
- assignee: Eduardo Neves de Souza
- labels: type:feature, priority:p0-vs, area:qa, area:product

<details><summary>description</summary>

## Objetivo

Playtest demo 12–18 min cumprindo DoD do vertical slice.

## Escopo

**In:**
- roteiro playtest
- checklist doc 09/11
- gravação notas

**Out:**
- polish infinito

## Aceite (DoD)

- [ ] Run completa 12–18 min
- [ ] Sem intervenção técnica
- [ ] Reinício limpo
- [ ] Relatório coerente
- [ ] Checklist DoD assinado na issue

## Verify

- perfil: Release
- checks: playtest humano + notes anexadas

## Docs

- docs/product/09-vertical-slice-and-acceptance.md
- docs/product/11-roadmap-risks-and-definition-of-done.md

## Depende de

- MER-20
- MER-33
- MER-25

## Blocks
- (nenhum explícito)

## Owner

Eduardo

## [mq:área]

`qa`

</details>

## MER-32 — Linear — higiene pós-população (Hahn, Initiative, audit)
- assignee: Guilherme de Deus Dalosto
- labels: type:tech-debt, priority:p0, area:product

<details><summary>description</summary>

## Objetivo

Higiene workspace Linear pós-população sem rename MER→MQ.

## Escopo

**In:**
- Hahn invite
- Initiative UI
- audit coerente

**Out:**
- rename identifier MQ

## Aceite (DoD)

- [ ] Hahn convidado
- [ ] Initiative criada e vinculada
- [ ] Assignees API revisados
- [ ] Audit docs atualizados
- [ ] Prefixo permanece MER-*

## Verify

- perfil: Session
- checks: list_users + list_projects vs docs

## Docs

- docs/linear/naming.md
- docs/linear/2026-07-18-population-audit.md

## Depende de

- nenhuma

## Blocks
- (nenhum explícito)

## Owner

Guilherme

## [mq:área]

`process`

</details>

## MER-33 — QA — build reprodutível + testes críticos
- assignee: Eduardo Neves de Souza
- labels: type:feature, priority:p0-vs, area:qa

<details><summary>description</summary>

## Objetivo

Build reprodutível e suíte crítica (unit/integration) para o VS.

## Escopo

**In:**
- scripts turbo/pnpm
- testes críticos
- sem segredo no repo

**Out:**
- cobertura 100%
- farm E2E completo

## Aceite (DoD)

- [ ] Build documentado em outra máquina/clean CI
- [ ] Testes críticos game-core+contratos verdes
- [ ] Sem segredos commitados
- [ ] Gate Session/Delivery documentado
- [ ] A11y smoke básico listado

## Verify

- perfil: Delivery
- checks: pnpm test + pnpm build (ou turbo)

## Docs

- docs/engineering/15-local-development-and-reproducibility.md
- merge-quest-delivery-gate

## Depende de

- MER-9

## Blocks
- MER-31

## Owner

Eduardo

## [mq:área]

`qa`

</details>

## MER-34 — Arte — assets mínimos do vertical slice
- assignee: Eduardo Neves de Souza
- labels: type:asset, priority:p0-vs, area:art

<details><summary>description</summary>

## Objetivo

Produzir/exportar assets mínimos doc 09 via pipeline Aseprite.

## Escopo

**In:**
- herói
- 2 aliados
- 2 inimigos
- comandante
- chefe
- lojista
- tiles/props/cartas/HUD/cronômetros/efeitos

**Out:**
- overwrite approved silencioso
- estilo novo fora Design Book

## Aceite (DoD)

- [ ] Lista doc 09 exportada
- [ ] Preview 1x e ampliado
- [ ] Validators pipeline ok
- [ ] Sem overwrite approved
- [ ] Design Book MER-10 respeitado

## Verify

- perfil: Delivery
- checks: art-pipeline validators + previews

## Docs

- docs/product/09-vertical-slice-and-acceptance.md
- docs/design/13-codex-aseprite-pipeline.md

## Depende de

- MER-10

## Blocks
- MER-28
- MER-16

## Owner

Eduardo

## [mq:área]

`art`

</details>

## NEW-35 — Jornada — Run lifecycle (RF-10 start/end/reinício)
- assignee: Guilherme de Deus Dalosto
- labels: type:feature, priority:p0-vs, area:product
- CREATE project=Produto e requisitos parent=MER-8

<details><summary>description</summary>

## Objetivo

Ciclo de vida da run: start, end, reinício sem limpeza manual (RF-10).

## Escopo

**In:**
- StartRun/EndRun
- reset determinístico
- hooks API checkpoint

**Out:**
- multi-run meta progression

## Aceite (DoD)

- [ ] Comando/use-case StartRun e EndRun definidos
- [ ] Reinício limpa estado sem passo manual externo
- [ ] Integra MER-21 estado + MER-25 persistência
- [ ] Testes de lifecycle
- [ ] Documentado no contrato MER-38

## Verify

- perfil: Delivery
- checks: testes application + core state

## Docs

- docs/product/09-vertical-slice-and-acceptance.md
- docs/history/pdf-extraction-2026-07-18.md

## Depende de

- MER-21
- MER-22
- MER-25

## Blocks
- MER-15
- MER-31

## Owner

Guilherme (orquestração) + Eduardo (core)

## [mq:área]

`game-core`

</details>

## NEW-36 — Jornada — Grafo de salas do andar VS (Lab/Oficina/Backend)
- assignee: Eduardo Neves de Souza
- labels: type:feature, priority:p0-vs, area:phaser
- CREATE project=Jogo Phaser parent=MER-8

<details><summary>description</summary>

## Objetivo

Grafo de 5–6 salas do andar VS incluindo Lab, Oficina e Backend dominante.

## Escopo

**In:**
- definição salas
- edges/portas
- conteúdo por sala

**Out:**
- elites
- andares extras

## Aceite (DoD)

- [ ] Grafo documentado e consumível pelo runtime
- [ ] Lab e Oficina presentes
- [ ] Backend dominante no VS
- [ ] Transições testáveis
- [ ] Sem regra de combate no grafo

## Verify

- perfil: Session
- checks: fixture grafo + smoke exploração

## Docs

- docs/product/09-vertical-slice-and-acceptance.md

## Depende de

- MER-9

## Blocks
- MER-16

## Owner

Eduardo

## [mq:área]

`runtime`

</details>

## NEW-37 — Jornada — Overlay de pergunta no combate (cronômetro)
- assignee: Guilherme de Deus Dalosto
- labels: type:feature, priority:p0-vs, area:react, area:phaser
- CREATE project=Frontend React parent=MER-8

<details><summary>description</summary>

## Objetivo

Overlay React de pergunta cronometrada durante combate, sem resolver regras no UI.

## Escopo

**In:**
- overlay pergunta
- cronômetro
- bridge React↔Phaser
- itens MER-29

**Out:**
- IA gera pergunta active

## Aceite (DoD)

- [ ] Pergunta aparece no combate comum/chefe
- [ ] Cronômetro visível
- [ ] Resposta vira comando tipado; core/avalia via rubrica
- [ ] Pausa Phaser coerente (MER-27)
- [ ] Conteúdo só do catálogo active

## Verify

- perfil: Delivery
- checks: teste bridge + smoke combate com pergunta

## Docs

- docs/product/09-vertical-slice-and-acceptance.md
- ADR-0003

## Depende de

- MER-27
- MER-29
- MER-24

## Blocks
- MER-17

## Owner

Guilherme

## [mq:área]

`web`

</details>

## NEW-38 — Contratos — DTOs/Zod compartilhados (web↔api↔runtime)
- assignee: Guilherme de Deus Dalosto
- labels: type:feature, priority:p0-vs, area:product
- CREATE project=Arquitetura e infraestrutura parent=MER-8

<details><summary>description</summary>

## Objetivo

Pacote de contratos versionados (DTOs/Zod) compartilhados entre web, api e eventos runtime.

## Escopo

**In:**
- package contracts
- versionamento
- schemas perfil/vaga/run/eventos

**Out:**
- lógica de negócio no pacote

## Aceite (DoD)

- [ ] Pacote sem React/Phaser/DB
- [ ] Schemas Zod exportados
- [ ] Consumido por api e web
- [ ] Alinha comandos/eventos MER-22
- [ ] Typecheck dos consumidores

## Verify

- perfil: Session
- checks: pnpm typecheck filters contracts/web/api

## Docs

- docs/engineering/08-data-contracts-and-schemas.md
- ADR-0002

## Depende de

- nenhuma

## Blocks
- MER-25
- MER-26
- MER-27

## Owner

Guilherme

## [mq:área]

`docs`

</details>

## NEW-39 — QA — Telemetria mínima do VS (sala/combate/relatório)
- assignee: Eduardo Neves de Souza
- labels: type:feature, priority:p0-vs, area:qa
- CREATE project=QA, acessibilidade e telemetria parent=MER-8

<details><summary>description</summary>

## Objetivo

Eventos mínimos de telemetria: sala, combate, relatório — sem PII sensível.

## Escopo

**In:**
- event schema
- emit points
- docs

**Out:**
- analytics product completo

## Aceite (DoD)

- [ ] Schema de eventos documentado
- [ ] Emite em transição de sala, fim combate, veredito
- [ ] Sem PII/segredo
- [ ] Pode ser no-op/local sink no VS
- [ ] Teste unitário do emitter

## Verify

- perfil: Session
- checks: unit emitter + sample log

## Docs

- docs/product/09-vertical-slice-and-acceptance.md

## Depende de

- MER-22
- MER-33

## Blocks
- (nenhum explícito)

## Owner

Eduardo

## [mq:área]

`qa`

</details>

