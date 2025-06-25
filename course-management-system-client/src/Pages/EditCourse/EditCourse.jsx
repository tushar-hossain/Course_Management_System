import React, { use, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";

const EditCourse = () => {
  const course = useLoaderData();
  const { id } = useParams();
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const {
    title,
    image,
    description,
    level,
    instructor,
    duration,
    seats,
    date,
    tags,
    time,
  } = course || {};

  const [times, setTime] = useState(time);

  const handleTimeChange = (e) => {
    const value = e.target.value;
    if (value) {
      const [hourStr, minute] = value.split(":");
      let hour = parseInt(hourStr);
      const ampm = hour >= 12 ? "PM" : "AM";
      hour = hour % 12;
      setTime(`${hour}:${minute} ${ampm}`);
    }
  };

  const handelCourseSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formDate = new FormData(form).entries();
    const data = Object.fromEntries(formDate);
    const { tags, ...courseData } = data;
    const newTags = tags.split(",").map((tag) => tag.trim());
    courseData.tags = newTags;
    courseData.time = times;

    // updated data and send to server side
    axios
      .put(
        `https://course-management-system-server-ashen.vercel.app/courses/${id}`,
        courseData
      )
      .then((res) => {
        if (res.data.modifiedCount) {
          toast.success("Updated course successfully.");
          navigate("/manageCourse");
        }
      })
      .catch(() => {
        toast.error("Failed to update course.");
      });
  };

  return (
    <div className="w-11/12 mx-auto py-12">
      <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold">
        Edit Course
      </h1>

      <form
        onSubmit={handelCourseSubmit}
        className="bg-gray-300 py-8 px-15 rounded-lg mt-5"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="title" className="text-sm">
              Course Title
            </label>
            <input
              type="text"
              name="title"
              defaultValue={title}
              required
              placeholder="Enter Course Title"
              className="w-full rounded-md p-2 bg-base-100 active:bg-base-100"
            />
          </div>
          {/* photo url */}
          <div>
            <label htmlFor="image" className="text-sm">
              Photo URL
            </label>
            <input
              type="url"
              required
              name="image"
              defaultValue={image}
              placeholder="Enter  Photo URL"
              className="w-full rounded-md p-2 bg-base-100 active:bg-base-100"
            />
          </div>
          {/* description */}
          <div>
            <label htmlFor="description" className="text-sm">
              Course Description
            </label>
            <input
              type="text"
              required
              name="description"
              defaultValue={description}
              placeholder="Enter Description"
              className="w-full rounded-md p-2 bg-base-100 active:bg-base-100"
            />
          </div>
          {/* course level */}
          <div>
            <label htmlFor="level" className="text-sm">
              Course Level
            </label>
            <select defaultValue={level} className="select w-full" name="level">
              <option disabled={true}>Select Course Level</option>
              <option value="Beginner">Beginner</option>
              <option value="Beginner to Intermediate">
                Beginner to Intermediate
              </option>
              <option value="Intermediate">Intermediate</option>
              <option value="Intermediate to Advanced">
                Intermediate to Advanced
              </option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
          {/* instructor */}
          <div>
            <label htmlFor="instructor" className="text-sm">
              Instructor Name
            </label>
            <input
              type="text"
              required
              name="instructor"
              defaultValue={instructor}
              placeholder="Enter Instructor Name"
              className="w-full rounded-md p-2 bg-base-100 active:bg-base-100"
            />
          </div>
          {/* tags */}
          <div>
            <label htmlFor="tags" className="text-sm">
              Skill
            </label>
            <input
              type="text"
              required
              name="tags"
              defaultValue={tags}
              placeholder="html, css, js, ..."
              className="w-full rounded-md p-2 bg-base-100 active:bg-base-100"
            />
          </div>
          {/* course duration */}
          <div>
            <label htmlFor="duration" className="text-sm">
              Course Duration
            </label>
            <input
              type="text"
              required
              name="duration"
              defaultValue={duration}
              placeholder="Enter Course Duration"
              className="w-full rounded-md p-2 bg-base-100 active:bg-base-100"
            />
          </div>
          {/* course seats */}
          <div>
            <label htmlFor="seats" className="text-sm">
              Course Seats
            </label>
            <input
              type="number"
              required
              name="seats"
              defaultValue={seats}
              placeholder="Enter Course Seats"
              className="w-full rounded-md p-2 bg-base-100 active:bg-base-100"
            />
          </div>
          {/* date */}
          <div>
            <label htmlFor="date" className="text-sm">
              Published Date
            </label>
            <input
              type="date"
              name="date"
              defaultValue={date}
              placeholder="Enter Published Date"
              className="w-full rounded-md p-2 bg-base-100 active:bg-base-100"
            />
          </div>
          {/* time */}
          <div>
            <label htmlFor="time" className="text-sm">
              Current Time
            </label>
            <input
              type="time"
              name="time"
              defaultValue={times}
              onChange={handleTimeChange}
              placeholder="Enter Current Time"
              className="w-full rounded-md p-2 bg-base-100 active:bg-base-100"
            />
          </div>
          {/* user name */}
          <div>
            <label htmlFor="name" className="text-sm">
              Name
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              readOnly
              placeholder="Enter Current Time"
              className="w-full rounded-md p-2 bg-base-100 active:bg-base-100"
            />
          </div>
          {/* user email */}
          <div>
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              type="email"
              defaultValue={user?.email}
              readOnly
              name="email"
              placeholder="Enter Current Time"
              className="w-full rounded-md p-2 bg-base-100 active:bg-base-100"
            />
          </div>
        </div>

        {/* add course */}
        <div>
          <input
            className="btn w-full bg-[#5c2ede] mt-5 text-white font-bold"
            type="submit"
            value="Update Course"
          />
        </div>
      </form>
    </div>
  );
};

export default EditCourse;
