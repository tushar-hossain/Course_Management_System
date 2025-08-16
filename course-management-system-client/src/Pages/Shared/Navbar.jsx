import React, { use, useEffect } from "react";
import { Link, NavLink } from "react-router";
import logo from "/public/logo.png";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOutUser, isDark, setIsDark } = use(AuthContext);

  const handelLogOut = () => {
    logOutUser()
      .then(() => {
        toast.success("LogOut successful.");
      })
      .catch(() => {
        toast.error("please try again.");
      });
  };

  // theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
  }, []);

  const handleToggle = (e) => {
    const dark = e.target.checked;
    setIsDark(dark);
    document.documentElement.setAttribute(
      "data-theme",
      dark ? "dark" : "light"
    );
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-medium transition-all duration-300 hover:text-blue-600 hover:bg-blue-50 rounded-lg px-3 py-2 ${
              isActive
                ? isDark
                  ? "text-blue-400 bg-blue-900/20"
                  : "text-blue-600 bg-blue-50"
                : isDark
                ? "text-gray-300 hover:text-blue-400 hover:bg-blue-900/10"
                : "text-gray-700"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-courses"
          className={({ isActive }) =>
            `font-medium transition-all duration-300 hover:text-blue-600 hover:bg-blue-50 rounded-lg px-3 py-2 ${
              isActive
                ? isDark
                  ? "text-blue-400 bg-blue-900/20"
                  : "text-blue-600 bg-blue-50"
                : isDark
                ? "text-gray-300 hover:text-blue-400 hover:bg-blue-900/10"
                : "text-gray-700"
            }`
          }
        >
          All Courses
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/free-seminar-schedule"
          className={({ isActive }) =>
            `font-medium transition-all duration-300 hover:text-blue-600 hover:bg-blue-50 rounded-lg px-3 py-2 ${
              isActive
                ? isDark
                  ? "text-blue-400 bg-blue-900/20"
                  : "text-blue-600 bg-blue-50"
                : isDark
                ? "text-gray-300 hover:text-blue-400 hover:bg-blue-900/10"
                : "text-gray-700"
            }`
          }
        >
          Free Seminar
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            `font-medium transition-all duration-300 hover:text-blue-600 hover:bg-blue-50 rounded-lg px-3 py-2 ${
              isActive
                ? isDark
                  ? "text-blue-400 bg-blue-900/20"
                  : "text-blue-600 bg-blue-50"
                : isDark
                ? "text-gray-300 hover:text-blue-400 hover:bg-blue-900/10"
                : "text-gray-700"
            }`
          }
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `font-medium transition-all duration-300 hover:text-blue-600 hover:bg-blue-50 rounded-lg px-3 py-2 ${
              isActive
                ? isDark
                  ? "text-blue-400 bg-blue-900/20"
                  : "text-blue-600 bg-blue-50"
                : isDark
                ? "text-gray-300 hover:text-blue-400 hover:bg-blue-900/10"
                : "text-gray-700"
            }`
          }
        >
          Contact
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <details>
              <summary className="font-medium transition-all duration-300  hover:text-blue-600 hover:bg-blue-50">
                Courses
              </summary>
              <ul className="w-40">
                <li>
                  <NavLink
                    to="/myEnrolledCourses"
                    className={({ isActive }) =>
                      `font-medium transition-all duration-300  hover:text-blue-600 hover:bg-blue-50  rounded-lg px-3 py-2 ${
                        isActive
                          ? isDark
                            ? "text-blue-400 bg-blue-900/20"
                            : "text-blue-600 bg-blue-50"
                          : isDark
                          ? "text-gray-300 hover:text-blue-400 hover:bg-blue-900/10"
                          : "text-gray-700"
                      }`
                    }
                  >
                    Enrolled Courses
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/instructor"
                    className={({ isActive }) =>
                      `font-medium transition-all duration-300  hover:text-blue-600 hover:bg-blue-50  rounded-lg px-3 py-2 ${
                        isActive
                          ? isDark
                            ? "text-blue-400 bg-blue-900/20"
                            : "text-blue-600 bg-blue-50"
                          : isDark
                          ? "text-gray-300 hover:text-blue-400 hover:bg-blue-900/10"
                          : "text-gray-700"
                      }`
                    }
                  >
                    Courses Instructor
                  </NavLink>
                </li>
              </ul>
            </details>
          </li>
        </>
      )}
    </>
  );

  return (
    <div
      className={
        isDark
          ? "sticky top-0 z-50 bg-gray-900 backdrop-blur-md border-b border-gray-800"
          : "bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-lg border-b border-gray-100"
      }
    >
      <div
        className={`w-11/12 mx-auto flex items-center p-0 py-4 ${
          isDark ? "text-white" : "text-gray-800"
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className={`btn btn-ghost lg:hidden hover:bg-blue-50 ${
                isDark ? "hover:bg-gray-800 text-gray-300" : "text-gray-700"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content rounded-xl z-[1] mt-3 w-64 p-3 shadow-xl border ${
                isDark
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200"
              }`}
            >
              {links}
            </ul>
          </div>
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-90 transition-opacity"
          >
            <img
              className={`w-12 h-12 rounded-full ring-2 ring-blue-500/20 ${
                isDark ? "bg-white" : ""
              }`}
              src={logo}
              alt="BD Programming Logo"
            />
            <span
              className={`text-xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent hidden sm:block`}
            >
              BD Programming
            </span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
        </div>

        <div className="navbar-end flex items-center gap-4">
          {user ? (
            <div className="cursor-pointer">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn-circle avatar hover:ring-2 hover:ring-blue-500/30 transition-all"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="User Avatar"
                      referrerPolicy="no-referrer"
                      src={user?.photoURL}
                      className="rounded-full"
                    />
                  </div>
                </div>

                <ul
                  tabIndex={0}
                  className={`menu menu-sm dropdown-content rounded-xl z-[1] mt-3 w-60 p-3 shadow-xl border ${
                    isDark
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <div
                    className={`px-3 py-2 mb-2 rounded-lg ${
                      isDark ? "bg-gray-700" : "bg-gray-50"
                    }`}
                  >
                    <p
                      className={`font-medium ${
                        isDark ? "text-gray-200" : "text-gray-800"
                      }`}
                    >
                      {user?.displayName}
                    </p>
                    <p
                      className={`text-sm ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {user?.email}
                    </p>
                  </div>
                  <li>
                    <Link
                      to="/dashboard/home"
                      className={`font-medium transition-colors hover:text-blue-600 ${
                        isDark
                          ? "text-gray-300 hover:bg-blue-900/20 hover:text-blue-400"
                          : "text-gray-700 hover:bg-blue-50"
                      }`}
                    >
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
                          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                        />
                      </svg>
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handelLogOut}
                      className={`font-medium transition-colors hover:text-red-600 w-full text-left ${
                        isDark
                          ? "text-gray-300 hover:bg-red-900/20 hover:text-red-400"
                          : "text-gray-700 hover:bg-red-50"
                      }`}
                    >
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
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <NavLink
              className={`font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                isDark
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-blue-500/25"
                  : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-blue-500/25"
              }`}
              to="/login"
            >
              Login
            </NavLink>
          )}

          <div className="ml-2">
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                className="theme-controller sr-only"
                checked={isDark}
                onChange={handleToggle}
              />
              {/* Sun icon for light mode */}
              <svg
                className={`swap-off h-6 w-6 fill-current transition-colors hover:text-amber-500 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
              {/* Moon icon for dark mode */}
              <svg
                className={`swap-on h-6 w-6 fill-current transition-colors hover:text-blue-400 ${
                  isDark ? "text-blue-400" : "text-gray-600"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
