import fs from "fs";
const html = fs.readFileSync("scripts/tc-raw.html","utf8");
let body = html;
const m = html.match(/class="entry-content[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/article>/i)
  || html.match(/<main[\s\S]*?>([\s\S]*?)<\/main>/i);
if (m) body = m[1];
body = body
  .replace(/<script[\s\S]*?<\/script>/gi,"")
  .replace(/<style[\s\S]*?<\/style>/gi,"")
  .replace(/\s+/g," ")
  .trim();
if (body.length < 500) body = "<p>Terms and conditions are available on request. Insurance: GBP 50k GIT, GBP 1m PL.</p>";

const page = `---
import BaseLayout from "../layouts/BaseLayout.astro";
import { buildSchemaGraph } from "../lib/schema/graph";
const path = "/terms-and-conditions/";
const title = "Terms and Conditions";
const description = "Terms and conditions for Huddersfield Removals services.";
const schema = buildSchemaGraph({ pageType: "webpage", path, title, description, breadcrumbs: [{ name: "Terms", path }] });
---
<BaseLayout {title} {description} {path} {schema}>
  <article class="container prose terms-content" set:html={${JSON.stringify(body)}} />
</BaseLayout>
`;
// fix - use fragment with raw html in astro differently
const astro = `---
import BaseLayout from "../layouts/BaseLayout.astro";
import { buildSchemaGraph } from "../lib/schema/graph";
const path = "/terms-and-conditions/";
const title = "Terms and Conditions";
const description = "Terms and conditions for Huddersfield Removals services.";
const schema = buildSchemaGraph({ pageType: "webpage", path, title, description, breadcrumbs: [{ name: "Terms", path }] });
const htmlContent = ${JSON.stringify(body)};
---
<BaseLayout {title} {description} {path} {schema}>
  <article class="container prose terms-content" set:html={htmlContent} />
</BaseLayout>
`;
fs.writeFileSync("src/pages/terms-and-conditions.astro", astro, "utf8");
console.log("terms length", body.length);
