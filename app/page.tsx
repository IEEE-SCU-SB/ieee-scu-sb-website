import AwardsSection from "@/features/home/components/sections/AwardsSection";
import BranchInfoSection from "@/features/home/components/sections/BranchInfoSection";
import HeroSection from "@/features/home/components/sections/HeroSection";
import IntroSection from "@/features/home/components/sections/IntroSection";
import MarqueeSection from "@/features/home/components/sections/MarqueeSection";
import MissionAndVisionSection from "@/features/home/components/sections/MissionAndVisionSection";
import MotmSection from "@/features/home/components/sections/MotmSection";
import OfficersSection from "@/features/home/components/sections/OfficersSection";
import NextPageLink from "@/components/NextPageLink";

export default function Home() {
  return (
    <>
      <HeroSection />
      <main className="home-page gap-32 px-0 py-16 lg:py-20 xl:gap-40">
        <IntroSection />
        <BranchInfoSection />
        <MissionAndVisionSection />
        <MarqueeSection />
        <AwardsSection />
        <OfficersSection />
        <MotmSection />
        {/* Quick Links */}
        <div className="px-4 md:px-6 lg:px-8 xl:px-10">
          <div className="mx-auto flex max-w-md flex-wrap justify-center gap-x-8 gap-y-2">
            <NextPageLink href="/events">View Our Events</NextPageLink>
            <NextPageLink href="/about">Know More About Us</NextPageLink>
            <NextPageLink href="/committees">Explore Our Committees</NextPageLink>
          </div>
        </div>
      </main>
    </>
  );
}
