import { use, useState } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";
import {
  HiOutlineAcademicCap,
  HiOutlinePhotograph,
  HiOutlineDocumentText,
  HiOutlineClock,
  HiOutlineGlobeAlt,
  HiOutlineCurrencyDollar,
  HiOutlineCalendar,
  HiOutlineShieldCheck,
  HiOutlineUser,
  HiOutlineMail,
  HiOutlineTag,
  HiOutlineLightBulb,
} from "react-icons/hi";
import { PiSeatbeltFill } from "react-icons/pi";
import { BiCategory, BiCertification } from "react-icons/bi";
import { FiUsers, FiBook, FiAward } from "react-icons/fi";

const AddCourse = () => {
  const { user, isDark } = use(AuthContext);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handelCourseSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const formDate = new FormData(form).entries();
    const data = Object.fromEntries(formDate);
    const { price, seats, ...courseData } = data;

    courseData.price = parseInt(price);
    courseData.seats = parseInt(seats);
    courseData.enrolled = 0;
    courseData.students = 0;

    try {
      const res = await axios.post(
        "https://course-management-system-server-ashen.vercel.app/courses",
        courseData
      );

      if (res.data.insertedId) {
        toast.success("Course added successfully! 🎉");
        form.reset();
      }
    } catch (error) {
      toast.error("Failed to add course. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const FormField = ({ label, icon: Icon, children, required = false }) => (
    <div className="space-y-2">
      <label
        className={`flex items-center gap-2 text-sm font-medium ${
          isDark ? "text-gray-200" : "text-gray-700"
        }`}
      >
        <Icon
          className={`text-lg ${isDark ? "text-blue-400" : "text-blue-600"}`}
        />
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  );

  const inputStyles = `w-full rounded-xl px-4 py-3 border transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
    isDark
      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:bg-gray-650"
      : "bg-white border-gray-200 text-gray-900 placeholder-gray-500 hover:border-gray-300 focus:bg-white"
  }`;

  const selectStyles = `w-full rounded-xl px-4 py-3 border transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
    isDark
      ? "bg-gray-700 border-gray-600 text-white"
      : "bg-white border-gray-200 text-gray-900 hover:border-gray-300"
  }`;

  return (
    <div
      className={`min-h-screen py-8 transition-all duration-300 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div
          className={`rounded-2xl p-8 mb-8 ${
            isDark
              ? "bg-gray-800 border border-gray-700"
              : "bg-white shadow-xl border border-gray-100"
          }`}
        >
          <div className="flex items-center gap-4 mb-4">
            <div
              className={`p-3 rounded-xl ${
                isDark ? "bg-blue-900/50" : "bg-blue-100"
              }`}
            >
              <HiOutlineAcademicCap
                className={`text-3xl ${
                  isDark ? "text-blue-400" : "text-blue-600"
                }`}
              />
            </div>
            <div>
              <h1
                className={`text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}
              >
                Create New Course
              </h1>
              <p
                className={`text-lg mt-2 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Share your knowledge and help students learn something new
              </p>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div
          className={`rounded-2xl p-8 ${
            isDark
              ? "bg-gray-800 border border-gray-700"
              : "bg-white shadow-xl border border-gray-100"
          }`}
        >
          <form onSubmit={handelCourseSubmit} className="space-y-8">
            {/* Basic Information Section */}
            <div>
              <h2
                className={`text-xl font-bold mb-6 flex items-center gap-2 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                <HiOutlineDocumentText className="text-blue-600" />
                Basic Information
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <FormField
                  label="Course Title"
                  icon={HiOutlineAcademicCap}
                  required
                >
                  <input
                    type="text"
                    name="title"
                    required
                    placeholder="Enter an engaging course title"
                    className={inputStyles}
                  />
                </FormField>

                <FormField
                  label="Course Image URL"
                  icon={HiOutlinePhotograph}
                  required
                >
                  <input
                    type="url"
                    required
                    name="image"
                    placeholder="https://example.com/course-image.jpg"
                    className={inputStyles}
                  />
                </FormField>

                <div className="lg:col-span-2">
                  <FormField
                    label="Course Description"
                    icon={HiOutlineDocumentText}
                    required
                  >
                    <textarea
                      name="description"
                      required
                      rows="4"
                      placeholder="Provide a detailed description of what students will learn..."
                      className={`${inputStyles} resize-none`}
                    />
                  </FormField>
                </div>
              </div>
            </div>

            {/* Course Details Section */}
            <div>
              <h2
                className={`text-xl font-bold mb-6 flex items-center gap-2 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                <BiCategory className="text-green-600" />
                Course Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <FormField label="Course Level" icon={HiOutlineLightBulb}>
                  <select
                    name="courseLevel"
                    defaultValue=""
                    className={selectStyles}
                  >
                    <option value="" disabled>
                      Select Course Level
                    </option>
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
                </FormField>

                <FormField label="Category" icon={HiOutlineTag}>
                  <select
                    name="category"
                    defaultValue=""
                    className={selectStyles}
                  >
                    <option value="" disabled>
                      Select Category
                    </option>
                    <option value="Web Development">Web Development</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Web Design">Web Design</option>
                    <option value="Programming">Programming</option>
                  </select>
                </FormField>

                <FormField label="Duration" icon={HiOutlineClock} required>
                  <input
                    type="text"
                    required
                    name="duration"
                    placeholder="e.g., 8 weeks, 40 hours"
                    className={inputStyles}
                  />
                </FormField>

                <FormField label="Language" icon={HiOutlineGlobeAlt}>
                  <select
                    name="language"
                    defaultValue=""
                    className={selectStyles}
                  >
                    <option value="" disabled>
                      Select Language
                    </option>
                    <option value="Bangla">Bangla</option>
                    <option value="English">English</option>
                  </select>
                </FormField>

                <FormField label="Course Access" icon={HiOutlineShieldCheck}>
                  <select
                    name="access"
                    defaultValue=""
                    className={selectStyles}
                  >
                    <option value="" disabled>
                      Select Access Type
                    </option>
                    <option value="Lifetime">Lifetime Access</option>
                    <option value="Not Lifetime">Limited Access</option>
                  </select>
                </FormField>

                <FormField label="Certificate" icon={FiAward}>
                  <select
                    name="certificate"
                    defaultValue=""
                    className={selectStyles}
                  >
                    <option value="" disabled>
                      Certificate Available?
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </FormField>
              </div>
            </div>

            {/* Additional Information Section */}
            <div>
              <h2
                className={`text-xl font-bold mb-6 flex items-center gap-2 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                <FiBook className="text-purple-600" />
                Additional Information
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <FormField
                  label="Certification Details"
                  icon={BiCertification}
                  required
                >
                  <input
                    type="text"
                    required
                    name="certification"
                    placeholder="Describe the certification students will receive"
                    className={inputStyles}
                  />
                </FormField>

                <FormField label="Target Audience" icon={FiUsers} required>
                  <input
                    type="text"
                    required
                    name="whoThisCourseIsFor"
                    placeholder="Who is this course designed for?"
                    className={inputStyles}
                  />
                </FormField>

                <FormField label="What You'll Learn" icon={HiOutlineLightBulb}>
                  <input
                    type="text"
                    name="whatYoullLearn"
                    placeholder="Key learning outcomes and skills"
                    className={inputStyles}
                  />
                </FormField>

                <FormField label="Price (USD)" icon={HiOutlineCurrencyDollar}>
                  <input
                    type="number"
                    name="price"
                    min="0"
                    step="0.01"
                    placeholder="0.00"
                    className={inputStyles}
                  />
                </FormField>

                <FormField label="Published Date" icon={HiOutlineCalendar}>
                  <input type="date" name="date" className={inputStyles} />
                </FormField>

                <FormField label="Seats" icon={PiSeatbeltFill}>
                  <input
                    type="number"
                    name="seats"
                    min="0"
                    step="0.01"
                    placeholder="Student seats"
                    className={inputStyles}
                  />
                </FormField>
              </div>
            </div>

            {/* Instructor Information Section */}
            <div>
              <h2
                className={`text-xl font-bold mb-6 flex items-center gap-2 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                <HiOutlineUser className="text-orange-600" />
                Instructor Information
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <FormField label="Instructor Name" icon={HiOutlineUser}>
                  <input
                    type="text"
                    name="name"
                    defaultValue={user?.displayName}
                    readOnly
                    className={`${inputStyles} bg-gray-50 cursor-not-allowed`}
                  />
                </FormField>

                <FormField label="Instructor Email" icon={HiOutlineMail}>
                  <input
                    type="email"
                    defaultValue={user?.email}
                    readOnly
                    name="email"
                    className={`${inputStyles} bg-gray-50 cursor-not-allowed`}
                  />
                </FormField>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-2xl"
                } text-white`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-3">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                    Creating Course...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-3">
                    <HiOutlineAcademicCap className="text-2xl" />
                    Create Course
                  </div>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
