# Merge Quest — contexto canônico para Codex

Este pacote existe para o Codex **entender o projeto, propor a árvore do monorepo e preparar a organização do trabalho**.

## Primeira missão

1. Leia `AGENTS.md`.
2. Leia `PROJECT-MAP.md`.
3. Leia `docs/architecture/06-monorepo-and-repository-architecture.md`.
4. Leia `docs/engineering/07-poo-tdd-layered-architecture.md`.
5. Leia `docs/product/09-vertical-slice-and-acceptance.md`.
6. Leia `docs/linear/12-linear-bootstrap.md`.
7. Inspecione o diretório atual.
8. Proponha a árvore final do repositório.
9. Explique cada diretório e fronteira.
10. Aguarde aprovação antes de instalar dependências ou implementar o jogo.

## Ordem obrigatória

### Fase A — árvore e documentação

- criar a árvore do monorepo;
- copiar estes documentos para os locais corretos;
- criar arquivos vazios ou placeholders;
- criar `package.json`, `pnpm-workspace.yaml` e `turbo.json` somente após mostrar a proposta;
- não instalar frameworks ainda;
- não escrever funcionalidades.

### Fase B — revisão da árvore

- executar uma auditoria da estrutura;
- verificar conflitos de responsabilidade;
- identificar decisões ainda abertas;
- gerar um relatório em `docs/repository-bootstrap-report.md`;
- aguardar aprovação do usuário.

### Fase C — Linear

Somente após a árvore ser aprovada:

- propor a estrutura do Linear;
- aguardar aprovação;
- criar projetos, milestones, labels, issues e dependências;
- não iniciar implementação automaticamente.

## Fontes principais

- `PROJECT-MAP.md`: visão canônica resumida.
- `MERGE-QUEST-CONTEXTO-COMPLETO.md`: versão única e longa para leitura linear.
- `docs/history/decision-log-v7.8.md`: histórico completo das decisões.
- `sources/carta-magna-v1.5.pdf`: documento de apresentação.
- `assets/reference/prototipo-visual-aprovado.png`: referência visual aprovada.

## Instalação

Consulte `REQUIREMENTS.md` para os pré-requisitos e o comando único de instalação do monorepo.

Consulte também `CONTRIBUTING.md` para o fluxo de colaboração e `docs/reproducibility-audit-report.md` para a prova de instalação limpa e os bloqueios restantes.

## Regra de precedência

Quando houver conflito:

1. `AGENTS.md`;
2. documentos canônicos numerados;
3. ADRs;
4. `PROJECT-MAP.md`;
5. histórico e fontes antigas.

Não use uma decisão antiga quando um documento canônico disser que ela foi substituída.
