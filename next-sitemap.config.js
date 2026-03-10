/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://jarad.dev",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: "./public",
};

module.exports = config;
