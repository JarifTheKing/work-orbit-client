import React, { useContext, useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthProvider";
import useAxios from "../Hooks/UseAxios";

const MyAddedJobs = () => {
  const { user } = useContext(AuthContext);
  const axiosInstance = useAxios();
  const [myJobs, setMyJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) {
      setLoading(false);
      return;
    }

    axiosInstance
      .get(`/myAddedJobs?email=${user.email}`)
      .then((data) => {
        setMyJobs(data.data);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [user, axiosInstance]);

  // 🗑️ Delete Job
  // const handleDelete = (id) => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "This job will be permanently deleted from both lists!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#d33",
  //     cancelButtonColor: "#3085d6",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       fetch(`https://workorbit-server.vercel.app/myAddedJobs/${id}`, {
  //         method: "DELETE",
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           if (data.deletedCount > 0) {
  //             Swal.fire("Deleted!", "Job deleted successfully.", "success");
  //             setMyJobs((prev) => prev.filter((job) => job._id !== id));
  //           } else {
  //             Swal.fire("Not Found!", "This job was not found.", "info");
  //           }
  //         })
  //         .catch(() => {
  //           Swal.fire(
  //             "Error!",
  //             "Failed to delete job. Try again later.",
  //             "error"
  //           );
  //         });
  //     }
  //   });
  // };

  // 🗑️ Delete Job
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This job will be permanently deleted from both lists!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (!result.isConfirmed) return;

      axiosInstance
        .delete(`/myAddedJobs/${id}`)
        .then((data) => {
          if (data.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Job deleted successfully.", "success");
            setMyJobs((prev) => prev.filter((job) => job._id !== id));
          } else {
            Swal.fire("Not Found!", "This job was not found.", "info");
          }
        })
        .catch(() => {
          Swal.fire(
            "Error!",
            "Failed to delete job. Try again later.",
            "error"
          );
        });
    });
  };

  //  Spinner
  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
        <span className="loading loading-spinner text-blue-600"></span>
      </div>
    );

  //  Render Jobs
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">
        My Added Jobs
      </h2>

      {myJobs.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          <p className="text-xl mb-4">You haven’t added any jobs yet.</p>
          <Link
            to="/add-a-job"
            className="mt-4 inline-block bg-blue-600 text-white py-3 px-6 rounded-xl hover:bg-blue-700 transition"
          >
            ➕ Add a Job
          </Link>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {myJobs.map((job) => (
            <div
              key={job._id}
              className="group flex flex-col bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300"
            >
              {/* Job Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={
                    job.coverImage ||
                    "https://i.ibb.co/f2J5JHk/default-job-cover.jpg"
                  }
                  alt={job.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Job Details */}
              <div className="flex flex-col flex-grow justify-between p-5">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {job.title}
                    </h3>
                    <span className="px-3 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">
                      {job.category || "General"}
                    </span>
                  </div>

                  <p className="text-sm text-gray-500 mb-1">
                    {job.userEmail || "Anonymous"}
                  </p>

                  <p className="text-gray-600 text-sm leading-snug line-clamp-2 mb-4">
                    {job.summary || "No job description available."}
                  </p>

                  <p className="text-xs text-gray-400">
                    Posted: {new Date(job.postedDate).toLocaleDateString()}
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex justify-between items-center mt-5 pt-4 border-t">
                  <Link to={`/updateJob/${job._id}`}>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                      Update
                    </button>
                  </Link>

                  <button
                    onClick={() => handleDelete(job._id)}
                    className="flex items-center gap-1 border border-red-500 text-red-500 px-4 py-2 rounded-lg hover:bg-red-600 hover:text-white transition"
                  >
                    <Trash2 size={16} /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyAddedJobs;
