'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MessageCircle } from 'lucide-react'

const ContactHero = () => {
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
            Let's Start Your{' '}
            <span className="text-primary-100">Success Journey</span>
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your life with a profitable e-commerce business? Our franchise experts are here to guide you every step of the way.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>franchise@ecomseekho.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactHero
