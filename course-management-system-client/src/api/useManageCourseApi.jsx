import React from "react";
import useAxios from "../hooks/useAxios";

const useManageCourseApi = () => {
  const axiosSecure = useAxios();

  const ManageCoursePromise = (email) => {
    return axiosSecure
      .get(`/courses/manage-courses/?email=${email}`)
      .then((res) => res.data);
  };

  return { ManageCoursePromise };
};

export default useManageCourseApi;
