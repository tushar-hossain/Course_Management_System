import React from "react";
import useAxios from "../hooks/useAxios";

const useMyEnrolledCoursesApi = () => {
  const axiosSecure = useAxios();

  const MyEnrolledCoursesPromise = (email) => {
    return axiosSecure
      .get(`/enrollments/?email=${email}`)
      .then((res) => res.data);
  };
  return { MyEnrolledCoursesPromise };
};

export default useMyEnrolledCoursesApi;
