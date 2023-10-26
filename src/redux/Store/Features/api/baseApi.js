import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://ecommerceserver-console.up.railway.app" }),
  endpoints: () => ({}),
});
export default baseApi;
