import fs from "fs";
const xml = fs.readFileSync("scripts/page-sitemap.xml","utf8");
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1]);
const lines = [];
const map = {
  "https://huddersfieldremoval.co.uk/": null,
  "https://huddersfieldremoval.co.uk/contact-us/": "/contact/",
  "https://huddersfieldremoval.co.uk/about-us/": "/about/",
  "https://huddersfieldremoval.co.uk/terms-and-conditions/": "/terms-and-conditions/",
  "https://huddersfieldremoval.co.uk/privacy-policy/": "/privacy-policy/",
};
for (const u of urls) {
  const path = u.replace("https://huddersfieldremoval.co.uk","");
  if (map[u]) lines.push(`${path} ${map[u]} 301`);
  else if (path && !path.includes("wp-") && path !== "/" && !path.startsWith("/areas/")) {
    // keep generic trailing slash redirect for old pages without match
  }
}
lines.push("/contact-us/ /contact/ 301");
lines.push("/about-us/ /about/ 301");
lines.push("/index.php/* / 301");
fs.writeFileSync("public/_redirects", lines.join("\n")+"\n","utf8");
console.log("redirects", lines.length);
