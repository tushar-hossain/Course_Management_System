import { Link } from "react-router";
import { CiClock2 } from "react-icons/ci";
import { PiStudent } from "react-icons/pi";

const CourseCard = ({ course }) => {
  const { _id, description, enrolled, image, price, title, date } =
    course || {};

  return (
    <div className="bg-base-300 p-2 rounded-lg flex flex-col">
      <Link to={`/course-details/${_id}`}>
        <div className="flex-1">
          <div>
            <img className="h-40 rounded-md w-full" src={image} alt="" />
          </div>
          <div className="space-y-3 mt-4">
            <h1 className="text-xl font-bold text-primary">{title}</h1>
            <div className="flex justify-between items-center">
              <p className="flex gap-3 items-center">
                <CiClock2 size={20} /> {date}
              </p>
              <p className="flex gap-1 items-center">
                <PiStudent size={20} />
                <span className="flex">{enrolled} </span>
                <span className="text-xs">Students</span>
              </p>
            </div>
            <p>{description.slice(0, 80)}...</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-bold text-primary mt-3">
            ${price}
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;
