import fs from "fs";
const xml = fs.readFileSync("scripts/page-sitemap.xml","utf8");
const paths = [...xml.matchAll(/https:\/\/huddersfieldremoval\.co\.uk([^<]+)/g)].map(m=>m[1].replace(/\/$/,""));
const targets = {
  "/contact-us": "/contact/",
  "/about-us": "/about/",
  "/terms-and-conditions": "/terms-and-conditions/",
  "/privacy-policy": "/privacy-policy/",
  "/house-removals": "/house-removals-huddersfield/",
  "/office-removals": "/office-removals-huddersfield/",
  "/student-removals": "/student-removals-huddersfield/",
};
const lines = [];
for (const [from,to] of Object.entries(targets)) lines.push(`${from}/ ${to} 301`);
for (const p of paths) {
  if (p.includes("wp-") || p.includes("feed")) continue;
}
lines.push("/wp-content/* https://huddersfieldremoval.co.uk/ 301");
fs.writeFileSync("public/_redirects", [...new Set(lines)].join("\n")+"\n","utf8");
console.log(lines.length);
