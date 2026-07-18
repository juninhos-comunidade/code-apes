# 03 — Game design canônico

## Loop principal

1. ler briefing;
2. explorar;
3. escolher rota;
4. enfrentar conflito;
5. responder perguntas;
6. receber recompensa;
7. resolver desafio opcional;
8. enfrentar chefe;
9. receber veredito.

## Exploração

- salas top-down 3/4;
- movimento livre;
- tela fixa por sala;
- sem combate de ação;
- um botão de interação;
- seis formatos de sala;
- três templates por formato;
- slots procedurais seguros;
- centro livre;
- props concentrados nas bordas.

## Arquiteturas

### Laboratório/Oficina

- metal;
- vidro;
- cabos;
- máquinas;
- bancadas;
- manutenção;
- produção.

### Fortaleza/Arquivo

- madeira técnica;
- pedra tratada;
- ferro;
- latão;
- estantes;
- trilhos;
- cofres;
- registros.

## Domínios

- Backend;
- Frontend;
- QA;
- Banco de Dados;
- Cloud;
- IA;
- Cyber;
- Mobile.

Cada agrupamento tem um domínio dominante e até um secundário.

## Combate

### Tabuleiro

- 3x3 aliado;
- 3x3 inimigo;
- três pistas;
- profundidade frente/meio/trás.

### Fonte de verdade

O `game-core` calcula o resultado. Animação não muda regra.

### Resolução

- cálculo simultâneo;
- apresentação esquerda → centro → direita;
- pista inimiga vazia causa dano direto ao comandante;
- avanço ocorre após a resolução;
- unidade que avança não ataca novamente no mesmo ciclo.

### Cartas

Sempre visível:

- custo;
- ataque;
- vida;
- nome;
- keyword;
- domínio;
- treinamento;
- arte.

### Arquétipos aliados

- Vanguard;
- Attacker;
- Support;
- Specialist.

### Funções inimigas

- Blocker;
- Aggressor;
- Saboteur;
- Anomaly.

## Confiança

- vida do jogador;
- 10 segmentos;
- estados estável, abalado e crítico;
- sem flashing agressivo.

## Perguntas

São microdesafios integrados ao combate.

Consequências possíveis:

- escudo;
- mana;
- compra;
- intenção oculta;
- custo temporário;
- slot temporariamente bloqueado;
- debuff leve;
- avanço de regra.

## Loja

Desafios aplicados:

- correção de função;
- debugging;
- code review;
- SQL;
- teste;
- decisão arquitetural;
- acessibilidade;
- segurança.

## Chefes

- fase 1;
- gatilho próprio;
- transição;
- fase 2;
- uma mecânica que evolui;
- recompensa entre três opções.

## Recrutador

Comandante final que sintetiza a vaga e a run. O resultado gera `MERGED`, `CHANGES REQUESTED` ou `DRAFT`.

## Duração-alvo

- comum: 3,5–5 min;
- elite: 5,5–8 min;
- chefe: 8–11 min;
- Recrutador: 9–13 min;
- vertical slice: 12–18 min;
- run completa: 60–90 min.
