import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

const AllCourses = () => {
  const courseData = useLoaderData();
  const [courses, setCourses] = useState([]);

  const handelChange = (e) => {
    const sortBy = e.target.value;
    if (sortBy === "ascending") {
      fetch(
        "https://course-management-system-server-ashen.vercel.app/all-courses",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ sortBy }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setCourses(data);
        });
    } else {
      fetch(
        "https://course-management-system-server-ashen.vercel.app/all-courses",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({}),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setCourses(data);
        });
    }
  };

  useEffect(() => {
    setCourses(courseData);
  }, [courseData]);

  return (
    <div className="py-12 w-11/12 mx-auto">
      <div className="flex items-center justify-between">
        <div className=" w-full">
          <h1 className="text-xl text-white md:text-2xl lg:text-4xl font-semibold">
            All Courses
          </h1>
        </div>
        <div className="w-full items-center flex px-4">
          <span className="text-white">Sort By </span>{" "}
          <select
            onChange={handelChange}
            defaultValue="sort"
            className="select ml-3"
          >
            <option disabled={true}>Sort By</option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-8">
        {courses.map((course) => {
          const { _id, title, description, instructor, startDate, amount } =
            course || {};
          return (
            <div
              key={_id}
              className={`max-w-lg p-4 shadow-md rounded-lg shadow-indigo-500 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]`}
            >
              <div>
                <div className="space-y-4">
                  <div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, transition: { duration: 2 } }}
                    className="text-white p-2 rounded-lg"
                  >
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">{title}</h3>
                      <p className="leading-snug">{description}</p>
                      <p className="font-semibold">Instructor: {instructor}</p>
                      <p className="font-semibold">Course Fee: {amount}</p>
                      <p className="font-semibold">
                        Course Start Date: {startDate}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllCourses;
