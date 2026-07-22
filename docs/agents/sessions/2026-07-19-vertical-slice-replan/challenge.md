# Challenge — `2026-07-19-vertical-slice-replan`

## Veredito

**PASS com condições.** O replanejamento corrige a concentração do ciclo 4, mas as novas IDs devem ser criadas antes do remapeamento de dependências.

## Achados

### Major

- **MER-34 ainda seria ampla sem reuse:** limitar a palette swaps, derivações e packs licenciados; nenhuma arte aprovada pode ser sobrescrita.
- **Caminho crítico pode continuar invisível:** toda entrada de `Depende de` deve virar `blockedBy`; auditoria deve comparar descrição e relações.
- **Walking skeleton não pode esperar UI final:** C2 usa apresentação mínima/fakes, preservando core determinístico e contratos reais.
- **Sandbox ameaça escopo e segurança:** código arbitrário fica explicitamente fora do P0; desafio de MER-18 usa catálogo/rubrica.
- **Deploy no C4 elimina buffer:** smoke inicial foi antecipado para C3.

### Nit

- Milestones do projeto Demo podem ser mantidos, mas não devem substituir relações entre issues.
- Telemetria é no-op/local sink aceitável no VS e não deve introduzir fornecedor externo.

## Ajustes incorporados

- Limite de 5 pontos por pessoa/ciclo.
- Deploy antecipado para C3.
- Escopo de assets e sandbox explicitado.
- Ordem de criação antes do remapeamento de dependências registrada.
