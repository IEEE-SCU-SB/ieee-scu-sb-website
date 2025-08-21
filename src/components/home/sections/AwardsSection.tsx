import { awards } from "@/data/awards";
import AwardBranchesVector from "../partials/AwardBranchesVector";
import AwardCard from "../partials/AwardCard";

export default function AwardsSection() {
  return (
    <section id="awards" className="px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
      <h2 className="flex justify-center items-center gap-4 text-center mb-8 lg:mb-12">
        <AwardBranchesVector />
        Our Awards
        <AwardBranchesVector className="-scale-x-100" />
      </h2>
      <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-stretch justify-center">
        {awards.map((award, index) => (
          <AwardCard
            key={index}
            title={award.title}
            subtitle={award.subtitle}
            date={award.date}
          />
        ))}
      </div>
    </section>
  );
}
