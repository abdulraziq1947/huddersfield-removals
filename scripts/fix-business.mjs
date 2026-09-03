import fs from "fs";
const businessPath = "src/data/business.ts";
let b = fs.readFileSync(businessPath, "utf8");
b = b.replace(
  /disambiguatingDescription: "[^"]+"/,
  'disambiguatingDescription: "Professional household and commercial removals company serving Huddersfield and West Yorkshire. We move homes, offices, students, pianos and furniture — we are not a waste clearance or rubbish removal service."'
);
fs.writeFileSync(businessPath, b);
const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
pkg.scripts["geo-tag"] = "node scripts/geo-tag-images.mjs";
fs.writeFileSync("package.json", JSON.stringify(pkg, null, 2) + "\n");
console.log("updated business + package.json");
