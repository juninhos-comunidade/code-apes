# 07 — Arquitetura POO, TDD e em camadas

## 1. Objetivo

Aplicar POO e arquitetura em camadas sem transformar o projeto em um conjunto de classes artificiais.

O Merge Quest usa um modelo híbrido:

- POO para domínio, casos de uso, portas e adaptadores;
- funções puras/reducers para transições determinísticas do jogo;
- composição em vez de herança profunda;
- TDD para regras críticas.

## 2. Camadas

### 2.1 Domínio

Contém regras puras e conceitos do negócio.

Exemplos:

- `UserProfile`;
- `JobDescription`;
- `Competency`;
- `Run`;
- `Battle`;
- `CardDefinition`;
- `UnitInstance`;
- `Question`;
- `Challenge`;
- `Evidence`;
- `Verdict`.

Não conhece:

- HTTP;
- Supabase;
- React;
- Phaser;
- OpenAI;
- filesystem;
- framework.

### 2.2 Aplicação

Contém casos de uso que coordenam domínio e portas.

Exemplos:

- `AnalyzeProfile`;
- `AnalyzeJob`;
- `CompareProfileToJob`;
- `BuildInitialDeck`;
- `GenerateRun`;
- `StartBattle`;
- `AnswerQuestion`;
- `SubmitShopChallenge`;
- `CreateVerdict`;
- `SaveCheckpoint`.

### 2.3 Infraestrutura

Implementa portas.

Exemplos:

- `SupabaseProfileRepository`;
- `PostgresCatalogRepository`;
- `OpenAIProfileAnalyzer`;
- `SandboxChallengeRunner`;
- `FileAssetCatalog`;
- `TelemetryAdapter`.

### 2.4 Apresentação

- controllers FastAPI;
- componentes React;
- adaptadores Phaser;
- CLI e scripts;
- serialização externa.

Apresentação transforma entrada em comando e saída em view model. Não decide regra.

## 3. Dependência

```text
Presentation → Application → Domain
Infrastructure ────────────┘
```

A aplicação depende de interfaces. Infraestrutura implementa interfaces.

## 4. POO

### Entidades

Possuem identidade e protegem invariantes.

Exemplo:

```ts
class Run {
  private readonly id: RunId;
  private confidence: Confidence;
  private status: RunStatus;

  applyDamage(amount: PositiveInt): void {
    this.confidence = this.confidence.subtract(amount);
    if (this.confidence.isZero()) {
      this.status = RunStatus.KnockedOut;
    }
  }
}
```

### Value Objects

- imutáveis;
- validados na construção;
- comparados por valor.

Exemplos:

- `RunId`;
- `CompetencyId`;
- `Confidence`;
- `Mana`;
- `CardCost`;
- `DomainId`;
- `EvidenceLevel`.

### Serviços de domínio

Use quando uma regra não pertence naturalmente a uma entidade.

- `DeckCompositionPolicy`;
- `QuestionPenaltyPolicy`;
- `RewardQualityPolicy`;
- `VerdictPolicy`.

### Repositórios

Interfaces do domínio/aplicação:

```ts
interface RunRepository {
  findById(id: RunId): Promise<Run | null>;
  save(run: Run): Promise<void>;
}
```

Não retornar objetos crus do banco para o domínio.

### Herança

Evitar hierarquias profundas.

Preferir:

- composição;
- estratégias;
- policies;
- interfaces;
- dados + comportamento;
- factory.

Herança somente quando existe substituição real e estável.

## 5. Núcleo funcional determinístico

O combate pode usar reducer puro:

```ts
type GameCommand =
  | { type: "PLAY_CARD"; cardId: string; slot: Slot }
  | { type: "END_TURN" }
  | { type: "ANSWER_QUESTION"; optionId: string };

type GameResult = {
  state: GameState;
  events: GameEvent[];
};

function reduceGameCommand(
  state: GameState,
  command: GameCommand,
): GameResult;
```

POO envolve o domínio maior; o reducer garante replay, teste e determinismo.

## 6. TDD

### Ciclo

1. RED;
2. GREEN;
3. REFACTOR.

### Ordem de testes

#### Unidade

- value objects;
- policies;
- reducer;
- cálculo de dano;
- seleção de perguntas;
- pesos do veredito;
- checkpoint.

#### Integração

- application service + repository fake;
- API + banco;
- React + game-core;
- Phaser + game-core;
- IA + schema;
- sandbox.

#### E2E

- perfil;
- vaga;
- deck;
- batalha;
- pergunta;
- loja;
- chefe;
- relatório.

## 7. Exemplo de TDD

Requisito:

> resposta incorreta não causa dano direto nem reduz Confiança.

Teste:

```ts
it("aplica apenas penalidade tática em resposta incorreta", () => {
  const state = battleBuilder().withConfidence(7).build();

  const result = reduceGameCommand(state, {
    type: "ANSWER_QUESTION",
    optionId: "wrong",
  });

  expect(result.state.run.confidence).toBe(7);
  expect(result.events).toContainEqual(
    expect.objectContaining({ type: "QUESTION_PENALTY_APPLIED" }),
  );
});
```

Depois implemente o mínimo.

## 8. Convenção por aplicação

### web

```text
src/
├── presentation/
├── application/
├── infrastructure/
└── composition-root/
```

### api

```text
app/
├── domain/
├── application/
├── infrastructure/
├── presentation/
└── tests/
```

### game-core

```text
src/
├── domain/
├── application/
├── commands/
├── events/
├── policies/
├── serialization/
└── tests/
```

## 9. Anti-padrões proibidos

- regra em controller;
- regra em componente React;
- regra em cena Phaser;
- service genérico com centenas de métodos;
- DTO usado como entidade;
- repository retornando row do banco;
- mocks de tudo;
- teste que depende de animação;
- IA decidindo regra;
- herança por conveniência;
- singleton global de estado;
- import circular;
- classe sem invariantes apenas por “usar POO”.

## 10. Definition of Done arquitetural

- camada correta;
- dependência correta;
- teste primeiro ou teste de regressão;
- contrato atualizado;
- sem regra duplicada;
- sem import proibido;
- documentação local;
- PR explica o design.
