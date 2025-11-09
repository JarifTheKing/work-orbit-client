import { createBrowserRouter } from "react-router";
import Home from "../Components/Home";
import Root from "../Layout/Root";
import Register from "../Pages/SIGN/Register";
import Login from "../Pages/SIGN/Login";
import ForgetPass from "../Pages/SIGN/ForgetPass";

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
    ],
  },
]);

export default router;
