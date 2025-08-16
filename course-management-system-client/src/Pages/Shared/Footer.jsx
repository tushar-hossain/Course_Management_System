import logo from "/logo.png";
import { Link, NavLink } from "react-router";

const Footer = () => {
  const links = (
    <>
      <li className="mb-2">
        <NavLink
          to="/"
          className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:underline decoration-blue-400"
        >
          Home
        </NavLink>
      </li>
      <li className="mb-2">
        <NavLink
          to="/all-courses"
          className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:underline decoration-blue-400"
        >
          All Courses
        </NavLink>
      </li>
      <li className="mb-2">
        <NavLink
          to="/free-seminar-schedule"
          className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:underline decoration-blue-400"
        >
          Free Seminar
        </NavLink>
      </li>
      <li className="mb-2">
        <NavLink
          to="/instructor"
          className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:underline decoration-blue-400"
        >
          Courses Instructor
        </NavLink>
      </li>
      <li className="mb-2">
        <NavLink
          to="/blogs"
          className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:underline decoration-blue-400"
        >
          Blogs
        </NavLink>
      </li>
    </>
  );

  const socialLinks = [
    {
      href: "https://workspace.google.com/intl/en-US/gmail/",
      title: "Email",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
        </svg>
      ),
      hoverColor: "hover:bg-red-600 hover:shadow-red-500/25",
    },
    {
      href: "https://x.com/",
      title: "Twitter",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
        </svg>
      ),
      hoverColor: "hover:bg-blue-500 hover:shadow-blue-500/25",
    },
    {
      href: "https://github.com/",
      title: "GitHub",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-5 h-5"
        >
          <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
        </svg>
      ),
      hoverColor: "hover:bg-gray-700 hover:shadow-gray-500/25",
    },
    {
      href: "https://linkedin.com/",
      title: "LinkedIn",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-5 h-5"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      hoverColor: "hover:bg-blue-700 hover:shadow-blue-500/25",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="footer-pattern"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="10" cy="10" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#footer-pattern)" />
        </svg>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="container px-6 mx-auto py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center space-x-3 mb-6 group">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl group-hover:scale-105 transition-transform duration-300 shadow-lg">
                  <img
                    className="w-10 h-10 rounded-xl"
                    src={logo}
                    alt="BD Programming Logo"
                  />
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    BD Programming
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    Learn. Code. Excel.
                  </p>
                </div>
              </Link>

              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Empowering Bangladesh with cutting-edge programming skills. Join
                thousands of students who have transformed their careers through
                our expert-led courses and hands-on training.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                  <div className="text-2xl font-bold text-blue-400">500+</div>
                  <div className="text-xs text-gray-400">Students</div>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                  <div className="text-2xl font-bold text-emerald-400">95%</div>
                  <div className="text-xs text-gray-400">Job Rate</div>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                  <div className="text-2xl font-bold text-purple-400">50+</div>
                  <div className="text-xs text-gray-400">Courses</div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white relative">
                Quick Links
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              </h3>
              <ul className="space-y-3">{links}</ul>

              {/* Additional Links */}
              <div className="mt-6 pt-6 border-t border-gray-700/50">
                <h4 className="text-sm font-semibold text-gray-300 mb-3">
                  More
                </h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/about"
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/careers"
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/privacy"
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact & Social */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white relative">
                Get in Touch
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              </h3>

              {/* Contact Info */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 text-blue-400 mt-0.5">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">BD Programming</p>
                    <p className="text-gray-400 text-sm">Dhaka, Bangladesh</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 text-blue-400">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <a
                    href="mailto:support@bdprogramming.com"
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    support@bdprogramming.com
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 text-blue-400">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                      />
                    </svg>
                  </div>
                  <a
                    href="https://bd-programminf.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    bd-programming.web.app
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-4">
                  Follow Us
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.title}
                      className={`flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 rounded-lg text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${social.hoverColor}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 bg-black/20 backdrop-blur-sm">
          <div className="container px-6 mx-auto py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm">
                  © 2025{" "}
                  <span className="text-blue-400 font-medium">
                    BD Programming
                  </span>
                  . All rights reserved.
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Crafted with ❤️ in Bangladesh
                </p>
              </div>

              <div className="flex items-center gap-6 text-xs text-gray-500">
                <Link
                  to="/terms"
                  className="hover:text-blue-400 transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  to="/privacy"
                  className="hover:text-blue-400 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/cookies"
                  className="hover:text-blue-400 transition-colors"
                >
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
