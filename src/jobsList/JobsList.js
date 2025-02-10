import { useState, useEffect } from "react";

const jobs = [
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
  {
    id: "5",
    title: "Data Scientist",
    company: "Facebook",
    location: "Menlo Park, CA",
    salary: "$140k - $180k/year",
    experience: "4-7 years",
    type: ["Full Time", "On-site"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png",
    rating: 4.4,
    reviews: 1890,
  },
  {
    id: "6",
    title: "DevOps Engineer",
    company: "Netflix",
    location: "Los Gatos, CA",
    salary: "$125k - $155k/year",
    experience: "3-6 years",
    type: ["Full Time", "Hybrid"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",
    rating: 4.6,
    reviews: 1234,
  },
  {
    id: "7",
    title: "Backend Developer",
    company: "Twitter",
    location: "San Francisco, CA",
    salary: "$115k - $145k/year",
    experience: "4-7 years",
    type: ["Full Time", "Remote"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png",
    rating: 4.1,
    reviews: 987,
  },
  {
    id: "8",
    title: "Machine Learning Engineer",
    company: "IBM",
    location: "Austin, TX",
    salary: "$130k - $170k/year",
    experience: "5-8 years",
    type: ["Full Time", "On-site"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png",
    rating: 4.3,
    reviews: 1543,
  },
  {
    id: "9",
    title: "Full Stack Developer",
    company: "Airbnb",
    location: "Remote",
    salary: "$110k - $140k/year",
    experience: "3-6 years",
    type: ["Full Time", "Remote"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png",
    rating: 4.5,
    reviews: 876,
  },
  {
    id: "10",
    title: "iOS Developer",
    company: "Uber",
    location: "San Francisco, CA",
    salary: "$120k - $150k/year",
    experience: "4-7 years",
    type: ["Full Time", "Hybrid"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png",
    rating: 4.2,
    reviews: 1098,
  },
];

export function useJobs(filters = {}) {
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  useEffect(() => {
    let result = [...jobs];

    if (filters.location) {
      result = result.filter((job) =>
        job.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    if (filters.experience) {
      result = result.filter((job) => {
        const [min, max] = job.experience.split("-").map(Number);
        const searchExp = Number(filters.experience);
        return searchExp >= min && searchExp <= max;
      });
    }

    if (filters.salary) {
      result = result.filter((job) => {
        const [min, max] = job.salary.match(/\d+/g).map(Number);
        const searchSalary = Number(filters.salary);
        return searchSalary >= min && searchSalary <= max;
      });
    }

    setFilteredJobs(result);
  }, [filters]);

  return filteredJobs;
}
