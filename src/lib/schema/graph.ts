import { business } from "../../data/business";
import { services } from "../../data/services";
import { absoluteUrl, siteUrl } from "../site";

// Permanent @id anchors — never change these after first deploy (Principle 7)
const LOCAL_ID = `${siteUrl}/#localbusiness`;
const WEBSITE_ID = `${siteUrl}/#website`;
const ORG_ID = `${siteUrl}/#organization`;
const LOGO_ID = `${siteUrl}/#logo`;
const IMAGE_16x9_ID = `${siteUrl}/#image-16x9`;
const IMAGE_4x3_ID = `${siteUrl}/#image-4x3`;
const IMAGE_1x1_ID = `${siteUrl}/#image-1x1`;

export type SchemaPageType =
  | "home"
  | "reviews"
  | "service"
  | "area"
  | "article"
  | "webpage"
  | "faq"
  | "guide";

export interface GraphInput {
  pageType: SchemaPageType;
  path: string;
  title: string;
  description: string;
  breadcrumbs: { name: string; path: string }[];
  service?: { name: string; slug: string; description: string };
  place?: { name: string; slug: string; latitude: number; longitude: number; landmark: string };
  article?: { headline: string; datePublished: string; dateModified?: string };
  image?: { src: string; alt: string; lat: number; lng: number; locationName: string };
  includeRating?: boolean;
  faqs?: { q: string; a: string }[];
  howToSteps?: { name: string; text: string }[];
  howToName?: string;
}

function openingHoursSpec() {
  return [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: business.hours.days,
      opens: business.hours.opens,
      closes: business.hours.closes,
    },
  ];
}

// Tier 2 — areaServed cities with Wikidata QIDs (skill: stronger than plain strings)
const areaServedCities = [
  { "@type": "City", name: "Huddersfield", sameAs: "https://www.wikidata.org/wiki/Q201812" },
  { "@type": "City", name: "Kirklees", sameAs: "https://www.wikidata.org/wiki/Q1290176" },
  { "@type": "City", name: "Bradford", sameAs: "https://www.wikidata.org/wiki/Q180557" },
  { "@type": "City", name: "Leeds", sameAs: "https://www.wikidata.org/wiki/Q76108" },
  { "@type": "City", name: "Halifax", sameAs: "https://www.wikidata.org/wiki/Q164745" },
  { "@type": "City", name: "Brighouse", sameAs: "https://www.wikidata.org/wiki/Q874745" },
  { "@type": "City", name: "Mirfield", sameAs: "https://www.wikidata.org/wiki/Q1935649" },
  { "@type": "City", name: "Holmfirth", sameAs: "https://www.wikidata.org/wiki/Q1405945" },
  { "@type": "City", name: "Dewsbury", sameAs: "https://www.wikidata.org/wiki/Q901344" },
  { "@type": "City", name: "Elland", sameAs: "https://www.wikidata.org/wiki/Q1322561" },
];

// Skill Tier 7: Social proof node shared across home/reviews
function aggregateRatingNode() {
  return {
    "@type": "AggregateRating",
    ratingValue: String(business.rating.value),
    reviewCount: String(business.rating.count),
    bestRating: "5",
    worstRating: "1",
  };
}

