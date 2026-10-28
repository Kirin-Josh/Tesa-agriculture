import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import type { Locale } from "@/i18n/routing";
import Header from "@/components/Header";
import HeroB from "@/components/HeroB";
import TwoPaths from "@/components/TwoPaths";
import Products from "@/components/Products";
import Consulting from "@/components/Consulting";

export default function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = use(params);
  setRequestLocale(locale as Locale);

  return (
    <>
      <Header />
      <main id="accueil">
        <HeroB />
        <TwoPaths />
        <Products />
        <Consulting />
      </main>
    </>
  );
}
