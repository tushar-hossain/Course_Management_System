import { use, useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";
import CourseCard from "../Course/CourseCard";

const Course = ({ trainingCourse, categorys }) => {
  const coursesData = use(trainingCourse);
  const category = use(categorys);

  const [courses, setCourses] = useState([]);
  const [categorysItem, setCategorysItem] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(false);

  const handelSubmit = async (categoryName) => {
    setIsLoading(true);
    setActiveCategory(categoryName);
    try {
      const { data } = await axios.get(
        `https://course-management-system-server-ashen.vercel.app/api/courses?courese=${categoryName}`
      );
      setCourses(data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const showAllCourses = () => {
    setActiveCategory("All");
    setCourses(coursesData);
  };

  useEffect(() => {
    setCourses(coursesData);
    setCategorysItem(category);
  }, [coursesData, category]);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <svg
              className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400"
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
            <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">
              Our Courses
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Training Subjects
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              To Suit You
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            Choose from our comprehensive range of programming courses designed
            by industry experts. From beginner-friendly to advanced levels, we
            have something for everyone.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button
            onClick={showAllCourses}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
              activeCategory === "All"
                ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/25"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
            }`}
          >
            All Courses
          </button>

          {categorysItem?.map((item) => (
            <button
              key={item._id}
              onClick={() => handelSubmit(item?.category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === item?.category
                  ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-500/25"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
              }`}
            >
              {item?.category}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        )}

        {/* Courses Grid */}
        {!isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {courses?.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))}
          </div>
        )}

        {/* No Courses Message */}
        {!isLoading && courses?.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-12 h-12 text-gray-400"
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
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No courses found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try selecting a different category or check back later.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We offer custom training programs tailored to your specific needs.
              Contact us to discuss your requirements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
              >
                Request Custom Training
              </Link>
              <Link
                to="/free-seminar-schedule"
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
              >
                Join Free Seminar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Course;
