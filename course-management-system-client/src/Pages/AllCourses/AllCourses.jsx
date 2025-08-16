import React, { use, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { CiSearch } from "react-icons/ci";
import { BiSortAlt2 } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";
import { HiOutlineAcademicCap } from "react-icons/hi";
import axios from "axios";

const AllCourses = () => {
  const courseData = useLoaderData();
  const [courses, setCourses] = useState([]);
  const { isDark } = use(AuthContext);

  const handelChange = (e) => {
    const sortBy = e.target.value;
    if (sortBy === "ascending") {
      fetch(
        "https://course-management-system-server-ashen.vercel.app/all-courses",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ sortBy }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setCourses(data);
        });
    } else {
      fetch(
        "https://course-management-system-server-ashen.vercel.app/all-courses",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({}),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setCourses(data);
        });
    }
  };

  useEffect(() => {
    setCourses(courseData);
  }, [courseData]);

  const handelSubmit = async (e) => {
    e.preventDefault();
    const course = e.target.courseName.value;
    const { data } = await axios.get(
      `https://course-management-system-server-ashen.vercel.app/api/all-courses?course=${course}`
    );
    setCourses([data]);
  };

  return (
    <div
      className={`min-h-screen py-12 transition-colors duration-300 ${
        isDark ? "bg-gray-900" : "bg-gradient-to-br from-blue-50 to-indigo-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <HiOutlineAcademicCap className="text-4xl text-blue-600 mr-3" />
            <h1
              className={`text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}
            >
              All Courses
            </h1>
          </div>
          <p
            className={`text-lg ${
              isDark ? "text-gray-300" : "text-gray-600"
            } max-w-2xl mx-auto`}
          >
            Discover our comprehensive collection of programming courses
            designed to elevate your skills
          </p>
        </div>

        {/* Controls Section */}
        <div
          className={`${
            isDark ? "bg-gray-800" : "bg-white"
          } rounded-2xl shadow-xl p-6 mb-8 border ${
            isDark ? "border-gray-700" : "border-gray-100"
          }`}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Search Bar */}
            <div className="w-full lg:w-1/2">
              <form onSubmit={handelSubmit} className="relative">
                <div
                  className={`flex items-center rounded-xl px-4 py-3 transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-500 ${
                    isDark
                      ? "bg-gray-700 text-white"
                      : "bg-gray-50 hover:bg-gray-100"
                  }`}
                >
                  <CiSearch className="text-gray-400 mr-3" size={24} />
                  <input
                    type="text"
                    name="courseName"
                    className="flex-1 outline-none bg-transparent placeholder-gray-400"
                    placeholder="Search for courses..."
                  />
                  <button
                    type="submit"
                    className="ml-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>

            {/* Sort Controls */}
            <div className="flex items-center gap-3">
              <FiFilter
                className={`${isDark ? "text-gray-300" : "text-gray-600"}`}
                size={20}
              />
              <span
                className={`font-medium ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Sort By:
              </span>
              <select
                onChange={handelChange}
                defaultValue="sort"
                className={`px-4 py-2 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-blue-500 ${
                  isDark
                    ? "bg-gray-700 border-gray-600 text-white"
                    : "bg-white border-gray-200 hover:border-gray-300"
                }`}
              >
                <option disabled value="sort">
                  Choose Option
                </option>
                <option value="ascending">Price: Low to High</option>
                <option value="descending">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        {courses?.length === 0 ? (
          <div className="text-center py-20">
            <div className="mb-4">
              <HiOutlineAcademicCap
                className={`mx-auto text-6xl ${
                  isDark ? "text-gray-600" : "text-gray-300"
                }`}
              />
            </div>
            <h2
              className={`text-2xl font-bold ${
                isDark ? "text-gray-300" : "text-gray-600"
              } mb-2`}
            >
              No Courses Found
            </h2>
            <p className={`${isDark ? "text-gray-400" : "text-gray-500"}`}>
              Try adjusting your search criteria or browse all available courses
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses?.map((course) => {
              const { _id, description, image, title, price, enrolled } =
                course || {};
              return (
                <div
                  key={_id}
                  className={`group rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    isDark
                      ? "bg-gray-800 border border-gray-700 hover:border-blue-500"
                      : "bg-white shadow-lg hover:shadow-2xl border border-gray-100"
                  }`}
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <img
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      src={image}
                      alt={title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {price && (
                      <div className="absolute top-3 right-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full font-semibold shadow-lg">
                        ${price}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h2
                      className={`text-xl font-bold mb-3 line-clamp-2 transition-colors duration-300 ${
                        isDark
                          ? "text-white group-hover:text-blue-400"
                          : "text-gray-800 group-hover:text-blue-600"
                      }`}
                    >
                      {title}
                    </h2>

                    <p
                      className={`text-sm mb-4 line-clamp-3 ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {description?.slice(0, 100)}...
                    </p>

                    {enrolled && (
                      <div
                        className={`flex items-center mb-4 text-sm ${
                          isDark ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        <HiOutlineAcademicCap className="mr-2" />
                        <span>{enrolled} students enrolled</span>
                      </div>
                    )}

                    {/* Action Button */}
                    <Link
                      to={`/course-details/${_id}`}
                      className="block w-full text-center py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 hover:from-blue-600 hover:to-purple-700 hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllCourses;
