import React from "react";
import { Link, useLoaderData } from "react-router";

const AllJobs = () => {
  const allJobsData = useLoaderData();
  console.log(allJobsData);

  return (
    <div>
      <section className="py-16 bg-gray-50">
        <div className="text-center mb-10 px-4">
          <h2 className="text-4xl font-bold text-gray-900">
            All Available Jobs
          </h2>
          <p className="text-blue-600 font-medium mt-2">
            Browse all freelance and remote opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 lg:px-20">
          {allJobsData && allJobsData.length > 0 ? (
            allJobsData.map((job) => (
              <div
                key={job._id}
                className="card bg-white w-full shadow-md hover:shadow-xl transition-all duration-300 rounded-xl"
              >
                <figure className="h-48 overflow-hidden">
                  <img
                    src={job.coverImage || "/placeholder-job.jpg"}
                    alt={job.title}
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-lg font-semibold">
                    {job.title}
                  </h2>
                  <p className="text-sm text-gray-600">{job.userEmail}</p>
                  <div className="card-actions justify-between items-center mt-4">
                    <span className="badge badge-outline">
                      {job.category || "Uncategorized"}
                    </span>
                    <Link to={`/allJobs/${job._id}`}>
                      <button className="btn btn-primary btn-sm">View</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No jobs available.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default AllJobs;
