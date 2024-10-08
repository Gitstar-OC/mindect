// import { createMDX } from 'fumadocs-mdx/next';

// const withMDX = createMDX();

// /** @type {import('next').NextConfig} */
// const config = {
//   reactStrictMode: true,
//   async rewrites() {
//     return [
//       {
//         source: '/content/jupyterNotebooks/:path*',
//         destination: '/learnai/content/jupyterNotebooks/:path*'  // Adjust this as necessary for your setup
//       }
//     ];
//   },
// };

// export default withMDX(config);

import { createMDX } from "fumadocs-mdx/next";
const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/docs/:path*",
        destination: "/learn/:path*",
      },
      {
        source: "/docs",
        destination: "/learn",
      },
    ];
  },
};

export default withMDX(config);
