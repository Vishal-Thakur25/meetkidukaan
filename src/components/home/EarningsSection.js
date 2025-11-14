'use client'

import { motion } from 'framer-motion'
import { TrendingUp, DollarSign, Calendar, Target, BarChart3, PieChart } from 'lucide-react'

const EarningsSection = () => {
  const earningsData = [
    {
      period: 'Month 1-3',
      revenue: '₹50K - ₹1L',
      profit: '₹20K - ₹40K',
      description: 'Initial setup and learning phase',
      color: 'from-blue-500 to-blue-600'
    },
    {
      period: 'Month 4-6',
      revenue: '₹1L - ₹2L',
      profit: '₹40K - ₹80K',
      description: 'Business stabilization period',
      color: 'from-green-500 to-green-600'
    },
    {
      period: 'Month 7-12',
      revenue: '₹2L - ₹4L',
      profit: '₹80K - ₹1.6L',
      description: 'Growth and expansion phase',
      color: 'from-orange-500 to-orange-600'
    },
    {
      period: 'Year 2+',
      revenue: '₹4L - ₹8L',
      profit: '₹1.6L - ₹3.2L',
      description: 'Mature business operations',
      color: 'from-purple-500 to-purple-600'
    }
  ]

  const roiFactors = [
    {
      icon: Target,
      title: 'High-Demand Products',
      description: 'Curated product selection with proven market demand',
      impact: '+25% Revenue'
    },
    {
      icon: BarChart3,
      title: 'Optimized Pricing',
      description: 'Data-driven pricing strategies for maximum profitability',
      impact: '+15% Margins'
    },
    {
      icon: PieChart,
      title: 'Multiple Revenue Streams',
      description: 'Diversified income from various product categories',
      impact: '+30% Stability'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Operations',
      description: 'Systems designed to handle growth without proportional costs',
      impact: '+40% Efficiency'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-max section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
            Earnings & ROI
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Your Path to{' '}
            <span className="text-gradient">Financial Freedom</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how our franchisees build sustainable income streams with proven ROI timelines and transparent earning potential.
          </p>
        </motion.div>

        {/* Earnings Timeline */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center text-gray-900 mb-12"
          >
            Expected Earnings Timeline
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {earningsData.map((data, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  {/* Timeline Indicator */}
                  <div className={`w-full h-2 bg-gradient-to-r ${data.color} rounded-full mb-4`}></div>
                  
                  <div className="space-y-4">
                    <div className="text-center">
                      <h4 className="font-bold text-gray-900 text-lg">{data.period}</h4>
                      <p className="text-sm text-gray-600">{data.description}</p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Revenue:</span>
                        <span className="font-semibold text-gray-900">{data.revenue}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Profit:</span>
                        <span className="font-semibold text-green-600">{data.profit}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Connection Line */}
                {index < earningsData.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* ROI Factors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 mb-16"
        >
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              What Drives Your{' '}
              <span className="text-gradient">High ROI?</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our proven strategies and systems are designed to maximize your return on investment from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {roiFactors.map((factor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <factor.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <h4 className="font-semibold text-gray-900">{factor.title}</h4>
                    <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                      {factor.impact}
                    </span>
                  </div>
                  <p className="text-gray-600">{factor.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ROI Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-hero-gradient rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <div className="space-y-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold">
                ROI Guarantee: Break Even in 6-12 Months
              </h3>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                We're so confident in our system that we guarantee you'll see positive ROI within 6-12 months, or we'll work with you until you do.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-white/80">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">₹2.5L+</div>
                <div className="text-white/80">Avg Monthly Revenue</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">6-12</div>
                <div className="text-white/80">Months to ROI</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default EarningsSection
