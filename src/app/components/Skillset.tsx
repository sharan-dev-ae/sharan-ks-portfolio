import React from "react";
import Marquee from "react-fast-marquee";

const Skills = () => {
  const skills = [
    { name: "React", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nextdotjs.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nodedotjs.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tailwindcss.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mongodb.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mysql.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/amazons3.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/docker.svg" },
  ];

  return (
<section className="overflow-hidden">
  <div className="px-12 py-16 mx-auto px-8 text-center bg-gray-100">
    <h2 className="section-title">My Skills</h2>
    <Marquee speed={50} gradient={false} className="overflow-hidden" style={{ minHeight: '180px' }}>
      <div className="flex whitespace-nowrap">
        {skills.concat(skills).map((skill, index) => ( // Duplicate the skills array
          <div
            key={index}
            className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg shadow-gray-500/40 border border-gray-600 mx-4 hover:scale-105 transition-all duration-300"
            style={{ minWidth: "160px" }}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-16 h-16 mb-4 transition-transform duration-300 hover:scale-125"
            />
            <p className="text-lg text-gray-300">{skill.name}</p>
          </div>
        ))}
      </div>
    </Marquee>
  </div>
</section>



  );
};

export default Skills;
