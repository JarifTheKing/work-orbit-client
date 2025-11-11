import React, { useContext, useEffect, useState } from "react";
import { Trash2, Edit, Briefcase } from "lucide-react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthProvider";

const MyAddedJobs = () => {
  const { user } = useContext(AuthContext);
  const [myJobs, setMyJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/myAddedJobs?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setMyJobs(data);
          setLoading(false);
        })
        .catch((err) => console.error(err));
    }
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This job will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Delete a job
        fetch(`http://localhost:5000/allJobs/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your job has been removed.", "success");
              setMyJobs(myJobs.filter((job) => job._id !== id));
            }
          });
      }
    });
  };

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner text-blue-600"></span>
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <Briefcase className="text-blue-600" /> My Added Jobs
      </h2>

      {myJobs.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          <p className="text-xl">You haven’t added any jobs yet.</p>
          <Link
            to="/add-a-job"
            className="mt-4 inline-block bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Add a Job
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {myJobs.map((job) => (
            <div
              key={job._id}
              className="bg-white shadow-md rounded-2xl p-5 flex flex-col justify-between hover:shadow-lg transition"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {job.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {job.summary || job.description}
                </p>
                <p className="text-blue-600 font-medium">
                  ${job.priceRange || "N/A"}
                </p>
              </div>

              <div className="flex justify-between items-center mt-5">
                <Link
                  to={`/updateJob/${job._id}`}
                  className="flex items-center gap-1 text-blue-600 hover:underline"
                >
                  <Edit className="w-4 h-4" /> Update
                </Link>

                <button
                  onClick={() => handleDelete(job._id)}
                  className="flex items-center gap-1 text-red-600 hover:underline"
                >
                  <Trash2 className="w-4 h-4" /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyAddedJobs;
