# AGENTS.md — Merge Quest

## Escopo destas instruções

Estas instruções valem para todo o repositório. Arquivos `AGENTS.md` mais próximos de um diretório podem acrescentar regras específicas, mas não podem contrariar as regras de produto, segurança, arquitetura e escopo deste arquivo.

## Missão do agente

Ajudar a equipe a construir o Merge Quest com:

- escopo controlado;
- arquitetura testável;
- conteúdo técnico auditável;
- pixel art consistente;
- integração segura entre React, Phaser, API, banco e IA;
- documentação atualizada;
- tarefas rastreáveis no Linear (`MER-*`);
- workflow multi-agente agnóstico de tool (`agent.md`, `docs/agents/`).

## Regra zero

**Não implemente antes de entender.**

Antes de qualquer mudança relevante:

1. leia os documentos associados;
2. resuma o entendimento;
3. liste arquivos que pretende criar ou alterar;
4. identifique riscos e dependências;
5. aguarde aprovação quando a ação for destrutiva, externa ou ampliar escopo.

**Chat ≠ Approval.** Pedido ou preferência no chat é hipótese (`[FATO]` / `[DECISÃO]`). Só artefato de Approval em sessão (`docs/agents/sessions/`) avança fase. Plano e preferências humanas são sempre revisáveis (Helper + Challenger).

## Ações que exigem confirmação

- instalar ou remover dependências;
- apagar ou mover arquivos aprovados;
- alterar configuração global;
- criar recursos externos;
- executar comandos fora do workspace;
- publicar deploy;
- alterar banco compartilhado;
- criar ou modificar itens no Linear;
- substituir assets aprovados;
- mudar stack, arquitetura ou escopo;
- usar serviços pagos;
- enviar dados a serviços externos.

## Missão atual do repositório

O bootstrap do monorepo já foi feito. A missão atual dos agentes é:

1. seguir o committee em `agent.md` + `docs/agents/workflow.md` (trilhas Full / Light / Asset-Content);
2. usar Linear como SoT de issues (`MER-*`); repo como SoT de specs/ADR/sessões;
3. propor mudanças no Linear antes de criar (MCP ou UI);
4. não re-scaffolding a árvore sem pedido explícito;
5. implementar vertical slice com TDD e fronteiras de `game-core`.

Skill de bootstrap (`merge-quest-bootstrap`) só para reorg/scaffold — não é o ciclo padrão.

## Arquitetura obrigatória

- monorepo;
- pnpm Workspaces;
- Turborepo;
- uma aplicação web principal;
- React como shell do produto;
- Phaser montado dentro da aplicação;
- `game-core` como fonte de verdade do estado do jogo;
- regras determinísticas fora de React e das cenas Phaser;
- API e persistência atrás de contratos;
- IA atrás da API;
- conteúdo técnico vindo de catálogo curado;
- arquitetura em camadas com dependências apontando para o domínio;
- TDD para regras de negócio e fluxos críticos.

## Regras de dependência

- `game-core` não importa React, Phaser, navegador, banco ou SDK de IA;
- `game-runtime` pode depender de Phaser e `game-core`;
- `apps/web` pode depender de UI, contratos e adaptadores;
- `apps/api` depende de aplicação, contratos e infraestrutura;
- domínio não depende de infraestrutura;
- adaptadores implementam interfaces definidas pelas camadas internas;
- nenhum pacote pode importar diretamente detalhes internos de outro pacote;
- imports circulares são proibidos.

## POO

- preferir composição a herança;
- entidades protegem invariantes;
- value objects são imutáveis;
- casos de uso coordenam domínio e portas;
- repositórios são interfaces, não classes de banco;
- controllers não possuem regra de negócio;
- cenas Phaser não possuem regra central;
- componentes React não possuem regra de avaliação;
- serviços de IA não decidem o veredito fora do motor determinístico.

## TDD

Para regras e correções:

1. RED — escrever teste que falha;
2. GREEN — implementar a menor mudança que faz passar;
3. REFACTOR — melhorar sem mudar comportamento.

Não considerar concluído sem:

- teste relevante;
- typecheck;
- lint;
- validação de contratos;
- atualização de documentação quando aplicável.

## Conteúdo técnico e IA

A IA interpreta, contextualiza e redige. A IA não pode:

- inventar resposta correta;
- criar pergunta ativa sem revisão;
- fabricar competência;
- alterar resultado do combate;
- decidir o veredito sem regras;
- selecionar asset inexistente;
- ignorar rubrica;
- confundir ausência de evidência com incompetência.

## Arte

- seguir o Design Book;
- pixel art real;
- resolução lógica 480x270;
- escala inteira 2x;
- personagens em canvas técnico 48x48;
- sem antialiasing;
- 75% técnico e 25% fantasia;
- nenhuma alteração silenciosa em asset `approved`;
- criar nova versão candidata;
- mostrar preview 1x e ampliado;
- não inventar estilo novo.

## Git e PR

- `main` protegida;
- branch curta por issue;
- padrão `tipo/MER-123-descricao` (Linear);
- PR obrigatório;
- squash merge;
- commits convencionais;
- issue do Linear vinculada;
- critérios de aceite no PR;
- não misturar múltiplas áreas sem necessidade.

## Qualidade

Cada entrega deve ser:

- verificável;
- pequena;
- testada;
- documentada;
- rastreável;
- reversível;
- coerente com o vertical slice;
- sem expandir escopo silenciosamente.

## Comunicação

Ao concluir uma tarefa, reportar:

- resumo;
- arquivos alterados;
- testes executados;
- resultado;
- riscos restantes;
- decisões tomadas;
- próximos passos que dependem de aprovação.
