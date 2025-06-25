import axios from "axios";
import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { toast } from "react-toastify";

const axiosInstance = axios.create({
  baseURL: "https://course-management-system-server-ashen.vercel.app",
});

const useAxios = () => {
  const { user, logOutUser } = use(AuthContext);

  axiosInstance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user.accessToken}`;
    return config;
  });

  // response interceptor
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.status === 401 || error.status === 403) {
        logOutUser()
          .then(() => {
            toast.success("Log Out successfully.");
          })
          .catch(() => {
            toast.error("Please try again");
          });
      }
    }
  );

  return axiosInstance;
};

export default useAxios;
