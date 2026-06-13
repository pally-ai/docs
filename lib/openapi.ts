import { createOpenAPI } from 'fumadocs-openapi/server';
import document from '../openapi/whatsapp-use.json';

// The schema is imported as a bundled JSON module (not a runtime file path) so
// it ships inside the Cloudflare Worker — workerd has no filesystem, so the
// default file-path input 500s at request time. The input function must return
// the parsed document object (returning a string makes fumadocs treat it as a
// path/URL to resolve). Cast through `never`: fumadocs types the document's
// `openapi` field as the literal "3.2.0", but our valid 3.1.0 JSON is correct
// at runtime. The key must match scripts/generate-api-docs.mjs.
export const openapi = createOpenAPI({
  input: {
    'whatsapp-use': async () => document as never,
  },
});
