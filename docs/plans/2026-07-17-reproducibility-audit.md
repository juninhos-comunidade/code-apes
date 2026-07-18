# Auditoria de reprodutibilidade do monorepo

## Objetivo

Provar que um integrante consegue obter uma cópia limpa, instalar dependências congeladas e executar os checks do monorepo sem credenciais ou estado local prévio.

## Contexto

O scaffolding e a fundação da API existem localmente, mas ainda não há commit inicial. A equipe precisa de versões, comandos, variáveis e fronteiras consistentes entre máquinas.

## Fora do escopo

- criar commit, branch remota ou pull request;
- provisionar Supabase, OpenAI ou deploy;
- executar migrações;
- instalar Aseprite ou Docker;
- implementar features.

## Arquivos afetados

- padrões de editor, Git, Node e pnpm;
- scripts de validação da raiz;
- documentação de desenvolvimento local e ownership;
- relatório de reprodutibilidade.

## Dependências

- Node.js e pnpm já aprovados;
- store do pnpm ou acesso ao registry npm para a simulação limpa;
- diretório temporário local fora do OneDrive.

## Plano por etapas

1. Fixar versões e line endings.
2. Criar check automatizado de manifests, lockfile, ambientes e fronteiras.
3. Documentar setup e comandos por área.
4. Copiar somente arquivos versionáveis para diretório temporário.
5. Instalar com `pnpm install --frozen-lockfile`.
6. Executar check, typecheck, testes, lint e build.
7. Auditar arquitetura e registrar bloqueios.

## Critérios de aceite

- versões de Node e pnpm explícitas;
- lockfile congelado aceito;
- nenhum segredo necessário para checks locais;
- scripts funcionam em cópia limpa;
- comandos e ownership documentados;
- ausência de imports proibidos;
- relatório informa qualquer bloqueio restante.

## Estratégia de testes

- check Node próprio, sem dependências externas;
- instalação limpa fora do workspace;
- pipeline Turborepo completo;
- scan de segredos e de fronteiras;
- comparação do lockfile antes e depois da instalação.

## Riscos e rollback

- lockfile incompatível: corrigir manifests/lockfile;
- dependência de caminho local: check falha e aponta o manifest;
- segredo versionado: remover, rotacionar se real e ampliar ignore;
- diferença de line ending: `.gitattributes` normaliza para LF;
- rollback: remover arquivos de tooling e restaurar scripts anteriores.

## Decisões abertas

- momento do primeiro commit e publicação remota;
- CI hospedada;
- suporte oficial além de Windows nesta fase.

## Registro de progresso

- 2026-07-17: auditoria iniciada; ausência de commit inicial identificada.
- 2026-07-17: versões, encoding, line endings e política estrita do pnpm formalizados.
- 2026-07-17: verificador automatizado concluiu 21 checks sem falhas.
- 2026-07-17: cópia limpa criada sem Git, dependências, caches, builds ou ambientes locais.
- 2026-07-17: instalação congelada concluiu 307 pacotes e preservou o hash do lockfile.
- 2026-07-17: peer dependencies, typecheck, 4 testes, lint e build aprovados na cópia limpa.
- 2026-07-17: auditoria arquitetural aprovada; relatório emitido; plano concluído.
- 2026-07-17: remoto `juninhos-comunidade/code-apes` integrado; publicação na `main` autorizada para resolver o bloqueio de colaboração.
