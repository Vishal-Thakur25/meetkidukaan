'use client'

import { motion } from 'framer-motion'

const AchievementsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-orange-600 text-white">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Our Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-100">Active Franchises</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">₹100Cr+</div>
              <div className="text-primary-100">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-primary-100">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-primary-100">Cities Covered</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AchievementsSection
