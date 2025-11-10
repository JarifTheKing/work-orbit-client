import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { Camera, User, CheckCircle2, Loader2 } from "lucide-react";
import { Triangle } from "react-loader-spinner";
import { AuthContext } from "../Context/AuthProvider";

const UpdateProfile = () => {
  const { user, updateUserProfile, setUser } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    setLoading(true);

    updateUserProfile(displayName, photoURL)
      .then(() => {
        setUser({ ...user, displayName, photoURL });
        toast.success("Profile updated successfully 🎉");
        navigate("/my-profile");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      })
      .finally(() => setLoading(false));
  };

  if (loading) {
    return (
      <div className="fixed inset-0 flex justify-center items-center bg-gradient-to-br from-blue-50 to-blue-100">
        <Triangle
          visible={true}
          height="100"
          width="100"
          color="#2563eb"
          ariaLabel="triangle-loading"
        />
      </div>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#1e40af] text-white overflow-hidden px-4">
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-[0_0_50px_-12px_rgba(59,130,246,0.6)] p-10 hover:shadow-blue-400/40 transition-all duration-500">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-500 text-transparent bg-clip-text">
            Update Profile
          </h2>
          <p className="text-gray-300 text-sm mt-2">
            Refresh your look — make it uniquely you 💫
          </p>
        </div>

        {/* Profile  */}
        <div className="relative mx-auto w-32 h-32 rounded-full border-4 border-blue-500 overflow-hidden shadow-lg group mb-8">
          <img
            src={photoURL || user?.photoURL || "/Haha.jpeg"}
            alt="Profile"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Camera className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleUpdate} className="space-y-5">
          <div>
            <label className="flex items-center text-blue-400 font-medium mb-1">
              <User className="w-4 h-4 mr-2" /> Display Name
            </label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-blue-400/40 text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300"
              placeholder="Enter your name"
              disabled={loading}
            />
          </div>

          <div>
            <label className="flex items-center text-blue-400 font-medium mb-1">
              <Camera className="w-4 h-4 mr-2" /> Photo URL
            </label>
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-blue-400/40 text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300"
              placeholder="Paste a new photo URL"
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full mt-6 py-3 flex items-center justify-center gap-2 rounded-lg font-semibold text-white transition-all duration-300 shadow-md ${
              loading
                ? "bg-blue-400 cursor-not-allowed opacity-80"
                : "bg-gradient-to-r from-blue-500 via-sky-500 to-indigo-500 hover:shadow-blue-400/40 hover:scale-[1.02] active:scale-[0.98]"
            }`}
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" /> Updating...
              </>
            ) : (
              <>
                <CheckCircle2 className="w-5 h-5" /> Save Changes
              </>
            )}
          </button>
        </form>

        <p className="text-gray-400 text-sm mt-8 text-center">
          <span className="text-blue-400 font-semibold">WorkOrbit</span> ©{" "}
          {new Date().getFullYear()} — built with passion 💙
        </p>
      </div>
    </section>
  );
};

export default UpdateProfile;
