# ADR-0005 — Stack de infraestrutura da API

## Status

Aceita em 17 de julho de 2026.

## Contexto

A API precisa oferecer contratos tipados, persistência PostgreSQL, autenticação, integração de IA e futura execução isolada de desafios sem permitir que frameworks ou SDKs contaminem o domínio.

## Decisão

- Fastify será o adaptador HTTP em Node.js.
- Zod validará contratos nas bordas.
- Drizzle ORM implementará persistência PostgreSQL atrás de repositories.
- Supabase fornecerá PostgreSQL e Auth; Storage será adotado apenas quando houver caso de uso.
- O frontend usará Supabase diretamente apenas para autenticação; dados de domínio passarão pela API.
- O SDK oficial `openai` será encapsulado em adapters e usará a Responses API.
- Modelos de IA serão configuráveis por caso de uso.
- O sandbox será um worker ou serviço isolado, nunca o processo Fastify.

## Consequências

- domínio e aplicação não importam Fastify, Drizzle, Supabase ou OpenAI;
- controllers convertem HTTP em comandos e view models;
- rows do banco são convertidas para entidades antes de cruzar a porta do repository;
- chaves administrativas permanecem somente no backend;
- políticas RLS e autorização da aplicação atuam em conjunto;
- chamadas externas são substituíveis por fakes em testes.
