import React from "react";
import Banner from "./Home/Banner";
import AllJobs from "../Pages/AllJobs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      {/* How It Works Section */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="text-center mb-12 px-4">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-3">
            How <span className="text-blue-600 logo-font">WorkOrbit</span> Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you’re hiring talent or finding your next freelance
            opportunity,
            <span className="font-semibold text-blue-500"> WorkOrbit</span>{" "}
            makes the process simple, secure, and fast.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-8 lg:px-24">
          {/* Create Account */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
            <img
              src="/signUp.png"
              alt="Sign up"
              className="w-32 h-32 object-contain mb-6"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              1. Create Your Account
            </h3>
            <p className="text-gray-600">
              Join WorkOrbit for free in minutes and set up your profile to
              start your freelance journey.
            </p>
          </div>

          {/* Verify Email */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
            <img
              src="/idcon_1.png"
              alt="Verify email"
              className="w-32 h-32 object-contain mb-6"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              2. Verify Your Email
            </h3>
            <p className="text-gray-600">
              Confirm your identity securely and make your account ready for
              clients and freelancers.
            </p>
          </div>

          {/* Get Hired */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
            <img
              src="/post.jpeg"
              alt="Post jobs"
              className="w-32 h-32 object-contain mb-6"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              3. Post Jobs or Get Hired
            </h3>
            <p className="text-gray-600">
              Post your project or explore available jobs. Collaborate and grow
              your career online with confidence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
