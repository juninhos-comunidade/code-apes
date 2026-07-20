# ADR-0007 — Phaser 4 como adaptador visual

## Status

Aceita em 19 de julho de 2026, revisável após o primeiro spike visual.

## Contexto

O scaffolding foi criado com Phaser 3.90.0, mas ainda não existem cenas, shaders,
pipelines ou plugins de jogo implementados. O Phaser 4 já possui versão estável e
troca o renderer WebGL por uma arquitetura de render nodes, além de alterar filtros,
máscaras, iluminação, câmeras e shaders.

Migrar antes do vertical slice custa menos do que manter código novo sobre APIs do
Phaser 3 e convertê-lo depois.

## Decisão

- `game-runtime` usará Phaser `4.2.0` com versão exata durante a fundação.
- Phaser continua sendo somente um adaptador visual e de input.
- `game-core` continua como fonte de verdade determinística da run.
- React e Phaser se comunicam com a aplicação por comandos, eventos e snapshots tipados.
- Nenhuma regra de combate, progressão ou veredito pode morar em cenas Phaser.
- A adoção será reavaliada após um spike cobrindo montagem React/Vite, pixel art,
  escala inteira, tilemap, input, áudio e build de produção.

## Consequências

- novas cenas e efeitos devem usar as APIs do Phaser 4;
- exemplos e skills de Phaser 3 não são fonte canônica para implementação;
- pipelines, shaders, FX, máscaras e plugins legados exigem verificação de compatibilidade;
- a versão fica fixa até que atualizações sejam verificadas pelo pipeline;
- trocar Phaser futuramente não altera `game-core` nem os casos de uso, desde que os
  contratos de comandos, eventos e snapshots sejam preservados.

## Critério de reversão

Retornar ao Phaser 3 ou avaliar outro renderer se o spike demonstrar bloqueio em
pixel art, áudio, tilemaps, navegadores-alvo ou integração com React/Vite.
