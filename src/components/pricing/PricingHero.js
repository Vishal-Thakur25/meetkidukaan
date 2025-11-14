'use client'

import { motion } from 'framer-motion'
import { DollarSign, TrendingUp, Shield } from 'lucide-react'

const PricingHero = () => {
  return (
    <section className="pt-24 pb-12 bg-gradient-to-br from-primary-600 to-orange-600 text-white">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            Transparent{' '}
            <span className="text-primary-100">Investment Plans</span>
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect franchise plan that matches your budget and business goals. All plans include our proven system, training, and ongoing support.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <span>ROI Guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5" />
              <span>95% Success Rate</span>
            </div>
            <div className="flex items-center space-x-2">
              <DollarSign className="w-5 h-5" />
              <span>Flexible Payment Options</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PricingHero
