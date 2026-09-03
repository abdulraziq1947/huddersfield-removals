import fs from "fs";
import path from "path";
const w = (rel,c)=>{const p=path.join(process.cwd(),rel);fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,c,"utf8");};

w("src/pages/index.astro", `---
import BaseLayout from "../layouts/BaseLayout.astro";
import FormEmbed from "../components/FormEmbed.astro";
import MapEmbed from "../components/MapEmbed.astro";
import { business } from "../data/business";
import { services } from "../data/services";
import { buildSchemaGraph } from "../lib/schema/graph";
import { images } from "../data/images";

const path = "/";
const title = "House Removals Huddersfield | Huddersfield Removals";
const description = "Local removal company in Huddersfield. House, office and student moves with 3.5-tonne Luton vans. Open 7am-9pm. Rated " + business.rating.value + "/5 from " + business.rating.count + " reviews.";
const schema = buildSchemaGraph({ pageType: "home", path, title, description, breadcrumbs: [], includeRating: true });
---
<BaseLayout {title} {description} {path} {schema} ogImage={images.hero.src}>
  <section class="hero">
    <div class="container">
      <span class="rating-badge">{business.rating.value}/5 · {business.rating.count} Google reviews</span>
      <h1>Trusted removals across Huddersfield & Kirklees</h1>
      <p>Professional house, office and student moves with fully equipped 3.5-tonne Luton vans. {business.insurance.goodsLabel} and {business.insurance.liabilityLabel} insurance. Open daily {business.hours.opens}–{business.hours.closes}.</p>
      <a class="btn" href="/contact/">Get a quote</a>
    </div>
  </section>
  <section>
    <div class="container grid grid-3">
      {services.slice(0,6).map((s) => (
        <article class="card"><h2><a href={\`/\${s.slug}/\`}>{s.title}</a></h2><p>{s.short}</p></article>
      ))}
    </div>
  </section>
  <section class="surface">
    <div class="container grid grid-2">
      <div><h2>Visit us</h2><p>{business.address.streetAddress}, {business.address.postalCode}</p><MapEmbed /></div>
      <div><h2>Enquire</h2><FormEmbed /></div>
    </div>
  </section>
</BaseLayout>
`);

w("src/pages/[serviceSlug].astro", `---
import BaseLayout from "../layouts/BaseLayout.astro";
import Breadcrumbs from "../components/Breadcrumbs.astro";
import FormEmbed from "../components/FormEmbed.astro";
import { services, getService } from "../data/services";
import { buildSchemaGraph } from "../lib/schema/graph";
import { serviceBody } from "../lib/content-helpers";

export function getStaticPaths() {
  return services.map((s) => ({ params: { serviceSlug: s.slug }, props: { service: s } }));
}

const { service } = Astro.props;
const path = \`/\${service.slug}/\`;
const title = service.title;
const description = service.short;
const paragraphs = serviceBody(service.title, service.short);
const schema = buildSchemaGraph({
  pageType: "service",
  path,
  title,
  description,
  breadcrumbs: [{ name: "Services", path: "/services/" }],
  service: { name: service.title, slug: service.slug, description: service.short },
});
---
<BaseLayout {title} {description} {path} {schema}>
  <div class="container">
    <Breadcrumbs items={[{ name: "Services", path: "/services/" }, { name: service.title, path }]} />
    <h1>{service.title}</h1>
    <div class="prose">
      {paragraphs.map((p) => <p>{p}</p>)}
    </div>
    <FormEmbed />
  </div>
</BaseLayout>
`);

w("src/pages/services/index.astro", `---
import BaseLayout from "../../layouts/BaseLayout.astro";
import { services } from "../../data/services";
import { buildSchemaGraph } from "../../lib/schema/graph";
const path = "/services/";
const title = "Removal Services in Huddersfield";
const description = "House, office, student, piano and packing services across Huddersfield and Kirklees.";
const schema = buildSchemaGraph({ pageType: "webpage", path, title, description, breadcrumbs: [{ name: "Services", path }] });
---
<BaseLayout {title} {description} {path} {schema}>
  <section class="container">
    <h1>Our services</h1>
    <div class="grid grid-2">
      {services.map((s) => (
        <article class="card"><h2><a href={\`/\${s.slug}/\`}>{s.title}</a></h2><p>{s.short}</p></article>
      ))}
    </div>
  </section>
</BaseLayout>
`);

console.log("core pages");
