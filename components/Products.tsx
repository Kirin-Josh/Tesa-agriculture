import Image from "next/image";
import { useTranslations } from "next-intl";
import { photos, products } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import WhatsAppLink from "./WhatsAppLink";

export default function Products() {
  const t = useTranslations("prod");

  return (
    <section id="produits" aria-labelledby="produits-h" className="border-y border-line bg-white">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-10 px-10 py-24 phone:px-5 phone:py-16">
        <div className="reveal flex flex-wrap items-end justify-between gap-4">
          <div className="flex max-w-[640px] flex-col gap-3">
            <SectionHeading id="produits-h" eyebrow={t("eb")} title={t("h2")} />
          </div>
          <p className="m-0 max-w-[400px] text-base leading-[1.6] text-ink-3">{t("sub")}</p>
        </div>

        <div className="flex flex-wrap gap-6">
          {products.map((p) => {
            const name = t(`items.${p.id}.name`);
            return (
              <article
                key={p.id}
                className="card zoom reveal flex min-w-0 flex-[1_1_340px] flex-col overflow-hidden rounded-[26px] bg-cream"
              >
                <div className="relative h-[300px] overflow-hidden bg-photo">
                  <Image
                    src={photos[p.photo]}
                    alt={t(`items.${p.id}.alt`)}
                    fill
                    sizes="(max-width: 760px) 100vw, 600px"
                    className="object-cover"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-white px-3 py-[7px] text-[13px] font-bold text-forest">
                    {t(`items.${p.id}.tag`)}
                  </span>
                </div>
                <div className="flex grow flex-col gap-3 p-6">
                  <h3 className="m-0 font-serif text-[28px] font-semibold text-forest-deep">{name}</h3>
                  <p className="m-0 text-base leading-[1.6] text-ink-2">{t(`items.${p.id}.desc`)}</p>
                  <p className="m-0 text-sm text-muted">{t(`items.${p.id}.info`)}</p>
                  <WhatsAppLink
                    message={t("orderMsg", { product: name })}
                    className="mt-auto self-start px-5 py-3.5 text-[15px]"
                  >
                    {t("order")}
                  </WhatsAppLink>
                </div>
              </article>
            );
          })}
          <article className="reveal flex min-w-0 flex-[1_1_280px] flex-col justify-center gap-2.5 rounded-[26px] border-2 border-dashed border-line-strong p-7">
            <h3 className="m-0 font-serif text-2xl font-semibold text-forest-deep">{t("seasonT")}</h3>
            <p className="m-0 text-[15px] leading-[1.6] text-muted">{t("seasonD")}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
