import { useTranslations } from "next-intl";
import { site } from "@/lib/site";
import ContactForm from "./ContactForm";
import WhatsAppLink from "./WhatsAppLink";

const rows = ["phone", "email", "facebook", "address"] as const;

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" aria-labelledby="contact-h" className="bg-sage">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-start gap-12 px-10 py-24 phone:px-5 phone:py-16">
        <div className="reveal flex min-w-0 flex-[1_1_380px] flex-col gap-5">
          <p className="m-0 text-[13px] font-bold tracking-[0.12em] text-forest uppercase">{t("eb")}</p>
          <h2 id="contact-h" className="m-0 font-serif text-[44px] leading-[1.08] font-semibold text-forest-deep tab:text-[34px] phone:text-[30px]">
            {t("h2")}
          </h2>
          <p className="m-0 text-[17px] leading-[1.6] text-ink-2">{t("lead")}</p>
          <WhatsAppLink message={t("waMsg")} iconSize={20} className="self-start px-6 py-4 text-base">
            {t("wa")}
          </WhatsAppLink>
          <dl className="mt-2 mb-0 grid grid-cols-[auto_1fr] gap-x-[18px] gap-y-3 text-base">
            {rows.map((r) => (
              <div key={r} className="contents">
                <dt className="font-bold text-forest">{t(`rows.${r}.k`)}</dt>
                <dd className="m-0 text-ink-2">
                  {r === "phone" ? (
                    site.phones.map((p, i) => (
                      <span key={p.tel}>
                        {i > 0 && " · "}
                        <a href={`tel:${p.tel}`} className="whitespace-nowrap">
                          {p.label}
                        </a>
                      </span>
                    ))
                  ) : r === "facebook" && site.facebookUrl ? (
                    <a href={site.facebookUrl} target="_blank" rel="noopener noreferrer">
                      {t(`rows.${r}.v`)}
                      <span className="sr-only"> {t("newTab")}</span>
                    </a>
                  ) : r === "email" && site.email ? (
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  ) : (
                    t(`rows.${r}.v`)
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
