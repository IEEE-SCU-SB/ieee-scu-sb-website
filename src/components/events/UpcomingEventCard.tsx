import Image from "next/image";
import type { UpcomingEvent } from "@/data/types";
import SocialMedia from "../SocialMedia";
import circuitPattern from "@/public/assets/circuit-pattern.svg";
import wavyLine from "@/public/assets/wavy-line.svg";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";

export default function UpcomingEventCard({
  category,
  title,
  date,
  location,
  description,
  benefits,
  image,
  RegistrationLink,
  socialMediaPostLinks,
}: UpcomingEvent) {
  return (
    <div
      className={`upcoming-event-card relative shadow-sm rounded-xl overflow-hidden
        md:grid grid-cols-2 max-w-lg md:max-w-5xl mx-auto border dark:border-slate-800 
        before:content-[""] before:absolute before:inset-0 before:-z-10 ${
          category === "non-technical"
            ? "before:bg-[radial-gradient(140vw_circle_at_90%_50%,_rgba(151,_71,_255,_0.2),_transparent_40%)]"
            : "before:bg-[radial-gradient(140vw_circle_at_90%_50%,_rgba(9,_117,_156,_0.2),_transparent_40%)]"
        }`}
    >
      <Image
        className={`absolute bottom-0 opacity-40 dark:opacity-25 w-[75%] -z-10 ${
          category === "technical" ? "max-w-sm" : "max-w-xl"
        }`}
        src={category === "technical" ? circuitPattern : wavyLine}
        alt=""
      />

      {/* Event Image */}
      <Image
        src={image.src}
        alt={image.alt}
        className="w-full h-full md:order-2 bg-black/15"
      />

      {/* Event Info */}
      <div className="flex flex-col gap-6 justify-evenly p-4 md:p-8">
        {/* Title, Date and Location */}
        <div>
          <h3 className="max-w-lg text-xl md:text-2xl mb-2">{title}</h3>
          <div className="flex justify-between items-baseline gap-x-4 flex-wrap">
            <p
              className={`font-bold text-sm tracking-wide flex gap-1 items-baseline ${
                category === "technical" ? "text-primary" : "text-purple"
              }`}
            >
              <CalendarDaysIcon className="size-3" />
              {date}
            </p>
            <p className="font-medium text-sm flex gap-1 items-baseline">
              <MapPinIcon className="size-3 text-red-600" />
              {location}
            </p>
          </div>
          <hr className="mt-2" />
        </div>

        {/* Description */}
        <p className="text-sm dark:text-slate-200">{description}</p>

        {/* Benefits */}
        {benefits && (
          <div>
            <ul className="flex flex-wrap gap-2">
              {benefits.map((benefit, i) => (
                <li
                  key={i}
                  className={`text-xs py-1 px-3 rounded-md font-medium text-slate-700 dark:text-slate-200 border bg-opacity-20 border-opacity-30 ${
                    category === "technical"
                      ? "bg-primary border-primary"
                      : "bg-purple border-purple"
                  }`}
                >
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Links of Event on Social Media */}
        {socialMediaPostLinks && (
          <div>
            <h4 className="text-sm font-medium mb-2">More details:</h4>
            <SocialMedia
              accent="black"
              size={4}
              facebook={socialMediaPostLinks.facebook}
              instagram={socialMediaPostLinks.instagram}
              linkedin={socialMediaPostLinks.linkedin}
              tiktok={socialMediaPostLinks.tiktok}
            />
          </div>
        )}

        {/* Registration Link */}
        <a
          href={RegistrationLink}
          target="_blank"
          className={`btn-primary text-white ${
            category === "technical" ? "bg-primary" : "bg-purple"
          }`}
        >
          <span className="z-10">Register now!</span>
        </a>
      </div>
    </div>
  );
}
