import { HoverEffect } from "@/components/ui/card-hover-effect";
import { projects } from "@/data";
import React from "react";

export default function Services() {
  return (
    <section className="w-full min-h-screen px-6 md:px-12 lg:px-20 py-16">
      <div className="flex-col space-y-5 mx-auto justify-center items-center">
        <div className="text-center space-y-6 mx-auto">
          <span className="text-sm tracking-widest uppercase font-semibold">
            Services
          </span>
          <h2 className="font-black text-4xl">Your Agricultural Success</h2>
          <p className="text-md text-zinc-500">
            Comprehensive solutions for modern farming challenges.
          </p>
        </div>

        <div>
          <HoverEffect items={projects} />
        </div>
      </div>
    </section>
  );
}
