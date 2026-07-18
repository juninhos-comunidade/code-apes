# Fundação da API TypeScript

## Objetivo

Integrar Fastify, Drizzle ORM, PostgreSQL/Supabase e o SDK oficial da OpenAI como infraestrutura inicial da API, preservando arquitetura em camadas e contratos testáveis.

## Contexto

A equipe aprovou Node.js + TypeScript no ADR-0004 e, em 17 de julho de 2026, aprovou Fastify, Drizzle, Supabase Auth/PostgreSQL e OpenAI Responses API.

## Fora do escopo

- criar projeto ou tabelas no Supabase;
- executar migrações em banco compartilhado;
- realizar chamadas pagas à OpenAI;
- implementar análise de perfil, vaga, combate ou relatório;
- implementar sandbox de código;
- configurar deploy.

## Arquivos afetados

- manifests e lockfile do pnpm;
- configuração TypeScript da raiz e de `apps/api`;
- composição, portas e adapters iniciais da API;
- exemplo de variáveis de ambiente;
- ADRs e documentação do bootstrap;
- testes de fumaça e de configuração.

## Dependências

- Fastify e integração Zod;
- Drizzle ORM, Drizzle Kit e driver PostgreSQL;
- cliente JavaScript do Supabase;
- SDK oficial `openai`;
- ferramentas de TypeScript, lint e teste já declaradas no monorepo.

## Plano por etapas

1. Registrar a decisão arquitetural.
2. Instalar dependências com pnpm.
3. Configurar TypeScript e scripts.
4. Criar portas internas e adapters de infraestrutura.
5. Criar servidor Fastify mínimo com health check técnico.
6. Validar ambiente sem contatar serviços externos.
7. Executar typecheck, lint, testes e build.
8. Auditar dependências e atualizar documentação.

## Critérios de aceite

- API compila e inicia sem exigir credenciais para o health check;
- configuração inválida falha com mensagem clara ao construir adapters externos;
- `game-core` permanece sem dependências externas;
- nenhuma chave é versionada;
- SDKs aparecem somente em infraestrutura/composition root;
- lockfile reproduzível criado;
- testes, typecheck, lint e build verdes.

## Estratégia de testes

- teste unitário da leitura de configuração;
- teste de injeção/composição do servidor Fastify;
- teste de health check com `inject`, sem porta de rede;
- verificação estática das fronteiras de dependência;
- nenhum teste chama Supabase ou OpenAI reais.

## Riscos e rollback

- incompatibilidade entre versões: remover dependência e restaurar lockfile/manifests;
- acoplamento de SDK: manter interfaces na camada de aplicação;
- duas fontes de schema: contratos HTTP/IA usam Zod; schema do banco fica na infraestrutura Drizzle;
- execução acidental externa: adapters são construídos apenas quando suas credenciais são solicitadas.

## Decisões abertas

- provedor de deploy;
- estratégia de pool/conexão do PostgreSQL por ambiente;
- modelo OpenAI por caso de uso;
- desenho das primeiras tabelas e políticas RLS;
- serviço isolado de sandbox.

## Registro de progresso

- 2026-07-17: stack aprovada pela equipe e plano iniciado.
- 2026-07-17: ADR-0005, dependências, lockfile e políticas do pnpm adicionados.
- 2026-07-17: Fastify, configuração, portas e adapters de Drizzle, Supabase e OpenAI integrados.
- 2026-07-17: peer dependencies, typecheck, 4 testes, lint e build aprovados pela raiz do Turborepo.
- 2026-07-17: auditoria arquitetural confirmou SDKs restritos a infraestrutura/apresentação; plano concluído.
