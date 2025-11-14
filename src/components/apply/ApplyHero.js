'use client'

import { motion } from 'framer-motion'
import { FileText, Clock, CheckCircle } from 'lucide-react'

const ApplyHero = () => {
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
            Apply for{' '}
            <span className="text-primary-100">Franchise</span>
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
            Take the first step towards building your e-commerce empire. Fill out our comprehensive application form and join 500+ successful entrepreneurs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
            <div className="flex items-center space-x-2">
              <FileText className="w-5 h-5" />
              <span>Simple Application</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>24-48 Hour Response</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>95% Approval Rate</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ApplyHero
