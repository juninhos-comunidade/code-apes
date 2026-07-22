# Conclusão — governança das skills externas

## Resumo

As skills externas foram integralmente preservadas. Foi adicionada uma camada auditável de proveniência e um gate que detecta drift no lock, inventário, diretórios e conteúdo real vendorizado.

## Arquivos principais

- `docs/agents/external-skills-inventory.json`;
- `tooling/validation/check-skills-provenance.mjs`;
- `tooling/validation/check-skills-provenance.test.mjs`;
- documentação de skills, setup e spec do committee;
- artefatos desta sessão.

## Validação

- 5/5 testes do gate;
- 22/22 checks de reprodutibilidade;
- typecheck, 4 testes existentes, lint e build verdes;
- diff check verde;
- zero alteração em skills/lock;
- zero overlap com PRs #4 e #5.

## Riscos restantes

- licença de `web-design-guidelines` permanece `UNKNOWN` e requer revisão antes de redistribuição futura;
- commits do inventário registram o upstream auditado em 2026-07-20; atualização exige novo diff e hash.

## Decisões

- preservar as 24 skills externas;
- exigir proveniência para novas vendorizadas;
- não alterar Phaser nem absorver trabalho dos PRs abertos.

## Learnings disposition

- `discard`: a proposta de remover todas as externas foi substituída antes do commit e não deve virar prática.
- `practice`: nenhuma nova entrada; a regra já está formalizada na spec e no gate executável.

## Linear

Nenhuma mutação proposta nesta entrega.

## Publicação

Commit sugerido: `fix(agents): audita skills externas sem removê-las`.

PR específico contra `main`, em modo draft, autorizado no artefato de Approval.

## Correção pré-merge

Um teste adversarial comprovou que uma skill com licença individual ainda podia
omitir o registro do repositório e do commit auditado. Foi criado primeiro um
teste de regressão que falhou; depois o validador passou a exigir o repositório
de origem para toda entrada do lock.

Evidência após a correção:

- 6/6 testes do gate de proveniência;
- 22/22 checks de reprodutibilidade;
- `git diff --check` limpo;
- nenhuma alteração em `.agents/skills/` ou `skills-lock.json`.
