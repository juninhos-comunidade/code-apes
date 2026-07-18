# Auditoria arquitetural da fundação da API

Data: 17 de julho de 2026
Resultado: aprovada; merge não bloqueado por arquitetura.

## Verificações aprovadas

- domínio e aplicação não importam Fastify, Drizzle, Supabase, OpenAI ou `pg`;
- `game-core` permanece sem dependências de infraestrutura;
- Fastify aparece apenas em apresentação e composition root;
- Drizzle e `pg` aparecem apenas no adapter de banco;
- Supabase aparece apenas no adapter de autenticação;
- OpenAI aparece apenas no adapter de IA;
- portas de autenticação e IA são definidas na camada de aplicação;
- credenciais são validadas apenas quando o adapter externo é solicitado;
- health check não depende de banco, Supabase ou OpenAI;
- Responses API exige JSON Schema e aplica parser de saída;
- não existe execução de sandbox dentro do processo HTTP.

## Testes e validações

- peer dependency check: aprovado;
- typecheck pelo Turborepo: aprovado;
- Vitest: 2 arquivos e 4 testes aprovados;
- ESLint: aprovado;
- build TypeScript: aprovado;
- scan de imports proibidos: aprovado.

## Falhas

Nenhuma no escopo desta fundação.

## Riscos restantes

- repositories e mappings só poderão ser auditados quando o primeiro schema de banco for aprovado;
- políticas RLS ainda não existem porque não há tabelas aprovadas;
- modelos e prompts OpenAI permanecem configuráveis e ainda precisam de casos de uso e avaliações;
- o sandbox continua deliberadamente fora deste processo e exige projeto próprio.

## Recomendação

Antes da primeira feature, aprovar contratos de perfil/vaga e o primeiro schema PostgreSQL com políticas RLS. Repetir esta auditoria em toda mudança de fronteira.
