import { site } from "./site";

export function waUrl(text: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
