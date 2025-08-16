import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { use } from "react";
import { Link } from "react-router";

const Header = ({ sliders }) => {
  const slider = use(sliders);

  return (
    <div className="w-11/12 mx-auto my-8 md:my-16">
      <div className="relative">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          dynamicHeight={true}
          interval={4000}
          transitionTime={600}
          showStatus={false}
          showArrows={true}
          className="custom-carousel"
        >
          {slider?.map((item, index) => {
            return (
              <div key={item?._id} className="relative overflow-hidden">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between min-h-[400px] md:min-h-[500px] bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
                  {/* Content Section */}
                  <div className="flex-1 px-6 md:px-12 py-8 md:py-12 space-y-6">
                    <div className="space-y-4">
                      {/* Badge/Category */}
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                        <svg
                          className="w-3 h-3 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        Featured Course
                      </div>

                      {/* Title */}
                      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                          {item?.title}
                        </span>
                      </h1>

                      {/* Description */}
                      <div className="text-gray-600 dark:text-gray-300">
                        <p className="hidden md:block text-lg leading-relaxed">
                          {item?.description}
                        </p>
                        <p className="md:hidden text-sm leading-relaxed">
                          {item?.description?.slice(0, 80)}...
                        </p>
                      </div>

                      {/* Features/Benefits */}
                      <div className="hidden md:flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Expert Instructors</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>Hands-on Projects</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span>Job Ready Skills</span>
                        </div>
                      </div>

                      {/* CTA Section */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <Link
                          to={"/all-courses"}
                          className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20"
                        >
                          <span className="mr-2">
                            {item.ctaText || "Explore Courses"}
                          </span>
                          <svg
                            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
                        </Link>

                        <Link
                          to="/free-seminar-schedule"
                          className="inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300"
                        >
                          <svg
                            className="w-4 h-4 mr-2"
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
                          Free Seminar
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Image Section */}
                  <div className="flex-1 relative p-6 md:p-8">
                    <div className="relative">
                      {/* Decorative Elements */}
                      <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-20 blur-xl"></div>
                      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full opacity-20 blur-xl"></div>

                      {/* Main Image */}
                      <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white/50 dark:border-gray-700/50">
                        <img
                          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                          src={item?.image}
                          alt={item?.title || "Course Image"}
                        />
                        {/* Image Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      {/* Floating Stats Card */}
                      <div className="absolute -bottom-6 -left-6 hidden lg:block">
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-4 backdrop-blur-sm">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
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
                                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"
                                />
                              </svg>
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-gray-900 dark:text-white">
                                500+ Students
                              </div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">
                                Enrolled
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
                          id={`pattern-${index}`}
                          x="0"
                          y="0"
                          width="20"
                          height="20"
                          patternUnits="userSpaceOnUse"
                        >
                          <circle cx="10" cy="10" r="2" fill="currentColor" />
                        </pattern>
                      </defs>
                      <rect
                        width="100"
                        height="100"
                        fill={`url(#pattern-${index})`}
                      />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>

        {/* Custom Carousel Indicators */}
        <style jsx>{`
          .custom-carousel .carousel .control-dots {
            bottom: -40px !important;
          }
          .custom-carousel .carousel .control-dots .dot {
            background: #cbd5e1 !important;
            width: 12px !important;
            height: 12px !important;
            border-radius: 50% !important;
            margin: 0 6px !important;
            transition: all 0.3s ease !important;
          }
          .custom-carousel .carousel .control-dots .dot.selected {
            background: #3b82f6 !important;
            transform: scale(1.2) !important;
          }
          .custom-carousel .carousel .control-arrow {
            background: rgba(59, 130, 246, 0.9) !important;
            border-radius: 50% !important;
            width: 50px !important;
            height: 50px !important;
            top: 50% !important;
            transform: translateY(-50%) !important;
          }
          .custom-carousel .carousel .control-arrow:hover {
            background: rgba(59, 130, 246, 1) !important;
            transform: translateY(-50%) scale(1.1) !important;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Header;
