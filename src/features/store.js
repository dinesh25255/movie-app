import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "./MovieApi";

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,

  },
  middleware: (getDefault) => getDefault().concat([
    movieApi.middleware
  ])
})