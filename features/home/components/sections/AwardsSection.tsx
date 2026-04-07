import Image from "next/image";
import awardImage from "@/features/home/assets/award.webp";
import { awards } from "@/features/home/data/awards";
import AwardBranchesVector from "../partials/AwardBranchesVector";

export default function AwardsSection() {
  return (
    <section id="awards" className="px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
      <h2 className="mb-8 flex items-center justify-center gap-4 text-center lg:mb-12">
        <AwardBranchesVector />
        Our Awards
        <AwardBranchesVector className="-scale-x-100" />
      </h2>
      <div className="flex flex-col items-center justify-center gap-10 sm:flex-row sm:items-stretch">
        {awards.map(({ date, subtitle, title, place }, index) => (
          <div
            key={index}
            className="award-card relative flex w-fit flex-col items-center gap-2 overflow-hidden rounded-2xl border border-[#2c3e50] bg-gradient-to-br from-[#0f253a] via-[#704f1b] to-[#0f253a] px-10 py-6 text-center tracking-wider shadow-2xl"
            aria-labelledby={`award-${title.replace(/\s+/g, "-").toLowerCase()}`}
          >
            {place && (
              <div
                className="bg-background outline-background text-foreground absolute top-3 right-3 z-20 rounded-[12px] border-[2px] border-[#a07023] px-3 py-1 text-xs font-medium outline outline-[2px]"
                role="status"
                aria-label={`Award place: ${place}`}
              >
                {place}
              </div>
            )}
            <Image
              src={awardImage}
              className="z-10 -mt-4 w-36"
              alt="Award icon"
              unoptimized
              quality={100}
            />
            <div className="z-10 mb-4 flex flex-col gap-2">
              <p className="text-shadow text-sm font-medium text-white uppercase">{subtitle}</p>
              <p
                id={`award-${title.replace(/\s+/g, "-").toLowerCase()}`}
                className="text-shadow max-w-56 text-lg font-bold text-white"
              >
                {title}
              </p>
            </div>
            <p className="z-10 mt-auto text-xs font-medium text-slate-200">Awarded: {date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
