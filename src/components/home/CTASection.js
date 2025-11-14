"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  Calendar,
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
} from "lucide-react";

const CTASection = () => {
  const urgencyPoints = [
    {
      icon: Users,
      text: "Limited franchise territories available",
    },
    {
      icon: TrendingUp,
      text: "Early bird pricing ending soon",
    },
    {
      icon: Clock,
      text: "Next training batch starts in 15 days",
    },
  ];

  const guarantees = [
    "ROI guarantee within 6-12 months",
    "24/7 support and training included",
    "Proven business model with 95% success rate",
    "Complete setup and marketing support",
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full opacity-5 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500 rounded-full opacity-5 transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="container-max section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main Headline */}
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              >
                Ready to Transform Your{" "}
                <span className="bg-gradient-to-r from-primary-400 to-orange-400 bg-clip-text text-transparent">
                  Financial Future?
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="text-xl text-gray-300 leading-relaxed"
              >
                Join 500+ successful entrepreneurs who chose MEET KI DUKAAN to
                build their e-commerce empire. Don't let this opportunity pass
                you by.
              </motion.p>
            </div>

            {/* Urgency Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-primary-400">
                ⚡ Act Fast - Limited Time Offer
              </h3>
              <div className="space-y-3">
                {urgencyPoints.map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <point.icon className="w-5 h-5 text-orange-400 flex-shrink-0" />
                    <span className="text-gray-300">{point.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Guarantees */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-green-400">
                ✅ Our Guarantees to You
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {guarantees.map((guarantee, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">{guarantee}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-200">
              <div className="space-y-6">
                {/* Card Header */}
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Start Your Journey Today
                  </h3>
                  <p className="text-gray-600">
                    Book a free consultation and discover how you can build a
                    6-figure e-commerce business
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600">
                      500+
                    </div>
                    <div className="text-xs text-gray-600">Franchisees</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">
                      ₹2.5L+
                    </div>
                    <div className="text-xs text-gray-600">Avg Revenue</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">95%</div>
                    <div className="text-xs text-gray-600">Success Rate</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-4">
                  <Link
                    href="/contact"
                    className="btn-primary w-full flex items-center justify-center space-x-2 text-lg py-4"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Book Free Consultation</span>
                  </Link>

                  <Link
                    href="/apply"
                    className="btn-secondary w-full flex items-center justify-center space-x-2 text-lg py-4"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Apply for Franchise</span>
                  </Link>
                </div>

                {/* Trust Indicators */}
                <div className="text-center space-y-2">
                  <div className="text-sm text-gray-600">
                    🔒 100% Secure & Confidential
                  </div>
                  <div className="text-sm text-gray-600">
                    ⚡ Get response within 24 hours
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold transform rotate-12 shadow-lg">
                Limited Offer!
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 space-y-6"
        >
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold">
              Don't Wait - Your Success Story Starts Now
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Every day you wait is a day of potential earnings lost. Join the
              MEET KI DUKAAN family and start building your e-commerce empire
              today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-primary flex items-center justify-center space-x-2 text-lg px-8 py-4"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/success-stories"
              className="text-primary-400 hover:text-primary-300 transition-colors flex items-center justify-center space-x-2 text-lg px-8 py-4"
            >
              <span>View Success Stories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Final Trust Line */}
          <div className="text-sm text-gray-400 max-w-md mx-auto">
            Join 500+ entrepreneurs who trusted MEET KI DUKAAN to transform
            their financial future. Your success is our commitment.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
