import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa"; // Import icons

const Hero = () => {
  return (
<section className="flex flex-col md:flex-row items-center justify-center min-h-screen text-white bg-gradient-to-b from-[#1c2bd6] to-gray-100">
  <div className="flex flex-col md:flex-row w-full px-6 md:px-16 overflow-hidden justify-between items-center">
    
    {/* Left section with background color */}
    <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left px-6 py-12 md:py-16 relative">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
        Hi, I&apos;m <span className="text-yellow-400">Sharan</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl mx-auto md:mx-0">
        Im a full-stack developer passionate about creating impactful web
        applications. Always eager to learn new technologies and solve
        real-world problems.
      </p>

      <div className="flex justify-center md:justify-start space-x-6 mt-6">
        {/* Social Media Icons */}
        <a
          href="https://www.linkedin.com/in/your-linkedin-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-400 transition-colors duration-300"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/your-github-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-400 transition-colors duration-300"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://twitter.com/your-twitter-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-400 transition-colors duration-300"
        >
          <FaTwitter size={30} />
        </a>
        <a
          href="https://www.instagram.com/your-instagram-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-400 transition-colors duration-300"
        >
          <FaInstagram size={30} />
        </a>
      </div>
    </div>

    {/* Right section with the code editor */}
    <div className="w-full md:w-1/2 flex justify-center px-6 py-12 md:py-16">
      {/* Code Window inside the monitor */}
      <div className="bg-black text-white p-6 rounded-lg shadow-lg w-full max-w-4xl h-96 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
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
    "React", "Next.js", "React Native", "Node.js", "Angular", 
    "ASP.NET Core", "AWS", "Digital Ocean", "Redux", 
    "Redux Toolkit", "Express.js", "MongoDB", "MySQL", 
    "CI/CD", "Microservices", "Tailwind CSS", "Bootstrap", "MUI",...],
  experience: "4 Years",
  can_code_both: true,  // Web or mobile, I&apos;ve got it covered!
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
