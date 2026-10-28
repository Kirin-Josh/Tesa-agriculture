import Image from "next/image";
import { useTranslations } from "next-intl";
import { photos, pillars } from "@/lib/site";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";

export default function AboutB() {
  const t = useTranslations("about");
  const alt = useTranslations("alt");
  const values = t.raw("values") as string[];

  return (
    <section id="apropos" aria-labelledby="apropos-h" className="border-t border-line bg-white">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-14 px-10 py-24 phone:px-5 phone:py-16">
        <div className="flex flex-wrap items-center gap-14">
          <figure className="reveal relative m-0 min-w-[260px] flex-[0_1_380px] phone:mb-6 phone:basis-full">
            {/* [Photo du fondateur] — replace this box with <Image> once the owner sends the photo */}
            <div className="flex aspect-[4/5] items-center justify-center rounded-[28px] border-2 border-dashed border-line-strong bg-cream p-5 text-center text-[15px] text-muted">
              {t("photo")}
            </div>
            <div className="zoom pop absolute -right-7 -bottom-7 aspect-square w-[46%] overflow-hidden rounded-[22px] border-6 border-white bg-photo phone:-right-2 phone:-bottom-[18px] phone:w-[44%]">
              <Image src={photos.harvest} alt={alt("harvest")} fill sizes="200px" className="object-cover" />
            </div>
          </figure>

          <div className="reveal flex min-w-0 flex-[1_1_480px] flex-col gap-[22px]">
            <SectionHeading id="apropos-h" eyebrow={t("eb")} title={t("h2")} size={42} />
            <blockquote className="m-0 font-serif text-[26px] leading-[1.45] text-muted italic phone:text-[21px]">
              <span aria-hidden="true" className="align-[-24px] text-[64px] leading-[0] text-gold not-italic">
                “
              </span>
              {t("quote")}
            </blockquote>
            <p className="m-0 text-[15px] font-bold text-forest">{t("sign")}</p>
            <p className="m-0 text-base leading-[1.7] text-ink-2">{t("p")}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-[18px] pt-3">
          {pillars.map((p) => (
            <article key={p.id} className="card reveal flex min-w-0 flex-[1_1_280px] flex-col gap-3 rounded-[22px] bg-cream p-[26px]">
              <span className="flex size-12 items-center justify-center rounded-[14px] bg-forest text-gold-on-dark">
                <Icon d={p.icon} stroke={1.8} />
              </span>
              <h3 className="m-0 font-serif text-2xl font-semibold text-forest-deep">{t(`pillars.${p.id}.title`)}</h3>
              <p className="m-0 text-[15px] leading-[1.6] text-ink-2">{t(`pillars.${p.id}.desc`)}</p>
            </article>
          ))}
        </div>

        <div className="reveal flex flex-wrap items-center gap-2.5">
          <h3 className="m-0 mr-1.5 text-sm font-bold text-muted">{t("valuesLabel")}</h3>
          <ul className="m-0 flex list-none flex-wrap gap-2.5 p-0">
            {values.map((v) => (
              <li key={v} className="rounded-full border-[1.5px] border-forest px-3.5 py-2 text-sm font-bold text-forest">
                {v}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
