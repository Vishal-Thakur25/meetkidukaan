'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar } from 'lucide-react'

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone Support',
      details: '+91 98765 43210',
      description: 'Call us for immediate assistance',
      available: '24/7 Available'
    },
    {
      icon: Mail,
      title: 'Email Support',
      details: 'franchise@ecomseekho.com',
      description: 'Send us your queries anytime',
      available: 'Response within 24 hours'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Chat',
      details: '+91 98765 43210',
      description: 'Quick chat support',
      available: 'Instant responses'
    },
    {
      icon: MapPin,
      title: 'Office Address',
      details: '123 Business Hub, Tech City',
      description: 'Mumbai, Maharashtra 400001',
      available: 'Mon-Sat: 9 AM - 7 PM'
    }
  ]

  const officeHours = [
    { day: 'Monday - Friday', time: '9:00 AM - 7:00 PM' },
    { day: 'Saturday', time: '10:00 AM - 5:00 PM' },
    { day: 'Sunday', time: 'Emergency support only' }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      {/* Contact Methods */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
        
        <div className="space-y-4">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <method.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900">{method.title}</h3>
                  <p className="text-primary-600 font-medium">{method.details}</p>
                  <p className="text-gray-600 text-sm">{method.description}</p>
                  <p className="text-green-600 text-sm font-medium">{method.available}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Office Hours */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-primary-50 to-orange-50 rounded-xl p-6 border border-primary-100"
      >
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Clock className="w-6 h-6 text-primary-600" />
            <h3 className="text-xl font-bold text-gray-900">Office Hours</h3>
          </div>
          
          <div className="space-y-3">
            {officeHours.map((schedule, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-gray-700">{schedule.day}</span>
                <span className="font-medium text-gray-900">{schedule.time}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
      >
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900">Quick Actions</h3>
          
          <div className="space-y-3">
            <button className="w-full btn-primary flex items-center justify-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Schedule Video Call</span>
            </button>
            
            <button className="w-full btn-secondary flex items-center justify-center space-x-2">
              <MessageCircle className="w-4 h-4" />
              <span>Start WhatsApp Chat</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* FAQ Link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center p-6 bg-gray-50 rounded-xl"
      >
        <h4 className="font-semibold text-gray-900 mb-2">Have Questions?</h4>
        <p className="text-gray-600 text-sm mb-4">
          Check out our frequently asked questions for quick answers.
        </p>
        <a href="/faq" className="text-primary-600 hover:text-primary-700 font-medium">
          View FAQ →
        </a>
      </motion.div>
    </motion.div>
  )
}

export default ContactInfo
