import fs from "fs";
let idx = fs.readFileSync("src/pages/index.astro", "utf8");
idx = idx.replace(/\u00c2\u00b7/g, "\u00b7").replace(/\u00e2\u0080\u0093/g, "\u2013");
fs.writeFileSync("src/pages/index.astro", idx);
let svc = fs.readFileSync("src/pages/[serviceSlug].astro", "utf8");
if (!svc.includes("getServiceImage")) {
  svc = svc.replace(
    'import { buildSchemaGraph } from "../lib/schema/graph";',
    'import { getServiceImage } from "../data/images";\nimport { buildSchemaGraph } from "../lib/schema/graph";'
  );
  svc = svc.replace(
    "const paragraphs = serviceBody(service.title, service.short);",
    "const img = getServiceImage(service.slug);\nconst paragraphs = serviceBody(service.title, service.short);"
  );
  svc = svc.replace(
    "<h1>{service.title}</h1>",
    '<img class="page-hero" src={img.src} alt={img.alt} width="960" height="720" loading="lazy" />\n    <h1>{service.title}</h1>'
  );
  fs.writeFileSync("src/pages/[serviceSlug].astro", svc);
}
console.log("patched");
