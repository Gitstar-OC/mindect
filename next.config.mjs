import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
};

export default withMDX(config);

module.exports = {
  async rewrites() {
    return [
      {
        source: '/content/jupyterNotebooks/:path*',
        destination: '/learnai/content/jupyterNotebooks/:path*'  // Adjust this as necessary for your setup
      }
    ];
  },
};
