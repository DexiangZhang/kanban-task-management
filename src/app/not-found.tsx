"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
        404 - Not Found
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Oops! The page you are looking for does not exist.
      </p>
      <p className="text-gray-500 mt-2">
        It might have been moved, archived, or deleted.
      </p>
      <Link href="/">
        <button className="mt-8 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition-transform transform hover:scale-105">
          Go Back to main page
        </button>
      </Link>
    </div>
  );
}
