import {latestEvents} from "@/data/events";
import {megaEventSubEvents} from "@/data/megaEventSubEvents";

import Header from "@/components/Header";
import CloudinaryImage from "@/components/CloudinaryImage";
import SocialMedia from "@/components/SocialMedia";
import MegaEventGallery from "@/components/events/MegaEventGallery";

import {CalendarDaysIcon, MapPinIcon} from "@heroicons/react/24/solid";
import {notFound} from "next/navigation";

interface PageProps {
	params: Promise<{
		id: string;
	}>;
}

export function generateStaticParams() {
	return latestEvents
		.filter((event) => event.megaEvent)
		.map((event) => ({
			id: event.megaEvent ? event.megaEvent.id : "", // Safe to assert due to filter
		}));
}

export async function generateMetadata({params}: PageProps) {
	const {id} = await params;
	const event = latestEvents.find((e) => e.megaEvent !== false && e.megaEvent.id === id);

	if (!event) {
		return {
			title: "Event Not Found",
		};
	}

	return {
		title: `${event.title} | IEEE SCU SB`,
		description: event.description,
		openGraph: {
			title: event.title,
			description: event.description,
			images: [
				{
					url: event.image.src,
					alt: event.image.alt,
				},
			],
		},
	};
}

export default async function Page({params}: PageProps) {
	const {id} = await params;
	const event = latestEvents.find((e) => e.megaEvent !== false && e.megaEvent.id === id);
	const megaEventData = megaEventSubEvents[id];
	const subEvents = megaEventData.subEvents;
	const detailedDescription = megaEventData.description;

	if (!event) {
		notFound();
	}

	return (
		<>
			<Header title={event.title}>
				<div className='flex flex-wrap justify-center items-center gap-x-8 gap-y-2 mt-4 text-slate-700 dark:text-slate-200'>
					<p className='flex gap-2 items-center font-medium'>
						<CalendarDaysIcon className='size-5 text-amber-600 dark:text-[#fdb848]' />
						{event.date}
					</p>
					<p className='flex gap-2 items-center font-medium'>
						<MapPinIcon className='size-5 text-amber-600 dark:text-[#fdb848]' />
						{event.location}
					</p>
				</div>
			</Header>
			<main className='pt-2 gap-0 lg:pt-16'>
				<section className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto'>
					<div className='max-lg:flex flex-col items-center'>
						<CloudinaryImage
							src={typeof event.image.src === "string" ? event.image.src : event.image.src.src}
							alt={event.image.alt}
							width={500}
							height={270}
							className='rounded-xl overflow-hidden shadow-2xl dark:border dark:border-blue-400/50 border-blue-400 border-[2px]'
							imgClassName='w-full h-auto object-cover'
						/>
						{event.socialMediaPostLinks && (
							<div className='pt-5 lg:pl-5 '>
								<SocialMedia
									accent='black'
									size={5}
									facebook={event.socialMediaPostLinks.facebook}
									instagram={event.socialMediaPostLinks.instagram}
									linkedin={event.socialMediaPostLinks.linkedin}
									tiktok={event.socialMediaPostLinks.tiktok}
								/>
							</div>
						)}
					</div>
					<p className='place-self-start md:text-center text-sm md:text-base lg:text-sm lg:text-start whitespace-pre-line'>{detailedDescription}</p>
				</section>
				<MegaEventGallery subEvents={subEvents} />
			</main>
		</>
	);
}
