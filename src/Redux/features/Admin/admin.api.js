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
    getAllProduct: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item) => {
            params.append(item.name, item.value);
          });
        }
        return {
          url: "/products",
          method: "GET",
          params,
        };
      },
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
  }),
});

export const {
  useAddProductMutation,
  useGetBrandQuery,
  useRoleChangeMutation,
  useGetAllUsersQuery,
  useGetAllProductQuery,
} = adminApi;
