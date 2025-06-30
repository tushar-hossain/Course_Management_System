import React, { Suspense, use } from "react";
import PostedCourseList from "./PostedCourseList";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import Loading from "../../components/Loading";
import useManageCourseApi from "../../api/useManageCourseApi";

const ManageCourse = () => {
  const { user } = use(AuthContext);
  const { ManageCoursePromise } = useManageCourseApi();
  return (
    <div className="py-12 w-11/12 mx-auto">
      <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold mb-10 text-white">
        My Posted Course
      </h1>
      <Suspense fallback={<Loading />}>
        <PostedCourseList
          ManageCoursePromise={ManageCoursePromise(user.email)}
        />
      </Suspense>
    </div>
  );
};

export default ManageCourse;
