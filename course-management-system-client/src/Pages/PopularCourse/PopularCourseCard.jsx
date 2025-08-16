import { use } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CiClock2 } from "react-icons/ci";
import { PiStudent } from "react-icons/pi";
import { Link } from "react-router";

const PopularCourseCard = ({ PopularCoursePromise }) => {
  const courses = use(PopularCoursePromise);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container my-8">
      <Slider {...settings}>
        {courses?.map((course) => (
          <div key={course._id} className="px-2 h-96">
            {" "}
            {/* Added key and padding wrapper */}
            <div className="bg-base-100 p-4 rounded-lg h-full shadow-md hover:shadow-lg transition-shadow duration-300">
              <Link
                to={`/course-details/${course._id}`}
                className="block h-full"
              >
                <div className="flex flex-col h-full">
                  {/* Image container with fixed aspect ratio */}
                  <div className="relative overflow-hidden rounded-md mb-4">
                    <img
                      className="w-full h-50 object-cover transition-transform duration-300 hover:scale-105"
                      src={course?.image}
                      alt={course?.title || "Course image"}
                    />
                  </div>

                  {/* Content container */}
                  <div className="flex flex-col flex-grow space-y-3">
                    <h1 className="font-bold text-primary text-lg line-clamp-2">
                      {course?.title}
                    </h1>

                    <div className="flex justify-between items-center text-sm text-gray-600">
                      <p className="flex gap-2 items-center">
                        <CiClock2 size={18} />
                        <span>{course?.date}</span>
                      </p>
                      <p className="flex gap-1 items-center">
                        <PiStudent size={18} />
                        <span>{course?.enrolled}</span>
                        <span className="text-xs">Students</span>
                      </p>
                    </div>

                    <p className="text-sm text-gray-700 flex-grow line-clamp-3">
                      {course?.description?.slice(0, 100)}...
                    </p>

                    {/* Price at bottom */}
                    <div className="mt-auto pt-3">
                      <h3 className="text-xl md:text-2xl font-bold text-primary">
                        ${course?.price}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PopularCourseCard;
