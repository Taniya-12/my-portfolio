import { useLenis } from "@/hooks/useLenis";
import { useActiveSection } from "@/hooks/useActiveSection";
import Sidebar from "@/components/Sidebar/Sidebar";
import MobileProfileCard from "@/components/Sidebar/MobileProfileCard";
import TopNav from "@/components/Common/TopNav";
import AmbientBackground from "@/components/Common/AmbientBackground";
import ScrollProgress from "@/components/Common/ScrollProgress";
import Home from "@/components/Home/Home";
import Education from "@/components/Education/Education";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Contact from "@/components/Contact/Contact";

export default function PortfolioPage() {
  useLenis();
  const activeSection = useActiveSection();

  return (
    <div className="min-h-screen bg-bg text-white">
      <ScrollProgress />
      <AmbientBackground />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <TopNav activeSection={activeSection} />

        <div className="flex flex-col lg:flex-row lg:gap-12">
          <Sidebar />
          <MobileProfileCard />

          <main className="flex-1 min-w-0">
            <Home />
            <Education />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
          </main>
        </div>
      </div>
    </div>
  );
}
