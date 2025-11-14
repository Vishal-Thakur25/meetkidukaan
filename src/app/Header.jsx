"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  // Add sticky scroll effect
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-md"
          : "bg-transparent backdrop-blur-0"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <Image
              alt="MEET KI DUKAAN Logo"
              width={60}
              height={60}
              className="h-12 w-auto object-contain rounded-lg shadow"
              src="https://customer-assets.emergentagent.com/job_franchise-hub-6/artifacts/j1gmf6bb_photo_6269394389842988051_y.jpg"
            />

            <span className="text-2xl font-extrabold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent tracking-wide">
              MEET KI DUKAAN
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {["About", "Services", "Plans", "Franchise"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <button className="inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-all shadow-lg hover:shadow-xl h-10 px-5 py-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white">
            Book Zoom Call
          </button>
        </div>
      </div>
    </header>
  );
}
