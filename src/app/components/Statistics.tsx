"use client";

import React, { useState, useEffect } from "react";

const Statistics = () => {
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [technologies, setTechnologies] = useState(0);

  useEffect(() => {
    const yearsTarget = 4;
    const projectsTarget = 21;
    const technologiesTarget = 24;

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
<section>
  <div className="bg-gray-100 mx-auto text-center py-12 px-12">
    <h2 className="text-2xl mb-4 font-sans font-bold">
    Delivering High-Performance Solutions Across Industries
     
    </h2>
    <h3 className="leading-relaxed font-sans mb-8 ">
    A dynamic cross-platform developer with a proven ability to craft seamless, high-performance web and mobile solutions,<br /> driving innovation and delivering impactful results across diverse industries.
    </h3>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="card">
        <h3 className="text-4xl font-bold mb-2 drop-shadow-lg">
          <span>{years}+</span>
        </h3>
        <p className="text-lg">Years of Experience</p>
      </div>

      <div className="card">
        <h3 className="text-3xl font-semibold mb-2 drop-shadow-lg">
          <span>{projects}+</span>
        </h3>
        <p className="text-lg">Projects Completed</p>
      </div>

      <div className="card">
        <h3 className="text-3xl font-semibold mb-2 drop-shadow-lg">
          <span>{technologies}+</span>
        </h3>
        <p className="text-lg">Technologies Mastered</p>
      </div>
    </div>
  </div>
</section>

  );
};

export default Statistics;
