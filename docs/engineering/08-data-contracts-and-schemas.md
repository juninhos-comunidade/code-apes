# 08 — Contratos e schemas

## Objetivo

Todos os dados que cruzam fronteiras devem possuir schema versionado.

## Entidades principais

- UserProfile;
- StructuredProfile;
- JobDescription;
- StructuredJob;
- Requirement;
- Competency;
- ProfileJobMatch;
- CardDefinition;
- Deck;
- Run;
- FloorCluster;
- Encounter;
- BattleState;
- Question;
- Challenge;
- Reward;
- Evidence;
- Verdict.

## Exemplo — pergunta

```json
{
  "id": "backend-auth-003",
  "version": 1,
  "status": "active",
  "domain": "backend",
  "competencyId": "backend.authorization",
  "difficulty": "basic",
  "timeLimitSeconds": 30,
  "options": [
    { "id": "A", "text": "..." },
    { "id": "B", "text": "..." }
  ],
  "correctOptionIds": ["B"],
  "partialOptionIds": [],
  "effects": {
    "correct": { "type": "REVEAL_INTENT" },
    "wrong": { "type": "ENEMY_SHIELD", "amount": 2 }
  },
  "explanation": "...",
  "sources": ["..."]
}
```

## Exemplo — carta

```json
{
  "id": "backend-log-analysis",
  "version": 1,
  "name": "Análise de Logs",
  "domain": "backend",
  "archetype": "specialist",
  "family": "control",
  "cost": 2,
  "attack": 1,
  "health": 3,
  "keyword": "reveal",
  "training": false,
  "assetId": "card-backend-log-analysis-v01"
}
```

## Regras

- IDs estáveis;
- versionamento explícito;
- enums canônicos;
- validação na borda;
- migrations;
- compatibilidade;
- schema não contém segredo;
- UI não infere regras ausentes;
- assetId deve existir;
- conteúdo ativo precisa estar aprovado.

## Eventos

- `PROFILE_ANALYZED`;
- `JOB_ANALYZED`;
- `DECK_CREATED`;
- `RUN_STARTED`;
- `CARD_PLAYED`;
- `QUESTION_RESOLVED`;
- `CHALLENGE_SUBMITTED`;
- `CONFIDENCE_CHANGED`;
- `BATTLE_FINISHED`;
- `CHECKPOINT_SAVED`;
- `VERDICT_CREATED`.

## Comandos

- `ANALYZE_PROFILE`;
- `ANALYZE_JOB`;
- `CREATE_DECK`;
- `ENTER_ROOM`;
- `START_ENCOUNTER`;
- `PLAY_CARD`;
- `END_TURN`;
- `ANSWER_QUESTION`;
- `SUBMIT_CHALLENGE`;
- `SELECT_REWARD`;
- `CREATE_VERDICT`.
