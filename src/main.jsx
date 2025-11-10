import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import router from "./Router/Route.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
import LoadingProvider from "./Pages/LoadingProvider.jsx";
import { Toaster } from "react-hot-toast";
// import { Loader } from "lucide-react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      {/* <LoadingProvider> */}
      <RouterProvider router={router}></RouterProvider>
      <Toaster position="top-center"></Toaster>
      {/* </LoadingProvider> */}
    </AuthProvider>
  </StrictMode>
);
