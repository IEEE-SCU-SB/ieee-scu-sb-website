"use client";
import { useEffect, useState } from "react";
import Map from "../partials/Map";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

function CountUpNumber({
  value,
  duration = 1600,
}: {
  value: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        clearInterval(timer);
        setCount(value);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <>{count}</>;
}

export default function BranchInfoSection() {
  const activeSection = useIntersectionObserver(["branch-info"]);

  return (
    <section
      id="branch-info"
      className="flex flex-col gap-20 md:gap-24 md:flex-row justify-between px-4 md:px-6 lg:px-8 xl:px-10"
    >
      <div className="flex flex-col justify-center gap-4">
        <h2 className="mb-2">
          IEEE SCU Student Branch - Igniting Your Potential
        </h2>
        <p className="dark:text-slate-200">
          IEEE&apos;s impact extends globally through its many student branches,
          each promoting creativity and professional growth at a local level.
        </p>
        <p className="dark:text-slate-200">
          At Suez Canal University, we connect students with industry, offer
          hands-on experience, and provide a platform to grow and lead.
        </p>

        <h3 className="text-base font-medium mt-4">
          Over the past year and continuing into this one,
          <br /> we have had:
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-8 xl:gap-x-12">
          <p className="flex flex-col font-semibold">
            <span className="text-2xl md:text-3xl font-bold text-primary">
              {activeSection === "branch-info" ? (
                <CountUpNumber value={220} />
              ) : (
                0
              )}
              +
            </span>
            Active Members
          </p>
          <p className="flex flex-col font-semibold">
            <span className="text-2xl md:text-3xl font-bold text-primary">
              {activeSection === "branch-info" ? (
                <CountUpNumber value={40} />
              ) : (
                0
              )}
              +
            </span>
            Technical Events
          </p>
          <p className="flex flex-col font-semibold">
            <span className="text-2xl md:text-3xl font-bold text-primary">
              {activeSection === "branch-info" ? (
                <CountUpNumber value={15} />
              ) : (
                0
              )}
              +
            </span>
            Non-Technical Events
          </p>
        </div>
      </div>
      <Map />
    </section>
  );
}
