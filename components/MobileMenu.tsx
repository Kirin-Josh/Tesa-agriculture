"use client";

import { createContext, use, useEffect, useState, type ReactNode } from "react";

const MenuContext = createContext<{ open: boolean; setOpen: (open: boolean) => void }>({
  open: false,
  setOpen: () => {},
});

export function MenuProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const wide = window.matchMedia("(min-width: 981px)");
    const onWide = () => wide.matches && setOpen(false);
    document.addEventListener("keydown", onKey);
    wide.addEventListener("change", onWide);
    return () => {
      document.removeEventListener("keydown", onKey);
      wide.removeEventListener("change", onWide);
    };
  }, [open]);

  return <MenuContext value={{ open, setOpen }}>{children}</MenuContext>;
}

export function MenuButton({ openLabel, closeLabel }: { openLabel: string; closeLabel: string }) {
  const { open, setOpen } = use(MenuContext);

  return (
    <button
      type="button"
      onClick={() => setOpen(!open)}
      aria-expanded={open}
      aria-controls="mobile-menu"
      aria-label={open ? closeLabel : openLabel}
      className="hidden size-[46px] cursor-pointer items-center justify-center rounded-xl border border-line-strong bg-white text-forest tab:flex"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
        <path d={open ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"} />
      </svg>
    </button>
  );
}

export function MenuPanel({
  links,
  cta,
}: {
  links: { href: string; label: string }[];
  cta: string;
}) {
  const { open, setOpen } = use(MenuContext);
  if (!open) return null;

  const close = () => setOpen(false);

  return (
    <div id="mobile-menu" className="rise hidden flex-col border-t border-line-soft bg-white px-5 pt-1 pb-5 tab:flex">
      {links.map((l, i) => (
        <a
          key={l.href}
          href={l.href}
          onClick={close}
          className={`px-1 py-3.5 text-lg font-semibold text-ink no-underline ${
            i < links.length - 1 ? "border-b border-line-soft" : ""
          }`}
        >
          {l.label}
        </a>
      ))}
      <a
        href="#contact"
        onClick={close}
        className="btn mt-3 rounded-full bg-gold px-5 py-[15px] text-center text-base font-bold text-ink no-underline hover:text-ink"
      >
        {cta}
      </a>
    </div>
  );
}
