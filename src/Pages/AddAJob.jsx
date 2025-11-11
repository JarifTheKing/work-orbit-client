import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthProvider";
import { useNavigate } from "react-router";

const AddAJob = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAddJob = (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const newJob = {
      title: form.title.value,
      category: form.category.value,
      summary: form.summary.value,
      coverImage: form.coverImage.value,
      postedBy: user?.displayName || "Anonymous",
      userEmail: user?.email,
      postedDate: new Date().toISOString(),
    };

    fetch("http://localhost:5000/myAddedJobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          title: "Job Added Successfully!",
          text: "Your job is now visible on the My Added Jobs page.",
          icon: "success",
          confirmButtonColor: "#2563eb",
        }).then(() => {
          navigate("/myAddedJobs");
        });
        form.reset();
      })
      .catch(() =>
        Swal.fire({
          title: "Error!",
          text: "Failed to add job. Try again later.",
          icon: "error",
        })
      )
      .finally(() => setLoading(false));
  };

  return (
    <section className="min-h-screen rounded-lg bg-gradient-to-b from-gray-100 to-blue-100 flex justify-center items-center px-6 py-16">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-3xl p-8 border border-gray-100">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Add a <span className="text-blue-600">New Job</span>
        </h1>

        <form onSubmit={handleAddJob} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Job Title
            </label>
            <input
              type="text"
              name="title"
              required
              placeholder="Enter job title"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-300 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Category
            </label>
            <select
              name="category"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-300 outline-none"
            >
              <option value="">Select a Category</option>
              <option value="Web Development">Web Development</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Writing & Translation">
                Writing & Translation
              </option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Cover Image URL
            </label>
            <input
              type="text"
              name="coverImage"
              required
              placeholder="https://example.com/image.jpg"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-300 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Job Summary
            </label>
            <textarea
              name="summary"
              required
              rows="4"
              placeholder="Describe the job details..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-300 outline-none resize-none"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Posted By
              </label>
              <input
                type="text"
                name="postedBy"
                value={user?.displayName || ""}
                readOnly
                className="w-full border border-gray-300 bg-gray-100 rounded-lg px-4 py-2 text-gray-700"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="userEmail"
                value={user?.email || ""}
                readOnly
                className="w-full border border-gray-300 bg-gray-100 rounded-lg px-4 py-2 text-gray-700"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 mt-4 font-semibold text-white rounded-lg transition-all duration-300 ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Posting..." : "Add Job"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddAJob;
