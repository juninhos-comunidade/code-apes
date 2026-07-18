# PLANS.md — ExecPlans do Merge Quest

Use um ExecPlan para mudanças que:

- durem várias horas;
- afetem mais de uma aplicação ou pacote;
- alterem contratos;
- envolvam migração;
- alterem a arquitetura;
- criem uma nova leva de assets;
- configurem CI/CD;
- organizem o Linear;
- implementem um fluxo completo.

## Formato obrigatório

```md
# Título

## Objetivo
## Contexto
## Fora do escopo
## Arquivos afetados
## Dependências
## Plano por etapas
## Critérios de aceite
## Estratégia de testes
## Riscos e rollback
## Decisões abertas
## Registro de progresso
```

## Regras

- o plano deve ser atualizado durante a execução;
- cada etapa deve produzir evidência;
- não esconda mudanças de escopo;
- pare quando encontrar uma decisão não coberta;
- registre desvios;
- finalize com auditoria do que foi entregue.
