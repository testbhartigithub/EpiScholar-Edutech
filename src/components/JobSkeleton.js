import React from "react";

export function JobSkeleton() {
  return (
    <>
      <style>
        {`
          .job-skeleton {
            background-color: #1f2937;
            border-radius: 0.5rem;
            padding: 1.5rem;
            animation: pulse 1.5s infinite ease-in-out;
          }
          .skeleton-box {
            background-color: #374151;
            border-radius: 0.25rem;
          }
          .flex {
            display: flex;
          }
          .items-start {
            align-items: flex-start;
          }
          .gap-4 {
            gap: 1rem;
          }
          .w-12 {
            width: 3rem;
          }
          .h-12 {
            height: 3rem;
          }
          .rounded {
            border-radius: 0.25rem;
          }
          .flex-1 {
            flex: 1;
          }
          .justify-between {
            justify-content: space-between;
          }
          .h-6 {
            height: 1.5rem;
          }
          .w-48 {
            width: 12rem;
          }
          .mb-2 {
            margin-bottom: 0.5rem;
          }
          .h-4 {
            height: 1rem;
          }
          .w-32 {
            width: 8rem;
          }
          .w-24 {
            width: 6rem;
          }
          .mt-4 {
            margin-top: 1rem;
          }
          .gap-2 {
            gap: 0.5rem;
          }
          .h-8 {
            height: 2rem;
          }

          @keyframes pulse {
            0% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
            100% {
              opacity: 1;
            }
          }
        `}
      </style>

      <div className="job-skeleton">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 skeleton-box rounded"></div>
          <div className="flex-1">
            <div className="flex justify-between">
              <div>
                <div className="h-6 w-48 skeleton-box mb-2"></div>
                <div className="h-4 w-32 skeleton-box"></div>
              </div>
              <div className="flex items-center">
                <div className="w-24 h-4 skeleton-box"></div>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <div className="h-6 w-20 skeleton-box"></div>
              <div className="h-6 w-20 skeleton-box"></div>
            </div>
            <div className="mt-4 flex justify-between">
              <div className="h-4 w-24 skeleton-box"></div>
              <div className="h-8 w-24 skeleton-box"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
