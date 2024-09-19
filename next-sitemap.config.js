module.exports = {
  siteUrl: 'https://mindect.vercel.app',  // Your website URL
  generateRobotsTxt: true,                // To generate a robots.txt file
  changefreq: 'daily',                    // Frequency of site changes
  priority: 1,                            // Priority for search engines (1 is highest)
  sitemapSize: 5000,                      // Max number of URLs per sitemap
  generateIndexSitemap: false,            // Single sitemap
  exclude: ['/admin/*'],                  // Exclude specific paths, e.g., admin
  transform: async (config, path) => {
    return {
      loc: path,                           // The path of the URL
      changefreq: config.changefreq,       // Frequency
      priority: config.priority,           // Priority for this URL
      lastmod: new Date().toISOString(),   // Last modified date
    }
  },
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],  // Allow all user agents
    additionalSitemaps: [
      'https://mindect.vercel.app/sitemap.xml',  // Your sitemap URL
    ],
  },
};
