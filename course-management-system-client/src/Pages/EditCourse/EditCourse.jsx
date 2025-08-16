import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useLoaderData, useNavigate, useParams } from "react-router";

const EditCourse = () => {
  const course = useLoaderData();
  const { id } = useParams();
  const { user } = use(AuthContext);
  const navigate = useNavigate();

  const {
    title,
    image,
    description,
    duration,
    date,
    certification,
    whoThisCourseIsFor,
    price,
    whatYoullLearn,
    seats,
  } = course || {};

  const handleCourseSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formDate = new FormData(form).entries();
    const data = Object.fromEntries(formDate);

    // updated data and send to server side
    axios
      .put(
        `https://course-management-system-server-ashen.vercel.app/courses/${id}`,
        data
      )
      .then((res) => {
        if (res.data.modifiedCount) {
          toast.success("Updated course successfully.");
          navigate("/dashboard/manageCourse");
        }
      })
      .catch(() => {
        toast.error("Failed to update course.");
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8 mb-8">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
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
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Edit Course
              </h1>
              <p className="text-gray-600 mt-1">
                Update your course information and details
              </p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
          <div onSubmit={handleCourseSubmit}>
            {/* Basic Information */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 pb-2 border-b border-gray-200">
                Basic Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Course Title
                  </label>
                  <input
                    type="text"
                    defaultValue={title}
                    name="title"
                    required
                    placeholder="Enter Course Title"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="image"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Photo URL
                  </label>
                  <input
                    type="url"
                    required
                    name="image"
                    defaultValue={image}
                    placeholder="Enter Photo URL"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Course Description
                </label>
                <textarea
                  required
                  name="description"
                  defaultValue={description}
                  placeholder="Enter Description"
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-white resize-none"
                />
              </div>
            </div>

            {/* Course Details */}
            <div className="space-y-6 mt-8">
              <h2 className="text-xl font-semibold text-gray-800 pb-2 border-b border-gray-200">
                Course Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="courseLevel"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Course Level
                  </label>
                  <select
                    defaultValue="Select Course Level"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-white"
                    name="courseLevel"
                  >
                    <option disabled>Select Course Level</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Beginner to Intermediate">
                      Beginner to Intermediate
                    </option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Intermediate to Advanced">
                      Intermediate to Advanced
                    </option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Category
                  </label>
                  <select
                    defaultValue="Select Course Category"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-white"
                    name="category"
                  >
                    <option disabled>Select Category</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Web Design">Web Design</option>
                    <option value="Programming">Programming</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="duration"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Course Duration
                  </label>
                  <input
                    type="text"
                    required
                    name="duration"
                    defaultValue={duration}
                    placeholder="Enter Course Duration"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="language"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Language
                  </label>
                  <select
                    defaultValue="Select Language"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-white"
                    name="language"
                  >
                    <option disabled>Select language</option>
                    <option value="Bangla">Bangla</option>
                    <option value="English">English</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="access"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Course Access
                  </label>
                  <select
                    defaultValue="Select access"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-white"
                    name="access"
                  >
                    <option disabled>Select Access</option>
                    <option value="Lifetime">Lifetime</option>
                    <option value="Not Lifetime">Not Lifetime</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="certificate"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Course Certificate
                  </label>
                  <select
                    defaultValue="Select certificate"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-white"
                    name="certificate"
                  >
                    <option disabled>Select Course Certificate</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Published Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    defaultValue={date}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Price ($)
                  </label>
                  <input
                    type="number"
                    name="price"
                    defaultValue={price}
                    placeholder="Enter Course Price"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="seats"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Seats
                  </label>
                  <input
                    type="number"
                    name="seats"
                    defaultValue={seats}
                    placeholder="Enter Course seats"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-6 mt-8">
              <h2 className="text-xl font-semibold text-gray-800 pb-2 border-b border-gray-200">
                Additional Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="certification"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Certification
                  </label>
                  <input
                    type="text"
                    required
                    name="certification"
                    defaultValue={certification}
                    placeholder="Certification Description"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="whoThisCourseIsFor"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Who This Course Is For
                  </label>
                  <input
                    type="text"
                    required
                    name="whoThisCourseIsFor"
                    defaultValue={whoThisCourseIsFor}
                    placeholder="Target audience description"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="whatYoullLearn"
                  className="block text-sm font-medium text-gray-700"
                >
                  What You'll Learn
                </label>
                <textarea
                  name="whatYoullLearn"
                  defaultValue={whatYoullLearn}
                  placeholder="List what students will learn from this course"
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-white resize-none"
                />
              </div>
            </div>

            {/* Instructor Information */}
            <div className="space-y-6 mt-8">
              <h2 className="text-xl font-semibold text-gray-800 pb-2 border-b border-gray-200">
                Instructor Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Instructor Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={user?.displayName}
                    readOnly
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-600"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue={user?.email}
                    readOnly
                    name="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-600"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-8 mt-8">
              <button
                type="button"
                onClick={handleCourseSubmit}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:ring-4 focus:ring-blue-200"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                    />
                  </svg>
                  Update Course
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCourse;
