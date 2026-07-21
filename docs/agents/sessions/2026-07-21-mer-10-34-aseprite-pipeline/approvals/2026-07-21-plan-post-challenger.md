# Approval — plano pós-Challenger

**Sessão:** `2026-07-21-mer-10-34-aseprite-pipeline`
**Data:** 2026-07-21
**Aprovador:** Eduardo Neves
**Trilha:** Asset-Content
**Declaração recebida:** `APROVADO O PLANO PÓS-CHALLENGER DA PIPELINE ASEPRITE`

## Escopo aprovado

> Plano revisão 2 pós-Challenger: Wave A documental da MER-10 e Wave B da
> pipeline/família piloto parcial da MER-34, executadas sequencialmente, em
> branches e PRs separados.

## Artefatos cobertos

- [x] `brief.md`
- [x] `decomposition.md`
- [x] `plan.md` revisão 2
- [x] `challenge.md` com veredito final `pass`
- [x] Design Book e pipeline já canônicos no repo
- [ ] proposal Linear — não necessária

## linearIssues autorizadas

- MER-10 — implementação e verificações da Wave A
- MER-34 — implementação parcial da Wave B após o gate/merge da MER-10

## Autorizações explícitas

- [x] Avançar para fase `team`
- [x] Editar os arquivos listados no plano
- [x] Executar o Aseprite local em batch e scripts Lua previstos no plano
- [x] Rodar testes, formatadores, validators, typecheck, lint e build
- [ ] Mutar Linear
- [ ] Instalar/remover dependências ou alterar configuração global
- [ ] Promover asset para `approved`
- [ ] Commit, push, PR, merge ou deploy

## Condições / waivers

- Nenhum waiver.
- Execução inline entre Eduardo e a automação; sem subagentes.
- Eduardo Neves permanece como autor das entregas.
- A Wave B só começa em branch própria baseada na `main` atualizada depois do gate da MER-10.
- A família piloto permanece `candidate` até Approval de domínio próprio.

## Declaração

Esta Approval é o artefato canônico que autoriza a fase `team` dentro dos limites acima.
