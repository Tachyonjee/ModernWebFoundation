        import React, { useState } from 'react';
        import { useParams, useNavigate } from 'react-router-dom';

        // Dummy courses data (replace with import if externalized)
        const courses = [
          {
            id: "1",
            title: "Foundation Course (Class 8–10)",
            description: "Lays the groundwork for JEE/NEET and Olympiads with NCERT + advanced concepts.",
            details: `
              - Covers Physics, Chemistry, Mathematics, and Biology fundamentals.
              - Weekly tests, scientific temperament development, and logical reasoning.
              - Olympiad-level worksheets (IMO, NSO, NTSE, NMTC, etc.).
              - Personality development, doubt support, and motivational seminars.
            `
          },
          {
            id: "2",
            title: "JEE Main + Advanced (Class 11–12)",
            description: "Intensive preparation for JEE with personalized mentorship and test series.",
            details: `
              - Detailed PCM syllabus breakdown with daily DPPs and test analysis.
              - Hybrid coaching with digital classroom support.
              - Focus on concepts, speed, accuracy, and revision loops.
            `
          },
          {
            id: "3",
            title: "NEET (Class 11–12)",
            description: "Structured Bio + PCB focus with AI-based tests and strategy mentoring.",
            details: `
              - Weekly NEET pattern tests and All-India Mock Tests.
              - Speed building sessions and NCERT-to-NEET conversion.
              - Personal mentoring for improvement strategy.
            `
          },
        ];

        const CourseDetail = () => {
          const { courseId } = useParams();
          const navigate = useNavigate();

          const course = courses.find(c => c.id === courseId);
          const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

          if (!course) {
            return (
              <div className="p-8 text-center text-red-600 font-semibold">
                Course not found. <br />
                <button onClick={() => navigate(-1)} className="text-blue-600 underline mt-4">
                  Go back to Courses
                </button>
              </div>
            );
          }

          const handleSubmit = (e) => {
            e.preventDefault();
            alert(`Form submitted for ${course.title}`);
            setFormData({ name: '', email: '', phone: '' });
          };

          return (
            <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
              {/* Back Button */}
              <button
                onClick={() => navigate(-1)}
                className="text-blue-600 hover:underline text-sm font-medium"
              >
                ← Back to Courses
              </button>

              {/* Course Title */}
              <h1 className="text-4xl font-bold text-gray-800">{course.title}</h1>

              {/* Course Description */}
              <p className="text-lg text-gray-700">{course.description}</p>

              {/* Detailed Highlights */}
              <div className="bg-gray-50 border-l-4 border-green-500 p-6 rounded shadow-sm">
                <h2 className="text-2xl font-semibold mb-2 text-green-700">What You'll Get</h2>
                <ul className="list-disc list-inside text-gray-600 whitespace-pre-line">
                  {course.details.trim().split('\n').map((line, idx) => (
                    <li key={idx}>{line.trim()}</li>
                  ))}
                </ul>
              </div>

              {/* Join Form */}
              <div className="mt-10 bg-white p-6 rounded shadow-md border">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  Join "{course.title}" Course
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Course</label>
                    <input
                      type="text"
                      readOnly
                      value={course.title}
                      className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          );
        };

        export default CourseDetail;
