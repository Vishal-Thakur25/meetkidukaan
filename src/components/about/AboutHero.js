"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Users, TrendingUp, Target } from "lucide-react";
import { Bai_Jamjuree } from "next/font/google";

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // jo weights chahiye add karo
});

const AboutHero = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Active Franchises" },
    { icon: TrendingUp, value: "₹100Cr+", label: "Revenue Generated" },
    { icon: Award, value: "95%", label: "Success Rate" },
    { icon: Target, value: "50+", label: "Cities Covered" },
  ];

  return (
    <section className="section-bg-light relative overflow-hidden">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className={`text-4xl md:text-5xl font-bold leading-tight text-gray-900 ${baiJamjuree.className}`}
              >
                EMPOWERING <span className="text-gradient">ENTERPRENEURS</span>{" "}
                SINCE 2020
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-600 leading-relaxed text-start"
              >
                We are India's leading e-commerce franchise platform, dedicated
                to transforming ambitious individuals into successful online
                entrepreneurs through proven systems, comprehensive training,
                and unwavering support.
              </motion.p>
            </div>

            {/* Key Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="text-gray-700">
                  Founded with a vision to democratize e-commerce success
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="text-gray-700">
                  Proven track record of creating successful entrepreneurs
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="text-gray-700">
                  Comprehensive support system for guaranteed success
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <Image
                src="https://customer-assets.emergentagent.com/about-hero-image.jpg"
                alt="About MEET KI DUKAAN"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
                priority
              />

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 border border-gray-100"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600 mb-1">
                    4+ Years
                  </div>
                  <div className="text-sm text-gray-600">Of Excellence</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary-600" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
