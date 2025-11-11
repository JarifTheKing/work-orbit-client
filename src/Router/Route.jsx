import { createBrowserRouter } from "react-router";
import Home from "../Components/Home";
import Root from "../Layout/Root";
import Register from "../Pages/SIGN/Register";
import Login from "../Pages/SIGN/Login";
// import ForgetPass from "../Pages/SIGN/ForgetPass";
import AllJobs from "../Pages/AllJobs";
import AddAJob from "../Pages/AddAJob";
import MyTasks from "../Pages/MyTasks";
import PrivateRoute from "../Layout/PrivateRoute";
import JobDetails from "../Pages/SomeJobDetails";
import SomeJobs from "../Components/Home/SomeJobs";
import MyProfile from "../Pages/MyProfile";
import UpdateProfile from "../Pages/UpdateProfile";
import ErrorPage from "../Pages/ErrorPage";
import SomeJobDetails from "../Pages/SomeJobDetails";
import AllJobDetails from "../Pages/AllJobDetails";
import UpdateJob from "../Pages/UpdateJob";
import MyAddedJobs from "../Pages/MyAddedJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        // loader: async () => {
        //   const res = await fetch("https://workorbit-server.vercel.app/someJobs");
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
      // {
      //   path: "/forgetPass",
      //   element: <ForgetPass></ForgetPass>,
      // },
      {
        path: "/allJobs",
        element: <AllJobs></AllJobs>,

        loader: async () => {
          const res = await fetch(
            "https://workorbit-server.vercel.app/allJobs"
          );
          return res.json();
        },
      },
      {
        path: "/allJobDetails/:id",
        element: (
          <PrivateRoute>
            <AllJobDetails></AllJobDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://workorbit-server.vercel.app/allJobs/${params.id}`),
      },
      {
        path: "/jobDetails/:id",
        element: (
          <PrivateRoute>
            <SomeJobDetails></SomeJobDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://workorbit-server.vercel.app/someJobs/${params.id}`),
      },
      {
        path: "/someJobs",
        element: <SomeJobs></SomeJobs>,
        // loader: fetch("https://workorbit-server.vercel.app/someJobs"),
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
        path: "/updateJob/:id",
        element: (
          <PrivateRoute>
            <UpdateJob></UpdateJob>
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
      {
        path: "/myAddedJobs",
        element: (
          <PrivateRoute>
            <MyAddedJobs></MyAddedJobs>
          </PrivateRoute>
        ),
      },
      // {
      //   path: "*",
      //   element: <ErrorPage></ErrorPage>,
      // },
    ],
  },
]);

export default router;
