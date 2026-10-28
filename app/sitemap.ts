import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(routing.locales.map((l) => [l, `${site.url}/${l}`]));

  return routing.locales.map((locale) => ({
    url: `${site.url}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === routing.defaultLocale ? 1 : 0.8,
    alternates: { languages },
  }));
}
