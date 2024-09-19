// import { createMDX } from 'fumadocs-mdx/next';

// const withMDX = createMDX();

// /** @type {import('next').NextConfig} */
// const config = {
//   reactStrictMode: true,
// };

// export default withMDX(config);  // At the start ( without download option )

import { createMDX } from 'fumadocs-mdx/next';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/content/jupyterNotebooks/:path*',
        destination: '/learnai/content/jupyterNotebooks/:path*'  // Adjust this as necessary for your setup
      }
    ];
  },
};

export default withMDX(config);


