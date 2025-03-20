"use client";
import React from "react";
import Link from "next/link";
import Badge from "./Badge";
import { ClipboardList, Users, LineChart } from "lucide-react"; // More suitable icons

const categories = [
  { name: "Jobs", icon: <ClipboardList size={18} />, url: "/job-interview" }, // ClipboardList represents job listings
  { name: "Candidates", icon: <Users size={18} />, url: "/candidates" }, // UserCheck represents verified candidates
  { name: "Results", icon: <LineChart size={18} />, url: "/job-interview" }, // LineChart represents analytical results
];



const Sidebar: React.FC = () => {
  return (
    <aside
      className=" w-60 bg-white  h-screen overflow-y-auto custom-scrollbar
                 transition-all duration-300 ease-in-out 
                 flex flex-col items-center px-4 py-3"
    >
      {/* Clickable Logo Section */}
      <Link href="/" className="mb-10">
        <h2 className="text-[26px] font-extrabold text-gray-800 tracking-tight cursor-pointer  transition">
          Reacuriter<span className="text-blue-600 ml-1">AI</span>
        </h2>
      </Link>

      {/* Navigation Menu */}
      <nav className="w-full flex flex-col gap-2">
        {categories.map((category) => (
          <Badge
            key={category.name}
            label={category.name}
            icon={category.icon}
            url={category.url}
          />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
