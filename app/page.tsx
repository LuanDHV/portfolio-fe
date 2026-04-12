import HeroSection from "@/src/sections/hero/heroSection";
import AboutSection from "@/src/sections/about/aboutSection";
import ProjectsSection from "@/src/sections/projects/projectsSection";
import ContactSection from "@/src/sections/contact/contactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
