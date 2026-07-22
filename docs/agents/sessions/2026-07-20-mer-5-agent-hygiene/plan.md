# Plano — governança das skills externas

**Trilha:** Full
**linearIssues:** MER-5

## Fatias

### 1. Inventário `[mq:process]` — MER-5

- adicionar `docs/agents/external-skills-inventory.json`;
- manter `skills-lock.json` e todas as skills intactos;
- registrar licenças desconhecidas como pendência explícita.

### 2. Gate `[mq:qa]` — MER-5

- validar paridade entre lock, inventário e diretórios;
- testar caminho válido, diretório não rastreado, drift de hash e licença desconhecida;
- integrar ao check de reprodutibilidade.

### 3. Documentação `[mq:docs]` — MER-5

- reconciliar a spec com a vendorização governada;
- documentar o inventário e atualização conjunta;
- incluir comandos PowerShell e POSIX.

## Restrições

- nenhuma exclusão ou edição dentro de `.agents/skills/`;
- nenhum path dos PRs #4 e #5;
- nenhuma mudança de Phaser, produto, arquitetura ou Linear.

## Gates

- testes do validador;
- `pnpm check:reproducibility`;
- `git diff --check`;
- matriz de interseção vazia contra PRs #4 e #5;
- review em dois eixos.
