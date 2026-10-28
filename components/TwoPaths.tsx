import Image from "next/image";
import { useTranslations } from "next-intl";
import { photos } from "@/lib/site";

export default function TwoPaths() {
  const t = useTranslations("paths");

  const paths = [
    { href: "#produits", photo: photos.melons, eb: t("buyEb"), title: t("buyT"), desc: t("buyD"), dark: false },
    { href: "#conseil", photo: photos.worker, eb: t("growEb"), title: t("growT"), desc: t("growD"), dark: true },
  ];

  return (
    <section aria-label={t("label")} className="mx-auto max-w-[1240px] px-10 pb-24 phone:px-5">
      <div className="flex flex-wrap gap-5">
        {paths.map((p) => (
          <a
            key={p.href}
            href={p.href}
            className={`card reveal flex min-w-0 flex-[1_1_380px] items-center gap-[22px] rounded-3xl p-[18px] no-underline phone:gap-4 ${
              p.dark ? "bg-forest text-white hover:text-white" : "border border-line bg-white text-ink hover:text-ink"
            }`}
          >
            <span className="zoom relative block size-[132px] flex-none overflow-hidden rounded-2xl phone:size-[104px]">
              <Image src={p.photo} alt="" fill sizes="132px" className="object-cover" />
            </span>
            <span className="flex flex-col gap-1.5">
              <span className={`text-[13px] font-bold tracking-[0.1em] uppercase ${p.dark ? "text-gold-on-dark" : "text-gold-text"}`}>
                {p.eb}
              </span>
              <span className={`font-serif text-[26px] font-semibold phone:text-[22px] ${p.dark ? "" : "text-forest-deep"}`}>{p.title}</span>
              <span className={`text-[15px] leading-normal ${p.dark ? "text-on-dark-2" : "text-ink-3"}`}>
                {p.desc} <span className="arrow">→</span>
              </span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
