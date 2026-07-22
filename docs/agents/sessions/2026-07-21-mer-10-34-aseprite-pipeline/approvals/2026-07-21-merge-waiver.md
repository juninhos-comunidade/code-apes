# Approval e waiver de merge — MER-10

**Data:** 2026-07-21

**Autoridade:** Eduardo Neves

**Frase de Approval:** `APROVADO: CORRIGIR #6, WAIVER, SQUASH MERGE #5 #6 #7 E PROTEGER MAIN`

## Autorizado

- marcar o PR #7 como pronto para revisão;
- dispensar, somente para este merge, o review pendente do co-owner e do Reviewer;
- dispensar, somente para este merge, o wrapper canônico do Prettier bloqueado pelo `node_modules` do OneDrive;
- executar squash merge do PR #7 após os PRs #5 e #6;
- proteger a branch `main` após os merges.

## Limites do waiver

- o waiver não declara o Prettier verde;
- o waiver não simula aprovação de Guilherme;
- o Design Book continua sendo contrato visual candidato até revisão de domínio;
- nenhum asset é promovido para `approved`;
- a Wave B da MER-34 continua exigindo plano revisão 3, Challenger e Approval;
- nenhuma alteração no Linear está autorizada.

## Evidência considerada

- merge individual e conjunto simulados sem conflito;
- zero sobreposição de paths com os PRs #5 e #6;
- estrutura e links locais validados;
- `git diff --check` limpo;
- verificador subjacente de reprodutibilidade verde;
- nenhum asset binário alterado.
