"use client";

import { useState } from "react";
import CloudinaryImage from "@/components/CloudinaryImage";
import type { SubEvent } from "@/features/events/data/megaEventSubEvents";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";

interface MegaEventGalleryProps {
  subEvents: SubEvent[];
}

export default function MegaEventGallery({ subEvents }: MegaEventGalleryProps) {
  const [selectedSubEvent, setSelectedSubEvent] = useState(subEvents[0]?.id || "");

  if (subEvents.length === 0) return null;

  const currentSubEvent = subEvents.find((se) => se.id === selectedSubEvent);

  return (
    <>
      <section className="mx-auto mt-10 mb-0 max-w-6xl lg:mt-20">
        <h2 className="mb-6 text-center text-3xl font-bold">Gallery</h2>
        <div className="mx-auto flex w-full flex-wrap items-center justify-center gap-6 *:w-[150px] sm:*:w-[200px] lg:*:w-[250px]">
          {subEvents.map((subEvent) => {
            const isSelected = selectedSubEvent === subEvent.id;

            return (
              <button
                key={subEvent.id}
                onClick={() => setSelectedSubEvent(subEvent.id)}
                className={`group relative overflow-hidden rounded-[8px] border p-3 text-left transition-all duration-500 2xl:p-4 ${
                  isSelected
                    ? "animate-gradient-slide border-blue-500 bg-gradient-to-r from-transparent via-blue-500/30 to-blue-100/40 bg-[length:200%_100%] shadow-md dark:border-blue-400"
                    : "border-blue-400 bg-transparent dark:border-blue-700"
                }`}
              >
                <h3
                  className={`relative z-10 text-lg font-bold transition-colors duration-500 ${
                    isSelected
                      ? "text-blue-900 dark:text-blue-100"
                      : "text-slate-900 dark:text-slate-100"
                  }`}
                >
                  {subEvent.title}
                </h3>
                <p
                  className={`relative z-10 flex items-center gap-2 text-xs font-medium transition-colors duration-500 lg:text-sm ${
                    isSelected
                      ? "text-blue-700 dark:text-blue-300"
                      : "text-slate-600 dark:text-slate-400"
                  }`}
                >
                  <CalendarDaysIcon className="size-4 lg:size-5" />
                  {subEvent.date}
                </p>

                <div
                  className={`absolute -right-8 -bottom-8 h-32 w-32 rounded-full blur-2xl transition-all duration-500 ${
                    isSelected ? "scale-100 bg-blue-300/30 opacity-100 dark:bg-blue-400/20" : ""
                  }`}
                />
              </button>
            );
          })}
        </div>
      </section>
      {currentSubEvent && currentSubEvent.gallery.length > 0 && (
        <section
          key={selectedSubEvent}
          className="mx-auto mt-6 max-w-6xl columns-2 gap-2 select-none sm:columns-3 lg:columns-4"
        >
          {currentSubEvent.gallery.map((image, index) => (
            <div
              key={image}
              className="animate-fade-in mb-2 break-inside-avoid opacity-0"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CloudinaryImage
                src={typeof image === "string" ? image : image}
                alt="Gallery Image"
                imgClassName="border border-blue-600/70 rounded-[4px]"
              />
            </div>
          ))}
        </section>
      )}
    </>
  );
}
