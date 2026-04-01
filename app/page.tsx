import AwardsSection from "@/components/home/sections/AwardsSection";
import BranchInfoSection from "@/components/home/sections/BranchInfoSection";
import HeroSection from "@/components/home/sections/HeroSection";
import IntroSection from "@/components/home/sections/IntroSection";
import MarqueeSection from "@/components/home/sections/MarqueeSection";
import MissionAndVisionSection from "@/components/home/sections/MissionAndVisionSection";
import MotmSection from "@/components/home/sections/MotmSection";
import OfficersSection from "@/components/home/sections/OfficersSection";
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
