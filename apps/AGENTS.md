# AGENTS.md — apps

Applications compose packages and adapters. They do not own reusable domain rules.

- `web` is presentation and composition.
- `api` is presentation, application composition and infrastructure composition.
- business rules belong to packages/domain modules.
- do not import app internals from another app.
