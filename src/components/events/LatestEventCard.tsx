import Image from "next/image";
import type { LatestEvent } from "@/data/types";
import SocialMedia from "../SocialMedia";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { MapPinIcon } from "@heroicons/react/24/outline";

export default function LatestEventCard({
  category,
  title,
  date,
  location,
  description,
  image,
  socialMediaPostLinks,
}: LatestEvent) {
  return (
    <div className="shadow-sm rounded-xl overflow-hidden mx-auto border dark:border-slate-700/50 max-w-lg bg-slate-50/70 dark:bg-slate-800/20">
      {/* Event Image */}
      <Image
        src={image.src}
        alt={image.alt}
        className="w-full object-center object-cover aspect-video bg-black/15"
      ></Image>

      {/* Event Info */}
      <div className="flex flex-col gap-4 p-4 md:p-6">
        {/* Title, Date and Location */}
        <div>
          <h3 className="max-w-lg text-lg md:text-xl mb-2">{title}</h3>
          <div className="flex justify-between items-baseline gap-x-4 flex-wrap">
            <p className="font-medium tracking-wide text-sm flex gap-1 items-baseline">
              <CalendarDaysIcon
                className={`size-3 ${
                  category === "technical"
                    ? "text-primary-muted"
                    : "text-purple-muted"
                }`}
              />
              {date}
            </p>
            <p className="font-medium text-sm flex gap-1 items-baseline">
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
        <p className="text-sm dark:text-slate-200">{description}</p>

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
      </div>
    </div>
  );
}
