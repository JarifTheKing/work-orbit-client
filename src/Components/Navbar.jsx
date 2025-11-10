import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    logOut()
      .then(() => {
        toast.success(`Welcome, ${name || user.email}!`);

        navigate("/login");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
  };

  return (
    <div className="navbar bg-blue-800 text-white shadow-sm">
      <div className="navbar-start">
        {/* Mobile dropdown */}
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

          {/* Mobile menu */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
          >
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
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="btn btn-ghost text-xl lg:text-3xl   logo-font">
          WorkOrbit
        </Link>
      </div>

      {/* Center section */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
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
        </ul>
      </div>

      {/* End section */}

      {user ? (
        <div className="navbar-end space-x-2">
          <Link to="/login">
            <img
              className=" rounded-full border border-amber-500 w-[50px] h-[50px]"
              src={user?.photoURL}
              alt=""
            />
          </Link>
          <Link
            onClick={handleSignOut}
            to="/login"
            className="btn btn-primary text-white"
          >
            Logout
          </Link>
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

      {/* <div className="navbar-end space-x-2">
        <Link to="/login" className="btn btn-outline btn-primary">
          Login
        </Link>
        <Link to="/register" className="btn btn-primary text-white">
          Register
        </Link>
      </div> */}
    </div>
  );
};

export default Navbar;
