import { notFound } from "next/navigation";

// Any unknown path under /fr or /en renders the localized not-found page.
export default function CatchAll() {
  notFound();
}
