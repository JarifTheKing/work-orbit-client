import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { Triangle } from "react-loader-spinner";

const AllJobs = () => {
  const [allJobsData, setAllJobsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/allJobs")
      .then((res) => res.json())
      .then((data) => {
        setAllJobsData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching jobs:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-50 to-blue-100">
        <Triangle visible={true} height="100" width="100" color="#2563eb" />
      </div>
    );
  }

  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-200/40 rounded-full blur-3xl opacity-50 animate-pulse"></div>

      <div className="relative text-center mb-16 px-4 z-10">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-3 tracking-tight drop-shadow-sm">
          Discover <span className="text-blue-600">Exciting Opportunities</span>
        </h2>
        <p className="text-gray-600 font-medium max-w-2xl mx-auto">
          Browse freelance and remote jobs tailored for your skills and
          passions.
        </p>
      </div>

      {/* Job Cards */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-6 lg:px-20 z-10">
        {allJobsData && allJobsData.length > 0 ? (
          allJobsData.map((job) => (
            <div
              key={job._id}
              className="group bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-blue-100 hover:-translate-y-2"
            >
              <figure className="h-48 overflow-hidden">
                <img
                  src={job.coverImage || "/placeholder-job.jpg"}
                  alt={job.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </figure>

              <div className="p-5 flex flex-col justify-between h-56">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {job.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-2">
                    {job.userEmail || "Anonymous"}
                  </p>
                  <p className="text-gray-600 text-sm leading-snug line-clamp-2">
                    {job.summary || "No job description available."}
                  </p>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded-full">
                    {job.category || "General"}
                  </span>
                  <Link to={`/allJobDetails/${job._id}`}>
                    <button className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors">
                      View
                    </button>
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
  );
};

export default AllJobs;
