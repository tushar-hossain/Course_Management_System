import axios from "axios";
import React, { use, useEffect, useState } from "react";
import { FaEdit, FaTrashAlt, FaEye } from "react-icons/fa";
import {
  HiOutlineAcademicCap,
  HiOutlineClock,
  HiOutlineTag,
  HiOutlineUser,
  HiOutlineChartBar,
  HiOutlineCalendar,
} from "react-icons/hi";
import { BiCategory, BiBook } from "react-icons/bi";
import { FiUsers, FiDollarSign } from "react-icons/fi";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

const PostedCourseList = ({ ManageCoursePromise }) => {
  const { isDark } = use(AuthContext);
  const coursesData = use(ManageCoursePromise);
  const [courses, setCourses] = useState([]);
  const [viewMode, setViewMode] = useState("cards"); // "cards" or "table"

  useEffect(() => {
    setCourses(coursesData);
  }, [coursesData]);

  const handelDelete = (id, title) => {
    Swal.fire({
      title: "Delete Course?",
      text: `Are you sure you want to delete "${title}"? This action cannot be undone.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#EF4444",
      cancelButtonColor: "#6B7280",
      confirmButtonText: "Yes, Delete",
      cancelButtonText: "Cancel",
      background: isDark ? "#1F2937" : "#FFFFFF",
      color: isDark ? "#FFFFFF" : "#000000",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://course-management-system-server-ashen.vercel.app/courses/${id}`
          )
          .then((res) => {
            if (res.data.deletedCount) {
              const remainingCourse = courses.filter(
                (course) => course._id !== id
              );
              setCourses(remainingCourse);
              Swal.fire({
                title: "Deleted!",
                text: "Course has been deleted successfully.",
                icon: "success",
                background: isDark ? "#1F2937" : "#FFFFFF",
                color: isDark ? "#FFFFFF" : "#000000",
              });
            }
          })
          .catch(() => {
            Swal.fire({
              title: "Error!",
              text: "Failed to delete course. Please try again.",
              icon: "error",
              background: isDark ? "#1F2937" : "#FFFFFF",
              color: isDark ? "#FFFFFF" : "#000000",
            });
          });
      }
    });
  };

  const CourseCard = ({ course, index }) => {
    const {
      _id,
      name,
      description,
      image,
      title,
      category,
      duration,
      courseLevel,
      price,
      enrolled = 0,
      date,
    } = course || {};

    return (
      <div
        className={`group rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
          isDark
            ? "bg-gray-800 border border-gray-700 hover:border-blue-500"
            : "bg-white shadow-lg border border-gray-100 hover:shadow-2xl"
        }`}
      >
        {/* Image Header */}
        <div className="relative overflow-hidden h-48">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          {/* Course Level Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
              {courseLevel}
            </span>
          </div>

          {/* Price Badge */}
          {price && (
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-green-600 text-white text-sm font-medium rounded-full">
                ${price}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
              {index + 1}
            </div>
            <div className="flex-1">
              <h3
                className={`font-bold text-lg line-clamp-1 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {title}
              </h3>
              <div
                className={`flex items-center gap-2 text-sm ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <HiOutlineUser className="text-blue-600" />
                {name}
              </div>
            </div>
          </div>

          <p
            className={`text-sm mb-4 line-clamp-2 ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {description}
          </p>

          {/* Course Info */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-between">
              <div
                className={`flex items-center gap-2 text-sm ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <BiCategory className="text-purple-600" />
                {category}
              </div>
              <div
                className={`flex items-center gap-2 text-sm ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <HiOutlineClock className="text-orange-600" />
                {duration}
              </div>
            </div>

            {enrolled > 0 && (
              <div
                className={`flex items-center gap-2 text-sm ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <FiUsers className="text-green-600" />
                {enrolled} students enrolled
              </div>
            )}

            {date && (
              <div
                className={`flex items-center gap-2 text-sm ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <HiOutlineCalendar className="text-blue-600" />
                {new Date(date).toLocaleDateString()}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Link
              to={`/course-details/${_id}`}
              className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:shadow-lg"
            >
              <FaEye />
              View
            </Link>

            <Link
              to={`/editCourse/${_id}`}
              className={`flex items-center justify-center p-3 rounded-lg transition-all duration-300 hover:scale-110 ${
                isDark
                  ? "bg-gray-700 hover:bg-green-600 text-gray-300 hover:text-white"
                  : "bg-green-50 hover:bg-green-600 text-green-600 hover:text-white"
              }`}
            >
              <FaEdit size={16} />
            </Link>

            <button
              onClick={() => handelDelete(_id, title)}
              className={`flex items-center justify-center p-3 rounded-lg transition-all duration-300 hover:scale-110 ${
                isDark
                  ? "bg-gray-700 hover:bg-red-600 text-gray-300 hover:text-white"
                  : "bg-red-50 hover:bg-red-600 text-red-600 hover:text-white"
              }`}
            >
              <FaTrashAlt size={16} />
            </button>
          </div>
        </div>
      </div>
    );
  };

  const TableRow = ({ course, index }) => {
    const {
      _id,
      name,
      description,
      image,
      title,
      category,
      duration,
      courseLevel,
    } = course || {};

    return (
      <tr
        className={`transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-700 ${
          isDark ? "text-gray-200" : "text-gray-900"
        }`}
      >
        <td className="px-6 py-4 text-center font-medium">{index + 1}</td>
        <td className="px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="font-semibold">{name}</div>
              <div
                className={`text-sm ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Instructor
              </div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 font-medium max-w-xs">
          <div className="truncate">{title}</div>
        </td>
        <td className="px-6 py-4 max-w-md">
          <div className="truncate">{description}</div>
        </td>
        <td className="px-6 py-4">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              isDark ? "bg-blue-900 text-blue-200" : "bg-blue-100 text-blue-800"
            }`}
          >
            {category}
          </span>
        </td>
        <td className="px-6 py-4">{duration}</td>
        <td className="px-6 py-4">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              courseLevel === "Beginner"
                ? isDark
                  ? "bg-green-900 text-green-200"
                  : "bg-green-100 text-green-800"
                : courseLevel === "Intermediate"
                ? isDark
                  ? "bg-yellow-900 text-yellow-200"
                  : "bg-yellow-100 text-yellow-800"
                : isDark
                ? "bg-red-900 text-red-200"
                : "bg-red-100 text-red-800"
            }`}
          >
            {courseLevel}
          </span>
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center gap-2">
            <Link
              to={`/editCourse/${_id}`}
              className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                isDark
                  ? "bg-gray-700 hover:bg-green-600 text-gray-300 hover:text-white"
                  : "bg-green-50 hover:bg-green-600 text-green-600 hover:text-white"
              }`}
            >
              <FaEdit size={14} />
            </Link>

            <button
              onClick={() => handelDelete(_id, title)}
              className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                isDark
                  ? "bg-gray-700 hover:bg-red-600 text-gray-300 hover:text-white"
                  : "bg-red-50 hover:bg-red-600 text-red-600 hover:text-white"
              }`}
            >
              <FaTrashAlt size={14} />
            </button>
          </div>
        </td>
      </tr>
    );
  };

  if (!courses || courses.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="mb-6">
          <HiOutlineAcademicCap
            className={`mx-auto text-6xl ${
              isDark ? "text-gray-600" : "text-gray-300"
            }`}
          />
        </div>
        <h3
          className={`text-2xl font-bold mb-2 ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          No Courses Found
        </h3>
        <p className={`mb-6 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
          You haven't created any courses yet. Start by adding your first
          course!
        </p>
        <Link
          to="/dashboard/addCourse"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          <HiOutlineAcademicCap />
          Create Your First Course
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* View Mode Toggle */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <HiOutlineChartBar
            className={`text-2xl ${isDark ? "text-blue-400" : "text-blue-600"}`}
          />
          <h2
            className={`text-xl font-bold ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Your Courses ({courses.length})
          </h2>
        </div>

        <div
          className={`flex items-center border rounded-lg ${
            isDark ? "border-gray-600" : "border-gray-200"
          }`}
        >
          <button
            onClick={() => setViewMode("cards")}
            className={`px-4 py-2 rounded-l-lg transition-all duration-200 ${
              viewMode === "cards"
                ? "bg-blue-600 text-white"
                : isDark
                ? "text-gray-400 hover:text-white hover:bg-gray-700"
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
            }`}
          >
            Cards
          </button>
          <button
            onClick={() => setViewMode("table")}
            className={`px-4 py-2 rounded-r-lg transition-all duration-200 ${
              viewMode === "table"
                ? "bg-blue-600 text-white"
                : isDark
                ? "text-gray-400 hover:text-white hover:bg-gray-700"
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
            }`}
          >
            Table
          </button>
        </div>
      </div>

      {/* Content */}
      {viewMode === "cards" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={course._id} course={course} index={index} />
          ))}
        </div>
      ) : (
        <div
          className={`rounded-2xl overflow-hidden border ${
            isDark ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className={`${isDark ? "bg-gray-700" : "bg-gray-50"}`}>
                <tr>
                  <th
                    className={`px-6 py-4 text-left text-sm font-medium uppercase tracking-wider ${
                      isDark ? "text-gray-300" : "text-gray-500"
                    }`}
                  >
                    #
                  </th>
                  <th
                    className={`px-6 py-4 text-left text-sm font-medium uppercase tracking-wider ${
                      isDark ? "text-gray-300" : "text-gray-500"
                    }`}
                  >
                    Instructor
                  </th>
                  <th
                    className={`px-6 py-4 text-left text-sm font-medium uppercase tracking-wider ${
                      isDark ? "text-gray-300" : "text-gray-500"
                    }`}
                  >
                    Title
                  </th>
                  <th
                    className={`px-6 py-4 text-left text-sm font-medium uppercase tracking-wider ${
                      isDark ? "text-gray-300" : "text-gray-500"
                    }`}
                  >
                    Description
                  </th>
                  <th
                    className={`px-6 py-4 text-left text-sm font-medium uppercase tracking-wider ${
                      isDark ? "text-gray-300" : "text-gray-500"
                    }`}
                  >
                    Category
                  </th>
                  <th
                    className={`px-6 py-4 text-left text-sm font-medium uppercase tracking-wider ${
                      isDark ? "text-gray-300" : "text-gray-500"
                    }`}
                  >
                    Duration
                  </th>
                  <th
                    className={`px-6 py-4 text-left text-sm font-medium uppercase tracking-wider ${
                      isDark ? "text-gray-300" : "text-gray-500"
                    }`}
                  >
                    Level
                  </th>
                  <th
                    className={`px-6 py-4 text-left text-sm font-medium uppercase tracking-wider ${
                      isDark ? "text-gray-300" : "text-gray-500"
                    }`}
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody
                className={`divide-y ${
                  isDark
                    ? "bg-gray-800 divide-gray-700"
                    : "bg-white divide-gray-200"
                }`}
              >
                {courses.map((course, index) => (
                  <TableRow key={course._id} course={course} index={index} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostedCourseList;
