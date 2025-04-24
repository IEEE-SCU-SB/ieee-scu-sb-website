import Image from "next/image";
import type { UpcomingEvent } from "@/data/types";
import SocialMedia from "../SocialMedia";
import circuitPattern from "@/assets/misc/circuit-pattern.svg";
import wavyLine from "@/assets/misc/wavy-line.svg";
import { MapPinIcon, ClockIcon } from "@heroicons/react/24/outline";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";

export default function UpcomingEventCard({
  category,
  title,
  date,
  time,
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
        md:grid grid-cols-2 max-w-lg md:max-w-5xl mx-auto border
        before:content-[""] before:absolute before:inset-0 before:-z-10 ${
          category === "non-technical"
            ? "border-purple-muted/25 before:bg-[radial-gradient(140vw_circle_at_90%_50%,_rgba(151,_71,_255,_0.2),_transparent_40%)]"
            : "border-primary-muted/25 before:bg-[radial-gradient(140vw_circle_at_90%_50%,_rgba(9,_117,_156,_0.2),_transparent_40%)]"
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
        className="w-full h-full md:order-2 object-cover bg-black/15"
      />

      {/* Event Info */}
      <div className="flex flex-col gap-4 p-4 md:p-8">
        <div>
          {/* Title */}
          <h3 className="max-w-lg text-xl md:text-2xl mb-2">{title}</h3>
          {/* Date, Time and Location */}
          <div className="font-medium tracking-wide text-sm flex justify-between items-baseline gap-x-4 flex-wrap dark:text-slate-100">
            <div className="grid">
              <p className="flex gap-1 items-baseline">
                <CalendarDaysIcon
                  className={`size-3 ${
                    category === "technical"
                      ? "text-primary-muted"
                      : "text-purple-muted"
                  }`}
                />
                {date}
              </p>
              {time && (
                <p className="flex gap-1 items-baseline">
                  <ClockIcon
                    className={`size-3 ${
                      category === "technical"
                        ? "text-primary-muted"
                        : "text-purple-muted"
                    }`}
                  />
                  {time}
                </p>
              )}
            </div>
            <p className="flex gap-1 items-baseline">
              <MapPinIcon
                className={`size-3 ${
                  category === "technical"
                    ? "text-primary-muted"
                    : "text-purple-muted"
                }`}
              />
              {location}
            </p>
          </div>
          <hr className="mt-2" />
        </div>

        {/* Description */}
        <p className="text-sm dark:text-slate-200 whitespace-pre-line">
          {description}
        </p>

        {/* Benefits */}
        {benefits && (
          <div>
            <ul className="flex flex-wrap gap-2">
              {benefits.map((benefit, i) => (
                <li
                  key={i}
                  className={`text-xs py-1 px-3 rounded-md font-medium text-slate-900 dark:text-slate-200 border bg-opacity-20 border-opacity-30 ${
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
          className={`btn-primary text-white mt-auto ${
            category === "technical" ? "bg-primary" : "bg-purple"
          }`}
        >
          <span className="z-10">Register now!</span>
        </a>
      </div>
    </div>
  );
}
