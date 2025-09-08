// components/FooterComponent.tsx
import { navItems } from "@/data";
import Image from "next/image";
import React from "react";
import { FaFacebook, FaLocationArrow } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function FooterComponent() {
  return (
    <footer className="w-full px-6 md:px-12 lg:px-20 py-12 bg-yellow-600/10 mt-16">
      <div className="flex flex-col space-y-12 mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* left side */}
          <div className="flex flex-col items-start gap-4">
            <Image
              src="/logo.png"
              alt="logo"
              width={180}
              height={180}
              className="object-contain"
            />
            <p className="text-gray-600 text-sm">
              Empowering agriculture through innovation and sustainability.
            </p>
          </div>

          {/* right side */}
          <div className="flex flex-wrap gap-12 lg:gap-20">
            <div className="flex flex-col items-start gap-4 min-w-[200px]">
              <div>
                <p className="font-semibold text-gray-900 text-lg">Address</p>
                <p className="text-gray-600 flex items-center gap-2 mt-1 text-sm">
                  Yaounde, Cameroon
                  <FaLocationArrow className="text-green-700" />
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 text-lg mt-4">
                  Contact
                </p>
                <p className="text-gray-600 text-sm">
                  exampletesa@agriculture.com
                </p>
              </div>

              <div className="flex space-x-4 mt-4">
                <FaFacebook
                  size={22}
                  className="text-green-700 cursor-pointer hover:text-green-800 transition-colors"
                />
                <FaLinkedin
                  size={22}
                  className="text-green-700 cursor-pointer hover:text-green-800 transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 min-w-[150px]">
              <h3 className="text-green-800 font-bold text-lg mb-2">
                Navigation
              </h3>
              {navItems.map((item, id) => (
                <a
                  href={item.link}
                  key={id}
                  className="text-gray-600 hover:text-green-700 transition-colors text-sm"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3 min-w-[150px]">
              <h3 className="text-green-800 font-bold text-lg mb-2">
                Services
              </h3>
              <a
                href="#"
                className="text-gray-600 hover:text-green-700 transition-colors text-sm"
              >
                Consulting
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-green-700 transition-colors text-sm"
              >
                Soil Analysis
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-green-700 transition-colors text-sm"
              >
                Crop Management
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-green-700 transition-colors text-sm"
              >
                Sustainability
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-6 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Tesa Agro Consulting. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
