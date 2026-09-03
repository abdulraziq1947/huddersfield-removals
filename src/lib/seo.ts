const BASE_KEYWORDS = [
  "Huddersfield removals",
  "removal company Huddersfield",
  "Kirklees removals",
  "West Yorkshire removals",
  "house removals",
  "office removals",
];

const PATH_KEYWORDS: Record<string, string[]> = {
  "/": ["removals Huddersfield", "house removals Huddersfield", "office removals Huddersfield", "piano removals", "moving company HD1"],
  "/about/": ["about Huddersfield Removals", "local removal company", "Belmont Close HD1"],
  "/contact/": ["contact Huddersfield removals", "free removal quote", "removals enquiry"],
  "/faq/": ["removals FAQ", "moving questions Huddersfield", "removal insurance"],
  "/reviews/": ["Huddersfield removals reviews", "Google reviews removals", "customer feedback"],
  "/services/": ["removal services Huddersfield", "house office student removals"],
  "/areas/": ["areas covered Huddersfield", "Kirklees removal areas", "local removals"],
  "/routes/": ["long distance removals Huddersfield", "UK removal routes"],
  "/guides/": ["moving guides Huddersfield", "house move checklist", "packing advice"],
  "/blog/": ["removals blog Huddersfield", "moving tips West Yorkshire"],
  "/moving-cost-calculator/": ["moving cost calculator", "removal price estimate Huddersfield"],
  "/privacy-policy/": ["privacy policy Huddersfield Removals"],
  "/terms-and-conditions/": ["removal terms and conditions", "booking terms"],
  "/house-removals-huddersfield/": ["house removals Huddersfield", "home removals Kirklees"],
  "/office-removals-huddersfield/": ["office removals Huddersfield", "commercial removals"],
  "/student-removals-huddersfield/": ["student removals Huddersfield", "university moves"],
  "/piano-removals/": ["piano removals Huddersfield", "piano moving West Yorkshire"],
  "/furniture-removals/": ["furniture removals Huddersfield", "sofa wardrobe moves"],
  "/packing-services/": ["packing services Huddersfield", "professional packing removals"],
  "/packing-materials/": ["moving boxes Huddersfield", "packing materials Kirklees"],
  "/furniture-dismantling-and-reassembly/": ["furniture dismantling Huddersfield", "bed wardrobe assembly"],
  "/short-distance-moves/": ["local removals Huddersfield", "short distance moves Kirklees"],
  "/long-distance-removals/": ["long distance removals Huddersfield", "UK mainland moves"],
};

function slugToLabel(slug: string): string {
  return slug.replace(/-/g, " ");
}

export function metaKeywords(path: string): string {
  if (PATH_KEYWORDS[path]) {
    return [...PATH_KEYWORDS[path], ...BASE_KEYWORDS.slice(0, 2)].slice(0, 12).join(", ");
  }

  const segments = path.split("/").filter(Boolean);

  if (segments[0] === "areas" && segments[1]) {
    const area = slugToLabel(segments[1]);
    return [
      `removals ${area}`,
      `${area} removals`,
      `house removals ${area}`,
      "Huddersfield removals",
      "Kirklees removals",
    ].join(", ");
  }

  if (segments[0] === "routes" && segments[1]) {
    const dest = slugToLabel(segments[1].replace(/^huddersfield-to-/, ""));
    return [
      `Huddersfield to ${dest} removals`,
      `${dest} removals from Huddersfield`,
      "long distance removals",
      "Huddersfield removals",
    ].join(", ");
  }

  if (segments[0] === "blog" && segments[1]) {
    return [
      "Huddersfield removals blog",
      slugToLabel(segments[1]),
      "moving tips Huddersfield",
      "West Yorkshire removals",
    ].join(", ");
  }

  if (segments[0] === "guides" && segments[1]) {
    return [
      "moving guide Huddersfield",
      slugToLabel(segments[1]),
      "house move advice",
      "Kirklees removals",
    ].join(", ");
  }

  return BASE_KEYWORDS.join(", ");
}

/** Trim description to a sensible length for meta tags (120–160 chars). */
export function trimDescription(text: string, max = 155): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > 80 ? cut.slice(0, lastSpace) : cut).trim() + "…";
}
