import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

/** Copy sitemap-0.xml → sitemap.xml during astro build (runs even when CI calls astro build directly). */
function sitemapXml() {
  return {
    name: "sitemap-xml",
    hooks: {
      "astro:build:done": ({ dir, logger }) => {
        const outDir = fileURLToPath(dir);
        const source = path.join(outDir, "sitemap-0.xml");
        const target = path.join(outDir, "sitemap.xml");
        if (!fs.existsSync(source)) {
          logger.warn("sitemap-0.xml not found — skipping sitemap.xml copy");
          return;
        }
        fs.copyFileSync(source, target);
        logger.info("Created sitemap.xml");
      },
    },
  };
}

export default defineConfig({
  site: "https://huddersfieldremoval.co.uk",
  trailingSlash: "always",
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/404"),
    }),
    sitemapXml(),
  ],
});
