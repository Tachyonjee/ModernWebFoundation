import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaUsers, FaStar, FaPlay, FaCode, FaPalette, FaChartBar, FaMobile } from 'react-icons/fa';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'Complete React Development',
      instructor: 'Sarah Johnson',
      duration: '12 weeks',
      students: 2834,
      rating: 4.9,
      price: 89,
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400',
      category: 'Web Development',
      icon: FaCode,
      level: 'Beginner to Advanced',
      description: 'Master React from basics to advanced concepts including hooks, context, and state management.'
    },
    {
      id: 2,
      title: 'UI/UX Design Masterclass',
      instructor: 'Alex Chen',
      duration: '8 weeks',
      students: 1923,
      rating: 4.8,
      price: 79,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400',
      category: 'Design',
      icon: FaPalette,
      level: 'Intermediate',
      description: 'Learn design principles, user research, wireframing, and prototyping with industry tools.'
    },
    {
      id: 3,
      title: 'Data Science with Python',
      instructor: 'Dr. Emily Rodriguez',
      duration: '16 weeks',
      students: 3156,
      rating: 4.9,
      price: 129,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
      category: 'Data Science',
      icon: FaChartBar,
      level: 'Intermediate',
      description: 'Comprehensive data science course covering statistics, machine learning, and data visualization.'
    },
    {
      id: 4,
      title: 'Mobile App Development',
      instructor: 'Michael Park',
      duration: '10 weeks',
      students: 1567,
      rating: 4.7,
      price: 99,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400',
      category: 'Mobile Development',
      icon: FaMobile,
      level: 'Beginner',
      description: 'Build native mobile apps for iOS and Android using React Native and modern development practices.'
    }
  ];

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
            Popular Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our selection of expert-led courses designed to help you master new skills and advance your career.
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
                    <div className="text-2xl font-bold text-blue-600">${course.price}</div>
                    <div className="text-sm text-gray-500">one-time</div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Enroll Now
                </motion.button>
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