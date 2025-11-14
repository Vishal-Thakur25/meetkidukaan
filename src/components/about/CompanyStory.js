"use client";

import { motion } from "framer-motion";

const CompanyStory = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our <span className="text-gradient">Story</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Founded in 2020 with a vision to democratize e-commerce success,
            MEET KI DUKAAN has grown from a small startup to India's leading
            franchise platform, helping hundreds of entrepreneurs build
            profitable online businesses.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyStory;
