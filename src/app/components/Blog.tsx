"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useData } from "../hooks/useData";



const BlogSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { blogs } = useData();
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? blogs.length - 3 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === blogs.length - 3 ? 0 : prev + 1));
  };

  return (
    <section id="blog" className="flex justify-center bg-gray-100 py-8">
      <div className="w-[75vw] mx-auto text-center relative py-12 px-12">
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
            style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
          >
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="min-w-[30%] gap-6 p-6 rounded-lg bg-white shadow-lg border border-[#ddd] cursor-pointer hover:shadow-xl transition-all hover:bg-[#e1e1e1] mx-6" // Adjusted width and added horizontal margin
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
