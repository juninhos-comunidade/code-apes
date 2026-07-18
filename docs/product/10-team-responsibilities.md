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

Fonte alinhada: `sources/merge-quest-matriz-de-responsabilidades-v1.1.pdf` + Linear (issue de contrato React↔Phaser).

### Eduardo ↔ Guilherme

- eventos tipados React↔Phaser;
- overlays;
- pausa/retomada;
- snapshots;
- design tokens;
- responsividade;
- nenhum lado acessa estado interno do outro.

### Hahn ↔ Guilherme

- DTOs versionados;
- execução de IA só na API (chaves protegidas);
- auth;
- erros padronizados;
- loading/validação;
- relatórios.

### Hahn ↔ Eduardo

- checkpoint;
- run state;
- catálogo → mecânicas;
- comandos/eventos;
- persistência.

### Regras da matriz

- Eduardo coordena E2E/demo, mas **não** é o único testador.
- Phaser **não** é fonte de verdade (ADR-0002).
- Deploy: Hahn backend, Guilherme frontend, Eduardo valida ambiente integrado.
