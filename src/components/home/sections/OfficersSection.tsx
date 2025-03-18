import { officers } from "@/data/officers";
import OfficerCard from "../partials/OfficerCard";

export default function OfficersSection() {
  return (
    <section id="officers">
      <div className="relative">
        <h2 className="text-center mb-8 sm:mb-[72px] lg:mb-[88px] px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
          Executive Officers
        </h2>
        {/* Lines Animation */}
        <div className="lines-container absolute inset-x-0 -bottom-2 flex flex-col gap-1 items-center overflow-hidden -z-10">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="line"></div>
          ))}
        </div>
        {/* End Lines Animation */}
      </div>
      <div className="flex flex-wrap justify-evenly sm:grid sm:grid-cols-3 gap-8 sm:justify-items-center px-4 md:px-6 lg:px-8 xl:px-10">
        {officers.map((officer, index) => (
          <OfficerCard
            key={index}
            name={officer.name}
            position={officer.position}
            linkedin={officer.linkedin}
            mail={officer.mail}
            image={{
              src: officer.image.src,
              alt: officer.image.alt,
            }}
          />
        ))}
      </div>
    </section>
  );
}
