import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { photos, site } from "@/lib/site";

// LocalBusiness structured data. Phone, e-mail and Facebook are only
// included once they are filled in lib/site.ts.
export default async function JsonLd({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "meta" });

  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    description: t("description"),
    url: `${site.url}/${locale}`,
    logo: `${site.url}/logo.jpg`,
    image: `${site.url}${photos.greenhouse}`,
    address: { "@type": "PostalAddress", addressLocality: "Yaoundé", addressCountry: "CM" },
    areaServed: { "@type": "Country", name: "Cameroon" },
    founder: { "@type": "Person", name: site.founder },
    ...(site.whatsappNumber && { telephone: `+${site.whatsappNumber}` }),
    ...(site.email && { email: site.email }),
    ...(site.facebookUrl && { sameAs: [site.facebookUrl] }),
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output with "<" escaped so it can't close the script tag
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
