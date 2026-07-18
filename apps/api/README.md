# API

Backend em Node.js + TypeScript com Fastify, Drizzle ORM, PostgreSQL/Supabase e SDK oficial da OpenAI, conforme ADR-0005.

- `domain`: conceitos exclusivos do backend sem dependências externas.
- `application`: casos de uso e portas.
- `infrastructure`: banco, IA, sandbox, telemetria e outros adaptadores.
- `presentation`: HTTP, validação de entrada e serialização externa.
- `tests`: integração da aplicação e seus adaptadores.

A API consome contratos versionados de `@merge-quest/contracts`. Controllers e adaptadores não contêm regras de negócio.

## Comandos

```powershell
pnpm --filter @merge-quest/api dev
pnpm --filter @merge-quest/api typecheck
pnpm --filter @merge-quest/api test
pnpm --filter @merge-quest/api lint
pnpm --filter @merge-quest/api build
```

Copie `.env.example` para `.env` somente quando for configurar serviços externos. O endpoint `GET /health` funciona sem credenciais.

Comandos `db:generate`, `db:check` e `db:migrate` exigem `DATABASE_URL`. Migrações nunca devem ser executadas em banco compartilhado sem confirmação.
