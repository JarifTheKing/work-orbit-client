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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
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
    ],
  },
]);

export default router;
