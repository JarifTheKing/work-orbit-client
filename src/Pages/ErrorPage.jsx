// src/Pages/ErrorPage.jsx
import React from "react";
import { useRouteError, Link } from "react-router";
import { AlertTriangle } from "lucide-react";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
      <AlertTriangle className="text-red-500 w-16 h-16 mb-4" />
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Oops!</h1>
      <p className="text-gray-600 mb-4">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-red-600 mb-8">
        <i>{error?.statusText || error?.message}</i>
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
