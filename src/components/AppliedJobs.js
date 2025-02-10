"use client";

import { useJob } from "../context/JobContext";

export default function AppliedJobs() {
  const { state } = useJob();

  if (state.appliedJobs.length === 0) {
    return null;
  }

  return (
    <div className="applied-jobs-container">
      <style>
        {`
          .applied-jobs-container {
            background-color: #1E1E1E;
            padding: 16px;
            border-radius: 8px;
          }
          .applied-job-card {
            display: flex;
            align-items: center;
            gap: 16px;
            padding: 16px;
            background-color: #2E2E2E;
            border-radius: 8px;
            margin-bottom: 8px;
          }
          .applied-job-img {
            width: 40px;
            height: 40px;
            border-radius: 4px;
          }
          .applied-job-title {
            font-weight: 500;
            color: white;
          }
          .applied-job-company {
            font-size: 14px;
            color: gray;
          }
        `}
      </style>
      <h2 className="applied-job-title">Applied Jobs</h2>
      <div>
        {state.appliedJobs.map((job) => (
          <div key={job.id} className="applied-job-card">
            <img src={job.logo || "/placeholder.svg"} alt={`${job.company} logo`} className="applied-job-img" />
            <div>
              <h3 className="applied-job-title">{job.title}</h3>
              <p className="applied-job-company">{job.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}