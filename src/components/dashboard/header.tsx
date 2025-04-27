import React from "react";
import Link from "next/link";

export const DashboardHeader = () => {
  return (
    <header className="dashboard-header h-16 flex items-center px-6 border-b border-gray-800">
      <div className="flex-1">
        <h1 className="text-xl font-bold">LUXAI STARTUP</h1>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="/" className="text-sm text-gray-300 hover:text-white">
          Home
        </Link>
        <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center">
          <span className="text-sm font-medium">LX</span>
        </div>
      </div>
    </header>
  );
};
