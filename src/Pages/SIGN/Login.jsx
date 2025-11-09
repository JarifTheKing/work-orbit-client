import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const Login = () => {
  const { logInWithEmail, setLoading, signInWithGoogle } =
    useContext(AuthContext);
  const [submitting, setSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Email Login
  const handleLogin = (e) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logInWithEmail(email, password)
      .then((result) => {
        const user = result.user;
        toast.success(`Welcome back, ${user.displayName || user.email}!`);
        form.reset();
        navigate("/");
      })
      .catch((error) => toast.error(error.code))
      .finally(() => {
        setSubmitting(false);
        setLoading(false);
      });
  };

  // Google Login
  const handleSignInWithGoogle = () => {
    setSubmitting(true);
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        toast.success(`Welcome, ${user.displayName || "User"}!`);
        navigate("/");
      })
      .catch((error) => toast.error(error.message))
      .finally(() => {
        setSubmitting(false);
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 min-h-screen bg-gradient-to-br from-[#5A6DD6] via-[#462254] to-[#132a72] overflow-hidden px-6 py-10">
      {/* Left Section  */}
      <div className="hidden lg:flex flex-col text-center items-center mb-10 lg:mb-0 lg:pr-10">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-snug drop-shadow-[0_0_15px_rgba(32,121,254,0.8)]">
          Welcome to{" "}
          <span className="text-[#84b2f8] logo-font font-bold">WorkOrbit</span>
        </h1>
        <p className="text-gray-300 text-lg mt-4">
          Your freelance journey starts here. Connect, collaborate, and grow 🚀
        </p>
        <img
          src="/Haha.jpeg"
          alt="Login Illustration"
          className="mx-auto mt-8 w-72 lg:w-96 rounded-xl shadow-[0_0_25px_rgba(32,121,254,0.5)]"
        />
      </div>

      {/* Right Section */}
      <div className="relative w-full max-w-sm sm:max-w-md p-[3px] rounded-2xl border border-[#2079fe] bg-gradient-to-r from-[#2079fe]/20 via-sky-400/20 to-cyan-400/20 shadow-[0_0_25px_rgba(32,121,254,0.3)] hover:shadow-[0_0_45px_rgba(32,121,254,0.8)] transition-all duration-500">
        <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 sm:p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-white tracking-wide">
              Log In to{" "}
              <span className="text-[#82b0f5] logo-font">WorkOrbit</span>
            </h2>
            <p className="text-gray-300 text-sm mt-1">
              Continue your creative journey ✨
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-5">
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
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-lg bg-white/80 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#2079fe] outline-none transition-all duration-300"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-[42px] cursor-pointer text-gray-700 hover:text-[#2079fe] transition-colors"
              >
                {showPassword ? <FaEye /> : <IoEyeOff />}
              </span>
            </div>

            {/* Forgot Password */}
            <div className="text-right text-sm">
              <Link to="/forgetPass" className="text-[#2079fe] hover:underline">
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3 rounded-lg font-semibold text-white bg-[#2079fe] hover:bg-[#1d66d6] transition-all duration-300 shadow-[0_0_20px_rgba(32,121,254,0.5)] hover:shadow-[0_0_30px_rgba(32,121,254,0.8)]"
            >
              {submitting ? "Logging in..." : "Log In"}
            </button>
          </form>

          {/* Divider */}
          <div className="text-center text-gray-300 text-sm mt-6 mb-4">OR</div>

          {/* Google Login */}
          <button
            type="button"
            onClick={handleSignInWithGoogle}
            disabled={submitting}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-gray-900 bg-white hover:bg-gray-100 font-medium transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            <FcGoogle className="text-2xl" /> Continue with Google
          </button>

          {/* Register Link */}
          <p className="text-center text-gray-300 mt-6 text-sm">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-[#2079fe] font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
