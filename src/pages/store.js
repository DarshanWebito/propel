import loaderSlice from "@/Redux/Actions/loaderSlice";
import AuthSlice from "@/Redux/Auth/AuthSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    loader: loaderSlice,
  },
});
