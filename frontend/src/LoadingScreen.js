// LoadingScreen.js
import React from "react";

const LoadingScreen = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 space-y-4">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500"></div>
      <p className="text-3xl font-semibold animate-pulse">Loading...</p>
    </div>
  );
};

export default LoadingScreen;
