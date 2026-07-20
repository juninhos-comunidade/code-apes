# Matriz de isolamento — PRs abertos

Consulta realizada em 2026-07-20 contra `chore/phaser-4-arquitetura`.

## Paths bloqueados nesta branch

- `PROJECT-MAP.md`
- `README.md`
- `docs/architecture/14-decisions-and-open-questions.md`
- `docs/architecture/adr/ADR-0007-phaser-4.md`
- `docs/architecture/adr/README.md`
- `docs/architecture/merge-quest-system-architecture.png`
- `docs/architecture/merge-quest-system-architecture.svg`
- `packages/game-runtime/package.json`
- `pnpm-lock.yaml`

Também ficam bloqueados por decisão humana:

- `.agents/skills/game-setup-and-config/`
- `.agents/skills/game-object-components/`

## Gate

Antes de review e antes de publicar:

```powershell
$pr4Paths = git diff --name-only origin/main...origin/chore/phaser-4-arquitetura
$fixPaths = git diff --name-only origin/main...HEAD
Compare-Object $pr4Paths $fixPaths -IncludeEqual -ExcludeDifferent
```

A saída deve estar vazia. Qualquer path comum bloqueia commit, push e PR até ser removido do diff.

Como segunda defesa, nenhum path relacionado a Phaser listado acima pode ser editado, movido ou removido nesta sessão.

## Paths do PR #5 também bloqueados

- `docs/agents/sessions/2026-07-19-vertical-slice-replan/`
- `docs/linear/2026-07-20-vertical-slice-replan-audit.md`
- `docs/linear/canonical-docs-index.md`
- `docs/linear/proposals/2026-07-19-vertical-slice-replan.md`

A correção do link canônico já existe no PR #5 e não será duplicada nesta branch.
