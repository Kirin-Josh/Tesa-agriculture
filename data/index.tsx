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

type Testimonial = {
  name: string;
  role: string;
  text: string;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Grace Njeri",
    role: "Smallholder Farmer, Kenya",
    text: "Before joining this initiative, I struggled with low yields. Now, with better training and access to modern techniques, my harvest has doubled and I can send my children to school.",
    avatar: "/avatars/grace.jpg",
  },
  {
    name: "Abdoulaye Traoré",
    role: "Community Leader, Mali",
    text: "This program has brought hope to our village. Farmers now share knowledge and resources, and our young people see agriculture as a future, not a burden.",
    avatar: "/avatars/abdoulaye.jpg",
  },
  {
    name: "Maria Lopez",
    role: "AgriTech Entrepreneur, Colombia",
    text: "What impressed me most is how technology is being used to empower small farmers. It’s inspiring to see sustainability and innovation working hand in hand.",
    avatar: "/avatars/maria.jpg",
  },
  {
    name: "Samuel Johnson",
    role: "Organic Farmer, Ghana",
    text: "Switching to eco-friendly practices felt risky at first, but the training I received here proved it works. My farm is thriving, and so is the land I work on.",
    avatar: "/avatars/samuel.jpg",
  },
];
