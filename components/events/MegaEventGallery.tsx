"use client";

import {useState} from "react";
import {CalendarDaysIcon} from "@heroicons/react/24/solid";
import CloudinaryImage from "@/components/CloudinaryImage";
import type {SubEvent} from "@/data/megaEventSubEvents";

interface MegaEventGalleryProps {
	subEvents: SubEvent[];
}

export default function MegaEventGallery({subEvents}: MegaEventGalleryProps) {
	const [selectedSubEvent, setSelectedSubEvent] = useState(subEvents[0]?.id || "");

	if (subEvents.length === 0) return null;

	const currentSubEvent = subEvents.find((se) => se.id === selectedSubEvent);

	return (
		<>
			<section className='mt-10 max-w-6xl mx-auto lg:mt-20 mb-0'>
				<h2 className='text-center text-3xl font-bold mb-6'>Gallery</h2>
				<div className='  *:w-[150px] flex-wrap sm:*:w-[200px] lg:*:w-[250px] justify-center w-full flex items-center gap-6 mx-auto  '>
					{subEvents.map((subEvent) => {
						const isSelected = selectedSubEvent === subEvent.id;

						return (
							<button
								key={subEvent.id}
								onClick={() => setSelectedSubEvent(subEvent.id)}
								className={`relative group overflow-hidden rounded-[8px] p-3 2xl:p-4 text-left border transition-all duration-500 ${
									isSelected
										? "border-blue-500 dark:border-blue-400 shadow-md bg-gradient-to-r from-transparent via-blue-500/30 to-blue-100/40 bg-[length:200%_100%] animate-gradient-slide"
										: "bg-transparent border-blue-400 dark:border-blue-700"
								}`}
							>
								<h3
									className={`font-bold text-lg transition-colors duration-500 relative z-10 ${
										isSelected ? "text-blue-900 dark:text-blue-100" : "text-slate-900 dark:text-slate-100"
									}`}
								>
									{subEvent.title}
								</h3>
								<p
									className={`lg:text-sm text-xs font-medium flex items-center gap-2 transition-colors duration-500 relative z-10  ${
										isSelected ? "text-blue-700 dark:text-blue-300" : "text-slate-600 dark:text-slate-400"
									}`}
								>
									<CalendarDaysIcon className='size-4 lg:size-5' />
									{subEvent.date}
								</p>

								<div
									className={`absolute -bottom-8 -right-8 w-32 h-32 rounded-full blur-2xl transition-all duration-500 ${
										isSelected ? "bg-blue-300/30 dark:bg-blue-400/20 opacity-100 scale-100" : ""
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
					className='mt-6 max-w-6xl mx-auto columns-2 select-none   sm:columns-3 lg:columns-4 gap-2'
				>
					{currentSubEvent.gallery.map((image, index) => (
						<div
							key={image}
							className='opacity-0 animate-fade-in mb-2 break-inside-avoid'
							style={{animationDelay: `${index * 50}ms`}}
						>
							<CloudinaryImage
								src={typeof image === "string" ? image : image}
								alt='Gallery Image'
								imgClassName='border border-blue-600/70 rounded-[4px]'
							/>
						</div>
					))}
				</section>
			)}
		</>
	);
}
