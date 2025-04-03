"use client";
import Lottie from "lottie-react";
import React from "react";
import animationData from "../../../public/experience_lottie.json";

const experiences = [
  {
    title: "Software Engineer",
    company: "Company 1",
    location: "Dubai, UAE",
    duration: "Jan 2021 - Present",
  },
  {
    title: "Full-Stack Developer",
    company: "Company 2",
    location: "Remote",
    duration: "Feb 2020 - Dec 2020",
  },
  {
    title: "Junior Developer",
    company: "Company 3",
    location: "Remote",
    duration: "Jun 2019 - Jan 2020",
  },
];

const Experience = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-8 text-center">
        <h2 className="section-title">My Experience</h2>

        <div className="flex items-start justify-between space-x-12 ">
          {/* Timeline Left Bar */}
          <div className="w-2/6  h-full">
            <div className="w-96 h-96">
              {" "}
              {/* Adjust size as needed */}
              <Lottie animationData={animationData} loop={true} />
            </div>
          </div>

          {/* Experience Cards */}
          <div className="w-4/6">
            <div className="flex flex-col space-y-16">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-center">
                  {/* Timeline Dot */}
                  <div className="absolute left-0 w-8 h-8 bg-green-500 rounded-full border-4 border-gray-800 z-10"></div>

                  {/* Experience Card */}
                  <div className="w-full bg-white p-6 rounded-lg shadow-xl space-y-4 ml-12 border border-gray-300 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {exp.title}
                      </h3>
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
