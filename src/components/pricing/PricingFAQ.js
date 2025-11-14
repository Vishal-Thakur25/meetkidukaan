'use client'

import { motion } from 'framer-motion'
import { HelpCircle } from 'lucide-react'

const PricingFAQ = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
            <HelpCircle className="w-8 h-8 text-purple-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Pricing <span className="text-gradient">FAQ</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Common questions about our pricing and investment plans will be answered here.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default PricingFAQ
