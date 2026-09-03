import { business } from "../data/business";

export const siteUrl = import.meta.env.PUBLIC_SITE_URL || business.url;

export function absoluteUrl(pathname: string): string {
  const base = siteUrl.replace(/\/$/, "");
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${base}${path}`;
}
