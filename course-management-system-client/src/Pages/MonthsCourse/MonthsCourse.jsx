import { Link } from "react-router";
import feature1 from "../../assets/images/features1.webp";
import feature2 from "../../assets/images/features2.webp";
import feature3 from "../../assets/images/features3.webp";
import feature4 from "../../assets/images/features4.webp";

export default function MonthsCourse() {
  const features = [
    {
      image: feature1,
      title: "Short & Accredited",
      description:
        "Ranging from 1-14 Days or up to 12 Months. Courses length 30m.",
      bgGradient: "from-blue-500 to-cyan-500",
      iconBg: "bg-gradient-to-br from-blue-100 to-cyan-100",
      hoverColor: "hover:shadow-blue-500/20",
    },
    {
      image: feature2,
      title: "Classroom",
      description: "Nationwide Locations running monthly whether Face2face.",
      bgGradient: "from-emerald-500 to-teal-500",
      iconBg: "bg-gradient-to-br from-emerald-100 to-teal-100",
      hoverColor: "hover:shadow-emerald-500/20",
    },
    {
      image: feature3,
      title: "Company's Courses",
      description:
        "Design and Tailor courses for your team and deliver at a location.",
      bgGradient: "from-purple-500 to-indigo-500",
      iconBg: "bg-gradient-to-br from-purple-100 to-indigo-100",
      hoverColor: "hover:shadow-purple-500/20",
    },
    {
      image: feature4,
      title: "Online Training",
      description: "Self-paced, Study from anywhere E-learning Video courses.",
      bgGradient: "from-orange-500 to-red-500",
      iconBg: "bg-gradient-to-br from-orange-100 to-red-100",
      hoverColor: "hover:shadow-orange-500/20",
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl"></div>

      <div className="relative w-11/12 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <svg
              className="w-4 h-4 mr-2 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span className="text-blue-300 text-sm font-medium">
              Why Choose BD Programming
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Learn Programming with
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              Flexibility & Excellence
            </span>
          </h2>

          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Choose from multiple learning formats designed to fit your schedule
            and learning style. Our comprehensive approach ensures you get the
            skills employers are looking for.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:transform hover:-translate-y-3 hover:bg-white/10 hover:border-white/20 ${feature.hoverColor} hover:shadow-2xl`}
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon Container */}
                <div
                  className={`${feature.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-8 h-8 object-cover object-center"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gray-100 transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                  {feature.description}
                </p>

                {/* Decorative Element */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className={`w-8 h-8 bg-gradient-to-br ${feature.bgGradient} rounded-full flex items-center justify-center`}
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Bottom Gradient Line */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl`}
              ></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <Link to={"/all-courses"}>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20">
                <span className="flex items-center">
                  Explore All Courses
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </button>
            </Link>

            <Link to={"/contact"}>
              <button className="px-6 py-3 border-2 border-white/20 text-white font-medium rounded-xl hover:bg-white/5 hover:border-white/30 transition-all duration-300">
                Contact Our Team
              </button>
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/10">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-gray-400 text-sm">Students Trained</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-400 text-sm">Expert Instructors</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">95%</div>
            <div className="text-gray-400 text-sm">Job Placement</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-400 text-sm">Learning Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
