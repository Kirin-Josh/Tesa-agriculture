import Image from 'next/image';
import React from 'react'

export default function HeroAbout() {
  return (
    <section className="h-[70vh] md:h-[80vh] lg:h-screen w-full relative">
      <div>
        <Image
          src="/web-21.jpg"
          alt="website-hero"
          className="absolute w-full h-full inset-0"
          fill
        />
      </div>
      <div className="absolute bg-black/20 w-full h-full" />
      <div className="flex flex-col items-start justify-center h-full w-full text-center px-4">
        <h2 className="text-2xl md:text-[3rem] z-50 font-black text-white">
          Empowering Agriculture Together
        </h2>
        <p className="z-50 text-white text-lg">
          At Tesa Enterprise, we are dedicated to transforming the agricultural
          landscape for a sustainable future.
        </p>
      </div>
    </section>
  );
}
