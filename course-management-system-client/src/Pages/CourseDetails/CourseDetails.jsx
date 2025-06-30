import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";

const CourseDetails = () => {
  const { user } = use(AuthContext);
  const [courses, setCourses] = useState([]);
  const { id } = useParams();
  const [isEnrolled, setIsEnrolled] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://course-management-system-server-ashen.vercel.app/courses/${id}`
      )
      .then((res) => {
        setCourses(res.data);
      });
  }, [courses, isEnrolled, id]);

  // check user is already enrolled
  useEffect(() => {
    axios
      .get(
        `https://course-management-system-server-ashen.vercel.app/enrollments/${id}`
      )
      .then((res) => {
        if (res.data?.courseId) {
          setIsEnrolled(true);
        }
      })
      .catch(() => {});
  }, [user, id]);

  // handel Enroll button
  const handelEnroll = () => {
    if (!isEnrolled) {
      axios
        .post(
          "https://course-management-system-server-ashen.vercel.app/enrollments",
          {
            email: user?.email,
            courseId: id,
          }
        )
        .then((res) => {
          if (res.data.insertedId) {
            setIsEnrolled(true);
            toast.success("Enroll successful.");

            // update enrolled seats
            axios
              .patch(
                `https://course-management-system-server-ashen.vercel.app/courses/${id}`,
                {}
              )
              .then((res) => {
                if (res.data?.modifiedCount) {
                  toast.success("Your seat booked");
                }
              })
              .catch(() => {
                toast.error("Please try again Enroll");
              });
          }
        })
        .catch((err) => {
          toast.error(err.response?.data?.message);
        });
    } else {
      axios
        .delete(
          `https://course-management-system-server-ashen.vercel.app/cancel/${id}`
        )
        .then((res) => {
          if (res.data.deletedCount) {
            setIsEnrolled(false);
            toast.success("Course enroll cancel");
          }
        })
        .catch(() => {});
    }
  };

  const {
    title,
    description,
    image,
    date,
    time,
    instructor,
    duration,
    level,
    tags,
    seats,
    enrolled,
  } = courses || {};

  return (
    <div className="py-12 text-white">
      <div className="max-w-lg p-4 shadow-md mx-auto rounded-lg shadow-indigo-500 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={image}
              alt="course images"
              className="w-[300px] mx-auto rounded-md h-[300px] dark:bg-gray-500"
            />
          </div>
          <div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">{title}</h3>
              <p>
                {tags?.map((sk, index) => (
                  <span className="mr-3 font-semibold" key={index}>
                    {sk}
                  </span>
                ))}
              </p>
              <p className="leading-snug">{description}</p>
              <p className="font-semibold">Instructor: {instructor}</p>
            </div>
            <div className="flex items-center gap-4">
              <p>
                <span className="font-semibold">Date: </span>
                {date}
              </p>
              <p>{time}</p>
            </div>
            <p>
              <span className="font-semibold">Duration: </span>
              {duration}
            </p>
            <p>
              <span className="font-semibold">Level: </span>
              {level}
            </p>
            <p>
              <span className="font-semibold">Total Enrolled : </span>
              {enrolled}
            </p>
            <p>
              <span className="font-semibold">Seats: </span>
              {seats}
            </p>
          </div>
          {/* button enroll */}

          <div>
            {user ? (
              seats > 0 ? (
                <button
                  onClick={handelEnroll}
                  className={`w-full text-white py-2 rounded-lg transition ${
                    isEnrolled
                      ? "bg-[#5c2ede] cursor-pointer"
                      : "bg-[#5c2ede] cursor-pointer"
                  } border`}
                >
                  {isEnrolled ? "Enrolled" : "Enroll Now"}
                </button>
              ) : (
                <p className="font-semibold text-red-600 text-center text-xl">
                  No seats left
                </p>
              )
            ) : (
              <button
                disabled
                className="bg-[#5c2ede] btn btn-primary border w-full text-white py-2 rounded-lg"
              >
                Login to Enroll
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
