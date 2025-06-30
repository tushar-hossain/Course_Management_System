import { use, useState } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";

const AddCourse = () => {
  const { user } = use(AuthContext);
  const [times, setTime] = useState("");

  const handleTimeChange = (e) => {
    const value = e.target.value;
    if (value) {
      const [hourStr, minute] = value.split(":");
      let hour = parseInt(hourStr);
      const ampm = hour >= 12 ? "PM" : "AM";
      hour = hour % 12;
      setTime(`${hour}:${minute} ${ampm}`);
    } else {
      setTime("");
    }
  };

  const handelCourseSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formDate = new FormData(form).entries();
    const data = Object.fromEntries(formDate);
    const { tags, seats, ...courseData } = data;
    const newTags = tags.split(",").map((tag) => tag.trim());
    courseData.tags = newTags;
    courseData.time = times;
    courseData.seats = parseInt(seats);
    courseData.enrolled = 0;

    // data send to server side
    axios
      .post(
        "https://course-management-system-server-ashen.vercel.app/courses",
        courseData
      )
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Added course successfully.");
        }
      })
      .catch(() => {
        toast.error("Failed to Add course.");
      });
  };

  return (
    <div className="w-11/12 mx-auto py-12">
      <h1 className="text-xl text-white md:text-2xl lg:text-4xl font-semibold">
        Add Course
      </h1>

      <form
        onSubmit={handelCourseSubmit}
        className=" py-8 px-15 rounded-lg mt-5"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="title" className="text-sm text-white">
              Course Title
            </label>
            <input
              type="text"
              name="title"
              required
              placeholder="Enter Course Title"
              className="w-full rounded-md p-2 bg-base-100 active:bg-base-100"
            />
          </div>
          {/* photo url */}
          <div>
            <label htmlFor="image" className="text-sm text-white">
              Photo URL
            </label>
            <input
              type="url"
              required
              name="image"
              placeholder="Enter  Photo URL"
              className="w-full rounded-md p-2 bg-base-100 active:bg-base-100"
            />
          </div>
          {/* description */}
          <div>
            <label htmlFor="description" className="text-sm text-white">
              Course Description
            </label>
            <input
              type="text"
              required
              name="description"
              placeholder="Enter Description"
              className="w-full rounded-md p-2 bg-base-100 active:bg-base-100"
            />
          </div>
          {/* course level */}
          <div>
            <label htmlFor="level" className="text-sm text-white">
              Course Level
            </label>
            <select
              defaultValue="Select Course Level"
              className="select w-full"
              name="level"
            >
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
            <label htmlFor="instructor" className="text-sm text-white">
              Instructor Name
            </label>
            <input
              type="text"
              required
              name="instructor"
              placeholder="Enter Instructor Name"
              className="w-full rounded-md p-2 bg-base-100 active:bg-base-100"
            />
          </div>
          {/* tags */}
          <div>
            <label htmlFor="tags" className="text-sm text-white">
              Skill
            </label>
            <input
              type="text"
              required
              name="tags"
              placeholder="html, css, js, ..."
              className="w-full rounded-md p-2 bg-base-100 active:bg-base-100"
            />
          </div>
          {/* course duration */}
          <div>
            <label htmlFor="duration" className="text-sm text-white">
              Course Duration
            </label>
            <input
              type="text"
              required
              name="duration"
              placeholder="Enter Course Duration"
              className="w-full rounded-md p-2 bg-base-100 active:bg-base-100"
            />
          </div>
          {/* course seats */}
          <div>
            <label htmlFor="seats" className="text-sm text-white">
              Course Seats
            </label>
            <input
              type="number"
              required
              name="seats"
              placeholder="Enter Course Seats"
              className="w-full rounded-md p-2 bg-base-100 active:bg-base-100"
            />
          </div>
          {/* date */}
          <div>
            <label htmlFor="date" className="text-sm text-white">
              Published Date
            </label>
            <input
              type="date"
              name="date"
              placeholder="Enter Published Date"
              className="w-full rounded-md p-2 bg-base-100 active:bg-base-100"
            />
          </div>
          {/* time */}
          <div>
            <label htmlFor="time" className="text-sm text-white">
              Current Time
            </label>
            <input
              type="time"
              name="time"
              onChange={handleTimeChange}
              placeholder="Enter Current Time"
              className="w-full rounded-md p-2 bg-base-100 active:bg-base-100"
            />
          </div>
          {/* user name */}
          <div>
            <label htmlFor="name" className="text-sm text-white">
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
            <label htmlFor="email" className="text-sm text-white">
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
            className="btn w-full bg-[#5c2ede] mt-5 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] text-white font-bold"
            type="submit"
            value="Add Course"
          />
        </div>
      </form>
    </div>
  );
};

export default AddCourse;
