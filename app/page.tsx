/* eslint-disable @typescript-eslint/no-explicit-any */
import AboutSummary from "@/components/AboutSummary";
import FeatureList from "@/components/FeatureList";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";

async function fetchTestimonials() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API_URL}/testimonials`);
  if (!res.ok) throw new Error("Failed to fetch testimonials");
  const testimonialsRaw = await res.json();
  return testimonialsRaw.map((t: any) => ({
    id: t.id,
    name: t.name,
    testimonial: t.testimonial,
    rating: t.rating,
    date: t.date,
    avatar: `https://api.adorable.io/avatars/48/${t.id}.png`,
  }));
}

export default async function Home() {
  const testimonials = await fetchTestimonials();
  return (
    <div>
      <Hero />
      <AboutSummary />
      <FeatureList />
      <Testimonials testimonials={testimonials} />
    </div>
  );
}
