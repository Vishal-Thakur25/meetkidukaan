'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Send, User, Mail, Phone, MapPin, MessageSquare } from 'lucide-react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    interest: '',
    message: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    // Add your form submission logic here
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 h-fit"
    >
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-gray-900">Book Your Free Consultation</h2>
          <p className="text-gray-600 text-sm">Fill out the form below and we'll get back to you within 24 hours</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Full Name *</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Email Address *</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                  placeholder="Enter your email"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Phone Number *</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">City *</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                  placeholder="Enter your city"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Franchise Interest Level</label>
            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
            >
              <option value="">Select your interest level</option>
              <option value="just-exploring">Just exploring options</option>
              <option value="seriously-considering">Seriously considering</option>
              <option value="ready-to-invest">Ready to invest</option>
              <option value="need-more-info">Need more information</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Message</label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none text-sm"
                placeholder="Tell us about your business goals and any questions you have..."
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full btn-primary text-lg py-4"
          >
            <Send className="w-5 h-5 mr-2" />
            <span>Send Message</span>
          </button>

          <div className="text-center text-sm text-gray-600">
            🔒 Your information is secure and confidential. We'll respond within 24 hours.
          </div>
        </form>
      </div>
    </motion.div>
  )
}

export default ContactForm