function localBusinessNode(includeRating: boolean, pageType: SchemaPageType) {
  const node: Record<string, unknown> = {
    // Tier 1 — Core identity
    "@type": ["MovingCompany", "LocalBusiness"],
    "@id": LOCAL_ID,
    name: business.name,
    legalName: business.legalName,
    // Tier 1: additionalType with precise Wikidata QID for moving company (skill: Principle 4, highest-leverage un-automatable field)
    additionalType: "https://www.wikidata.org/wiki/Q2750223",
    disambiguatingDescription: business.disambiguatingDescription,
    description:
      "Independent house, office, student and piano removal company based in Huddersfield HD1. Serving Kirklees and West Yorkshire with 3.5-tonne Luton vans, fixed written quotes, and £50,000 goods-in-transit cover per load.",
    url: siteUrl,
    telephone: business.phoneE164,
    email: business.email,
    // Tier 1: logo and image as @id references (skill: ImageObject entities, not URL strings)
    logo: { "@id": LOGO_ID },
    image: [
      { "@id": IMAGE_16x9_ID },
      { "@id": IMAGE_4x3_ID },
      { "@id": IMAGE_1x1_ID },
    ],
    priceRange: business.priceRange,

    // Tier 2 — Location signals
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.streetAddress,
      addressLocality: business.address.addressLocality,
      addressRegion: business.address.addressRegion,
      postalCode: business.address.postalCode,
      addressCountry: business.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    hasMap: business.hasMap,
    areaServed: areaServedCities,

    // Tier 3 — Operational signals
    openingHoursSpecification: openingHoursSpec(),
    currenciesAccepted: "GBP",
    paymentAccepted: ["Cash", "Bank Transfer", "Credit Card", "Debit Card"],

    // Tier 3: contactPoint with availableLanguage (skill: agent-API surface, Principle 6)
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: business.phoneE164,
        email: business.email,
        availableLanguage: "English",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: business.hours.days,
          opens: business.hours.opens,
          closes: business.hours.closes,
        },
      },
    ],

    // Tier 4 — Entity authority
    sameAs: business.sameAs,

    // Tier 4: knowsAbout — 20 specific removal expertise terms (skill: topical authority, LLM topic-cluster extraction)
    knowsAbout: [
      "House removals",
      "Office removals",
      "Student removals",
      "Piano removals",
      "Furniture removals",
      "Professional packing services",
      "Furniture dismantling and reassembly",
      "Long-distance UK removals",
      "Short-distance moves",
      "Luton van hire and crews",
      "Goods-in-transit insurance",
      "Kirklees parking dispensations",
      "Moving to Leeds",
      "Moving to Manchester",
      "Moving to Sheffield",
      "Moving to Bradford",
      "Moving to Halifax",
      "Moving to York",
      "West Yorkshire removals",
      "Fixed-price removal quotes",
    ],

    // Tier 4: amenityFeature — service features as structured LocationFeatureSpecification
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Fixed written quotes", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free pre-move survey", value: true },
      { "@type": "LocationFeatureSpecification", name: "7-day availability", value: true },
      { "@type": "LocationFeatureSpecification", name: "Goods-in-transit insurance", value: true },
      { "@type": "LocationFeatureSpecification", name: "Public liability insurance", value: true },
      { "@type": "LocationFeatureSpecification", name: "Professional packing available", value: true },
      { "@type": "LocationFeatureSpecification", name: "Furniture dismantling available", value: true },
      { "@type": "LocationFeatureSpecification", name: "Piano removal specialist", value: true },
    ],

    // Tier 5 — Actions (skill: agent-API surface, Principle 6 — enables AI agent transact)
    potentialAction: [
      {
        "@type": "ReserveAction",
        name: "Get a free removal quote",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteUrl}/contact/`,
          inLanguage: "en-GB",
          actionPlatform: [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/IOSPlatform",
            "http://schema.org/AndroidPlatform",
          ],
        },
        result: {
          "@type": "Reservation",
          name: "Removal booking quote",
        },
      },
      {
        "@type": "CommunicateAction",
        name: "Call Huddersfield Removals",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `tel:${business.phoneE164}`,
        },
      },
    ],
  };

  // Homepage only: full offer catalog + serviceArea with containsPlace (skill: Tier 6 + SAB advanced pattern)
  if (pageType === "home") {
    node.serviceArea = {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: business.geo.latitude,
        longitude: business.geo.longitude,
      },
      geoRadius: 25000,
      // Skill: containsPlace inside GeoCircle — explicitly enumerates served towns with Wikidata QIDs
      containsPlace: [
        { "@type": "City", name: "Huddersfield", sameAs: "https://www.wikidata.org/wiki/Q201812" },
        { "@type": "City", name: "Brighouse", sameAs: "https://www.wikidata.org/wiki/Q874745" },
        { "@type": "City", name: "Mirfield", sameAs: "https://www.wikidata.org/wiki/Q1935649" },
        { "@type": "City", name: "Holmfirth", sameAs: "https://www.wikidata.org/wiki/Q1405945" },
        { "@type": "City", name: "Elland", sameAs: "https://www.wikidata.org/wiki/Q1322561" },
        { "@type": "City", name: "Slaithwaite", sameAs: "https://www.wikidata.org/wiki/Q1761066" },
        { "@type": "City", name: "Meltham", sameAs: "https://www.wikidata.org/wiki/Q1915248" },
        { "@type": "City", name: "Honley", sameAs: "https://www.wikidata.org/wiki/Q1405413" },
        { "@type": "City", name: "Marsden", sameAs: "https://www.wikidata.org/wiki/Q1905013" },
        { "@type": "City", name: "Golcar", sameAs: "https://www.wikidata.org/wiki/Q1429726" },
      ],
    };

    // Skill: depth-over-breadth (Principle 1) — offer catalog nested deeply into LocalBusiness
    node.hasOfferCatalog = {
      "@type": "OfferCatalog",
      name: "Huddersfield Removals — Services",
      itemListElement: services.map((svc) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: svc.title,
          description: svc.short,
          url: absoluteUrl(`/${svc.slug}/`),
          provider: { "@id": LOCAL_ID },
          // Skill Principle 6: hoursAvailable on Service (not just on the business)
          hoursAvailable: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: business.hours.days,
            opens: business.hours.opens,
            closes: business.hours.closes,
          },
          serviceArea: {
            "@type": "GeoCircle",
            geoMidpoint: {
              "@type": "GeoCoordinates",
              latitude: business.geo.latitude,
              longitude: business.geo.longitude,
            },
            geoRadius: 25000,
          },
        },
      })),
    };
  }

  // Tier 7 — aggregateRating on home and reviews pages only (where visibly shown — Google policy)
  if (includeRating) {
    node.aggregateRating = aggregateRatingNode();
  }

  return node;
}

// Shared ImageObject entities (3 aspect ratios — skill: Tier 8 proper image markup)
function imageObjects() {
  const base = `${siteUrl}/images/hero/hero-removals-huddersfield.jpg`;
  const shared = {
    contentUrl: base,
    url: base,
    creator: { "@id": ORG_ID },
    copyrightNotice: `© 2024 Huddersfield Removals`,
    caption:
      "Huddersfield Removals 3.5-tonne Luton van on a residential street in Huddersfield, West Yorkshire",
    contentLocation: {
      "@type": "Place",
      name: "Huddersfield, West Yorkshire",
      geo: {
        "@type": "GeoCoordinates",
        latitude: business.geo.latitude,
        longitude: business.geo.longitude,
      },
    },
  };
  return [
    { "@type": "ImageObject", "@id": IMAGE_16x9_ID, ...shared, width: "1200", height: "675" },
    { "@type": "ImageObject", "@id": IMAGE_4x3_ID, ...shared, width: "1200", height: "900" },
    { "@type": "ImageObject", "@id": IMAGE_1x1_ID, ...shared, width: "1200", height: "1200" },
    {
      "@type": "ImageObject",
      "@id": LOGO_ID,
      url: `${siteUrl}/images/logo.svg`,
      contentUrl: `${siteUrl}/images/logo.svg`,
      caption: "Huddersfield Removals logo",
      creator: { "@id": ORG_ID },
    },
  ];
}

export function buildSchemaGraph(input: GraphInput) {
  const pageUrl = absoluteUrl(input.path);
  const includeRating = input.includeRating ?? (input.pageType === "home" || input.pageType === "reviews");

  // Skill: top-level entities minimised (Principle 1: depth beats breadth)
  // Top-level: Organization, WebSite, LocalBusiness, ImageObjects (shared), WebPage, BreadcrumbList
  // Everything else is nested inside these.
  const graph: Record<string, unknown>[] = [
    // Tier 8 — Organization (brand entity — distinct from LocalBusiness)
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: business.name,
      url: siteUrl,
      logo: { "@id": LOGO_ID },
      image: { "@id": IMAGE_16x9_ID },
      sameAs: business.sameAs,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: business.phoneE164,
        email: business.email,
        availableLanguage: "English",
      },
    },
    // Tier 8 — WebSite + SearchAction (sitelinks search box)
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: siteUrl,
      name: business.name,
      description: "Huddersfield Removals — house, office, student and piano removals across Kirklees and West Yorkshire.",
      publisher: { "@id": ORG_ID },
      inLanguage: "en-GB",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteUrl}/services/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    // Skill: shared ImageObject entities in @graph (Tier 8 — proper image markup, 3 ratios + logo)
    ...imageObjects(),
    // LocalBusiness (Tiers 1-7)
    localBusinessNode(includeRating, input.pageType),
  ];

  // Skill Tier 8 — WebPage per page with speakable, mentions, datePublished/Modified
  const webPageNode: Record<string, unknown> = {
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: input.title,
    description: input.description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": LOCAL_ID },
    inLanguage: "en-GB",
    // Skill: speakable — tells AI Overviews and voice which elements to extract
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".lede", ".hero-chips", ".address-block", ".hours-block"],
    },
    // Skill: mentions on WebPage (not LocalBusiness) — entity-context reinforcement for AI
    mentions: [
      { "@type": "Place", name: "Huddersfield", sameAs: "https://www.wikidata.org/wiki/Q201812" },
      { "@type": "Place", name: "Kirklees", sameAs: "https://www.wikidata.org/wiki/Q1290176" },
      { "@type": "Place", name: "West Yorkshire", sameAs: "https://www.wikidata.org/wiki/Q23083" },
      { "@type": "Organization", name: "Kirklees Council", sameAs: "https://www.wikidata.org/wiki/Q6421330" },
    ],
    // Skill: dateModified freshness signal (Perplexity: 3-month-updated content averages 6 AI citations vs 3.6)
    datePublished: "2024-09-01",
    dateModified: new Date().toISOString().slice(0, 10),
  };

  // Attach primary image when provided
  if (input.image) {
    const imageId = `${pageUrl}#primaryimage`;
    webPageNode.primaryImageOfPage = { "@id": imageId };
    graph.push({
      "@type": "ImageObject",
      "@id": imageId,
      url: absoluteUrl(input.image.src),
      contentUrl: absoluteUrl(input.image.src),
      caption: input.image.alt,
      creator: { "@id": ORG_ID },
      inLanguage: "en-GB",
      contentLocation: {
        "@type": "Place",
        name: input.image.locationName,
        geo: {
          "@type": "GeoCoordinates",
          latitude: input.image.lat,
          longitude: input.image.lng,
        },
      },
    });
  }

  graph.push(webPageNode);

  // BreadcrumbList — every non-homepage gets one (surfaces in SERP + feeds entity hierarchy)
  if (input.breadcrumbs.length) {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl + "/" },
        ...input.breadcrumbs.map((crumb, i) => ({
          "@type": "ListItem",
          position: i + 2,
          name: crumb.name,
          item: absoluteUrl(crumb.path),
        })),
      ],
    });
  }

  // Service page entity — nested provider reference back to LocalBusiness (Principle 1: depth)
  if (input.service) {
    graph.push({
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: input.service.name,
      description: input.service.description,
      url: pageUrl,
      provider: { "@id": LOCAL_ID },
      // Skill Principle 6: hoursAvailable + serviceOutput on Service entity
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: business.hours.days,
        opens: business.hours.opens,
        closes: business.hours.closes,
      },
      serviceOutput: "Completed relocation of household or commercial goods",
      areaServed: {
        "@type": "City",
        name: "Huddersfield",
        sameAs: `https://www.wikidata.org/wiki/${business.wikidata.huddersfield}`,
      },
      // Skill: audience on Service (not LocalBusiness — type-constraint compliant, Part III)
      audience: {
        "@type": "PeopleAudience",
        audienceType: "Households and businesses relocating within or from Huddersfield and Kirklees",
        geographicArea: {
          "@type": "City",
          name: "Huddersfield",
          sameAs: "https://www.wikidata.org/wiki/Q201812",
        },
      },
    });
  }

  // Area page — Place entity with containedInPlace
  if (input.place) {
    graph.push({
      "@type": "Place",
      "@id": `${pageUrl}#place`,
      name: input.place.name,
      description: `Removal services in ${input.place.name}, Huddersfield from our ${input.place.landmark} starting point.`,
      geo: {
        "@type": "GeoCoordinates",
        latitude: input.place.latitude,
        longitude: input.place.longitude,
      },
      containedInPlace: {
        "@type": "City",
        name: "Huddersfield",
        sameAs: `https://www.wikidata.org/wiki/${business.wikidata.huddersfield}`,
      },
    });
  }

  // Blog/article — BlogPosting with datePublished, dateModified, author reference
  if (input.article) {
    graph.push({
      "@type": "BlogPosting",
      "@id": `${pageUrl}#article`,
      headline: input.article.headline,
      datePublished: input.article.datePublished,
      dateModified: input.article.dateModified ?? input.article.datePublished,
      author: { "@id": ORG_ID },
      publisher: { "@id": ORG_ID },
      mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
      about: { "@id": LOCAL_ID },
    });
  }

  // Skill Principle 3 (Dual-Consumer Inversion): FAQPage — deprecated for SERP rich results May 2026
  // but 3.2x higher AI Overview citation rate (Frase research). Implement on genuine FAQ pages only.
  if (input.faqs && input.faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: input.faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          // Skill: pack with specific, disambiguating facts — LLMs extract verbatim
          text: item.a,
        },
      })),
    });
  }

  // Skill: HowTo — deprecated for SERP rich results but still parsed for AI extraction
  if (input.howToSteps && input.howToSteps.length > 0) {
    graph.push({
      "@type": "HowTo",
      "@id": `${pageUrl}#howto`,
      name: input.howToName ?? input.title,
      step: input.howToSteps.map((s, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: s.name,
        text: s.text,
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
