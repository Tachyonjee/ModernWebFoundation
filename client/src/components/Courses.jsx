import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaClock, FaUsers, FaStar, FaPlay, FaCode, FaPalette, FaChartBar, FaMobile } from 'react-icons/fa';

const Courses = () => {
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      title: 'Foundation',
      instructor: 'Expert Faculty Team',
      duration: '1 Year',
      students: 150,
      rating: 4.9,
      price: 'Contact for fees',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400',
      category: 'Classes 8th, 9th & 10th',
      icon: FaCode,
      level: 'Foundation Level',
      description: 'Strong conceptual foundation in Mathematics, Science & Mental Ability for Olympiads & early JEE/NEET preparation.'
    },
    {
      id: 2,
      title: 'Enthuse',
      instructor: 'Specialized Faculty',
      duration: '1 Year',
      students: 200,
      rating: 4.8,
      price: 'Contact for fees',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400',
      category: 'Class 11th',
      icon: FaPalette,
      level: 'Intermediate',
      description: 'Comprehensive  JEE Main & Advanced + NEET preparation with board exam excellence for Class 11th for both residential & day scholar students.'
    },
    {
      id: 3,
      title: 'Aspire',
      instructor: 'Senior Faculty',
      duration: '1 Year',
      students: 180,
      rating: 4.9,
      price: 'Contact for fees',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400',
      category: 'Class 12th',
      icon: FaChartBar,
      level: 'Advanced',
      description: 'Intensive JEE Main & Advanced + NEET preparation with final board exam preparation for Class 12th for both residential and day scholar students .'
    },
    {
      id: 4,
      title: 'Rank Booster',
      instructor: 'Top Mentors',
      duration: '1 Year',
      students: 120,
      rating: 4.7,
      price: 'Contact for fees',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      category: 'Droppers/Repeaters',
      icon: FaMobile,
      level: 'Intensive',
      description: 'Focused crash course for droppers targeting top ranks in JEE Main & Advanced + NEET examinations.'
    }
  ];

  const handleExplore = (id) => {
    navigate(`/course/${id}`);
  };

  const handleJoin = (id) => {
    // For now, navigate to course page with join section anchor (could be modal instead)
    navigate(`/course/${id}#join`);
  };

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive JEE & NEET preparation programs designed by Hyderabad's top educators, now available in Baramati.
          </p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              {/* Course Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                    <course.icon className="w-4 h-4" />
                    {course.category}
                  </span>
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                    <FaPlay className="w-6 h-6 text-blue-600 ml-1" />
                  </div>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-blue-600 font-medium">{course.level}</span>
                  <div className="flex items-center space-x-1">
                    <FaStar className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm font-medium text-gray-700">{course.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {course.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>

                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                  <div className="flex items-center space-x-1">
                    <FaClock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaUsers className="w-4 h-4" />
                    <span>{course.students.toLocaleString()} students</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-500">Instructor</div>
                    <div className="font-medium text-gray-900">{course.instructor}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">{course.price}</div>
                    <div className="text-sm text-gray-500">one-time</div>
                  </div>
                </div>

                <div className="flex gap-2 mt-6">
                  <motion.button
                    onClick={() => handleExplore(course.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
                  >
                    Explore Course
                  </motion.button>
                  <motion.button
                    onClick={() => handleJoin(course.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
                  >
                    Join Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Courses Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            onClick={() => navigate('/courses')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
          >
            View All Courses
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Courses;
