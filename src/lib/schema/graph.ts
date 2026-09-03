import { business } from "../../data/business";
import { services } from "../../data/services";
import { absoluteUrl, siteUrl } from "../site";

const LOCAL_ID = `${siteUrl}/#localbusiness`;
const WEBSITE_ID = `${siteUrl}/#website`;
const ORG_ID = `${siteUrl}/#organization`;

export type SchemaPageType =
  | "home"
  | "reviews"
  | "service"
  | "area"
  | "article"
  | "webpage";

export interface GraphInput {
  pageType: SchemaPageType;
  path: string;
  title: string;
  description: string;
  breadcrumbs: { name: string; path: string }[];
  service?: { name: string; slug: string; description: string };
  place?: { name: string; slug: string; latitude: number; longitude: number; landmark: string };
  article?: { headline: string; datePublished: string };
  image?: { src: string; alt: string; lat: number; lng: number; locationName: string };
  includeRating?: boolean;
}

function openingHoursSpec() {
  return business.hours.days.map((day) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: day,
    opens: business.hours.opens,
    closes: business.hours.closes,
  }));
}

function localBusinessNode(includeRating: boolean, pageType: SchemaPageType) {
  const node: Record<string, unknown> = {
    "@type": ["MovingCompany", "LocalBusiness"],
    "@id": LOCAL_ID,
    name: business.name,
    url: siteUrl,
    telephone: business.phoneE164,
    email: business.email,
    image: absoluteUrl("/images/hero/hero-removals-huddersfield.jpg"),
    logo: absoluteUrl("/images/logo.svg"),
    priceRange: business.priceRange,
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
    sameAs: business.sameAs,
    areaServed: {
      "@type": "City",
      name: "Huddersfield",
      sameAs: `https://www.wikidata.org/wiki/${business.wikidata.huddersfield}`,
    },
    openingHoursSpecification: openingHoursSpec(),
  };

  if (pageType === "home") {
    node.disambiguatingDescription = business.disambiguatingDescription;
    node.serviceArea = {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: business.geo.latitude,
        longitude: business.geo.longitude,
      },
      geoRadius: 25000,
    };
    node.hasOfferCatalog = {
      "@type": "OfferCatalog",
      name: "Removal services",
      itemListElement: services.map((svc) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: svc.title,
          description: svc.short,
          url: absoluteUrl(`/${svc.slug}/`),
        },
      })),
    };
  }
  if (includeRating) {
    node.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: business.rating.value,
      bestRating: 5,
      worstRating: 1,
    };
  }
  return node;
}

export function buildSchemaGraph(input: GraphInput) {
  const pageUrl = absoluteUrl(input.path);
  const includeRating = input.includeRating ?? (input.pageType === "home" || input.pageType === "reviews");

  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: siteUrl,
      name: business.name,
      publisher: { "@id": ORG_ID },
      inLanguage: "en-GB",
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteUrl}/services/?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: business.name,
      url: siteUrl,
      logo: absoluteUrl("/images/logo.svg"),
      sameAs: business.sameAs,
    },
    localBusinessNode(includeRating, input.pageType),
  ];

  const webPageNode: Record<string, unknown> = {
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: input.title,
    description: input.description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": LOCAL_ID },
    inLanguage: "en-GB",
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/services/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  if (input.image) {
    const imageId = `${pageUrl}#primaryimage`;
    webPageNode.primaryImageOfPage = { "@id": imageId };
    graph.push({
      "@type": "ImageObject",
      "@id": imageId,
      url: absoluteUrl(input.image.src),
      contentUrl: absoluteUrl(input.image.src),
      caption: input.image.alt,
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

  if (input.breadcrumbs.length) {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: input.breadcrumbs.map((crumb, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: crumb.name,
        item: absoluteUrl(crumb.path),
      })),
    });
  }

  if (input.service) {
    graph.push({
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: input.service.name,
      description: input.service.description,
      url: pageUrl,
      provider: { "@id": LOCAL_ID },
      areaServed: {
        "@type": "City",
        name: "Huddersfield",
        sameAs: `https://www.wikidata.org/wiki/${business.wikidata.huddersfield}`,
      },
    });
  }

  if (input.place) {
    graph.push({
      "@type": "Place",
      "@id": `${pageUrl}#place`,
      name: input.place.name,
      description: `Removals serving ${input.place.name} from ${input.place.landmark} and surrounding streets.`,
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

  if (input.article) {
    graph.push({
      "@type": "BlogPosting",
      "@id": `${pageUrl}#article`,
      headline: input.article.headline,
      datePublished: input.article.datePublished,
      author: { "@id": ORG_ID },
      publisher: { "@id": ORG_ID },
      mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

