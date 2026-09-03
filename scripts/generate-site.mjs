import fs from "fs";
import path from "path";
const root = process.cwd();
const w = (rel, c) => {
  const p = path.join(root, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, c, "utf8");
};

w("astro.config.mjs", `import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://huddersfieldremoval.co.uk",
  trailingSlash: "always",
  integrations: [sitemap()],
});
`);

w("src/env.d.ts", `/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly PUBLIC_GOOGLE_MAPS_EMBED_KEY: string;
  readonly PUBLIC_SITE_URL: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
`);


w("src/data/business.ts", `export const business = {
  name: "Huddersfield Removals",
  legalName: "Huddersfield Removals",
  url: "https://huddersfieldremoval.co.uk",
  email: "info@huddersfieldremoval.co.uk",
  phone: "01484212450",
  phoneE164: "+441484212450",
  address: {
    streetAddress: "Flat, 18b Belmont Cl",
    addressLocality: "Huddersfield",
    addressRegion: "West Yorkshire",
    postalCode: "HD1 5DA",
    addressCountry: "GB",
  },
  geo: { latitude: 53.6503102, longitude: -1.7884584 },
  gmbCid: "2827560049856438817",
  hours: { opens: "07:00", closes: "21:00", days: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"] },
  rating: { value: 4.8, count: 106 },
  insurance: { goodsInTransit: "50000", publicLiability: "1000000", goodsLabel: "£50k GIT", liabilityLabel: "£1m PL" },
  fleet: { licence: "No O-licence", vehicles: "3.5-tonne Luton vans" },
  servicesNotOffered: ["waste or rubbish clearance","international removals","single-item courier moves","storage","man-and-van only services"],
  sameAs: [
    "https://www.facebook.com/HuddersfieldRemoval/",
    "https://www.pinterest.co.uk/huddersfieldremoval/",
    "https://threebestrated.co.uk/removal-companies-in-huddersfield",
    "https://www.sirelo.co.uk/moving-companies/west-yorkshire/huddersfield/huddersfield-removals/",
    "https://www.yorkshire.com/huddersfield/services/removal-companies/huddersfield-removals",
  ],
  wikidata: { huddersfield: "Q201812" },
  priceRange: "££",
} as const;
`);

