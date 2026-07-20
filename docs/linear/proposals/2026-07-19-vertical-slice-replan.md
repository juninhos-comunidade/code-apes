# Proposal — replanejamento P0-VS por capacidade e caminho crítico

**Status:** Approved em 2026-07-20 — execução autorizada
**Prazo preservado:** 2026-08-14
**Equipe considerada:** Eduardo, Guilherme e Hahn em disponibilidade total

## Problemas corrigidos

- carga de seis issues para Eduardo no C2;
- nove integrações acumuladas no C4;
- ausência de estimativas;
- issues de backend sem assignee;
- dependências escritas mas não cadastradas;
- ausência de spike Phaser 4, áudio e deploy/smoke;
- links canônicos presos à branch antiga.

## Criações autorizáveis

| Chave provisória | Título | Owner | Ciclo | Estimativa | Projeto |
|------------------|--------|-------|-------|-----------:|---------|
| MER-40 | Phaser 4 — spike React/Vite + pixel art | Eduardo | 1 | 1 | Jogo Phaser |
| MER-41 | API — checkpoint repository + SaveCheckpoint | Backend | 2 | 1 | Backend e banco |
| MER-42 | Entrega — deploy Vercel/Railway + smoke de produção | Backend | 3 | 1 | Demo e entrega |
| MER-43 | Phaser — áudio e música mínimos do VS | Eduardo | 4 | 1 | Jogo Phaser |

## Movimentações de ciclo

| Issue | De | Para | Owner após ajuste | Estimativa |
|-------|---:|-----:|-------------------|-----------:|
| MER-34 | 2 | 1 | Eduardo | 2 |
| MER-33 | 2 | 1 | Hahn | 1 |
| MER-11 | 3 | 2 | Guilherme | 1 |
| MER-13 | 3 | 2 | Guilherme | 1 |
| MER-14 | 3 | 2 | Guilherme | 2 |
| MER-26 | 3 | 2 | Hahn | 2 |
| MER-27 | 3 | 2 | Eduardo | 1 |
| MER-16 | 4 | 3 | Eduardo | 1 |
| MER-17 | 4 | 3 | Eduardo | 2 |
| MER-15 | 4 | 3 | Guilherme | 1 |
| MER-39 | 4 | 3 | Guilherme | 2 |

Issues não listadas permanecem no ciclo atual, com estimativa de 1 ou 2 conforme a distribuição do plano.

## Capacidade final por ciclo

`1 ponto = aproximadamente 1 dia de trabalho`. O objetivo é limitar cada pessoa a 5 pontos planejados por ciclo.

| Ciclo | Owner | Issues e estimativas | Total |
|------:|-------|----------------------|------:|
| 1 | Eduardo | MER-9 (1), MER-10 (1), MER-34 (2), MER-40 (1) | 5 |
| 1 | Guilherme | MER-24 (2), MER-35 (2), MER-32 (1) | 5 |
| 1 | Hahn | MER-12 (2), MER-33 (1) | 3 |
| 2 | Eduardo | MER-21 (1), MER-22 (1), MER-23 (2), MER-27 (1) | 5 |
| 2 | Guilherme | MER-11 (1), MER-13 (1), MER-14 (2) | 4 |
| 2 | Backend | MER-25 (2), MER-26 (2), MER-41 (1) | 5 |
| 3 | Eduardo | MER-36 (1), MER-28 (1), MER-16 (1), MER-17 (2) | 5 |
| 3 | Guilherme | MER-29 (2), MER-15 (1), MER-39 (2) | 5 |
| 3 | Backend | MER-30 (2), MER-38 (2), MER-42 (1) | 5 |
| 4 | Eduardo | MER-19 (2), MER-43 (1), MER-31 (1) | 4 |
| 4 | Guilherme | MER-18 (2), MER-20 (2) | 4 |
| 4 | Backend | MER-37 (1) | 1 |

Capacidade não ocupada no C4 é buffer deliberado para integração, bugs, dados e segundo playtest; não deve ser preenchida antecipadamente com stretch.

## Initiative e leads

- Criar ou reutilizar `Merge Quest — Vertical Slice e MVP`, status `Active`, prioridade `Urgent`, owner Eduardo e target date `2026-08-14`.
- Associar os dez projetos existentes à Initiative.

| Projeto | Lead proposto |
|---------|---------------|
| Produto e requisitos | Eduardo |
| UX/UI e Design Book | Guilherme |
| Arquitetura e infraestrutura | Eduardo |
| Frontend React | Guilherme |
| Jogo Phaser | Eduardo |
| Backend e banco | Hahn |
| IA e conteúdo técnico | Guilherme |
| Arte e animação | Eduardo |
| QA, acessibilidade e telemetria | Eduardo |
| Demo e entrega | Eduardo |

## Relações mínimas a materializar

- MER-24 ← MER-10
- MER-21/MER-22 ← MER-9
- MER-23 ← MER-21, MER-22
- MER-25 ← MER-12, MER-35
- MER-41 ← MER-25
- MER-27 ← MER-22, MER-24, MER-35, MER-40
- MER-14 ← MER-11, MER-13, MER-26, MER-35
- MER-30 ← MER-35; remover dependência em MER-25
- MER-29 ← MER-30
- MER-38 ← MER-21, MER-22, MER-35, MER-41
- MER-16 ← MER-27, MER-28, MER-36, MER-34
- MER-39 ← MER-27, MER-29, MER-24
- MER-17 ← MER-23, MER-28, MER-29, MER-39
- MER-18 ← MER-16, MER-29, MER-24
- MER-19 ← MER-17, MER-23, MER-29
- MER-20 ← MER-19, MER-21, MER-41, MER-14
- MER-42 ← MER-12, MER-24, MER-25
- MER-37 ← MER-22, MER-17, MER-20
- MER-43 ← MER-40, MER-24, MER-34
- MER-31 ← MER-15, MER-18, MER-19, MER-20, MER-33, MER-38, MER-37, MER-42

## Alterações de conteúdo

- Links de `docs/MER-5-agent-workflow-harness` serão substituídos por `main`.
- MER-18 declarará código arbitrário/sandbox fora do P0.
- MER-20 incluirá escolha explícita de recompensa.
- MER-33 incluirá CI, link check e smoke a11y.
- MER-34 registrará reuse/derivação/licenças como estratégia de prazo.
- MER-32 incluirá normalização de owners, Initiative e auditoria de estimates e relações.

## Condições

1. Novas issues criadas antes de relações que as referenciem.
2. Audit read-only após o batch.
3. Nenhuma issue stretch entra nos quatro ciclos.
