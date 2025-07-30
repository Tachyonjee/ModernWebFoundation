import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCalendar, FaUser, FaClock, FaArrowLeft, FaShare, FaBookmark } from 'react-icons/fa';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const blogPosts = {
    1: {
      title: 'Understanding JEE Exam Pattern & Strategy',
      content: `
        <div class="prose max-w-none">
          <h2>JEE Main Exam Pattern</h2>
          <p>The Joint Entrance Examination (JEE) Main is the gateway to premier engineering institutes in India. Understanding the exam pattern is crucial for effective preparation.</p>
          
          <h3>Paper Structure</h3>
          <ul>
            <li><strong>Paper 1 (B.E./B.Tech):</strong> Physics, Chemistry, Mathematics</li>
            <li><strong>Paper 2A (B.Arch):</strong> Mathematics, Aptitude Test, Drawing Test</li>
            <li><strong>Paper 2B (B.Planning):</strong> Mathematics, Aptitude Test, Planning Based Questions</li>
          </ul>

          <h3>Marking Scheme</h3>
          <p>Each correct answer carries +4 marks, while each incorrect answer has -1 mark (negative marking). Questions left unanswered carry 0 marks.</p>

          <h2>JEE Advanced Strategy</h2>
          <p>For JEE Advanced, the top 2,50,000 JEE Main qualifiers are eligible. The exam tests conceptual understanding and application skills.</p>

          <h3>Key Preparation Tips</h3>
          <ol>
            <li><strong>Master the Basics:</strong> Strong foundation in NCERT concepts</li>
            <li><strong>Practice Regularly:</strong> Solve previous year papers and mock tests</li>
            <li><strong>Time Management:</strong> Develop speed and accuracy</li>
            <li><strong>Identify Weak Areas:</strong> Focus on improving weak subjects</li>
            <li><strong>Stay Updated:</strong> Keep track of syllabus and pattern changes</li>
          </ol>

          <h2>Subject-wise Strategy</h2>
          
          <h3>Physics</h3>
          <p>Focus on numerical problems and conceptual clarity. Key topics include Mechanics, Thermodynamics, and Modern Physics.</p>

          <h3>Chemistry</h3>
          <p>Balance theory and numericals. Organic Chemistry requires extensive practice, while Physical Chemistry needs mathematical approach.</p>

          <h3>Mathematics</h3>
          <p>Practice is key. Focus on Coordinate Geometry, Calculus, and Algebra. Develop shortcut techniques for faster calculations.</p>

          <h2>Mock Tests and Analysis</h2>
          <p>Regular mock tests help identify strengths and weaknesses. Analyze every test to understand mistake patterns and improve performance.</p>
        </div>
      `,
      author: 'Tachyon Faculty',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'JEE Preparation',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800'
    },
    2: {
      title: 'NEET Exam Guide: Everything You Need to Know',
      content: `
        <div class="prose max-w-none">
          <h2>NEET Overview</h2>
          <p>The National Eligibility cum Entrance Test (NEET) is the single entrance examination for admission to MBBS, BDS, and other medical courses in India.</p>
          
          <h3>Exam Pattern</h3>
          <ul>
            <li><strong>Duration:</strong> 3 hours 20 minutes</li>
            <li><strong>Questions:</strong> 180 questions (45 each from Physics, Chemistry, Botany, Zoology)</li>
            <li><strong>Marks:</strong> +4 for correct answer, -1 for incorrect answer</li>
            <li><strong>Language:</strong> 13 languages including English and Hindi</li>
          </ul>

          <h2>Subject-wise Preparation Strategy</h2>
          
          <h3>Physics</h3>
          <p>NEET Physics focuses on conceptual understanding. Key topics include:</p>
          <ul>
            <li>Mechanics and Properties of Matter</li>
            <li>Heat and Thermodynamics</li>
            <li>Optics and Modern Physics</li>
            <li>Electricity and Magnetism</li>
          </ul>

          <h3>Chemistry</h3>
          <p>Chemistry carries significant weightage in NEET:</p>
          <ul>
            <li><strong>Organic Chemistry:</strong> 40% weightage - Focus on reactions and mechanisms</li>
            <li><strong>Inorganic Chemistry:</strong> 35% weightage - Memorize important compounds and reactions</li>
            <li><strong>Physical Chemistry:</strong> 25% weightage - Practice numerical problems</li>
          </ul>

          <h3>Biology (Botany + Zoology)</h3>
          <p>Biology is the most scoring subject in NEET:</p>
          <ul>
            <li>NCERT textbooks are primary sources</li>
            <li>Focus on diagrams and processes</li>
            <li>Human physiology and genetics are high-weightage topics</li>
            <li>Plant physiology and reproduction are crucial in Botany</li>
          </ul>

          <h2>Study Schedule</h2>
          <p>A well-planned study schedule is essential for NEET preparation:</p>
          <ol>
            <li><strong>Foundation Phase:</strong> Complete NCERT thoroughly</li>
            <li><strong>Strengthening Phase:</strong> Reference books and advanced problems</li>
            <li><strong>Revision Phase:</strong> Mock tests and previous year papers</li>
            <li><strong>Final Phase:</strong> Quick revision and doubt clearing</li>
          </ol>

          <h2>Important Tips</h2>
          <ul>
            <li>Start early and maintain consistency</li>
            <li>Focus on NCERT textbooks as the primary source</li>
            <li>Take regular mock tests</li>
            <li>Analyze mistakes and work on weak areas</li>
            <li>Maintain a healthy study-life balance</li>
          </ul>
        </div>
      `,
      author: 'Tachyon Faculty',
      date: '2024-01-12',
      readTime: '10 min read',
      category: 'NEET Preparation',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800'
    },
    3: {
      title: "Do's and Don'ts During JEE/NEET Preparation",
      content: `
        <div class="prose max-w-none">
          <h2>Essential Do's for JEE/NEET Success</h2>
          
          <h3>Study Habits</h3>
          <ul>
            <li><strong>Create a Study Schedule:</strong> Plan your daily, weekly, and monthly goals</li>
            <li><strong>Practice Regularly:</strong> Consistency is more important than intensity</li>
            <li><strong>Focus on NCERT:</strong> Master NCERT textbooks before moving to advanced books</li>
            <li><strong>Take Mock Tests:</strong> Regular testing helps identify weak areas</li>
            <li><strong>Maintain Notes:</strong> Create concise notes for quick revision</li>
          </ul>

          <h3>Health and Wellness</h3>
          <ul>
            <li><strong>Get Adequate Sleep:</strong> 7-8 hours of sleep is essential for memory consolidation</li>
            <li><strong>Exercise Regularly:</strong> Physical activity helps maintain mental health</li>
            <li><strong>Eat Healthy:</strong> Nutritious food supports brain function</li>
            <li><strong>Take Breaks:</strong> Short breaks during study sessions improve productivity</li>
          </ul>

          <h2>Critical Don'ts to Avoid</h2>
          
          <h3>Study Mistakes</h3>
          <ul>
            <li><strong>Don't Procrastinate:</strong> Avoid postponing difficult topics</li>
            <li><strong>Don't Skip Mock Tests:</strong> Regular testing is crucial for exam preparation</li>
            <li><strong>Don't Ignore Weak Subjects:</strong> Give extra attention to challenging areas</li>
            <li><strong>Don't Study Without Planning:</strong> Random studying leads to inefficiency</li>
            <li><strong>Don't Compare:</strong> Focus on your own progress, not others'</li>
          </ul>

          <h3>Mental Health Don'ts</h3>
          <ul>
            <li><strong>Don't Stress Excessively:</strong> Manage stress through meditation and relaxation</li>
            <li><strong>Don't Isolate Yourself:</strong> Maintain social connections with family and friends</li>
            <li><strong>Don't Sacrifice Sleep:</strong> All-nighters are counterproductive</li>
            <li><strong>Don't Ignore Warning Signs:</strong> Seek help if feeling overwhelmed</li>
          </ul>

          <h2>Time Management Strategies</h2>
          
          <h3>Daily Routine</h3>
          <ol>
            <li><strong>Early Morning Study:</strong> Tackle difficult subjects when mind is fresh</li>
            <li><strong>Subject Rotation:</strong> Study different subjects to maintain interest</li>
            <li><strong>Regular Breaks:</strong> Follow the Pomodoro Technique (25 min study + 5 min break)</li>
            <li><strong>Evening Revision:</strong> Review the day's learning before sleep</li>
          </ol>

          <h2>Exam Day Preparation</h2>
          
          <h3>Do's for Exam Day</h3>
          <ul>
            <li>Reach the exam center early</li>
            <li>Carry all necessary documents</li>
            <li>Read instructions carefully</li>
            <li>Start with easier questions</li>
            <li>Manage time effectively</li>
          </ul>

          <h3>Don'ts for Exam Day</h3>
          <ul>
            <li>Don't panic if facing difficult questions</li>
            <li>Don't spend too much time on one question</li>
            <li>Don't make random guesses (negative marking)</li>
            <li>Don't discuss answers during breaks</li>
            <li>Don't carry prohibited items</li>
          </ul>

          <h2>Final Thoughts</h2>
          <p>Success in JEE/NEET requires dedication, proper planning, and maintaining physical and mental health. Follow these guidelines consistently, and you'll be well-prepared for your entrance examinations.</p>
        </div>
      `,
      author: 'Tachyon Faculty',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Study Tips',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800'
    }
  };

  const post = blogPosts[id];

  if (!post) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <button
            onClick={() => navigate('/blog')}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4"
            >
              {post.category}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              {post.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center space-x-6 text-gray-200"
            >
              <div className="flex items-center space-x-2">
                <FaUser className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaCalendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaClock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <button
          onClick={() => navigate('/blog')}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
        >
          <FaArrowLeft className="w-4 h-4" />
          <span>Back to Blog</span>
        </button>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 pb-20">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Action Buttons */}
          <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                <FaShare className="w-4 h-4" />
                <span>Share</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                <FaBookmark className="w-4 h-4" />
                <span>Save</span>
              </button>
            </div>
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Call to Action */}
          <div className="mt-12 p-8 bg-blue-50 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your JEE/NEET Journey?
            </h3>
            <p className="text-gray-600 mb-6">
              Join Tachyon Academy and experience Hyderabad's teaching excellence in Baramati
            </p>
            <button
              onClick={() => navigate('/#contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;