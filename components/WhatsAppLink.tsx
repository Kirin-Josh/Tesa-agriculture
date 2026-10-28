import type { ReactNode } from "react";
import { useTranslations } from "next-intl";
import { whatsappIcon } from "@/lib/site";
import { waUrl } from "@/lib/whatsapp";
import Icon from "./Icon";

// Pill button that opens WhatsApp in a new tab with a prefilled message.
export default function WhatsAppLink({
  message,
  className = "",
  iconSize = 18,
  children,
}: {
  message: string;
  className?: string;
  iconSize?: number;
  children: ReactNode;
}) {
  const t = useTranslations("contact");

  return (
    <a
      href={waUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn inline-flex items-center gap-2.5 rounded-full bg-forest font-bold text-white no-underline hover:text-white ${className}`}
    >
      <Icon d={whatsappIcon} size={iconSize} />
      {children}
      <span className="sr-only">{t("newTab")}</span>
    </a>
  );
}
