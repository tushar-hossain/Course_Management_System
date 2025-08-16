import React, { use } from "react";
import {
  FaBook,
  FaDollarSign,
  FaGraduationCap,
  FaStar,
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

const CoursesItem = () => {
  const courseData = useLoaderData();
  const { isDark } = use(AuthContext);

  const getLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case "beginner":
        return isDark
          ? "bg-green-800/30 text-green-300 border-green-700/50"
          : "bg-green-100 text-green-700 border-green-200";
      case "intermediate":
        return isDark
          ? "bg-yellow-800/30 text-yellow-300 border-yellow-700/50"
          : "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "advanced":
        return isDark
          ? "bg-red-800/30 text-red-300 border-red-700/50"
          : "bg-red-100 text-red-700 border-red-200";
      default:
        return isDark
          ? "bg-gray-800/30 text-gray-300 border-gray-700/50"
          : "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
          : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
      }`}
    >
      <div className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <div
                className={`inline-flex items-center gap-3 px-4 py-2 rounded-full mb-4 ${
                  isDark
                    ? "bg-purple-800/30 text-purple-300"
                    : "bg-purple-100 text-purple-700"
                }`}
              >
                <FaBook className="w-4 h-4" />
                <span className="font-medium">Course Management</span>
              </div>
              <h1
                className={`text-3xl md:text-4xl lg:text-5xl font-bold ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                My Posted{" "}
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Courses
                </span>
              </h1>
              <p
                className={`text-lg mt-2 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Manage and monitor your published courses
              </p>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div
              className={`rounded-2xl p-6 ${
                isDark
                  ? "bg-gradient-to-br from-blue-800/20 to-blue-900/20 border border-blue-700/30"
                  : "bg-white shadow-lg border border-blue-100"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600">
                  <FaBook className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p
                    className={`text-2xl font-bold ${
                      isDark ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {courseData.length}
                  </p>
                  <p
                    className={`text-sm ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Total Courses
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`rounded-2xl p-6 ${
                isDark
                  ? "bg-gradient-to-br from-green-800/20 to-green-900/20 border border-green-700/30"
                  : "bg-white shadow-lg border border-green-100"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-green-500 to-green-600">
                  <FaGraduationCap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p
                    className={`text-2xl font-bold ${
                      isDark ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {courseData.reduce(
                      (total, course) => total + course.students,
                      0
                    )}
                  </p>
                  <p
                    className={`text-sm ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Total Students
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`rounded-2xl p-6 ${
                isDark
                  ? "bg-gradient-to-br from-purple-800/20 to-purple-900/20 border border-purple-700/30"
                  : "bg-white shadow-lg border border-purple-100"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-600">
                  <FaStar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p
                    className={`text-2xl font-bold ${
                      isDark ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {(
                      courseData.reduce(
                        (total, course) => total + course.rating,
                        0
                      ) / courseData.length
                    ).toFixed(1)}
                  </p>
                  <p
                    className={`text-sm ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Avg Rating
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`rounded-2xl p-6 ${
                isDark
                  ? "bg-gradient-to-br from-indigo-800/20 to-indigo-900/20 border border-indigo-700/30"
                  : "bg-white shadow-lg border border-indigo-100"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600">
                  <FaDollarSign className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p
                    className={`text-2xl font-bold ${
                      isDark ? "text-white" : "text-gray-800"
                    }`}
                  >
                    $1.2k
                  </p>
                  <p
                    className={`text-sm ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Total Revenue
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Courses Table */}
          <div
            className={`rounded-2xl overflow-hidden shadow-2xl ${
              isDark
                ? "bg-gray-800/50 backdrop-blur-sm border border-gray-700/50"
                : "bg-white/80 backdrop-blur-sm border border-white/20"
            }`}
          >
            <div
              className={`px-6 py-4 border-b ${
                isDark
                  ? "border-gray-700 bg-gray-800/30"
                  : "border-gray-200 bg-gray-50/50"
              }`}
            >
              <h2
                className={`text-xl font-semibold ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                Course Overview
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead
                  className={`${isDark ? "bg-gray-800/50" : "bg-gray-50"}`}
                >
                  <tr>
                    <th
                      className={`px-6 py-4 text-left text-sm font-semibold ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      #
                    </th>
                    <th
                      className={`px-6 py-4 text-left text-sm font-semibold ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Course Info
                    </th>
                    <th
                      className={`px-6 py-4 text-left text-sm font-semibold ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Description
                    </th>
                    <th
                      className={`px-6 py-4 text-left text-sm font-semibold ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Pricing & Level
                    </th>
                    <th
                      className={`px-6 py-4 text-left text-sm font-semibold ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Performance
                    </th>
                    <th
                      className={`px-6 py-4 text-left text-sm font-semibold ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {courseData.map((course, index) => {
                    const {
                      _id,
                      name,
                      description,
                      image,
                      title,
                      price,
                      courseLevel,
                      students,
                      rating,
                    } = course;
                    return (
                      <tr
                        key={_id}
                        className={`border-b transition-colors duration-200 ${
                          isDark
                            ? "border-gray-700 hover:bg-gray-800/30"
                            : "border-gray-200 hover:bg-blue-50/30"
                        }`}
                      >
                        <td
                          className={`px-6 py-4 ${
                            isDark ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          <span
                            className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
                              isDark
                                ? "bg-blue-800/30 text-blue-300"
                                : "bg-blue-100 text-blue-700"
                            }`}
                          >
                            {index + 1}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-4">
                            <div className="relative hidden md:block">
                              <img
                                src={image}
                                alt={title}
                                className="w-30 h-15 rounded-xl object-cover border-2 border-gradient-to-r from-blue-500 to-purple-500"
                              />
                              <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                                <span className="text-xs text-white">✓</span>
                              </div>
                            </div>
                            <div>
                              <p
                                className={`font-semibold text-lg ${
                                  isDark ? "text-white" : "text-gray-800"
                                }`}
                              >
                                {title}
                              </p>
                              <p
                                className={`text-sm ${
                                  isDark ? "text-gray-400" : "text-gray-500"
                                }`}
                              >
                                by {name}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="max-w-xs">
                            <p
                              className={`text-sm leading-5 ${
                                isDark ? "text-gray-300" : "text-gray-600"
                              }`}
                            >
                              {description.slice(0, 60)}...
                            </p>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="space-y-2">
                            <div
                              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-lg font-bold ${
                                isDark
                                  ? "bg-green-800/30 text-green-300"
                                  : "bg-green-100 text-green-700"
                              }`}
                            >
                              <FaDollarSign className="w-3 h-3" />
                              {`${price}`}
                            </div>
                            <div
                              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getLevelColor(
                                courseLevel
                              )}`}
                            >
                              {courseLevel}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <FaGraduationCap
                                className={`w-4 h-4 ${
                                  isDark ? "text-blue-400" : "text-blue-600"
                                }`}
                              />
                              <span
                                className={`text-sm font-medium ${
                                  isDark ? "text-gray-300" : "text-gray-700"
                                }`}
                              >
                                {students} students
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <FaStar className="w-4 h-4 text-yellow-400" />
                              <span
                                className={`text-sm font-medium ${
                                  isDark ? "text-gray-300" : "text-gray-700"
                                }`}
                              >
                                {rating} rating
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <Link to={`/course-details/${_id}`}>
                              <button
                                className={`inline-flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 group ${
                                  isDark
                                    ? "bg-blue-800/20 text-blue-400 hover:bg-blue-800/40 hover:shadow-lg hover:shadow-blue-800/25"
                                    : "bg-blue-50 text-blue-600 hover:bg-blue-100 hover:shadow-lg hover:shadow-blue-200"
                                }`}
                                title="View Details"
                              >
                                <FaArrowUpRightFromSquare className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                              </button>
                            </Link>

                            <Link to={`/editCourse/${_id}`}>
                              <button
                                className={`inline-flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 group ${
                                  isDark
                                    ? "bg-purple-800/20 text-purple-400 hover:bg-purple-800/40 hover:shadow-lg hover:shadow-purple-800/25"
                                    : "bg-purple-50 text-purple-600 hover:bg-purple-100 hover:shadow-lg hover:shadow-purple-200"
                                }`}
                                title="Edit Course"
                              >
                                <FaEdit className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                              </button>
                            </Link>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {courseData.length === 0 && (
              <div className="text-center py-16">
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 ${
                    isDark ? "bg-gray-700" : "bg-gray-100"
                  }`}
                >
                  <FaBook
                    className={`w-10 h-10 ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}
                  />
                </div>
                <h3
                  className={`text-xl font-semibold mb-3 ${
                    isDark ? "text-white" : "text-gray-800"
                  }`}
                >
                  No courses posted yet
                </h3>
                <p
                  className={`text-lg ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Start creating your first course to share knowledge!
                </p>

                <Link to={"/dashboard/addCourse"}></Link>
                <button
                  className={`mt-6 px-8 py-3 rounded-full font-semibold transition-all duration-200 ${
                    isDark
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25"
                      : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25"
                  }`}
                >
                  Create Your First Course
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesItem;
