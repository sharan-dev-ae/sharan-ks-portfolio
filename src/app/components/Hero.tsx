import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa"; // Import icons

const Hero = () => {
  return (
    <section
      className="flex items-center justify-center min-h-screen bg-cover bg-center text-white"
    >
      <div className="flex w-full px-8 md:px-16 overflow-hidden justify-center items-center">
        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center mb-12">
          <h1 className="text-6xl font-bold mb-4">Hi, Im Sharan</h1>
          <p className="text-xl mb-6">
            Full Stack Developer | Passionate about building scalable web
            applications
          </p>
          <div>
            <div className="flex space-x-6">
              {/* Social Media Icons */}
              <a
                href="https://www.linkedin.com/in/your-linkedin-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-500 transition-colors duration-300"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://github.com/your-github-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-500 transition-colors duration-300"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://twitter.com/your-twitter-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-500 transition-colors duration-300"
              >
                <FaTwitter size={30} />
              </a>
              <a
                href="https://twitter.com/your-twitter-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-500 transition-colors duration-300"
              >
                <FaInstagram size={30} />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex flex-col justify-center">
          <div className="bg-black text-white p-6 rounded-lg shadow-lg h-96 overflow-y-auto">
            <div className="flex justify-between space-between mb-4">
              <div className="text-xs font-mono">Code Window</div>
              <div className="flex space-x-2 ml-auto">
                <button className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600" />
                <button className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600" />
                <button className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600" />
              </div>
            </div>

            <div className="text-sm font-mono whitespace-pre-wrap">
              {`
const sharan = {
  name: "Sharan",
  profession: "Full Stack Developer",
  skills: [
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "MongoDB",
    "MySQL"
  ],
  experience: '4 Years'
}
              `}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
