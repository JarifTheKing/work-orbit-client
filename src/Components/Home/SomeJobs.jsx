import React, { use } from "react";
import { Link } from "react-router";
import LatestProducts from "./LatestProducts";

const SomeJobs = ({ someDataPromise }) => {
  const jobsData = use(someDataPromise);
  return (
    <section className="py-16 rounded-lg bg-gradient-to-b from-gray-100 to-blue-100 my-10 w-11/12 mx-auto shadow-lg hover:shadow-2xl transition-all duration-500">
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Featured Jobs
        </h2>
        <p className="text-blue-600 font-medium mt-2">
          Explore the most recent freelance opportunities added to the platform
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-16">
        {jobsData.map((job, index) => (
          <LatestProducts job={job} key={index}></LatestProducts>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Link to="/allJobs">
          <button className="btn bg-blue-600 hover:bg-blue-700 text-white font-medium px-10 py-3 rounded-full shadow-md hover:shadow-lg transition-all">
            Show More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default SomeJobs;
