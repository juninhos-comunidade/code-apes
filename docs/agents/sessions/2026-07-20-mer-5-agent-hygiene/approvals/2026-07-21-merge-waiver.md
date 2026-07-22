# Approval e waiver de merge — MER-5

**Data:** 2026-07-21

**Autoridade:** Eduardo Neves

**Frase de Approval:** `APROVADO: CORRIGIR #6, WAIVER, SQUASH MERGE #5 #6 #7 E PROTEGER MAIN`

## Autorizado

- corrigir o gate de proveniência do PR #6 com teste de regressão;
- dispensar review GitHub adicional para esta correção específica;
- marcar o PR #6 como pronto;
- executar squash merge após o PR #5;
- proteger a branch `main` após os merges.

## Condições

- o teste precisa falhar antes da correção e passar depois;
- todo repositório referenciado por skill precisa existir no inventário e ter commit auditado válido;
- os testes completos do gate e a reprodutibilidade devem permanecer verdes;
- nenhuma skill ou entrada de `skills-lock.json` pode ser removida ou modificada;
- nenhuma alteração no Linear está autorizada.
