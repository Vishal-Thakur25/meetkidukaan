'use client'

import { motion } from 'framer-motion'

const TeamSection = () => {
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
            Meet Our <span className="text-gradient">Expert Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our dedicated team of e-commerce experts, business coaches, and support specialists are committed to your success.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default TeamSection
