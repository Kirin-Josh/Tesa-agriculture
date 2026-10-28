# TESA Enterprises — website

One-page bilingual website for **TESA Enterprises Agro-Consulting Services**, a farming and agricultural consulting company in Yaoundé, Cameroon. It presents the farm's products (greenhouse bell peppers, open-field watermelons, seasonal crops) and its consulting services, and sends every enquiry to WhatsApp.

- French (default): `/fr`. English: `/en`. `/` always redirects to `/fr`.
- No backend: orders and the contact form open WhatsApp with a prefilled message.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, static generation) · React 19 · TypeScript
- [Tailwind CSS 4](https://tailwindcss.com) with the design tokens in `app/globals.css`
- [next-intl](https://next-intl.dev) for the two languages
- Fonts: Fraunces (headings) and Manrope (body), via `next/font`
- CSS-only animations, switched off with `prefers-reduced-motion`

## Getting started

Requires Node.js 20.9 or later.

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build   # production build
npm start       # serve the build
```

### Environment

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Public URL of the site, e.g. `https://www.example.cm`. Used for canonical links, Open Graph, `sitemap.xml`, `robots.txt` and JSON-LD. Defaults to `http://localhost:3000`, so set it in production. |

## Project structure

```
app/
  [locale]/layout.tsx     <html lang>, fonts, metadata (OG, hreflang)
  [locale]/page.tsx       homepage: assembles the sections in order
  [locale]/not-found.tsx  localized 404
  globals.css             colour tokens, breakpoints, keyframes, hover/reveal classes
  sitemap.ts, robots.ts, icon.png, apple-icon.png
components/               one file per section (Header, HeroB, TwoPaths, Products,
                          Consulting, Gallery, AboutB, Testimonials, Contact, Footer)
                          + MobileMenu, ContactForm, PageEffects (the only client components)
i18n/                     next-intl routing (fr default, en), request config, Link
messages/fr.json, en.json ALL visible text, in both languages
lib/site.ts               non-text data: phone/WhatsApp, Facebook, e-mail,
                          photo files, icons, list order of products/services/gallery
lib/whatsapp.ts           builds wa.me links
proxy.ts                  locale redirect (Next 16 replacement for middleware.ts)
public/                   photos, logo, founder photo
```

## Editing content

- **Text:** edit `messages/fr.json` **and** `messages/en.json`. Both files must keep the same keys. Don't hard-code text in components.
- **Phone, WhatsApp, Facebook, e-mail:** edit `lib/site.ts`. `whatsappNumber` is digits only with the country code (`237…`).
- **Photos:** put the file in `public/` and point to it from `photos` in `lib/site.ts`.
- **Testimonials:** the "Ils nous font confiance" section stays hidden while `avis.items` is empty. To show it, add real entries to `avis.items` in both message files:
  ```json
  "items": [{ "q": "« … »", "who": "Nom · Ville · Produit ou service" }]
  ```
- **Add a product or service:** add an entry (id + photo/icon) to `products` or `services` in `lib/site.ts`, then add the same id under `prod.items` or `cons.services` in both message files.

## Still to provide

- Business e-mail address
- Production domain (`NEXT_PUBLIC_SITE_URL`)
- Real customer testimonials
- Confirmation of the six consulting service descriptions

## Deploy

Any Next.js host works (e.g. [Vercel](https://vercel.com)). Set `NEXT_PUBLIC_SITE_URL` before building.
