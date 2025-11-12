import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { Triangle } from "react-loader-spinner";

const AllJobs = () => {
  const [allJobsData, setAllJobsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("newest");

  //  all jobs data
  useEffect(() => {
    fetch("https://workorbit-server.vercel.app/allJobs")
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

  //  Sort jobs
  // const sortedJobs = [...allJobsData].sort((a, b) => {
  //   const dateA = new Date(a.postedAt);
  //   const dateB = new Date(b.postedAt);
  //   return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
  // });

  const sortedJobs = [...allJobsData].sort((a, b) => {
    const dateA = new Date(a.postedAt || a.postedDate);
    const dateB = new Date(b.postedAt || b.postedDate);
    return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
  });

  console.log(sortedJobs);

  //  Loading
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-50 to-blue-100">
        <Triangle visible={true} height="100" width="100" color="#2563eb" />
      </div>
    );
  }

  // Job Cards
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-blue-900 min-h-screen overflow-hidden transition-colors duration-500">
      <div className="relative text-center mb-10 px-4 z-10">
        <h2 className="text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-3 tracking-tight drop-shadow-sm">
          Discover{" "}
          <span className="text-blue-600 dark:text-blue-400">
            Exciting Opportunities
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 font-medium max-w-2xl mx-auto mb-6">
          Browse freelance and remote jobs tailored for your skills and
          passions.
        </p>

        {/* Sort */}
        <div className="flex justify-end">
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="select select-bordered w-60 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-medium border border-gray-200 dark:border-gray-700"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>
      </div>

      {/* Cards */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-6 lg:px-20 z-10">
        {sortedJobs && sortedJobs.length > 0 ? (
          sortedJobs.map((job) => {
            const formattedDate =
              job.postedAt || job.postedDate
                ? new Date(job.postedAt || job.postedDate).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    }
                  )
                : "Unknown Date";

            return (
              <div
                key={job._id}
                className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-blue-100 dark:border-gray-700 hover:-translate-y-2"
              >
                <figure className="h-48 w-full overflow-hidden flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                  <img
                    src={job.coverImage || "/placeholder-job.jpg"}
                    alt={job.title}
                    className="w-full h-48 object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                  />
                </figure>

                <div className="p-4 flex flex-col justify-between h-56">
                  <div>
                    <div className="flex justify-between items-center">
                      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1 group-hover:text-blue-600 transition-colors">
                        {job.title}
                      </h2>

                      <p className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 rounded-full">
                        {job.category || "General"}
                      </p>
                    </div>

                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                      📅 Posted on:{formattedDate}
                      {/* {new Date(
                        job.postedAt || job.postedDate
                      ).toLocaleDateString()} */}
                    </p>

                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {job.userEmail || "Anonymous"}
                    </p>

                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-snug line-clamp-2">
                      {job.summary || "No job description available."}
                    </p>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <p className="px-3 py-1 text-xs font-medium bg-purple-100 dark:bg-purple-900/40 text-blue-600 dark:text-blue-300 rounded-full text-center">
                      {job.postedBy || "User"}
                    </p>

                    <Link to={`/allJobDetails/${job._id}`}>
                      <button className="px-4 py-2 rounded-lg btn btn-primary text-sm font-medium">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400 col-span-full">
            No jobs available.
          </p>
        )}
      </div>
    </section>
  );
};

export default AllJobs;
