'use client'

import { motion } from 'framer-motion'
import { Target, Eye } from 'lucide-react'

const MissionVision = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="space-y-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower entrepreneurs across India with the tools, knowledge, and support needed to build successful e-commerce businesses and achieve financial independence.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="space-y-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                <Eye className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the most trusted e-commerce franchise platform globally, creating a network of successful entrepreneurs who transform their communities through digital commerce.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MissionVision
