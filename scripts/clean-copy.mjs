import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve("src");
const EXT = new Set([".astro", ".ts", ".md", ".mdx"]);

const AI_PHRASES = [
  [/ — exactly as set out in our terms and conditions/gi, ", as covered in our terms"],
  [/exactly as set out in our terms and conditions\. /gi, "As covered in our terms. "],
  [/exactly as set out in our terms and conditions/gi, "as covered in our terms"],
  [/Use our moving cost calculator for a guide estimate, then confirm a fixed written quote after a survey\./gi,
    "Use the cost calculator for a rough idea, then ask for a written quote after we have seen the job."],
  [/Fixed written quotes follow a survey — in person or by video\./gi,
    "We send a written quote after a survey, in person or by video."],
  [/guide estimate, then confirm a fixed written quote after a survey/gi,
    "rough idea first, then a written quote once we have surveyed"],
  [/tailored solutions/gi, "practical help"],
  [/comprehensive/gi, "full"],
  [/seamless/gi, "straightforward"],
];

function cleanText(text) {
  let s = text;
  for (const [pattern, replacement] of AI_PHRASES) {
    s = s.replace(pattern, replacement);
  }

  // Headings / labels: **Foo** — bar -> **Foo**: bar
  s = s.replace(/\*\*([^*]+)\*\* — /g, "**$1**: ");

  // FAQ-style answers
  s = s.replace(/"Yes — /g, '"Yes. ');
  s = s.replace(/"No — /g, '"No. ');
  s = s.replace(/'Yes — /g, "'Yes. ");
  s = s.replace(/'No — /g, "'No. ");

  // Titles: Foo — Bar -> Foo: Bar (common in meta strings)
  s = s.replace(/([a-z]) — ([A-Z])/g, "$1: $2");

  // Remaining spaced em dashes -> comma (natural UK business copy)
  s = s.replace(/ — /g, ", ");

  // Stray em dashes
  s = s.replace(/—/g, ", ");

  // Cleanup punctuation glitches (avoid touching ../ paths or ... spread)
  s = s.replace(/,\s*,/g, ", ");
  s = s.replace(/,\s*\./g, ".");
  s = s.replace(/([^./])\.\s*\.\s*([^./])/g, "$1. $2");
  s = s.replace(/,\s+([;,])/g, "$1");

  return s;
}

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (EXT.has(path.extname(entry.name))) files.push(full);
  }
  return files;
}

let changed = 0;
for (const file of walk(ROOT)) {
  const original = fs.readFileSync(file, "utf8");
  const updated = cleanText(original);
  if (updated !== original) {
    fs.writeFileSync(file, updated, "utf8");
    changed++;
  }
}

console.log(`Updated ${changed} files.`);
