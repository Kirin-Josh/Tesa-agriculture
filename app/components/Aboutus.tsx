import Image from "next/image";
import React from "react";
import { FaGlobe, FaHandshake, FaLeaf, FaLightbulb } from "react-icons/fa";

export default function Aboutus() {
  return (
    <>
      {/* Main section */}
      <section className="w-full lg:min-h-screen h-[80vh] px-6 md:px-12 lg:px-20 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left side */}
          <div className="flex flex-col md:w-1/2 space-y-6">
            <span className="text-sm uppercase tracking-widest font-semibold">
              Our Story
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-900">
              Our Journey: From Humble Beginnings to Success
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Founded in the early 2000s, Tesa Enterprise has steadily evolved
              from a small local initiative into a leading agricultural body.
              Our commitment to innovation and sustainability has driven
              significant growth and numerous achievements in the industry.
            </p>
          </div>

          {/* Right side */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md h-[20rem] md:h-[28rem] lg:h-[32rem]">
              <Image
                src="/web-2023.jpg"
                alt="about us agriculture"
                fill
                className="object-cover shadow-lg rounded-xl hover:translate-y-1 ease-in-out duration-300"
                priority
              />
              <div className="absolute inset-0 bg-black/30 rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full relative bg-yellow-50 py-12">
        <div className="relative flex-col items-center justify-center max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
          {/* Identity + Values */}
          <div className="text-center space-y-6 mx-auto">
            <p className="text-sm uppercase tracking-widest font-semibold text-gray-800">
              About Us
            </p>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Our Identity, Vision and Values
            </h2>

            {/* green pill box */}
            <div className="navbarItems rounded-2xl py-4 md:py-8 w-[20rem] md:w-[40rem] h-[10rem] md:h-[13rem] px-6 mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-white mx-auto relative z-100">
              {[
                {
                  title: "Freshness",
                  icon: <FaLeaf className="text-xl md:text-3xl" />,
                  position: "absolute top-2 md:top-4 left-1 md:left-6",
                },
                {
                  title: "Trust & Transparency",
                  icon: <FaHandshake className="text-xl md:text-3xl" />,
                    position: "absolute top-2 md:top-4 right-10 md:right-4",
                  width: "max-w-[1rem] md:max-w-full"
                },
                {
                  title: "Sustainability",
                  icon: <FaGlobe className="text-xl md:text-3xl" />,
                  position: "absolute bottom-0 md:bottom-5 left-39 md:left-30",
                },
                {
                  title: "Innovation",
                  icon: <FaLightbulb className="text-xl md:text-3xl" />,
                  position: "absolute bottom-0 md:bottom-5 right-46",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`itemCard p-4 rounded-xl flex flex-col items-center justify-center ${item.position} ${item.width}`}
                >
                  <span className="text-xl md:text-3xl">{item.icon}</span>
                  <p className="font-semibold">{item.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="bg-white rounded-2xl shadow-md py-16 md:px-12 px-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left md:-mt-12 -mt-10">
            <div className="border-b md:border-b-0 md:border-r border-gray-200 pr-0 md:pr-8 pb-6 md:pb-0">
              <h3 className="font-bold text-lg flex items-center justify-center md:justify-start gap-2">
                <span className="text-green-600">🎯</span> Vision
              </h3>
              <p className="text-gray-700 mt-3">
                To be East Africa&apos;s leading fresh produce supplier,
                fostering sustainable farming communities and healthy societies.
              </p>
            </div>
            <div className="pl-0 md:pl-8">
              <h3 className="font-bold text-lg flex items-center justify-center md:justify-start gap-2">
                <span className="text-green-600">🚀</span> Mission
              </h3>
              <p className="text-gray-700 mt-3">
                To source, deliver, and inspire access to the freshest produce
                with integrity, innovation, and heart.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
