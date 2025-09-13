"use client";

export default function Loading() {
  return (
    <div className="w-full min-h-screen p-4 sm:p-6 md:p-8 bg-gray-50">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-300 rounded-md w-1/3 mb-8"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[...Array(3)]?.map((_, i) => (
            <div key={i} className="bg-gray-200 rounded-lg p-4">
              <div className="h-6 bg-gray-300 rounded-md w-3/4 mb-4"></div>
              <div className="space-y-3">
                <div className="h-24 bg-gray-300 rounded-lg"></div>
                <div className="h-24 bg-gray-300 rounded-lg"></div>
                <div className="h-24 bg-gray-300 rounded-lg w-5/6"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
