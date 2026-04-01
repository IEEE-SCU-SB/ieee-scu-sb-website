import Image from "next/image";
import circuitPattern from "@/assets/misc/circuit-pattern.svg";
import wavyLine from "@/assets/misc/wavy-line.svg";
import type { UpcomingEvent } from "@/data/types";
import { ClockIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import SocialMedia from "../SocialMedia";

export default function UpcomingEventCard({
  category,
  title,
  date,
  time,
  location,
  description,
  tags,
  image,
  RegistrationLink,
  socialMediaPostLinks,
}: UpcomingEvent) {
  return (
    <div
      className={`upcoming-event-card relative mx-auto max-w-lg grid-cols-2 overflow-hidden rounded-xl border shadow-sm before:absolute before:inset-0 before:-z-10 before:content-[""] md:grid md:max-w-5xl ${
        category === "non-technical"
          ? "border-purple-muted/25 before:bg-[radial-gradient(140vw_circle_at_90%_50%,_rgba(151,_71,_255,_0.2),_transparent_40%)]"
          : "border-primary-muted/25 before:bg-[radial-gradient(140vw_circle_at_90%_50%,_rgba(9,_117,_156,_0.2),_transparent_40%)]"
      }`}
    >
      <Image
        className={`absolute bottom-0 -z-10 w-[75%] opacity-40 dark:opacity-25 ${
          category === "technical" ? "max-w-sm" : "max-w-xl"
        }`}
        src={category === "technical" ? circuitPattern : wavyLine}
        alt=""
      />

      {/* Event Image */}
      <Image
        src={image.src}
        alt={image.alt}
        className="h-full w-full bg-black/15 object-cover md:order-2"
      />

      {/* Event Info */}
      <div className="flex flex-col gap-4 p-4 md:p-8">
        <div>
          {/* Title */}
          <h3 className="mb-2 max-w-lg text-xl md:text-2xl">{title}</h3>
          {/* Date, Time and Location */}
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 text-sm font-medium tracking-wide dark:text-slate-100">
            <div className="grid">
              <p className="flex items-baseline gap-1">
                <CalendarDaysIcon
                  className={`size-3 ${
                    category === "technical" ? "text-primary-muted" : "text-purple-muted"
                  }`}
                />
                {date}
              </p>
              {time && (
                <p className="flex items-baseline gap-1">
                  <ClockIcon
                    className={`size-3 ${
                      category === "technical" ? "text-primary-muted" : "text-purple-muted"
                    }`}
                  />
                  {time}
                </p>
              )}
            </div>
            <p className="flex items-baseline gap-1">
              <MapPinIcon
                className={`size-3 ${
                  category === "technical" ? "text-primary-muted" : "text-purple-muted"
                }`}
              />
              {location}
            </p>
          </div>
          <hr className="mt-2" />
        </div>

        {/* Description */}
        <p className="text-sm whitespace-pre-line dark:text-slate-200">{description}</p>

        {/* Tags */}
        {tags && (
          <div>
            <ul className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <li
                  key={i}
                  className={`bg-opacity-20 border-opacity-30 rounded-md border px-3 py-1 text-xs font-medium text-slate-900 dark:text-slate-200 ${
                    category === "technical"
                      ? "bg-primary border-primary"
                      : "bg-purple border-purple"
                  }`}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Links of Event on Social Media */}
        {socialMediaPostLinks && (
          <div>
            <h4 className="mb-2 text-sm font-medium">More details:</h4>
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
          className={`btn-primary mt-auto text-white ${
            category === "technical" ? "bg-primary" : "bg-purple"
          }`}
        >
          <span className="z-10">Register now!</span>
        </a>
      </div>
    </div>
  );
}
