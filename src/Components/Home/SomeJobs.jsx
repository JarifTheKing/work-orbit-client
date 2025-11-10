import React, { use } from "react";
import { Link } from "react-router";

const SomeJobs = ({ someDataPromise }) => {
  const products = use(someDataPromise);
  console.log(products);
  return (
    <div>
      {/* SomeJobs Section */}
      <section className="py-16 rounded-lg bg-gradient-to-b from-gray-100 to-blue-100 my-10  w-11/12 mx-auto shadow-lg hover:shadow-2xl transition-all duration-500">
        <div className="text-center mb-12 px-4">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Featured Jobs
          </h2>
          <p className="text-blue-600 font-medium mt-2">
            Explore the most recent freelance opportunities added to the
            platform
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-16">
          {products.map((job, index) => (
            <div
              key={index}
              className="relative group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <figure className="h-52 overflow-hidden">
                <img
                  src={job.coverImage}
                  alt={job.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </figure>

              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
                  {job.title}
                </h2>
                <p className="text-sm text-gray-600 mt-1">{job.userEmail}</p>

                <div className="flex justify-between items-center mt-5">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full">
                    {job.category}
                  </span>
                  <Link to="">
                    <button className="btn btn-primary btn-sm hover:scale-105 transition-transform">
                      View
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More button */}
        <div className="flex justify-center mt-12">
          <Link to="/allJobs">
            <button className="btn bg-blue-600 hover:bg-blue-700 text-white font-medium px-10 py-3 rounded-full shadow-md hover:shadow-lg transition-all">
              Show More
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SomeJobs;
