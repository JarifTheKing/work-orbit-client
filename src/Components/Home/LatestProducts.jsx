import React from "react";
import { Link } from "react-router";

const LatestProducts = ({ job }) => {
  const { _id, title, category, coverImage, userEmail } = job;

  return (
    <div className="flex justify-center">
      <div className="relative group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden w-full max-w-[350px] h-[400px] flex flex-col">
        {/* Cover Image */}
        <figure className="h-48 w-full overflow-hidden flex-shrink-0">
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        </figure>

        {/* Content */}
        <div className="p-5 flex flex-col justify-between flex-grow">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
              {title}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {userEmail}
            </p>
          </div>

          <div className="flex justify-between items-center mt-5">
            <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full">
              {category}
            </span>

            <Link to={`/jobDetails/${_id}`}>
              <button className="btn btn-primary btn-sm hover:scale-105 transition-transform dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProducts;
