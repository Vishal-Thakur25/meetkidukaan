"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import CountUp from "react-countup";
import Link from "next/link";
import {
  ArrowRight,
  Store,
  Users,
  TrendingUp,
  Award,
  Briefcase,
  Globe,
} from "lucide-react";
import { Bai_Jamjuree } from "next/font/google";

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // jo weights chahiye add karo
});

const FranchiseOverview = () => {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });
  const opportunities = [
    {
      icon: Store,
      title: "Complete E-commerce Setup",
      description:
        "Ready-to-launch online store with products, payment gateway, and logistics",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Users,
      title: "Dedicated Support Team",
      description: "24/7 technical and business support from our expert team",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: TrendingUp,
      title: "Proven Marketing Strategies",
      description: "Time-tested digital marketing campaigns that drive sales",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Award,
      title: "Brand Recognition",
      description: "Leverage the trusted MEET KI DUKAAN brand and reputation",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Briefcase,
      title: "Business Training",
      description:
        "Comprehensive training on e-commerce operations and management",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Globe,
      title: "Territory Rights",
      description:
        "Exclusive territory rights to operate in your chosen location",
      color: "bg-indigo-100 text-indigo-600",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='0.02' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>
      <div className="max-w-[1680px] mx-auto section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <div
            className="inline-block px-6 py-3 bg-gradient-to-r from-purple-400/30 via-pink-400/30 to-indigo-400/30 backdrop-blur-xl border border-white/30 rounded-full text-gray-900 font-semibold text-sm shadow-[0_4px_30px_rgba(0,0,0,0.1)]
hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300"
          >
            Franchise Opportunity
          </div>

          <h2
            className={`text-3xl md:text-5xl font-bold text-gray-900 ${baiJamjuree.className}`}
          >
            WHY CHOOSE{" "}
            <span className="text-gradient">
              MEET KI DUKAAN PRODUCT FRANCHISE?
            </span>
          </h2>
          <p
            className={`md:text-xl text-md text-gradient font-semibold max-w-4xl mx-auto leading-relaxed ${baiJamjuree.className}`}
          >
            Meet the growing demand for online shopping by partnering with -
            MEET KI DUKAAN
          </p>
          <p className="md:text-xl text-md text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Join a proven business model that has helped hundreds of
            entrepreneurs build successful e-commerce businesses with minimal
            risk and maximum support.
          </p>
        </motion.div>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 ">
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200 group hover:border-amber-300 hover:scale-[1.03] hover:border-3"
            >
              <div
                className={`w-14 h-14 md:w-18 md:h-18 ${opportunity.color} ${baiJamjuree.className} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <opportunity.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                {opportunity.title}
              </h3>
              <p className="text-gray-600 leading-relaxed md:text-xl">
                {opportunity.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-hero-gradient rounded-2xl p-8 md:p-12 text-gray-900 mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">
                {isInView ? <CountUp end={500} duration={2} suffix="+" /> : 0}
              </div>
              <div className="text-gray-700">Active Franchises</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">
                {isInView ? (
                  <CountUp
                    end={2.5}
                    duration={2}
                    decimals={1}
                    prefix="₹"
                    suffix="L+"
                  />
                ) : (
                  0
                )}
              </div>
              <div className="text-gray-700">Avg Monthly Revenue</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">
                {isInView ? <CountUp end={95} duration={2} suffix="%" /> : 0}
              </div>
              <div className="text-gray-700">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">
                {isInView ? <CountUp end={12} duration={2} /> : 0}
              </div>
              <div className="text-gray-700">Months to ROI</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FranchiseOverview;
