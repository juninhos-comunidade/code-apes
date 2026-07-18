# Setup MCP — Merge Quest

Guia **agnóstico de ferramenta**. Não commitar tokens, `.env` com segredos, nem dumps OAuth.

Avaliação Linear: [`mcp-linear-evaluation.md`](mcp-linear-evaluation.md).

## Inventário

| Prioridade | Integração | Status (2026-07-18) | Uso |
|------------|------------|---------------------|-----|
| P0 | **Linear** `plugin-linear-linear` | **Auth OK** · Go com gaps | Issues, projects, labels, comments |
| P0/P1 | **Supabase** | **Pending** — aguardar projeto | DB/rules quando existir |
| P1 | **GitHub** | **`gh` OK** (`dedeusgui`); MCP opcional | PRs, checks, reviews |
| P1 | Browser / Playwright | Conforme necessidade | Smoke UI |
| P2 | OpenAI / AI MCP | Opcional | Preferir SDK+env na API |
| Fora | Firebase | Não usar para MQ | Stack errada |

## Linear (Cursor)

1. Garantir servidor `plugin-linear-linear` no Cursor.
2. Se `needsAuth`, rodar tool `mcp_auth` e concluir OAuth no browser.
3. Smoke **somente leitura** primeiro: `list_teams`, `list_projects`, `list_issues`, `list_issue_labels`.
4. Workspace esperado: **mergequest** · Team: **Merge Quest** · prefixo canônico **`MQ-*`**. Se issues ainda aparecem como `MER-*`, alterar Identifier do team para `MQ` em Settings → Teams → Merge Quest (MCP não altera identifier).
5. Mutações (`save_issue`, `save_project`, labels…): só após **Approval** + proposta (doc 12 / proposal file).
6. Gap conhecido: `list_projects` + milestones pode estourar complexity — usar `list_milestones` por project.
7. Sem tool de Initiative — criar na UI se necessário.

### Multi-tool (não-Cursor)

| Tool | Como acessar Linear |
|------|---------------------|
| Cursor | Plugin `plugin-linear-linear` |
| Codex / Claude Code | MCP Linear oficial ou API Linear com token em secret store local — **não** no repo |
| Fallback | UI Linear + `docs/linear/proposals/` |

Contrato comum: propor → Approval → mutar → auditar. O processo **não** trava se MCP cair.

## Skills pessoais opcionais (Helper)

`grill-me` / `grilling` (Matt Pocock) **não** são núcleo do harness. O Helper usa lentes MQ em `merge-quest-helper`.

Se quiser o grill clássico no Cursor:

```bash
# restaurar do archive local, ou:
npx skills add mattpocock/skills@grill-me -g -y
npx skills add mattpocock/skills@grilling -g -y
```

No ambiente deste bootstrap (2026-07-18), `grill-me` e `grilling` foram restaurados em `~/.cursor/skills/`.

## Supabase

**Pending.** Quando o projeto existir:

1. Instalar MCP Supabase na tool do desenvolvedor.
2. Auth por membro (OAuth/PAT no cofre local).
3. Smoke read-only (list schemas / health).
4. Writes em banco compartilhado: Approval explícita (`AGENTS.md`).
5. Documentar server id real neste arquivo após primeiro smoke.

## GitHub

- CLI `gh` já autenticado — preferir para PR/checks.
- MCP GitHub: opcional se a tool expuser; não duplicar segredos.
- Nunca `git push --force` em `main`.

## Regras de segurança

- Sem segredos em markdown, commits ou sessions.
- Exemplos usam placeholders: `<LINEAR_API_KEY>`, `<PROJECT_REF>`.
- Cada membro autentica o próprio MCP.
- Firebase plugin no Cursor **não** faz parte do stack MQ.

## Smoke checklist (agente)

```
[ ] Linear: list_teams → Merge Quest
[ ] Linear: list_issues → prefixo MQ-
[ ] Linear: mutação só com Approval
[ ] gh: gh auth status OK
[ ] Supabase: N/A ou smoke read documentado
```
