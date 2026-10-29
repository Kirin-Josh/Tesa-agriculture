// Non-translated data. All visible text lives in messages/{fr,en}.json,
// keyed by the ids used here.

export const site = {
  name: "TESA Enterprises Agro-Consulting Services",
  founder: "Tchongo Emmanuel Stephen",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  // Digits only, with country code (wa.me format).
  whatsappNumber: "237680569614",
  // Shown in the contact list as tel: links; the first one is also on WhatsApp.
  phones: [
    { tel: "+237680569614", label: "+237 680 56 96 14" },
    { tel: "+237697237534", label: "+237 697 23 75 34" },
  ],
  // [À confirmer] e.g. "contact@…"; not shown in JSON-LD until set.
  email: "tchongoemmanuel65@gmail.com",
  facebookUrl: "https://www.facebook.com/tchongo.emmanuel.3",
};

export const photos = {
  greenhouse: "/web-21.jpg",
  harvest: "/agro-24.jpg",
  melons: "/agro-25.jpg",
  worker: "/web-2025.jpg",
  pepper: "/website-2021.jpg",
  rows: "/web-22.jpg",
  truck: "/agro-20.jpg",
  team: "/agro-26.jpg",
  flower: "/web-24.jpg",
  tending: "/agro-21.jpg",
  pepperYellow: "/pepper-yellow.jpg",
  pepperGreen: "/pepper-green.jpg",
  pepperRed: "/pepper-red.jpg",
} as const;

export type PhotoId = keyof typeof photos;
// Photos with a caption in messages → work.caps
export type CaptionedPhoto = Exclude<PhotoId, "worker">;

export const navLinks = [
  { id: "produits", key: "products" },
  { id: "conseil", key: "consulting" },
  { id: "realisations", key: "work" },
  { id: "apropos", key: "about" },
  { id: "contact", key: "contact" },
] as const;

export const strip: CaptionedPhoto[] = [
  "greenhouse", "harvest", "pepper", "team", "truck", "melons", "rows", "tending", "flower",
];

export const products = [
  { id: "peppers", photo: "pepper" },
  { id: "watermelons", photo: "melons" },
] as const;

export const services = [
  { id: "assessment", icon: "M3 20h18M5 20V9l7-5 7 5v11M9 20v-6h6v6" },
  { id: "design", icon: "M4 20l4-1 11-11-3-3L5 16zM14 6l3 3" },
  { id: "greenhouse", icon: "M3 21V11l9-7 9 7v10M3 21h18M8 21v-6M12 21v-8M16 21v-6" },
  { id: "management", icon: "M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01" },
  { id: "followup", icon: "M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11zM12 7v6M9 10h6" },
  { id: "training", icon: "M3 8l9-4 9 4-9 4zM7 10v5c0 1.7 2.2 3 5 3s5-1.3 5-3v-5" },
] as const;

export const steps = ["visit", "design", "setup", "followup"] as const;

export const gallery = [
  { photo: "rows", rows: 2 },
  { photo: "harvest", rows: 2 },
  { photo: "truck", rows: 2 },
  { photo: "team", rows: 1 },
  { photo: "flower", rows: 1 },
  { photo: "tending", rows: 1 },
  { photo: "pepperYellow", rows: 2 },
  { photo: "pepperGreen", rows: 2 },
  { photo: "pepperRed", rows: 2 },
] as const;

export const pillars = [
  { id: "grow", icon: "M12 22V10M12 10c0-4 3-7 8-7 0 5-3 8-8 7zM12 13c0-3-2.5-6-7-6 0 4 2.5 7 7 6z" },
  { id: "advise", icon: "M21 12a9 9 0 0 1-13.4 7.9L3 21l1.2-4.4A9 9 0 1 1 21 12zM8 12h.01M12 12h.01M16 12h.01" },
  { id: "train", icon: "M3 8l9-4 9 4-9 4zM7 10v5c0 1.7 2.2 3 5 3s5-1.3 5-3v-5" },
] as const;

export const needs = ["produits", "conseil", "autre"] as const;
export type Need = (typeof needs)[number];

export const leafIcon = "M12 22V10M12 10c0-4 3-7 8-7 0 5-3 8-8 7zM12 13c0-3-2.5-6-7-6 0 4 2.5 7 7 6z";
export const whatsappIcon = "M21 12a9 9 0 0 1-13.4 7.9L3 21l1.2-4.4A9 9 0 1 1 21 12z";
