import axios from "axios";
import { use, useEffect, useState } from "react";
import { FaTrashAlt, FaClock, FaBook, FaUser, FaEnvelope, FaHashtag } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

const EnrolledCourseList = ({ MyEnrolledCoursesPromise }) => {
  const coursesData = use(MyEnrolledCoursesPromise);
  const [courses, setCourses] = useState([]);
  const { isDark } = use(AuthContext);

  useEffect(() => {
    setCourses(coursesData);
  }, [coursesData]);

  const handelDeleteEnroll = (id) => {
    Swal.fire({
      title: "Do you want to delete the course?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't delete`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        axios
          .delete(
            `https://course-management-system-server-ashen.vercel.app/enrollments/${id}`
          )
          .then((res) => {
            if (res.data.deletedCount) {
              const remainingCourse = courses.filter(
                (course) => course._id !== id
              );
              setCourses(remainingCourse);
            }
          })
          .catch(() => {});

        Swal.fire("Delete!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not delete", "", "info");
      }
    });
  };

  return (
    <div>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div
          className={`rounded-2xl p-6 ${
            isDark
              ? "bg-gradient-to-br from-blue-800/20 to-purple-800/20 border border-blue-700/30"
              : "bg-white shadow-lg border border-blue-100"
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600">
              <FaBook className="w-6 h-6 text-white" />
            </div>
            <div>
              <p
                className={`text-2xl font-bold ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                {courses.length}
              </p>
              <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                Active Courses
              </p>
            </div>
          </div>
        </div>

        <div
          className={`rounded-2xl p-6 ${
            isDark
              ? "bg-gradient-to-br from-purple-800/20 to-pink-800/20 border border-purple-700/30"
              : "bg-white shadow-lg border border-purple-100"
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-600">
              <FaClock className="w-6 h-6 text-white" />
            </div>
            <div>
              <p
                className={`text-2xl font-bold ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                {courses.reduce(
                  (total, course) => total + parseInt(course.duration),
                  0
                )}
              </p>
              <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                Total Weeks
              </p>
            </div>
          </div>
        </div>

        <div
          className={`rounded-2xl p-6 ${
            isDark
              ? "bg-gradient-to-br from-indigo-800/20 to-cyan-800/20 border border-indigo-700/30"
              : "bg-white shadow-lg border border-indigo-100"
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600">
              <FaUser className="w-6 h-6 text-white" />
            </div>
            <div>
              <p
                className={`text-2xl font-bold ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                85%
              </p>
              <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                Progress
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Course Table */}
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
            <thead className={`${isDark ? "bg-gray-800/50" : "bg-gray-50"}`}>
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
                  Student
                </th>
                <th
                  className={`px-6 py-4 text-left text-sm font-semibold ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Course Details
                </th>
                <th
                  className={`px-6 py-4 text-left text-sm font-semibold ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Contact
                </th>
                <th
                  className={`px-6 py-4 text-left text-sm font-semibold ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Duration
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
              {courses.map((course, index) => {
                const { _id, title, image, email, courseId, duration, name } =
                  course;
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
                        <div className="relative">
                          <img
                            src={image}
                            alt={`${name}'s avatar`}
                            className="w-12 h-12 rounded-full object-cover border-2 border-gradient-to-r from-blue-500 to-purple-500"
                          />
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                        </div>
                        <div>
                          <p
                            className={`font-semibold ${
                              isDark ? "text-white" : "text-gray-800"
                            }`}
                          >
                            {name}
                          </p>
                          <p
                            className={`text-sm ${
                              isDark ? "text-gray-400" : "text-gray-500"
                            }`}
                          >
                            Student
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p
                          className={`font-semibold ${
                            isDark ? "text-white" : "text-gray-800"
                          }`}
                        >
                          {title}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <FaHashtag
                            className={`w-3 h-3 ${
                              isDark ? "text-gray-400" : "text-gray-500"
                            }`}
                          />
                          <p
                            className={`text-sm ${
                              isDark ? "text-gray-400" : "text-gray-500"
                            }`}
                          >
                            {courseId}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <FaEnvelope
                          className={`w-4 h-4 ${
                            isDark ? "text-gray-400" : "text-gray-500"
                          }`}
                        />
                        <p
                          className={`text-sm ${
                            isDark ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {email}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                          isDark
                            ? "bg-purple-800/30 text-purple-300"
                            : "bg-purple-100 text-purple-700"
                        }`}
                      >
                        <FaClock className="w-3 h-3" />
                        {duration}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handelDeleteEnroll(_id)}
                        className={`inline-flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 group ${
                          isDark
                            ? "bg-red-800/20 text-red-400 hover:bg-red-800/40 hover:shadow-lg hover:shadow-red-800/25"
                            : "bg-red-50 text-red-600 hover:bg-red-100 hover:shadow-lg hover:shadow-red-200"
                        }`}
                      >
                        <FaTrashAlt className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {courses.length === 0 && (
          <div className="text-center py-12">
            <div
              className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                isDark ? "bg-gray-700" : "bg-gray-100"
              }`}
            >
              <FaBook
                className={`w-8 h-8 ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              />
            </div>
            <h3
              className={`text-lg font-semibold mb-2 ${
                isDark ? "text-white" : "text-gray-800"
              }`}
            >
              No courses enrolled yet
            </h3>
            <p className={`${isDark ? "text-gray-400" : "text-gray-500"}`}>
              Start your learning journey by enrolling in a course!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnrolledCourseList;
