import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import type { Locale } from "@/i18n/routing";
import Header from "@/components/Header";
import HeroB from "@/components/HeroB";
import TwoPaths from "@/components/TwoPaths";
import Products from "@/components/Products";
import Consulting from "@/components/Consulting";
import Gallery from "@/components/Gallery";
import AboutB from "@/components/AboutB";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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
        <Gallery />
        <AboutB />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
