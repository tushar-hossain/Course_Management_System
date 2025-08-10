import React, { Suspense } from "react";
import Course from "../Course/Course";
import Loading from "../../components/Loading";
import PopularCourse from "../PopularCourse/PopularCourse";
import ChooseCourse from "../ChooseCourse/ChooseCourse";
import Tips from "../Tips/Tips";
import Header from "./Header";
import MonthsCourse from "../MonthsCourse/MonthsCourse";
import { categoryData } from "../../components/api/ApiCall";
import Traning from "../Traning/Traning";

const trainingCourse = fetch("http://localhost:3000/courses").then((res) =>
  res.json()
);

const sliders = fetch(`http://localhost:3000/api/slider`).then((res) =>
  res.json()
);

const Home = () => {
  return (
    <div>
      {/* slider */}
      <section>
        <Suspense fallback={<Loading />}>
          <Header sliders={sliders} />
        </Suspense>
      </section>

      {/* monthly courses */}
      <section>
        <MonthsCourse />
      </section>

      {/* Courses Section */}
      <section className="w-11/12 mx-auto my-12">
        <Suspense fallback={<Loading />}>
          <div>
            <Course trainingCourse={trainingCourse} categorys={categoryData} />
          </div>
        </Suspense>
      </section>

      {/* Popular Course section */}
      <section className="w-11/12 mx-auto my-12">
        <PopularCourse />
      </section>

      {/* Why Choose  */}
      <section className="w-11/12 mx-auto my-12">
        <ChooseCourse />
      </section>

      {/* Tips */}
      <section className="w-11/12 mx-auto my-12">
        <Tips />
      </section>

      {/* traing */}
      <section className="w-11/12 mx-auto my-12">
        <Traning />
      </section>
    </div>
  );
};

export default Home;
