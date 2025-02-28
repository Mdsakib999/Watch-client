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
    createOrder: builder.mutation({
      query: (payload) => ({
        url: "/order",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["order"],
    }),
    validCoupon: builder.mutation({
      query: (payload) => ({
        url: "/validCoupon",
        method: "POST",
        body: payload,
      }),
    }),
    getCustomerOrder: builder.query({
      query: () => ({
        url: "/customerOrder",
        method: "GET",
      }),
      providesTags: ["order"],
    }),
  }),
});

export const {
  useGetMeQuery,
  useConfirmOrderMutation,
  useValidCouponMutation,
  useCreateOrderMutation,
  useGetCustomerOrderQuery,
} = userApi;
