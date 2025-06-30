import React from "react";
import { useLoaderData } from "react-router";

const AllCourses = () => {
  const courseData = useLoaderData();
  

  return (
    <div className="py-12 w-11/12 mx-auto">
      <h1 className="text-xl text-white md:text-2xl lg:text-4xl font-semibold">
        All Courses
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-8">
        {courseData.map((course) => {
          const { _id, title, description, instructor } = course || {};
          return (
            <div
              key={_id}
              className={`max-w-lg p-4 shadow-md rounded-lg shadow-indigo-500 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]`}
            >
              <div className="space-y-4">
                <div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, transition: { duration: 2 } }}
                  className="bg-gray-300 p-2 rounded-lg text-black"
                >
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="leading-snug">{description}</p>
                    <p className="font-semibold">Instructor: {instructor}</p>
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
