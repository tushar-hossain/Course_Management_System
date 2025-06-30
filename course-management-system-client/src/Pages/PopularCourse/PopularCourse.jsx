import React, { Suspense } from "react";
import PopularCourseCard from "./PopularCourseCard";
import Loading from "../../components/Loading";
import { motion } from "motion/react";

const PopularCoursePromise = fetch(
  "https://course-management-system-server-ashen.vercel.app/popular-course"
).then((res) => res.json());

const PopularCourse = () => {
  return (
    <div className="bg-[url(https://i.ibb.co/N6gHM2LR/bg.jpg)] bg-no-repeat bg-center bg-cover py-10 px-8 rounded-lg overflow-hidden">
      <div className="relative z-10">
        <h1 className="text-xl md:text-2xl lg:text-4xl my-5 font-bold text-white z-10">
          Popular Course
        </h1>
        <div className=" absolute -z-[1]">
          <motion.img
            animate={{
              y: [0, -150, 0],
              transition: { duration: 8, repeat: Infinity },
            }}
            src="https://i.ibb.co/vb7pv7F/h2-path-1.png"
            alt=""
          />
        </div>
        <Suspense fallback={<Loading />}>
          <PopularCourseCard PopularCoursePromise={PopularCoursePromise} />
        </Suspense>
        <div className=" absolute end-0 -z-[1]">
          <div>
            <motion.img
              animate={{
                y: [0, -150, 0],
                transition: { duration: 8, repeat: Infinity },
              }}
              className=" mx-auto"
              src="https://i.ibb.co/Rp4DK0YF/h3-path-1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCourse;
