# Merge Quest — Pipeline de Desenvolvimento (SDD + TDD)

> Hierarquia: [`AGENTS.md`](AGENTS.md) (regras mínimas) → **este arquivo** (ciclo) → [`docs/agents/workflow.md`](docs/agents/workflow.md) (papéis) → specs/ADRs.  
> Contrato normativo: [`docs/specs/agent-workflow-committee.spec.md`](docs/specs/agent-workflow-committee.spec.md) · ADR: [`ADR-0006`](docs/architecture/adr/ADR-0006-agent-workflow-committee.md).

---

## Contexto

Merge Quest é um RPG técnico pixel-art: React (shell) + Phaser (`game-runtime`) + `game-core` determinístico + API/contratos + catálogo curado + IA atrás da API.

**Fontes de verdade**

| Domínio | SoT |
|---------|-----|
| Issues, status, assignee, prioridade, milestone | **Linear** (prefixo `MER-`, team Merge Quest) |
| Specs, ADRs, RFCs, contratos, Design Book, sessões | **Repositório** |
| Estado/regras do jogo | **`game-core`** |

Não há árvore canônica `docs/backlog/` estilo Epic/US. Issues vivem no Linear; a sessão no repo referencia `linearIssues: [MER-…]`.

---

## Ciclo SDD + TDD + Consenso

TDD ocorre *dentro* da implementação — não é fluxo paralelo.

| # | Etapa | O que fazer | Gate | Papel MQ |
|---|-------|-------------|------|----------|
| 0 | **DISCOVERY** | Ler docs, código, Linear; separar `[FATO]` / `[DECISÃO]`; escolher trilha | — | Helper |
| 1 | **SPEC** | Spec/RFC/ADR no repo; **propor** issues Linear (não criar sem Approval) | — | Documentação |
| 2 | **PLANEJAR** | `plan.md` com fatias, tags `[mq:<área>]`, IDs Linear | — | Orchestrator |
| 2b | **DESAFIO** | Quebrar plano (escopo, fronteiras, IA inventando, arte) | Achados → Orchestrator | Challenger |
| 2c | **CONSENSO** | Pacote brief+spec+plan(+challenge) | **Approval em arquivo** | Humano |
| 3 | **TESTE (red)** | Testes a partir dos critérios; devem falhar | Obrigatório em regras | Team |
| 4 | **IMPLEMENTAÇÃO (green)** | Menor código que passa | — | Team |
| 5 | **REFATORAÇÃO** | Limpar com testes verdes | — | Team |
| 6 | **VALIDAÇÃO** | Critérios Linear/spec (não só testes) | Review eixo spec | Reviewer |
| 6b | **REVISÃO CÓDIGO** | Arquitetura, fronteiras, TDD, arte/conteúdo | Review eixo code | Reviewer |
| 7 | **FECHAMENTO** | Conclusão, **Learnings disposition**, propor update Linear/PR | Concluidor propõe; humano aprova mutações externas | Concluidor |

**Bugfix / chore locais (trilha Light):** podem enxugar SPEC e Challenger; **nunca** pulam teste quando há lógica corrigível, nem Approval em arquivo.

---

## Trilhas (cerimônia graduada)

| Trilha | Quando | Papéis mínimos |
|--------|--------|----------------|
| **Full** | Cruza pacotes, contrato, IA, combate, produto | Helper → Documentação → Orchestrator → Challenger → Approval → Team → Reviewer → Concluidor |
| **Light** | Bug/chore local, sem contrato novo | Helper curto → plan → Approval leve → Team → Reviewer enxuto → Concluidor curto |
| **Asset/Content** | Arte / catálogo técnico | Helper → plan → **Challenger obrigatório** → Approval domínio → Team (art/content) → Reviewer checklist |

Detalhe: [`docs/agents/tracks.md`](docs/agents/tracks.md).

---

## Regras de ouro do processo

1. **Chat ≠ Approval** — fala humana no chat é hipótese até existir artefato `approvals/` (ou equivalente na sessão).
2. **Contexto em arquivo** — `docs/agents/sessions/<id>/`, nunca só no chat.
3. **Quem implementa ≠ quem revisa ≠ quem fecha.**
4. **Orchestrator e Challenger não implementam.**
5. **Sem hooks Cursor** — o harness é contrato documental + skills; qualquer tool (Cursor, Codex, Claude Code) segue os mesmos artefatos.
6. **Linear: propose → Approval → mutate** via MCP (ou UI/proposal file se MCP cair).
7. **Tags** — Orchestrator marca fatias com `[mq:<área>]` (`game-core`, `runtime`, `web`, `api`, `content`, `art`, `qa`, …).
8. **Sem micro-aprovações** após Approval do plano — executar autonomamente; interromper só para ações sensíveis (commit, push, PR, deploy, segredos, Linear mutate, escopo).
9. **Feedback loop** — conclusion com disposition (`practice` \| `promote-to-skill` \| `promote-to-ADR` \| `discard`); Helper lê Practices recentes; changelog em [`docs/agents/CHANGELOG.md`](docs/agents/CHANGELOG.md).
10. **Swarm** — permitido como tática do Orchestrator (fatias paralelas); não substitui committee.

---

## Skills

Consultar [`docs/skills-map.md`](docs/skills-map.md) e [`docs/agents/skill-sets.md`](docs/agents/skill-sets.md). In-repo: `.agents/skills/merge-quest-*`. Skills não substituem spec, Approval nem testes.

---

## Branches e issues

- Issue canônica: `MER-<n>` (Linear).
- Branch sugerida: alinhar ao Linear (`tipo/mer-<n>-descricao` ou equivalente curto).
- PR: critérios de aceite + link da issue + sessão quando houver.
