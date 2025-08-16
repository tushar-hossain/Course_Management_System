import { use, useState } from "react";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Legend,
  Tooltip,
} from "recharts";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaUser, FaChartBar } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";
import { SiCoursera } from "react-icons/si";
import { BiBookmark } from "react-icons/bi";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { BsCalendar3 } from "react-icons/bs";

const dashboardData = fetch(
  `https://course-management-system-server-ashen.vercel.app/api/dashboard`
).then((res) => res.json());

// Modern color palette
// const colors = [
//   "#3B82F6", // Blue
//   "#10B981", // Emerald
//   "#F59E0B", // Amber
//   "#EF4444", // Red
//   "#8B5CF6", // Purple
//   "#06B6D4", // Cyan
// ];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function DashboardHome() {
  const [date, setDate] = useState(new Date());
  const { isDark } = use(AuthContext);
  const newData = use(dashboardData);

  const chartData = [
    { name: "Users", value: newData.user, color: "#3B82F6" },
    { name: "Courses", value: newData.course, color: "#10B981" },
    { name: "Enrollments", value: newData.enrollments, color: "#F59E0B" },
    { name: "Instructors", value: newData.instructor, color: "#EF4444" },
  ];

  const pieData = [
    { name: "Users", value: newData.user, fill: "#3B82F6" },
    { name: "Courses", value: newData.course, fill: "#10B981" },
    { name: "Enrollments", value: newData.enrollments, fill: "#F59E0B" },
    { name: "Instructors", value: newData.instructor, fill: "#EF4444" },
  ];

  const statCards = [
    {
      title: "Total Users",
      value: newData.user,
      icon: FaUser,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      change: "+12%",
      changeColor: "text-green-600",
    },
    {
      title: "Active Courses",
      value: newData.course,
      icon: SiCoursera,
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
      change: "+8%",
      changeColor: "text-green-600",
    },
    {
      title: "Total Enrollments",
      value: newData.enrollments,
      icon: BiBookmark,
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600",
      change: "+23%",
      changeColor: "text-green-600",
    },
    {
      title: "Instructors",
      value: newData.instructor,
      icon: HiOutlineAcademicCap,
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
      change: "+5%",
      changeColor: "text-green-600",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50"
      }`}
    >
      <div className="max-w-7xl mx-auto p-6 lg:p-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <FaChartBar className="text-3xl text-blue-600" />
            <h1
              className={`text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}
            >
              Dashboard Overview
            </h1>
          </div>
          <p
            className={`text-lg ${isDark ? "text-gray-300" : "text-gray-600"}`}
          >
            Welcome back! Here's what's happening with BD Programming today.
          </p>
        </div>

        {/* Stats Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  isDark
                    ? "bg-gray-800 border border-gray-700"
                    : "bg-white shadow-lg border border-gray-100"
                }`}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-3 rounded-xl ${
                        isDark ? "bg-gray-700" : stat.bgColor
                      }`}
                    >
                      <Icon
                        className={`text-2xl ${
                          isDark ? "text-white" : stat.iconColor
                        }`}
                      />
                    </div>
                    <div
                      className={`flex items-center gap-1 text-sm font-medium ${stat.changeColor}`}
                    >
                      <FiTrendingUp className="text-xs" />
                      {stat.change}
                    </div>
                  </div>

                  <h3
                    className={`text-sm font-medium mb-2 ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {stat.title}
                  </h3>
                  <p
                    className={`text-3xl font-bold ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {stat.value?.toLocaleString()}
                  </p>
                </div>

                {/* Gradient overlay */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color}`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Charts and Calendar Section */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Bar Chart */}
          <div
            className={`xl:col-span-2 rounded-2xl p-6 transition-all duration-300 ${
              isDark
                ? "bg-gray-800 border border-gray-700"
                : "bg-white shadow-lg border border-gray-100"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <FaChartBar
                className={`text-xl ${
                  isDark ? "text-blue-400" : "text-blue-600"
                }`}
              />
              <h2
                className={`text-xl font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Analytics Overview
              </h2>
            </div>

            <div className="mb-6">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={chartData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke={isDark ? "#374151" : "#E5E7EB"}
                  />
                  <XAxis
                    dataKey="name"
                    tick={{ fill: isDark ? "#9CA3AF" : "#6B7280" }}
                    axisLine={{ stroke: isDark ? "#4B5563" : "#D1D5DB" }}
                  />
                  <YAxis
                    tick={{ fill: isDark ? "#9CA3AF" : "#6B7280" }}
                    axisLine={{ stroke: isDark ? "#4B5563" : "#D1D5DB" }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: isDark ? "#1F2937" : "#FFFFFF",
                      border: `1px solid ${isDark ? "#374151" : "#E5E7EB"}`,
                      borderRadius: "12px",
                      color: isDark ? "#FFFFFF" : "#000000",
                    }}
                  />
                  <Bar dataKey="value" fill="#8884d8" radius={[4, 4, 0, 0]}>
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Mini Pie Chart */}
            <div className="mt-6">
              <h3
                className={`text-lg font-semibold mb-4 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Distribution
              </h3>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    dataKey="value"
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: isDark ? "#1F2937" : "#FFFFFF",
                      border: `1px solid ${isDark ? "#374151" : "#E5E7EB"}`,
                      borderRadius: "12px",
                      color: isDark ? "#FFFFFF" : "#000000",
                    }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Calendar Section */}
          <div
            className={`rounded-2xl p-6 transition-all duration-300 ${
              isDark
                ? "bg-gray-800 border border-gray-700"
                : "bg-white shadow-lg border border-gray-100"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <BsCalendar3
                className={`text-xl ${
                  isDark ? "text-purple-400" : "text-purple-600"
                }`}
              />
              <h2
                className={`text-xl font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Calendar
              </h2>
            </div>

            <div className="calendar-container">
              <Calendar
                onChange={setDate}
                value={date}
                className={`modern-calendar ${
                  isDark ? "dark-calendar" : "light-calendar"
                }`}
              />
              <div
                className={`mt-4 p-4 rounded-xl ${
                  isDark
                    ? "bg-gray-700"
                    : "bg-gradient-to-r from-blue-50 to-purple-50"
                }`}
              >
                <p
                  className={`text-center font-medium ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Selected Date:
                </p>
                <p
                  className={`text-center text-lg font-bold mt-1 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {date.toDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        {/* <div
          className={`mt-8 rounded-2xl p-6 ${
            isDark
              ? "bg-gray-800 border border-gray-700"
              : "bg-white shadow-lg border border-gray-100"
          }`}
        >
          <h2
            className={`text-xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Quick Actions
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Add Course", color: "from-blue-500 to-blue-600" },
              {
                title: "Manage Users",
                color: "from-emerald-500 to-emerald-600",
              },
              { title: "View Reports", color: "from-amber-500 to-amber-600" },
              { title: "Settings", color: "from-purple-500 to-purple-600" },
            ].map((action, index) => (
              <button
                key={index}
                className={`p-4 rounded-xl bg-gradient-to-r ${action.color} text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg`}
              >
                {action.title}
              </button>
            ))}
          </div>
        </div> */}
      </div>

      {/* Custom CSS for Calendar */}
      <style jsx>{`
        .calendar-container .react-calendar {
          width: 100% !important;
          border: none !important;
          border-radius: 12px !important;
          overflow: hidden;
        }

        .light-calendar {
          background: white !important;
          color: #1f2937 !important;
        }

        .dark-calendar {
          background: #374151 !important;
          color: white !important;
        }

        .react-calendar__tile {
          border-radius: 8px !important;
          margin: 2px !important;
          transition: all 0.2s ease !important;
        }

        .react-calendar__tile:hover {
          background: #3b82f6 !important;
          color: white !important;
        }

        .react-calendar__tile--active {
          background: #3b82f6 !important;
          color: white !important;
        }
      `}</style>
    </div>
  );
}
