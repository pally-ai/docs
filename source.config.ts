import { defineDocs, defineConfig } from 'fumadocs-mdx/config';

export const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    postprocess: {
      // required for llms.txt / llms-full.txt / *.mdx endpoints
      includeProcessedMarkdown: true,
    },
  },
});

export default defineConfig();
