"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Send,
  User,
  Mail,
  Phone,
  MapPin,
  DollarSign,
  Briefcase,
  MessageSquare,
} from "lucide-react";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    budget: "",
    experience: "",
    whyJoin: "",
    businessGoals: "",
    timeCommitment: "",
    currentOccupation: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Application submitted:", formData);
    // Add your form submission logic here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Franchise Application Form
              </h2>
              <p className="text-gray-600">
                Please fill out all fields accurately. This information helps us
                understand your goals and match you with the right franchise
                opportunity.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
                  Personal Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Current Occupation
                    </label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="currentOccupation"
                        value={formData.currentOccupation}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Your current job/business"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      City *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter your city"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      State *
                    </label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select your state</option>
                      <option value="maharashtra">Maharashtra</option>
                      <option value="delhi">Delhi</option>
                      <option value="gujarat">Gujarat</option>
                      <option value="karnataka">Karnataka</option>
                      <option value="tamil-nadu">Tamil Nadu</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Business Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
                  Business Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Investment Budget *
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select your budget range</option>
                        <option value="2-3-lakhs">₹2-3 Lakhs</option>
                        <option value="3-5-lakhs">₹3-5 Lakhs</option>
                        <option value="5-8-lakhs">₹5-8 Lakhs</option>
                        <option value="8-10-lakhs">₹8-10 Lakhs</option>
                        <option value="above-10-lakhs">Above ₹10 Lakhs</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Time Commitment
                    </label>
                    <select
                      name="timeCommitment"
                      value={formData.timeCommitment}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select time commitment</option>
                      <option value="part-time">
                        Part-time (2-4 hours/day)
                      </option>
                      <option value="full-time">
                        Full-time (6-8 hours/day)
                      </option>
                      <option value="flexible">Flexible schedule</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Previous Business Experience
                  </label>
                  <textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                    placeholder="Describe any previous business or e-commerce experience..."
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Why do you want to join MEET KI DUKAAN? *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <textarea
                      name="whyJoin"
                      value={formData.whyJoin}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                      placeholder="Tell us your motivation and goals..."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Business Goals
                  </label>
                  <textarea
                    name="businessGoals"
                    value={formData.businessGoals}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                    placeholder="What are your short-term and long-term business goals?"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center space-y-4">
                <button
                  type="submit"
                  className="btn-primary flex items-center justify-center space-x-2 text-lg px-12 py-4 mx-auto"
                >
                  <Send className="w-5 h-5" />
                  <span>Submit Application</span>
                </button>

                <div className="text-sm text-gray-600">
                  🔒 Your information is secure and confidential. We'll review
                  your application within 24-48 hours.
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
