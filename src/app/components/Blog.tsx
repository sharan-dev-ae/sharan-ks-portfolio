import React from "react";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "Understanding React Hooks",
    image: "https://via.placeholder.com/400x200?text=React+Hooks",
    description:
      "Learn about React hooks, including useState, useEffect, and custom hooks. These concepts are essential for modern React development.",
    date: "January 10, 2022",
    likes: 120,
  },
  {
    id: 2,
    title: "Next.js for Beginners",
    image: "https://via.placeholder.com/400x200?text=Next.js",
    description:
      "A beginner's guide to Next.js, exploring its features like static site generation, server-side rendering, and API routes.",
    date: "March 5, 2022",
    likes: 150,
  },
  {
    id: 3,
    title: "Building a REST API with Node.js",
    image: "https://via.placeholder.com/400x200?text=REST+API",
    description:
      "Learn how to build a RESTful API using Node.js and Express, including how to handle routes, requests, and responses.",
    date: "April 20, 2022",
    likes: 95,
  },
  {
    id: 4,
    title: "Tailwind CSS: A Comprehensive Guide",
    image: "https://via.placeholder.com/400x200?text=Tailwind+CSS",
    description:
      "Tailwind CSS is a utility-first CSS framework. This guide will take you through its benefits and how to integrate it into your project.",
    date: "February 15, 2022",
    likes: 210,
  },
];

const BlogSection = () => {
  return (
    <section id='blog' className="py-24">
      <div className="container mx-auto px-8 text-center">
        <h2 className="section-title text-4xl mb-12">My Blog</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-[#251E52] p-4 rounded-lg shadow-lg border border-[#5E4A91] transform transition-all duration-300 hover:scale-105 hover:bg-[#1D1841] hover:shadow-xl hover:shadow-[#4C1D95]/60"
            >
              {/* Blog Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />

              {/* Blog Title */}
              <h3 className="text-lg font-semibold text-[#FFBC1C]">
                {blog.title}
              </h3>

              {/* Blog Date and Likes */}
              <div className="flex justify-between text-sm text-gray-400 mt-4">
                <span>{blog.date}</span>
                <span>{blog.likes} Likes</span>
              </div>

              {/* Blog Description */}
              <p className="text-sm text-gray-300 mt-4">{blog.description}</p>

              {/* Read More Link */}
              <Link
                href={`/blog/${blog.id}`} // Using dynamic routing with ID
                className="mt-6 inline-block text-lg text-[#4E4E8E] hover:underline transition-all duration-300"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/blog"
            className="inline-block text-xl text-[#FFBC1C] bg-[#251E52] px-6 py-3 rounded-lg border border-[#5E4A91] shadow-lg transform transition-all duration-300 hover:bg-[#1D1841] hover:shadow-xl hover:scale-105"
          >
            View More Blogs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
