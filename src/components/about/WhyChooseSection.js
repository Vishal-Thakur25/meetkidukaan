"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const WhyChooseSection = () => {
  const reasons = [
    "Proven business model with 95% success rate",
    "Comprehensive training and ongoing support",
    "Complete business setup included",
    "Territory protection and exclusive rights",
    "Marketing support and promotional materials",
    "24/7 technical and business assistance",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose <span className="text-gradient">MEET KI DUKAAN?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{reason}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
