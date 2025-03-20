"use client";
import React from "react";
import { Eye, MapPin, Briefcase, UserX } from "lucide-react";

const candidates = [
    {
      id: 1,
      name: "Amit Sharma",
      position: "Software Engineer",
      experience: "5 years",
      location: "Bengaluru, India",
      resumeUrl: "/resumes/amitsharma.pdf",
    },
    {
      id: 2,
      name: "Priya Mehta",
      position: "Product Manager",
      experience: "7 years",
      location: "Mumbai, India",
      resumeUrl: "/resumes/priyamehta.pdf",
    },
    {
      id: 3,
      name: "Rahul Verma",
      position: "UI/UX Designer",
      experience: "4 years",
      location: "Pune, India",
      resumeUrl: "/resumes/rahulverma.pdf",
    },
    {
      id: 4,
      name: "Sneha Iyer",
      position: "Data Analyst",
      experience: "6 years",
      location: "Hyderabad, India",
      resumeUrl: "/resumes/snehaiyer.pdf",
    },
    {
      id: 5,
      name: "Vikram Singh",
      position: "DevOps Engineer",
      experience: "8 years",
      location: "Delhi, India",
      resumeUrl: "/resumes/vikramsingh.pdf",
    },
    {
      id: 6,
      name: "Anjali Nair",
      position: "HR Manager",
      experience: "5 years",
      location: "Chennai, India",
      resumeUrl: "/resumes/anjalinair.pdf",
    },
  ];
  
  

const Candidates: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="shadow-lg w-full  h-screen rounded-lg bg-white p-8 border border-gray-200">
        {/* Header */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 ">
          Candidates List
        </h2>

        {/* No Candidates Message */}
        {candidates.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-gray-500 py-10">
            <UserX size={40} className="text-red-500 mb-2" />
            <p className="text-lg font-medium">No candidates available.</p>
          </div>
        ) : (
          /* Candidate Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {candidates.map((candidate) => (
              <div
                key={candidate.id}
                className="flex items-center justify-between bg-white p-4 shadow-md rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-lg"
              >
                {/* Candidate Info */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {candidate.name}
                  </h3>
                  <div className="text-gray-600 flex items-center gap-1 text-sm">
                    <Briefcase size={14} className="text-blue-500" />
                    {candidate.position}
                  </div>
                  <div className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                    <MapPin size={14} className="text-red-500" />
                    {candidate.experience} experience • {candidate.location}
                  </div>
                </div>

                {/* View Resume Button */}
                <a
                  href={candidate.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center  gap-2 px-4 py-2 hover:text-white hover:bg-blue-600 rounded-full border border-gray-300 bg-white/70 backdrop-blur-md shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  <Eye
                    size={18}
                    className="text-blue-600 group-hover:text-white"
                  />
                  <span className="text-sm font-medium text-gray-800 group-hover:text-white">View</span>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Candidates;
