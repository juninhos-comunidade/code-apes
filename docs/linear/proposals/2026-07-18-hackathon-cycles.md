# Proposal — hackathon cycles P0-VS → Demo

**Status:** Applied 2026-07-18 — audit PASS (4 × 1-week native Cycles)  
**Scope:** Assign existing MER-* to 4 weekly waves; set Demo project dates; lower Linear priority on future weeks.  
**Creates:** labels `hackathon-c1`…`c4`; Linear doc on Demo e entrega; native cycle assignment  
**Does not:** create stretch tickets; move backlog into Demo project; re-scaffold  
**Applied as:** labels + dueDate + priority + `cycle` 1–4 (team: 1 week, autocreate 4)

## Context

- Hackathon: 1 mês (`docs/history/handoff.md`)
- Ship gate: project **Demo e entrega** → **MER-31** (playtest 12–18 min + DoD doc 09)
- Consume: all `priority:p0-vs` under epic **MER-8**
- Backlog already P0-VS-only; stretch (5 andares, ranking, mobile completo, 8 domínios) stays Out

## Calendar (4 × ~1 week)

| Cycle | Theme | Start | End |
|------:|-------|-------|-----|
| 1 | Fundação | 2026-07-18 | 2026-07-24 |
| 2 | Core + arte + API thin | 2026-07-25 | 2026-07-31 |
| 3 | Bridge + conteúdo + entrada | 2026-08-01 | 2026-08-07 |
| 4 | Floor loop + Demo | 2026-08-08 | 2026-08-14 |

**Demo e entrega:** `startDate=2026-07-18`, `targetDate=2026-08-14`

## Out of cycle

| Issue | Reason |
|-------|--------|
| MER-8 | Epic tracking (spans all cycles) |
| MER-5, MER-6, MER-7 | Done |

## Cycle 1 — Fundação

**Meta:** pacotes/shell existem; Hahn/Initiative destravados.

| Order | Issue | Linear priority |
|------:|-------|-----------------|
| 1 | MER-32 | 1 Urgent |
| 2 | MER-9 | 1 Urgent |
| 3 | MER-35 | 1 Urgent |
| 4 | MER-10 | 1 Urgent |
| 5 | MER-24 | 1 Urgent |
| 6 | MER-12 | 1 Urgent (blocked until Hahn; if still blocked, slip to C2) |

## Cycle 2 — Core + arte + API thin

**Meta:** estado/comandos/combate no core; grafo; assets; persistência thin.

| Order | Issue | Linear priority |
|------:|-------|-----------------|
| 1 | MER-21 | 1 Urgent |
| 2 | MER-22 | 1 Urgent |
| 3 | MER-23 | 1 Urgent |
| 4 | MER-33 | 1 Urgent |
| 5 | MER-36 | 1 Urgent |
| 6 | MER-34 | 1 Urgent |
| 7 | MER-25 | 1 Urgent (thin slice: fakes + contrato; unlock circular with MER-38) |

**Circular MER-25 ↔ MER-38:** C2 delivers thin persistence ports; C3 closes lifecycle on top.

## Cycle 3 — Bridge + conteúdo + entrada React

**Meta:** API/IA/conteúdo + bridge React↔Phaser + telas até cruzamento.

| Order | Issue | Linear priority |
|------:|-------|-----------------|
| 1 | MER-38 | 2 High |
| 2 | MER-26 | 2 High |
| 3 | MER-30 | 2 High |
| 4 | MER-29 | 2 High |
| 5 | MER-27 | 2 High |
| 6 | MER-28 | 2 High |
| 7 | MER-11 | 2 High |
| 8 | MER-13 | 2 High |
| 9 | MER-14 | 2 High |

## Cycle 4 — Floor loop + Demo hackathon

**Meta:** jornada jogável; **MER-31** Done.

| Order | Issue | Linear priority |
|------:|-------|-----------------|
| 1 | MER-15 | 2 High |
| 2 | MER-39 | 2 High |
| 3 | MER-16 | 2 High |
| 4 | MER-17 | 2 High |
| 5 | MER-18 | 2 High |
| 6 | MER-19 | 2 High |
| 7 | MER-20 | 2 High |
| 8 | MER-37 | 2 High |
| 9 | MER-31 | 1 Urgent (Demo gate) |

## Human / UI prerequisites

MCP `plugin-linear-linear` can **list** cycles and **assign** issues (`save_issue.cycle`) but **cannot create** cycles.

1. Team **Merge Quest** → Settings → enable **Cycles** (1 week duration).
2. Create or confirm Cycles 1–4 with dates above (or rename auto-generated cycles to match themes).
3. Agent then assigns each MER-* via MCP.

## Apply checklist (post-approval)

- [ ] Cycles enabled + 4 cycles exist (`list_cycles` non-empty) — **GAP** human UI
- [x] `save_project` Demo e entrega: start/target dates
- [x] `save_issue` labels `hackathon-c*` + dueDate + priority for each row
- [x] MER-8 / Done issues unchanged (no hackathon-c*)
- [x] Audit doc: `docs/linear/2026-07-18-hackathon-cycles-audit.md`
- [x] Linear doc: Hackathon cycles — P0-VS → Demo

## Risks

- Hahn delay blocks MER-12/25/26/30 → MER-31 at risk; mitigate with local fakes + waiver.
- Cycle 4 density: if slip, cut MER-28/37 polish first; never cut perfil→veredito path.
