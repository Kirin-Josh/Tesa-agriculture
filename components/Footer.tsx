import { useTranslations } from "next-intl";
import { navLinks, site } from "@/lib/site";
import { waUrl } from "@/lib/whatsapp";

const linkClass = "text-on-dark no-underline hover:text-white hover:underline";

export default function Footer() {
  const t = useTranslations("foot");
  const nav = useTranslations("nav");
  const contact = useTranslations("contact");

  return (
    <footer className="on-dark bg-forest-deep text-on-dark">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-9 px-10 pt-14 pb-7 phone:px-5">
        <div className="flex flex-wrap justify-between gap-x-16 gap-y-8">
          <div className="flex max-w-[380px] flex-[1_1_280px] flex-col gap-3">
            <p className="m-0 font-serif text-[26px] font-semibold text-white">TESA Enterprises</p>
            <p className="m-0 text-sm font-semibold tracking-[0.06em] text-gold-on-dark uppercase">Agro-Consulting Services</p>
            <p className="m-0 text-[15px] leading-[1.6]">{t("slogan")}</p>
          </div>
          <nav aria-label={t("label")} className="flex flex-wrap gap-x-14 gap-y-7 text-[15px]">
            <div className="flex flex-col gap-2.5">
              <h2 className="m-0 text-[15px] font-bold text-white">{t("explore")}</h2>
              {navLinks
                .filter((l) => l.id !== "contact")
                .map((l) => (
                  <a key={l.id} href={`#${l.id}`} className={linkClass}>
                    {nav(l.key)}
                  </a>
                ))}
            </div>
            <div className="flex flex-col gap-2.5">
              <h2 className="m-0 text-[15px] font-bold text-white">{t("reach")}</h2>
              <a href={waUrl(contact("waMsg"))} target="_blank" rel="noopener noreferrer" className={linkClass}>
                WhatsApp<span className="sr-only"> {contact("newTab")}</span>
              </a>
              {site.facebookUrl ? (
                <a href={site.facebookUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  Facebook<span className="sr-only"> {contact("newTab")}</span>
                </a>
              ) : (
                <a href="#contact" className={linkClass}>
                  Facebook
                </a>
              )}
              <span>{t("city")}</span>
            </div>
          </nav>
        </div>
        <p className="m-0 border-t border-forest-border pt-5 text-[13px]">
          {t("rights", { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
}
