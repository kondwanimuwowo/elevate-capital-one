import { writeFileSync } from "node:fs";
import { nav } from "../src/data/nav.js";
import { insights } from "../src/data/insights.js";

const SITE_URL = "https://www.elevatecapital.co.za";

function flattenNav(items) {
  return items.flatMap((item) => (item.children ? flattenNav(item.children) : item.to));
}

function unique(values) {
  return [...new Set(values)];
}

const navRoutes = flattenNav(nav);
const staticRoutes = unique(navRoutes);
const insightRoutes = insights.map((post) => `/insights/${post.slug}`);
const allRoutes = unique([...staticRoutes, ...insightRoutes]);

const urls = allRoutes.map((route) => {
  const loc = `${SITE_URL}${route === "/" ? "/" : route}`;
  return `  <url>\n    <loc>${loc}</loc>\n  </url>`;
});

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls,
  "</urlset>",
  ""
].join("\n");

writeFileSync("public/sitemap.xml", xml, "utf8");
console.log(`Generated sitemap with ${allRoutes.length} URLs.`);
