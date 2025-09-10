"use client";

import { testimonials } from "@/data";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";


export default function Testimonials() {
  const [index, setIndex] = useState(0);
    const [manual, setManual] = useState(false);
    const [perView, setPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setPerView(window.innerWidth >= 1024 ? 2 : 1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
    
     useEffect(() => {
       if (manual) return;

       const interval = setInterval(() => {
         setIndex(
           (prev) => (prev + 1) % Math.ceil(testimonials.length / perView)
         );
       }, 5000);

       return () => clearInterval(interval);
     }, [manual, perView]);

  return (
    <section className="w-full min-h-screen px-6 md:px-12 lg:px-20 py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Customer Testimonials
        </h2>

        {/* Carousel container */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: `-${(index * 100) / perView}%` }} 
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
            style={{
              width: `${(testimonials.length * 100) / perView}%`, 
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`flex-shrink-0 w-full ${
                  perView === 2 ? "lg:w-1/2" : "lg:w-full"
                } flex justify-center`}
              >
                <div className="bg-white rounded-xl shadow-md shadow-gray-200 p-6 flex flex-col justify-between lg:w-[40rem] h-72">
                  <p className="text-gray-700 text-base leading-relaxed mb-4 line-clamp-5">
                    “{t.text}”
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{t.name}</h4>
                      <span className="text-sm text-gray-500">{t.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dot navigation */}
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIndex(i);
                setManual(false);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                index === i ? "bg-green-600 w-6" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
