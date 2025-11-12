import React, { useRef, useContext } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { MapPin, User, Tag, Mail } from "lucide-react";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthProvider";
import useAxiosSecure from "../Hooks/UseAxiosSecure";
// import useAxios from "../Hooks/UseAxios";

const SomeJobDetails = () => {
  const axiosInstance = useAxiosSecure();
  const job = useLoaderData();
  const navigate = useNavigate();
  const taskModalRef = useRef(null);
  const { user } = useContext(AuthContext);

  const { title, postedBy, category, summary, coverImage, userEmail } =
    job || {};

  // Open Modal
  const handleModalOpen = () => {
    if (!user) {
      Swal.fire({
        title: "Login Required",
        text: "Please log in to accept this job.",
        icon: "warning",
        confirmButtonText: "Go to Login",
        confirmButtonColor: "#2563eb",
      }).then((res) => {
        if (res.isConfirmed) navigate("/login");
      });
      return;
    }
    taskModalRef.current.showModal();
  };

  // Handle Task Submit
  const handleTaskSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const taskData = {
      jobTitle: title,
      workerName: form.workerName.value,
      workerEmail: form.workerEmail.value,
      submissionText: form.submissionText.value,
      submissionDate: new Date().toISOString(),
      clientEmail: userEmail,
    };

    axiosInstance
      .post("/myTasks", taskData)
      .then(() => {
        Swal.fire({
          title: "Job Accepted!",
          text: "Task added successfully to your list.",
          icon: "success",
          confirmButtonColor: "#2563eb",
          confirmButtonText: "Go to My Tasks",
        }).then(() => {
          navigate("/my-tasks");
        });
        form.reset();
        taskModalRef.current.close();
      })
      .catch(() =>
        Swal.fire({
          title: "Error",
          text: "Failed to add task. Please try again.",
          icon: "error",
        })
      );
  };

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        <p>Job details not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-11/12 mx-auto bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-4 sm:px-8 py-10 flex justify-center dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="w-full bg-white dark:bg-gray-900 shadow-2xl rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <img
            src={coverImage}
            alt={title}
            className="w-full h-64 md:h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2 leading-snug">
              {title}
            </h1>

            <div className="flex flex-wrap items-center gap-3 text-gray-600 dark:text-gray-300 mb-4">
              <span className="flex items-center gap-2">
                <User size={16} className="text-blue-500" />
                {postedBy}
              </span>
              <span className="flex items-center gap-2">
                <Tag size={16} className="text-purple-500" />
                {category}
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-green-500" />
                Remote
              </span>
            </div>

            <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-6">
              {summary}
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 mb-6">
              <h3 className="text-gray-800 dark:text-gray-100 font-semibold text-lg mb-2">
                Contact Information
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2">
                <Mail size={14} className="text-blue-600" />
                <span className="font-medium">{userEmail}</span>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            <button
              onClick={handleModalOpen}
              className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300"
            >
              Accept the Job
            </button>

            <button
              onClick={() => navigate(-1)}
              className="w-full sm:w-auto px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-semibold rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>

      {/* Task Modal */}
      <dialog
        ref={taskModalRef}
        id="task_modal"
        className="modal modal-bottom sm:modal-middle"
        onClick={(e) => {
          if (e.target === taskModalRef.current) taskModalRef.current.close();
        }}
      >
        <div className="modal-box rounded-2xl bg-white dark:bg-gray-900 shadow-2xl">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Accept Job: <span className="text-blue-600">{title}</span>
          </h3>

          <form onSubmit={handleTaskSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="workerName"
                defaultValue={user?.displayName || ""}
                readOnly
                required
                className="w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-1">
                Your Email
              </label>
              <input
                type="email"
                name="workerEmail"
                defaultValue={user?.email || ""}
                readOnly
                required
                className="w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-1">
                Task Submission Text
              </label>
              <textarea
                name="submissionText"
                required
                rows="4"
                placeholder="Describe your work plan or initial submission..."
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 dark:bg-gray-800 dark:text-gray-200 resize-none"
              ></textarea>
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={() => taskModalRef.current.close()}
                className="px-5 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Confirm Task
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default SomeJobDetails;
