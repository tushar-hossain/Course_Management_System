import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { motion } from "motion/react";
import { Link } from "react-router";

const CourseCard = ({ course }) => {
  const { isDark } = use(AuthContext);
  const { _id, title, description, image } = course || {};
  return (
    <div
      className={`w-11/12 p-2 mx-auto shadow-md ${
        isDark ? "bg-primary text-white" : "bg-[#5c2ede] text-white"
      } rounded-lg hover:shadow-indigo-500 h-full hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]`}
    >
      <div className="flex flex-col justify-between h-full">
        <div className="flex-1">
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
            className="p-2"
          >
            <div className="space-y-2">
              <h3 className="font-bold">{title}</h3>
              <p className="leading-snug text-sm">{description}</p>
            </div>
          </motion.div>
        </div>

        {/* This wrapper ensures the button sticks to the bottom */}
        <div className="mt-4">
          <Link to={`/course-details/${_id}`}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`btn w-full font-bold ${
                isDark ? "bg-primary border-white" : "bg-[#5c2ede] text-white"
              }`}
            >
              Details
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
