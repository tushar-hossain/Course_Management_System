import { Link } from "react-router";
import { CiClock2 } from "react-icons/ci";
import { PiStudent } from "react-icons/pi";

const CourseCard = ({ course }) => {
  const {
    _id,
    description,
    image,
    price,
    title,
    duration = "8 weeks",
    students = "120",
  } = course || {};

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-blue-500/10">
      <Link to={`/course-details/${_id}`} className="block">
        <div className="relative overflow-hidden">
          {/* Course Image */}
          <div className="relative h-48 overflow-hidden">
            <img
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              src={image}
              alt={title}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Price Badge */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1.5 rounded-full text-sm font-bold shadow-lg">
              ${price}
            </div>

            {/* Popular Badge (optional) */}
            <div className="absolute top-4 left-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-2 py-1 rounded-full text-xs font-medium shadow-lg">
              Popular
            </div>
          </div>

          {/* Course Content */}
          <div className="p-6">
            {/* Course Title */}
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
              {title}
            </h3>

            {/* Course Description */}
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
              {description?.slice(0, 120)}...
            </p>

            {/* Course Meta Info */}
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
              <div className="flex items-center gap-1">
                <CiClock2 className="w-4 h-4" />
                <span>{duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <PiStudent className="w-4 h-4" />
                <span>{students} students</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ${price}
              </div>
              <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;
