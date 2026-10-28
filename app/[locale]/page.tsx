import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import type { Locale } from "@/i18n/routing";

export default function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = use(params);
  setRequestLocale(locale as Locale);
  const t = useTranslations("hero");

  return (
    <main id="accueil" className="mx-auto max-w-[1000px] px-10 py-[72px] text-center phone:px-5">
      <p className="rise d1 font-serif text-[19px] text-gold-text italic">{t("slogan")}</p>
      <h1 className="rise d2 mt-6 font-serif text-[72px] leading-[1.02] font-semibold tracking-[-0.025em] text-forest-deep lap:text-[60px] tab:text-[52px] phone:text-[38px]">
        {t("h1a")}
        <span className="text-gold-text italic">{t("h1em")}</span>
      </h1>
    </main>
  );
}
