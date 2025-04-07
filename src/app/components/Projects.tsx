"use client";

import React, { useState } from "react";

// Define types for project data
interface Project {
  title: string;
  description: string;
  techStack: string[];
  highlights: string[];
  details: string;
}

const projects: Project[] = [
  {
    title: "Enterprise Resource Planning (ERP) System",
    description:
      "Developed a web app integrating core business modules like Employee Roles, Timesheet, Payroll, Task Management, Estimation, Quotation, HR, and Assets to enhance operational efficiency.",
    techStack: [
      "Angular",
      "ASP.NET",
      "SQL Server",
      "VPS Hosting (e.g., AWS EC2, DigitalOcean)",
    ],
    highlights: [
      "Real-time Collaboration",
      "Performance Optimization",
      "Developer Dashboard",
      "Iterative Development",
      "Stored Procedures",
    ],

    details:
      "This ERP system connects key business modules (HR, Assets, Employee Roles, Payroll, etc.) to streamline operations. Built with Angular, ASP.NET, and SQL Server, and hosted on GoDaddy for scalability and reliability.",
  },
  {
    title: "Employee Attendance & Travel Tracking App",
    description:
      "Maintained and developed features for a mobile app focused on employee attendance and travel tracking, utilizing React Native and Node.js with AWS microservices integration.",
    techStack: [
      "React Native",
      "Node.js",
      "AWS Cloud Services (Lambda, API Gateway, S3)",
    ],
    highlights: [
      "Feature Enhancement",
      "Mobile Optimization",
      "Real-time Tracking",
      "Cloud Integration",
      "Microservices Architecture",
    ],
    details:
      "Contributed to the maintenance and development of a mobile app for employee attendance and travel tracking. Integrated AWS Lambda for serverless architecture, API Gateway for routing, and S3 for data storage. Optimized the mobile experience using React Native and ensured backend stability with Node.js.",
  },

  {
    title: "Social Networking & Content Management System",
    description:
      "Developed a cross-platform mobile app for social networking and content management, ensuring smooth performance across iOS and Android. Integrated key business processes and user-driven features.",
    techStack: [
      "React Native",
      "Node.js",
      "Figma (UI/UX)",
    ],
    highlights: [
      "Cross-platform Development",
      "UI/UX Implementation",
      "Feature Optimization",
      "User-Driven Design",
      "Performance Tuning",
    ],
    details:
      "Designed and developed a mobile application ensuring seamless functionality across iOS and Android platforms. Translated Figma UI designs into responsive, pixel-perfect interfaces with React Native. Collaborated with cross-functional teams to implement user-driven features and optimize app performance.",
  }
  
];

const Projects: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects">
      <div className="mx-auto px-12 py-16 text-center bg-gray-100">
        <h2 className="section-title">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl relative border-2 border-transparent hover:border-[#1c2bd6] hover:shadow-gray-500/50 hover:shadow-xl"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                {project.title}
              </h3>
              <p className="text-lg text-gray-600 mb-4 w-full max-w-prose break-words">
                {project.description}
              </p>

              {/* Tech Stack (Comma Separated) */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900">Tech Stack:</h4>
                <p className="text-sm text-gray-600">
                  {project.techStack.join(", ")}
                </p>
              </div>

              {/* Highlights Section */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900">Highlights:</h4>
                <div className="flex flex-wrap gap-2 items-center justify-center py-2">
                  {project.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="relative bg-[#1c2bd6] text-white px-4 py-2 rounded-lg text-sm flex items-center max-w-xs sm:max-w-sm"
                    >
                      <span className="pr-6">{highlight}</span>
                      <div className="absolute top-0.5 right-0.5 translate-x-1/2 -translate-y-1/2 text-yellow-500 text-lg">
                        ★
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Read More Button */}
              <button
                onClick={() => openModal(project)}
                className="text-[#1c2bd6] hover:text-[#1c2bd6] mb-4"
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center z-50">
          <div className="bg-white text-black p-6 rounded-lg shadow-xl w-full sm:w-3/4 md:w-2/3 lg:w-3/5 xl:w-1/2 max-w-2xl relative">
            {/* Modal Header */}
            <div className="flex justify-between mb-4">
              <div className="text-xs font-mono">Code Window</div>
              <div className="flex space-x-2 ml-auto">
                <button
                  className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600"
                  onClick={() => closeModal()}
                />
                <button className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600" />
                <button className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600" />
              </div>
            </div>

            {/* Unified Content Section */}
            <div className="text-sm font-mono text-black bg-[#f4f4f4] p-6 rounded-lg border-2 border-[#cccccc]">
              {/* Project Title */}
              <h4 className="font-semibold text-2xl mb-4">
                {selectedProject.title}
              </h4>

              {/* Tech Stack */}
              <div className="mb-4">
                <h5 className="font-semibold text-lg mb-2 text-gray-800">
                  Tech Stack
                </h5>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-4">
                <h5 className="font-semibold text-lg mb-2 text-gray-800">
                  Highlights
                </h5>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="relative bg-[#5e4a91] text-white px-4 py-2 rounded-lg text-sm flex items-center max-w-xs sm:max-w-sm"
                    >
                      <span className="pr-6">{highlight}</span>
                      <div className="absolute top-0.5 right-0.5 translate-x-1/2 -translate-y-1/2 text-yellow-500 text-lg">
                        ★
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Details with Bullet Points */}
              <div>
                <h5 className="font-semibold text-lg mb-2 text-gray-800">
                  Details
                </h5>
                <ul className="list-disc pl-5 text-gray-700 leading-relaxed">
                  {selectedProject.details.split(". ").map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
