import HeroSection from "@/src/sections/hero/heroSection";
import AboutSection from "@/src/sections/about/aboutSection";
import TechStackSection from "@/src/sections/techStack/techStackSection";
import ProjectsSection from "@/src/sections/projects/projectsSection";
import ContactSection from "@/src/sections/contact/contactSection";
import RightSidebarNav from "@/src/components/ui/RightSidebarNav";

export default function Home() {
  return (
    <>
      <RightSidebarNav />
      <main className="relative overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
