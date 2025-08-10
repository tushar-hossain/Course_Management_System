import React, { use } from "react";
import { FaEdit } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

const CoursesItem = () => {
  const courseData = useLoaderData();
  const { isDark } = use(AuthContext);

  return (
    <div
      className={`py-12 px-4 rounded-md ${
        isDark ? "bg-black" : "bg-black"
      }`}
    >
      <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold mb-10 text-primary">
        My Posted Course
      </h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Course</th>
              <th>Description</th>
              <th>Course Fee</th>
              <th>Start Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {courseData.map((course, index) => {
              const {
                _id,
                name,
                description,
                instructor,
                image,
                title,
                amount,
                startDate,
              } = course || {};
              return (
                <tr key={_id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{name}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {title}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {instructor}
                    </span>
                  </td>
                  <td>{description.slice(0, 20)}...</td>
                  <td>{amount}</td>
                  <td>{startDate}</td>
                  <th className="flex items-center gap-3">
                    <Link to={`/course-details/${_id}`}>
                      <button className="p-3 bg-base-300 rounded-lg cursor-pointer hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] text-[#5d2ede]">
                        {" "}
                        <FaArrowUpRightFromSquare size={20} />{" "}
                      </button>
                    </Link>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoursesItem;
