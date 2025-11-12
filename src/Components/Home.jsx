import React, { Suspense } from "react";
import Banner from "./Home/Banner";
import TopCategories from "./Home/TopCategories";
import { Triangle } from "react-loader-spinner";
import SomeJobs from "./Home/SomeJobs";
import Motion from "./Motion";

const someDataPromise = fetch(
  "https://workorbit-server.vercel.app/someJobs"
).then((res) => res.json());

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden flex flex-col items-center">
      <div className="w-full">
        <Banner></Banner>
      </div>

      {/* Featured Jobs */}
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen bg-white ">
            <Triangle
              visible={true}
              height="80"
              width="80"
              color="#2563eb"
              ariaLabel="triangle-loading"
            />
          </div>
        }
      >
        <div className="w-11/12 mx-auto">
          <Motion>
            <SomeJobs someDataPromise={someDataPromise}></SomeJobs>
          </Motion>
        </div>
      </Suspense>

      {/* How It Works */}

      <Motion>
        <section className="py-16 my-6 rounded-lg bg-gradient-to-b from-gray-100 to-blue-100 w-11/12  mx-auto">
          <div className="text-center mb-12 px-4">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-3">
              How <span className="text-blue-600 logo-font">WorkOrbit</span>{" "}
              Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whether you’re hiring top talent or finding your next freelance
              opportunity,{" "}
              <span className="font-semibold text-blue-500">WorkOrbit</span>{" "}
              makes it simple, secure, and fast.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-16">
            {[
              {
                title: "1. Create Your Account",
                img: "/signUp.png",
                desc: "Sign up for free in minutes and personalize your profile to start your freelance journey.",
              },
              {
                title: "2. Verify Your Email",
                img: "/idcon_1.png",
                desc: "Secure your profile and confirm your identity to connect safely with clients and freelancers.",
              },
              {
                title: "3. Post Jobs or Get Hired",
                img: "/post.jpeg",
                desc: "Post projects or find jobs that match your skills and collaborate with professionals globally.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-28 h-28 sm:w-32 sm:h-32 object-contain mb-6"
                />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Motion>

      {/* Freelance Growth Section */}
      <section className="bg-blue-900 text-white py-16 w-full">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 px-6 lg:px-16">
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <p className="text-blue-200 uppercase tracking-wide font-semibold">
              Empower Your Future
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Turn Your Skills Into Success — Connect With Global Opportunities
            </h2>
            <p className="text-blue-100 leading-relaxed text-sm sm:text-base">
              Join thousands of freelancers and businesses building the future
              of work. Whether you’re showcasing your talent or finding the
              right expert,
              <span className="font-semibold text-white"> WorkOrbit</span> helps
              you grow beyond boundaries.
            </p>
            <button className="mt-4 bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition-all duration-300">
              Post a Job Now
            </button>

            <div className="flex flex-wrap gap-6 mt-10 justify-center lg:justify-start">
              {[
                {
                  stat: "850K+",
                  text: "Active Freelancers",
                  color: "from-pink-400 to-fuchsia-500",
                },
                {
                  stat: "120K+",
                  text: "Jobs Posted Monthly",
                  color: "from-blue-500 to-cyan-400",
                },
                {
                  stat: "95%",
                  text: "Client Satisfaction",
                  color: "from-indigo-600 to-violet-700",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className={`bg-gradient-to-r ${card.color} text-white rounded-xl p-6 shadow-lg hover:-translate-y-1 transition-all duration-300 w-48 sm:w-56 text-center`}
                >
                  <h3 className="text-2xl sm:text-3xl font-extrabold">
                    {card.stat}
                  </h3>
                  <p className="text-sm font-medium mt-1">{card.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
              alt="Freelancer working happily"
              className="w-full max-w-[500px] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/*  About Section */}
      <Motion>
        <section className="relative py-16 my-6 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden rounded-xl shadow-md w-11/12 mx-auto">
          <div className="absolute top-0 left-0 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-56 h-56 bg-purple-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>

          <div className="relative text-center px-6 lg:px-12 z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              About{" "}
              <span className="text-blue-600 drop-shadow-md logo-font">
                WorkOrbit
              </span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              <span className="font-semibold text-blue-700 logo-font">
                WorkOrbit
              </span>{" "}
              is your digital launchpad for freelancing success. We bridge the
              gap between talented professionals and businesses seeking
              expertise — making every project smooth, transparent, and
              rewarding. Whether you’re here to hire, collaborate, or grow,{" "}
              <span className="font-medium text-blue-700 logo-font">
                WorkOrbit
              </span>{" "}
              empowers you to reach new heights in the world of remote work.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-6">
              {[
                {
                  title: "Global Opportunities",
                  desc: "Connect with clients and freelancers from across the world.",
                },
                {
                  title: "Secure Collaboration",
                  desc: "Work confidently with safe transactions and verified users.",
                },
                {
                  title: "Skill-Based Growth",
                  desc: "Showcase your expertise and grow through meaningful work.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/70 backdrop-blur-md border border-blue-100 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-72 p-6 text-center"
                >
                  <h3 className="text-lg font-semibold text-blue-700 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Motion>

      {/* News Section */}
      <Motion>
        <section className="py-16 my-6 rounded-lg bg-gradient-to-b from-gray-100 to-blue-100 w-11/12  mx-auto">
          <div className="text-center mb-10 px-4">
            <h2 className="text-4xl font-bold text-gray-900">
              Freelance Industry News & Insights
            </h2>
            <p className="text-blue-600 font-medium mt-2">
              Stay informed with the latest trends, success stories, and
              opportunities in freelancing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-16">
            {[
              {
                title:
                  "Global Freelancers Unite: Online Networking Events Surge in 2025",
                img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
                date: "November 10, 2025 • Networking",
                desc: "Virtual events are connecting freelancers worldwide, helping professionals collaborate across borders like never before.",
              },
              {
                title: "AI Tools Revolutionize Freelance Productivity",
                img: "https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=800&q=80",
                date: "November 8, 2025 • Productivity",
                desc: "Freelancers are leveraging new AI assistants to automate repetitive work, boost efficiency, and free up creative energy.",
              },
              {
                title:
                  "Freelance Market Hits Record Growth as Remote Work Expands",
                img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
                date: "November 6, 2025 • Economy",
                desc: "With companies embracing flexible hiring, global freelance income grows by 18% in 2025 according to new industry data.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden w-full"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-56 object-cover"
                />
                <div className="flex flex-col justify-between flex-1 p-5">
                  <div>
                    <p className="text-sm text-gray-500">{item.date}</p>
                    <h3 className="text-lg font-semibold text-gray-800 mt-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <button
                    onClick={() => (window.location.href = "/news")}
                    className="mt-6 inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors self-start"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Motion>

      {/* Top Categories */}
      <div className="my-6 rounded-lg bg-gradient-to-b from-gray-100 to-blue-100 w-11/12  mx-auto">
        {/* <Motion> */}
        <TopCategories></TopCategories>
        {/* </Motion> */}
      </div>
    </div>
  );
};

export default Home;
