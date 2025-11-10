import { createBrowserRouter } from "react-router";
import Home from "../Components/Home";
import Root from "../Layout/Root";
import Register from "../Pages/SIGN/Register";
import Login from "../Pages/SIGN/Login";
import ForgetPass from "../Pages/SIGN/ForgetPass";
import AllJobs from "../Pages/AllJobs";
import AddAJob from "../Pages/AddAJob";
import MyTasks from "../Pages/MyTasks";
import PrivateRoute from "../Layout/PrivateRoute";
import JobDetails from "../Pages/JobDetails";
import SomeJobs from "../Components/Home/SomeJobs";
import MyProfile from "../Pages/MyProfile";
import UpdateProfile from "../Pages/UpdateProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        // loader: async () => {
        //   const res = await fetch("http://localhost:5000/someJobs");
        //   return res.json();
        // },
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/forgetPass",
        element: <ForgetPass></ForgetPass>,
      },
      {
        path: "/allJobs",
        element: <AllJobs></AllJobs>,

        loader: async () => {
          const res = await fetch("http://localhost:5000/allJobs");
          return res.json();
        },
      },
      {
        path: "/jobDetails",
        element: <JobDetails></JobDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allJobs/${params.id}`),
      },
      {
        path: "/someJobs",
        element: <SomeJobs></SomeJobs>,
        // loader: fetch("http://localhost:5000/someJobs"),
      },
      {
        path: "/add-a-job",
        element: (
          <PrivateRoute>
            <AddAJob></AddAJob>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-tasks",
        element: (
          <PrivateRoute>
            <MyTasks></MyTasks>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateProfile",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
