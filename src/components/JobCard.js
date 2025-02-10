import { Star, MapPin } from "lucide-react";
import { Button } from "@mui/material";
import { JobSkeleton } from "./JobSkeleton";

export default function JobCard({ job, onApply }) {
  return (
    <div className="job-card-container">
      <style>
        {`
          .job-card-container {
            background-color: #1E1E1E;
            border-radius: 8px;
            padding: 16px;
          }
          .job-card-header {
            display: flex;
            align-items: start;
            gap: 16px;
          }
          .job-card-img {
            width: 48px;
            height: 48px;
            border-radius: 4px;
          }
          .job-card-title {
            font-size: 18px;
            font-weight: 600;
            color: white;
          }
          .job-card-company {
            color: white;
            font-size: 14px;
          }
          .job-card-location {
            display: flex;
            align-items: center;
            color: gray;
            font-size: 14px;
            margin-top: 4px;
          }
          .job-card-tags {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
          }
          .job-card-tag {
            padding: 6px 12px;
            border-radius: 16px;
            background-color: #2E2E2E;
            color: gray;
            font-size: 12px;
          }
          .job-card-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 16px;
          }
          .job-card-salary {
            color: white;
            font-size: 16px;
            font-weight: 500;
          }
        `}
      </style>
      <div className="job-card-header">
        <img src={job.logo || "/placeholder.svg"} alt={`${job.company} logo`} className="job-card-img" />
        <div className="flex-1">
          <h3 className="job-card-title">{job.title}</h3>
          <p className="job-card-company">{job.company}</p>
          <div className="job-card-location">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{job.location}</span>
          </div>
        </div>
      </div>
      <div className="job-card-tags">
        {Array.isArray(job.type) ? (
          job.type.map((tag, index) => <span key={index} className="job-card-tag">{tag}</span>)
        ) : (
          <span className="job-card-tag">{job.type}</span>
        )}
      </div>
      <div className="job-card-footer">
        <span className="job-card-salary">{job.salary}</span>
        <Button onClick={onApply}>Apply Now</Button>
      </div>
    </div>
  );
}
