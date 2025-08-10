import React, { Suspense } from "react";
import { blogsData } from "../../components/api/ApiCall";
import Loading from "../../components/Loading";
import BlogsCard from "./BlogsCard";

export default function Blogs() {
  return (
    <div className="w-11/12 mx-auto my-12">
      <h1 className="text-3xl font-bold mb-8 text-center text-primary">
        Latest Blogs
      </h1>
      {/* blogs card */}
      <div>
        <Suspense fallback={<Loading />}>
          <BlogsCard blogs={blogsData} />
        </Suspense>
      </div>
    </div>
  );
}
