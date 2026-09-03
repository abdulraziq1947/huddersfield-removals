import fs from "fs";
import path from "path";
const w = (rel,c)=>{const p=path.join(process.cwd(),rel);fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,c,"utf8");};

const staticPages = {
  "about": ["About Huddersfield Removals", "Family-run removal company based on Belmont Close, serving Kirklees with Luton vans since establishment."],
  "contact": ["Contact Huddersfield Removals", "Call 01484 212450 or email info@huddersfieldremoval.co.uk. Open 7am-9pm daily."],
  "reviews": ["Reviews", "Rated 4.8 out of 5 from 106 Google reviews."],
  "faq": ["FAQ", "Answers about quotes, insurance, vans and areas we cover."],
  "privacy-policy": ["Privacy Policy", "How Huddersfield Removals handles enquiry data."],
};

for (const [slug, [title, description]] of Object.entries(staticPages)) {
  const pathName = `/${slug}/`;
  const ratingBlock = slug === "reviews" ? `
import { business } from "../data/business";
const includeRating = true;` : `const includeRating = false;`;
  const extra = slug === "reviews" ? `<p class="rating-badge">{business.rating.value}/5 average from {business.rating.count} reviews</p>` : "";
  const form = slug === "contact" ? `<FormEmbed />` : slug === "contact" ? "" : "";
  w(`src/pages/${slug}.astro`, `---
import BaseLayout from "../layouts/BaseLayout.astro";
${slug === "contact" ? 'import FormEmbed from "../components/FormEmbed.astro";\nimport MapEmbed from "../components/MapEmbed.astro";' : ""}
${slug === "reviews" ? 'import { business } from "../data/business";' : ""}
import { buildSchemaGraph } from "../lib/schema/graph";
const path = "${pathName}";
const title = "${title}";
const description = "${description}";
const schema = buildSchemaGraph({ pageType: "${slug === "reviews" ? "reviews" : "webpage"}", path, title, description, breadcrumbs: [{ name: "${title.split(" ")[0]}", path }]${slug === "reviews" ? ", includeRating: true" : ""} });
---
<BaseLayout {title} {description} {path} {schema}>
  <div class="container prose">
    <h1>${title}</h1>
    ${extra}
    <p>${description}</p>
    ${slug === "contact" ? "<MapEmbed /><FormEmbed />" : ""}
    ${slug === "faq" ? "<h2>Do you offer man and van only?</h2><p>No. We provide full removal services with insured crews and Luton vans.</p><h2>Are you licensed for heavy haulage?</h2><p>We operate 3.5-tonne vehicles without an O-licence.</p>" : ""}
  </div>
</BaseLayout>
`);
}

w("src/pages/moving-cost-calculator.astro", `---
import BaseLayout from "../layouts/BaseLayout.astro";
import { buildSchemaGraph } from "../lib/schema/graph";
const path = "/moving-cost-calculator/";
const title = "Moving Cost Calculator";
const description = "Estimate your Huddersfield removal cost by rooms, distance and packing.";
const schema = buildSchemaGraph({ pageType: "webpage", path, title, description, breadcrumbs: [{ name: "Calculator", path }] });
---
<BaseLayout {title} {description} {path} {schema}>
  <div class="container">
    <h1>Moving cost calculator</h1>
    <form id="calc" class="card">
      <label>Bedrooms <input type="number" name="bedrooms" min="1" max="6" value="2" /></label>
      <label>Miles <input type="number" name="miles" min="1" max="200" value="10" /></label>
      <label><input type="checkbox" name="packing" /> Packing service</label>
      <button class="btn" type="button" id="calc-btn">Estimate</button>
      <p id="calc-result" aria-live="polite"></p>
    </form>
  </div>
  <script>
    const btn = document.getElementById("calc-btn");
    btn?.addEventListener("click", () => {
      const form = document.getElementById("calc");
      const fd = new FormData(form);
      const beds = Number(fd.get("bedrooms") || 2);
      const miles = Number(fd.get("miles") || 10);
      const packing = fd.get("packing") === "on";
      let total = 280 + beds * 120 + miles * 1.8 + (packing ? 180 : 0);
      const el = document.getElementById("calc-result");
      if (el) el.textContent = "Guide price: GBP " + Math.round(total) + " (subject to survey)";
    });
  </script>
</BaseLayout>
`);

w("src/pages/404.astro", `---
import BaseLayout from "../layouts/BaseLayout.astro";
import { buildSchemaGraph } from "../lib/schema/graph";
const path = "/404/";
const title = "Page not found";
const description = "The page you requested could not be found.";
const schema = buildSchemaGraph({ pageType: "webpage", path, title, description, breadcrumbs: [] });
---
<BaseLayout {title} {description} path="/404/" {schema}>
  <div class="container"><h1>404</h1><p>Try the <a href="/">homepage</a> or <a href="/contact/">contact us</a>.</p></div>
</BaseLayout>
`);

console.log("static pages");
