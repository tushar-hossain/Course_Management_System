import { use, useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import { Link } from "react-router";

const Course = ({ trainingCourse, categorys }) => {
  const coursesData = use(trainingCourse);
  const category = use(categorys);

  const [courses, setCourses] = useState([]);
  const [categorysItem, setCategorysItem] = useState([]);

  const handelSubmit = (categoryName) => {
    console.log(categoryName);

    
  };

  useEffect(() => {
    setCourses(coursesData);
    setCategorysItem(category);
  }, [coursesData, category]);

  console.log(courses);

  return (
    <div className="bg-base-100 p-3 rounded-lg">
      <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-primary text-center">
        Training Subjects To Suit You
      </h1>

      <div className="flex items-center justify-center my-8">
        <div className="flex flex-wrap gap-3">
          {categorysItem?.map((item) => {
            return (
              <div
                key={item._id}
                className=" bg-secondary px-3 py-2 text-white rounded-lg"
              >
                <Link to={"/"} onClick={() => handelSubmit(item?.category)}>
                  {item?.category}
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3  my-5">
        {courses?.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Course;
