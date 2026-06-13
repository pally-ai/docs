import { createMDX } from 'fumadocs-mdx/next';

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Preserve the URL structure of the previous (Mintlify) docs.
      { source: '/', destination: '/guides', permanent: false },
      { source: '/quickstart', destination: '/guides/quickstart', permanent: true },
    ];
  },
  async rewrites() {
    return [
      // Raw markdown for AI agents: append .mdx (or .md) to any page URL.
      { source: '/:path*.mdx', destination: '/llms.mdx/:path*' },
      { source: '/:path*.md', destination: '/llms.mdx/:path*' },
    ];
  },
};

const withMDX = createMDX();

export default withMDX(config);
