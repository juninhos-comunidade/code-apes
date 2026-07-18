# Trilhas de cerimônia

Cerimônia **graduada** para time pequeno. Escolhida no Helper e registrada em `brief.md` + `phase.md`.

## Comparativo

| | **Full** | **Light** | **Asset-Content** |
|---|----------|-----------|-------------------|
| Quando | Cruza pacotes, contrato, IA, combate, produto | Bug/chore local, sem contrato novo | Arte pixel / catálogo técnico |
| Helper | Completo + lentes MQ | Curto | Completo (Design Book / rubrica) |
| Documentação | Spec/ADR + Linear propose | Spec só se faltar aceite; Linear opcional | Spec/checklist domínio + Linear se issue |
| Orchestrator | Plano fatiado | Plan curto (1–2 fatias) | Plan por asset/item |
| Challenger | **Obrigatório** | Opcional (obrigatório se escopo crescer) | **Obrigatório** |
| Approval | Pacote completo | Leve (escopo + riscos) | Domínio (arte/conteúdo) |
| Team | 1+ áreas | 1 área | `art` e/ou `content` (+qa) |
| Reviewer | Dois eixos | Enxuto | Checklist Design Book / catálogo |
| Concluidor | Completo | Curto | Completo se asset versionado |

## Full — checklist

- [ ] brief com `[FATO]`/`[DECISÃO]` e trilha Full
- [ ] spec/ADR necessários no repo
- [ ] issues `MER-*` propostas/aprovadas
- [ ] plan com `[mq:…]` e deps
- [ ] challenge.md com veredito
- [ ] approvals/ antes do Team
- [ ] reviews spec + code
- [ ] conclusion + propostas Linear/PR

## Light — checklist

- [ ] brief curto (repro + escopo)
- [ ] plan.md mínimo
- [ ] Approval leve
- [ ] teste que reproduz (se bug de lógica)
- [ ] review enxuto
- [ ] conclusion curta

**Upgrade para Full** se aparecer: novo contrato, mudança de fronteira game-core, IA, asset approved, ou 2ª área Team.

## Asset-Content — checklist

- [ ] referência Design Book / catálogo
- [ ] Challenger (estilo, resolução, “IA inventou”, asset inexistente)
- [ ] Approval de domínio
- [ ] candidata nova (nunca overwrite silencioso de `approved`)
- [ ] preview 1x + ampliado (arte)
- [ ] Reviewer checklist
- [ ] versionamento / status do asset documentado

## Default

Na dúvida → **Full**. Light é privilégio de escopo trivial e local.
