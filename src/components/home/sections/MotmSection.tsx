import MotmCard from "../partials/MotmCard";
import { motm } from "@/data/motm";
import { TrophyIcon } from "@heroicons/react/24/solid";

export default function MotmSection() {
  return (
    <section id="motm" className="px-4 md:px-6 lg:px-8 xl:px-10">
      <h2 className="flex justify-center items-center gap-2 text-center mb-8 lg:mb-12">
        <TrophyIcon className="size-4 md:size-5 text-[#DDB105]" />
        <span className="gold-shine">Member of the Month</span>
      </h2>
      <MotmCard
        name={motm.name}
        committee={motm.committee}
        image={motm.image}
        linkedin={motm.linkedin}
      />
    </section>
  );
}
