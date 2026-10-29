import Image from "next/image";
import { useTranslations } from "next-intl";
import { gallery, photos } from "@/lib/site";
import SectionHeading from "./SectionHeading";

export default function Gallery() {
  const t = useTranslations("work");

  return (
    <section id="realisations" aria-labelledby="real-h">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-9 px-10 py-24 phone:px-5 phone:py-16">
        <div className="reveal flex max-w-[640px] flex-col gap-3">
          <SectionHeading id="real-h" eyebrow={t("eb")} title={t("h2")} />
        </div>
        <div className="grid grid-flow-row-dense auto-rows-[200px] grid-cols-4 gap-3.5 tab:grid-cols-2 phone:grid-cols-1">
          {gallery.map((g) => (
            <figure
              key={g.photo}
              className={`zoom reveal relative m-0 overflow-hidden rounded-[18px] bg-photo ${g.rows === 2 ? "row-span-2" : ""}`}
            >
              <Image
                src={photos[g.photo]}
                alt={t(`caps.${g.photo}`)}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 300px"
                className="object-cover"
              />
              <figcaption
                aria-hidden="true"
                className="absolute bottom-3 left-3 rounded-[10px] bg-forest-deep/88 px-[11px] py-[7px] text-[13px] font-semibold text-white"
              >
                {t(`caps.${g.photo}`)}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
