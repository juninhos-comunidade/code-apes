# Contribuindo com o Merge Quest

## Setup reproduzível

1. Instale Node.js `24.15.0` usando `.nvmrc` ou `.node-version`.
2. Ative pnpm `11.9.0` conforme `packageManager` da raiz.
3. Copie apenas os exemplos de ambiente necessários; nunca versione `.env`.
4. Execute `pnpm install --frozen-lockfile`.
5. Execute `pnpm verify` antes de abrir PR.

O health check e os testes locais não exigem Supabase nem OpenAI reais.

## Trabalho por área

- Eduardo: `packages/game-core`, `packages/game-runtime`, `art`, integração visual e E2E.
- Hahn: `apps/api`, persistência, Supabase, schemas, sandbox e backend.
- Guilherme: `apps/web`, `packages/ui`, UX de IA, prompts e relatórios.
- `packages/contracts`: mudança compartilhada; exige revisão das áreas consumidoras.
- `tooling`, integração e documentação: ownership compartilhado conforme a entrega.

Ownership não permite ignorar testes de integração nem alterar contratos unilateralmente.

## Comandos

```powershell
pnpm check:reproducibility
pnpm typecheck
pnpm test
pnpm lint
pnpm build
```

Ou, em um comando:

```powershell
pnpm verify
```

Para trabalhar somente na API:

```powershell
pnpm --filter @merge-quest/api dev
pnpm --filter @merge-quest/api test
```

## Banco e serviços externos

- não executar migração em ambiente compartilhado sem confirmação;
- não usar `SUPABASE_SERVICE_ROLE_KEY` no frontend;
- não realizar chamadas reais de IA em testes padrão;
- toda integração externa precisa de porta, adapter, timeout e fake;
- código de desafio nunca roda no processo Fastify.

## Git

- crie branch curta no padrão `tipo/MER-123-descricao` (IDs Linear do team Merge Quest);
- use commits convencionais;
- vincule a issue do Linear quando o backlog existir;
- abra PR com critérios de aceite e evidências dos checks;
- use squash merge.
