# Auditoria do replanejamento do vertical slice

Data: 2026-07-20

## Resultado

O planejamento foi reorganizado em quatro ciclos com limite de 5 pontos por responsável e por ciclo. O ciclo final preserva capacidade para integração, correções e playtest.

Foram criadas as issues:

- MER-40 — spike Phaser 4 com React/Vite e pixel art;
- MER-41 — checkpoint repository e `SaveCheckpoint`;
- MER-42 — deploy Vercel/Railway e smoke de produção;
- MER-43 — áudio e música mínimos do vertical slice.

## Capacidade auditada

| Ciclo | Eduardo | Guilherme | Sem responsável no workspace | Total de issues |
|------:|--------:|----------:|-----------------------------:|----------------:|
| C1 | 5 | 5 | 3 | 9 |
| C2 | 5 | 4 | 5 | 10 |
| C3 | 5 | 5 | 5 | 10 |
| C4 | 4 | 4 | 1 | 6 |

Os pontos sem responsável correspondem às entregas de backend, banco, deploy e QA que ainda não possuem um usuário selecionável adequado no workspace. A distribuição de responsabilidade continua descrita nas issues.

## Verificações realizadas

- ciclos reaplicados e consultados pelos IDs nativos do Linear;
- estimativas presentes e carga limitada a 5 pontos por responsável;
- dependências críticas materializadas como relações `blockedBy`;
- MER-31 bloqueada pelos gates obrigatórios da demo;
- escopos de checkpoint, sandbox, acessibilidade, CI, arte e deploy corrigidos;
- amostra das issues MER-9, MER-17, MER-25, MER-32 e MER-38 sem referência à branch documental antiga;
- leads definidos nos nove projetos que possuem responsável selecionável adequado.

## Pendências externas

- Criar ou reutilizar na interface do Linear a Initiative `Merge Quest — Vertical Slice e MVP` e associar os dez projetos. O conector disponível nesta execução não oferece operação de criação ou associação de Initiative.
- Definir o lead do projeto Backend e banco quando o usuário responsável estiver disponível no workspace.

Essas pendências não alteram a ordem de execução nem a capacidade dos quatro ciclos.
