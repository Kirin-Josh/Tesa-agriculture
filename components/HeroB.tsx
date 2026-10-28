import Image from "next/image";
import { useTranslations } from "next-intl";
import { leafIcon, photos, strip } from "@/lib/site";
import Icon from "./Icon";

export default function HeroB() {
  const t = useTranslations("hero");
  const caps = useTranslations("work.caps");

  // The list is rendered twice so the -50% marquee loops seamlessly; the copy is hidden from assistive tech.
  const copies = [false, true];

  return (
    <section className="hero-b flex flex-col gap-12 overflow-hidden pt-[72px] pb-[88px] phone:gap-9 phone:pt-10 phone:pb-14">
      <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-6 px-10 text-center phone:px-5">
        <p className="rise d1 m-0 flex items-center gap-2.5 font-serif text-[19px] text-gold-text italic">
          <span className="sway inline-flex text-forest">
            <Icon d={leafIcon} size={20} />
          </span>
          {t("slogan")}
        </p>
        <h1 className="rise d2 m-0 font-serif text-[72px] leading-[1.02] font-semibold tracking-[-0.025em] text-forest-deep lap:text-[60px] tab:text-[52px] phone:text-[38px]">
          {t("h1a")}
          <span className="text-gold-text italic">{t("h1em")}</span>
        </h1>
        <p className="rise d3 m-0 max-w-[620px] text-[19px] leading-[1.6] text-ink-2 phone:text-[17px]">{t("lead")}</p>
        <div className="rise d4 flex flex-wrap justify-center gap-3 phone:w-full">
          <a
            href="#produits"
            className="btn rounded-full bg-forest px-6 py-4 text-base font-bold text-white no-underline hover:text-white phone:flex-[1_1_100%] phone:text-center"
          >
            {t("cta1")}
          </a>
          <a
            href="#conseil"
            className="btn rounded-full border-[1.5px] border-forest px-6 py-[15px] text-base font-bold text-forest no-underline phone:flex-[1_1_100%] phone:text-center"
          >
            {t("cta2")} <span className="arrow">→</span>
          </a>
        </div>
      </div>

      <div className="marquee-wrap rise d5 overflow-hidden" role="region" aria-label={t("stripLabel")}>
        <div className="marquee flex w-max gap-[18px] px-[9px]">
          {copies.map((isCopy) =>
            strip.map((id, i) => (
              <figure
                key={`${isCopy}-${id}`}
                aria-hidden={isCopy || undefined}
                className="zoom relative m-0 h-[360px] w-[300px] flex-none overflow-hidden rounded-3xl bg-photo phone:h-[260px] phone:w-[220px]"
                style={{ transform: `rotate(${i % 2 === 0 ? -1.5 : 1.5}deg)` }}
              >
                <Image
                  src={photos[id]}
                  alt={isCopy ? "" : caps(id)}
                  fill
                  sizes="(max-width: 640px) 220px, 300px"
                  loading={!isCopy && i < 5 ? "eager" : "lazy"}
                  className="object-cover"
                />
                <figcaption className="absolute bottom-3 left-3 rounded-[10px] bg-white px-[11px] py-[7px] text-[13px] font-semibold text-forest-deep">
                  {caps(id)}
                </figcaption>
              </figure>
            )),
          )}
        </div>
      </div>
    </section>
  );
}
