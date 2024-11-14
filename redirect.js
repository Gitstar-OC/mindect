
// redirects.js
const redirects = [
  {
    source: '/docs/:path*',
    destination: '/learn/:path*',
    permanent: true,
  },
  {
    source: '/docs',
    destination: '/learn',
    permanent: true,
  },
];

module.exports = redirects; // Exporting the redirects for CommonJS
