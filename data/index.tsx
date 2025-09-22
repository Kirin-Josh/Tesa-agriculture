export const navItems = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about-us" },
  { name: "Gallery", link: "/gallery" },
  { name: "Contact Us", link: "/contact-us" },
];

export const HeroImage = [
  "/website-2025.jpg",
  "/website-2024.jpg",
  "/website-2023.jpg",
];

export const HeroTexts = [
  {
    text: "Cultivating a Sustainable Future for Agriculture",
    className: "text-white",
    subtext:
      "Our precision ag technology gives you the insights to significantly increase yield and reduce waste.",
  },
];

export interface Testimonial {
  id: string;
  name: string;
  testimonial: string;
  rating: number;
  date: string;
}

export const projects = [
  {
    title: "Conception et mise en oeuvre",
    description:
      "Expert guidance in agricultural consulting, farm management, and innovative crop research.",
  },
  {
    title: "Conseils et suivi des projets",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
  },
  {
    title: "Gestions des projets agricole",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
  },
  {
    title: "Evaluation des sites",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
  },
  {
    title: "Formation et Assistance",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
  },
  {
    title: "Conception des projets Agricoles",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
  },
];
