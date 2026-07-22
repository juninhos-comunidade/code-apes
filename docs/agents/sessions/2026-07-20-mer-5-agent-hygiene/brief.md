# Brief — governança das skills externas

**Trilha:** Full
**Data:** 2026-07-20
**Solicitante:** Eduardo Neves
**Issue:** MER-5

## Objetivo

Preservar todas as skills existentes e corrigir somente a falta de proveniência, controle de drift e portabilidade do onboarding.

## Fatos e decisões

- [FATO] As 24 skills externas continuam presentes e registradas em `skills-lock.json`.
- [FATO] O lock anterior não registrava commit auditado nem licença.
- [DECISÃO] Nenhuma skill será removida, movida ou alterada neste PR.
- [DECISÃO] Phaser e todos os paths dos PRs #4 e #5 ficam fora do diff.
- [DECISÃO] Novas skills externas exigirão proveniência e revisão explícitas.

## Aceite

- inventário contém fonte, commit, licença, caminho e hash para todas as entradas do lock;
- gate detecta divergência entre inventário, lock e diretórios vendorizados;
- spec deixa de contradizer a decisão de preservar as skills;
- onboarding possui exemplos PowerShell e POSIX;
- zero paths compartilhados com os PRs #4 e #5;
- nenhuma exclusão em `.agents/skills/`.
