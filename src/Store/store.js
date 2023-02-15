import {configureStore} from "@reduxjs/toolkit"
import { dashboradApi } from "./api/dashboard";

export const store = configureStore({
  reducer: {
    [dashboradApi.reducerPath]: dashboradApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dashboradApi.middleware ),
});

   