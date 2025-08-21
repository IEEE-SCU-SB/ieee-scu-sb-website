import Image from "next/image";
import awardImage from "@/assets/misc/award.webp";
import { Award } from "@/data/types";

function AwardCard({ title, subtitle, date }: Award) {
  return (
    <div
      className="award-card w-fit bg-gradient-to-br from-[#0f253a] via-[#704f1b] to-[#0f253a] 
            border border-[#2c3e50] py-6 px-10 rounded-2xl shadow-2xl overflow-hidden
            flex flex-col gap-2 items-center text-center tracking-wider relative"
    >
      <Image
        src={awardImage}
        className="w-36 -mt-4 z-10"
        alt=""
        unoptimized
        quality={100}
      />
      <div className="flex flex-col gap-2 mb-4 z-10">
        <p className="text-sm font-medium uppercase text-white text-shadow">
          {subtitle}
        </p>
        <p className="text-lg font-bold text-white text-shadow max-w-56">
          {title}
        </p>
      </div>
      <p className="text-slate-200 font-medium text-xs mt-auto z-10">
        Awarded: {date}
      </p>
    </div>
  );
}

export default AwardCard;
