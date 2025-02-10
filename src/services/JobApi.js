
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const JobApi = createApi({
  reducerPath: "JobApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getJobs: builder.query({
      query: () => "jobs",
    }),
  }),
});

export const { useGetJobsQuery } = JobApi;
