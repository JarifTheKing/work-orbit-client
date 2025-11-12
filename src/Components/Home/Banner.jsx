import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden min-h-screen"
      style={{
        backgroundImage: "url('/home.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1c]/10 via-[#0C3D2E]/50 to-[#102650]/10"></div>

      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-[#2079fe]/30 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#84b2f8]/25 rounded-full blur-[180px]"></div>

      <div className="relative z-10 text-center text-white px-6 md:px-12">
        <motion.h1
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-[0_0_25px_rgba(32,121,254,0.7)]"
        >
          Welcome to{" "}
          <span className="text-[#84b2f8] logo-font font-bold">WorkOrbit</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-gray-200 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          <span className="bg-[#2079fe]/60 text-[#d6e4ff] font-semibold py-1 px-3 rounded-full mr-2 shadow-[0_0_10px_rgba(32,121,254,0.6)]">
            🔓 Unlock
          </span>
          your potential with global freelance opportunities & earn from
          world-leading brands.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: false, amount: 0.2 }}
          className="max-w-2xl mx-auto text-gray-300 text-base md:text-lg mb-10 leading-relaxed"
        >
          Build your future with creativity, collaboration, and consistency 🌍.
        </motion.p>

        {/* Buttons (kept commented out) */}
        {/* <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-3 rounded-xl font-semibold text-white bg-[#2079fe] hover:bg-[#3b91ff] shadow-[0_0_25px_rgba(32,121,254,0.7)] hover:shadow-[0_0_35px_rgba(32,121,254,0.9)] transition-all duration-300">
            Get Started
          </button>

          <button className="px-8 py-3 rounded-xl font-semibold border border-[#2079fe]/60 text-[#84b2f8] hover:text-white hover:bg-[#2079fe]/20 backdrop-blur-md transition-all duration-300">
            Learn More
          </button>
        </div> */}
      </div>

      <div className="absolute bottom-0 w-full h-[200px] bg-gradient-to-t from-[#2079fe]/25 to-transparent blur-2xl"></div>
    </section>
  );
};

export default Banner;
