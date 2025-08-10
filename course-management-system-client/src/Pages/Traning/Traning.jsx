import React from "react";
import { Link } from "react-router";

export default function Traning() {
  return (
    <div className="my-8 bg-base-100 p-2 rounded-md">
      {/* card 1 */}
      <div className="flex flex-col md:flex-row gap-5 items-center justify-between">
        <div className="space-y-4 flex-1">
          <h1 className="mt-5 text-xl md:text-2xl lg:text-4xl font-bold text-primary">
            Affordable Remote Training and learning opportunities
          </h1>
          <p>
            Explore all of our courses and pick your suitable ones to enroll and
            start learning with us! Flexible easy to access learning
            opportunities can bring a significant change.
          </p>
          <Link
            to={"/all-courses"}
            className="px-4 py-2 bg-secondary rounded-md text-white"
          >
            View All Courses
          </Link>
        </div>

        <div className="flex-1">
          <img
            className="mx-auto h-72"
            src="https://i.ibb.co.com/q3BPF6Km/opportunities.webp"
            alt="card image"
          />
        </div>
      </div>
    </div>
  );
}
