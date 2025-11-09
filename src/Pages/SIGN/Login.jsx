import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";

const Login = () => {
  const { logInWithEmail, setLoading, signInWithGoogle } =
    useContext(AuthContext);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  // Handle Email/Password Login
  const handleLogin = (e) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logInWithEmail(email, password)
      .then((result) => {
        const user = result.user;
        const name = user?.displayName;
        toast.success(`Welcome back, ${name || user.email}!`);
        form.reset();
        navigate("/");
      })
      .catch((error) => {
        console.error(error.message);
        toast.error(error.code);
      })
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
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      })
      .finally(() => {
        setSubmitting(false);
        setLoading(false);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* Left Section */}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login Now!</h1>
          <p className="py-6 text-gray-600">
            Access your account to explore your personalized dashboard and
            continue where you left off.
          </p>
        </div>

        {/* Right Section */}
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset space-y-3">
                {/* Email */}
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input input-bordered"
                  placeholder="Your email address"
                  required
                />

                {/* Password */}
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input input-bordered"
                  placeholder="Your password"
                  required
                />

                {/* Forgot Password */}
                <div className="text-right">
                  <Link to="/forgetPass">
                    <button
                      type="button"
                      className="link link-hover text-sm text-blue-500"
                    >
                      Forgot password?
                    </button>
                  </Link>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className="btn btn-primary mt-4 w-full"
                  disabled={submitting}
                >
                  {submitting ? "Logging in..." : "Login"}
                </button>

                <p className="text-center py-3 font-semibold text-gray-500">
                  OR
                </p>

                {/* Google Sign-In */}
                <button
                  type="button"
                  onClick={handleSignInWithGoogle}
                  className="btn bg-white text-black border-[#e5e5e5] w-full"
                  disabled={submitting}
                >
                  <svg
                    aria-label="Google logo"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="mr-2"
                  >
                    <g>
                      <path fill="#fff" d="m0 0H512V512H0" />
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      />
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      />
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                      />
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      />
                    </g>
                  </svg>
                  Continue with Google
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
