import React from "react";
import { motion } from "motion/react";

const Tips = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {/* card 1 */}
      <div className="bg-[#EEEBFF] py-10 rounded-lg text-center">
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mx-auto"
          src="https://i.ibb.co/wrBS8gZJ/h4-banner-1.png"
          alt="card image"
        />
        <div>
          <h1 className="mt-5 text-xl md:text-2xl font-semibold text-black">
            Discover your professional{" "}
            <span className="text-[#7659FF]">strengths and weaknesses</span>
          </h1>
        </div>
      </div>

      {/* card 2 */}
      <div className="bg-[#EEEBFF] py-10 rounded-lg text-center">
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mx-auto"
          src="https://i.ibb.co/6cbKb4DK/h4-banner-2.png"
          alt="card image"
        />
        <div>
          <h1 className="mt-5 text-xl md:text-2xl font-semibold text-black">
            Get <span className="text-[#7659FF]">personalized course </span>{" "}
            recommendations to upskill yourself
          </h1>
        </div>
      </div>

      {/* card 3 */}
      <div className="bg-[#EEEBFF] py-10 rounded-lg text-center">
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mx-auto"
          src="https://i.ibb.co/CKs1pVYK/h4-banner-3.png"
          alt="card image"
        />
        <div>
          <h1 className="mt-5 text-xl md:text-2xl font-semibold text-black">
            Explore{" "}
            <span className="text-[#7659FF]">
              careers that match your personality,
            </span>{" "}
            your strengths, and your interest
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Tips;
