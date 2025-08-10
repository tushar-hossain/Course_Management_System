import React, { Component, use } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router";
import { CiClock2 } from "react-icons/ci";
import { PiStudent } from "react-icons/pi";

const PopularCourseCard = ({ PopularCoursePromise }) => {
  const courses = use(PopularCoursePromise);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <div>
      <div className="slider-container my-8">
        <Slider {...settings}>
          {courses?.map((course) => {
            return (
              <div className="bg-base-100 p-2 rounded-lg h-full">
                <Link to={`/course-details/${course._id}`}>
                  <div className="flex flex-col">
                    <div>
                      <img
                        className="h-30 md:h-60 rounded-md w-full"
                        src={course?.image}
                        alt=""
                      />
                    </div>
                    <div className="space-y-3 mt-4">
                      <h1 className="font-bold text-primary">
                        {course?.title}
                      </h1>
                      <div className="flex justify-between items-center">
                        <p className="flex gap-3 items-center">
                          <CiClock2 size={20} /> {course?.date}
                        </p>
                        <p className="flex gap-1 items-center">
                          <PiStudent size={20} />
                          <span className="flex">{course?.enrolled} </span>
                          <span className="text-xs">Students</span>
                        </p>
                      </div>
                      <p className="text-xs">
                        {course?.description.slice(0, 80)}...
                      </p>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-primary mt-3">
                        ${course?.price}
                      </h3>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default PopularCourseCard;
