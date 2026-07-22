# Replanejamento do Vertical Slice — plano de execução

## Objetivo

Manter a demo em 14 de agosto com três pessoas em disponibilidade total, garantindo uma entrega executável ao fim de cada ciclo e dois dias finais úteis para estabilização.

## Gates semanais

| Ciclo | Gate verificável |
|------:|------------------|
| 1 — Fundação | React monta Phaser 4; API `/health`; contratos compilam; core tem primeiro teste; assets mínimos possuem fontes/licenças |
| 2 — Walking skeleton | perfil/vaga de teste iniciam run; comando tipado chega ao core; checkpoint persiste; combate determinístico roda sem UI final |
| 3 — Loop jogável | 5–6 salas, batalha comum, pergunta, deck/briefing e conteúdo curado funcionam integrados |
| 4 — Demo | loja, desafio, chefe, relatório, áudio, telemetria, deploy e playtest 12–18 min |

## Capacidade-alvo

- Cada pessoa recebe no máximo 5 pontos por ciclo; `1 ponto = aproximadamente 1 dia`.
- Issues acima de 2 pontos são divididas ou têm escopo reduzido.
- Ciclo 4 reserva no mínimo 1 ponto por pessoa para correções; Hahn mantém capacidade adicional de suporte ao deploy/dados.

## Novas issues propostas

1. `Phaser 4 — spike React/Vite + pixel art` — Eduardo — C1 — 1 ponto — `[mq:runtime]`.
2. `API — checkpoint repository + SaveCheckpoint` — Hahn — C2 — 1 ponto — `[mq:api]`.
3. `Entrega — deploy Vercel/Railway + smoke de produção` — Hahn — C3 — 1 ponto — `[mq:qa]`.
4. `Phaser — áudio e música mínimos do VS` — Eduardo — C4 — 1 ponto — `[mq:runtime]`.

## Distribuição revisada

| Ciclo | Eduardo | Guilherme | Hahn |
|------:|---------|-----------|------|
| C1 | MER-9, MER-10, MER-34, Phaser 4 spike | MER-24, MER-35, MER-32 | MER-12, MER-33 |
| C2 | MER-21, MER-22, MER-23, MER-27 | MER-11, MER-13, MER-14 | MER-25, MER-26, checkpoint novo |
| C3 | MER-36, MER-28, MER-16, MER-17 | MER-29, MER-15, MER-39 | MER-30, MER-38, deploy/smoke novo |
| C4 | MER-19, áudio novo, MER-31, correções | MER-18, MER-20, correções | MER-37, suporte produção/dados, correções |

## Ajustes de escopo

- MER-23 fica restrita ao motor de combate; serialização/replay continuam como aceite testável, sem criar sistema de replay visual.
- MER-25 fica restrita à persistência de perfil/vaga/run; checkpoint passa para issue própria.
- MER-34 usa derivação, palette swaps e packs aprovados/licenciados; não exige personagens totalmente únicos para cada papel.
- MER-18 não executa código arbitrário no P0; desafio é avaliado por catálogo/rubrica. Sandbox isolado permanece fora.
- MER-20 inclui escolha de recompensa e acessibilidade observável no relatório.
- MER-33 passa a incluir GitHub Actions, link check e smoke de acessibilidade.

## Ordem do batch Linear

1. Criar as quatro novas issues.
2. Atualizar owners, estimates, cycles e due dates.
3. Atualizar descrições/aceites e links para `main`.
4. Criar relações `blockedBy` usando as novas IDs.
5. Remover `blocked` de MER-12/25/26/30 após normalizar os owners.
6. Associar os projetos à Initiative `Merge Quest — Vertical Slice e MVP`.
7. Auditar contagem por ciclo/pessoa, relações, estimativas e links.

## Verificação pós-mutation

- três frentes com owners atribuídos conforme o plano.
- máximo de 5 pontos por pessoa/ciclo.
- nenhuma dependência declarada apenas em texto.
- nenhum link para `docs/MER-5-agent-workflow-harness`.
- C4 com até 3 entregas funcionais por pessoa mais buffer.
- MER-31 bloqueada por todos os gates obrigatórios da demo.
