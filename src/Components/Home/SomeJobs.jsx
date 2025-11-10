import React from "react";
import { Link, useLoaderData } from "react-router";

const SomeJobs = () => {
  const jobsData = useLoaderData();
  console.log(jobsData);
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl hover:shadow-2xl transition-shadow">
        <figure className="h-48 overflow-hidden">
          <img
            src="/placeholder-job.jpg"
            alt="/"
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            job.title
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p className="text-sm text-gray-600">job.userEmail</p>
          <div className="card-actions justify-end mt-4">
            <div className="badge badge-outline">job.category</div>

            <Link to="/jobDetails">
              <button className="btn btn-primary">View</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SomeJobs;
