import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import BlogPreview from '../components/BlogPreview';
import Courses from '../components/Courses';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <About />
      <Courses />
      <BlogPreview />
      <Testimonials />
      <ContactForm />
    </motion.div>
  );
};

export default Home;