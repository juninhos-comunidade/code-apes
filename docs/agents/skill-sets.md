# Skill-sets — Merge Quest

Skills são playbooks. **Não** substituem `AGENTS.md`, spec, Approval nem TDD.  
Mapa operacional: [`docs/skills-map.md`](../skills-map.md).

## Process

| Skill (in-repo) | Papel |
|-----------------|-------|
| `merge-quest-helper` | Discovery + lentes MQ |
| `merge-quest-decomposition` | Spec + Linear propose |
| `merge-quest-orchestrator` | plan + tags |
| `merge-quest-challenger` | Ataque ao plano |
| `merge-quest-reviewer` | Dois eixos |
| `merge-quest-concluidor` | Fechamento |
| `merge-quest-learned-practices` | Lições do repo |
| `merge-quest-linear` | Contrato Linear↔repo |
| `merge-quest-mcp-setup` | Bootstrap MCP |

## Domain

| Skill | Domínio |
|-------|---------|
| `merge-quest-game-core` | Regras determinísticas |
| `merge-quest-runtime` | Phaser / runtime |
| `merge-quest-web` | React shell |
| `merge-quest-api` | API / contratos / IA gateway |
| `merge-quest-content` | Catálogo / rubricas |
| `merge-quest-art-pipeline` | Pixel art / Aseprite |
| `merge-quest-architecture-guard` | Camadas / POO / fronteiras |
| `merge-quest-bootstrap` | Scaffolding monorepo |

## Quality & docs

| Skill | Uso |
|-------|-----|
| `merge-quest-delivery-gate` | DoD / verificação |
| `merge-quest-docs` | Specs/ADRs/hygiene |
| Locais úteis | `typescript-pro`, `vitest-skill`, `zod-validation-expert`, `postgres-best-practices`, `frontend-*`, `api-*`, `code-review-excellence`, `accessibility-*`, `writing-plans`, `verification-before-completion` |

## Externas — política

| Classe | Política |
|--------|----------|
| ADR / docs SDD (addyosmani, wshobson, etc.) | Recomendadas como apoio; núcleo = docs MQ |
| Phaser marketplace | Só com ressalva: **não** colocar regra no scene |
| Pixel-art marketplace | **Deny default** — preferir Design Book + `merge-quest-art-pipeline` |
| Linear skills fracas (&lt;~400 installs) | **Não** — usar MCP + `merge-quest-linear` |
| Agent swarms / multi-agent genéricos | **Fora** — committee MQ é a orquestração |
| grill-me / brainstorming | Opcional no Helper; não é núcleo |

## Deny-list (resumo)

1. Skills que empurram regra de jogo para React/Phaser.
2. Skills de arte que inventam estilo fora do Design Book.
3. Skills que tratam chat como Approval.
4. Skills que criam backlog markdown paralelo ao Linear.
5. Qualquer skill que exija hooks Cursor para “funcionar”.

## Precedência

1. `AGENTS.md` + ADR + spec normativa  
2. Harness do papel  
3. Skill in-repo `merge-quest-*`  
4. Skill local/Cursor  
5. Skill externa avaliadas  

Conflito → vence o documento mais normativo do repo; registrar gap em learnings.
