import React from "react";
import { Link } from "react-router";

const LatestProducts = ({ job }) => {
  const { title, category, coverImage, userEmail } = job;
  return (
    <div className="flex justify-center">
      <div className="relative group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden w-full max-w-[350px] h-[400px] flex flex-col">
        <figure className="h-48 w-full overflow-hidden flex-shrink-0">
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        </figure>

        <div className="p-5 flex flex-col justify-between flex-grow">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
              {title}
            </h2>
            <p className="text-sm text-gray-600 mt-1">{userEmail}</p>
          </div>

          <div className="flex justify-between items-center mt-5">
            <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full">
              {category}
            </span>
            <Link to={`/jobDetails`}>
              <button className="btn btn-primary btn-sm hover:scale-105 transition-transform">
                View
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProducts;
