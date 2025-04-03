// app/home/page.tsx (Home Page Component)
import dynamic from "next/dynamic";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Education from "../components/Education";
// import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skillset from "../components/Skillset";
import Statistics from "../components/Statistics";

export default function Home() {
  const ExperienceComponent = dynamic(
    () => import("../components/Experience"),
    {
      ssr: false, // Disable SSR for this component
    }
  );
  return (
    <div>
      <Navbar />
      <Hero />
      <Statistics />
      <Skillset />
      <ExperienceComponent />
      <Projects />
      <Education />
      <Blog />
      <Contact />
    </div>
  );
}
