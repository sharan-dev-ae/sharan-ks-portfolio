"use client";

import { useData } from "@/app/hooks/useData";
import { Blog } from "@/app/types";
import Link from "next/link";
import { useParams } from "next/navigation";

const BlogPost = () => {
  const { id } = useParams();
  const { blogs } = useData();
  const blogId = Number(id);
  const blog: Blog | undefined = blogs.find((b) => b.id === Number(blogId));

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
<div className="container mx-auto px-4 py-12 max-w-5xl bg-white shadow-lg rounded-lg">
  {blog.title && (
    <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
      {blog.title}
    </h1>
  )}
  
  {blog.image && (
    <img
      src={blog.image}
      alt={blog.title}
      className="w-full h-96 object-cover rounded-lg shadow-md mb-6"
    />
  )}
  
  {blog.description && (
    <div className="text-xl text-gray-700 leading-relaxed mb-8">
      {blog.description}
    </div>
  )}
  
  {blog.content && (
    <div className="prose prose-xl max-w-none mb-12">
      {blog.content.introduction && (
        <p className="text-lg text-gray-700 mb-6">{blog.content.introduction}</p>
      )}
      
      {/* Main Content (Question & Answer format) */}
      {blog.content.mainContent && blog.content.mainContent.map((item, index) => (
        <div key={index} className="mb-8">
          {item.question && (
            <div className="mb-2">
              <p className="font-semibold text-xl text-blue-700">{item.question}</p>
            </div>
          )}
          {item.answer && (
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <p className="text-lg text-gray-800">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
      
      {blog.content.conclusion && (
        <div className="mt-8">
          <p className="text-lg text-gray-700">{blog.content.conclusion}</p>
        </div>
      )}
    </div>
  )}

  <div className="text-center mt-12">
    <Link
      href="/home"
      className="inline-block bg-blue-600 text-white text-lg font-medium px-8 py-4 rounded-lg border border-blue-700 shadow-lg transition transform hover:scale-105 hover:bg-blue-700"
    >
      &larr; Back to Blog List
    </Link>
  </div>
</div>

  );
};

export default BlogPost;
