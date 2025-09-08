import Image from "next/image";
import React from "react";

export default function AboutSummary() {
  return (
    <section className="w-full lg:min-h-screen h-[80vh] px-6 md:px-12 lg:px-20 py-16 bg-yellow-600/10">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        {/* Left side */}
        <div className="flex flex-col md:w-1/2 space-y-6">
          <span className="text-sm uppercase tracking-widest text-yellow-700 font-semibold">
            About Us
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Empowering Agriculture for a Sustainable Future
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            We are dedicated to supporting agricultural innovation and
            sustainability. Our mission is to enhance the livelihoods of farmers
            through education, resources, and advocacy. By fostering innovation
            and community engagement, we help create resilient farming practices
            that benefit both people and the planet.
          </p>
          <a href="/about-us">
            <button className="bg-yellow-600 text-white hover:bg-yellow-700 shadow-md rounded-md font-medium transition py-3 px-6 mt-4 duration-200 ease-in-out cursor-pointer">
              Learn More
            </button>
          </a>
        </div>

        {/* Right side */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md h-[20rem] md:h-[28rem] lg:h-[32rem]">
            <Image
              src="/web-2025.jpg"
              alt="Agriculture empowerment"
              fill
              className="object-cover shadow-lg rounded-xl hover:translate-y-1 ease-in-out duration-300"
              priority
            />
            <div className="absolute inset-0 bg-black/30 rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
