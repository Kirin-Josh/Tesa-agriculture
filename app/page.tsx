/* eslint-disable @typescript-eslint/no-explicit-any */
import AboutSummary from "@/components/AboutSummary";
import FeatureList from "@/components/FeatureList";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { Testimonial } from "@/data";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function fetchTestimonials(): Promise<Testimonial[]> {
  const res = await fetch(`${API_URL}/testimonials`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch testimonials");
  const testimonialsRaw = await res.json();
  return testimonialsRaw.map((t: any, i: number) => ({
    id: t.id ?? String(i),
    name: t.name,
    testimonial: t.testimonial,
    rating: t.rating,
    date: t.date,
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
