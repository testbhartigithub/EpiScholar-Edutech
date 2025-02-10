"use client";

import { useState } from "react";
import { useJob } from "../context/JobContext";
import { Button,TextField,Input } from "@mui/material";

export default function ApplicationForm({ job, onClose }) {
  const { dispatch } = useJob();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    experience: "",
    resume: null,
    coverLetter: "",
  });

  if (!job) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "APPLY_JOB", payload: { ...job, ...formData } });
    onClose();
  };

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFormData({ ...formData, resume: e.target.files[0] });
    }
  };

  return (
    <div className="application-form-container">
      <style>
        {`
          .application-form-container {
            background-color: #1E1E1E;
            padding: 16px;
            border-radius: 8px;
          }
          .input-field {
            background-color: #2E2E2E;
            color: white;
            padding: 8px;
            border-radius: 4px;
            width: 100%;
          }
          .form-label {
            color: gray;
            font-size: 14px;
            margin-bottom: 4px;
          }
          .button-group {
            display: flex;
            justify-content: flex-end;
            gap: 8px;
          }
        `}
      </style>
      <h2 className="applied-job-title">Apply for {job.title}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="form-label">Full Name</label>
          <Input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="input-field"
          />
        </div>
        <div>
          <label className="form-label">Email</label>
          <Input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="input-field"
          />
        </div>
        <div>
          <label className="form-label">Years of Experience</label>
          <Input
            type="number"
            required
            value={formData.experience}
            onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
            className="input-field"
          />
        </div>
        <div>
          <label className="form-label">Resume</label>
          <Input
            type="file"
            required
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="input-field"
          />
        </div>
        <div>
          <label className="form-label">Cover Letter</label>
          <TextField
            required
            value={formData.coverLetter}
            onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
            className="input-field"
            rows={4}
          />
        </div>
        <div className="button-group">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">Submit Application</Button>
        </div>
      </form>
    </div>
  );
}