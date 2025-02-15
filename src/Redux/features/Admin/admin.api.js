import { baseApi } from "../../Api/baseApi";

const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (payload) => ({
        url: "/product",
        method: "POST",
        body: payload,
      }),
    }),
    getBrand: builder.query({
      query: () => ({
        url: "/brands",
        method: "GET",
      }),
    }),
  }),
});

export const { useAddProductMutation, useGetBrandQuery } = adminApi;
