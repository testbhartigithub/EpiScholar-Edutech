import { configureStore } from "@reduxjs/toolkit";
import { JobApi } from "../services/JobApi";

export const Store = configureStore({
  reducer: {
    [JobApi.reducerPath]: JobApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(JobApi.middleware),
});

export const RootState = Store.getState;
export const AppDispatch = Store.dispatch;
