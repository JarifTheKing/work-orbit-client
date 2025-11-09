import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import { Toaster } from "react-hot-toast";
import { Bounce, ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <header>
          <Navbar></Navbar>
        </header>

        <main className="flex-1">
          <Outlet></Outlet>
        </main>

        <footer className="">
          <Footer></Footer>
        </footer>

        <Toaster position="top-center" reverseOrder={false} />

        {/* <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
        /> */}
      </div>
    </div>
  );
};

export default Root;
