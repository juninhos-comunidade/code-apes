---
name: merge-quest-art-pipeline
description: Create, revise, export, and validate Merge Quest pixel-art assets through the approved Codex and Aseprite workflow. Use for sprites, animations, tiles, props, cards, HUD, effects, concept sheets, and asset reviews — especially on the Asset/Content track.
---

# Art Pipeline

Trilha **Asset/Content**: Helper → plan → **Challenger obrigatório** → Approval de domínio → produção → Reviewer checklist. Ver `docs/agents/tracks.md` e harness `docs/agents/harness/art/AGENTS.md`.

Conteúdo de catálogo técnico (perguntas/rubricas) é **`merge-quest-content`**; este skill é pixel-art / pipeline Aseprite.

## Before creating

1. Read the Design Book (`docs/design/05-visual-design-and-asset-rules.md`).
2. Read the asset contract / `docs/design/13-codex-aseprite-pipeline.md`.
3. Read approved assets from the same family.
4. List applicable rules.
5. Confirm size, palette, layers, tags and pivot.
6. Propose at most three variations.
7. Garantir plan + **Challenger** (`merge-quest-challenger`) + Approval — **chat ≠ Approval**.

## Production

- create source in `art/source`;
- use Aseprite/Lua when appropriate;
- preserve layers;
- use approved palette;
- export PNG/JSON;
- create preview 1x and 8x;
- run validators;
- resolução lógica 480×270; personagens canvas 48×48; escala inteira; sem antialiasing;
- 75% técnico / 25% fantasia.

## Never

- overwrite approved asset;
- add a new style;
- use antialiasing;
- invent unreadable microdetails;
- embed fake text;
- move to approved without explicit approval artifact;
- deixar skill de marketplace ditar estilo novo (deny-list em `docs/skills-map.md`).

## Deliver

- files;
- comparison;
- validation output;
- notes;
- production cost;
- approval request (artefato; Linear `MER-*` se houver issue).

## Processo

- Linear SoT para issues; propor antes de criar.
- Sem Cursor hooks obrigatórios.
- Reviewer ataca evidência (previews/validators); Challenger atacou o plano.

## Referências

- Design Book + pipeline Codex/Aseprite
- `merge-quest-challenger`, `merge-quest-content`, `merge-quest-reviewer`
