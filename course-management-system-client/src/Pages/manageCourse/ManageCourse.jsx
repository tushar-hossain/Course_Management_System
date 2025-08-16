import React, { Suspense, use } from "react";
import PostedCourseList from "./PostedCourseList";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import Loading from "../../components/Loading";
import useManageCourseApi from "../../api/useManageCourseApi";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { FiBook } from "react-icons/fi";

const ManageCourse = () => {
  const { user, isDark } = use(AuthContext);
  const { ManageCoursePromise } = useManageCourseApi();

  return (
    <div
      className={`min-h-screen py-12 px-4 transition-all duration-300 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div
          className={`rounded-2xl p-8 mb-10 transition-all duration-300 ${
            isDark
              ? "bg-gray-800 border border-gray-700 shadow-2xl"
              : "bg-white shadow-xl border border-gray-100"
          }`}
        >
          <div className="flex items-center gap-4 mb-4">
            <div
              className={`p-4 rounded-xl transition-all duration-300 ${
                isDark ? "bg-blue-900/50" : "bg-blue-100"
              }`}
            >
              <HiOutlineAcademicCap
                className={`text-4xl ${
                  isDark ? "text-blue-400" : "text-blue-600"
                }`}
              />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                My Posted Courses
              </h1>
              <p
                className={`text-lg mt-2 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Manage and track your course content
              </p>
            </div>
          </div>

          {/* User Info */}
          <div
            className={`flex items-center gap-3 mt-6 p-4 rounded-xl ${
              isDark
                ? "bg-gray-700/50 border border-gray-600"
                : "bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100"
            }`}
          >
            <FiBook
              className={`text-xl ${
                isDark ? "text-blue-400" : "text-blue-600"
              }`}
            />
            <span
              className={`font-medium ${
                isDark ? "text-gray-200" : "text-gray-700"
              }`}
            >
              Welcome back, {user?.displayName || "Instructor"}!
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div
          className={`rounded-2xl p-8 transition-all duration-300 ${
            isDark
              ? "bg-gray-800 border border-gray-700 shadow-2xl"
              : "bg-white shadow-xl border border-gray-100"
          }`}
        >
          <Suspense
            fallback={
              <div className="flex flex-col items-center justify-center py-20">
                <div className="relative mb-6">
                  <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-600"></div>
                  <HiOutlineAcademicCap className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-blue-600" />
                </div>
                <div
                  className={`text-center ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  <p className="text-lg font-medium mb-2">
                    Loading your courses...
                  </p>
                  <p className="text-sm opacity-75">
                    Please wait while we fetch your data
                  </p>
                </div>
              </div>
            }
          >
            <PostedCourseList
              ManageCoursePromise={ManageCoursePromise(user.email)}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default ManageCourse;
