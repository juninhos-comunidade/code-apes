# Relatório de reprodutibilidade e colaboração

Data: 17 de julho de 2026
Escopo: monorepo local Merge Quest
Conclusão: tecnicamente reproduzível; o remoto foi identificado e esta publicação resolve o bloqueio de colaboração.

## Resumo executivo

Uma cópia limpa foi criada em diretório temporário, sem `.git`, `node_modules`, `.pnpm-store`, `.turbo`, builds, cobertura ou arquivos `.env`. Nessa cópia, o pnpm aceitou o lockfile congelado, instalou 307 pacotes e executou todo o pipeline disponível com sucesso.

O ambiente atual pode ser reproduzido por outro integrante a partir do mesmo conjunto de arquivos. A auditoria inicialmente encontrou o scaffold sem `HEAD`; durante a publicação, ele foi integrado ao histórico existente do repositório `juninhos-comunidade/code-apes` e preparado para envio à `main`.

## Matriz de resultados

| Verificação | Resultado | Evidência |
|---|---|---|
| Cópia sem estado local | Aprovada | sem `.git`, `node_modules`, store, caches, builds ou `.env` |
| Integridade do lockfile | Aprovada | SHA-256 `310C179E8E4478D4D0291726B01953BD68DAE0C4742256CBD783F397272A6B43` |
| Instalação congelada | Aprovada | `pnpm install --frozen-lockfile` |
| Política de supply chain | Aprovada | lockfile verificado; somente `esbuild` autorizado a executar build |
| Pacotes instalados | Aprovada | 307 pacotes |
| Peer dependencies | Aprovada | nenhum conflito |
| Check automatizado | Aprovada | 21 verificações |
| Typecheck | Aprovada | Turborepo, 1 tarefa executável |
| Testes | Aprovada | 2 arquivos, 4 testes |
| Lint | Aprovada | ESLint sem erros |
| Build | Aprovada | TypeScript build sem erros |
| Lockfile após instalação | Aprovada | hash permaneceu idêntico |
| Segredos em arquivos textuais | Aprovada | nenhum valor real encontrado |
| Exemplos de ambiente | Aprovada | versionáveis e sem chaves preenchidas |
| Fronteira `game-core` | Aprovada | sem framework, banco, browser ou SDK externo |
| Line endings e encoding | Aprovada | LF e UTF-8 formalizados |
| Histórico Git | Resolvida na publicação | base remota `2bdf508` integrada e scaffold incluído no novo commit |
| Clone por outros integrantes | Resolvida na publicação | remoto público `juninhos-comunidade/code-apes` |

## Contrato reproduzível criado

- `.nvmrc` e `.node-version`: Node.js 24.15.0 recomendado;
- `engines`: Node.js 24.14.0 ou superior, dentro da linha 24;
- `packageManager`: pnpm 11.9.0;
- `.npmrc`: engines e peer dependencies estritos, lockfile compartilhado;
- `.editorconfig`: UTF-8, LF e indentação consistente;
- `.gitattributes`: texto normalizado e binários protegidos;
- `pnpm-lock.yaml`: resolução exata das dependências;
- `.env.example` e `apps/api/.env.example`: contrato de configuração sem segredos;
- `pnpm check:reproducibility`: auditoria de integridade;
- `pnpm verify`: check, typecheck, testes, lint e build.

## Colaboração por área

### Eduardo

- ownership: `packages/game-core`, `packages/game-runtime`, `art`, E2E e integração visual;
- fronteira protegida: `game-core` não aceita React, Phaser, banco, rede ou IA;
- referências e pipeline artístico estão versionáveis, com fontes/exports/previews separados.

### Hahn

- ownership: `apps/api`, persistência, Supabase, schemas, sandbox e backend;
- API possui comandos funcionais de desenvolvimento e qualidade;
- banco, Supabase e OpenAI estão atrás de portas/adapters e não são chamados nos testes padrão.

### Guilherme

- ownership: `apps/web`, `packages/ui`, UX de IA, prompts e relatórios;
- dependências React/Vite e fronteiras de UI estão declaradas;
- o workspace web ainda é um placeholder e ganhará scripts executáveis quando o shell React for configurado.

### Compartilhado

- `packages/contracts` exige revisão das áreas consumidoras;
- integração React/Phaser usa comandos, eventos e snapshots tipados;
- todas as áreas devem executar `pnpm verify` antes de PR;
- mudança de dependência deve atualizar manifest e lockfile juntos.

## Achados e severidade

### Resolvido — histórico e remoto compartilhado

A auditoria começou com o scaffold sem `HEAD` e com zero arquivos rastreados. O remoto informado pela equipe já possuía o commit inicial `2bdf508`; a base foi integrada localmente e esta publicação registra o estado auditado na `main`. Com isso:

- a equipe consegue clonar o estado auditado;
- o Git passa a proteger e comparar os arquivos;
- CI e PRs podem validar o lockfile auditado;
- o hash comprovado deixa de existir apenas nesta cópia local.

Resolução aplicada: escopo revisado, arquivos adicionados em commit convencional e publicação autorizada diretamente na `main` pelo responsável do projeto.

### Médio — pipeline executável concentrado na API

Os nove workspaces são descobertos pelo Turborepo, mas somente `@merge-quest/api` possui scripts reais neste momento. Isso é coerente com o scaffolding, porém significa que web, UI, runtime e core ainda não têm código próprio para compilar ou testar.

Correção recomendada: ao iniciar cada workspace, adicionar configuração TypeScript, lint, teste e build no mesmo PR do primeiro código. Não usar scripts falsos que retornam sucesso.

### Médio — sistema operacional validado

A prova limpa foi executada no Windows. Os arquivos e comandos Node/pnpm são multiplataforma, e LF foi normalizado, mas Linux/macOS ainda não foram executados materialmente.

Correção recomendada: futura CI com pelo menos Windows e Linux; macOS apenas quando o pipeline Aseprite ou outra necessidade justificar.

### Baixo — OneDrive no workspace principal

O OneDrive bloqueou leitura de alguns hardlinks do `node_modules` dentro do sandbox. A mesma instalação fora do OneDrive, no diretório temporário, terminou normalmente.

Correção recomendada: integrantes podem manter o código fora de pastas sincronizadas ou excluir `node_modules` da sincronização. Isso não afeta o repositório nem o lockfile.

## Comandos para uma máquina nova

Com o remoto publicado:

```powershell
git clone https://github.com/juninhos-comunidade/code-apes.git
cd code-apes
pnpm install --frozen-lockfile
pnpm verify
```

Nenhuma credencial é necessária para esses checks.

## Auditoria arquitetural

### Aprovado

- dependências apontam para dentro das camadas;
- SDKs externos permanecem em infraestrutura;
- Fastify permanece em apresentação/composição;
- `game-core` continua determinístico e independente;
- contratos e ambientes possuem documentação;
- testes padrão não acessam serviços reais.

### Falhas arquiteturais

Nenhuma no código existente.

### Decisão de merge

Arquitetura e reprodutibilidade técnica não bloqueiam merge. O bloqueio de histórico/remoto identificado no início da auditoria foi resolvido nesta publicação.

## Resultado final

O estado publicado é reproduzível de forma comprovada e o lockfile é determinístico. O comando de aceitação para qualquer integrante é `pnpm verify` em um clone limpo.
