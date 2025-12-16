import CloudinaryImage from "@/components/CloudinaryImage";
import type {LatestEvent} from "@/data/types";
import SocialMedia from "../SocialMedia";
import {CalendarDaysIcon} from "@heroicons/react/24/solid";
import {MapPinIcon , ArrowRightIcon} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function LatestEventCard({category, title, date, location, description, image, socialMediaPostLinks, megaEvent}: LatestEvent) {
	const isMegaEvent = Object.hasOwn(megaEvent || {}, "nestedPath");
	return (
		<div
			className={`flex flex-col shadow-sm rounded-xl overflow-hidden mx-auto max-w-lg border ${
				category === "non-technical" ? "border-purple-muted/20 bg-purple-muted/5" : "border-primary-muted/20 bg-primary-muted/5"
			} ${
				isMegaEvent
					? " border-amber-400 shadow-lg shadow-amber-300/40 dark:from-[#0f253a] dark:via-[#413015] dark:to-[#0f253a] dark:border-[#fdb848] dark:shadow-[#e7ac4d]/40"
					: ""
			}`}
		>
			{/* Event Image */}
			<CloudinaryImage
				src={image.src?.toString()}
				alt={image.alt}
				width={400}
				height={225}
				className='w-full object-center object-cover aspect-video bg-black/15'
			/>

			{/* Event Info */}
			<div className='grow  flex flex-col gap-4 p-4 md:p-6'>
				<div>
					{/* Title */}
					<h3 className={`max-w-lg text-lg md:text-xl mb-2 ${isMegaEvent ? "text-[#af6d03] font-semibold dark:text-[#fdb848]" : ""} `}>
						{title}
					</h3>
					{/* Date and Location */}
					<div className={`font-medium tracking-wide text-sm flex justify-between items-baseline gap-x-4 flex-wrap `}>
						<p className='flex gap-1 items-baseline'>
							<CalendarDaysIcon
								className={`size-3 ${
									isMegaEvent ? "text-amber-600 dark:text-[#fdb848]" : category === "technical" ? "text-primary-muted" : "text-purple-muted"
								}`}
							/>
							{date}
						</p>
						<p className='flex gap-1 items-baseline'>
							<MapPinIcon
								className={`size-3 ${
									isMegaEvent ? "text-amber-600 dark:text-[#fdb848]" : category === "technical" ? "text-primary-muted" : "text-purple-muted"
								}`}
							/>
							{location}
						</p>
					</div>
					<hr className='mt-2' />
				</div>

				{/* Description */}
				<p className={`text-sm whitespace-pre-line`}>{description}</p>

				{/* Links of Event on Social Media */}
				<div className='flex mt-auto items-center'>
					{socialMediaPostLinks && (
						<div className='mt-auto'>
							<h4 className={`text-sm font-medium mb-2 `}>More details:</h4>
							<SocialMedia
								accent='black'
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
							className='text-[#af6d03] font-semibold dark:text-[#fdb848] mt-auto hover:underline ml-auto '
						>
							Explore Event
							<ArrowRightIcon className="size-4 ml-1 inline" />
						</Link>
					)}
				</div>
			</div>
		</div>
	);
}
