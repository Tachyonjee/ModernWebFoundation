import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendar, FaCheckCircle, FaPhone, FaEnvelope, FaMapMarkerAlt, FaDownload, FaInfoCircle } from 'react-icons/fa';
import logoImage from '@assets/Untitled (13)_1753896383571.png';
import brandLogo from '@assets/ζachyoη (1)_1753896804084.png';

const Admissions = () => {
  const [selectedProgram, setSelectedProgram] = useState('foundation');

  const programs = {
    foundation: {
      title: 'Foundation Program',
      subtitle: 'Classes 8th, 9th & 10th',
      duration: '1-3 Years',
      description: 'Strong conceptual foundation in Mathematics, Science & Mental Ability for Olympiads & early JEE/NEET preparation.',
      eligibility: 'Students completing 7th, 8th, or 9th grade',
      features: [
        'NCERT based curriculum with advanced concepts',
        'Olympiad preparation (IMO, NSO, NTSE)',
        'Interactive learning with smart classrooms',
        'Regular assessments and progress tracking',
        'Personality development sessions'
      ],
      admissionProcess: [
        'Application form submission',
        'Entrance test (Mathematics, Science, Mental Ability)',
        'Personal interview',
        'Document verification',
        'Fee payment and admission confirmation'
      ]
    },
    enthuse: {
      title: 'Enthuse Program',
      subtitle: 'Class 11th',
      duration: '1 Year',
      description: 'Comprehensive JEE Main & Advanced + NEET preparation with board exam excellence for Class 11th students.',
      eligibility: 'Students who have passed 10th grade with minimum 85% marks',
      features: [
        'Integrated JEE/NEET and Board preparation',
        'Expert faculty from premier institutes',
        'Regular mock tests and assessments',
        'Doubt clearing sessions',
        'Study material and online resources'
      ],
      admissionProcess: [
        'Online/offline application submission',
        'Entrance examination (PCM for JEE, PCB for NEET)',
        '10th grade marks evaluation',
        'Counseling and course selection',
        'Admission formalities completion'
      ]
    },
    aspire: {
      title: 'Aspire Program',
      subtitle: 'Class 12th',
      duration: '1 Year',
      description: 'Intensive JEE Main & Advanced + NEET preparation with final board exam preparation for Class 12th students.',
      eligibility: 'Students who have passed 11th grade or are in 12th grade',
      features: [
        'Intensive exam-focused preparation',
        'Advanced problem-solving techniques',
        'Regular full-length mock tests',
        'Performance analysis and improvement plans',
        'Final revision and exam strategies'
      ],
      admissionProcess: [
        'Application with 11th grade marks',
        'Aptitude test and subject proficiency test',
        'Academic counseling session',
        'Program and batch selection',
        'Enrollment and fee payment'
      ]
    },
    rankBooster: {
      title: 'Rank Booster Program',
      subtitle: 'Droppers/Repeaters',
      duration: '1 Year',
      description: 'Focused crash course for droppers targeting top ranks in JEE Main & Advanced + NEET examinations.',
      eligibility: 'Students who have completed 12th grade and want to improve their rank',
      features: [
        'Intensive full-day coaching',
        'Comprehensive syllabus coverage',
        'Weekly full-length tests',
        'Individual mentoring and guidance',
        'Success stories and motivation sessions'
      ],
      admissionProcess: [
        'Application with 12th grade marks',
        'Previous attempt score analysis',
        'Counseling and goal setting',
        'Customized study plan creation',
        'Immediate enrollment'
      ]
    }
  };

  const currentProgram = programs[selectedProgram];

  const admissionSchedule = [
    {
      phase: 'Early Bird Registration',
      dates: 'November 2024 - January 2025',
      benefits: '15% discount on fees, Priority hostel allocation'
    },
    {
      phase: 'Regular Admission',
      dates: 'February 2025 - April 2025',
      benefits: '10% discount on fees'
    },
    {
      phase: 'Final Phase',
      dates: 'May 2025 - June 2025',
      benefits: 'Subject to seat availability'
    }
  ];

  const documents = [
    '10th Grade Mark Sheet and Certificate',
    '11th Grade Mark Sheet (for 12th grade admissions)',
    '12th Grade Mark Sheet (for dropper programs)',
    'Transfer Certificate from previous school',
    'Character Certificate',
    'Caste Certificate (if applicable)',
    'Income Certificate (for scholarship)',
    'Passport size photographs (6 copies)',
    'Aadhar Card copy',
    'Medical Certificate'
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center items-center space-x-4 mb-6"
          >
            <img 
              src={logoImage} 
              alt="Tachyon Academy Logo" 
              className="w-16 h-16 object-contain"
            />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold" style={{ fontFamily: 'Arial, sans-serif' }}>
                <span style={{ color: '#DC2626' }}>ζ</span>
                <span style={{ color: '#374151' }}>achyo</span>
                <span style={{ color: '#DC2626' }}>η</span>
              </span>
              <span className="text-sm text-gray-600 font-medium">Built for JEE/NEET</span>
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Admissions 2025-26
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          >
            Join Tachyon Academy and experience Hyderabad's teaching excellence in Baramati. 
            Limited seats available - Apply now!
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
              Apply Online
            </button>
            <button className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center gap-2">
              <FaDownload className="w-5 h-5" />
              Download Brochure
            </button>
          </motion.div>
        </div>
      </section>

      {/* Admission Schedule */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Admission Schedule 2025-26
            </h2>
            <p className="text-xl text-gray-600">
              Plan your admission timeline and take advantage of early bird offers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {admissionSchedule.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
              >
                <div className="text-center">
                  <FaCalendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.phase}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{phase.dates}</p>
                  <p className="text-gray-600">{phase.benefits}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Program
            </h2>
            <p className="text-xl text-gray-600">
              Select the program that best fits your academic goals and timeline
            </p>
          </div>

          {/* Program Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(programs).map(([key, program]) => (
              <button
                key={key}
                onClick={() => setSelectedProgram(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  selectedProgram === key
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {program.title}
              </button>
            ))}
          </div>

          {/* Program Details */}
          <motion.div
            key={selectedProgram}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-50 rounded-3xl p-8 md:p-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {currentProgram.title}
                </h3>
                <p className="text-blue-600 font-semibold text-xl mb-4">
                  {currentProgram.subtitle}
                </p>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {currentProgram.description}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Duration:</h4>
                    <p className="text-gray-600">{currentProgram.duration}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Eligibility:</h4>
                    <p className="text-gray-600">{currentProgram.eligibility}</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-6">Program Features</h4>
                <ul className="space-y-3 mb-8">
                  {currentProgram.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="text-xl font-bold text-gray-900 mb-6">Admission Process</h4>
                <ol className="space-y-3">
                  {currentProgram.admissionProcess.map((step, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-gray-600">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Documents Required
            </h2>
            <p className="text-xl text-gray-600">
              Keep these documents ready for a smooth admission process
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {documents.map((document, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <FaInfoCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">{document}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-2xl">
              <h4 className="font-semibold text-blue-900 mb-2">Important Notes:</h4>
              <ul className="text-blue-800 space-y-1 text-sm">
                <li>• All documents should be original or attested copies</li>
                <li>• Incomplete applications will not be processed</li>
                <li>• Document verification is mandatory before final admission</li>
                <li>• Keep multiple copies of each document for future reference</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Admission Guidance
            </h2>
            <p className="text-xl text-gray-600">
              Our admission counselors are here to help you choose the right program
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-2xl p-8 text-center"
            >
              <FaPhone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak directly with our counselors</p>
              <a href="tel:+919876543210" className="text-blue-600 hover:text-blue-700 font-semibold">
                +91 98765 43210
              </a>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-2xl p-8 text-center"
            >
              <FaEnvelope className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Get detailed information via email</p>
              <a href="mailto:admissions@tachyonbaramati.com" className="text-blue-600 hover:text-blue-700 font-semibold">
                admissions@tachyonbaramati.com
              </a>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-2xl p-8 text-center"
            >
              <FaMapMarkerAlt className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-4">Schedule a campus visit</p>
              <p className="text-gray-700 font-medium">
                Near Vidya Vikas Circle<br />
                Baramati, Maharashtra 413102
              </p>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
              Schedule Campus Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;