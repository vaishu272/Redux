import React, { useState } from "react";
import {
  useGetPostsQuery,
  useGetPostByIdQuery,
  useAddPostMutation,
} from "./redux/api";

const App = () => {
  const [postId, setPostId] = useState(1);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [addedPost, setAddedPost] = useState(null);

  // Fetch all posts
  const { data: posts = [], isLoading } = useGetPostsQuery();

  // Fetch single post by id
  const { data: singlePost } = useGetPostByIdQuery(postId);

  // Mutation hook
  const [addPost, { isLoading: isAdding }] = useAddPostMutation();

  const handleAddPost = async () => {
    if (!title || !body) return alert("Fill all fields");

    const res = await addPost({
      title,
      body,
      userId: 1,
    }).unwrap();

    setAddedPost(res); // store newly added post
    setTitle("");
    setBody("");
  };

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto p-8">
      {/* Heading */}
      <h1 className="text-center text-3xl font-bold mb-8">
        Redux Toolkit Query Demo
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 🔹 LEFT SIDE */}
        <div className="space-y-8">
          {/* Add Post */}
          <div className="bg-white shadow p-6 rounded-xl space-y-4">
            <h2 className="text-xl font-bold">Add New Post</h2>

            <input
              className="border p-2 w-full rounded"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              className="border p-2 w-full rounded"
              placeholder="Body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />

            <button
              onClick={handleAddPost}
              className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              {isAdding ? "Adding..." : "Add Post"}
            </button>
          </div>

          {/* Get Post by ID */}
          <div className="bg-white shadow p-6 rounded-xl space-y-4">
            <h2 className="text-xl font-bold">Get Post by ID</h2>

            <input
              type="number"
              value={postId}
              onChange={(e) => setPostId(e.target.value)}
              className="border p-2 rounded w-full"
            />

            {singlePost && (
              <div className="bg-gray-100 p-4 rounded">
                <h3 className="font-semibold">{singlePost.title}</h3>
                <p>{singlePost.body}</p>
              </div>
            )}
          </div>
        </div>

        {/* 🔹 RIGHT SIDE */}
        <div className="bg-white shadow p-6 rounded-xl space-y-4">
          <h2 className="text-xl font-bold">All Posts</h2>

          {/* Existing posts */}
          {posts.slice(0, 3).map((post) => (
            <div key={post.id} className="border-b pb-3">
              <h3 className="font-semibold">{post.title}</h3>
              <p className="text-gray-600 text-sm">{post.body}</p>
            </div>
          ))}

          {/* Newly added post at bottom */}
          {addedPost && (
            <div className="border-b pb-3 p-3">
              <p className="text-green-700 text-center text-sm font-semibold mb-2">
                Post added locally (preview)
              </p>

              <h3 className="font-semibold text-gray-900">{addedPost.title}</h3>

              <p className="text-gray-600 text-sm mt-1">{addedPost.body}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
