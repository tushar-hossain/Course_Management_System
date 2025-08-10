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
    _id,
    access,
    certificate,
    certification,
    courseLevel,
    description,
    duration,
    image,
    language,
    price,
    title,
    whatYoullLearn,
    whoThisCourseIsFor,
    seats,
  } = courses || {};

  return (
    <div className="w-11/12 mx-auto my-12 bg-base-100 p-3 rounded-md">
      <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-primary my-8 text-center">
        {title}
      </h1>

      <div className="grid grid-cols-12 gap-5">
        {/* left side */}
        <div className="col-span-12 md:col-span-8 space-y-3">
          <p>{description}</p>
          <div>
            <h3 className="text-xl font-bold md:text-2xl text-primary">
              Certification
            </h3>
            <p>{certification}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold md:text-2xl text-primary">
              Who this course is for
            </h3>
            <p>{whoThisCourseIsFor}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold md:text-2xl text-primary">
              What you'll learn in this course:
            </h3>
            <p>{whatYoullLearn}</p>
          </div>
        </div>

        {/* right side */}
        <div className="col-span-12 md:col-span-4">
          {/* image */}
          <div className="space-y-2">
            <img
              src={image}
              alt="course images"
              className="h-50 w-full rounded-lg"
            />
          </div>
          <div className="px-4 space-y-3 mt-8">
            <p className="flex justify-between font-bold text-xl text-primary">
              <span>Price:</span> <span>${price}</span>
            </p>
            <p className="flex justify-between">
              <span className=" font-semibold text-primary">Course Level:</span>{" "}
              <span>{courseLevel}</span>
            </p>
            <p className="flex justify-between">
              <span className=" font-semibold text-primary">Duration:</span>{" "}
              <span>{duration}</span>
            </p>
            <p className="flex justify-between">
              <span className=" font-semibold text-primary">Certificate:</span>{" "}
              <span>{certificate}</span>
            </p>
            <p className="flex justify-between">
              <span className=" font-semibold text-primary">Language:</span>{" "}
              <span>{language}</span>
            </p>
            <p className="flex justify-between">
              <span className=" font-semibold text-primary">Access:</span>{" "}
              <span>{access}</span>
            </p>
          </div>

          {/* button enroll */}
          <div className="my-5">
            {user ? (
              seats > 0 ? (
                <button
                  onClick={handelEnroll}
                  className="bg-secondary rounded-md px-4 py-2 text-white w-full cursor-pointer"
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
