import { motm } from "@/data/motm";
import MotmCard from "../partials/MotmCard";

export default function MotmSection() {
  return (
    <section id="motm" className="px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
      <h2 className="mb-8 flex items-center justify-center gap-2 text-center lg:mb-12">
        <span className="gold-shine">Member of the Month</span>
      </h2>
      <MotmCard
        name={motm.name}
        committee={motm.committee}
        image={motm.image}
        linkedin={motm.linkedin}
        published={motm.published}
      />
    </section>
  );
}
