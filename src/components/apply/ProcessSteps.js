'use client'

import { motion } from 'framer-motion'
import { FileText, Phone, Handshake, Rocket } from 'lucide-react'

const ProcessSteps = () => {
  const steps = [
    {
      icon: FileText,
      title: 'Submit Application',
      description: 'Fill out our comprehensive application form with your details and business goals.',
      duration: '5 minutes'
    },
    {
      icon: Phone,
      title: 'Initial Consultation',
      description: 'Our franchise expert will call you within 24 hours to discuss your application.',
      duration: '24-48 hours'
    },
    {
      icon: Handshake,
      title: 'Final Approval',
      description: 'Complete the documentation and investment process to secure your franchise.',
      duration: '3-5 days'
    },
    {
      icon: Rocket,
      title: 'Launch Your Business',
      description: 'Begin your training program and launch your e-commerce business with our support.',
      duration: '7-14 days'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Simple <span className="text-gradient">Application Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our streamlined process gets you from application to business launch in just 2-3 weeks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative text-center"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-primary-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                
                <div className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full inline-block">
                  {step.duration}
                </div>
              </div>

              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSteps
