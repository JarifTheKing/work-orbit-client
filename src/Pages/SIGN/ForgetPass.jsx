import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const ForgetPass = () => {
  const { resetPasswordByEmail } = useContext(AuthContext);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  // Handle password reset
  const handleForgetBtn = (e) => {
    e.preventDefault();
    const userName = e.target.name.value;
    const email = e.target.email.value;

    console.log(userName, email);

    setSubmitting(true);

    resetPasswordByEmail(email)
      .then(() => {
        toast.success("Password reset email sent! Please check your inbox.");
        e.target.reset();
        setTimeout(() => navigate("/login"), 2000);
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <h1 className="text-4xl font-bold text-center">Forgot Password?</h1>
        <p className="text-gray-600 text-center mt-2">
          Enter your registered email address, and we’ll send you a link to
          reset your password.
        </p>

        <form
          onSubmit={handleForgetBtn}
          className="card bg-base-100 w-full max-w-sm shadow-2xl mt-6"
        >
          <div className="card-body">
            <fieldset className="fieldset space-y-3">
              {/* Name */}
              <label className="label"> User Name</label>
              <input
                type="text"
                name="name"
                className="input input-bordered"
                placeholder="Your User Name"
                required
              />
              {/* Email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input input-bordered"
                placeholder="Your email address"
                required
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary w-full"
                disabled={submitting}
              >
                {submitting ? "Sending..." : "Send Reset Password"}
              </button>

              {/* Back to login link */}
              <p className="text-center mt-3">
                <a href="/login" className="link link-hover text-blue-600">
                  Back to Login
                </a>
              </p>
            </fieldset>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPass;
