"use client";

import {
  TrendingUp,
  Users,
  ShoppingCart,
  Zap,
  Target,
  Globe,
} from "lucide-react";
import Image from "next/image";
// src/app/layout.tsx (ya _app.js agar aapka pages dir hai)
import { Bai_Jamjuree } from "next/font/google";
import FranchiseSection from "../FranchiseSection";
import { usePopup } from "../PopupProvider";
import AboutHero from "../about/AboutHero";

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // jo weights chahiye add karo
});

const AboutSection = () => {
  const { openPopup } = usePopup();
  const benefits = [
    {
      icon: TrendingUp,
      text: "Increase Revenue by 300%",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Users,
      text: "Expand Customer Reach",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Target,
      text: "Targeted Marketing",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Globe,
      text: "Global Market Access",
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gray-200 relative overflow-hidden ">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-100 to-transparent rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-100 to-transparent rounded-full blur-3xl opacity-50"></div>

      <div className=" max-w-[1680px] mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2
            className={`${baiJamjuree.className} text-4xl md:text-6xl font-bold text-gradient mb-6`}
          >
            ABOUT MEET KI DUKAAN PRODUCT FRANCHISE
          </h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            <h3
              className={`text-2xl md:text-4xl font-extrabold ${baiJamjuree.className} `}
            >
              Grow revenue and increase customer reach with user-centric
              solutions.
            </h3>

            <p className="text-md md:text-lg text-gray-700  w-full leading-relaxed font-semibold">
              Start your online business without keeping any inventory. We
              provide complete setup support, extensive product catalog, and pan
              India shipping.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mt-10">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group p-5 rounded-2xl bg-white/70 backdrop-blur-sm shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}
                  >
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="font-semibold text-sm md:text-md text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                    {benefit.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <AboutHero />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
