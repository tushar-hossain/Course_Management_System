import React, { use } from "react";
import { GrCertificate } from "react-icons/gr";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { motion } from "motion/react";

const PopularCourseCard = ({ PopularCoursePromise }) => {
  const courses = use(PopularCoursePromise);
  const { isDark } = use(AuthContext);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {courses.map((course) => {
          const { _id, title, description, duration, level, tags } =
            course || {};
          return (
            <motion.div
              key={_id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              className={`${
                isDark
                  ? "bg-linear-to-r from-[#5c2ede] text-black"
                  : "bg-linear-to-r from-[#5c2ede] text-white"
              } p-5 rounded-lg space-y-3 hover:shadow-2xl shadow-[#5c2ede]`}
            >
              <div>
                <h1 className="text-xl md:text-2xl font-semibold mb-3">
                  {title}
                  <p className="text-sm">
                    {tags.map((item, index) => (
                      <span key={index} className="mr-1">
                        {item}
                      </span>
                    ))}
                  </p>
                </h1>

                <p>{description}</p>
              </div>
              <hr />
              <div className="flex items-center gap-3">
                <GrCertificate size={20} />
                <p>
                  with{" "}
                  <span className="font-bold">Professional Certification</span>
                </p>
              </div>
              <hr />

              <div className="flex items-center justify-between">
                <p>{level}</p>
                <p>{duration}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularCourseCard;
