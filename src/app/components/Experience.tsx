"use client";
import React from "react";
import animationData from "../../../public/experience_lottie.json";
import dynamic from 'next/dynamic';

const experiences = [
  {
    title: "Software Developer",
    company: "Bin Salem Design",
    location: "Dubai, UAE",
    duration: "Aug 202 - Present",
  },
  {
    title: "Software Developer",
    company: "Coddle Technologies Pvt. Ltd.",
    location: "Kerala, India",
    duration: "April 2022 - May 2023",
  },
  {
    title: "Software Developer",
    company: "Quest Innovative Solutions Pvt Ltd",
    location: "Kerala, India",
    duration: "Jun 2019 - Jan 2020",
  },
];

const Experience = () => {

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
  return (
<section>
  <div className="mx-auto px-8 text-center bg-gray-100 py-12">
    <h2 className="section-title text-2xl md:text-4xl font-semibold text-gray-900 mb-8">
      My Experience
    </h2>

    <div className="flex flex-col md:flex-row items-start justify-between space-y-8 md:space-y-0 md:space-x-12">
      {/* Timeline Left Bar */}
      <div className="w-full md:w-2/6 h-full flex justify-center">
        <div className="w-64 md:w-96 h-64 md:h-96">
          {/* Adjust size as needed */}
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>

      {/* Experience Cards */}
      <div className="w-full md:w-4/6">
        <div className="flex flex-col space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-center">
              {/* Timeline Dot */}
              <div className="absolute left-0 w-8 h-8 bg-green-500 rounded-full border-4 border-gray-800 z-10"></div>

              {/* Experience Card */}
              <div className="w-full bg-white p-6 rounded-lg shadow-xl space-y-4 ml-12 border border-gray-300 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                  <p className="text-lg text-gray-600">{exp.duration}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-lg text-gray-800">{exp.company}</p>
                  <p className="text-lg text-gray-500">{exp.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Experience;
