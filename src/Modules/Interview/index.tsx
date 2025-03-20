"use client";
import React, { useState } from "react";
import { CloudUpload, PlayCircle, Trash2 } from "lucide-react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const CandidateInterview: React.FC = () => {
  const [resume, setResume] = useState<File | null>(null);
  const [error, setError] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setResume(file);
      setError("");
    } else {
      setError("Only PDF files are allowed.");
    }
  };

  const handleRemoveFile = () => {
    setResume(null);
    setError("");
  };

  const handleStartInterview = () => {
    if (!resume) {
      setError("Please upload your resume before starting the interview.");
      return;
    }
    alert("Interview Started!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-lg w-full text-center border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Start Your Interview</h2>
        <p className="text-gray-600 mb-6">Upload your resume and begin the process.</p>

        {/* Upload Section */}
        <label className="cursor-pointer flex flex-col items-center border-2 border-dashed border-gray-300 p-5 rounded-lg bg-gray-100 hover:bg-gray-200 transition">
          <CloudUpload className="text-gray-500 w-10 h-10 mb-2" />
          <span className="text-gray-700 font-medium">Upload Resume (PDF)</span>
          <input type="file" className="hidden" accept="application/pdf" onChange={handleFileChange} />
        </label>

        {/* Uploaded File Display */}
        {resume && (
          <div className="flex items-center justify-between bg-gray-100 mt-4 p-3 rounded-lg shadow-sm">
            <p className="text-gray-700 text-sm font-medium truncate">{resume.name}</p>
            <button onClick={handleRemoveFile} className="text-red-500 hover:text-red-700">
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        {/* Start Interview Button with Tooltip */}
        <div className="relative mt-6 w-full">
          <button
            onClick={handleStartInterview}
            disabled={!resume}
            data-tooltip-id="start-interview-tooltip"
            className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold shadow-lg w-full transition-all duration-300 
            ${resume ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-400 text-gray-200 cursor-not-allowed"}`}
          >
            <PlayCircle className="w-5 h-5" /> Start Interview
          </button>

          {/* Tooltip (Only Shows When Hovering on Disabled Button) */}
          {!resume && (
            <Tooltip
              id="start-interview-tooltip"
              place="top"
              content="Upload a resume to start the interview"
              style={{
                backgroundColor: "#333",
                color: "#fff",
                fontSize: "12px",
                borderRadius: "6px",
                padding: "6px",
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CandidateInterview;
