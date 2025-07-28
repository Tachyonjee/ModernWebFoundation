import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // 👈 Import scroll handler

import Home from './pages/Home';
import Login from './pages/Login';

import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail'; // Course detail + join form

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* 👈 Automatically scroll to top on route change */}
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />

        {/* Main content with page transition animation */}
        <motion.main
          className="flex-grow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          aria-live="polite"
          role="main"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course/:courseId" element={<CourseDetail />} />
            {/* Fallback route */}
            <Route
              path="*"
              element={
                <div className="p-10 text-center text-gray-700">
                  <h2 className="text-3xl font-bold mb-4">404 - Page Not Found</h2>
                  <p>The page you’re looking for doesn’t exist.</p>
                </div>
              }
            />
          </Routes>
        </motion.main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
