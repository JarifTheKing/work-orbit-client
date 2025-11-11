// import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Link } from "react-router";
import useAuth from "../Hooks/UseAuth";

const MyProfile = () => {
  // const { user } = useContext(AuthContext);
  const { user } = useAuth();
  //   const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-white to-indigo-100 overflow-hidden p-6">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-200/40 rounded-full blur-3xl animate-pulse"></div>

      {/* Profile Card */}
      <div className="relative z-10 bg-white/30 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-md p-8 border border-white/40 text-center transition-transform duration-500 hover:-translate-y-2 hover:shadow-blue-300/50">
        <div className="relative mx-auto mb-6">
          <div className="w-36 h-36 mx-auto rounded-full border-4 border-blue-500 shadow-lg overflow-hidden group">
            <img
              src={user?.photoURL || "/Haha.jpeg"}
              alt="Profile"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>

        {/* User Info */}
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
          {user?.displayName || "User"}
        </h2>
        <p className="text-blue-600 font-medium mb-1">
          {user?.email || "user@example.com"}
        </p>
        <p className="text-gray-500 text-sm mb-6">
          Member since {new Date().getFullYear() - 1}
        </p>

        {/* Rating */}
        <div className="flex justify-around text-center mb-6">
          <div>
            <p className="text-2xl font-bold text-gray-800">24</p>
            <p className="text-sm text-gray-500">Jobs Posted</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-800">18</p>
            <p className="text-sm text-gray-500">Projects Done</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-800">4.9⭐</p>
            <p className="text-sm text-gray-500">Rating</p>
          </div>
        </div>

        {/*  Buttons */}
        <div className="flex justify-center gap-4">
          <Link to="/updateProfile">
            <button className="px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              Edit Profile
            </button>
          </Link>
          <Link
            to="/"
            className="px-5 py-2 bg-white text-blue-600 border border-blue-500 font-semibold rounded-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>

      <div className="absolute bottom-6 text-sm text-gray-500">
        <span className="text-blue-600 logo-font font-semibold">WorkOrbit</span>
        {"  "}© {new Date().getFullYear()}
      </div>
    </section>
  );
};

export default MyProfile;
