import { use, useState } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";

const AddCourse = () => {
  const { user, isDark } = use(AuthContext);
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
    const { tags, seats, amount, ...courseData } = data;
    const newTags = tags.split(",").map((tag) => tag.trim());
    courseData.tags = newTags;
    courseData.time = times;
    courseData.seats = parseInt(seats);
    courseData.amount = parseInt(amount);
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
          form.reset();
        }
      })
      .catch(() => {
        toast.error("Failed to Add course.");
      });
  };

  return (
    <div className={`py-12 px-4 rounded-md ${isDark?"bg-black":"bg-black"}`}>
      <h1 className="text-xl px-2 text-primary md:text-2xl lg:text-4xl font-semibold">
        Add Course
      </h1>

      <form
        onSubmit={handelCourseSubmit}
        className=" py-5 px-2 rounded-lg mt-5 text-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="title">
              Course Title
            </label>
            <input
              type="text"
              name="title"
              required
              placeholder="Enter Course Title"
              className="w-full rounded-md p-2 bg-base-100 active:bg-base-100 border"
            />
          </div>
          {/* photo url */}
          <div>
            <label htmlFor="image">
              Photo URL
            </label>
            <input
              type="url"
              required
              name="image"
              placeholder="Enter  Photo URL"
              className="w-full rounded-md p-2 bg-base-100 active:bg-base-100 border"
            />
          </div>
          {/* description */}
          <div>
            <label
              htmlFor="description"
              
            >
              Course Description
            </label>
            <input
              type="text"
              required
              name="description"
              placeholder="Enter Description"
              className="w-full rounded-md p-2 bg-base-100 active:bg-base-100 border"
            />
          </div>
          {/* course level */}
          <div>
            <label htmlFor="level" >
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
            <label
              htmlFor="instructor"
              
            >
              Instructor Name
            </label>
            <input
              type="text"
              required
              name="instructor"
              placeholder="Enter Instructor Name"
              className="w-full rounded-md p-2 bg-base-100 active:bg-base-100 border"
            />
          </div>
          {/* tags */}
          <div>
            <label htmlFor="tags" >
              Skill
            </label>
            <input
              type="text"
              required
              name="tags"
              placeholder="html, css, js, ..."
              className="w-full rounded-md p-2 bg-base-100 active:bg-base-100 border"
            />
          </div>
          {/* course duration */}
          <div>
            <label
              htmlFor="duration"
             
            >
              Course Duration
            </label>
            <input
              type="text"
              required
              name="duration"
              placeholder="Enter Course Duration"
              className="w-full rounded-md p-2 bg-base-100 active:bg-base-100 border"
            />
          </div>
          {/* course seats */}
          <div>
            <label htmlFor="seats" >
              Course Seats
            </label>
            <input
              type="number"
              required
              name="seats"
              placeholder="Enter Course Seats"
              className="w-full rounded-md p-2 bg-base-100 active:bg-base-100 border"
            />
          </div>
          {/* date */}
          <div>
            <label htmlFor="date" >
              Published Date
            </label>
            <input
              type="date"
              name="date"
              placeholder="Enter Published Date"
              className="w-full rounded-md p-2 bg-base-100 active:bg-base-100 border"
            />
          </div>
          {/* time */}
          <div>
            <label htmlFor="time" >
              Current Time
            </label>
            <input
              type="time"
              name="time"
              onChange={handleTimeChange}
              placeholder="Enter Current Time"
              className="w-full rounded-md p-2 bg-base-100 active:bg-base-100 border"
            />
          </div>
          {/* amount */}
          <div>
            <label htmlFor="amount" >
              Published Date
            </label>
            <input
              type="number"
              name="amount"
              placeholder="Enter Course Amount"
              className="w-full rounded-md p-2 bg-base-100 active:bg-base-100 border"
            />
          </div>
          {/* start date */}
          <div>
            <label
              htmlFor="startDate"
              
            >
              Current Time
            </label>
            <input
              type="time"
              name="startDate"
              onChange={handleTimeChange}
              placeholder="Enter Course Start Date"
              className="w-full rounded-md p-2 bg-base-100 active:bg-base-100 border"
            />
          </div>
          {/* user name */}
          <div>
            <label htmlFor="name" >
              Name
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              readOnly
              placeholder="Enter Current Time"
              className="w-full rounded-md p-2 bg-base-100 active:bg-base-100 border"
            />
          </div>
          {/* user email */}
          <div>
            <label htmlFor="email">
              Email
            </label>
            <input
              type="email"
              defaultValue={user?.email}
              readOnly
              name="email"
              placeholder="Enter Current Time"
              className="w-full rounded-md p-2 bg-base-100 active:bg-base-100 border"
            />
          </div>
        </div>

        {/* add course */}
        <div>
          <input
            className="btn w-full bg-secondary mt-5 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] text-white font-bold"
            type="submit"
            value="Add Course"
          />
        </div>
      </form>
    </div>
  );
};

export default AddCourse;
