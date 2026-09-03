import fs from "fs";
import path from "path";
const w = (rel,c)=>{fs.writeFileSync(path.join(process.cwd(),rel),c,"utf8");};
w("src/pages/areas/index.astro", `---
import BaseLayout from "../../layouts/BaseLayout.astro";
import { areas } from "../../data/areas";
import { buildSchemaGraph } from "../../lib/schema/graph";
const path = "/areas/";
const title = "Areas We Cover";
const description = "Removal services across Huddersfield, Kirklees and nearby villages.";
const schema = buildSchemaGraph({ pageType: "webpage", path, title, description, breadcrumbs: [{ name: "Areas", path }] });
---
<BaseLayout {title} {description} {path} {schema}>
  <div class="container"><h1>Areas we cover</h1><ul>{areas.map((a)=><li><a href={\`/areas/\${a.slug}/\`}>{a.name}</a></li>)}</ul></div>
</BaseLayout>
`);
w("src/pages/routes/index.astro", `---
import BaseLayout from "../../layouts/BaseLayout.astro";
import { routes } from "../../data/routes";
import { buildSchemaGraph } from "../../lib/schema/graph";
const path = "/routes/";
const title = "Popular Removal Routes";
const description = "Long-distance moves from Huddersfield to Leeds, Manchester and more.";
const schema = buildSchemaGraph({ pageType: "webpage", path, title, description, breadcrumbs: [{ name: "Routes", path }] });
---
<BaseLayout {title} {description} {path} {schema}>
  <div class="container"><h1>Routes</h1><ul>{routes.map((r)=><li><a href={\`/routes/\${r.slug}/\`}>{r.title}</a></li>)}</ul></div>
</BaseLayout>
`);
