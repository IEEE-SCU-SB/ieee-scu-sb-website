import Link from "next/link";
import CloudinaryImage from "@/components/CloudinaryImage";
import SocialMedia from "@/components/SocialMedia";
import type { LatestEvent } from "@/features/events/data/types";
import { ArrowRightIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";

export default function LatestEventCard({
  category,
  title,
  date,
  location,
  description,
  image,
  socialMediaPostLinks,
  megaEvent,
}: LatestEvent) {
  const isMegaEvent = Object.hasOwn(megaEvent || {}, "nestedPath");
  return (
    <div
      className={`mx-auto flex max-w-lg flex-col overflow-hidden rounded-xl border shadow-sm ${
        category === "non-technical"
          ? "border-purple-muted/20 bg-purple-muted/5"
          : "border-primary-muted/20 bg-primary-muted/5"
      } ${
        isMegaEvent
          ? "border-[#fdb848] shadow-lg shadow-amber-300/40 dark:border-[#fdb848]/40 dark:from-[#0f253a] dark:via-[#413015] dark:to-[#0f253a] dark:shadow-[#e7ac4d]/40"
          : ""
      }`}
    >
      {/* Event Image */}
      <CloudinaryImage
        src={image.src?.toString()}
        alt={image.alt}
        width={490}
        height={277}
        className="aspect-video w-full bg-black/15 object-cover object-center"
      />

      {/* Event Info */}
      <div className="flex grow flex-col gap-4 p-4 md:p-6">
        <div>
          {/* Title */}
          <h3
            className={`mb-2 max-w-lg text-lg md:text-xl ${isMegaEvent ? "font-semibold text-[#af6d03] dark:text-[#fdb848]" : ""} `}
          >
            {title}
          </h3>
          {/* Date and Location */}
          <div
            className={`flex flex-wrap items-baseline justify-between gap-x-4 text-sm font-medium tracking-wide`}
          >
            <p className="flex items-baseline gap-1">
              <CalendarDaysIcon
                className={`size-3 ${
                  isMegaEvent
                    ? "text-amber-600 dark:text-[#fdb848]"
                    : category === "technical"
                      ? "text-primary-muted"
                      : "text-purple-muted"
                }`}
              />
              {date}
            </p>
            <p className="flex items-baseline gap-1">
              <MapPinIcon
                className={`size-3 ${
                  isMegaEvent
                    ? "text-amber-600 dark:text-[#fdb848]"
                    : category === "technical"
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
        <p className={`text-sm whitespace-pre-line`}>{description}</p>

        {/* Links of Event on Social Media */}
        <div className="mt-auto flex items-center">
          {socialMediaPostLinks && (
            <div className="mt-auto">
              <h4 className={`mb-2 text-sm font-medium`}>More details:</h4>
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
          {isMegaEvent && (
            <Link
              href={`/events${megaEvent && megaEvent.nestedPath}`}
              className="mt-auto ml-auto font-semibold text-[#af6d03] hover:underline dark:text-[#fdb848]"
            >
              View Highlights
              <ArrowRightIcon className="ml-1 inline size-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
