"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Clock,
  Award,
  Target,
} from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Quick Setup",
      description:
        "Get your e-commerce business up and running in just 7-14 days",
      highlight: "7-14 Days",
    },
    {
      icon: Shield,
      title: "Low Risk Investment",
      description:
        "Proven business model with 95% success rate and guaranteed ROI",
      highlight: "95% Success",
    },
    {
      icon: TrendingUp,
      title: "High Profit Margins",
      description:
        "Earn 40-60% profit margins on every sale with our optimized pricing",
      highlight: "40-60% Margins",
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "24/7 technical and business support from our expert team",
      highlight: "24/7 Support",
    },
    {
      icon: Clock,
      title: "Flexible Operations",
      description: "Work from anywhere, anytime with our automated systems",
      highlight: "Work From Home",
    },
    {
      icon: Award,
      title: "Brand Recognition",
      description:
        "Leverage the trusted MEET KI DUKAAN brand and customer base",
      highlight: "Trusted Brand",
    },
    {
      icon: Target,
      title: "Marketing Support",
      description:
        "Complete digital marketing campaigns and promotional materials",
      highlight: "Full Marketing",
    },
    {
      icon: CheckCircle,
      title: "Training Included",
      description: "Comprehensive 30-day training program covering all aspects",
      highlight: "30-Day Training",
    },
  ];

  const keyAdvantages = [
    "No prior e-commerce experience required",
    "Complete business setup included",
    "Proven products with high demand",
    "Automated order processing system",
    "Regular business performance reviews",
    "Exclusive territory rights protection",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-max section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
            Benefits of Joining
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Entrepreneurs Choose{" "}
            <span className="text-gradient">MEET KI DUKAAN?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the unique advantages that make MEET KI DUKAAN the
            preferred choice for aspiring e-commerce entrepreneurs across India.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                <benefit.icon className="w-6 h-6 text-primary-600" />
              </div>

              <div className="space-y-2 mb-3">
                <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                <div className="text-sm font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded-full inline-block">
                  {benefit.highlight}
                </div>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Key Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-50 to-orange-50 rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Everything You Need to{" "}
                  <span className="text-gradient">Succeed</span>
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We provide all the tools, training, and support you need to
                  build a successful e-commerce business, even if you're
                  starting from scratch.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {keyAdvantages.map((advantage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{advantage}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Content - Stats */}
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 text-center shadow-lg"
              >
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  ₹2.5L+
                </div>
                <div className="text-sm text-gray-600">
                  Average Monthly Revenue
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 text-center shadow-lg"
              >
                <div className="text-3xl font-bold text-green-600 mb-2">
                  6-12
                </div>
                <div className="text-sm text-gray-600">
                  Months to Break Even
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 text-center shadow-lg"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                <div className="text-sm text-gray-600">
                  Franchise Success Rate
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 text-center shadow-lg"
              >
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  24/7
                </div>
                <div className="text-sm text-gray-600">Support Available</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
