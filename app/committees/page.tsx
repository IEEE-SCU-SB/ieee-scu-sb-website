"use client";

import { useState } from "react";
import CommitteeCard from "@/components/committees/CommitteeCard";
import Header from "@/components/Header";
import NextPageLink from "@/components/NextPageLink";
import { committees } from "@/data/committees";

export default function Committees() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "technical" | "non-technical">(
    "all"
  );

  const filteredCommittees =
    selectedCategory === "all"
      ? committees
      : committees.filter((committee) => committee.category === selectedCategory);

  return (
    <>
      <Header title="Explore Our Committees">
        <p className="mx-auto my-4 max-w-3xl text-slate-800 dark:text-slate-200">
          combining technical innovation with organizational excellence. Whether you&apos;re into
          coding, robotics, media, or event management, there&apos;s a place for you to make an
          impact.
        </p>
        <div className="mb-6 flex justify-center gap-2">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`rounded-full border border-black px-3 py-1 text-sm font-medium dark:border-white ${
              selectedCategory === "all"
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-background text-foreground"
            } hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black`}
          >
            All
          </button>

          <button
            onClick={() => setSelectedCategory("technical")}
            className={`border-primary rounded-full border px-3 py-1 text-sm font-medium ${
              selectedCategory === "technical"
                ? "bg-primary text-white"
                : "bg-background text-primary"
            } hover:bg-primary transition hover:text-white`}
          >
            Technical
          </button>

          <button
            onClick={() => setSelectedCategory("non-technical")}
            className={`border-purple rounded-full border px-3 py-1 text-sm font-medium ${
              selectedCategory === "non-technical"
                ? "bg-purple text-white"
                : "bg-background text-purple"
            } hover:bg-purple transition hover:text-white`}
          >
            Non-Technical
          </button>
        </div>
      </Header>

      <main>
        <h2 className="sr-only">
          {selectedCategory === "all"
            ? "All Committees"
            : selectedCategory === "technical"
              ? "Technical Committees"
              : "Non-Technical Committees"}
        </h2>

        <div>
          <div className="flex flex-wrap justify-center gap-8">
            {filteredCommittees.map(({ id, category, title, subtitle, image }) => (
              <CommitteeCard
                key={id}
                id={id}
                category={category}
                title={title}
                subtitle={subtitle}
                image={image}
              />
            ))}
          </div>
        </div>

        <div className="mx-auto">
          <NextPageLink href="/join">Interested in Joining Us?</NextPageLink>
        </div>
      </main>
    </>
  );
}
