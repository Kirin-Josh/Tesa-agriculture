import { timelineEvents } from "@/data";
import React from "react";

export default function Timeline() {
  return (
    <section className="w-full min-h-screen px-6 md:px-12 lg:px-20 py-16">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20">
        {/* left section */}
        <div className="flex-col space-y-6 lg:w-1/2">
          <span className="text-sm uppercase tracking-wider textColor font-semibold">
            Heritage
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-grey-900 capitalize">
            Our Journey through time and innovation
          </h2>
        </div>

        {/* right section - Timeline */}
        <div className="lg:w-1/2 w-full">
          <div className="space-y-0">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative">
                {/* Timeline item */}
                <div className="flex items-start">
                  {/* Icon circle */}
                  <div
                    className={`flex items-center justify-center w-16 h-16 rounded-full bg-white border-4 border-gray-100 shadow-lg z-10 ${event.color} flex-shrink-0`}
                  >
                    <event.icon className="w-8 h-8" />
                  </div>

                  {/* Content */}
                  <div className="ml-8 pb-8">
                    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`text-xl font-bold ${event.color}`}>
                          {event.year}
                        </span>
                        <div
                          className={`w-2 h-2 rounded-full ${event.color.replace(
                            "text-",
                            "bg-"
                          )}`}
                        ></div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Individual connecting line between components - only show if not the last item */}
                {index < timelineEvents.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-12 bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
