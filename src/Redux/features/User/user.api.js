import { baseApi } from "../../Api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => ({
        url: "/me",
        method: "GET",
      }),
    }),
    confirmOrder: builder.mutation({
      query: () => ({
        url: "/create-payment-intent",
        method: "POST",
      }),
    }),
  }),
});

export const { useGetMeQuery, useConfirmOrderMutation } = userApi;
