import fs from "node:fs";
import path from "node:path";

const dist = path.resolve("dist");
const source = path.join(dist, "sitemap-0.xml");
const target = path.join(dist, "sitemap.xml");

if (!fs.existsSync(source)) {
  console.warn("postbuild-sitemap: sitemap-0.xml not found, skipping");
  process.exit(0);
}

fs.copyFileSync(source, target);
console.log("Created dist/sitemap.xml");
