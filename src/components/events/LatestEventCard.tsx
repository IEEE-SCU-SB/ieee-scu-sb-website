import CloudinaryImage from "@/components/CloudinaryImage";
import type {LatestEvent} from "@/data/types";
import SocialMedia from "../SocialMedia";
import {CalendarDaysIcon} from "@heroicons/react/24/solid";
import {MapPinIcon} from "@heroicons/react/24/outline";

export default function LatestEventCard({category, title, date, location, description, image, socialMediaPostLinks}: LatestEvent) {
	return (
		<div
			className={`flex flex-col shadow-sm rounded-xl overflow-hidden mx-auto max-w-lg border ${
				category === "non-technical" ? "border-purple-muted/20 bg-purple-muted/5" : "border-primary-muted/20 bg-primary-muted/5"
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
			<div className='grow flex flex-col gap-4 p-4 md:p-6'>
				<div>
					{/* Title */}
					<h3 className='max-w-lg text-lg md:text-xl mb-2'>{title}</h3>
					{/* Date and Location */}
					<div className='font-medium tracking-wide text-sm flex justify-between items-baseline gap-x-4 flex-wrap dark:text-slate-100'>
						<p className='flex gap-1 items-baseline'>
							<CalendarDaysIcon className={`size-3 ${category === "technical" ? "text-primary-muted" : "text-purple-muted"}`} />
							{date}
						</p>
						<p className='flex gap-1 items-baseline'>
							<MapPinIcon className={`size-3 ${category === "technical" ? "text-primary-muted" : "text-purple-muted"}`} />
							{location}
						</p>
					</div>
					<hr className='mt-2' />
				</div>

				{/* Description */}
				<p className='text-sm dark:text-slate-200 whitespace-pre-line'>{description}</p>

				{/* Links of Event on Social Media */}
				{socialMediaPostLinks && (
					<div className='mt-auto'>
						<h4 className='text-sm font-medium mb-2'>More details:</h4>
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
			</div>
		</div>
	);
}
