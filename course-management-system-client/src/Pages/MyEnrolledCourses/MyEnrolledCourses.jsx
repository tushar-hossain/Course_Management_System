import React, { Suspense, use } from "react";
import Loading from "../../components/Loading";
import EnrolledCourseList from "./EnrolledCourseList";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import useMyEnrolledCoursesApi from "../../api/useMyEnrolledCoursesApi";

const MyEnrolledCourses = () => {
  const { user } = use(AuthContext);
  const { MyEnrolledCoursesPromise } = useMyEnrolledCoursesApi();
  return (
    <div className="py-12 w-11/12 mx-auto">
      <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold mb-10">
        My Enrolled Courses
      </h1>
      <div>
        <Suspense fallback={<Loading />}>
          <EnrolledCourseList
            MyEnrolledCoursesPromise={MyEnrolledCoursesPromise(user.email)}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default MyEnrolledCourses;
