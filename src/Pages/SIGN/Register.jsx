import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import useAxiosSecure from "../../Hooks/UseAxiosSecure";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const Register = () => {
  const { registerWithEmail, setLoading, signInWithGoogle } =
    useContext(AuthContext);

  const axiosSecure = useAxiosSecure();

  const [show, setShow] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  // Handle Register
  const handleRegister = (e) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.target;
    const name = form.name.value;
    const userName = form.userName.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ form, name, userName, photoURL, email, password });

    // Password validation
    const validatePassword = (p) => {
      if (p.length < 6) return "Password must be at least 6 characters.";
      if (!/[A-Z]/.test(p)) return "Include at least one uppercase letter.";
      if (!/\d/.test(p)) return "Include at least one number.";
      if (!/[!@#$%^&*(),.?":{}|<>]/.test(p))
        return "Include at least one special character.";
      return null;
    };
    // const validatePassword = (p) => {
    //   if (p.length < 6) return "Password must be at least 6 characters.";
    //   if (!/[A-Z]/.test(p)) return "Include at least one uppercase letter.";
    //   if (!/[a-z]/.test(p)) return "Include at least one lowercase letter.";
    //   return null;
    // };

    const error = validatePassword(password);
    if (error) {
      toast.error(error);
      setSubmitting(false);
      return;
    }

    //  Sign Up
    registerWithEmail(email, password)
      .then((result) => {
        const user = result.user;
        toast.success(`Welcome, ${name || user.email}!`);

        const newUser = {
          name: name || user.displayName || "User",
          userName: user.userName || "Unknown User",
          email: user.email,
          photoURL: user.photoURL || "",
        };

        // Create User in the DATABASE

        axiosSecure
          .post("/users", newUser)
          .then((data) => {
            toast.success(" User saved to DB:", data.data);
          })
          .catch((error) => {
            toast.error(" Error saving user:", error);
          });

        form.reset();
        navigate("/");
      })
      .catch((error) => toast.error(error.message))
      .finally(() => {
        setSubmitting(false);
        setLoading(false);
      });
  };

  // Handle Google Sign-In
  const handleSignInWithGoogle = () => {
    setSubmitting(true);
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        toast.success(`Welcome, ${user.displayName || "User"}!`);

        const newUser = {
          name: name || user.displayName || "User",
          userName: user.userName || "Unknown User",
          email: user.email,
          photoURL: user.photoURL || "",
        };

        // Create User in the DATABASE
        axiosSecure
          .post("/users", newUser)
          .then((data) => {
            toast.success(" User saved to DB:", data.data);
          })
          .catch((error) => {
            toast.error(" Error saving user:", error);
          });
        navigate("/");
      })
      .catch((error) => toast.error(error.message))
      .finally(() => {
        setSubmitting(false);
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 min-h-screen bg-gradient-to-br from-[#5A6DD6] via-[#2C173B] to-[#120357] overflow-hidden px-6 py-10">
      {/* Left Section  */}
      <div className="hidden lg:flex flex-col text-center items-center mb-10 lg:mb-0 lg:pr-10">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-snug drop-shadow-[0_0_15px_rgba(32,121,254,0.8)]">
          Join the{" "}
          <span className="text-[#84b2f8] logo-font font-bold">WorkOrbit</span>{" "}
          Community
        </h1>
        <p className="text-gray-300 text-lg mt-4">
          Create your account and start exploring new opportunities 🌍
        </p>
        <img
          src="/gagag.jpeg"
          alt="Register Illustration"
          className="mx-auto mt-8 w-72 lg:w-96 rounded-xl shadow-[0_0_25px_rgba(32,121,254,0.5)]"
        />
      </div>

      {/* Right Section */}
      <div className="relative w-full max-w-sm sm:max-w-md p-[3px] rounded-2xl border border-[#2079fe] bg-gradient-to-r from-[#2079fe]/20 via-sky-400/20 to-cyan-400/20 shadow-[0_0_25px_rgba(32,121,254,0.3)] hover:shadow-[0_0_45px_rgba(32,121,254,0.8)] transition-all duration-500">
        <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 sm:p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-white tracking-wide">
              Create Your{" "}
              <span className="text-[#82b0f5] logo-font">Account</span>
            </h2>
            <p className="text-gray-300 text-sm mt-1">
              It only takes a minute to get started 🚀
            </p>
          </div>

          {/* Register Form */}
          <form onSubmit={handleRegister} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="label text-gray-200 text-sm">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-lg bg-white/80 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#2079fe] outline-none transition-all duration-300"
                required
              />
            </div>

            {/* Username */}
            <div>
              <label className="label text-gray-200 text-sm">Username</label>
              <input
                type="text"
                name="userName"
                placeholder="Choose a username"
                className="w-full px-4 py-3 rounded-lg bg-white/80 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#2079fe] outline-none transition-all duration-300"
              />
            </div>

            {/* Photo URL */}
            <div>
              <label className="label text-gray-200 text-sm">Photo URL</label>
              <input
                type="text"
                name="photoURL"
                placeholder="Enter your profile photo URL"
                className="w-full px-4 py-3 rounded-lg bg-white/80 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#2079fe] outline-none transition-all duration-300"
              />
            </div>

            {/* Email */}
            <div>
              <label className="label text-gray-200 text-sm">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-white/80 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#2079fe] outline-none transition-all duration-300"
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="label text-gray-200 text-sm">Password</label>
              <input
                type={show ? "text" : "password"}
                name="password"
                placeholder="Create a strong password"
                className="w-full px-4 py-3 rounded-lg bg-white/80 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#2079fe] outline-none transition-all duration-300"
                required
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute right-3 top-[38px] cursor-pointer text-gray-700"
              >
                {show ? <FaEye /> : <IoEyeOff />}
              </span>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3 rounded-lg font-semibold text-white bg-[#2079fe] hover:bg-[#1d66d6] transition-all duration-300 shadow-[0_0_20px_rgba(32,121,254,0.5)] hover:shadow-[0_0_30px_rgba(32,121,254,0.8)]"
            >
              {submitting ? "Registering..." : "Register"}
            </button>
          </form>

          {/* Divider */}
          <div className="text-center text-gray-300 text-sm mt-6 mb-4">OR</div>

          {/* Google Register */}
          <button
            type="button"
            onClick={handleSignInWithGoogle}
            disabled={submitting}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-gray-900 bg-white hover:bg-gray-100 font-medium transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            <FcGoogle className="text-2xl" /> Continue with Google
          </button>

          {/* Login Link */}
          <p className="text-center text-gray-300 mt-6 text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#2079fe] font-semibold hover:underline"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
