'use client'

import { motion } from 'framer-motion'
import { Calculator } from 'lucide-react'

const ROICalculator = () => {
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
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
            <Calculator className="w-8 h-8 text-primary-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            ROI <span className="text-gradient">Calculator</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interactive ROI calculator will be available here to help you estimate your potential returns.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ROICalculator
