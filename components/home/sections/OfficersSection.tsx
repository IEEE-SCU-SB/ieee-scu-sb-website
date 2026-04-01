import { officers } from "@/data/officers";
import OfficerCard from "../partials/OfficerCard";

export default function OfficersSection() {
  return (
    <section id="officers">
      <div className="relative">
        <h2 className="mb-8 px-4 text-center sm:mb-[72px] md:px-6 lg:mb-[88px] lg:px-8 xl:px-10 2xl:px-12">
          Executive Officers
        </h2>
        {/* Lines Animation */}
        <div className="lines-container absolute inset-x-0 -bottom-2 -z-10 flex flex-col items-center gap-1 overflow-hidden">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="line"></div>
          ))}
        </div>
        {/* End Lines Animation */}
      </div>
      <div className="flex flex-wrap justify-evenly gap-8 px-4 sm:grid sm:grid-cols-3 sm:justify-items-center md:px-6 lg:px-8 xl:px-10">
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
