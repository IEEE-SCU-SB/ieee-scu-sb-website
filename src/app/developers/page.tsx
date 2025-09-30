"use client";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import {developers, techStack} from "@/data/developers";
import {EnvelopeIcon} from "@heroicons/react/24/solid";

const LinkedInIcon = ({className}: {className?: string}) => (
	<svg className={className} fill='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
		<path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
	</svg>
);

const DeveloperCard = ({
	name,
	role,
	achievements,
	award,
	linkedin,
	email,
	image,
}: {
	name: string;
	role: string;
	achievements: string[];
	award?: {
		title: string;
		year: string;
		organization: string;
	};
	linkedin: string;
	email: string;
	image: {
		src: import("next/image").StaticImageData;
		alt: string;
	};
}) => {
	return (
		<div className='relative bg-white dark:bg-slate-800 border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200'>
			{/* Award Badge - Responsive positioning for all screens */}
			{award && (
				<div className='sm:absolute select-none w-fit ml-auto mt-2 mr-2 top-2 right-2 sm:top-3 sm:right-3 z-10 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 p-0.5 rounded-xl shadow-xl'>
					<div className='bg-gradient-to-b from-yellow-50 to-yellow-100 dark:from-yellow-900/90 dark:to-yellow-800/90 px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg flex items-start gap-1.5 sm:gap-2'>
						{/* Award Medal SVG - Responsive sizing */}
						<svg className='w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 flex-shrink-0' fill='currentColor' viewBox='0 0 24 24'>
							<path d='M5 16L3 21L8.5 18L12 21L15.5 18L21 21L19 16H5ZM19 8C19 11.86 15.86 15 12 15S5 11.86 5 8C5 4.14 8.14 1 12 1S19 4.14 19 8ZM12 13C14.76 13 17 10.76 17 8S14.76 3 12 3S7 5.24 7 8S9.24 13 12 13ZM12 5C13.66 5 15 6.34 15 8S13.66 11 12 11S9 9.66 9 8S10.34 5 12 5Z' />
						</svg>
						<div className='flex-1 min-w-0'>
							<span className='text-[10px] sm:text-xs font-bold text-yellow-800 dark:text-yellow-200 leading-tight mb-0.5 sm:mb-1 block truncate'>
								{award.title}
							</span>
							<div className='flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-1'>
								<span className='text-[9px] sm:text-xs text-yellow-700 dark:text-yellow-300 leading-tight truncate'>
									{award.organization} {award.year}{" "}
								</span>
							</div>
						</div>
					</div>
				</div>
			)}

			<div className='flex flex-col md:flex-row'>
				{/* Mobile/Small Screen Layout - Image + Essential Info Side by Side */}
				<div className='flex md:hidden items-center gap-4 p-4 sm:p-6'>
					{/* Mobile Image */}
					<div className='relative size-32 rounded-full border-2 border-slate-200 dark:border-slate-600 shadow-lg overflow-hidden flex-shrink-0'>
						<Image
							src={image.src}
							alt={image.alt}
							fill
							className='object-cover object-center hover:scale-105 transition-transform duration-300'
							sizes='(max-width: 640px) 96px, 128px'
							
						/>
					</div>

					{/* Mobile Essential Info */}
					<div className='flex-1 min-w-0'>
						<h3 className='text-base font-bold text-foreground mb-1 break-words'>{name}</h3>
						<p className='text-primary font-medium text-sm mb-3'>{role}</p>

						<div className='flex gap-1.5 flex-wrap'>
							<Link
								href={linkedin}
								target='_blank'
								rel='noopener noreferrer'
								className='inline-flex items-center gap-1 px-2 py-1 bg-foreground text-background hover:bg-foreground/90 rounded-md text-xs font-medium transition-colors flex-shrink-0'
							>
								<LinkedInIcon className='w-3 h-3' />
								<span className='whitespace-nowrap'>LinkedIn</span>
							</Link>

							<Link
								href={`mailto:${email}`}
								className='inline-flex items-center gap-1 px-2 py-1 border border-slate-300 dark:border-border hover:bg-slate-100 dark:hover:bg-slate-700 text-foreground rounded-md text-xs font-medium transition-colors flex-shrink-0'
							>
								<EnvelopeIcon className='w-3 h-3' />
								<span className='whitespace-nowrap'>Email</span>
							</Link>
						</div>
					</div>
				</div>

				{/* Desktop Layout - Original Design (hidden on mobile) */}
				<div className='hidden md:flex md:flex-row w-full'>
					{/* Desktop Image Section */}
					<div className='flex justify-center items-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-800 min-w-fit'>
						<div className='relative w-44 h-44 lg:w-56 lg:h-56 rounded-full border-4 border-slate-200 dark:border-slate-600 shadow-lg overflow-hidden'>
							<Image
								src={image.src}
								alt={image.alt}
								fill
								className='object-cover object-center hover:scale-105 transition-transform duration-300'
								sizes='(max-width: 1024px) 176px, 224px'

								priority
							/>
						</div>
					</div>

					{/* Desktop Content Section */}
					<div className='p-6 flex-1 min-w-0'>
						<div className='mb-4'>
							<h3 className='text-lg font-bold text-foreground mb-1 break-words'>{name}</h3>
							<p className='text-primary font-medium text-sm'>{role}</p>
						</div>

						<div className='mb-4'>
							<h4 className='text-sm font-semibold text-foreground mb-2'>Key Contributions</h4>
							<ul className='space-y-1.5'>
								{achievements.map((achievement, index) => (
									<li key={index} className='flex items-start gap-2'>
										<span className='w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0'></span>
										<p className='text-sm text-slate-700 dark:text-slate-300 leading-relaxed break-words'>{achievement}</p>
									</li>
								))}
							</ul>
						</div>

						<div className='flex gap-2 flex-wrap'>
							<Link
								href={linkedin}
								target='_blank'
								rel='noopener noreferrer'
								className='inline-flex items-center gap-1.5 px-3 py-1.5 bg-foreground text-background hover:bg-foreground/90 rounded-lg text-sm font-medium transition-colors flex-shrink-0'
							>
								<LinkedInIcon className='w-3.5 h-3.5' />
								<span className='whitespace-nowrap'>LinkedIn</span>
							</Link>

							<Link
								href={`mailto:${email}`}
								className='inline-flex items-center gap-1.5 px-3 py-1.5 border border-slate-300 dark:border-border hover:bg-slate-100 dark:hover:bg-slate-700 text-foreground rounded-lg text-sm font-medium transition-colors flex-shrink-0'
							>
								<EnvelopeIcon className='w-3.5 h-3.5' />
								<span className='whitespace-nowrap'>Email</span>
							</Link>
						</div>
					</div>
				</div>

				{/* Mobile Achievements Section - Shown below on mobile only */}
				<div className='md:hidden px-4 pb-4 sm:px-6 sm:pb-6'>
					<h4 className='text-sm font-semibold text-foreground mb-2'>Key Contributions</h4>
					<ul className='space-y-1.5'>
						{achievements.map((achievement, index) => (
							<li key={index} className='flex items-start gap-2'>
								<span className='w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0'></span>
								<p className='text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed break-words'>{achievement}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default function Developers() {
	return (
		<>
			<Header title='Meet Our Webmasters'>
				<p className='my-3 sm:my-4 max-w-3xl mx-auto text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed px-4 sm:px-6'>
					The talented minds behind this website. Our webmasters combine technical expertise with creative vision to deliver exceptional digital
					experiences.
				</p>
			</Header>

			<main className='px-4 sm:px-6 lg:px-8'>
				<div className='space-y-6 sm:space-y-8 max-w-5xl mx-auto'>
					{developers.map((developer) => (
						<DeveloperCard
							key={developer.id}
							name={developer.name}
							role={developer.role}
							achievements={developer.achievements}
							award={developer.award}
							linkedin={developer.linkedin}
							email={developer.email}
							image={developer.image}
						/>
					))}
				</div>

				{/* Technology Stack Section */}
				<div className='text-center bg-slate-50 dark:bg-slate-800 max-w-4xl py-7 mx-auto rounded-xl p-4 border border-slate-200 dark:border-slate-700'>
					<h3 className='text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-3'>Technology Stack</h3>
					<p className='text-slate-700 dark:text-slate-300 mb-4 sm:mb-6 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed'>
						Built with cutting-edge technologies to deliver exceptional performance, seamless user experience, and reliable scalability for the IEEE
						SCU Student Branch digital presence.
					</p>
					<div className='flex gap-2 sm:gap-3 lg:gap-4 justify-center items-center flex-wrap'>
						{techStack.map((tech) => (
							<div
								key={tech.id}
								className='flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-border text-foreground rounded-lg text-xs sm:text-sm font-medium hover:shadow-md transition-shadow duration-200'
								title={tech.description}
							>
								<Image src={tech.icon} alt={`${tech.name} icon`} width={16} height={16} className='w-3 h-3 sm:w-4 sm:h-4' />
								<span className='whitespace-nowrap'>{tech.name}</span>
							</div>
						))}
					</div>
				</div>
			</main>
		</>
	);
}
