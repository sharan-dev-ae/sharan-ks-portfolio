"use client";
// app/blog/page.tsx (Blog Listing Page)
import Link from "next/link";
import { useData } from "../hooks/useData";


const BlogPage = () => {
  const { blogs } = useData();

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        {/* Back Button */}
        <Link
          href="/home"
          className="absolute top-6 right-12 inline-block text-lg text-[#1a2fe0] bg-white px-4 py-2 rounded-lg border border-[#1c2bd6] shadow-md transition-all hover:bg-[#e1e1e1] hover:shadow-xl"
        >
          &larr; Back
        </Link>

        <h2 className="section-title text-4xl font-bold text-[#333] mb-12">
          Latest Blogs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="flex flex-col gap-6 p-6 bg-white rounded-lg shadow-lg border border-[#ddd] cursor-pointer hover:shadow-xl transition-all hover:bg-[#f9f9f9] mx-4"
            >
              {/* Blog Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-60 object-cover rounded-lg mb-4 transition-all hover:scale-105"
              />

              {/* Blog Title */}
              <h3 className="text-2xl font-semibold text-[#333] hover:text-[#1a2fe0] transition-all">
                {blog.title}
              </h3>

              {/* Blog Description */}
              <p className="text-md text-[#666] mt-2">{blog.description}</p>

              {/* Blog Date */}
              <p className="text-sm text-[#999] mt-4">{blog.date}</p>

              {/* Read More Link */}
              <Link
                href={`/blog/${blog.id}`}
                className="mt-4 inline-block text-[#1a2fe0] text-lg hover:underline"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
