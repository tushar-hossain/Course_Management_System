import React, { Suspense } from "react";
import Course from "../Course/Course";
import Loading from "../../components/Loading";
import PopularCourse from "../PopularCourse/PopularCourse";
import ChooseCourse from "../ChooseCourse/ChooseCourse";
import Tips from "../Tips/Tips";
import Header from "./Header";

const latestCoursesPromise = fetch(
  "https://course-management-system-server-ashen.vercel.app/courses"
).then((res) => res.json());

const Home = () => {
  return (
    <div>
      {/* slider */}
      <section className="mb-8">
        <Header />
      </section>

      {/* Courses Section */}
      <section className="w-11/12 mx-auto  py-8">
        <Suspense fallback={<Loading />}>
          <div>
            <Course latestCoursesPromise={latestCoursesPromise} />
          </div>
        </Suspense>
      </section>

      {/* Popular Course section */}
      <section className="w-11/12 mx-auto py-8">
        <PopularCourse />
      </section>

      {/* Why Choose  */}
      <section className="w-11/12 mx-auto py-8">
        <ChooseCourse />
      </section>

      {/* card */}
      <section className="w-11/12 mx-auto py-8">
        <Tips />
      </section>
    </div>
  );
};

export default Home;
