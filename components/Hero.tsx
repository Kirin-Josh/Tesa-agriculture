import React from 'react'
import { ImagesSlider } from './ui/ImagesSlider'
import { HeroImage, HeroTexts } from '@/data'
import { TypewriterEffect } from './ui/TypewriterEffect'

export default function Hero() {
  return (
    <section className="w-full h-full relative">
      <ImagesSlider
        className="absolute inset-0 h-full w-full"
        images={HeroImage}
      >
        <div className="flex flex-col items-center justify-center h-full w-full text-center px-4">
          <TypewriterEffect className='z-100' words={HeroTexts} />
        </div>
      </ImagesSlider>
    </section>
  );
}
