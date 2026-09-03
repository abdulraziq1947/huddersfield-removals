import fs from "fs";
import path from "path";
const w = (rel,c)=>{const p=path.join(process.cwd(),rel);fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,c,"utf8");};

const services = [
  { slug: "house-removals-huddersfield", title: "House Removals Huddersfield", short: "Full home moves across HD postcodes with 3.5-tonne Luton vans and trained crews." },
  { slug: "office-removals-huddersfield", title: "Office Removals Huddersfield", short: "Planned business relocations with minimal downtime for Kirklees offices and studios." },
  { slug: "student-removals-huddersfield", title: "Student Removals Huddersfield", short: "Term-time moves for University of Huddersfield halls and shared houses without stress." },
  { slug: "piano-removals", title: "Piano Removals", short: "Specialist piano handling, padding and stair planning for upright and digital pianos." },
  { slug: "furniture-removals", title: "Furniture Removals", short: "Single-room to whole-home furniture transport with blanket wrapping and placement." },
  { slug: "packing-services", title: "Packing Services", short: "Professional packing teams using quality materials before collection day." },
  { slug: "packing-materials", title: "Packing Materials", short: "Boxes, tape and protective supplies for DIY packers across Huddersfield." },
  { slug: "furniture-dismantling-and-reassembly", title: "Furniture Dismantling and Reassembly", short: "Bed frames, wardrobes and flat-pack taken apart and rebuilt at your new address." },
  { slug: "short-distance-moves", title: "Short Distance Moves", short: "Same-day and local moves within Huddersfield, Almondbury, Lockwood and nearby." },
  { slug: "long-distance-removals", title: "Long Distance Removals", short: "UK mainland relocations from Huddersfield with clear mileage planning." },
];

w("src/data/services.ts", `export interface ServiceEntry {
  slug: string;
  title: string;
  short: string;
}

export const services: ServiceEntry[] = ${JSON.stringify(services, null, 2)};

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
`);

const areas = [
  ["huddersfield-town-centre","Huddersfield Town Centre","Huddersfield Railway Station",53.648,-1.785],
  ["almondbury","Almondbury","Almondbury Library",53.631,-1.769],
  ["marsh","Marsh","Marsh Mills",53.655,-1.778],
  ["lockwood","Lockwood","Lockwood Viaduct",53.638,-1.799],
  ["moldgreen","Moldgreen","Moldgreen Community Centre",53.644,-1.776],
  ["newsome","Newsome","Newsome Junior School",53.628,-1.789],
  ["birkby","Birkby","Birkby Fartown",53.669,-1.803],
  ["farnley-tyas","Farnley Tyas","Farnley Tyas Village Hall",53.625,-1.742],
  ["linthwaite","Linthwaite","Linthwaite Clough",53.625,-1.855],
  ["golcar","Golcar","Golcar Lily Day",53.640,-1.858],
  ["slaithwaite","Slaithwaite","Slaithwaite Canal",53.623,-1.881],
  ["meltham","Meltham","Meltham Mills",53.593,-1.850],
  ["honley","Honley","Honley Village",53.602,-1.789],
  ["holmfirth","Holmfirth","Holmfirth Market",53.573,-1.787],
  ["denby-dale","Denby Dale","Denby Dale Viaduct",53.572,-1.657],
  ["skelmanthorpe","Skelmanthorpe","Skelmanthorpe Library",53.594,-1.664],
  ["brighouse","Brighouse","Brighouse Canal Basin",53.703,-1.780],
  ["elland","Elland","Elland Bridge",53.685,-1.836],
  ["fixby","Fixby","Fixby Hall",53.659,-1.812],
  ["crosland-moor","Crosland Moor","Crosland Moor Community Centre",53.634,-1.820],
  ["longwood","Longwood","Longwood Tower",53.645,-1.835],
  ["milnsbridge","Milnsbridge","Milnsbridge Canal",53.640,-1.845],
  ["rawthorpe","Rawthorpe","Rawthorpe Lane",53.661,-1.815],
  ["rastrick","Rastrick","Rastrick Library",53.681,-1.778],
  ["lepton","Lepton","Lepton Great Church",53.639,-1.735],
  ["shelley","Shelley","Shelley College",53.606,-1.710],
  ["kirkburton","Kirkburton","Kirkburton Village",53.598,-1.704],
  ["dalton","Dalton","Dalton Bank Road",53.652,-1.755],
  ["outlane","Outlane","Outlane Golf Club",53.655,-1.865],
  ["deighton","Deighton","Deighton Sports Arena",53.673,-1.765],
].map(([slug,name,landmark,lat,lng])=>({slug,name,landmark,latitude:lat,longitude:lng}));

w("src/data/areas.ts", `export interface AreaEntry {
  slug: string;
  name: string;
  landmark: string;
  latitude: number;
  longitude: number;
}

export const areas: AreaEntry[] = ${JSON.stringify(areas, null, 2)};

export function getArea(slug: string) {
  return areas.find((a) => a.slug === slug);
}
`);

const routes = [
  { slug: "huddersfield-to-leeds", title: "Huddersfield to Leeds Removals", miles: 24 },
  { slug: "huddersfield-to-manchester", title: "Huddersfield to Manchester Removals", miles: 28 },
  { slug: "huddersfield-to-bradford", title: "Huddersfield to Bradford Removals", miles: 16 },
  { slug: "huddersfield-to-sheffield", title: "Huddersfield to Sheffield Removals", miles: 35 },
  { slug: "huddersfield-to-york", title: "Huddersfield to York Removals", miles: 48 },
  { slug: "huddersfield-to-halifax", title: "Huddersfield to Halifax Removals", miles: 8 },
];
w("src/data/routes.ts", `export const routes = ${JSON.stringify(routes, null, 2)};`);

const guides = [
  { slug: "moving-house-checklist", title: "Moving House Checklist for Huddersfield" },
  { slug: "how-to-pack-fragile-items", title: "How to Pack Fragile Items" },
  { slug: "moving-with-pets", title: "Moving with Pets in Kirklees" },
  { slug: "student-moving-guide", title: "Student Moving Guide" },
  { slug: "office-relocation-planning", title: "Office Relocation Planning" },
  { slug: "reducing-moving-costs", title: "Reducing Moving Costs" },
];
w("src/data/guides.ts", `export const guides = ${JSON.stringify(guides, null, 2)};`);

w("src/lib/site.ts", `import { business } from "../data/business";

export const siteUrl = import.meta.env.PUBLIC_SITE_URL || business.url;

export function absoluteUrl(pathname: string): string {
  const base = siteUrl.replace(/\\/$/, "");
  const path = pathname.startsWith("/") ? pathname : \`/\${pathname}\`;
  return \`\${base}\${path}\`;
}
`);

w("src/data/images.ts", `export const images = {
  hero: { src: "/images/hero.svg", alt: "Huddersfield Removals Luton van outside a terraced home", lat: 53.6503102, lng: -1.7884584 },
  logo: { src: "/images/logo.svg", alt: "Huddersfield Removals logo", lat: 53.6503102, lng: -1.7884584 },
  services: { src: "/images/services.svg", alt: "Removal crew carrying wrapped furniture in Huddersfield", lat: 53.648, lng: -1.785 },
  areas: { src: "/images/areas.svg", alt: "Map of Huddersfield service areas", lat: 53.6503102, lng: -1.7884584 },
} as const;
`);

console.log("data files written");
