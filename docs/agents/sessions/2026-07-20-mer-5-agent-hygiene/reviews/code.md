# Review CODE — governança das skills externas

**Áreas:** `[mq:process]`, `[mq:qa]`, `[mq:docs]`
**Veredito:** APROVADO

## Evidências

- `computeVendoredTreeHash` usa SHA-256 sobre paths normalizados e bytes reais;
- teste altera uma fixture `SKILL.md` mantendo metadados intactos e confirma a detecção;
- testes do gate: 5/5;
- validador do repositório: passou;
- reprodutibilidade: 22/22;
- typecheck, testes do monorepo, lint e build: passaram fora do sandbox;
- `git diff --check`: passou;
- nenhuma mudança em `game-core`, React, runtime, API, banco, IA ou assets.

## Risco conhecido

`web-design-guidelines` não possui licença detectável no nível do repositório consultado. O inventário registra `UNKNOWN` e exige revisão de redistribuição, sem inventar licença.
