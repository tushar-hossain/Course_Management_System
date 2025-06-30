import React, { use } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "motion/react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

const Header = () => {
  const { isDark } = use(AuthContext);

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <div className={isDark ? "bg-primary" : "bg-[#5c2ede] md:px-3 md:py-3 p-2"}>
      <div className="slider-container w-11/12 mx-auto px-2 py-2">
        <Slider {...settings}>
          {/* slider-1 */}
          <div>
            <div className="h-[20%] md:h-[50%] lg:h-[350px] bg-[url(https://i.ibb.co/39GvJ0BG/slider-1.jpg)] bg-cover bg-center rounded-lg flex items-center justify-center relative z-0">
              <div className="absolute -z[1] inset-0 bg-linear-to-bl from-[rgba(70,70,70,0.24)] to-[rgba(8,8,8,0.69)]  h-full"></div>
              {/* slide text */}
              <div className="text-white space-y-3 text-center px-2 py-2 z-10">
                <div>
                  <motion.img
                    animate={{
                      y: [0, -100, 0],
                      transition: { duration: 5, repeat: Infinity },
                    }}
                    className="mx-auto w-20 h-20"
                    src="https://i.ibb.co/6J7YNZLV/slider-3-decore-1.png"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="md:text-xl lg:text-2xl text-center font-bold">
                    <Typewriter
                      cursor
                      cursorBlinking
                      delaySpeed={1000}
                      deleteSpeed={25}
                      loop={0}
                      typeSpeed={75}
                      words={["Learn to Code. Build Your Future."]}
                    />
                  </h3>
                  <p className="mt-5 text-center">
                    Master HTML, CSS, JavaScript, React, Node.js & MongoDB — all
                    in one platform.
                  </p>
                </div>

                <div>
                  <motion.img
                    animate={{
                      y: [0, 100, 0],
                      transition: { duration: 5, repeat: Infinity },
                    }}
                    className="mx-auto w-20 h-20"
                    src="https://i.ibb.co/ch9mhvpJ/slider-3-decore-2.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          {/* slider-2 */}
          <div>
            <div className="h-[20%] md:h-[50%] lg:h-[350px] bg-[url(https://i.ibb.co/FkWH68Sb/slider-2.jpg)] bg-cover rounded-lg flex items-center justify-center relative z-0">
              {/*  black overlay  */}
              <div className="absolute -z[1] inset-0 bg-linear-to-bl from-[rgba(70,70,70,0.24)] to-[rgba(8,8,8,0.69)]  h-full"></div>

              {/* slide text */}
              <div className="text-white space-y-3 text-center px-2 py-2 z-10 lg:grid grid-cols-3 items-center gap-3 justify-end">
                <div>
                  <motion.img
                    animate={{
                      y: [0, -100, 0],
                      transition: { duration: 5, repeat: Infinity },
                    }}
                    className="mx-auto w-20 h-20"
                    src="https://i.ibb.co/6J7YNZLV/slider-3-decore-1.png"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="md:text-xl lg:text-2xl text-center font-bold">
                    <Typewriter
                      cursor
                      cursorBlinking
                      delaySpeed={1000}
                      deleteSpeed={25}
                      loop={0}
                      typeSpeed={75}
                      words={["Start Coding Today, Succeed Tomorrow"]}
                    />
                  </h3>
                  <p className="mt-5 text-center">
                    Practical coding courses in Bangla for real-world web
                    development.
                  </p>
                </div>

                <div>
                  <motion.img
                    animate={{
                      y: [0, 100, 0],
                      transition: { duration: 5, repeat: Infinity },
                    }}
                    className="mx-auto w-20 h-20"
                    src="https://i.ibb.co/ch9mhvpJ/slider-3-decore-2.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          {/* slider-3 */}
          <div>
            <div className="h-[20%] md:h-[50%] lg:h-[350px] bg-[url(https://i.ibb.co/PGrcmDpk/slider-3.jpg)] bg-cover bg-center rounded-lg flex items-center justify-center relative z-0">
              <div className="absolute -z[1] inset-0 bg-linear-to-bl from-[rgba(70,70,70,0.24)] to-[rgba(8,8,8,0.69)]  h-full"></div>
              {/* slide text */}
              <div className="text-white space-y-3 text-center px-2 py-2 z-10">
                <div>
                  <motion.img
                    animate={{
                      y: [0, -100, 0],
                      transition: { duration: 5, repeat: Infinity },
                    }}
                    className="mx-auto w-20 h-20"
                    src="https://i.ibb.co/6J7YNZLV/slider-3-decore-1.png"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="md:text-xl lg:text-2xl text-center font-bold">
                    <Typewriter
                      cursor
                      cursorBlinking
                      delaySpeed={1000}
                      deleteSpeed={25}
                      loop={0}
                      typeSpeed={75}
                      words={["কোড শেখো, ক্যারিয়ার গড়ো"]}
                    />
                  </h3>
                  <p className="mt-5 text-center">
                    বাংলায় সহজভাবে শেখো HTML, CSS, JavaScript, React, ও Node.js
                  </p>
                </div>

                <div>
                  <motion.img
                    animate={{
                      y: [0, 100, 0],
                      transition: { duration: 5, repeat: Infinity },
                    }}
                    className="mx-auto w-20 h-20"
                    src="https://i.ibb.co/ch9mhvpJ/slider-3-decore-2.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          {/* slider-4 */}
          <div>
            <div className="h-[20%] md:h-[50%] lg:h-[350px] bg-[url(https://i.ibb.co/3YWjGCxM/slider-4.jpg)] bg-cover bg-center rounded-lg flex items-center justify-center relative z-0">
              <div className="absolute -z[1] inset-0 bg-linear-to-bl from-[rgba(70,70,70,0.24)] to-[rgba(8,8,8,0.69)]  h-full"></div>
              {/* slide text */}
              <div className="text-white space-y-3 text-center px-2 py-2 z-10">
                <div>
                  <motion.img
                    animate={{
                      y: [0, -100, 0],
                      transition: { duration: 5, repeat: Infinity },
                    }}
                    className="mx-auto w-20 h-20"
                    src="https://i.ibb.co/6J7YNZLV/slider-3-decore-1.png"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="md:text-xl lg:text-2xl text-center font-bold">
                    <Typewriter
                      cursor
                      cursorBlinking
                      delaySpeed={1000}
                      deleteSpeed={25}
                      loop={0}
                      typeSpeed={75}
                      words={["Become a Full-Stack Developer"]}
                    />
                  </h3>
                  <p className="mt-5 text-center">
                    From frontend to backend — everything you need in one place.
                  </p>
                </div>

                <div>
                  <motion.img
                    animate={{
                      y: [0, 100, 0],
                      transition: { duration: 5, repeat: Infinity },
                    }}
                    className="mx-auto w-20 h-20"
                    src="https://i.ibb.co/ch9mhvpJ/slider-3-decore-2.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          {/* slider-5 */}
          <div>
            <div className="h-[20%] md:h-[50%] lg:h-[350px] bg-[url(https://i.ibb.co/SwTZvWM7/slider-5.jpg)] bg-cover bg-center rounded-lg flex items-center justify-center relative z-0">
              <div className="absolute -z[1] inset-0 bg-linear-to-bl from-[rgba(70,70,70,0.24)] to-[rgba(8,8,8,0.69)]  h-full"></div>
              {/* slide text */}
              <div className="text-white space-y-3 text-center px-2 py-2 z-10">
                <div>
                  <motion.img
                    animate={{
                      y: [0, -100, 0],
                      transition: { duration: 5, repeat: Infinity },
                    }}
                    className="mx-auto w-20 h-20"
                    src="https://i.ibb.co/6J7YNZLV/slider-3-decore-1.png"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="md:text-xl lg:text-2xl text-center font-bold">
                    <Typewriter
                      cursor
                      cursorBlinking
                      delaySpeed={1000}
                      deleteSpeed={25}
                      loop={0}
                      typeSpeed={75}
                      words={["Hands-On Projects, Real Skills"]}
                    />
                  </h3>
                  <p className="mt-5 text-center">
                    Don’t just learn — build real applications that showcase
                    your talent.
                  </p>
                </div>

                <div>
                  <motion.img
                    animate={{
                      y: [0, 100, 0],
                      transition: { duration: 5, repeat: Infinity },
                    }}
                    className="mx-auto w-20 h-20"
                    src="https://i.ibb.co/ch9mhvpJ/slider-3-decore-2.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          {/* slider-5 */}
          <div>
            <div className="h-[20%] md:h-[50%] lg:h-[350px] bg-[url(https://i.ibb.co/gLR6s7m1/slider-6.jpg)] bg-cover bg-center rounded-lg flex items-center justify-center relative z-0">
              <div className="absolute -z[1] inset-0 bg-linear-to-bl from-[rgba(70,70,70,0.24)] to-[rgba(8,8,8,0.69)]  h-full"></div>
              {/* slide text */}
              <div className="text-white space-y-3 text-center px-2 py-2 z-10">
                <div>
                  <motion.img
                    animate={{
                      y: [0, -100, 0],
                      transition: { duration: 5, repeat: Infinity },
                    }}
                    className="mx-auto w-20 h-20"
                    src="https://i.ibb.co/6J7YNZLV/slider-3-decore-1.png"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="md:text-xl lg:text-2xl text-center font-bold">
                    <Typewriter
                      cursor
                      cursorBlinking
                      delaySpeed={1000}
                      deleteSpeed={25}
                      loop={0}
                      typeSpeed={75}
                      words={["Certification That Matters"]}
                    />
                  </h3>
                  <p className="mt-5 text-center">
                    Earn recognized certificates after every course you
                    complete.
                  </p>
                </div>

                <div>
                  <motion.img
                    animate={{
                      y: [0, 100, 0],
                      transition: { duration: 5, repeat: Infinity },
                    }}
                    className="mx-auto w-20 h-20"
                    src="https://i.ibb.co/ch9mhvpJ/slider-3-decore-2.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Header;
