"use client";

import { useParams } from "next/navigation";

const BlogPost = () => {
  const { id } = useParams();  // Use useParams to get the dynamic route parameter

  return (
    <div>
      <h1>Blog Post {id}</h1>
      {/* Display blog details based on the `id` */}
      <p>This is a detailed blog post for post {id}.</p>
    </div>
  );
};

export default BlogPost;
