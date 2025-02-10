"use client";

import { useState, useEffect } from "react";
import { MapPin, Briefcase, DollarSign } from "lucide-react";
import JobCard from "./JobCard";
import ApplicationForm from "./ApplicationForm";
import AppliedJobs from "./AppliedJobs";
import { JobSkeleton } from "./JobSkeleton";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  TextField,
  Button,
  Grid,
} from "@mui/material";

// 🔥 Job Data Inside the File
const jobsData = [
  {
    id: "1",
    title: "Senior Product Manager",
    company: "Google",
    location: "New York, NY",
    salary: "$120k - $150k/year",
    experience: "5-7 years",
    type: ["Full Time", "Remote"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",
    rating: 4.5,
    reviews: 2890,
  },
  {
    id: "2",
    title: "Frontend Developer",
    company: "Microsoft",
    location: "Seattle, WA",
    salary: "$100k - $130k/year",
    experience: "3-5 years",
    type: ["Full Time", "Hybrid"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    rating: 4.3,
    reviews: 1567,
  },
  {
    id: "3",
    title: "UX Designer",
    company: "Apple",
    location: "Cupertino, CA",
    salary: "$110k - $140k/year",
    experience: "4-6 years",
    type: ["Full Time", "On-site"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    rating: 4.7,
    reviews: 3421,
  },
  {
    id: "4",
    title: "Software Engineer",
    company: "Amazon",
    location: "Remote",
    salary: "$130k - $160k/year",
    experience: "5-8 years",
    type: ["Full Time", "Remote"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    rating: 4.2,
    reviews: 2156,
  },
];

export default function JobBoard() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchParams, setSearchParams] = useState({
    location: "",
    experience: "",
    salary: "",
  });

  const [jobs, setJobs] = useState(jobsData);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      let filteredJobs = jobsData;

      if (searchParams.location) {
        filteredJobs = filteredJobs.filter((job) =>
          job.location.toLowerCase().includes(searchParams.location.toLowerCase())
        );
      }

      if (searchParams.experience) {
        filteredJobs = filteredJobs.filter((job) => {
          const [min, max] = job.experience.split("-").map(Number);
          const searchExp = Number(searchParams.experience);
          return searchExp >= min && searchExp <= max;
        });
      }

      if (searchParams.salary) {
        filteredJobs = filteredJobs.filter((job) => {
          const [min, max] = job.salary.match(/\d+/g).map(Number);
          const searchSalary = Number(searchParams.salary);
          return searchSalary >= min && searchSalary <= max;
        });
      }

      setJobs(filteredJobs);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#ffff", color: "white" }}>
      <AppBar position="static" sx={{ backgroundColor: "gray" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}> Eclipse </Typography>
          {["Find Job", "Messages", "Hiring", "Community", "FAQ"].map((item) => (
            <Button key={item} color="inherit">
              {item}
            </Button>
          ))}
        </Toolbar>
      </AppBar>

      <Container sx={{ py: 4 }}>
        <form onSubmit={handleSearch}>
          <TextField
            fullWidth variant="outlined" placeholder="Location"
            value={searchParams.location}
            onChange={(e) => setSearchParams({ ...searchParams, location: e.target.value })}
          />
          <Button fullWidth type="submit" variant="contained" color="primary"> Search </Button>
        </form>

        <Grid container spacing={2}>
          {isLoading ? (
            <JobSkeleton />
          ) : (
            jobs.map((job) => (
              <Grid item xs={12} key={job.id}>
                <JobCard job={job} onApply={() => setSelectedJob(job)} />
              </Grid>
            ))
          )}
        </Grid>
    
        {/* Sidebar */}
        <Grid item xs={12} md={4}>
            <ApplicationForm job={selectedJob} onClose={() => setSelectedJob(null)} />
            <AppliedJobs />
          </Grid>
       
      </Container>
    </div>
  );
}
