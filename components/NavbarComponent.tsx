"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton,
} from "@/components/ui/ResizableNavbar";
import { navItems } from "@/data";
import { useState } from "react";

export default function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-[5rem] relative">
      <Navbar>
        {/* Desktop Navbar */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <NavbarButton href="/get-started">Get Started</NavbarButton>
        </NavBody>

        {/* Mobile Navbar */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.link}
                className="w-full rounded-lg px-4 py-2 text-lg font-medium text-neutral-700 hover:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-800"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}

            <NavbarButton
              href="/get-started"
              className="mt-4 w-full"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </NavbarButton>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
