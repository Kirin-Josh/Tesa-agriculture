/* eslint-disable @typescript-eslint/no-explicit-any */
import HeroAbout from "../components/HeroAbout";
import Aboutus from "../components/Aboutus";
import Testimonials from "@/components/Testimonials";
import { Testimonial } from "@/data";
import Timeline from "../components/Timeline";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function fetchTestimonials(): Promise<Testimonial[]> {
  const res = await fetch(`${API_URL}/testimonials`, { cache: "no-store" }); // or 'force-cache' for ISR
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

export default async function AboutUs() {
  const testimonials = await fetchTestimonials();

  return (
    <div>
      <HeroAbout />
      <Aboutus />
      <Timeline />
      <Testimonials testimonials={testimonials} />
    </div>
  );
}
