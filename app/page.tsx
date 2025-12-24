import DescriptionSection from "@/components/section/description-section";
import HeaderSection from "@/components/section/header-section";
import InfoSection from "@/components/section/info-section";
import ProjectSection from "@/components/section/projects-section";
import SiteHeader from "@/components/section/site-header";
import SkillsSection from "@/components/section/skills-section";

export default function Home() {
  return (
    <div className="flex justify-center w-full min-h-screen px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="w-full max-w-3xl flex flex-col gap-20">
        <SiteHeader />

        <main className="space-y-16">
          <div className="space-y-6">
            <HeaderSection />
            <InfoSection />
            <DescriptionSection />
          </div>

          <SkillsSection />
          <ProjectSection />
        </main>
      </div>
    </div>
  );
}
