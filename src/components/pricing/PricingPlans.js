'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, Star, ArrowRight } from 'lucide-react'

const PricingPlans = () => {
  const plans = [
    {
      name: 'Starter',
      price: '₹2,99,000',
      originalPrice: '₹3,50,000',
      description: 'Perfect for first-time entrepreneurs',
      features: [
        'Complete e-commerce setup',
        '50+ premium products',
        'Basic training program (15 days)',
        'Email support',
        'Marketing materials',
        'Territory rights',
        'Payment gateway setup',
        'Basic analytics dashboard'
      ],
      cta: 'Get Started',
      popular: false,
      color: 'border-gray-200',
      savings: '₹51,000'
    },
    {
      name: 'Professional',
      price: '₹4,99,000',
      originalPrice: '₹5,99,000',
      description: 'Most popular choice for serious entrepreneurs',
      features: [
        'Everything in Starter',
        '100+ premium products',
        'Advanced training program (30 days)',
        'Phone & email support',
        'Advanced marketing tools',
        'Dedicated account manager',
        'Performance analytics',
        'Priority support',
        'Social media marketing kit',
        'SEO optimization tools'
      ],
      cta: 'Most Popular',
      popular: true,
      color: 'border-primary-500',
      savings: '₹1,00,000'
    },
    {
      name: 'Enterprise',
      price: '₹7,99,000',
      originalPrice: '₹9,99,000',
      description: 'For ambitious entrepreneurs seeking maximum growth',
      features: [
        'Everything in Professional',
        '200+ premium products',
        'VIP training program (45 days)',
        '24/7 priority support',
        'Custom marketing campaigns',
        'Multiple territory rights',
        'Advanced analytics dashboard',
        'Personal business coach',
        'Exclusive product launches',
        'White-label branding options',
        'API integrations',
        'Custom mobile app'
      ],
      cta: 'Go Enterprise',
      popular: false,
      color: 'border-purple-500',
      savings: '₹2,00,000'
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-balance">
            Choose Your{' '}
            <span className="text-gradient">Investment Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            All plans include our proven business model, comprehensive training, and ongoing support. Choose based on your investment capacity and growth ambitions.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl border-2 ${plan.color} p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col ${
                plan.popular ? 'lg:scale-105 lg:shadow-2xl' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="space-y-6 flex-1 flex flex-col">
                {/* Plan Header */}
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>

                {/* Pricing */}
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-3xl md:text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-lg text-gray-500 line-through">{plan.originalPrice}</span>
                  </div>
                  <div className="text-sm text-green-600 font-medium">
                    Save {plan.savings}
                  </div>
                  <div className="text-sm text-gray-600">One-time investment</div>
                </div>

                {/* Features */}
                <div className="space-y-3 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <Link
                    href="/contact"
                    className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                      plan.popular
                        ? 'bg-primary-500 text-white hover:bg-primary-600 shadow-lg hover:shadow-xl'
                        : 'border-2 border-gray-300 text-gray-700 hover:border-primary-500 hover:text-primary-600'
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-orange-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-balance">
              🎯 All Plans Include Our Success Guarantee
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-lg font-semibold text-primary-600">ROI Guarantee</div>
                <div className="text-gray-600 text-sm">Break even within 6-12 months or we'll work with you until you do</div>
              </div>
              <div className="space-y-2">
                <div className="text-lg font-semibold text-green-600">95% Success Rate</div>
                <div className="text-gray-600 text-sm">Join hundreds of successful franchisees across India</div>
              </div>
              <div className="space-y-2">
                <div className="text-lg font-semibold text-blue-600">24/7 Support</div>
                <div className="text-gray-600 text-sm">Dedicated support team available round the clock</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PricingPlans
