import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";

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
          <h1 className="text-xl text-primary md:text-2xl lg:text-4xl font-semibold">
            All Courses
          </h1>
        </div>

        <div className="w-full items-center flex px-4">
          <span className="text-primary">Sort By </span>{" "}
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

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-8">
        {courses.map((course) => {
          const { _id, description, image, title } = course || {};
          return (
            <div className="bg-base-300 p-2 rounded-lg flex flex-col">
              <div className="flex-1">
                <div>
                  <img className="h-40 rounded-md w-full" src={image} alt="" />
                </div>
                <div className="space-y-3 mt-4">
                  <h1 className="text-xl font-bold text-primary">{title}</h1>
                  <p>{description.slice(0, 80)}...</p>
                </div>
              </div>
              <Link
                to={`/course-details/${_id}`}
                className="bg-secondary py-2 rounded-md text-center text-white"
              >
                View Details
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllCourses;
