import baseApi from "../api/baseApi";

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
    }),
    getSingleProduct: builder.query({
      query: (_id) => `/products/${_id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetSingleProductQuery } = productsApi;
