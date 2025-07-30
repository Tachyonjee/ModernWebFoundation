import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaComment, FaGraduationCap, FaPaperPlane, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import { submitEnquiry, COURSE_SEGMENTS } from '../lib/api';

const ContactForm = ({ 
  segment = 'General Enquiry', 
  title = 'Get in Touch',
  subtitle = 'Send us your enquiry and we\'ll get back to you within 24 hours',
  className = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    segment: segment
  });
  
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear errors when user starts typing
    if (errors.length > 0) {
      setErrors([]);
    }
  };

  const validateForm = () => {
    const newErrors = [];
    
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.push('Name must be at least 2 characters long');
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.push('Please provide a valid email address');
    }
    
    const phoneRegex = /^(\+91|91)?[6-9]\d{9}$/;
    const cleanPhone = formData.phone.replace(/[\s\-\(\)]/g, '');
    if (!cleanPhone || !phoneRegex.test(cleanPhone)) {
      newErrors.push('Please provide a valid Indian phone number');
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setStatus('submitting');
    setErrors([]);
    
    try {
      const result = await submitEnquiry(formData);
      
      if (result.success) {
        setStatus('success');
        setMessage(`Thank you! Your enquiry has been submitted successfully. Reference ID: #${result.enquiry_id}`);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          segment: segment
        });
        
        // Reset to idle after 5 seconds
        setTimeout(() => {
          setStatus('idle');
          setMessage('');
        }, 5000);
        
      } else {
        setStatus('error');
        setErrors(result.errors || [result.error || 'An error occurred']);
      }
    } catch (error) {
      setStatus('error');
      setErrors(['Network error. Please check your connection and try again.']);
    }
  };

  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden ${className}`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-red-600 text-white p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="opacity-90">{subtitle}</p>
      </div>
      
      {/* Form */}
      <div className="p-6">
        {/* Success Message */}
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
          >
            <div className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-3" />
              <span className="text-green-700 font-medium">{message}</span>
            </div>
          </motion.div>
        )}
        
        {/* Error Messages */}
        {errors.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"
          >
            <div className="flex items-start">
              <FaExclamationTriangle className="text-red-500 mr-3 mt-0.5" />
              <div className="text-red-700">
                {errors.length === 1 ? (
                  <span>{errors[0]}</span>
                ) : (
                  <ul className="list-disc list-inside space-y-1">
                    {errors.map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </motion.div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              <FaUser className="inline mr-2" />
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="Enter your full name"
              disabled={status === 'submitting'}
            />
          </div>
          
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              <FaEnvelope className="inline mr-2" />
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="your.email@example.com"
              disabled={status === 'submitting'}
            />
          </div>
          
          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              <FaPhone className="inline mr-2" />
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="+91 98765 43210"
              disabled={status === 'submitting'}
            />
          </div>
          
          {/* Course Interest */}
          <div>
            <label htmlFor="segment" className="block text-sm font-medium text-gray-700 mb-2">
              <FaGraduationCap className="inline mr-2" />
              Course Interest
            </label>
            <select
              id="segment"
              name="segment"
              value={formData.segment}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              disabled={status === 'submitting'}
            >
              {COURSE_SEGMENTS.map((seg) => (
                <option key={seg} value={seg}>
                  {seg}
                </option>
              ))}
            </select>
          </div>
          
          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              <FaComment className="inline mr-2" />
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
              placeholder="Tell us about your requirements, questions, or how we can help you..."
              disabled={status === 'submitting'}
            />
          </div>
          
          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={status === 'submitting'}
            whileHover={{ scale: status === 'submitting' ? 1 : 1.02 }}
            whileTap={{ scale: status === 'submitting' ? 1 : 0.98 }}
            className="w-full bg-gradient-to-r from-blue-600 to-red-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-red-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {status === 'submitting' ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <FaPaperPlane />
                <span>Submit Enquiry</span>
              </>
            )}
          </motion.button>
        </form>
        
        {/* Help Text */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>Need immediate assistance? Call us at <strong>+91 98765 43210</strong></p>
          <p className="mt-1">Or email: <strong>info@tachyonbaramati.com</strong></p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;