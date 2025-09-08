import AboutSummary from "@/components/AboutSummary";
import FeatureList from "@/components/FeatureList";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSummary />
      <FeatureList />
      <Testimonials />
    </div>
  );
}
