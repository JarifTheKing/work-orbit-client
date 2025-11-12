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

  // Fetch Accepted Tasks
  useEffect(() => {
    if (!user?.email) return;
    setLoading(true);
    axiosSecure
      .get(`/myTasks?email=${user.email}`)
      .then((res) => setTasks(res.data))
      .catch((err) => console.error("Error fetching tasks:", err))
      .finally(() => setLoading(false));
  }, [user?.email, axiosSecure]);

  // Handle DONE or CANCEL action
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
              title:
                type === "done" ? "✅ Task Completed!" : "❌ Task Cancelled!",
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

  // Main UI
  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="text-center mb-16 px-4">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">
          My <span className="text-blue-600">Accepted Tasks</span>
        </h2>
        <p className="text-gray-600 font-medium max-w-2xl mx-auto">
          Review and manage all the tasks you’ve accepted so far.
        </p>
      </div>

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
                className="flex flex-col justify-between bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 p-5 h-[350px]"
              >
                <div>
                  <div className="flex flex-col items-start gap-3 mb-3">
                    <img
                      src={user?.photoURL || "/gagag.jpeg"}
                      alt="User Avatar"
                      className="w-20 h-20 rounded-full border border-gray-300 shadow-md mb-4"
                    />
                    <div>
                      <h2 className="text-lg mb-2 font-semibold text-gray-900 line-clamp-1">
                        {task.jobTitle || task.title}
                      </h2>
                      <p className="text-sm text-gray-500">
                        Client: {task.clientEmail || "Unknown"}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                    {task.submissionText ||
                      task.description ||
                      "No description available."}
                  </p>

                  <p className="text-xs text-gray-400">
                    📅 Accepted on: {formattedDate}
                  </p>
                </div>

                {/*  Buttons */}
                <div className="flex justify-end gap-3 mt-4">
                  <button
                    onClick={() => handleAction(task._id, "done")}
                    className="btn btn-primary"
                  >
                    Done
                  </button>
                  <button
                    onClick={() => handleAction(task._id, "cancel")}
                    className="px-4 py-2 text-sm font-semibold text-red-600 border border-red-400 rounded-md hover:bg-red-600 hover:text-white transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No accepted tasks yet.
          </p>
        )}
      </div>
    </section>
  );
};

export default MyTasks;
