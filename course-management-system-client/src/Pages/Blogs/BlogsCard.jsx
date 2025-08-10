import React, { use } from "react";

export default function BlogsCard({ blogs }) {
  const data = use(blogs);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.map((blog) => (
        <div
          key={blog._id}
          className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h2 className="text-xl font-semibold mb-2 text-primary">{blog.title}</h2>
            <p className="text-sm text-gray-500 mb-3">
              By {blog.author} - {blog.date}
            </p>
            <p className="text-gray-700 mb-4">{blog.description}</p>
            {/* <button className="text-indigo-600 font-medium hover:underline">
              Read More →
            </button> */}
          </div>
        </div>
      ))}
    </div>
  );
}
