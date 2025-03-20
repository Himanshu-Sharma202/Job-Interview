"use client";

import React from "react";
import { usePathname } from "next/navigation"; 
import { Bell, Search,UserCircle } from "lucide-react";


const Navbar = () => {
  const pathname = usePathname(); // Get current route

  // Extract and format the page name
  const pageTitle = pathname
    .replace("/", "") // Remove leading slash
    .replace(/-/g, " ") // Replace hyphens with spaces
    .replace(/\b\w/g, (char) => char.toUpperCase()) || "Dashboard"; // Capitalize first letter

  return (
    <nav className="flex justify-between items-center bg-white  p-4 md:p-4 w-full">
      {/* Left Section - Dynamic Page Title */}
      <h1 className="text-[20px] font-semibold text-gray-800 capitalize">{pageTitle}</h1>


     

      {/* Right Section - Icons */}
      <div className=" items-center gap-x-4 hidden">
        {/* Notifications */}
        <button className="relative p-2 rounded-md hover:bg-gray-100 transition">
          <Bell className="w-6 h-6 text-gray-700" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
            3
          </span>
        </button>

        {/* User Profile */}
        <div className="relative">
          <button className="flex items-center gap-x-2 p-2 rounded-md hover:bg-gray-100 transition">
            <UserCircle className="w-6 h-6 text-gray-700" />
            <span className="hidden md:block text-gray-700 font-medium">Ram Sharma</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
