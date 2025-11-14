"use client";

import { motion } from "framer-motion";
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

const FranchiseOverview = () => {
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
      <div className="container-max section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
            Franchise Opportunity
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose{" "}
            <span className="text-gradient">MEET KI DUKAAN Franchise?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join a proven business model that has helped hundreds of
            entrepreneurs build successful e-commerce businesses with minimal
            risk and maximum support.
          </p>
        </motion.div>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200 group"
            >
              <div
                className={`w-14 h-14 ${opportunity.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <opportunity.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {opportunity.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {opportunity.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-hero-gradient rounded-2xl p-8 md:p-12 text-white mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-white/80">Active Franchises</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">₹2.5L+</div>
              <div className="text-white/80">Avg Monthly Revenue</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">95%</div>
              <div className="text-white/80">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">6-12</div>
              <div className="text-white/80">Months to ROI</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            Ready to Start Your E-commerce Journey?
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join hundreds of successful entrepreneurs who have built profitable
            businesses with our proven franchise model.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/franchise-model"
              className="btn-primary flex items-center justify-center space-x-2 text-lg px-8 py-4"
            >
              <span>Learn More About Franchise</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="btn-secondary flex items-center justify-center space-x-2 text-lg px-8 py-4"
            >
              <span>Book Free Consultation</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FranchiseOverview;
