"use client";
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

interface JobModalProps {
  mode: "create" | "edit";
  job: { id: number; title: string; description: string } | null;
  onClose: () => void;
  onSubmit: (job: { id: number; title: string; description: string }) => void;
}

const JobModal: React.FC<JobModalProps> = ({ mode, job, onClose, onSubmit }) => {
  const [jobTitle, setJobTitle] = useState<string>("");
  const [jobDescription, setJobDescription] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (mode === "edit" && job) {
      setJobTitle(job.title);
      setJobDescription(job.description);
    } else {
      setJobTitle("");
      setJobDescription("");
    }
  }, [mode, job]);

  const handleSubmit = () => {
    if (!jobTitle || !jobDescription) {
      setError("All fields are required.");
      return;
    }

    const newJob = { id: job ? job.id : Date.now(), title: jobTitle, description: jobDescription };
    onSubmit(newJob);
    onClose();
  };

  return (
    <div className="fixed inset-0  flex items-center justify-center transition-opacity animate-fadeIn">
      <div className="bg-white w-full max-w-lg p-6 rounded-2xl shadow-2xl border border-gray-200 backdrop-filter backdrop-blur-lg transition-transform transform scale-100 animate-slideIn">
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b border-gray-300 pb-4 mb-4">
          <h2 className="text-2xl font-semibold text-gray-900">
            {mode === "edit" ? "Edit Job Interview" : "Create Job Interview"}
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800 transition-all duration-300">
            <X size={26} />
          </button>
        </div>

        {/* Input Fields */}
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
            <input
              type="text"
              placeholder="Enter job title"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white/60 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900 shadow-sm transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Job Description</label>
            <textarea
              placeholder="Enter job description"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white/60 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900 shadow-sm transition-all"
              rows={4}
            ></textarea>
          </div>

          {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4 mt-5">
            <button
              onClick={onClose}
              className="px-5 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition-all duration-300 shadow-sm"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="px-6 py-2 text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              {mode === "edit" ? "Update" : "Create"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobModal;
