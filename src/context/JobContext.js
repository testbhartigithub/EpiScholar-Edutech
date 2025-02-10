"use client";

import { createContext, useContext, useReducer } from "react";

const JobContext = createContext(undefined);

const jobReducer = (state, action) => {
  switch (action.type) {
    case "APPLY_JOB":
      return {
        ...state,
        appliedJobs: [...state.appliedJobs, action.payload],
      };
    default:
      return state;
  }
};

export function JobProvider({ children }) {
  const [state, dispatch] = useReducer(jobReducer, {
    appliedJobs: [],
  });

  return (
    <JobContext.Provider value={{ state, dispatch }}>
      {children}
    </JobContext.Provider>
  );
}

export function useJob() {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error("useJob must be used within a JobProvider");
  }
  return context;
}
