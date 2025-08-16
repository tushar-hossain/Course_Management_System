import {
  FaTrashAlt,
  FaClock,
  FaBook,
  FaUser,
  FaEnvelope,
  FaHashtag,
} from "react-icons/fa";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import useMyEnrolledCoursesApi from "../../api/useMyEnrolledCoursesApi";
import { Suspense, use } from "react";
import EnrolledCourseList from "./EnrolledCourseList";
import Loading from "../../components/Loading";

const MyEnrolledCourses = () => {
  const { MyEnrolledCoursesPromise } = useMyEnrolledCoursesApi();
  const { isDark, user } = use(AuthContext);

  return (
    <div
      className={`w-11/12 mx-auto my-10 rounded-md min-h-screen transition-all duration-300 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
          : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
      }`}
    >
      {/* Header Section */}
      <div className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-12">
            <div
              className={`inline-flex items-center gap-3 px-6 py-2 rounded-full mb-4 ${
                isDark
                  ? "bg-blue-800/30 text-blue-300"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              <FaBook className="w-5 h-5" />
              <span className="font-medium">Learning Dashboard</span>
            </div>
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${
                isDark ? "text-white" : "text-gray-800"
              }`}
            >
              My Enrolled{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Courses
              </span>
            </h1>
            <p
              className={`text-lg ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Track your learning progress at BD Programming
            </p>
          </div>

          {/* table content */}
          <div>
            <Suspense fallback={<Loading />}>
              <EnrolledCourseList
                MyEnrolledCoursesPromise={MyEnrolledCoursesPromise(user.email)}
              />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEnrolledCourses;
