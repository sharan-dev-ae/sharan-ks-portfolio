"use client";
import React, { useEffect, useRef, useState } from "react";

const Educations = [
  {
    school: "Ilahiya HSS Chemanchery",
    degree: "High School",
    passYear: "2016",
    location: "Kerala, India",
  },
  {
    school: "Poilkave HSS",
    degree: "Higher Secondary",
    passYear: "2018",
    location: "Kerala, India",
  },
  {
    school: "University of Calicut",
    degree: "Bachelor of Computer Science",
    passYear: "2021",
    location: "Kerala, India",
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
<section ref={sectionRef} className="overflow-hidden">
  <div className="py-12 px-8 bg-gray-100 mx-auto text-center max-w-full">
    <h2 className="section-title text-2xl md:text-4xl font-semibold text-gray-900 mb-8">
      My Education
    </h2>

    <div className="relative flex flex-col md:flex-row gap-8 justify-center pb-4">
      {sortedEducations.map((education, index) => (
        <div
          key={index}
          className={`edu-card relative w-full sm:w-80 md:w-96 p-6 rounded-lg shadow-xl bg-white backdrop-blur-md transition-all duration-700 ease-out transform ${
            visibleItems[index] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{
            transform: `translateY(${visibleItems[index] ? 0 : "30px"})`,
            transition:
              "transform 0.7s ease-out, opacity 1s ease-out, box-shadow 0.3s ease-in-out",
            willChange: "transform, opacity, box-shadow",
          }}
        >
          <h3 className="text-xl font-semibold text-gray-900">{education.degree}</h3>
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
