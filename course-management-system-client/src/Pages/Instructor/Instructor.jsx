import React from "react";
import { useLoaderData } from "react-router";

const Instructor = () => {
  const data = useLoaderData();

  return (
    <div className="py-12 w-11/12 mx-auto text-white">
      <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold">
        Instructor
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {data.map((instructor) => {
          const {
            _id,
            name,
            email,
            profileImage,
            bio,
            specialization,
            rating,
            coursesCount,
            totalStudents,
            socialLinks,
          } = instructor || {};
          return (
            <div key={_id} className=" p-4 shadow-md mt-5">
              <div className="flex justify-between pb-4 border-bottom"></div>
              <div className="space-y-4">
                <div>
                  <img
                    src={profileImage}
                    alt=""
                    className="block object-cover object-center w-full rounded-md h-60"
                  />
                </div>
                <h1 className="text-xl md:text-2xl font-semibold">{name}</h1>
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold">{bio}</h3>

                  <p className="flex gap-2">
                    {specialization.map((sp, index) => (
                      <span key={index}>{sp}</span>
                    ))}
                  </p>
                  <p>Courses Count: {coursesCount}</p>
                  <p>Total Students: {totalStudents}</p>
                  <p>Rating: {rating}</p>
                  <>
                    Social Links: <p>Linkedin: {socialLinks.linkedin}</p>
                    <p>Twitter: {socialLinks.twitter}</p>
                    <p>Email: {email}</p>
                  </>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Instructor;
