import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaUser } from 'react-icons/fa';
import logoImage from '@assets/Untitled (13)_1753896383571.png';
import brandLogo from '@assets/ζachyoη (1)_1753896804084.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '#about' },
    { name: 'Courses', path: '#courses' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '#contact' }
  ];

  const scrollToSection = (sectionId) => {
    if (sectionId.startsWith('#')) {
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <img 
                src={logoImage} 
                alt="Tachyon Academy Logo" 
                className="w-10 h-10 object-contain"
              />
              <img 
                src={brandLogo} 
                alt="Tachyon Academy - Built for JEE/NEET" 
                className="h-8 object-contain"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ y: -2 }}
                className="relative"
              >
                {link.path.startsWith('#') ? (
                  <button
                    onClick={() => {
                      if (location.pathname !== '/') {
                        navigate('/');
                        setTimeout(() => scrollToSection(link.path), 100);
                      } else {
                        scrollToSection(link.path);
                      }
                    }}
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      location.pathname === link.path
                        ? 'text-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* Login Button */}
          <div className="hidden md:flex items-center">
            <Link to="/login">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center gap-2"
              >
                <FaUser className="w-4 h-4" />
                Login
              </motion.button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.path.startsWith('#') ? (
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        if (location.pathname !== '/') {
                          navigate('/');
                          setTimeout(() => scrollToSection(link.path), 100);
                        } else {
                          scrollToSection(link.path);
                        }
                      }}
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full text-left"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-2 text-base font-medium hover:bg-gray-50 ${
                        location.pathname === link.path
                          ? 'text-blue-600'
                          : 'text-gray-700 hover:text-blue-600'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <div className="block px-3 py-2 text-base font-medium text-blue-600 hover:bg-gray-50 flex items-center gap-2">
                  <FaUser className="w-4 h-4" />
                  Login
                </div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;