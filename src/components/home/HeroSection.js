"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, TrendingUp, Users, Award } from "lucide-react";
import { Bai_Jamjuree } from "next/font/google";
import { usePopup } from "../PopupProvider";

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // jo weights chahiye add karo
});

const HeroSection = () => {
  const { openPopup } = usePopup();
  return (
    <section
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: 'url("/images/ecom-store.avif")',
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>

      {/* Background Elements */}
      {/* <div className="absolute top-20 right-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-bounce-slow"></div>
      <div
        className="absolute bottom-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-bounce-slow"
        style={{ animationDelay: "1s" }}
      ></div> */}

      {/* Main Content */}
      <div className="max-w-[1680px] m-auto section-padding relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center lg:justify-start"
            >
              {/* <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-200">
                <Award className="w-4 h-4 text-primary-600" />
                <span className="text-sm font-medium text-primary-700">
                  #1 E-commerce Franchise in India
                </span>
              </div> */}
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white `}
            >
              Start Your Own <span className="text-gradient">Business</span>{" "}
              with <span className="text-gradient">Meet Ki Dukan {""}</span>
              Franchise
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Join India's fastest-growing e-commerce franchise. Get complete
              training, proven business model, and ongoing support to build a
              6-figure online business.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-200">500+</div>
                <div className="text-sm text-gray-200">Active Franchises</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-200">₹2.5L+</div>
                <div className="text-sm text-gray-200">Avg Monthly Revenue</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-200">95%</div>
                <div className="text-sm text-gray-200">Success Rate</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={openPopup}
                className="btn-primary text-lg px-8 py-4"
              >
                <span>Book Zoom Meeting</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>

              <button className="btn-secondary text-lg px-8 py-4">
                <Play className="w-5 h-5 mr-2" />
                <span>Watch Success Stories</span>
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-700"
            >
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-gray-200">ROI in 6-12 months</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-blue-500" />
                <span className="text-gray-200">24/7 Support</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative max-w-lg w-full">
              <Image
                src="https://customer-assets.emergentagent.com/ecom-hero-image.jpg"
                alt="E-commerce Success"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl w-full h-auto"
                priority
              />

              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      ₹3.2L Revenue
                    </div>
                    <div className="text-sm text-gray-600">This Month</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      1,250+ Orders
                    </div>
                    <div className="text-sm text-gray-600">Last 30 Days</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
