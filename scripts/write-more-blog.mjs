import fs from "fs";
const extra = [
  ["a-few-quick-notes-on-the-three-best-outdoor-parks-in-huddersfield","Outdoor parks in Huddersfield after your move"],
  ["the-three-best-indian-restaurants-in-huddersfield-you-shouldnt-miss-trying-out","Indian restaurants in Huddersfield"],
  ["the-three-best-chemists-in-huddersfield-that-you-should-know-about","Chemists in Huddersfield"],
  ["a-quick-guide-on-finding-the-three-best-ice-cream-vendors-in-huddersfield","Ice cream vendors in Huddersfield"],
  ["a-guide-to-the-three-best-taxi-firms-in-huddersfield-for-travellers","Taxi firms in Huddersfield"],
  ["best-three-dessert-shops-in-huddersfield-for-the-ultimate-dessert-treats","Dessert shops in Huddersfield"],
  ["best-three-picks-for-burger-takeaway-joints-in-huddersfield-2020","Burger takeaways in Huddersfield"],
];
for (const [slug, title] of extra) {
  fs.writeFileSync(`src/content/blog/${slug}.md`, `---
title: ${JSON.stringify(title)}
description: ${JSON.stringify("Local Huddersfield guide - " + title)}
pubDate: 2023-08-15
---
# ${title}

After your removal, explore Huddersfield with this short local guide. For house and office moves across Kirklees, call 01484 212450.
`, "utf8");
}
