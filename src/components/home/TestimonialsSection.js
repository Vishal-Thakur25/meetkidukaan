"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Mumbai, Maharashtra",
      business: "Electronics & Gadgets",
      revenue: "₹4.2L/month",
      image: "https://customer-assets.emergentagent.com/testimonial-1.jpg",
      rating: 5,
      quote:
        "MEET KI DUKAAN transformed my life completely. From a struggling small business owner to earning ₹4.2L monthly, the journey has been incredible. Their training and support system is unmatched.",
      results: "300% revenue increase in 8 months",
    },
    {
      name: "Priya Sharma",
      location: "Delhi, NCR",
      business: "Fashion & Lifestyle",
      revenue: "₹3.8L/month",
      image: "https://customer-assets.emergentagent.com/testimonial-2.jpg",
      rating: 5,
      quote:
        "As a working mother, I needed a business that could fit my schedule. MEET KI DUKAAN's flexible model allowed me to build a successful e-commerce business while managing my family.",
      results: "Achieved work-life balance with 6-figure income",
    },
    {
      name: "Amit Patel",
      location: "Ahmedabad, Gujarat",
      business: "Home & Kitchen",
      revenue: "₹5.1L/month",
      image: "https://customer-assets.emergentagent.com/testimonial-3.jpg",
      rating: 5,
      quote:
        "The ROI was faster than promised. Within 6 months, I recovered my investment and now I'm earning more than my previous corporate job. Best decision of my life!",
      results: "ROI achieved in 6 months, left corporate job",
    },
    {
      name: "Sneha Reddy",
      location: "Bangalore, Karnataka",
      business: "Health & Wellness",
      revenue: "₹2.9L/month",
      image: "https://customer-assets.emergentagent.com/testimonial-4.jpg",
      rating: 5,
      quote:
        "The comprehensive training program gave me confidence to start my e-commerce journey. Even without prior experience, I was able to build a profitable business quickly.",
      results: "From zero experience to ₹2.9L monthly revenue",
    },
    {
      name: "Vikram Singh",
      location: "Jaipur, Rajasthan",
      business: "Sports & Fitness",
      revenue: "₹3.5L/month",
      image: "https://customer-assets.emergentagent.com/testimonial-5.jpg",
      rating: 5,
      quote:
        "The 24/7 support team is amazing. Whenever I faced any challenge, they were there to help. This level of support is what makes MEET KI DUKAAN different from others.",
      results: "Consistent growth with excellent support",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

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
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Our <span className="text-gradient">Franchisees Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real stories from real entrepreneurs who transformed their lives
            with MEET KI DUKAAN franchise.
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                {/* Quote Icon */}
                <Quote className="w-12 h-12 text-primary-500 opacity-50" />

                {/* Testimonial Text */}
                <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
                  "{testimonials[currentSlide].quote}"
                </blockquote>

                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Author Info */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={testimonials[currentSlide].image}
                        alt={testimonials[currentSlide].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">
                        {testimonials[currentSlide].name}
                      </h4>
                      <p className="text-gray-600">
                        {testimonials[currentSlide].location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content - Stats */}
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-primary-50 to-orange-50 rounded-xl p-6 text-center">
                    <div className="text-2xl font-bold text-primary-600 mb-2">
                      {testimonials[currentSlide].revenue}
                    </div>
                    <div className="text-sm text-gray-600">Monthly Revenue</div>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 text-center">
                    <div className="text-lg font-bold text-green-600 mb-2">
                      {testimonials[currentSlide].business}
                    </div>
                    <div className="text-sm text-gray-600">
                      Business Category
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 text-center">
                  <div className="text-lg font-semibold text-gray-900 mb-2">
                    Key Achievement
                  </div>
                  <div className="text-gray-700">
                    {testimonials[currentSlide].results}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-primary-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Overall Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
            <div className="text-gray-600">Happy Franchisees</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">₹100Cr+</div>
            <div className="text-gray-600">Revenue Generated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
