"use client";

import {
  TrendingUp,
  Users,
  ShoppingCart,
  Zap,
  Target,
  Globe,
  Shield,
  Smartphone,
  BarChart3,
  CreditCard,
  Star,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
// src/app/layout.tsx (ya _app.js agar aapka pages dir hai)
import { Bai_Jamjuree } from "next/font/google";
import FranchiseSection from "../FranchiseSection";
import { usePopup } from "../PopupProvider";

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
    <section className="py-24 bg-gray-200 relative overflow-hidden ">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-100 to-transparent rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-100 to-transparent rounded-full blur-3xl opacity-50"></div>

      <div className=" max-w-[1680px] mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2
            className={`${baiJamjuree.className} text-4xl md:text-6xl font-bold text-gray-600 mb-6`}
          >
            ABOUT MEET KI DUKAAN DROPSHIPPING
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32 relative">
          {/* Left Side - Content */}
          <div className="space-y-10 flex flex-col justify-center h-full">
            <div className="space-y-4">
              <h3
                className={`text-3xl md:text-4xl font-extrabold ${baiJamjuree.className} `}
              >
                Grow revenue and increase customer reach with user-centric
                solutions.
              </h3>

              <p className="text-lg text-gray-700 w-full leading-relaxed font-semibold">
                Start your online business without keeping any inventory. We
                provide complete setup support, extensive product catalog, and
                pan India shipping.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                    <span className="font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                      {benefit.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <button
                onClick={openPopup}
                className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-orange-600 to-orange-400 text-white font-semibold rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:brightness-110"
                suppressHydrationWarning={true}
              >
                BOOK YOUR ZOOM MEET NOW !!
                <ArrowRight className="ml-3 w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Right Side - Enhanced Dashboard Mockup */}
          <div className="relative flex justify-center lg:justify-end h-full">
            {/* Glass card with image */}
            <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-gray-200 transform  transition-transform duration-500">
              <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
                <Image
                  src="/images/business-team-meeting-boardroom.jpg"
                  width={500}
                  height={500}
                  className="w-full rounded-2xl shadow-lg"
                  alt="Ecommerce Solutions"
                />
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl animate-bounce">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>

            <div className="absolute -bottom-10 -left-8 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl animate-pulse">
              <ShoppingCart className="w-12 h-12 text-white" />
            </div>

            <div className="absolute top-1/2 -left-6 w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg animate-ping">
              <Zap className="w-7 h-7 text-white" />
            </div>
          </div>
        </div>
        <FranchiseSection />
      </div>
    </section>
  );
};

export default AboutSection;
