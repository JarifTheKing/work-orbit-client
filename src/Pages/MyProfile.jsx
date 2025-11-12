// import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Link } from "react-router";
import useAuth from "../Hooks/UseAuth";

const MyProfile = () => {
  // const { user } = useContext(AuthContext);
  const { user } = useAuth();
  //   const navigate = useNavigate();

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center 
  bg-gradient-to-br from-blue-100 to-indigo-100 
  dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 
  overflow-hidden p-6 transition-colors duration-500"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300/30 dark:bg-blue-700/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-200/40 dark:bg-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Profile Card */}
      <div
        className="relative z-10 bg-white/50 dark:bg-gray-800/50 backdrop-blur-2xl 
    rounded-3xl shadow-2xl w-full max-w-md p-8 border border-white/40 dark:border-gray-700 
    text-center transition-transform duration-500 hover:-translate-y-2 hover:shadow-blue-300/40 dark:hover:shadow-blue-500/30"
      >
        {/* Profile Image */}
        <div className="relative mx-auto mb-6">
          <div className="w-36 h-36 mx-auto rounded-full border-4 border-blue-500 dark:border-blue-400 shadow-lg overflow-hidden group">
            <img
              src={user?.photoURL || "/Haha.jpeg"}
              alt="Profile"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>

        {/* User Info */}
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
          {user?.displayName || "User"}
        </h2>
        <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
          {user?.email || "user@example.com"}
        </p>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
          Member since {new Date().getFullYear() - 1}
        </p>

        {/* Rating Section */}
        <div className="flex justify-around text-center mb-6">
          <div>
            <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              24
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Jobs Posted
            </p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              18
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Projects Done
            </p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              4.9⭐
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Rating</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4">
          <Link to="/updateProfile">
            <button
              className="px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 
          text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 
          transition-all duration-300"
            >
              Edit Profile
            </button>
          </Link>

          <Link
            to="/"
            className="px-5 py-2 bg-white dark:bg-transparent text-blue-600 dark:text-blue-400 
        border border-blue-500 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/40 
        hover:scale-105 transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 text-sm text-gray-600 dark:text-gray-400">
        <span className="text-blue-600 dark:text-blue-300 font-semibold">
          WorkOrbit
        </span>{" "}
        © {new Date().getFullYear()}
      </div>
    </section>
  );
};

export default MyProfile;
