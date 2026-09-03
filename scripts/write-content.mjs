import fs from "fs";
import path from "path";
const w = (rel,c)=>{const p=path.join(process.cwd(),rel);fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,c,"utf8");};

w("src/content.config.ts", `import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
  }),
});

const guides = defineCollection({
  loader: glob({ base: "./src/content/guides", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { blog, guides };
`);

w("src/lib/content-helpers.ts", `export function serviceBody(title: string, short: string): string[] {
  return [
    short,
    "Our Huddersfield removal teams plan access, parking and loading at both addresses before we arrive. We use 3.5-tonne Luton vans suited to terraced streets across Kirklees, with blankets, straps and optional packing support.",
    title + " customers receive clear written quotes, Goods in Transit cover up to GBP 50k and public liability up to GBP 1m as set out in our terms. We do not offer waste clearance, international shipping, storage or man-and-van-only jobs.",
    "Call 01484 212450 for availability seven days a week from 7am to 9pm, or use the enquiry form and we will confirm van size, crew numbers and timing for your move.",
  ];
}

export function areaBody(name: string, landmark: string): string[] {
  return [
    "We provide house, office, student and furniture removals in " + name + ", with routes planned from local landmarks such as " + landmark + " to our Belmont Close base.",
    "Crews know narrow lanes, commuter traffic and university term dates around Huddersfield. Every move includes protective wrapping, careful loading and placement in your new rooms.",
    "Book a visit or video survey for larger homes. We carry GBP 50k goods-in-transit and GBP 1m public liability insurance and operate without an O-licence using 3.5-tonne Lutons.",
  ];
}
`);

const blogSlugs = [
  ["student-survival-guide-settling-into-huddersfield-after-your-move","Student survival guide: settling into Huddersfield after your move"],
  ["student-friendly-moving-services-tailored-solutions-for-huddersfields-educational-hub","Student-friendly moving services for Huddersfield educational hub"],
  ["the-dos-and-donts-of-hiring-a-removals-company-in-huddersfield","The dos and don'ts of hiring a removals company in Huddersfield"],
  ["moving-as-a-senior-in-huddersfield-tips-for-a-smooth-transition","Moving as a senior in Huddersfield"],
  ["tips-for-helping-children-adjust-to-a-new-environment","Tips for helping children adjust to a new environment"],
  ["easy-tips-for-moving-your-fridge","Easy tips for moving your fridge"],
  ["top-5-things-likely-to-get-damaged-during-home-removals","Top 5 things likely to get damaged during home removals"],
  ["moving-your-office-to-huddersfield-heres-how-to-make-it-easy","Moving your office to Huddersfield"],
  ["moving-tips-for-college-students","Moving tips for college students"],
  ["tips-for-moving-on-a-budget","Tips for moving on a budget"],
  ["packing-hacks-to-save-you-hassle-when-moving-house-in-huddersfield","Packing hacks when moving house in Huddersfield"],
  ["5-attractions-you-should-definitely-visit-in-huddersfield","5 attractions to visit in Huddersfield"],
  ["how-to-remove-heavy-furniture-by-myself-in-huddersfield","How to remove heavy furniture in Huddersfield"],
  ["what-to-pack-first-during-huddersfield-removals","What to pack first during Huddersfield removals"],
  ["how-to-pack-books-for-your-huddersfield-move-safe-packing-strategies-by-the-book","How to pack books for your Huddersfield move"],
  ["10-cheap-removals-tips-save-money-when-moving-house-in-huddersfield","10 cheap removals tips for Huddersfield"],
  ["how-much-does-it-cost-to-hire-a-huddersfield-removals-company","How much does a Huddersfield removals company cost"],
  ["the-emotional-rollercoaster-of-moving-navigating-change-in-huddersfield","The emotional side of moving in Huddersfield"],
];

for (const [slug, title] of blogSlugs) {
  w(`src/content/blog/${slug}.md`, `---
title: ${JSON.stringify(title)}
description: ${JSON.stringify("Practical removal advice for Huddersfield and Kirklees - " + title + ".")}
pubDate: 2024-06-01
---
# ${title}

Planning a move in Huddersfield town centre or nearby suburbs takes more than boxes. This guide covers access, timing and how to match a Luton van to your inventory.

Our crews work from 7am to 9pm with 3.5-tonne Luton vehicles suited to terraced streets and university accommodation. We focus on full removals rather than waste clearance, storage or single-item courier work.

Contact 01484 212450 or use the enquiry form for a written quote with insurance details.
`);
}

const guides = [
  ["moving-house-checklist","Moving House Checklist for Huddersfield","Step-by-step checklist for Kirklees home moves."],
  ["how-to-pack-fragile-items","How to Pack Fragile Items","Protect glass, electronics and artwork."],
  ["moving-with-pets","Moving with Pets in Kirklees","Reduce stress for pets on moving day."],
  ["student-moving-guide","Student Moving Guide","University of Huddersfield term-time moves."],
  ["office-relocation-planning","Office Relocation Planning","Business moves with minimal downtime."],
  ["reducing-moving-costs","Reducing Moving Costs","Save money without cutting insurance cover."],
];
for (const [slug, title, desc] of guides) {
  w(`src/content/guides/${slug}.md`, `---
title: ${JSON.stringify(title)}
description: ${JSON.stringify(desc)}
---
# ${title}

${desc} Huddersfield Removals helps with surveys, packing and transport using 3.5-tonne Luton vans. We operate 7am-9pm daily across Kirklees.

We are not a waste clearance, storage or man-and-van-only operator. Request a quote for insured house, office or student moves.
`);
}

console.log("content written", blogSlugs.length, guides.length);
