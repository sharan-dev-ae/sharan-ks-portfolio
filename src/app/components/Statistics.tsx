"use client";

import React, { useState, useEffect } from "react";

const Statistics = () => {
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [technologies, setTechnologies] = useState(0);

  useEffect(() => {
    const yearsTarget = 4;
    const projectsTarget = 50;
    const technologiesTarget = 7;

    const countUp = (
      target: number,
      setter: React.Dispatch<React.SetStateAction<number>>
    ) => {
      let start = 0;
      const step = () => {
        if (start < target) {
          start++;
          setter(start);
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    };

    countUp(yearsTarget, setYears);
    countUp(projectsTarget, setProjects);
    countUp(technologiesTarget, setTechnologies);
  }, []);

  return (
<section className="py-24 text-white bg-gradient-to-b from-[#0A0A0A] to-[#1D1841]">
  <div className="container mx-auto px-8 text-center">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-[#251E52] p-8 rounded-2xl shadow-lg shadow-[#4C1D95]/40 border border-[#5E4A91] hover:scale-105 transition-transform duration-300 backdrop-blur-md">
        <h3 className="text-4xl font-bold mb-2 drop-shadow-lg">
          <span>{years}+</span>
        </h3>
        <p className="text-lg text-gray-300">Years of Experience</p>
      </div>

      <div className="bg-[#251E52] p-8 rounded-2xl shadow-lg shadow-[#4C1D95]/40 border border-[#5E4A91] hover:scale-105 transition-transform duration-300 backdrop-blur-md">
        <h3 className="text-3xl font-semibold mb-2 drop-shadow-lg">
          <span>{projects}+</span>
        </h3>
        <p className="text-lg text-gray-300">Projects Completed</p>
      </div>

      <div className="bg-[#251E52] p-8 rounded-2xl shadow-lg shadow-[#4C1D95]/40 border border-[#5E4A91] hover:scale-105 transition-transform duration-300 backdrop-blur-md">
        <h3 className="text-3xl font-semibold mb-2 drop-shadow-lg">
          <span>{technologies}+</span>
        </h3>
        <p className="text-lg text-gray-300">Technologies Mastered</p>
      </div>
    </div>
  </div>
</section>

  );
};

export default Statistics;
