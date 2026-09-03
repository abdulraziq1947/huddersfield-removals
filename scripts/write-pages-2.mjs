import fs from "fs";
import path from "path";
const w = (rel,c)=>{const p=path.join(process.cwd(),rel);fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,c,"utf8");};

w("src/pages/areas/[slug].astro", `---
import BaseLayout from "../../layouts/BaseLayout.astro";
import Breadcrumbs from "../../components/Breadcrumbs.astro";
import MapEmbed from "../../components/MapEmbed.astro";
import FormEmbed from "../../components/FormEmbed.astro";
import { areas, getArea } from "../../data/areas";
import { buildSchemaGraph } from "../../lib/schema/graph";
import { areaBody } from "../../lib/content-helpers";

export function getStaticPaths() {
  return areas.map((a) => ({ params: { slug: a.slug }, props: { area: a } }));
}

const { area } = Astro.props;
const path = \`/areas/\${area.slug}/\`;
const title = \`Removals \${area.name}\`;
const description = \`House and office removals in \${area.name}, Huddersfield. Routes planned from \${area.landmark}.\`;
const origin = \`\${area.latitude},\${area.longitude}\`;
const paragraphs = areaBody(area.name, area.landmark);
const schema = buildSchemaGraph({
  pageType: "area",
  path,
  title,
  description,
  breadcrumbs: [{ name: "Areas", path: "/areas/huddersfield-town-centre/" }],
  service: { name: "Removals " + area.name, slug: area.slug, description },
  place: { name: area.name, slug: area.slug, latitude: area.latitude, longitude: area.longitude, landmark: area.landmark },
});
---
<BaseLayout {title} {description} {path} {schema}>
  <div class="container">
    <Breadcrumbs items={[{ name: area.name, path }]} />
    <h1>Removals in {area.name}</h1>
    <div class="prose">{paragraphs.map((p) => <p>{p}</p>)}</div>
    <h2>Directions from {area.landmark}</h2>
    <MapEmbed mode="directions" origin={origin} />
    <FormEmbed />
  </div>
</BaseLayout>
`);

w("src/pages/routes/[slug].astro", `---
import BaseLayout from "../../layouts/BaseLayout.astro";
import { routes } from "../../data/routes";
import { buildSchemaGraph } from "../../lib/schema/graph";

export function getStaticPaths() {
  return routes.map((r) => ({ params: { slug: r.slug }, props: { route: r } }));
}
const { route } = Astro.props;
const path = \`/routes/\${route.slug}/\`;
const title = route.title;
const description = \`Long-distance removals \${route.title} from our Huddersfield base. Approx \${route.miles} road miles planned.\`;
const schema = buildSchemaGraph({ pageType: "webpage", path, title, description, breadcrumbs: [{ name: "Routes", path: "/routes/huddersfield-to-leeds/" }] });
---
<BaseLayout {title} {description} {path} {schema}>
  <div class="container prose">
    <h1>{route.title}</h1>
    <p>We plan {route.title.toLowerCase()} using 3.5-tonne Luton vans from Belmont Close, HD1. Typical road distance is about {route.miles} miles depending on stops and access.</p>
    <p>All moves include GBP 50k goods-in-transit and GBP 1m public liability cover. We do not provide storage or international freight.</p>
  </div>
</BaseLayout>
`);

w("src/pages/guides/index.astro", `---
import BaseLayout from "../../layouts/BaseLayout.astro";
import { getCollection } from "astro:content";
import { buildSchemaGraph } from "../../lib/schema/graph";
const guides = await getCollection("guides");
const path = "/guides/";
const title = "Moving Guides";
const description = "Free guides for house, office and student moves in Huddersfield.";
const schema = buildSchemaGraph({ pageType: "webpage", path, title, description, breadcrumbs: [{ name: "Guides", path }] });
---
<BaseLayout {title} {description} {path} {schema}>
  <div class="container">
    <h1>Guides</h1>
    <ul>{guides.map((g) => <li><a href={\`/guides/\${g.id}/\`}>{g.data.title}</a></li>)}</ul>
  </div>
</BaseLayout>
`);

w("src/pages/guides/[slug].astro", `---
import BaseLayout from "../../layouts/BaseLayout.astro";
import { getCollection, render } from "astro:content";
import { buildSchemaGraph } from "../../lib/schema/graph";

export async function getStaticPaths() {
  const entries = await getCollection("guides");
  return entries.map((entry) => ({ params: { slug: entry.id }, props: { entry } }));
}
const { entry } = Astro.props;
const { Content } = await render(entry);
const path = \`/guides/\${entry.id}/\`;
const title = entry.data.title;
const description = entry.data.description;
const schema = buildSchemaGraph({ pageType: "article", path, title, description, breadcrumbs: [{ name: "Guides", path: "/guides/" }], article: { headline: title, datePublished: "2024-01-01" } });
---
<BaseLayout {title} {description} {path} {schema}>
  <article class="container prose"><Content /></article>
</BaseLayout>
`);

w("src/pages/blog/index.astro", `---
import BaseLayout from "../../layouts/BaseLayout.astro";
import { getCollection } from "astro:content";
import { buildSchemaGraph } from "../../lib/schema/graph";
const posts = (await getCollection("blog")).sort((a,b)=>b.data.pubDate.valueOf()-a.data.pubDate.valueOf());
const path = "/blog/";
const title = "Removals Blog";
const description = "News and tips from Huddersfield Removals.";
const schema = buildSchemaGraph({ pageType: "webpage", path, title, description, breadcrumbs: [{ name: "Blog", path }] });
---
<BaseLayout {title} {description} {path} {schema}>
  <div class="container">
    <h1>Blog</h1>
    <ul>{posts.map((p) => <li><a href={\`/blog/\${p.id}/\`}>{p.data.title}</a> <time datetime={p.data.pubDate.toISOString()}>{p.data.pubDate.toLocaleDateString("en-GB")}</time></li>)}</ul>
  </div>
</BaseLayout>
`);

w("src/pages/blog/[slug].astro", `---
import BaseLayout from "../../layouts/BaseLayout.astro";
import { getCollection, render } from "astro:content";
import { buildSchemaGraph } from "../../lib/schema/graph";

export async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((entry) => ({ params: { slug: entry.id }, props: { entry } }));
}
const { entry } = Astro.props;
const { Content } = await render(entry);
const path = \`/blog/\${entry.id}/\`;
const title = entry.data.title;
const description = entry.data.description;
const schema = buildSchemaGraph({ pageType: "article", path, title, description, breadcrumbs: [{ name: "Blog", path: "/blog/" }], article: { headline: title, datePublished: entry.data.pubDate.toISOString().slice(0,10) } });
---
<BaseLayout {title} {description} {path} {schema}>
  <article class="container prose"><Content /></article>
</BaseLayout>
`);

console.log("area route blog guides");
