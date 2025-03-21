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
    title: "Project 1",
    description:
      "A brief description of project 1. This project focuses on building scalable applications.",
    techStack: ["React", "Node.js", "MongoDB", "Microservices", "AWS"],
    highlights: ["Microservices", "AWS"],
    details:
      "This project involves developing a real-time application using React and Node.js. MongoDB is used for managing user data, while AWS ensures that the app is scalable and highly available.",
  },
  {
    title: "Project 2",
    description:
      "Project 2 is about creating innovative solutions for real-world problems using modern tech.",
    techStack: ["Next.js", "GraphQL", "PostgreSQL", "Docker", "CI/CD"],
    highlights: ["CI/CD", "Docker"],
    details:
      "This project leverages Next.js for server-side rendering and static site generation. GraphQL is used to handle API requests, while PostgreSQL provides a relational database for storing data.",
  },
  {
    title: "Project 3",
    description:
      "This project involves building mobile apps with React Native, providing great user experiences.",
    techStack: ["React Native", "Firebase", "Expo", "GraphQL"],
    highlights: ["React Native", "Firebase"],
    details:
      "This mobile app was built using React Native, with Firebase used for authentication and real-time data sync. Expo simplifies the development process and improves productivity.",
  },
  {
    title: "Project 4",
    description:
      "A cutting-edge solution for cloud automation using AWS and Docker, helping businesses scale efficiently.",
    techStack: ["AWS", "Docker", "Terraform", "Kubernetes"],
    highlights: ["Docker", "Kubernetes"],
    details:
      "This project automates cloud infrastructure deployment using Terraform and Docker containers. AWS services like EC2 and S3 are used to ensure the app runs in a scalable and cost-effective environment.",
  },
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
    <section id='projects' className="py-24 text-white bg-gradient-to-b from-[#3C3C7B] to-[#4E4E8E]">
      <div className="container mx-auto px-8 text-center">
        <h2 className="section-title">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#2B2B63] p-6 rounded-lg shadow-md transform transition-all hover:scale-105 hover:shadow-xl relative border-2 border-transparent hover:border-[#5e4a91] hover:shadow-[#5e4a91] hover:shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-lg text-gray-400 mb-4">
                {project.description}
              </p>

              {/* Tech Stack (Comma Separated) */}
              <div className="mb-4">
                <h4 className="font-semibold">Tech Stack:</h4>
                <p className="text-sm">{project.techStack.join(", ")}</p>
              </div>

              {/* Highlights Section */}
              <div className="mb-4">
                <h4 className="font-semibold">Highlights:</h4>
                <div className="flex flex-wrap gap-2 items-center justify-center py-2">
                  {project.highlights.map((highlight, index) => (
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

              {/* Read More Button */}
              <button
                onClick={() => openModal(project)}
                className="text-[#5e4a91] hover:text-[#5e4a91] mb-4"
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
