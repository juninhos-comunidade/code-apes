# 02 — Requisitos funcionais e não funcionais

## Requisitos funcionais

### RF-01 — Autenticação

Permitir cadastro, login, logout, sessão e associação de runs ao usuário.

### RF-02 — Entrada e manutenção do perfil

Permitir texto livre e campos estruturados para competências, tecnologias, experiências, projetos, formação e interesses.

### RF-03 — Análise do perfil

Produzir competências normalizadas com:

- domínio;
- origem;
- evidência;
- contexto;
- estado;
- tags;
- incerteza.

O usuário deve revisar e confirmar.

### RF-04 — Entrada da vaga

Permitir colar, revisar e armazenar uma descrição de vaga.

### RF-05 — Análise da vaga

Identificar:

- requisitos obrigatórios;
- desejáveis;
- responsabilidades;
- tecnologias;
- senioridade;
- pesos;
- domínios;
- agrupamentos;
- dificuldade.

### RF-06 — Cruzamento perfil × vaga

Classificar cada requisito como:

- coberto;
- parcialmente coberto;
- competência transferível;
- em treinamento;
- não identificado;
- incerto.

### RF-07 — Deck inicial

Montar 15 cartas:

- 13 do perfil;
- até 2 de treinamento.

### RF-08 — Geração da run

Compor agrupamentos de requisitos, salas, encontros, perguntas, desafios, recompensas e chefe.

### RF-09 — Exploração

- movimento livre em quatro direções;
- colisões;
- salas fixas;
- portas;
- minimapa;
- interações;
- encontro físico com comandante.

### RF-10 — Combate

- grid aliado 3x3;
- grid inimigo 3x3;
- três pistas;
- mana;
- mão;
- deck;
- descarte;
- cartas;
- unidades;
- comandante;
- intenção parcial;
- resolução determinística.

### RF-11 — Perguntas

Quantidade:

- comum: 2;
- elite: 3;
- chefe: 4;
- Recrutador: 4.

Regras:

- 30 segundos;
- banco curado;
- correta/parcial/incorreta;
- efeito tático;
- sem dano direto;
- sem perda direta de Confiança;
- acessibilidade de tempo.

### RF-12 — Loja e desafio

- 10 minutos;
- duas tentativas;
- autosave;
- envio automático;
- rubrica;
- sandbox;
- recompensa reduzida na segunda tentativa.

### RF-13 — Confiança

- 10 segmentos;
- persiste no andar;
- zerar causa nocaute;
- recuperação parcial em eventos e chefe.

### RF-14 — Nocaute e replay

- mostrar erros;
- explicar conceitos;
- recomendar próximo passo;
- retornar ao checkpoint;
- evitar farm.

### RF-15 — Chefes

- duas fases;
- gatilho próprio;
- regra evolutiva;
- quatro perguntas;
- três recompensas;
- arena derivada da sala.

### RF-16 — Veredito

- `MERGED`;
- `CHANGES REQUESTED`;
- `DRAFT`.

Pesos:

- cobertura do perfil: 45%;
- perguntas: 15%;
- desafios: 25%;
- treinamento/evolução: 15%.

### RF-17 — Relatório

Mostrar aderências, evidências, treinamento, lacunas, atividades e recomendações.

### RF-18 — Persistência

Salvar checkpoints no fim de sala, batalha, andar, nocaute, recompensa e veredito.

## Requisitos não funcionais

### RNF-01 — Segurança

- segredos fora do repositório;
- sandbox;
- rede bloqueada no código do usuário;
- limite de tempo e memória;
- minimização de dados;
- logs seguros.

### RNF-02 — Acessibilidade

- teclado e mouse;
- foco visível;
- cor não é único indicador;
- redução de movimento;
- cronômetros configuráveis;
- texto ampliável.

### RNF-03 — Desempenho

- carregamento por atlas;
- nearest-neighbor;
- builds seletivos;
- animações aceleráveis;
- estado local durante combate.

### RNF-04 — Testabilidade

- game-core sem navegador;
- contratos versionados;
- testes unitários;
- integração;
- E2E;
- visual.

### RNF-05 — Auditabilidade

Cada evidência, pergunta e desafio registra versão, origem, competência, resultado, data e run.

### RNF-06 — Manutenibilidade

- camadas;
- dependência invertida;
- módulos pequenos;
- documentação próxima do código;
- nenhuma regra escondida em UI.
