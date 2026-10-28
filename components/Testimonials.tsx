import { useTranslations } from "next-intl";

type Testimonial = { q: string; who: string };

// Hidden until real testimonials are added to messages → avis.items
// (same shape as avis.placeholder).
export default function Testimonials() {
  const t = useTranslations("avis");
  const items = t.raw("items") as Testimonial[];
  if (items.length === 0) return null;

  return (
    <section aria-labelledby="avis-h" className="border-t border-line">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-8 px-10 py-[88px] phone:px-5 phone:py-16">
        <h2 id="avis-h" className="reveal m-0 font-serif text-[40px] leading-[1.1] font-semibold text-forest-deep tab:text-[34px] phone:text-[30px]">
          {t("h2")}
        </h2>
        <div className="flex flex-wrap gap-5">
          {items.map((item) => (
            <figure
              key={item.who}
              className="reveal m-0 flex min-w-0 flex-[1_1_320px] flex-col gap-4 rounded-[22px] border border-line bg-white p-7"
            >
              <blockquote className="m-0 font-serif text-[21px] leading-[1.45] text-ink-2">{item.q}</blockquote>
              <figcaption className="text-sm font-semibold text-muted">{item.who}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
