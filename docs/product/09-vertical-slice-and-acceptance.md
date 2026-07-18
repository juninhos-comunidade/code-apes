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
