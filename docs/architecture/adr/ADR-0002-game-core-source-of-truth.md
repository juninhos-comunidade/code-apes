# ADR-0002 — game-core como fonte de verdade

## Status

Aprovado.

## Decisão

Estado e regras do jogo pertencem ao `game-core`.

## Consequências

- React e Phaser são adaptadores;
- animação não muda resultado;
- replay é possível;
- testes não exigem navegador;
- persistência usa snapshots.
