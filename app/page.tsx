import HeaderSection from "@/components/section/header-section";
import InfoSection from "@/components/section/info-section";
import SiteHeader from "@/components/section/site-header";

export default function Home() {
  return (
    <div className="flex justify-center w-full min-h-screen">
      <div className="w-full max-w-3xl flex flex-col gap-20">
        <SiteHeader />

        <main className="space-y-10">
          <HeaderSection />

          <InfoSection />
        </main>
      </div>
    </div>
  );
}
