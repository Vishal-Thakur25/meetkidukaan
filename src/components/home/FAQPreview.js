'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ChevronUp, HelpCircle, ArrowRight } from 'lucide-react'

const FAQPreview = () => {
  const [openFAQ, setOpenFAQ] = useState(0)

  const faqs = [
    {
      question: 'What is the minimum investment required to start?',
      answer: 'The minimum investment starts from ₹2,99,000 for our Starter plan, which includes complete business setup, training, products, and ongoing support. We also offer flexible payment options to make it accessible for serious entrepreneurs.'
    },
    {
      question: 'How long does it take to see profits?',
      answer: 'Most of our franchisees start seeing profits within 3-6 months. With our proven system and dedicated support, 95% of our franchisees achieve positive ROI within 6-12 months of starting their business.'
    },
    {
      question: 'Do I need prior e-commerce experience?',
      answer: 'No prior e-commerce experience is required. Our comprehensive 30-day training program covers everything from basics to advanced strategies. We provide step-by-step guidance and ongoing support to ensure your success.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We provide 24/7 technical and business support, dedicated account managers, marketing materials, performance analytics, regular training updates, and a community of successful franchisees to learn from.'
    },
    {
      question: 'Can I operate this business from home?',
      answer: 'Yes, absolutely! Our e-commerce franchise model is designed to be operated from anywhere. You can manage your entire business from home using our automated systems and online platforms.'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container-max section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Got{' '}
            <span className="text-gradient">Questions?</span>{' '}
            We Have Answers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to the most common questions about our franchise opportunity and business model.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openFAQ === index ? 'auto' : 0,
                    opacity: openFAQ === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Help Card */}
            <div className="bg-gradient-to-br from-primary-50 to-orange-50 rounded-2xl p-8 border border-primary-100">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                  <HelpCircle className="w-8 h-8 text-primary-600" />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Still Have Questions?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our franchise experts are here to help you understand every aspect of the opportunity and guide you through the process.
                  </p>
                </div>

                <div className="space-y-3">
                  <Link href="/contact" className="btn-primary w-full flex items-center justify-center space-x-2">
                    <span>Book Free Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/faq" className="btn-secondary w-full">
                    View All FAQs
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                <div className="text-2xl font-bold text-primary-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Need Immediate Help?</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>📞 Call: +91 98765 43210</div>
                  <div>📧 Email: franchise@ecomseekho.com</div>
                  <div>💬 WhatsApp: +91 98765 43210</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FAQPreview
