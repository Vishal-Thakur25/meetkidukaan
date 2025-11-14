'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, Star, ArrowRight, Zap } from 'lucide-react'

const PricingPreview = () => {
  const plans = [
    {
      name: 'Starter',
      price: '₹2,99,000',
      originalPrice: '₹3,50,000',
      description: 'Perfect for first-time entrepreneurs',
      features: [
        'Complete e-commerce setup',
        '50+ premium products',
        'Basic training program',
        'Email support',
        'Marketing materials',
        'Territory rights'
      ],
      cta: 'Get Started',
      popular: false,
      color: 'border-gray-200'
    },
    {
      name: 'Professional',
      price: '₹4,99,000',
      originalPrice: '₹5,99,000',
      description: 'Most popular choice for serious entrepreneurs',
      features: [
        'Everything in Starter',
        '100+ premium products',
        'Advanced training program',
        'Phone & email support',
        'Advanced marketing tools',
        'Dedicated account manager',
        'Performance analytics',
        'Priority support'
      ],
      cta: 'Most Popular',
      popular: true,
      color: 'border-primary-500'
    },
    {
      name: 'Enterprise',
      price: '₹7,99,000',
      originalPrice: '₹9,99,000',
      description: 'For ambitious entrepreneurs seeking maximum growth',
      features: [
        'Everything in Professional',
        '200+ premium products',
        'VIP training program',
        '24/7 priority support',
        'Custom marketing campaigns',
        'Multiple territory rights',
        'Advanced analytics dashboard',
        'Personal business coach',
        'Exclusive product launches'
      ],
      cta: 'Go Enterprise',
      popular: false,
      color: 'border-purple-500'
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
          <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
            Investment Plans
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Choose Your{' '}
            <span className="text-gradient">Success Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Flexible investment options designed to match your budget and business goals. All plans include our proven system and ongoing support.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl border-2 ${plan.color} p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'scale-105 lg:scale-110' : ''
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

              <div className="space-y-6">
                {/* Plan Header */}
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                {/* Pricing */}
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-3xl md:text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-lg text-gray-500 line-through">{plan.originalPrice}</span>
                  </div>
                  <div className="text-sm text-green-600 font-medium">
                    Save ₹{parseInt(plan.originalPrice.replace(/[₹,]/g, '')) - parseInt(plan.price.replace(/[₹,]/g, ''))}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-primary-500 text-white hover:bg-primary-600 shadow-lg hover:shadow-xl'
                      : 'border-2 border-gray-300 text-gray-700 hover:border-primary-500 hover:text-primary-600'
                  }`}
                >
                  {plan.cta}
                </button>
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
          className="bg-gradient-to-r from-primary-50 to-orange-50 rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Zap className="w-6 h-6 text-primary-600" />
                  <h3 className="text-2xl font-bold text-gray-900">What's Included in Every Plan</h3>
                </div>
                <p className="text-lg text-gray-600">
                  Every franchise plan comes with our comprehensive support system designed for your success.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Complete business setup',
                  'Comprehensive training',
                  'Marketing materials',
                  'Ongoing support',
                  'Territory protection',
                  'Performance tracking'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-center space-y-4">
                  <h4 className="text-xl font-bold text-gray-900">Ready to Get Started?</h4>
                  <p className="text-gray-600">
                    Book a free consultation to discuss which plan is right for your business goals.
                  </p>
                  <div className="space-y-3">
                    <Link href="/pricing" className="btn-primary w-full flex items-center justify-center space-x-2">
                      <span>View Detailed Pricing</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link href="/contact" className="btn-secondary w-full">
                      Book Free Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PricingPreview
