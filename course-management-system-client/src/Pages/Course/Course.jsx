import React, { use, useEffect, useState } from "react";
import CourseCard from "./CourseCard";

const Course = ({ latestCoursesPromise }) => {
  const coursesData = use(latestCoursesPromise);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses(coursesData);
  }, [coursesData]);

  return (
    <div className="bg-[url(https://i.ibb.co/Lz7rWXt8/background.jpg)] p-5 rounded-lg">
      <h1 className="text-xl md:text-2xl lg:text-4xl my-5 font-bold text-white">
        Latest Course
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Course;
