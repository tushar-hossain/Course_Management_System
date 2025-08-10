import { Suspense } from "react";
import PopularCourseCard from "./PopularCourseCard";
import Loading from "../../components/Loading";


const PopularCoursePromise = fetch(
  "https://course-management-system-server-ashen.vercel.app/popular-course"
).then((res) => res.json());

const PopularCourse = () => {


  return (
    <div className="">
      <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-primary text-center">
        Our Most Popular Courses
      </h1>

      <div>
        <Suspense fallback={<Loading />}>
          <PopularCourseCard PopularCoursePromise={PopularCoursePromise} />
        </Suspense>
      </div>
    </div>
  );
};

export default PopularCourse;
