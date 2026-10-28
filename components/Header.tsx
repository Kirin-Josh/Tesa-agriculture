import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { navLinks } from "@/lib/site";
import { MenuButton, MenuPanel, MenuProvider } from "./MobileMenu";

export default function Header() {
  const t = useTranslations("nav");
  const tl = useTranslations("langs");
  const locale = useLocale();
  const links = navLinks.map((l) => ({ href: `#${l.id}`, label: t(l.key) }));

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <a
        href="#accueil"
        className="absolute top-2 left-2 z-10 -translate-y-[200%] rounded-full bg-forest px-4 py-2 font-semibold text-white focus:translate-y-0 hover:text-white"
      >
        {t("skip")}
      </a>
      <MenuProvider>
        <nav
          aria-label={t("label")}
          className="mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-10 py-2.5 phone:px-5"
        >
          <a href="#accueil" aria-label={t("home")} className="flex shrink-0 items-center">
            <Image src="/logo-wide.jpg" alt={t("logoAlt")} width={393} height={229} loading="eager" className="block h-[76px] w-auto" />
          </a>

          <div className="flex items-center gap-7 text-[15px] tab:hidden">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="navlink">
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            <div role="group" aria-label={t("lang")} className="flex rounded-full border border-line-strong p-[3px] text-[13px] font-bold">
              {routing.locales.map((l) => {
                const active = l === locale;
                return (
                  <Link
                    key={l}
                    href="/"
                    locale={l}
                    hrefLang={l}
                    lang={l}
                    aria-label={tl(l)}
                    aria-current={active ? "true" : undefined}
                    className={`flex min-h-[34px] min-w-10 items-center justify-center rounded-full no-underline ${
                      active ? "bg-forest text-white hover:text-white" : "text-forest"
                    }`}
                  >
                    {l.toUpperCase()}
                  </Link>
                );
              })}
            </div>
            <a
              href="#contact"
              className="btn rounded-full bg-gold px-5 py-[13px] text-[15px] font-bold whitespace-nowrap text-ink no-underline hover:text-ink phone:hidden"
            >
              {t("cta")}
            </a>
            <MenuButton openLabel={t("menu")} closeLabel={t("close")} />
          </div>
        </nav>
        <MenuPanel links={links} cta={t("cta")} />
      </MenuProvider>
    </header>
  );
}
