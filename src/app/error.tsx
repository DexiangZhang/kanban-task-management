"use client";

export default function Error({ error, reset }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 text-center px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-red-800">
        Something went wrong!
      </h2>
      <p className="mt-4 text-lg text-gray-700">
        We're having trouble loading this page. Please try refreshing or come
        back later
      </p>
      <button
        onClick={() => reset()}
        className="mt-8 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 transition-transform transform hover:scale-105"
      >
        Try Again
      </button>
    </div>
  );
}
