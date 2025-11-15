"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Bai_Jamjuree } from "next/font/google";
import { usePopup } from "../PopupProvider";

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // jo weights chahiye add karo
});

const CTASection = () => {
  const { openPopup } = usePopup();
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full opacity-5 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500 rounded-full opacity-5 transform -translate-x-1/2 translate-y-1/2"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={`text-center space-y-6 relative z-10 ${baiJamjuree.className}`}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white">
          Ready to Start Your E-commerce Journey?
        </h3>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto">
          Join hundreds of successful entrepreneurs who have built profitable
          businesses with our proven franchise model.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#about"
            className="btn-primary flex items-center justify-center space-x-2 text-lg px-8 py-4"
          >
            <span>Learn More About Franchise</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <button
            onClick={openPopup}
            className="btn-secondary flex items-center justify-center space-x-2 text-lg px-8 py-4"
          >
            <span>Book Your Zoom Meeting</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
