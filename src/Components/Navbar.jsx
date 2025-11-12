import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  // -------------------
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };
  // -------------------

  // const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // useEffect(() => {
  //   const html = document.querySelector("html");
  //   html.setAttribute("data-theme", theme);
  //   localStorage.setItem("theme", theme);
  // }, [theme]);

  // const handleTheme = (checked) => {
  //   const newTheme = checked ? "dark" : "light";
  //   setTheme(newTheme);
  //   localStorage.setItem("theme", newTheme);
  // };

  const handleSignOut = () => {
    logOut()
      .then(() => {
        toast.success(
          `Goodbye, ${user?.displayName || user?.email || "User"}!`
        );
        navigate("/login");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allJobs"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          All Jobs
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink
              to="/add-a-job"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Add a Job
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-tasks"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              My Accepted Tasks
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myAddedJobs"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              My Added Jobs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-profile"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              My Profile
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-blue-800 text-white shadow-sm">
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-blue-800 rounded-box mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        {/* Theme Toggle */}
        <li>
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              onChange={(e) => handleTheme(e.target.checked)}
              type="checkbox"
              defaultChecked={localStorage.getItem("theme") === "dark"}
              //  className="toggle"
              // onChange={(e) => handleTheme(e.target.checked)}
              // type="checkbox"
              className="theme-controller"
              // value="synthwave"
            />

            {/* sun icon */}
            <svg
              className="swap-off h-8 w-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on h-8 w-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </li>

        {/* Logo */}
        <Link to="/" className="btn btn-ghost text-xl lg:text-3xl logo-font">
          WorkOrbit
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 bg-blue-800">{links}</ul>
      </div>

      {user ? (
        <div className="navbar-end space-x-2">
          <div className="group relative flex gap-2 items-center">
            <Link to="/my-profile">
              <img
                className="rounded-full border border-white cursor-pointer transition-transform duration-300 group-hover:scale-110"
                width="50"
                height="50"
                src={
                  user?.photoURL ||
                  "https://img.icons8.com/3d-fluency/94/guest-male--v3.png"
                }
                alt={user?.displayName}
                title={user?.displayName || "User"}
              />
            </Link>
            <h2 className="absolute left-[-80px] top-[10px] text-sm bg-blue-500 text-white p-2 rounded-md font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {user?.displayName || "Guest"}
            </h2>

            <button onClick={handleSignOut} className="btn btn-primary">
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className="navbar-end space-x-2">
          <Link to="/login" className="btn btn-outline btn-primary">
            Login
          </Link>
          <Link to="/register" className="btn btn-primary text-white">
            Register
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
