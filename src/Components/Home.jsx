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

      {/* news Section */}
      <section className="py-16 bg-white">
        <div className="text-center mb-10 px-4">
          <h2 className="text-4xl font-bold text-gray-900">
            Discover Insights to Power Your Freelance Journey
          </h2>
          <p className="text-blue-600 font-medium mt-2">
            Tips, stories, and strategies to help you thrive in the digital
            workspace
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 lg:px-20">
          {/* news 1 */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
              alt="Freelance networking"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <p className="text-sm text-gray-500">
                November 10, 2025 • Networking
              </p>
              <h3 className="text-lg font-semibold text-gray-800 mt-2">
                Building Connections That Grow Your Freelance Career
              </h3>
              <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                Discover how genuine networking and collaboration open doors to
                long-term projects and trusted client relationships.
              </p>
            </div>
          </div>

          {/* news 2 */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=800&q=80"
              alt="Freelance productivity"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <p className="text-sm text-gray-500">
                November 7, 2025 • Productivity
              </p>
              <h3 className="text-lg font-semibold text-gray-800 mt-2">
                Mastering Time Management as a Freelancer
              </h3>
              <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                Learn practical ways to balance client work, personal projects,
                and rest without burning out or missing deadlines.
              </p>
            </div>
          </div>

          {/* news 3 */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
              alt="Freelance growth"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <p className="text-sm text-gray-500">November 3, 2025 • Growth</p>
              <h3 className="text-lg font-semibold text-gray-800 mt-2">
                Turning Freelancing Into a Full-Time Business
              </h3>
              <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                Explore how freelancers are scaling their services into personal
                brands and sustainable online businesses.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
