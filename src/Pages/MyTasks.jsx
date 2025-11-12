import React, { useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";
import Swal from "sweetalert2";
import useAuth from "../Hooks/UseAuth";
import useAxiosSecure from "../Hooks/UseAxiosSecure";

const MyTasks = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;
    setLoading(true);
    axiosSecure
      .get(`/myTasks?email=${user.email}`)
      .then((res) => setTasks(res.data))
      .catch((err) => console.error("Error fetching tasks:", err))
      .finally(() => setLoading(false));
  }, [user?.email, axiosSecure]);

  const handleAction = (id, type) => {
    const actionText =
      type === "done" ? "mark this task as done" : "cancel this task";

    Swal.fire({
      title: "Are you sure?",
      text: `You want to ${actionText}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: type === "done" ? "#16a34a" : "#dc2626",
      cancelButtonColor: "#6b7280",
      confirmButtonText: type === "done" ? "Yes, Done!" : "Yes, Cancel it!",
    }).then((result) => {
      if (!result.isConfirmed) return;

      axiosSecure
        .delete(`/myTasks/${id}`)
        .then((res) => {
          if (res.data.deletedCount > 0) {
            setTasks((prev) => prev.filter((task) => task._id !== id));
            Swal.fire({
              title: type === "done" ? "Task Completed!" : "Task Cancelled!",
              text:
                type === "done"
                  ? "This task has been marked as done successfully."
                  : "This task has been cancelled successfully.",
              icon: type === "done" ? "success" : "info",
              timer: 2000,
              showConfirmButton: false,
            });
          }
        })
        .catch(() => Swal.fire("Error!", "Failed to delete task.", "error"));
    });
  };

  // Loading spinner
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-50 to-blue-100">
        <Triangle visible={true} height="100" width="100" color="#2563eb" />
      </div>
    );
  }

  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="text-center mb-16 px-4">
        <h2 className="text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-3 tracking-tight">
          My <span className="text-blue-600">Accepted Tasks</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 font-medium max-w-2xl mx-auto">
          Review and manage all the tasks you’ve accepted so far.
        </p>
      </div>

      {/* Task Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-6 lg:px-20">
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
                className="flex flex-col justify-between bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 dark:border-gray-700 p-5"
              >
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 line-clamp-1">
                    {task.jobTitle || task.title}
                  </h2>

                  <hr className="border-gray-200 dark:border-gray-700 mb-3" />

                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    Client: {task.clientEmail || "Unknown"}
                  </p>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-3">
                    {task.submissionText ||
                      task.description ||
                      "No description available."}
                  </p>

                  <p className="text-xs text-gray-400 dark:text-gray-500">
                    📅 Accepted on: {formattedDate}
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-3 mt-4">
                  <button
                    onClick={() => handleAction(task._id, "done")}
                    className="btn btn-primary transition-all"
                  >
                    Done
                  </button>
                  <button
                    onClick={() => handleAction(task._id, "cancel")}
                    className="btn btn-outline px-4 py-2 text-sm font-semibold text-red-500  rounded-md hover:bg-red-700  hover:text-white transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400 col-span-full">
            No accepted tasks yet.
          </p>
        )}
      </div>
    </section>
  );
};

export default MyTasks;
