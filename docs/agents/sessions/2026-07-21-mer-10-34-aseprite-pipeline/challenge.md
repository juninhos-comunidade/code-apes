# Challenge — `2026-07-21-mer-10-34-aseprite-pipeline`

**Alvo:** `plan.md` revisão 1
**Data:** 2026-07-21
**Trilha:** Asset-Content

## Ataques

| # | Vetor | Severidade | Nota |
|---|--------|------------|------|
| 1 | Contrato / API Aseprite | **bloqueante** | Tags estavam em base zero (`0..3`), enquanto a criação via `Sprite:newTag()` deve receber frames do documento em base um. Fixar `frameBase: 1`; coordenadas de pixel permanecem base zero. |
| 2 | Batch / segurança de scripts | **bloqueante** | `io.open` pode pedir permissão humana e quebrar execução batch. Node deve validar/ler contrato, passar parâmetros achatados ao Lua; inspeção deve imprimir JSON em stdout para Node persistir. |
| 3 | Reprodutibilidade / licença | **major** | Aseprite é ferramenta licenciada e não pode ser pressuposta no CI nem distribuída no repo. Separar checks estruturais gratuitos de smoke/validação local que requerem o executável. |
| 4 | Paleta / drift | **major** | JSON, GPL e Design Book podem divergir. JSON deve ser SoT; GPL deve ser gerado e comparado byte a byte; proveniência precisa registrar hash da prancha e racional de redução. |
| 5 | Privacidade / logs | **major** | Caminho absoluto da biblioteca Steam não deve aparecer em relatório versionado ou log CI. `doctor` deve exibir somente tipo de instalação e versão por padrão; caminho apenas com `--verbose` local. |
| 6 | Overwrite / status | **major** | `--force-export` precisa ser limitado a exports `candidate`; fonte e qualquer caminho `approved` devem ser recusados incondicionalmente. |
| 7 | Sessão / duas branches | **nit** | A sessão atravessa dois PRs. O PR da MER-10 deve permanecer parcial; a conclusão da sessão só pode ocorrer após a Wave B ou encerramento explícito da sessão. |
| 8 | Fronteira game-core | pass | Nenhuma regra de jogo foi movida para arte, Aseprite, React ou Phaser. |
| 9 | IA inventa / estilo | pass | Plano limita variações, usa protótipo/Design Book e mantém escolha artística humana. |
| 10 | Linear / dual backlog | pass | MER-10 e MER-34 existentes continuam como SoT; nenhuma issue paralela foi criada. |

## Bloqueios

1. Corrigir bases de frame/coordenada no contrato e nos testes.
2. Remover leitura/gravação arbitrária de arquivo pelos scripts Lua.
3. Criar perfis distintos: repo/CI sem Aseprite e delivery local com Aseprite.

## Veredito inicial

`rework`

## Ações para Orchestrator

- publicar revisão 2 do plano incorporando os dez ataques;
- repetir placeholder scan e consistência das interfaces;
- atualizar este artefato com o veredito pós-rework antes de pedir Approval humano.

## Recheck pós-rework

Plano revisão 2 conferido:

- [x] `frameBase: 1` e `coordinateBase: 0` explícitos no contrato e nos testes;
- [x] Lua recebe parâmetros achatados, imprime inspeção em stdout e não usa `io.open`/`os.execute`;
- [x] `art:check:repo` roda sem Aseprite; `art:check` é gate local licenciado;
- [x] executável/licença não entram no repo nem no CI;
- [x] JSON é SoT da paleta; GPL gerado e provenance com SHA-256 são verificados;
- [x] doctor omite caminho por padrão e só revela localmente com `--verbose`;
- [x] force export restrito a exports/previews candidate; source/approved recusados;
- [x] primeiro PR permanece parcial e a sessão continua aberta para a Wave B;
- [x] fronteiras ADR-0002/0003 preservadas;
- [x] MER-10/MER-34 continuam como Linear SoT.

## Veredito final

`pass`
