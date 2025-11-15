"use client";

import {
  ShoppingBag,
  Store,
  Smartphone,
  Building2,
  ArrowRight,
} from "lucide-react";
import { usePopup } from "./PopupProvider";

const FranchiseSection = () => {
  const { openPopup } = usePopup();
  const platforms = [
    {
      name: "Magento",
      description:
        "Enterprise-grade e-commerce platform built on open-source technology with advanced customization capabilities.",
      icon: Store,
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      features: [
        "Multi-store Management",
        "Advanced SEO",
        "B2B Features",
        "Scalable Architecture",
      ],
      projects: "150+ Projects",
    },
    {
      name: "WooCommerce",
      description:
        "Transform your WordPress website into a powerful e-commerce store with flexible customization options.",
      icon: ShoppingBag,
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50",
      features: [
        "WordPress Integration",
        "Extensive Plugins",
        "Cost Effective",
        "Easy Management",
      ],
      projects: "200+ Projects",
    },
    {
      name: "Shopify",
      description:
        "All-in-one commerce platform perfect for businesses of all sizes with built-in payment processing.",
      icon: Smartphone,
      color: "from-green-500 to-teal-500",
      bgColor: "from-green-50 to-teal-50",
      features: [
        "Hosted Solution",
        "Mobile Optimized",
        "App Ecosystem",
        "Quick Setup",
      ],
      projects: "180+ Projects",
    },
    {
      name: "BigCommerce",
      description:
        "Enterprise SaaS e-commerce platform offering 100% customizable solutions with no transaction fees.",
      icon: Building2,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      features: [
        "No Transaction Fees",
        "Built-in Features",
        "API-First",
        "Multi-Channel",
      ],
      projects: "120+ Projects",
    },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='0.02' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="px-4 relative z-10">
        {/* Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 overflow-hidden"
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${platform.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <platform.icon className="w-8 h-8 text-white" />
                </div>

                {/* Platform Name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                  {platform.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {platform.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {platform.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center text-sm"
                    >
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${platform.color} mr-3`}
                      ></div>
                      <span className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Projects Count */}
                <div
                  className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${platform.color} text-white text-sm font-medium rounded-full`}
                >
                  {platform.projects}
                </div>
              </div>

              {/* Hover Effect Border */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${platform.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              ></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button
            onClick={openPopup}
            className="inline-flex items-center md:px-10 md:py-5 px-6 py-4 bg-gradient-to-r from-orange-600 to-orange-400 text-white font-semibold rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:brightness-110"
            suppressHydrationWarning={true}
          >
            BOOK YOUR ZOOM MEET NOW !!
            <ArrowRight className="ml-3 w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FranchiseSection;
