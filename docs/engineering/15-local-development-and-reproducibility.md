# 15 — Desenvolvimento local e reprodutibilidade

## Contrato de ambiente

| Ferramenta | Versão |
|---|---:|
| Node.js | 24.15.0 recomendada; 24.14.0 ou superior na linha 24 |
| pnpm | 11.9.0 |
| Lockfile | obrigatório e congelado em CI |
| Line endings | LF |
| Encoding | UTF-8 |

`.nvmrc`, `.node-version`, `packageManager`, `.npmrc`, `.editorconfig` e `.gitattributes` formalizam este contrato.

## Bootstrap em máquina nova

```powershell
git clone <URL_DO_REPOSITORIO>
cd "Merge Quest"
pnpm install --frozen-lockfile
pnpm verify
```

O clone somente será possível após o primeiro commit ser publicado em um remoto compartilhado.

## Ambientes

- exemplos versionados: `.env.example` e `apps/api/.env.example`;
- valores reais: `.env`, nunca versionados;
- checks locais não precisam de credenciais;
- adapters externos validam sua configuração apenas quando construídos;
- banco, IA e storage devem possuir fakes para testes padrão.

## Regra do lockfile

- adicionar ou remover dependência atualiza manifest e `pnpm-lock.yaml` juntos;
- CI e validação limpa usam `--frozen-lockfile`;
- não editar o lockfile manualmente;
- peer dependencies devem permanecer sem conflitos;
- somente scripts de build explicitamente permitidos podem executar.

## Verificação

`pnpm verify` executa integridade reprodutível, typecheck, testes, lint e build. A auditoria limpa repete isso em diretório temporário sem reutilizar `node_modules` do workspace.

## Handoffs

- React ↔ Phaser: comandos, eventos e snapshots tipados;
- frontend ↔ API: contratos versionados e erros padronizados;
- API ↔ IA: prompt versionado, schema obrigatório, timeout e auditoria;
- conteúdo ↔ core: IDs estáveis e validação;
- banco ↔ aplicação: repositories convertem rows para entidades.
