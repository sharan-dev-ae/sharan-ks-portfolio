"use client";
import React, { useEffect, useRef, useState } from "react";

const Educations = [
  {
    school: "Institute of DEF",
    degree: "High School",
    passYear: "2015",
    location: "London, UK",
  },
  {
    school: "College of ABC",
    degree: "Diploma in Software Engineering",
    passYear: "2018",
    location: "California, USA",
  },
  {
    school: "University of XYZ",
    degree: "Bachelor of Computer Science",
    passYear: "2020",
    location: "New York, USA",
  },
];

const Education = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          setVisibleItems((prev) => ({
            ...prev,
            [index]: entry.isIntersecting, // Reset animation every time it's in view
          }));
        });
      },
      { threshold: 0.5 }
    );

    const elements = sectionRef.current?.querySelectorAll(".edu-card");
    elements?.forEach((el, index) => {
      el.setAttribute("data-index", index.toString());
      observer.observe(el);
    });

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Sort by year to ensure it starts from high school
  const sortedEducations = [...Educations].sort(
    (a, b) => parseInt(a.passYear) - parseInt(b.passYear)
  );

  return (
    <section
      ref={sectionRef}
      className="py-24 overflow-hidden"
    >
      <div className="container mx-auto px-8 text-center max-w-full overflow-hidden">
        <h2 className="section-title">My Education</h2>

        <div className="relative flex gap-12 justify-center overflow-hidden">
          {sortedEducations.map((education, index) => (
            <div
              key={index}
              className={`edu-card relative w-96 p-6 rounded-lg shadow-xl border border-gray-700 bg-white/10 backdrop-blur-md transition-all duration-700 ease-out transform ${
                visibleItems[index]
                  ? "translate-y-0 opacity-100" // Card comes from bottom
                  : "translate-y-10 opacity-0" // Initially below and hidden
              }`}
              style={{
                transform: `translateY(${visibleItems[index] ? 0 : "30px"})`, // Apply the transform for smooth animation
                transition: "transform 0.7s ease-out, opacity 1s ease-out", // Animate both transform and opacity
                willChange: "transform, opacity", // Optimizing rendering for animation
              }}
            >
              <h3 className="text-xl font-semibold">{education.degree}</h3>
              <p className="text-lg text-gray-400">{education.passYear}</p>
              <p className="text-lg">{education.school}</p>
              <p className="text-lg text-gray-400">{education.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
