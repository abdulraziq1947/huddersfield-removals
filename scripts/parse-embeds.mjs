import fs from "node:fs";

const text = fs.readFileSync("embeds.txt", "utf8");
const lines = text.split(/\r?\n/).filter((l) => l.trim());
const embeds = {};

for (const line of lines) {
  const colon = line.indexOf(":");
  if (colon === -1) continue;
  let id = line.slice(0, colon).trim();
  const rest = line.slice(colon + 1);
  const srcMatch = rest.match(/src="([^"]+)"/);
  if (!srcMatch) {
    console.warn("SKIP:", line.slice(0, 80));
    continue;
  }
  if (id === "Huddersfield Removals") id = "office-place";
  id = id.toLowerCase();
  embeds[id] = srcMatch[1];
}

const keys = Object.keys(embeds).sort();
console.log("Count:", keys.length);
for (const k of keys) console.log(k);

const out = `/** Static Google Maps embed URLs (no API key required). Generated from embeds.txt. */
export const mapEmbeds = ${JSON.stringify(embeds, null, 2)} as const;

export type MapEmbedId = keyof typeof mapEmbeds;

export function getMapEmbed(id: MapEmbedId): string {
  return mapEmbeds[id];
}
`;

fs.writeFileSync("src/data/map-embeds.ts", out);
console.log("Wrote src/data/map-embeds.ts");
