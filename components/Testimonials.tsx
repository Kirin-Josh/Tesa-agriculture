"use client";
import { GetStaticProps } from "next";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Testimonial } from "@/data";

interface Props {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials = [] }: Props) {
  const [index, setIndex] = useState(0);
  const [manual, setManual] = useState(false);
  const [perView, setPerView] = useState(1);
  const manualTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const totalPages = Math.ceil(testimonials.length / perView);

  // Responsive perView and reset index only if perView changes
  useEffect(() => {
    const handleResize = () => {
      const newPerView = window.innerWidth >= 1024 ? 2 : 1;
      setPerView((prev) => {
        if (prev !== newPerView) {
          setIndex(0);
          return newPerView;
        }
        return prev;
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide interval
  useEffect(() => {
    if (manual) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalPages);
    }, 5000);

    return () => clearInterval(interval);
  }, [manual, totalPages]);

  // Clear manual timeout on unmount
  useEffect(() => {
    return () => {
      if (manualTimeoutRef.current) clearTimeout(manualTimeoutRef.current);
    };
  }, []);

  const handleDotClick = (i: number) => {
    setIndex(i);
    setManual(true);
    if (manualTimeoutRef.current) clearTimeout(manualTimeoutRef.current);
    manualTimeoutRef.current = setTimeout(() => setManual(false), 10000);
  };
  //  console.log("Testimonials data:", testimonials);

  return (
    <section className="w-full min-h-screen px-0 md:px-12 lg:px-20 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          Customer Testimonials
        </h1>

        <div className="overflow-hidden" aria-label="Testimonials carousel">
          <motion.div
            className="flex"
            animate={{ x: `-${index * (100 / totalPages)}%` }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
            style={{
              width: `${totalPages * 100}%`,
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={t.id || i}
                className="flex-shrink-0 px-3"
                style={{
                  width: `${100 / (perView * totalPages)}%`,
                }}
              >
                <article
                  className="bg-white rounded-xl shadow-md shadow-gray-200 p-6 flex flex-col justify-between w-full max-w-md lg:max-w-xl h-auto mx-auto"
                  aria-label={`Testimonial from ${t.name}`}
                >
                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    “{t.testimonial}”
                  </p>

                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={
                          i < t.rating ? "text-yellow-400" : "text-gray-300"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mt-auto">
                    <div>
                      <h3 className="font-semibold text-gray-900">{t.name}</h3>
                      <p className="text-sm text-gray-500">
                        {t.date}
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dot navigation */}
        <nav
          className="flex justify-center mt-6 gap-2"
          role="tablist"
          aria-label="Testimonials navigation"
        >
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`w-3 h-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-green-600 ${
                index === i ? "bg-green-600 w-6" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonials page ${i + 1}`}
              aria-current={index === i ? "true" : undefined}
              role="tab"
              tabIndex={index === i ? 0 : -1}
              onKeyDown={(e) => {
                if (e.key === "ArrowRight") {
                  handleDotClick((i + 1) % totalPages);
                } else if (e.key === "ArrowLeft") {
                  handleDotClick((i - 1 + totalPages) % totalPages);
                }
              }}
            />
          ))}
        </nav>
      </div>
    </section>
  );
}


