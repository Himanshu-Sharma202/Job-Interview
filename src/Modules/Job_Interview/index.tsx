"use client";
import React, { useState } from "react";
import { PlusCircle } from "lucide-react";
import JobModal from "./JobInterviewModal";
import { FiEdit, FiTrash2 } from "react-icons/fi";

interface JobInterview {
  id: number;
  title: string;
  description: string;
}

const JobInterviews: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalMode, setModalMode] = useState<"create" | "edit">("create");
  const [editingJob, setEditingJob] = useState<JobInterview | null>(null);
  const [jobInterviews, setJobInterviews] = useState<JobInterview[]>([
    { id: 1, title: "Software Engineer", description: "Backend Developer Role" },
    { id: 2, title: "UI/UX Designer", description: "Designing web & mobile apps" },
    { id: 3, title: "Product Manager", description: "Overseeing project teams" },
  ]);

  const handleAddJobInterview = (newJob: Omit<JobInterview, "id">) => {
    setJobInterviews((prevJobs) => [{ id: Date.now(), ...newJob }, ...prevJobs]);
    setIsModalOpen(false);
  };

  const handleEditJobInterview = (updatedJob: JobInterview) => {
    setJobInterviews((prevJobs) =>
      prevJobs.map((job) => (job.id === updatedJob.id ? updatedJob : job))
    );
    setIsModalOpen(false);
  };

  const handleDeleteJobInterview = (id: number) => {
    setJobInterviews((prevJobs) => prevJobs.filter((job) => job.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col  items-center p-4">
      <div className="shadow-lg w-full rounded-lg bg-white  h-screen  p-8 border border-gray-200">
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h1 className="text-3xl font-bold text-gray-900">Job Interviews</h1>
          <button
            onClick={() => {
              setModalMode("create");
              setEditingJob(null);
              setIsModalOpen(true);
            }}
            className="flex items-center bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium shadow-md transition-all duration-300 hover:scale-105 hover:bg-blue-700"
          >
            <PlusCircle className="mr-2" size={22} />
            Create New
          </button>
        </div>

        <div className="mt-4">
          {jobInterviews.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {jobInterviews.map((job) => (
                <div
                  key={job.id}
                  className="bg-white flex justify-between items-center shadow-lg rounded-lg p-5 border border-gray-200 hover:shadow-xl transition duration-300"
                >
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">{job.title}</h2>
                    <p className="text-sm text-gray-600 mt-1">{job.description}</p>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        setModalMode("edit");
                        setEditingJob(job);
                        setIsModalOpen(true);
                      }}
                      className="text-blue-600 hover:text-blue-800 transition"
                    >
                      <FiEdit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteJobInterview(job.id)}
                      className="text-red-600 hover:text-red-800 transition"
                    >
                      <FiTrash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 text-center py-4">No job interviews available.</p>
          )}
        </div>
      </div>

      {isModalOpen && (
        <JobModal
          mode={modalMode}
          job={editingJob}
          onClose={() => setIsModalOpen(false)}
          onSubmit={modalMode === "create" ? handleAddJobInterview : handleEditJobInterview}
        />
      )}
    </div>
  );
};

export default JobInterviews;