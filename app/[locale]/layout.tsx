import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { site } from "@/lib/site";
import PageEffects from "@/components/PageEffects";
import "../globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale as Locale, namespace: "meta" });

  return {
    metadataBase: new URL(site.url),
    title: t("title"),
    description: t("description"),
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  // Only the contact form translates on the client; keep the rest of the copy server-side.
  const { contact } = await getMessages();

  return (
    <html lang={locale} className={`${fraunces.variable} ${manrope.variable}`}>
      <body>
        <NextIntlClientProvider messages={{ contact }}>
          {children}
          <PageEffects />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
