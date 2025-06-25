import axios from "axios";
import React, { use, useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const EnrolledCourseList = ({ MyEnrolledCoursesPromise }) => {
  const coursesData = use(MyEnrolledCoursesPromise);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses(coursesData);
  }, [coursesData]);

  const handelDeleteEnroll = (id) => {
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
            `https://course-management-system-server-ashen.vercel.app/enrollments/${id}`
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
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Course Title</th>
              <th>Instructor</th>
              <th>Level</th>
              <th>Duration</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {courses.map((course, index) => {
              const { _id, title, image, level, instructor, duration } =
                course || {};
              return (
                <tr key={_id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={image} alt="users image" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{title}</td>
                  <td>{instructor}</td>
                  <td>{level}</td>
                  <td>{duration}</td>
                  <th className="flex items-center gap-3">
                    <button
                      onClick={() => handelDeleteEnroll(_id)}
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

export default EnrolledCourseList;
