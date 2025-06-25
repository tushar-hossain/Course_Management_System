import React from "react";
import Lottie from "lottie-react";
import errorAnimation from "../../assets/lottie/error.json";
import { useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError();

  return (
    <div>
      <Lottie
        className="w-11/12 mx-auto py-12"
        style={{ width: 400 }}
        animationData={errorAnimation}
      />

      <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center">
        {error.data}
      </h1>
    </div>
  );
};

export default Error;
