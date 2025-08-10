import { NavLink } from "react-router";
import DashboardNavbar from "../DashboardNavbar/DashboardNavbar";
import { FaPlusCircle, FaTasks, FaListAlt, FaHome } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center">
        {/* Page content here */}
        <DashboardNavbar drawer={"my-drawer"} />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-[#364253] text-white min-h-full w-70 p-4">
          {/* Sidebar content here */}
          <div className="mb-10">
            <NavLink to="/">
              <div className="flex items-center gap-3 -px-3">
                <img
                  className="w-15 h-15 rounded-full hidden md:block p-2 bg-white"
                  src={"/logo.png"}
                  alt="brand logo"
                />
                <h3 className="text-xl font-bold">BD Programming</h3>
              </div>
            </NavLink>
          </div>

          <li>
            <NavLink
              to="/dashboard/home"
              className="flex items-center gap-2 text-xl font-semibold"
            >
              <FaHome className="text-lg" />
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/addCourse"
              className="flex items-center gap-2 text-xl font-semibold"
            >
              <FaPlusCircle /> Add Course
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/manageCourse"
              className="flex items-center gap-2 text-xl font-semibold"
            >
              <FaTasks /> Manage Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/all-courses-item"
              className="flex items-center gap-2 text-xl font-semibold"
            >
              <FaListAlt /> All Courses Item
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
