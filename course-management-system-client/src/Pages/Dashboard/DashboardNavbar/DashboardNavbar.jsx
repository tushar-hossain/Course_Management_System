import { use } from "react";
import { Outlet } from "react-router";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";

export default function DashboardNavbar({ drawer }) {
  const { user } = use(AuthContext);

  return (
    <div className="drawer">
      <input id={drawer} type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col gap-3">
        {/* Navbar */}
        <div className="navbar bg-[#364253] w-full">
          <div className="flex-none lg:hidden">
            <label
              htmlFor={drawer}
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          {/* profile */}
          <div className="mx-2 flex-1 px-2"></div>
          <div className="flex-none">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="user profile"
                    src={user?.photoURL}
                  />
                </div>
              </div>
            </ul>
          </div>
          {/*  */}
        </div>
        {/* Page content here */}
        <div className="m-5">
          <Outlet />
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
