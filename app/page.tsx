import HeroSection from "@/src/sections/hero/heroSection";
import ExperienceSection from "@/src/sections/experience/experienceSection";
import ProjectsSection from "@/src/sections/projects/projectsSection";
import ContactSection from "@/src/sections/contact/contactSection";
import RightSidebarNav from "@/src/components/ui/RightSidebarNav";

export default function Home() {
  return (
    <>
      <RightSidebarNav />
      <main className="relative overflow-x-hidden">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
