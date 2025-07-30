import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Our Location',
      details: [
        'Near Vidya Vikas Circle',
        'Baramati, Maharashtra 413102',
        'Easy access from main road'
      ],
      color: 'text-blue-600'
    },
    {
      icon: FaPhone,
      title: 'Phone Numbers',
      details: [
        '+91 98765 43210',
        'Available 9 AM - 8 PM',
        'Monday to Saturday'
      ],
      color: 'text-green-600'
    },
    {
      icon: FaEnvelope,
      title: 'Email Address',
      details: [
        'info@tachyonbaramati.com',
        'admissions@tachyonbaramati.com',
        'Quick response guaranteed'
      ],
      color: 'text-purple-600'
    },
    {
      icon: FaClock,
      title: 'Office Hours',
      details: [
        'Monday - Saturday: 9 AM - 8 PM',
        'Sunday: 10 AM - 6 PM',
        'Closed on public holidays'
      ],
      color: 'text-orange-600'
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Contact <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">Tachyon Academy</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Get in touch with our expert counselors to discuss your JEE/NEET preparation journey. 
            We're here to help you achieve your dreams.
          </motion.p>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-4 ${info.color}`}>
                  <info.icon className="text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form and Map Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ContactForm 
                title="Send us a Message"
                subtitle="Fill out the form below and we'll get back to you within 24 hours"
              />
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-64 bg-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <FaMapMarkerAlt className="text-4xl text-gray-400 mb-4 mx-auto" />
                    <p className="text-gray-600">Interactive Map</p>
                    <p className="text-sm text-gray-500">Near Vidya Vikas Circle, Baramati</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Visit Our Campus</h3>
                  <p className="text-gray-600 mb-4">
                    Experience our state-of-the-art facilities and meet our expert faculty. 
                    Campus tours available on weekdays.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-600 to-red-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-red-700 transition-all"
                  >
                    Get Directions
                  </motion.button>
                </div>
              </div>

              {/* Quick Contact Options */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <motion.a
                    href="tel:+919876543210"
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                  >
                    <FaPhone className="text-green-600 mr-4" />
                    <div>
                      <p className="font-medium text-gray-900">Call Now</p>
                      <p className="text-sm text-gray-600">+91 98765 43210</p>
                    </div>
                  </motion.a>
                  
                  <motion.a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                  >
                    <FaWhatsapp className="text-green-600 mr-4" />
                    <div>
                      <p className="font-medium text-gray-900">WhatsApp</p>
                      <p className="text-sm text-gray-600">Quick response guaranteed</p>
                    </div>
                  </motion.a>
                  
                  <motion.a
                    href="mailto:info@tachyonbaramati.com"
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <FaEnvelope className="text-blue-600 mr-4" />
                    <div>
                      <p className="font-medium text-gray-900">Email Us</p>
                      <p className="text-sm text-gray-600">info@tachyonbaramati.com</p>
                    </div>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common queries</p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "What are your admission requirements?",
                answer: "We accept students based on their academic performance and entrance test scores. Contact us for detailed eligibility criteria for each program."
              },
              {
                question: "Do you provide study materials?",
                answer: "Yes, we provide comprehensive study materials, practice tests, and online resources as part of our course packages."
              },
              {
                question: "What is your fee structure?",
                answer: "Our fees vary by program and duration. We offer flexible payment options and scholarships for deserving students. Contact us for detailed fee information."
              },
              {
                question: "Do you offer online classes?",
                answer: "Yes, we offer both offline and online classes with interactive live sessions, recorded lectures, and digital study materials."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;