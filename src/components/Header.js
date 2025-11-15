"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { usePopup } from "./PopupProvider";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { openPopup } = usePopup();

  const handleClick = () => {
    setIsMobileMenuOpen(false);
    openPopup();
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#franchise-model", label: "Franchise Model" },
    { href: "#pricing", label: "Plans & Pricing" },
    { href: "#services", label: "Services" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-[1680px] m-auto section-padding">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-22 h-22 bg-hero-gradient rounded-lg flex-center">
              <Image
                src="/images/meetkidukaan.png"
                width={300}
                height={200}
                className="w-full"
                alt="Meet Ki Dukaan"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-md hover:text-primary-600 transition-colors duration-200 font-medium text-sm xl:text-base whitespace-nowrap
                  ${isScrolled ? "text-gray-800" : "text-white"}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <Link href="/contact" className="btn-primary text-sm xl:text-base">
              <Phone className="w-4 h-4 mr-2" />
              <span>Book Zoom Call</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t shadow-lg"
          >
            <div className="section-padding py-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium py-2 border-b border-gray-100 last:border-b-0"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <button className="btn-primary mt-4" onClick={handleClick}>
                  <Phone className="w-4 h-4 mr-2" />
                  <span>Book Zoom Call</span>
                </button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
