"use client";

import { useRef, useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { needs, type Need } from "@/lib/site";
import { waUrl } from "@/lib/whatsapp";

type Errors = { name?: string; phone?: string };

const inputClass =
  "min-h-12 rounded-xl border-[1.5px] border-input-line bg-white px-3.5 text-base font-normal text-ink aria-invalid:border-error";
const labelClass = "flex flex-col gap-2 text-sm font-semibold text-ink-nav";
const errorClass = "text-sm font-semibold text-error";

export default function ContactForm() {
  const t = useTranslations("contact");
  const [need, setNeed] = useState<Need>("produits");
  const [errors, setErrors] = useState<Errors>({});
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("nom") ?? "").trim();
    const phone = String(data.get("telephone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const next: Errors = {};
    if (!name) next.name = t("errName");
    if (!phone) next.phone = t("errPhone");
    setErrors(next);
    if (next.name) return nameRef.current?.focus();
    if (next.phone) return phoneRef.current?.focus();

    const text = [
      t("formMsg.hello"),
      t("formMsg.from", { name }),
      t("formMsg.phone", { phone }),
      t("formMsg.need", { need: t(`needs.${need}`) }),
      message && `\n${message}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(waUrl(text), "_blank", "noopener,noreferrer");
  }

  return (
    <form
      aria-label={t("formLabel")}
      noValidate
      onSubmit={onSubmit}
      className="reveal box-border flex min-w-0 flex-[1_1_460px] flex-col gap-[18px] rounded-[26px] bg-white p-[30px] phone:p-6"
    >
      <fieldset className="m-0 flex flex-col gap-2.5 border-0 p-0">
        <legend className="mb-2.5 p-0 text-[15px] font-bold text-forest-deep">{t("want")}</legend>
        <div className="flex flex-wrap gap-2">
          {needs.map((id) => {
            const on = id === need;
            return (
              <button
                key={id}
                type="button"
                aria-pressed={on}
                onClick={() => setNeed(id)}
                className={`btn min-h-11 cursor-pointer rounded-full border-[1.5px] px-4 py-2.5 text-[15px] font-semibold ${
                  on ? "border-forest bg-forest text-white" : "border-chip-line bg-white text-forest"
                }`}
              >
                {t(`needs.${id}`)}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="flex flex-wrap gap-3.5">
        <label className={`${labelClass} flex-[1_1_200px]`}>
          {t("name")}
          <input
            ref={nameRef}
            type="text"
            name="nom"
            autoComplete="name"
            required
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "err-name" : undefined}
            className={inputClass}
          />
          {errors.name && (
            <span id="err-name" className={errorClass}>
              {errors.name}
            </span>
          )}
        </label>
        <label className={`${labelClass} flex-[1_1_200px]`}>
          {t("phone")}
          <input
            ref={phoneRef}
            type="tel"
            name="telephone"
            autoComplete="tel"
            required
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "err-phone" : undefined}
            className={inputClass}
          />
          {errors.phone && (
            <span id="err-phone" className={errorClass}>
              {errors.phone}
            </span>
          )}
        </label>
      </div>

      <label className={labelClass}>
        {t(`msg.${need}`)}
        <textarea name="message" rows={5} className={`${inputClass} resize-y py-3`} />
      </label>

      <div className="flex flex-col items-start gap-2">
        <button
          type="submit"
          aria-describedby="send-hint"
          className="btn min-h-[52px] cursor-pointer rounded-full border-0 bg-gold px-7 text-base font-bold text-ink"
        >
          {t("send")}
        </button>
        <p id="send-hint" className="m-0 text-sm text-muted">
          {t("sendHint")}
        </p>
      </div>
    </form>
  );
}
