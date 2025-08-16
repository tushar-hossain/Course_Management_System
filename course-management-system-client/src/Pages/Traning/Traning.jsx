import React, { use } from "react";
import {
  FaGraduationCap,
  FaLaptop,
  FaClock,
  FaDollarSign,
  FaUsers,
  FaCertificate,
  FaArrowRight,
  FaPlay,
  FaBookOpen,
  FaChartLine,
  FaGlobe,
  FaHeadset,
} from "react-icons/fa";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

const Training = () => {
  const { isDark } = use(AuthContext);

  const features = [
    {
      icon: <FaLaptop className="w-6 h-6" />,
      title: "Remote Learning",
      description: "Learn from anywhere with flexible schedules",
    },
    {
      icon: <FaDollarSign className="w-6 h-6" />,
      title: "Affordable Pricing",
      description: "Quality education at budget-friendly rates",
    },
    {
      icon: <FaCertificate className="w-6 h-6" />,
      title: "Certified Courses",
      description: "Get recognized certificates upon completion",
    },
    {
      icon: <FaHeadset className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Get help whenever you need it",
    },
  ];

  const benefits = [
    { icon: <FaUsers className="w-5 h-5" />, text: "Expert Instructors" },
    { icon: <FaClock className="w-5 h-5" />, text: "Lifetime Access" },
    { icon: <FaGlobe className="w-5 h-5" />, text: "Global Community" },
    { icon: <FaChartLine className="w-5 h-5" />, text: "Progress Tracking" },
  ];

  const stats = [
    { number: "50+", label: "Courses Available" },
    { number: "15k+", label: "Happy Students" },
    { number: "98%", label: "Completion Rate" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <div
      className={`transition-all duration-500 rounded-md ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900"
          : "bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Content */}
        <div
          className={`rounded-3xl overflow-hidden shadow-2xl ${
            isDark
              ? "bg-gray-800/30 backdrop-blur-sm border border-gray-700/50"
              : "bg-white/70 backdrop-blur-sm border border-white/20"
          }`}
        >
          <div className="flex flex-col lg:flex-row">
            {/* Left Side - Content */}
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              {/* Badge */}
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 w-fit ${
                  isDark
                    ? "bg-gradient-to-r from-indigo-800/30 to-purple-800/30 text-indigo-300 border border-indigo-700/50"
                    : "bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 border border-indigo-200"
                }`}
              >
                <FaGraduationCap className="w-4 h-4" />
                <span className="font-medium">Professional Training</span>
              </div>

              {/* Main Heading */}
              <h1
                className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                Affordable{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Remote Training
                </span>
                <br />& Learning Opportunities
              </h1>

              {/* Description */}
              <p
                className={`text-lg mb-8 leading-relaxed ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Explore all of our courses and pick your suitable ones to enroll
                and start learning with us! Flexible easy to access learning
                opportunities can bring a significant change to your career and
                personal growth.
              </p>

              {/* Benefits List */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-3 rounded-xl ${
                      isDark
                        ? "bg-gray-700/20 border border-gray-600/20"
                        : "bg-white/60 border border-gray-200/30"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-lg ${
                        isDark
                          ? "bg-indigo-600/20 text-indigo-400"
                          : "bg-indigo-100 text-indigo-600"
                      }`}
                    >
                      {benefit.icon}
                    </div>
                    <span
                      className={`font-medium text-sm ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {benefit.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 text-white font-bold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/25 hover:scale-105 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center justify-center gap-2">
                    View All Courses
                    <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>

                <button
                  className={`group px-8 py-4 font-semibold rounded-2xl border-2 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 ${
                    isDark
                      ? "border-gray-600 text-gray-300 hover:bg-gray-700/50 hover:border-gray-500"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
                  }`}
                >
                  <FaPlay className="w-4 h-4" />
                  Watch Demo
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p
                      className={`text-xl md:text-2xl font-bold ${
                        isDark ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {stat.number}
                    </p>
                    <p
                      className={`text-xs md:text-sm ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Image */}
            <div
              className={`lg:w-1/2 p-8 flex items-center justify-center ${
                isDark
                  ? "bg-gradient-to-br from-indigo-800/20 to-purple-800/20"
                  : "bg-gradient-to-br from-indigo-100/50 to-purple-100/50"
              }`}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 rounded-3xl opacity-20 blur-xl"></div>
                <img
                  className="relative z-10 w-full max-w-md h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  src="https://i.ibb.co.com/q3BPF6Km/opportunities.webp"
                  alt="Remote Training Opportunities"
                />

                {/* Floating Course Card */}
                <div
                  className={`absolute -top-6 -right-6 p-4 rounded-2xl ${
                    isDark
                      ? "bg-indigo-800/80 text-indigo-100 backdrop-blur-sm border border-indigo-600/30"
                      : "bg-white/90 text-indigo-700 backdrop-blur-sm shadow-lg"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-full ${
                        isDark ? "bg-indigo-700/50" : "bg-indigo-100"
                      }`}
                    >
                      <FaBookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">50+ Courses</p>
                      <p className="text-xs opacity-80">Available Now</p>
                    </div>
                  </div>
                </div>

                {/* Floating Student Card */}
                <div
                  className={`absolute -bottom-6 -left-6 p-4 rounded-2xl ${
                    isDark
                      ? "bg-purple-800/80 text-purple-100 backdrop-blur-sm border border-purple-600/30"
                      : "bg-white/90 text-purple-700 backdrop-blur-sm shadow-lg"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-full ${
                        isDark ? "bg-purple-700/50" : "bg-purple-100"
                      }`}
                    >
                      <FaUsers className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">15k+ Students</p>
                      <p className="text-xs opacity-80">Learning Daily</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl text-center transition-all duration-300 hover:transform hover:scale-105 ${
                isDark
                  ? "bg-gradient-to-br from-gray-800/20 to-gray-900/20 border border-gray-700/30"
                  : "bg-white shadow-lg border border-gray-100"
              }`}
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                  isDark
                    ? "bg-gradient-to-r from-indigo-700/30 to-purple-700/30 text-indigo-400"
                    : "bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-600"
                }`}
              >
                {feature.icon}
              </div>
              <h3
                className={`text-xl font-bold mb-3 ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                {feature.title}
              </h3>
              <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action Banner */}
        <div
          className={`mt-16 p-8 rounded-3xl text-center ${
            isDark
              ? "bg-gradient-to-r from-indigo-800/30 to-purple-800/30 border border-indigo-700/50"
              : "bg-gradient-to-r from-indigo-100/80 to-purple-100/80 border border-indigo-200"
          }`}
        >
          <h2
            className={`text-2xl md:text-3xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-800"
            }`}
          >
            Ready to Start Your Learning Journey?
          </h2>
          <p
            className={`text-lg mb-6 ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Join thousands of students who are already transforming their
            careers
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300">
              Start Learning Now
            </button>
            <button
              className={`px-8 py-4 font-semibold rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                isDark
                  ? "border-gray-500 text-gray-300 hover:bg-gray-700/30"
                  : "border-gray-400 text-gray-700 hover:bg-white/50"
              }`}
            >
              Browse Catalog
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Training;
