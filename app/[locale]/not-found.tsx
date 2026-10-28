import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

// Standalone: the header/footer anchor links only work on the homepage.
export default function NotFound() {
  const t = useTranslations("notFound");
  const nav = useTranslations("nav");

  return (
    <main className="mx-auto flex min-h-svh max-w-[720px] flex-col items-center justify-center gap-5 px-10 py-16 text-center phone:px-5">
      <Image src="/logo-wide.jpg" alt={nav("logoAlt")} width={393} height={229} className="mb-4 h-[96px] w-auto" />
      <h1 className="m-0 font-serif text-[44px] leading-[1.1] font-semibold text-forest-deep phone:text-[30px]">{t("title")}</h1>
      <p className="m-0 text-[17px] leading-[1.6] text-ink-2">{t("text")}</p>
      <Link
        href="/"
        className="btn rounded-full bg-forest px-6 py-4 text-base font-bold text-white no-underline hover:text-white"
      >
        {t("back")}
      </Link>
    </main>
  );
}
