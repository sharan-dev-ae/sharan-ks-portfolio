import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaFileDownload } from "react-icons/fa"; // Import icons

const Hero = () => {
  return (
    <section className="flex items-center justify-center min-h-screen text-white">
      <div className="flex w-full px-8 md:px-16 overflow-hidden justify-center items-center">
        {/* Left section with background image */}
        <div
          className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center mb-12 relative"
          style={{
            backgroundImage: "url('/images/blue-slash-2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "75vh", // Adjust height as needed
          }}
        >
          <div
            className="relative z-10 px-8 py-12"
            style={{ marginLeft: "60px" }}
          >
            <h1 className="text-5xl font-bold mb-8 text-black">
              Hi, I&apos;m <span className="text-7xl text-white ">Sharan</span>
            </h1>
            <div className="flex items-center space-x-6">
              {" "}
              {/* Flex container for alignment */}
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
              {/* Download CV Button */}
              {/* <a
                href="/sharan_resume.pdf"
                download
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300 ml-4 flex gap-2"
              >
                  <FaFileDownload size={20} />
                Download CV
              </a> */}
            </div>
          </div>
        </div>

        {/* Right section with the code editor */}
        <div className="w-full md:w-1/2 flex justify-center">
          {/* Code Window inside the monitor */}
          <div className="bg-black text-white p-6 rounded-lg shadow-lg h-96 w-full md:w-160 overflow-y-auto">
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
