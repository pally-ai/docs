# WhatsApp Use docs

Public developer documentation for WhatsApp Use.

The live docs are hosted at `https://docs.whatsapp-use.com`.

The site is a [Fumadocs](https://fumadocs.dev) (Next.js) app deployed to
Cloudflare Workers via OpenNext. The legacy Mintlify files (`docs.json` and the
root-level MDX) still serve production until cutover; see
`plans/fumadocs-docs-site-plan.md` in the workspace root for the migration
plan.

## Branches

- `master` is the production deployment branch.
- `dev` deploys the staging worker (`docs-staging.whatsapp-use.com`).

Public docs should describe the production product only. Do not document non-production URLs, internal services, local-only flows, or unreleased product surfaces.
Do not document `admin.whatsapp-use.com` or internal admin APIs in public docs.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000 (regenerates the API reference first)
```

Other commands:

```bash
npm run build              # production build (includes API reference generation)
npm run generate:api       # regenerate content/docs/api/reference from the OpenAPI spec
npm run preview            # full OpenNext build + local Workers runtime
npm run typecheck
npm run deploy:cloudflare                  # deploy production worker (CI does this on master)
npm run deploy:cloudflare -- --env staging # deploy staging worker (CI does this on dev)
```

Deploys run from GitHub Actions (`.github/workflows/deploy-cloudflare.yml`)
and need the `CLOUDFLARE_API_TOKEN` repo secret. Manual deploys need a wrangler
login with Workers permissions (`npx wrangler login`).

## Structure

- `content/docs/guides/` — Guides tab (introduction, concepts, quickstart, common tasks).
- `content/docs/api/` — REST API tab: hand-written concept pages plus
  `reference/`, which is generated from `openapi/whatsapp-use.yaml` (do not
  edit generated files; rerun `npm run generate:api`).
- `content/docs/mcp/` — MCP tab (quickstart, overview, install, OAuth, tools).
- `openapi/whatsapp-use.yaml` — public REST API reference source.
- `public/skill.md` — AI skill file served at `/skill.md`.
- `app/llms.txt`, `app/llms-full.txt`, `app/llms.mdx/` — AI-readable docs
  endpoints. Any page URL also serves raw markdown with a `.mdx` or `.md`
  suffix.
- `wrangler.toml` — Cloudflare Workers config (staging + production).

## Writing rules

- Use production URLs only: `https://api.whatsapp-use.com` and `https://api.whatsapp-use.com/mcp/whatsapp`.
- Treat organizations as the account boundary.
- Use "connection" for a paired WhatsApp account.
- REST API examples use dashboard-created API keys.
- MCP examples use OAuth and should not use API keys.
- Do not document unreleased product surfaces.
