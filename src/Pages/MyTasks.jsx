import React, { useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";
import useAuth from "../Hooks/UseAuth";
// import useAxios from "../Hooks/UseAxios";
import useAxiosSecure from "../Hooks/UseAxiosSecure";

const MyTasks = () => {
  const { user } = useAuth();
  const axiosInstance = useAxiosSecure();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    setLoading(true);

    axiosInstance
      .get(`/myTasks?email=${user.email}`)
      .then((data) => {
        setTasks(data.data);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [user?.email, axiosInstance]);

  //  Delete task handler
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This task will be removed from your list!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (!result.isConfirmed) return;

      axiosInstance
        .delete(`/myTasks/${id}`)
        .then((res) => {
          if (res.data.deletedCount > 0) {
            setTasks((prev) => prev.filter((task) => task._id !== id));
            Swal.fire("Deleted!", "Task removed successfully.", "success");
          } else {
            Swal.fire("Not Found!", "Task not found in the database.", "info");
          }
        })
        .catch((err) => {
          Swal.fire("Error!", "Failed to delete task.", err.message);
        });
    });
  };
  //  Loading Spinner
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-50 to-blue-100">
        <Triangle visible={true} height="100" width="100" color="#2563eb" />
      </div>
    );
  }

  //  Task Cards
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen overflow-hidden">
      <div className="relative text-center mb-16 px-4 z-10">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-3 tracking-tight drop-shadow-sm">
          My <span className="text-blue-600">Accepted Tasks</span>
        </h2>
        <p className="text-gray-600 font-medium max-w-2xl mx-auto">
          Review and manage all tasks you’ve accepted so far.
        </p>
      </div>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-6 lg:px-20 z-10">
        {tasks && tasks.length > 0 ? (
          tasks.map((task) => {
            const formattedDate = task.submissionDate
              ? new Date(task.submissionDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })
              : "Unknown Date";

            return (
              <div
                key={task._id}
                className="group bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-blue-100 hover:-translate-y-2"
              >
                {/*  Card Header */}
                <div className="p-4 flex flex-col justify-between h-56">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex flex-col items-start gap-2">
                        <img
                          src={user?.photoURL || "/gagag.jpeg"}
                          alt="User Avatar"
                          className="w-20 h-20 rounded-full border border-gray-300 shadow-sm"
                        />
                        <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {task.jobTitle || task.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-sm text-gray-500 mb-1">
                      Client: {task.clientEmail || "Unknown"}
                    </p>

                    <p className="text-gray-600 text-sm line-clamp-3">
                      {task.submissionText ||
                        task.description ||
                        "No description available."}
                    </p>

                    <div className="flex justify-between items-center">
                      <p className="text-xs text-gray-400 mt-3">
                        📅 Accepted on: {formattedDate}
                      </p>

                      <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded-full">
                        Accepted
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-end mt-4">
                    <button
                      onClick={() => handleDelete(task._id)}
                      className="px-4 py-2 text-sm text-red-500 border border-red-400 rounded-lg hover:bg-red-500 hover:text-white transition-all"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No tasks accepted yet.
          </p>
        )}
      </div>
    </section>
  );
};

export default MyTasks;
