import React from "react";
import { Leaf, Users, FlaskConical, Sprout } from "lucide-react";

export default function FeatureList() {
  return (
    <section className="w-full min-h-screen px-6 md:px-12 lg:px-20 py-16 bg-white">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20">
        {/* Left Section */}
        <div className="flex flex-col md:w-1/2 space-y-6">
          <span className="text-sm uppercase tracking-wider textColor font-semibold">
            Features
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold leading-snug text-gray-900">
            Empowering Agriculture for a Sustainable Future
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our commitment to sustainable farming practices ensures that we
            protect our environment while producing high-quality crops. We
            believe in innovation and collaboration to drive the agricultural
            sector forward.
          </p>
          <a href="#learn-more">
            <button className="button text-white shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] rounded-md font-medium transition py-3 px-6 mt-2 duration-200 ease-in-out cursor-pointer">
              Learn More
            </button>
          </a>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-8 w-full md:w-1/2">
          {/* Row 1 */}
          <div className="flex flex-col lg:flex-row gap-8">
            <FeatureCard
              icon={<FlaskConical className="w-8 h-8 textColor" />}
              title="Innovative Research for Better Farming Solutions"
              description="Our research and development initiatives focus on creating cutting-edge agricultural technologies."
            />
            <FeatureCard
              icon={<Users className="w-8 h-8 textColor" />}
              title="Supporting Our Community Through Agriculture Initiatives"
              description="We actively engage with local communities to promote sustainable practices and education."
            />
          </div>

          {/* Row 2 */}
          <div className="flex flex-col lg:flex-row gap-8">
            <FeatureCard
              icon={<Leaf className="w-8 h-8 textColor" />}
              title="Commitment to Sustainable Farming Practices"
              description="We prioritize eco-friendly methods to enhance productivity."
            />
            <FeatureCard
              icon={<Sprout className="w-8 h-8 textColor" />}
              title="Advancing Agriculture Through Innovation"
              description="Our focus on R&D leads to groundbreaking solutions."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col space-y-3 bg-gray-50 hover:bg-gray-100 transition rounded-xl p-6 shadow-sm">
      <div>{icon}</div>
      <h3 className="text-lg md:text-xl font-semibold text-gray-900">
        {title}
      </h3>
      <p className="text-gray-600 text-base leading-relaxed">{description}</p>
    </div>
  );
}
