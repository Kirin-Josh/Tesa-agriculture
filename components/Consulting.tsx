import { useTranslations } from "next-intl";
import { services, steps } from "@/lib/site";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";

export default function Consulting() {
  const t = useTranslations("cons");

  return (
    <section id="conseil" aria-labelledby="conseil-h" className="bg-forest-deep text-on-dark-3">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-12 px-10 py-[104px] phone:px-5 phone:py-16">
        <div className="reveal flex flex-wrap items-end justify-between gap-10">
          <div className="flex max-w-[680px] flex-col gap-3.5">
            <SectionHeading id="conseil-h" eyebrow={t("eb")} title={t("h2")} size={46} dark />
            <p className="m-0 text-lg leading-[1.6] text-on-dark phone:text-[17px]">{t("lead")}</p>
          </div>
          <a
            href="#contact"
            className="btn rounded-full bg-gold px-6 py-4 text-base font-bold text-ink no-underline hover:text-ink"
          >
            {t("cta")}
          </a>
        </div>

        <div className="flex flex-wrap gap-[18px]">
          {services.map((s) => (
            <article
              key={s.id}
              className="svc reveal flex min-w-0 flex-[1_1_300px] flex-col gap-3 rounded-[22px] border border-forest-border bg-forest-card p-[26px]"
            >
              <span className="ic flex size-12 items-center justify-center rounded-[14px] bg-forest-icon text-gold-on-dark">
                <Icon d={s.icon} stroke={1.8} />
              </span>
              <h3 className="m-0 text-xl font-bold text-white">{t(`services.${s.id}.title`)}</h3>
              <p className="m-0 text-[15px] leading-[1.6] text-on-dark">{t(`services.${s.id}.desc`)}</p>
            </article>
          ))}
        </div>

        <div className="flex flex-col gap-[22px] pt-3">
          <h3 className="reveal m-0 text-[13px] font-bold tracking-[0.12em] text-gold-on-dark uppercase">{t("howEb")}</h3>
          <div aria-hidden="true" className="relative h-0.5 bg-forest-border">
            <div className="line-grow absolute inset-0 bg-gold" />
          </div>
          <ol className="m-0 flex list-none flex-wrap p-0">
            {steps.map((id, i) => (
              <li key={id} className="reveal flex min-w-0 flex-[1_1_220px] flex-col gap-2 pr-6 pb-5">
                <span aria-hidden="true" className="font-serif text-[38px] font-semibold text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="m-0 text-lg font-bold text-white">{t(`steps.${id}.title`)}</h4>
                <p className="m-0 text-[15px] leading-[1.6] text-on-dark">{t(`steps.${id}.desc`)}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
