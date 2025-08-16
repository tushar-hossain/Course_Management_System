import React from "react";
import { Link, useLoaderData } from "react-router";

const Instructor = () => {
  const data = useLoaderData();
  // const data = [
  //   {
  //     _id: "1",
  //     name: "John Smith",
  //     email: "john.smith@bdprogramming.com",
  //     profileImage:
  //       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  //     bio: "Senior Full-Stack Developer with 8+ years of experience",
  //     specialization: ["React", "Node.js", "Python", "MongoDB"],
  //     rating: 4.9,
  //     coursesCount: 12,
  //     totalStudents: 2450,
  //     socialLinks: {
  //       linkedin: "https://linkedin.com/in/johnsmith",
  //       twitter: "https://twitter.com/johnsmith",
  //     },
  //   },
  //   {
  //     _id: "2",
  //     name: "Sarah Johnson",
  //     email: "sarah.johnson@bdprogramming.com",
  //     profileImage:
  //       "https://images.unsplash.com/photo-1494790108755-2616b612b4ac?w=400&h=400&fit=crop&crop=face",
  //     bio: "Frontend Specialist and UI/UX Designer",
  //     specialization: ["React", "Vue.js", "CSS", "Figma"],
  //     rating: 4.8,
  //     coursesCount: 8,
  //     totalStudents: 1890,
  //     socialLinks: {
  //       linkedin: "https://linkedin.com/in/sarahjohnson",
  //       twitter: "https://twitter.com/sarahjohnson",
  //     },
  //   },
  //   {
  //     _id: "3",
  //     name: "Ahmed Rahman",
  //     email: "ahmed.rahman@bdprogramming.com",
  //     profileImage:
  //       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  //     bio: "DevOps Engineer and Cloud Architecture Expert",
  //     specialization: ["AWS", "Docker", "Kubernetes", "CI/CD"],
  //     rating: 4.9,
  //     coursesCount: 15,
  //     totalStudents: 3200,
  //     socialLinks: {
  //       linkedin: "https://linkedin.com/in/ahmedrahman",
  //       twitter: "https://twitter.com/ahmedrahman",
  //     },
  //   },
  // ];

  return (
    <div className="w-11/12 mx-auto min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-6 shadow-lg">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            Meet Our Expert Instructors
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Learn from industry professionals with years of real-world
            experience and a passion for teaching the next generation of
            developers.
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((instructor) => {
            const {
              _id,
              name,
              email,
              profileImage,
              bio,
              specialization,
              rating,
              coursesCount,
              totalStudents,
              socialLinks,
            } = instructor || {};

            return (
              <div
                key={_id}
                className="group bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg border border-white/20 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                {/* Profile Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={profileImage}
                    alt={name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    <svg
                      className="w-4 h-4 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-semibold text-gray-800">
                      {rating}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Name and Bio */}
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {bio}
                    </p>
                  </div>

                  {/* Specializations */}
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-gray-700">
                      Specializations:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {specialization.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 text-xs font-medium rounded-full border border-blue-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 py-4">
                    <div className="text-center p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                      <div className="text-2xl font-bold text-blue-600">
                        {coursesCount}
                      </div>
                      <div className="text-xs text-blue-500 font-medium">
                        Courses
                      </div>
                    </div>
                    <div className="text-center p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                      <div className="text-2xl font-bold text-green-600">
                        {totalStudents.toLocaleString()}
                      </div>
                      <div className="text-xs text-green-500 font-medium">
                        Students
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-3 pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-gray-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-600 truncate">
                        {email}
                      </span>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-blue-600"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </div>
                      <a
                        href={socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                      >
                        LinkedIn Profile
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-sky-100 to-sky-200 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-sky-600"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </div>
                      <a
                        href={socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-sky-600 hover:text-sky-800 font-medium"
                      >
                        Twitter Profile
                      </a>
                    </div>
                  </div>

                  {/* Contact Button */}
                  <Link to={"/contact"}>
                    <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                        Contact Instructor
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Want to Become an Instructor?
            </h2>
            <p className="text-gray-600 mb-6">
              Join our team of expert instructors and share your knowledge with
              thousands of students worldwide.
            </p>
            <Link to={"/contact"}>
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
                Apply to Teach
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
