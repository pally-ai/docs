# WhatsApp Use docs

Public developer documentation for WhatsApp Use.

The live docs are hosted at `https://docs.whatsapp-use.com`.

## Branches

- `master` is the production deployment branch.
- `dev` is used for docs changes before promotion.

Public docs should describe the production product only. Do not document non-production URLs, internal services, local-only flows, or unreleased product surfaces.

## Local development

Run the Mintlify CLI from this directory:

```bash
npx mint dev
```

Validate before pushing:

```bash
npx mint validate
npx mint broken-links
```

The CLI currently expects an LTS Node version. Use Node 22 if your default Node version is newer.

## Structure

- `docs.json` controls navigation, branding, API reference generation, and global settings.
- `openapi/whatsapp-use.yaml` is the public REST API reference source.
- `guides/` contains product guides for REST API usage.
- `mcp/` contains remote MCP installation, OAuth, and tool docs.
- `.mintlify/Assistant.md` defines the docs assistant behavior.

## Writing rules

- Use production URLs only: `https://api.whatsapp-use.com` and `https://api.whatsapp-use.com/mcp/whatsapp`.
- Treat organizations as the account boundary.
- Use "connection" for a paired WhatsApp account.
- REST API examples use dashboard-created API keys.
- MCP examples use OAuth and should not use API keys.
- Do not document unreleased product surfaces.
