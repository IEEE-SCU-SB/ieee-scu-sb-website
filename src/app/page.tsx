import HeroSection from "@/components/home/sections/HeroSection";
import IntroSection from "@/components/home/sections/IntroSection";
import BranchInfoSection from "@/components/home/sections/BranchInfoSection";
import MissionAndVisionSection from "@/components/home/sections/MissionAndVisionSection";
import OfficersSection from "@/components/home/sections/OfficersSection";
import NextPageLink from "@/components/NextPageLink";
import MotmSection from "@/components/home/sections/MotmSection";
import MarqueeSection from "@/components/home/sections/MarqueeSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <main className="home-page px-0 gap-32 xl:gap-40 py-16 lg:py-20">
        <IntroSection />
        <BranchInfoSection />
        <MissionAndVisionSection />
        <MarqueeSection />
        <OfficersSection />
        <MotmSection />
        {/* Quick Links */}
        <div className="px-4 md:px-6 lg:px-8 xl:px-10">
          <div className="flex justify-center flex-wrap max-w-md gap-x-8 gap-y-2 mx-auto">
            <NextPageLink href="/events">View Our Events</NextPageLink>
            <NextPageLink href="/about">Know More About Us</NextPageLink>
            <NextPageLink href="/committees">
              Explore Our Committees
            </NextPageLink>
          </div>
        </div>
      </main>
    </>
  );
}
