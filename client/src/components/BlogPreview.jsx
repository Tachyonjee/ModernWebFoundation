import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaCalendar, FaUser, FaArrowRight, FaClock } from 'react-icons/fa';

const BlogPreview = () => {
  const navigate = useNavigate();
  
  const blogPosts = [
    {
      id: 1,
      title: 'Understanding JEE Exam Pattern & Strategy',
      excerpt: 'Complete guide to JEE Main and Advanced exam patterns, marking scheme, and effective preparation strategies for success.',
      author: 'Tachyon Faculty',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'JEE Preparation',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400'
    },
    {
      id: 2,
      title: 'NEET Exam Guide: Everything You Need to Know',
      excerpt: 'Comprehensive overview of NEET exam structure, syllabus, important topics, and preparation timeline for medical aspirants.',
      author: 'Tachyon Faculty',
      date: '2024-01-12',
      readTime: '10 min read',
      category: 'NEET Preparation',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400'
    },
    {
      id: 3,
      title: 'Do\'s and Don\'ts During JEE/NEET Preparation',
      excerpt: 'Essential tips and common mistakes to avoid during your JEE and NEET preparation journey for optimal results.',
      author: 'Tachyon Faculty',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Study Tips',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
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
            Latest from Our Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert tips, strategies, and insights from our faculty to help you excel in JEE & NEET preparation.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-gray-100 cursor-pointer"
              onClick={() => navigate(`/blog/${post.id}`)}
            >
              {/* Post Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                  <div className="flex items-center space-x-1">
                    <FaCalendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaClock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2">
                    <FaUser className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{post.author}</span>
                  </div>
                  
                  <motion.button
                    whileHover={{ x: 4 }}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-1 transition-colors duration-200"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/blog/${post.id}`);
                    }}
                  >
                    <span>Read More</span>
                    <FaArrowRight className="w-3 h-3" />
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Posts Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center gap-2 mx-auto"
            onClick={() => navigate('/blog')}
          >
            View All Articles
            <FaArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPreview;