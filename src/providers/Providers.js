"use client";

import { Provider } from "react-redux";
import  { JobProvider } from "../context/JobContext";
import { Store } from "../store/Store";

export function Providers({ children }) {
  return (
    <Provider store={Store}>
      <JobProvider>{children}</JobProvider>
    </Provider>
  );
}
