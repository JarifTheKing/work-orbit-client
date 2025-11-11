import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { Triangle } from "react-loader-spinner";
import Swal from "sweetalert2";

const UpdateJob = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/allJobs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setJob(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedJob = {
      title: form.title.value,
      category: form.category.value,
      summary: form.summary.value,
      coverImage: form.coverImage.value,
    };

    fetch(`http://localhost:5000/allJobs/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("🎉 Job updated successfully!");
          Swal.fire({
            title: "✅ Success!",
            text: "Your job has been updated successfully.",
            icon: "success",
            confirmButtonColor: "#2563eb",
          });
          navigate("/allJobs");
        } else {
          toast.info("⚠️ No changes were made!");
          Swal.fire({
            title: "No Changes Detected",
            text: "You didn’t modify any field.",
            icon: "info",
            confirmButtonColor: "#2563eb",
          });
        }
      })
      .catch((err) => {
        toast.error(" Update failed: " + err.message);
        Swal.fire({
          title: "Error!",
          text: "Something went wrong while updating your job.",
          icon: "error",
          confirmButtonColor: "#dc2626",
        });
      });
  };

  // Loading Spinner
  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-blue-50 to-blue-100 space-y-4">
        <Triangle
          visible={true}
          height="100"
          width="100"
          color="#2563eb"
          ariaLabel="triangle-loading"
        />
        <p className="text-blue-700 text-lg font-semibold animate-pulse">
          Fetching your job details... ⏳
        </p>
      </div>
    );
  }

  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 via-white to-blue-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white shadow-2xl rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1">
        <h2 className="text-4xl font-extrabold text-center mb-3 text-blue-700 drop-shadow">
          Update Your Job ✨
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Give your post a fresh update — make it stand out and attract the best
          freelancers!
        </p>

        <form onSubmit={handleUpdate} className="space-y-5">
          <div>
            <label className="block font-semibold mb-1 text-gray-700">
              Job Title
            </label>
            <input
              type="text"
              name="title"
              defaultValue={job.title}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-gray-700">
              Category
            </label>
            <input
              type="text"
              name="category"
              defaultValue={job.category}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-gray-700">
              Cover Image URL
            </label>
            <input
              type="text"
              name="coverImage"
              defaultValue={job.coverImage}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-gray-700">
              Job Summary
            </label>
            <textarea
              name="summary"
              defaultValue={job.summary}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              rows="4"
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-8">
            <button type="submit" className="flex-1 btn btn-primary ">
              Save Changes
            </button>

            <button
              type="button"
              onClick={() => navigate("/allJobs")}
              className="flex-1 bg-gray-200 text-gray-700 py-2.5 rounded-md font-semibold  hover:bg-gray-300 transition-transform hover:scale-[1.02]"
            >
              Go Back
            </button>
          </div>
        </form>

        <p className="text-center text-gray-500 text-sm mt-6 italic">
          Tip 💡: Keep your job description short, clear, and attractive — great
          jobs attract great talent!
        </p>

        <p className="text-center text-gray-600 text-sm mt-2 font-semibold">
          Thanks for updating with{" "}
          <span className="font-bold logo-font text-blue-700">WorkOrbit</span>!
        </p>
      </div>
    </div>
  );
};

export default UpdateJob;
