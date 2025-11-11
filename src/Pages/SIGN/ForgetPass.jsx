// import React, { useState } from "react";
// import { AuthContext } from "../../Context/AuthProvider";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router";
// import useAuth from "../../Hooks/UseAuth";

// const ForgetPass = () => {
//   const { resetPasswordByEmail } = useAuth();
//   const [submitting, setSubmitting] = useState(false);
//   const navigate = useNavigate();

//   // Handle password reset
//   const handleForgetBtn = (e) => {
//     e.preventDefault();
//     const userName = e.target.name.value;
//     const email = e.target.email.value;

//     console.log(userName, email);

//     setSubmitting(true);

//     resetPasswordByEmail(email)
//       .then(() => {
//         toast.success("Password reset email sent! Please check your inbox.");
//         e.target.reset();
//         setTimeout(() => navigate("/login"), 2000);
//       })
//       .catch((err) => {
//         toast.error(err.message);
//       })
//       .finally(() => {
//         setSubmitting(false);
//       });
//   };

//   return (
//     <div className="min-h-screen  flex items-center justify-center bg-gradient-to-br from-[#0e1a2b] via-[#12294b] to-[#1c3b70] p-6">
//       <div className="w-full max-w-md bg-[#101c3d]/80 backdrop-blur-lg border border-[#2079fe]/30 shadow-[0_0_25px_rgba(32,121,254,0.4)] rounded-2xl p-8 text-center animate-fadeIn">
//         <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3 drop-shadow-[0_0_15px_rgba(32,121,254,0.6)]">
//           Forgot Password?
//         </h1>
//         <p className="text-gray-300 text-base mb-8">
//           Enter your email address, and we’ll send you a link to reset your
//           password 🔒
//         </p>

//         <form onSubmit={handleForgetBtn} className="space-y-5">
//           {/* Name */}
//           <div className="text-left">
//             <label className="block text-gray-200 mb-1 text-sm font-medium">
//               User Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               className="w-full px-4 py-3 rounded-lg border border-[#2079fe]/40 bg-[#0b1530] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2079fe] transition-all"
//               placeholder="Your User Name"
//               required
//             />
//           </div>

//           {/* Email */}
//           <div className="text-left">
//             <label className="block text-gray-200 mb-1 text-sm font-medium">
//               Email Address
//             </label>
//             <input
//               type="email"
//               name="email"
//               className="w-full px-4 py-3 rounded-lg border border-[#2079fe]/40 bg-[#0b1530] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2079fe] transition-all"
//               placeholder="you@example.com"
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className={`w-full py-3 rounded-lg font-semibold text-white transition-all duration-300 ${
//               submitting
//                 ? "bg-[#2079fe]/60 cursor-not-allowed"
//                 : "bg-[#2079fe] hover:bg-[#3c8aff] shadow-[0_0_15px_rgba(32,121,254,0.6)] hover:shadow-[0_0_25px_rgba(32,121,254,0.8)]"
//             }`}
//             disabled={submitting}
//           >
//             {submitting ? "Sending..." : "Send Reset Link"}
//           </button>

//           {/* Back to login */}
//           <p className="text-gray-400 text-sm mt-4">
//             Remember your password?{"   "}
//             <a
//               href="/login"
//               className="text-[#84b2f8] font-semibold hover:text-[#2079fe] transition-colors"
//             >
//               Back to Login
//             </a>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ForgetPass;
