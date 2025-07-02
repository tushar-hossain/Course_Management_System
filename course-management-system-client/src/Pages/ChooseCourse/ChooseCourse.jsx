import React from "react";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router";

const ChooseCourse = () => {
  return (
    <div>
      <h1 className="bg-base-300 w-fit px-5 py-1 font-semibold rounded-full text-[#7659ff]">
        <li> Why Choose Course</li>
      </h1>

      <div className="lg:flex gap-4 text-white">
        <div className=" space-y-3 lg:w-[800px] mt-5">
          <h1 className="text-xl md:text-2xl lg:text-4xl text-justify font-semibold mb-3">
            The Educational Advantage of DB Programming
          </h1>
          <p className=" text-justify">
            Our courses are designed to help you learn programming in Bangla,
            making it easier for beginners to understand complex topics. You’ll
            follow a clear, step-by-step curriculum that takes you from the
            basics to full-stack web development. Every course is hands-on, so
            you'll build real projects that you can use in your portfolio.
          </p>
          <div>
            <p className="flex gap-5 items-center">
              <TiTick />{" "}
              <span className="font-bold">Unlimited access to courses</span>
            </p>
            <p className="flex gap-5 items-center">
              <TiTick />{" "}
              <span className="font-bold">Top certifications in tech</span>
            </p>
          </div>

          <Link to="/free-seminar-schedule">
            <button className="btn bg-[#7659FF] border border-white text-white md:mt-10 mb-10 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
              Free Seminar Schedule
            </button>
          </Link>
        </div>

        {/* card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#FEE2E2]  hover:bg-[#FA6C6C] px-10 py-10 rounded-lg">
            <img
              className="w-18 mb-3 bg-white rounded-lg p-2"
              src="https://i.ibb.co/h1mJL64d/computer.png"
              alt="computer image"
            />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3 text-black">
              Interactive Learning
            </h3>
            <p className=" text-black">
              Interactive learning makes our courses engaging and effective,
              with hands-on practice, real projects, and active participation to
              boost your skills.
            </p>
          </div>

          <div className="bg-[#DDF6E8]  hover:bg-[#54D38E] px-10 py-10 rounded-lg">
            <img
              className="w-20 mb-3 bg-white rounded-lg p-2"
              src="https://i.ibb.co/ZpR366S0/teaching.png"
              alt=""
            />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3 text-black">
              Expert Instructors
            </h3>
            <p className=" text-black">
              Expert instructors guide you through each topic with real-world
              experience, clear explanations, and a focus on helping you
              succeed.
            </p>
          </div>
          <div className="bg-[#D5F7FC] hover:bg-[#2DD7EF] px-10 py-10 rounded-lg">
            <img
              className="w-20 mb-3 bg-white rounded-lg p-2"
              src="https://i.ibb.co/XvC7Hxw/calendar.png"
              alt=""
            />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3 text-black">
              Flexible Schedules
            </h3>
            <p className=" text-black">
              Flexible schedules let you learn at your own pace, anytime and
              anywhere, making it easy to balance learning with daily life.
            </p>
          </div>

          <div className="bg-[#fee3fc] hover:bg-[#F971F0] px-10 py-10 rounded-lg">
            <img
              className="w-20 mb-3 bg-white rounded-lg p-2"
              src="https://i.ibb.co/b54qzKtZ/price.png"
              alt=""
            />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3 text-black">
              Affordable Pricing
            </h3>
            <p className=" text-black">
              Affordable pricing makes quality programming education accessible
              to everyone, with high-value courses that fit your budget and
              learning goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseCourse;
