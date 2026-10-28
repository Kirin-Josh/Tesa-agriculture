import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["fr", "en"],
  defaultLocale: "fr",
  localePrefix: "always",
  // Always land on French; visitors switch with the FR | EN toggle.
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
