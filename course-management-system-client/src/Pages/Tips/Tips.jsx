import React, { use } from "react";
import {
  FaChalkboardTeacher,
  FaUsers,
  FaDollarSign,
  FaStar,
  FaArrowRight,
  FaGraduationCap,
  FaClock,
  FaGlobe,
} from "react-icons/fa";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

const Tips = () => {
  const { isDark } = use(AuthContext);

  const benefits = [
    {
      icon: <FaDollarSign className="w-6 h-6" />,
      title: "Earn Money",
      description: "Generate passive income by sharing your knowledge",
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "Global Reach",
      description: "Connect with students from around the world",
    },
    {
      icon: <FaGraduationCap className="w-6 h-6" />,
      title: "Share Knowledge",
      description: "Help others grow and develop new skills",
    },
    {
      icon: <FaStar className="w-6 h-6" />,
      title: "Build Reputation",
      description: "Establish yourself as an expert in your field",
    },
  ];

  const stats = [
    { number: "10k+", label: "Active Students" },
    { number: "500+", label: "Expert Instructors" },
    { number: "50+", label: "Course Categories" },
    { number: "95%", label: "Success Rate" },
  ];

  return (
    <div
      className={`transition-all my-10 rounded-md duration-500 ${
        isDark
          ? "bg-gray-800 text-white hover:bg-gray-700"
          : "bg-gray-800 text-white hover:bg-gray-700"
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
            {/* Left Side - Image */}
            <div
              className={`lg:w-1/2 p-8 flex items-center justify-center ${
                isDark
                  ? "bg-gradient-to-br from-blue-800/20 to-purple-800/20"
                  : "bg-gradient-to-br from-blue-100/50 to-purple-100/50"
              }`}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl opacity-20 blur-xl"></div>
                <img
                  className="relative z-10 w-full max-w-md h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  src="https://i.ibb.co.com/JwqwL2r8/instructor.webp"
                  alt="Become an Instructor"
                />

                {/* Floating Stats Cards */}
                <div
                  className={`absolute -top-6 -left-6 px-4 py-3 rounded-2xl ${
                    isDark
                      ? "bg-blue-800/80 text-blue-100 backdrop-blur-sm border border-blue-600/30"
                      : "bg-white/90 text-blue-700 backdrop-blur-sm shadow-lg"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <FaUsers className="w-4 h-4" />
                    <span className="font-bold">10k+ Students</span>
                  </div>
                </div>

                <div
                  className={`absolute -bottom-6 -right-6 px-4 py-3 rounded-2xl ${
                    isDark
                      ? "bg-purple-800/80 text-purple-100 backdrop-blur-sm border border-purple-600/30"
                      : "bg-white/90 text-purple-700 backdrop-blur-sm shadow-lg"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <FaStar className="w-4 h-4" />
                    <span className="font-bold">4.9★ Rating</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              {/* Badge */}
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 w-fit ${
                  isDark
                    ? "bg-gradient-to-r from-blue-800/30 to-purple-800/30 text-blue-300 border border-blue-700/50"
                    : "bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border border-blue-200"
                }`}
              >
                <FaChalkboardTeacher className="w-4 h-4" />
                <span className="font-medium">Join Our Community</span>
              </div>

              {/* Main Heading */}
              <h1
                className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                Become an{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Instructor
                </span>
                <br />
                And Join with us
              </h1>

              {/* Description */}
              <p
                className={`text-lg mb-8 leading-relaxed ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Share your expertise with thousands of eager learners worldwide.
                Create engaging courses, build your reputation, and earn money
                doing what you love. Join our community of successful
                instructors today!
              </p>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-xl transition-all duration-300 hover:transform hover:scale-105 ${
                      isDark
                        ? "bg-gray-700/30 border border-gray-600/30 hover:bg-gray-700/50"
                        : "bg-white/60 border border-gray-200/50 hover:bg-white/80 shadow-sm hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-lg ${
                          isDark
                            ? "bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-400"
                            : "bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600"
                        }`}
                      >
                        {benefit.icon}
                      </div>
                      <div>
                        <h3
                          className={`font-semibold ${
                            isDark ? "text-white" : "text-gray-800"
                          }`}
                        >
                          {benefit.title}
                        </h3>
                        <p
                          className={`text-sm ${
                            isDark ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              {/* <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white font-bold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center justify-center gap-2">
                    Start Teaching Today
                    <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>

                <button
                  className={`px-8 py-4 font-semibold rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                    isDark
                      ? "border-gray-600 text-gray-300 hover:bg-gray-700/50 hover:border-gray-500"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
                  }`}
                >
                  Learn More
                </button>
              </div> */}

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p
                      className={`text-2xl font-bold ${
                        isDark ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {stat.number}
                    </p>
                    <p
                      className={`text-sm ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className={`p-8 rounded-2xl text-center transition-all duration-300 hover:transform hover:scale-105 ${
              isDark
                ? "bg-gradient-to-br from-blue-800/20 to-blue-900/20 border border-blue-700/30"
                : "bg-white shadow-lg border border-blue-100"
            }`}
          >
            <div
              className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                isDark
                  ? "bg-blue-700/30 text-blue-400"
                  : "bg-blue-100 text-blue-600"
              }`}
            >
              <FaClock className="w-8 h-8" />
            </div>
            <h3
              className={`text-xl font-bold mb-3 ${
                isDark ? "text-white" : "text-gray-800"
              }`}
            >
              Flexible Schedule
            </h3>
            <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
              Teach at your own pace and schedule. Create courses when it's
              convenient for you.
            </p>
          </div>

          <div
            className={`p-8 rounded-2xl text-center transition-all duration-300 hover:transform hover:scale-105 ${
              isDark
                ? "bg-gradient-to-br from-purple-800/20 to-purple-900/20 border border-purple-700/30"
                : "bg-white shadow-lg border border-purple-100"
            }`}
          >
            <div
              className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                isDark
                  ? "bg-purple-700/30 text-purple-400"
                  : "bg-purple-100 text-purple-600"
              }`}
            >
              <FaGlobe className="w-8 h-8" />
            </div>
            <h3
              className={`text-xl font-bold mb-3 ${
                isDark ? "text-white" : "text-gray-800"
              }`}
            >
              Global Platform
            </h3>
            <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
              Reach students from all over the world with our international
              learning platform.
            </p>
          </div>

          <div
            className={`p-8 rounded-2xl text-center transition-all duration-300 hover:transform hover:scale-105 ${
              isDark
                ? "bg-gradient-to-br from-indigo-800/20 to-indigo-900/20 border border-indigo-700/30"
                : "bg-white shadow-lg border border-indigo-100"
            }`}
          >
            <div
              className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                isDark
                  ? "bg-indigo-700/30 text-indigo-400"
                  : "bg-indigo-100 text-indigo-600"
              }`}
            >
              <FaChalkboardTeacher className="w-8 h-8" />
            </div>
            <h3
              className={`text-xl font-bold mb-3 ${
                isDark ? "text-white" : "text-gray-800"
              }`}
            >
              Full Support
            </h3>
            <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
              Get dedicated support and resources to help you create amazing
              courses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tips;
