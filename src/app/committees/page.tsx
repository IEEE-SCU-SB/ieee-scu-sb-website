"use client";
import { useState } from "react";
import { committees } from "@/data/committees";
import Header from "@/components/Header";
import CommitteeCard from "@/components/committees/CommitteeCard";
import NextPageLink from "@/components/NextPageLink";

export default function Committees() {
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "technical" | "non-technical"
  >("all");

  const filteredCommittees =
    selectedCategory === "all"
      ? committees
      : committees.filter(
          (committee) => committee.category === selectedCategory
        );

  return (
    <>
      <Header title="Explore Our Committees">
        <p className="my-4 max-w-3xl mx-auto text-slate-800 dark:text-slate-200">
          combining technical innovation with organizational excellence. Whether
          you&apos;re into coding, robotics, media, or event management,
          there&apos;s a place for you to make an impact.
        </p>
        <div className="flex gap-2 justify-center mb-6">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`rounded-full px-3 py-1 text-sm font-medium border border-black dark:border-white ${
              selectedCategory === "all"
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-white text-black  dark:bg-bgDark dark:text-white"
            } hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black`}
          >
            All
          </button>

          <button
            onClick={() => setSelectedCategory("technical")}
            className={`rounded-full px-3 py-1 text-sm font-medium border border-primary ${
              selectedCategory === "technical"
                ? "bg-primary text-white"
                : "bg-white text-primary dark:bg-bgDark dark:text-primary"
            } hover:bg-primary hover:text-white transition`}
          >
            Technical
          </button>

          <button
            onClick={() => setSelectedCategory("non-technical")}
            className={`rounded-full px-3 py-1 text-sm font-medium border border-purple ${
              selectedCategory === "non-technical"
                ? "bg-purple text-white"
                : "bg-white text-purple dark:bg-bgDark dark:text-purple"
            } hover:bg-purple hover:text-white transition`}
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
          <div className="flex flex-wrap gap-8 justify-center">
            {filteredCommittees.map(
              ({ id, category, title, subtitle, image }) => (
                <CommitteeCard
                  key={id}
                  id={id}
                  category={category}
                  title={title}
                  subtitle={subtitle}
                  image={image}
                />
              )
            )}
          </div>
        </div>

        <div className="mx-auto">
          <NextPageLink href="/join">Interested in Joining Us?</NextPageLink>
        </div>
      </main>
    </>
  );
}
