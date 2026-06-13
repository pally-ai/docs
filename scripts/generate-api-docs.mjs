import { generateFiles } from 'fumadocs-openapi';
import { createOpenAPI } from 'fumadocs-openapi/server';
import { readFileSync, writeFileSync } from 'node:fs';
import { parse } from 'yaml';

// Parse the YAML spec once and emit a JSON copy. lib/openapi.ts imports the
// JSON so the schema is bundled into the Cloudflare Worker — workerd has no
// filesystem, so a runtime file read (the default file-path input) 500s.
const document = parse(readFileSync('./openapi/whatsapp-use.yaml', 'utf8'));
writeFileSync('./openapi/whatsapp-use.json', `${JSON.stringify(document, null, 2)}\n`);

// Keyed identically to lib/openapi.ts so generated pages' `_openapi.preload`
// resolves against the runtime instance.
const openapi = createOpenAPI({
  input: {
    'whatsapp-use': async () => document,
  },
});

void generateFiles({
  input: openapi,
  output: './content/docs/api/reference',
  per: 'operation',
  groupBy: 'tag',
  includeDescription: true,
});
