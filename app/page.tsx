import AboutSummary from "@/components/AboutSummary";
import FeatureList from "@/components/FeatureList";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="h-[70vh] md:h-[80vh] lg:h-screen">
      <Hero />
      <AboutSummary />
      <FeatureList />
    </main>
  );
}
