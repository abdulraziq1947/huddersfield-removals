export interface SiteImage {
  src: string;
  alt: string;
  lat: number;
  lng: number;
  locationName: string;
}

const HQ = { lat: 53.6503102, lng: -1.7884584, locationName: "Huddersfield, West Yorkshire" };

export const images = {
  hero: {
    src: "/images/hero/hero-removals-huddersfield.jpg",
    alt: "Huddersfield Removals 3.5-tonne Luton van parked on a residential street ready for a house move", ...HQ,
  },
  logo: { src: "/images/logo.svg", alt: "Huddersfield Removals logo", ...HQ },
  fleet: {
    src: "/images/team/fleet.jpg",
    alt: "Two Huddersfield Removals vans with tail lift loading on a customer's driveway", ...HQ,
  },
  wrappedArmchair: {
    src: "/images/team/wrapped-armchair.jpg",
    alt: "Armchair protected in stretch wrap by Huddersfield Removals before loading", ...HQ,
  },
  areasDefault: {
    src: "/images/areas/default.jpg",
    alt: "Wrapped chairs and packed boxes loaded carefully inside a Huddersfield Removals van", ...HQ,
  },
} as const satisfies Record<string, SiteImage>;

export const serviceImages: Record<string, SiteImage> = {
  "house-removals-huddersfield": {
    src: "/images/services/house-removals-huddersfield.jpg",
    alt: "Huddersfield Removals crew carrying a wrapped double mattress through a customer's home", ...HQ,
  },
  "office-removals-huddersfield": {
    src: "/images/services/office-removals-huddersfield.jpg",
    alt: "Office furniture stretch-wrapped for protection in a commercial corridor during an office relocation", ...HQ,
  },
  "student-removals-huddersfield": {
    src: "/images/services/student-removals-huddersfield.jpg",
    alt: "Student belongings in stacked crates and baskets loaded securely in a removals van", ...HQ,
  },
  "piano-removals": {
    src: "/images/services/piano-removals.jpg",
    alt: "Professional piano movers using a stair dolly in a Huddersfield home", ...HQ,
  },
  "furniture-removals": {
    src: "/images/services/furniture-removals.jpg",
    alt: "Armchair and blanket-wrapped mattress loaded carefully inside a removals van", ...HQ,
  },
  "packing-services": {
    src: "/images/services/packing-services.jpg",
    alt: "Flat-screen television protected in bubble wrap by the Huddersfield Removals packing team", ...HQ,
  },
  "packing-materials": {
    src: "/images/services/packing-materials.jpg",
    alt: "Stacked double-wall moving boxes on a sack truck ready for loading", ...HQ,
  },
  "furniture-dismantling-and-reassembly": {
    src: "/images/services/furniture-dismantling-and-reassembly.jpg",
    alt: "Two single bed frames reassembled by Huddersfield Removals in a customer's new bedroom", ...HQ,
  },
  "short-distance-moves": {
    src: "/images/services/short-distance-moves.jpg",
    alt: "Removals van with tail lift open, load protected with furniture blankets and a stair dolly secured", ...HQ,
  },
  "long-distance-removals": {
    src: "/images/services/long-distance-removals.jpg",
    alt: "Fully loaded removals van with furniture blankets strapped for a long-distance UK move", ...HQ,
  },
};

export function getServiceImage(slug: string): SiteImage {
  return serviceImages[slug] ?? images.hero;
}
