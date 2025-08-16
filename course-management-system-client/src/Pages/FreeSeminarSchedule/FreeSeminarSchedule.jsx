import React, { useState } from "react";

const FreeSeminarSchedule = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for registering!");
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <section className="relative max-w-5xl mx-auto my-16 px-4">
      {/* Background with gradient and glass effect */}
      <div className="relative bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 rounded-3xl overflow-hidden shadow-2xl">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-400/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-purple-400/10 to-transparent rounded-full blur-3xl"></div>

        <div className="relative z-10 p-8 md:p-12 text-white">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 shadow-lg">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Free Web Development Career Seminar
            </h2>

            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Join us for an exclusive seminar on building a successful web
              development career. Learn from industry experts and discover your
              roadmap to success.
            </p>

            {/* Highlight badges */}
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-medium">
                🎯 Career Guidance
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-medium">
                💼 Industry Insights
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-medium">
                🚀 Growth Strategies
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Schedule Information */}
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  Event Schedule
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-blue-200">Date</p>
                      <p className="text-lg font-semibold">
                        Friday, July 12, 2025
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-blue-200">Time</p>
                      <p className="text-lg font-semibold">
                        7:00 PM – 9:00 PM (BST)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-blue-200">Platform</p>
                      <p className="text-lg font-semibold">
                        BD Programming HQ (Online via Zoom)
                      </p>
                    </div>
                  </div>
                </div>

                {/* What you'll learn */}
                <div className="mt-8 p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl border border-green-400/20">
                  <h4 className="text-lg font-semibold mb-3 text-green-300">
                    What You'll Learn:
                  </h4>
                  <ul className="space-y-2 text-sm text-blue-100">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      Industry trends and in-demand skills
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      Career path planning and growth strategies
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      Portfolio building and job hunting tips
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      Live Q&A with industry professionals
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <div className="lg:sticky lg:top-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">Reserve Your Spot</h3>
                  <p className="text-blue-200">
                    Limited seats available - Register now!
                  </p>
                  <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-green-500/20 text-green-300 rounded-full border border-green-400/30">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">
                      FREE Registration
                    </span>
                  </div>
                </div>

                <div onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-blue-200">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-blue-300 focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20 transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-blue-200">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-blue-300 focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20 transition-all duration-200"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-blue-200">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-blue-300 focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20 transition-all duration-200"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 focus:ring-4 focus:ring-blue-300/50"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Register for Free Seminar
                    </span>
                  </button>

                  <p className="text-xs text-blue-300 text-center mt-4">
                    By registering, you agree to receive seminar updates and
                    course information from BD Programming.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeSeminarSchedule;
