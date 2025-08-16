import { Suspense } from "react";
import PopularCourseCard from "./PopularCourseCard";
import Loading from "../../components/Loading";

const PopularCoursePromise = fetch(
  "https://course-management-system-server-ashen.vercel.app/popular-course"
).then((res) => res.json());

// Enhanced Loading Component
const EnhancedLoading = () => (
  <div className="flex flex-col items-center justify-center py-16">
    <div className="relative">
      {/* Main Spinner */}
      <div className="w-16 h-16 border-4 border-blue-200 dark:border-blue-800 border-t-blue-600 dark:border-t-blue-400 rounded-full animate-spin"></div>

      {/* Inner Spinner */}
      <div className="absolute top-2 left-2 w-12 h-12 border-4 border-purple-200 dark:border-purple-800 border-t-purple-500 dark:border-t-purple-400 rounded-full animate-spin animation-delay-150"></div>
    </div>

    <div className="mt-6 text-center">
      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
        Loading Popular Courses
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Discovering the most loved courses...
      </p>
    </div>

    {/* Progress Dots */}
    <div className="flex gap-2 mt-4">
      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
      <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce animation-delay-200"></div>
      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce animation-delay-400"></div>
    </div>
  </div>
);

const PopularCourse = () => {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-400/5 to-pink-400/5 rounded-full blur-2xl"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="popular-pattern"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="10" cy="10" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#popular-pattern)" />
        </svg>
      </div>

      <div className="relative container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 mb-6">
            <svg
              className="w-4 h-4 mr-2 text-orange-600 dark:text-orange-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-orange-600 dark:text-orange-400 text-sm font-medium">
              Most Popular
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Student Favorites
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl mt-2 text-gray-700 dark:text-gray-300">
              Most Popular Courses
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Join thousands of successful students who chose these highly-rated
            courses. These programs have the highest completion rates and best
            job placement outcomes.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                15,000+
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                Students Enrolled
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                4.9★
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                Average Rating
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                98%
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                Completion Rate
              </div>
            </div>
          </div>
        </div>

        {/* Popular Courses Content */}
        <div className="relative">
          {/* Decorative Elements Around Content */}
          <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl opacity-20 transform rotate-12"></div>
          <div className="absolute -top-4 -right-8 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg opacity-30 transform -rotate-12"></div>
          <div className="absolute -bottom-6 -right-6 w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl opacity-25 transform rotate-45"></div>
          <div className="absolute -bottom-4 -left-8 w-6 h-6 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full opacity-30"></div>

          {/* Suspense Wrapper with Enhanced Loading */}
          <Suspense fallback={<EnhancedLoading />}>
            <PopularCourseCard PopularCoursePromise={PopularCoursePromise} />
          </Suspense>
        </div>

        {/* Bottom Call-to-Action */}
        <div className="text-center mt-16">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 p-8 max-w-4xl mx-auto">
            {/* Testimonial Quote */}
            <div className="mb-8">
              <svg
                className="w-8 h-8 text-gray-400 mx-auto mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
              </svg>

              <blockquote className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 italic mb-4">
                "These popular courses transformed my career. The hands-on
                approach and expert mentorship made all the difference."
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900 dark:text-white">
                    Sarah Ahmed
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Software Engineer at TechCorp
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-500/20">
                <span className="flex items-center">
                  View All Popular Courses
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

              <button className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300">
                Get Course Recommendations
              </button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 hidden lg:block">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl transform rotate-12 opacity-20"></div>
            <div className="absolute top-2 left-2 w-16 h-16 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center shadow-lg">
              <svg
                className="w-8 h-8 text-orange-500"
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
            </div>
          </div>
        </div>

        <div className="absolute bottom-20 right-10 hidden lg:block">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl transform -rotate-12 opacity-20"></div>
            <div className="absolute top-2 left-2 w-20 h-20 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center shadow-lg">
              <svg
                className="w-10 h-10 text-purple-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularCourse;
