import { FaCode, FaDesktop, FaMobileAlt, FaCloud, FaTools, FaServer, FaPlug, FaCogs } from "react-icons/fa";

const services = [
    {
      id: 1,
      icon: <FaCode size={40} />,
      title: "Web Development",
      description:
        "Build responsive and dynamic websites using modern technologies like React, Next.js, and Tailwind CSS.",
    },
    {
      id: 2,
      icon: <FaDesktop size={40} />,
      title: "UI/UX Design",
      description:
        "Create user-friendly interfaces and exceptional experiences using design tools like Figma, Adobe XD, and more.",
    },
    {
      id: 3,
      icon: <FaMobileAlt size={40} />,
      title: "Mobile App Development",
      description:
        "Develop native and cross-platform mobile applications using React Native and Flutter for both iOS and Android.",
    },
    {
      id: 4,
      icon: <FaCloud size={40} />,
      title: "Cloud Solutions",
      description:
        "Provide cloud-based solutions using AWS, Azure, and DigitalOcean, along with deployment and DevOps practices.",
    },
    {
      id: 5,
      icon: <FaTools size={40} />,
      title: "Project Support",
      description:
        "Offer ongoing maintenance and improvements for existing projects, ensuring performance and scalability.",
    },
    {
      id: 7,
      icon: <FaServer size={40} />,
      title: "Backend Development",
      description:
        "Create scalable and secure backend systems using technologies like Node.js, Express, and Python.",
    },
    {
      id: 8,
      icon: <FaPlug size={40} />,
      title: "API Integration",
      description:
        "Integrate third-party APIs into your application for enhanced functionality and data connectivity.",
    },
    {
      id: 9,
      icon: <FaCogs size={40} />,
      title: "Admin Panel Development",
      description:
        "Develop robust and customizable admin panels for easy content management and data handling.",
    },
  ];
  

const Services = () => {
  return (
<section id="services" className="py-16 bg-gray-100">
  <div className="mx-auto px-16 text-center bg-gray-100 py-12">
    <h2 className="section-title text-2xl md:text-4xl font-semibold text-gray-900 mb-8">
      My Services
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {services.map((service) => (
        <div
          key={service.id}
          className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 max-w-xs mx-auto"
        >
          <div className="mb-4 text-[#1c2bd6]">{service.icon}</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {service.title}
          </h3>
          <p className="text-sm text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>




  );
};

export default Services;
