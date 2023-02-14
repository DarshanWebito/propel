import { ApiGetNoAuth } from "@/pages/API/Api";
import { api } from "@/pages/API/AuthApi";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const dummyAPI = createAsyncThunk("dummyAPI", async (body) => {
  return ApiGetNoAuth(api.dummyAPI)
    .then((res) => {
      return res?.data;
    })
    .catch((err) => err);
});