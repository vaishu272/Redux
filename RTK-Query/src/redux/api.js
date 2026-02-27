import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jsonApi = createApi({
  reducerPath: "jsonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    // GET all posts
    getPosts: builder.query({
      query: () => "posts",
    }),

    // GET single post by id
    getPostById: builder.query({
      query: (id) => `posts/${id}`,
    }),

    // CREATE post
    addPost: builder.mutation({
      query: (newPost) => ({
        url: "posts",
        method: "POST",
        body: newPost,
      }),
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostByIdQuery,
  useAddPostMutation,
  useDeletePostMutation,
} = jsonApi;
