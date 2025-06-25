import React, { use } from "react";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router";
import Loading from "../../../components/Loading";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = use(AuthContext);
  const location = useLocation();

  if (isLoading) return <Loading />;

  if (!user) {
    return <Navigate state={location.pathname} to="/login" />;
  }

  return children;
};

export default PrivateRoute;
