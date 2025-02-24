import { baseApi } from "../../Api/baseApi";

const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item) => {
            params.append(item.name, item.value);
          });
        }
        return {
          url: "/product",
          method: "GET",
          params,
        };
      },
      providesTags: ["adminProduct"],
    }),
    addProduct: builder.mutation({
      query: (payload) => ({
        url: "/product",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["adminProduct"],
    }),
    getProduct: builder.query({
      query: (id) => ({
        url: `/product/${id}`,
        method: "GET",
      }),
    }),
    updateProduct: builder.mutation({
      query: (args) => ({
        url: `/product/${args.id}`,
        method: "PATCH",
        body: args.data,
      }),
      invalidatesTags: ["adminProduct"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["adminProduct"],
    }),
    getBrand: builder.query({
      query: () => ({
        url: "/brands",
        method: "GET",
      }),
    }),
    getAllUsers: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
      providesTags: ["user"],
    }),
    roleChange: builder.mutation({
      query: (payload) => ({
        url: `/userRole/${payload.id}`,
        method: "PATCH",
        body: payload.data,
      }),
      invalidatesTags: ["user"],
    }),
    getAllCoupon: builder.query({
      query: () => ({
        url: "/coupon",
        method: "GET",
      }),
      providesTags: ["coup"],
    }),
    postCoupon: builder.mutation({
      query: (payload) => ({
        url: "/coupon",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["coup"],
    }),

    deleteCoupon: builder.mutation({
      query: (id) => ({
        url: `/coupon/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["coup"],
    }),
  }),
});

export const {
  useAddProductMutation,
  useGetBrandQuery,
  useRoleChangeMutation,
  useGetAllUsersQuery,
  useGetAllProductQuery,
  useGetProductQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
  usePostCouponMutation,
  useGetAllCouponQuery,
  useDeleteCouponMutation,
} = adminApi;
