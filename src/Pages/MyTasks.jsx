import React, { useContext, useEffect, useState } from "react";
import { CheckCircle, XCircle, ClipboardList } from "lucide-react";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthProvider";

const MyTasks = () => {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch accepted tasks by user email
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/myTasks?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setTasks(data);
          setLoading(false);
        })
        .catch((err) => console.error("Error fetching tasks:", err));
    }
  }, [user]);

  // Handle Done ✅
  const handleDone = (id) => {
    Swal.fire({
      title: "Mark as Done?",
      text: "Once done, this task will be removed from your list.",
      icon: "success",
      showCancelButton: true,
      confirmButtonText: "Yes, Done!",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#16a34a",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/myTasks/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setTasks(tasks.filter((task) => task._id !== id));
              Swal.fire("Done!", "Task marked as completed.", "success");
            }
          });
      }
    });
  };

  // Handle Cancel ❌
  const handleCancel = (id) => {
    Swal.fire({
      title: "Cancel this task?",
      text: "This task will be removed from your accepted list.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Cancel!",
      cancelButtonText: "No",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/myTasks/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setTasks(tasks.filter((task) => task._id !== id));
              Swal.fire("Cancelled!", "Task has been removed.", "success");
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
      <h2 className="text-3xl text-center font-bold text-blue-500 mb-6  gap-2">
        My Accepted Tasks
      </h2>

      {tasks.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          <p className="text-xl">You haven’t accepted any tasks yet.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tasks.map((task) => (
            <div
              key={task._id}
              className="bg-white shadow-md rounded-2xl p-5 flex flex-col justify-between hover:shadow-lg transition"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {task.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {task.description || "No description available"}
                </p>
                <p className="text-blue-600 font-medium">
                  Budget: ${task.priceRange || "N/A"}
                </p>
              </div>

              <div className="flex justify-between items-center mt-5">
                <button
                  onClick={() => handleDone(task._id)}
                  className="flex items-center gap-1 text-green-600 hover:underline"
                >
                  <CheckCircle className="w-4 h-4" /> Done
                </button>

                <button
                  onClick={() => handleCancel(task._id)}
                  className="flex items-center gap-1 text-red-600 hover:underline"
                >
                  <XCircle className="w-4 h-4" /> Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyTasks;
