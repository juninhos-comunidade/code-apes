# Review SPEC — governança das skills externas

**Issue:** MER-5
**Veredito:** APROVADO

## Evidências

- 24 diretórios externos preservados e cobertos por 24 entradas no lock e no inventário;
- nenhuma alteração ou exclusão em `.agents/skills/` e `skills-lock.json`;
- inventário registra fonte, commit auditado, licença, caminho e hash;
- spec permite vendorização governada e proíbe novas inclusões sem auditoria;
- onboarding contém PowerShell e POSIX;
- interseção de paths com os PRs #4 e #5 igual a zero.

Todos os critérios do brief e do plano foram atendidos sem alteração de produto, runtime, Phaser ou Linear.
