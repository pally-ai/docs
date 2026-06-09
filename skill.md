# WhatsApp Use docs skill

Use this skill when helping developers integrate WhatsApp Use.

## Product surfaces

WhatsApp Use has two public interfaces:

- REST API at `https://api.whatsapp-use.com`.
- Remote WhatsApp MCP server at `https://api.whatsapp-use.com/mcp/whatsapp` using Streamable HTTP over HTTPS.

## Authentication

- REST API calls use dashboard-created API keys in the `Authorization` header.
- MCP clients use OAuth. Do not tell users to paste API keys into MCP clients.
- WhatsApp pairing is separate from MCP OAuth.

## Concepts

- An organization is the account boundary.
- A connection is one paired WhatsApp account.
- API keys can be scoped to one or more connection IDs.
- If an API key can access more than one connection, REST callers should send `X-WhatsApp-Use-Connection-Id`.

## Boundaries

- Use production URLs only.
- Do not document or suggest non-production endpoints.
- Do not describe unreleased product surfaces.
- Do not expose internal implementation details.

## Common tasks

- To inspect an API key, call `GET /v1/me`.
- To start pairing, call `POST /v1/whatsapp/pair`.
- To read the QR pairing state, call `GET /v1/whatsapp/pair/status`.
- To send a message, call `POST /v1/whatsapp/messages/send`.
- To install MCP, add `https://api.whatsapp-use.com/mcp/whatsapp` as a remote Streamable HTTP MCP server named `whatsapp-use`.
