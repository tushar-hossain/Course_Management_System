import axios from "axios";
import React, { use, useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router";
import Swal from "sweetalert2";

const PostedCourseList = ({ ManageCoursePromise }) => {
  const coursesData = use(ManageCoursePromise);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses(coursesData);
  }, [coursesData]);

  const handelDelete = (id) => {
    Swal.fire({
      title: "Do you want to delete the course?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't delete`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        axios
          .delete(
            `https://course-management-system-server-ashen.vercel.app/courses/${id}`
          )
          .then((res) => {
            if (res.data.deletedCount) {
              const remainingCourse = courses.filter(
                (course) => course._id !== id
              );
              setCourses(remainingCourse);
            }
          })
          .catch(() => {});
        Swal.fire("Delete!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not delete", "", "info");
      }
    });
  };
  return (
    <div>
      <div className="overflow-x-auto text-white">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-base-300">
              <th>#</th>
              <th>Name</th>
              <th>Course</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {courses.map((course, index) => {
              const { _id, name, description, instructor, image, title } =
                course || {};
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
                  <td>{description}</td>
                  <th className="flex items-center gap-3">
                    <Link to={`/editCourse/${_id}`}>
                      <button className="p-3 bg-base-300 rounded-lg cursor-pointer hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] text-[#5d2ede]">
                        {" "}
                        <FaEdit size={20} />{" "}
                      </button>
                    </Link>
                    <button
                      onClick={() => handelDelete(_id)}
                      className="p-3 bg-base-300 rounded-lg cursor-pointer hover:text-red-600"
                    >
                      {" "}
                      <FaTrashAlt size={20} />{" "}
                    </button>
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

export default PostedCourseList;
