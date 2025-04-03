"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    title: "Understanding React Hooks",
    image: "https://via.placeholder.com/600x350?text=React+Hooks",
    description:
      "Learn about React hooks, including useState, useEffect, and custom hooks. These concepts are essential for modern React development.",
    date: "January 10, 2022",
  },
  {
    id: 2,
    title: "Next.js for Beginners",
    image: "https://via.placeholder.com/600x350?text=Next.js",
    description:
      "A beginner's guide to Next.js, exploring its features like static site generation, server-side rendering, and API routes.",
    date: "March 5, 2022",
  },
  {
    id: 3,
    title: "Building a REST API with Node.js",
    image: "https://via.placeholder.com/600x350?text=REST+API",
    description:
      "Learn how to build a RESTful API using Node.js and Express, including how to handle routes, requests, and responses.",
    date: "April 20, 2022",
  },
  {
    id: 4,
    title: "Advanced JavaScript Concepts",
    image: "https://via.placeholder.com/600x350?text=JavaScript",
    description:
      "Explore advanced JavaScript topics such as closures, event loop, and async programming.",
    date: "June 15, 2022",
  },
  {
    id: 5,
    title: "Building with TypeScript",
    image: "https://via.placeholder.com/600x350?text=TypeScript",
    description:
      "A complete guide to getting started with TypeScript and integrating it into your projects.",
    date: "August 25, 2022",
  },
];

const BlogSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? blogs.length - 3 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === blogs.length - 3 ? 0 : prev + 1));
  };

  return (
    <section id="blog" className="py-24 flex justify-center">
      <div className="w-[75vw] mx-auto text-center relative">
        <h2 className="section-title text-4xl mb-12 text-white">
          Latest Blogs
        </h2>

        {/* Left Arrow - Outside the Slider */}
        <button
          onClick={prevSlide}
          className="absolute left-[-50px] top-1/2 z-10 p-3 bg-[#1c2bd6] text-white rounded-full shadow-lg hover:bg-[#111da3] transition transform -translate-y-1/2 cursor-pointer"
        >
          <FaArrowLeft size={20} />
        </button>

        {/* Blog Cards Wrapper */}
        <div className="overflow-hidden w-full flex justify-center">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 33.33}%)` }} // Show 3 cards at a time
          >
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="min-w-[30%] gap-6 p-6 rounded-lg bg-[#f4f4f4] shadow-lg border border-[#ddd] cursor-pointer hover:shadow-xl transition-all hover:bg-[#e1e1e1] mx-6" // Adjusted width and added horizontal margin
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-60 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-semibold text-[#333]">
                  {blog.title}
                </h3>
                <p className="text-md text-[#666] mt-2">{blog.description}</p>
                <p className="text-sm text-[#999] mt-4">{blog.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow - Outside the Slider */}
        <button
          onClick={nextSlide}
          className="absolute right-[-50px] top-1/2 z-10 p-3 bg-[#1c2bd6] text-white rounded-full shadow-lg hover:bg-[#111da3] transition transform -translate-y-1/2 cursor-pointer"
        >
          <FaArrowRight size={20} />
        </button>

        {/* View More Button */}
        <div className="mt-8">
          <Link
            href="/blog"
            className="inline-block text-xl text-white bg-[#1a2fe0] px-6 py-3 rounded-lg border border-[#1c2bd6] shadow-lg transition-all hover:bg-[#111da3] hover:shadow-xl hover:scale-105"
          >
            View More Blogs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
