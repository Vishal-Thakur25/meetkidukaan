'use client'

import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

const ComparisonTable = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Detailed <span className="text-gradient">Plan Comparison</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare all features across our franchise plans to make the best decision for your business.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="p-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Feature Comparison Coming Soon</h3>
              <p className="text-gray-600">
                Detailed comparison table will be available here showing all features across different plans.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ComparisonTable
