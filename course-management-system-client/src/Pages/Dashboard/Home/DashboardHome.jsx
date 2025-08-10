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
} from "recharts";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaUser } from "react-icons/fa";
import { SiCoursera } from "react-icons/si";
import { BiBookmark } from "react-icons/bi";

const dashboardData = fetch(`http://localhost:3000/api/dashboard`).then((res) =>
  res.json()
);

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

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

  const data = [
    { name: "users", uv: newData.user },
    { name: "course", uv: newData.course },
    { name: "enrollments", uv: newData.enrollments },
    { name: "instructor", uv: newData.instructor },
  ];

  return (
    <div
      className={`py-12 px-4 rounded-md ${
        isDark ? "bg-white text-black" : "bg-white text-black"
      }`}
    >
      <h1>Wellcome to Dashboard</h1>
      {/* user */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        <div className="flex items-center gap-5 p-4 border rounded-lg">
          <FaUser size={25} className="text-primary" />
          <h1 className="font-bold">User : {newData.user}</h1>
        </div>
        <div className="flex items-center gap-5 p-4 border rounded-lg">
          <SiCoursera size={25} className="text-primary" />
          <h1 className="font-bold">Course : {newData.course}</h1>
        </div>
        <div className="flex items-center gap-5 p-4 border rounded-lg">
          <BiBookmark size={25} className="text-primary" />
          <h1 className="font-bold">Enrollments : {newData.enrollments}</h1>
        </div>
        <div className="flex items-center gap-5 p-4 border rounded-lg">
          <FaUser size={25} className="text-primary" />
          <h1 className="font-bold">Instructor : {newData.instructor}</h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* chart */}
        <div>
          <ResponsiveContainer width={350} height={300}>
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Bar
                dataKey="uv"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{ position: "top" }}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* calander */}
        <div>
          <div className="max-w-md mx-auto mt-10 rounded shadow">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Select a Date
            </h2>
            <Calendar
              onChange={setDate}
              value={date}
              className="react-calendar"
            />
            <p className="mt-4 text-center">
              Selected Date: <strong>{date.toDateString()}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
