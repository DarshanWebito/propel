import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; 

export const dashboradApi = createApi({
  reducerPath: "dashboradApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.PUBLIC_API_URL,
    prepareHeaders: (headers) => {
      headers.set("content-type", "application/json");
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getDashboradDetail: builder.mutation({
      query: (params) => {
        return {
          url: "company",
          method: "GET",
          body: params,
        };
      },
    }),

  }),
});

export const {useGetDashboradDetailMutation} = dashboradApi