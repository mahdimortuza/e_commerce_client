import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://e-commerce-server-rho.vercel.app" }),
  endpoints: () => ({}),
});
export default baseApi;
