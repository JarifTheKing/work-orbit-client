import React from "react";
import { Triangle } from "react-loader-spinner";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <Triangle
        visible={true}
        height="80"
        width="80"
        color="blue"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default LoadingSpinner;
