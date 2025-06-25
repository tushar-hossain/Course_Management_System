import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { motion } from "motion/react";
import { Link } from "react-router";

const CourseCard = ({ course }) => {
  const { isDark } = use(AuthContext);
  const { _id, title, description, image, date, time, instructor } =
    course || {};
  return (
    <div
      className={`max-w-lg p-4 shadow-md ${
        isDark ? "bg-white text-black" : "bg-black text-white"
      } rounded-lg hover:shadow-indigo-500`}
    >
      <div className="space-y-4">
        <div className="space-y-2">
          <img
            src={image}
            alt="course images"
            className="block object-cover object-center w-full rounded-md h-[200px] dark:bg-gray-500"
          />
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, transition: { duration: 2 } }}
          className=" hover:bg-gray-300 p-2 rounded-lg hover:text-black"
        >
          <div className="space-y-2">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="leading-snug">{description}</p>
            <p className="font-semibold">Instructor: {instructor}</p>
          </div>
          <div className="flex items-center gap-4">
            <p>Date: {date}</p>
            <p>{time}</p>
          </div>

          <Link to={`/course-details/${_id}`}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="btn w-full font-bold bg-[#5c2ede] mt-3"
            >
              Details
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default CourseCard;
