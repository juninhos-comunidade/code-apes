# Relatório de bootstrap do repositório

Data: 17 de julho de 2026
Estado: scaffolding concluído; aguardando revisão da equipe.

## Resumo

O repositório foi organizado como monorepo pnpm + Turborepo, sem implementação de produto. O pacote canônico, suas fontes, regras locais e referências visuais foram preservados. Os anexos fornecidos separadamente também foram guardados no repositório.

## Árvore criada

```text
Merge Quest/
├── .agents/skills/
├── apps/{web,api}/
├── packages/{game-core,game-runtime,contracts,ui,config,telemetry,testing}/
├── content/{cards,questions,challenges,encounters,rewards,competencies}/
├── art/{source,exports,previews,references,licenses}/
├── assets/reference/
├── docs/{product,design,engineering,architecture,linear,history}/
├── tooling/{aseprite,generators,validation,linear}/
├── infrastructure/
├── tests/{integration,e2e,visual}/
├── sources/
├── package.json
├── pnpm-workspace.yaml
└── turbo.json
```

Diretórios ainda sem implementação contêm README ou `.gitkeep`, tornando as fronteiras revisáveis e rastreáveis no Git.

## Arquivos e materiais adicionados

- documentos canônicos e históricos listados em `MANIFEST.md`;
- três habilidades locais em `.agents/skills`;
- referência visual aprovada do pacote;
- imagem de responsabilidades, roadmap e riscos recebida em 17 de julho;
- Carta Magna v1 e matriz de responsabilidades v1.1 recebidas separadamente;
- READMEs de ownership para aplicações, pacotes, conteúdo, arte, tooling, infraestrutura e testes;
- manifests mínimos para os dois apps e sete pacotes;
- configuração raiz de pnpm Workspaces e tarefas Turbo;
- `.gitignore` para Node/pnpm/Turbo, builds, testes, segredos locais, IDEs, arquivos temporários e resíduos de ferramentas;
- `REQUIREMENTS.md` com pré-requisitos, dependências declaradas e instalação em comando único;
- ADR-0004 para a API TypeScript.

## Decisões aplicadas

1. Monorepo com pnpm Workspaces e Turborepo.
2. React será o shell futuro e Phaser será montado dentro dele.
3. `game-core` permanece TypeScript puro e determinístico.
4. A API usará Node.js + TypeScript, conforme aprovação explícita da equipe.
5. O framework HTTP, ORM/query builder e fornecedores externos não foram escolhidos.
6. Conteúdo, arte, contratos e testes possuem fronteiras próprias.
7. Nenhuma feature, sprite, contrato funcional ou integração foi implementada.

## Fronteiras auditadas

- aplicações compõem pacotes; não exportam regras reutilizáveis;
- `game-core` não possui dependências de framework ou infraestrutura;
- `game-runtime` é a futura borda Phaser;
- React e Phaser se comunicarão por comandos, eventos e snapshots tipados;
- persistência e IA permanecerão atrás de portas e contratos;
- conteúdo técnico será curado e versionado;
- fontes, exports, previews e licenças de arte permanecem separados.

Não há código de produção nesta etapa, portanto ainda não existem imports cruzados ou ciclos para validar.

## Validações executadas

| Validação | Resultado |
|---|---|
| Leitura de 10 arquivos `package.json` com parser JSON | Aprovada |
| Node.js disponível | `v24.14.0` |
| pnpm disponível | `11.7.0` |
| Presença das três habilidades locais | Aprovada |
| Inventário de documentos, fontes e referências | Aprovado |
| Regras essenciais do `.gitignore` | Aprovadas |
| `.env.example` permanece versionável | Aprovado |
| Estado do Git | Somente arquivos novos, sem alterações prévias do usuário |

## Comandos deliberadamente não executados

- `pnpm install`;
- `pnpm lint`;
- `pnpm typecheck`;
- `pnpm test`;
- `pnpm build`;
- qualquer instalação de React, Vite, Phaser, framework HTTP, banco, IA ou testes.

Esses comandos dependem da instalação de `turbo` e das futuras ferramentas de cada workspace. Instalação e acesso à rede exigem aprovação separada.

Os manifests já declaram a stack canônica aprovada (React, Vite, Phaser, TypeScript, Zod, Turbo, Vitest e Playwright), mas ainda não escolhem framework HTTP, ORM, Supabase ou SDK de IA.

## Decisões abertas

- biblioteca de estado React;
- estratégia final de schemas compartilhados;
- teste visual;
- deploy, storage e observabilidade;
- versões finais dos frameworks quando sua instalação for aprovada.

## Fundação da API adicionada após o bootstrap

Em 17 de julho de 2026, a equipe aprovou e integrou:

- Fastify com validação e serialização Zod;
- Drizzle ORM, Drizzle Kit e PostgreSQL via `pg`;
- Supabase Auth encapsulado em infraestrutura;
- OpenAI Responses API encapsulada por uma porta de aplicação;
- `pnpm-lock.yaml` e política explícita de build somente para `esbuild`;
- TypeScript estrito, ESLint, Vitest e build da API;
- health check testável sem credenciais externas.

Validação posterior: peer dependencies sem conflitos, typecheck, quatro testes, lint e build aprovados pela raiz do Turborepo.

## Riscos restantes

- a Carta Magna em PDF e documentos históricos ainda mencionam alternativas anteriores de backend; o ADR-0004 e os documentos modulares atualizados têm precedência;
- `turbo.json` está estruturalmente pronto, mas sua execução só poderá ser comprovada após instalar a dependência;
- os packages possuem scripts vazios intencionalmente e não devem ser confundidos com implementações concluídas;
- o conteúdo do Linear ainda não foi criado e não deve ser criado antes da próxima aprovação.

## Próxima aprovação necessária

1. Revisar e aprovar esta árvore e o relatório.
2. Depois da aprovação, propor a estrutura do Linear descrita em `docs/linear/12-linear-bootstrap.md`.
3. Aguardar nova aprovação antes de criar qualquer Initiative, Project, milestone, label ou issue.

O desenvolvimento do vertical slice permanece fora do escopo desta etapa.
