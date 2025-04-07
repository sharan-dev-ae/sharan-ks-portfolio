"use client";

import { useData } from "@/app/hooks/useData";
import Link from "next/link";
import { useParams } from "next/navigation";

const BlogPost = () => {
  const { id } = useParams();
  const { blogs } = useData();
  const blogId = Number(id);
  const blog = blogs.find((b) => b.id === blogId);

  // If the blog is not found, render a fallback
  if (!blog) {
    return (
      <div className="container mx-auto px-6 py-12 bg-white shadow-xl rounded-lg mt-8 max-w-5xl">
        <h1 className="text-4xl font-bold text-[#333] mb-6">Blog Not Found</h1>
        <p className="text-lg text-gray-700 mb-8">The requested blog post does not exist.</p>
        <Link
          href="/home"
          className="inline-block text-lg text-white bg-[#1a2fe0] px-6 py-3 rounded-lg border border-[#1c2bd6] shadow-lg transition-all hover:bg-[#111da3] hover:shadow-xl hover:scale-105"
        >
          &larr; Back to Blog List
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12 bg-gray-50 shadow-xl rounded-lg mt-8 max-w-4xl">
      {/* Blog Title */}
      <h1 className="text-5xl font-bold text-[#333] mb-6 border-b-4 border-[#1a2fe0] pb-4">
        {blog.title}
      </h1>

      {/* Blog Image */}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-96 object-cover rounded-xl mb-8"
      />

      {/* Blog Description */}
      <p className="text-xl text-gray-700 mb-8">{blog.description}</p>

      {/* Main Content */}
      <div className="prose prose-xl max-w-none text-[#333] space-y-8">
        {/* Introduction */}
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-[#1a2fe0]">Introduction</h2>
          <p>
            {blog.content?.introduction ||
              "This section introduces the topic of the blog post, providing background and setting the stage for the deeper exploration."}
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-[#1a2fe0]">Main Content</h2>
          <p>
            {blog.content?.mainContent ||
              "In this section, we explore the core topic, dive deep into the subject, and provide valuable insights or examples."}
          </p>
        </div>

        {/* Conclusion */}
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-[#1a2fe0]">Conclusion</h2>
          <p>
            {blog.content?.conclusion ||
              "This concluding section summarizes the key takeaways and offers closing thoughts or actions for the reader."}
          </p>
        </div>
      </div>

      {/* Back to Blog List Button */}
      <div className="mt-12 text-center">
        <Link
          href="/home"
          className="inline-block text-lg text-white bg-[#1a2fe0] px-8 py-4 rounded-lg border border-[#1c2bd6] shadow-lg transition-all hover:bg-[#111da3] hover:shadow-xl hover:scale-105"
        >
          &larr; Back to Blog List
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;
