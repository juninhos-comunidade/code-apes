# Merge Quest — contexto canônico para agentes

Este pacote orienta qualquer ferramenta (Cursor, Codex, Claude Code) a trabalhar no repositório com o mesmo contrato.

## Missão atual

1. Leia `AGENTS.md`.
2. Leia `agent.md` e `docs/agents/README.md` (committee, Challenger, trilhas).
3. Skills do projeto: `.agents/skills/merge-quest-*` · mapa `docs/skills-map.md` · conjuntos `docs/agents/skill-sets.md` (locais/externos em `~/.cursor/skills/` ou plugins).
4. Leia `docs/agents/mcp-setup.md` e autentique Linear MCP se for usar backlog.
5. Use Linear (`MER-*`) como SoT de issues; não invente `docs/backlog/` paralelo.
6. Para produto/arquitetura: `PROJECT-MAP.md`, docs numerados, ADRs.
7. Vertical slice: `docs/product/09-vertical-slice-and-acceptance.md`.
8. Não reinstale o monorepo nem “primeira missão de árvore” sem pedido explícito.

## Ordem de leitura (produto / código)

1. `AGENTS.md` + `agent.md`
2. `docs/architecture/adr/README.md` (especialmente ADR-0002, ADR-0003, ADR-0006)
3. `docs/engineering/07-poo-tdd-layered-architecture.md`
4. `docs/product/09-vertical-slice-and-acceptance.md`
5. `docs/linear/12-linear-bootstrap.md` + audit mais recente em `docs/linear/`

## Instalação

Consulte `REQUIREMENTS.md` e `CONTRIBUTING.md`.

## Regra de precedência

Quando houver conflito:

1. `AGENTS.md` + `agent.md` + `docs/agents/` (processo);
2. documentos canônicos numerados;
3. ADRs;
4. `PROJECT-MAP.md`;
5. histórico e fontes antigas (`docs/history/`, `sources/*.pdf`).

Não use uma decisão antiga quando um documento canônico ou ADR disser que ela foi substituída.
