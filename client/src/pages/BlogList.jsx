import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaCalendar, FaUser, FaArrowRight, FaClock, FaSearch } from 'react-icons/fa';
import logoImage from '@assets/Untitled (13)_1753896383571.png';
import brandLogo from '@assets/ζachyoη (1)_1753896804084.png';

const BlogList = () => {
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
    },
    {
      id: 4,
      title: 'How to Prepare for JEE in 6 Months',
      excerpt: 'Intensive preparation strategy for JEE aspirants with limited time. Learn how to maximize your preparation in just 6 months.',
      author: 'Tachyon Faculty',
      date: '2024-01-08',
      readTime: '7 min read',
      category: 'JEE Preparation',
      image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?w=400'
    },
    {
      id: 5,
      title: 'Best Study Techniques for NEET Biology',
      excerpt: 'Master NEET Biology with proven study techniques, memory tricks, and practice strategies from our expert faculty.',
      author: 'Tachyon Faculty',
      date: '2024-01-05',
      readTime: '9 min read',
      category: 'NEET Preparation',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400'
    },
    {
      id: 6,
      title: 'Life at Tachyon Baramati Campus',
      excerpt: 'Experience the residential life at Tachyon Academy with modern facilities, expert mentoring, and peer learning environment.',
      author: 'Tachyon Faculty',
      date: '2024-01-02',
      readTime: '5 min read',
      category: 'Campus Life',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400'
    }
  ];

  const categories = ['All', 'JEE Preparation', 'NEET Preparation', 'Study Tips', 'Campus Life'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-6"
          >
            <img 
              src={brandLogo} 
              alt="Tachyon Academy - Built for JEE/NEET" 
              className="h-16 object-contain"
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            JEE & NEET Preparation Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          >
            Expert insights, study strategies, and preparation tips from Tachyon Academy's experienced faculty
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-md mx-auto relative"
          >
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
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

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Preparation?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join Tachyon Academy and get personalized guidance from expert faculty
            </p>
            <button
              onClick={() => navigate('/#contact')}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Contact Us Today
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogList;