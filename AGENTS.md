# WhatsApp Use docs instructions

This repository contains the public WhatsApp Use documentation.

## Product boundaries

- The public product surfaces are the REST API and the remote WhatsApp MCP server.
- Do not document non-production endpoints, internal hostnames, local-only workflows, or unreleased products.
- Use production URLs in public examples:
  - `https://api.whatsapp-use.com`
  - `https://api.whatsapp-use.com/mcp/whatsapp`

## Terms

- Use "organization" for the account boundary.
- Use "connection" for a paired WhatsApp account.
- Use "API key" for REST credentials created in the platform dashboard.
- Use "OAuth grant" for MCP client authorization.

## Writing style

- Use active voice and second person.
- Keep sentences concise: one idea per sentence.
- Use sentence case for headings.
- Use code formatting for file names, commands, paths, scopes, endpoint paths, and request fields.
- Prefer concrete endpoint paths, scopes, request bodies, and response fields over broad product language.

## Tooling

- Mintlify configuration lives in `docs.json`.
- Pages are MDX files with YAML frontmatter.
- Run `npx mint validate` and `npx mint broken-links` before pushing docs changes.
