import Image from "next/image";
import Link from "next/link";
import {committees} from "@/data/committees";
import {board} from "@/data/board";
import BoardCard from "@/components/committees/BoardCard";
import NotFound from "@/app/not-found";
import {ArrowLeftIcon, ArrowRightIcon} from "@heroicons/react/24/solid";
import NextPageLink from "@/components/NextPageLink";
import {Metadata} from "next";

type Props = {
	params: Promise<{id: string}>;
};

export async function generateMetadata({params}: Props): Promise<Metadata> {
	const resolvedParams = await params;
	const committee = committees.find((c) => c.id === resolvedParams.id);
	if (!committee) {
		return {
			title: "Committee Not Found",
			description: "The requested committee could not be found.",
		};
	}
	const committeeBoard = board.find((b) => b.id === committee.id);
	const headName = committeeBoard?.head?.name;
	return {
		title: `${committee.title} Committee | IEEE SCU Student Branch`,
		description: `${committee.description.slice(0, 160)}...`,
		keywords: [committee.title, "IEEE", "SCU", "Student Branch", committee.category, ...(headName ? [headName] : [])],
	};
}

export default async function CommitteeDetails(props: {params: Promise<{id: string}>}) {
	const params = await props.params;
	const committee = committees.find((committee) => committee.id === params.id);

	if (!committee) {
		return <NotFound />;
	}

	const committeeBoard = board.find((boardMembers) => boardMembers.id === committee.id);
	const committeeHead = committeeBoard?.head;
	const committeeVice = committeeBoard?.vice;

	// Structured data for SEO
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "Organization",
		"name": `${committee.title} Committee`,
		"description": committee.description,
		"url": `https://ieeescu.org/committees/${committee.id}`,
		"parentOrganization": {
			"@type": "Organization",
			"name": "IEEE SCU Student Branch",
		},
		...(committeeHead && {
			employee: [
				{
					"@type": "Person",
					"name": committeeHead.name,
					"jobTitle": `${committee.title} Head`,
					"description": committeeHead.bio,
					...(committeeHead.linkedin && {sameAs: [committeeHead.linkedin]}),
				},
				...(Array.isArray(committeeVice)
					? committeeVice.map((vice) => ({
							"@type": "Person",
							"name": vice.name,
							"jobTitle": `${committee.title} Vice Head`,
							"description": vice.bio,
							...(vice.linkedin && {sameAs: [vice.linkedin]}),
					  }))
					: committeeVice
					? [
							{
								"@type": "Person",
								"name": committeeVice.name,
								"jobTitle": `${committee.title} Vice Head`,
								"description": committeeVice.bio,
								...(committeeVice.linkedin && {sameAs: [committeeVice.linkedin]}),
							},
					  ]
					: []),
			],
		}),
	};

	return (
		<>
			<script type='application/ld+json' dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}} />
			<header
				className={`px-4 md:px-6 lg:px-8 xl:px-10 py-8
      bg-gradient-to-b ${committee.category === "non-technical" ? "from-purple/15" : "from-primary/15"} to-transparent`}
			>
				<nav aria-label='Breadcrumb'>
					<Link
						href={"/committees"}
						className='group mb-8 w-fit text-slate-700 dark:text-slate-200 flex items-center gap-1 text-xs font-medium border border-slate-700 dark:border-slate-700 py-1 px-3 rounded-full hover:bg-slate-700 hover:text-white dark:hover:bg-slate-700'
					>
						<ArrowLeftIcon className='size-3 stroke-2 group-hover:-translate-x-1 transition' />
						Back to Committees
					</Link>
				</nav>
				<div className='flex gap-6 sm:gap-8 justify-center items-center'>
					<Image src={committee.image.src} alt={committee.image.alt} className='max-w-[6em] md:max-w-[8em]' priority width={128} height={128} />
					<div>
						<p className={`font-semibold capitalize text-sm ${committee.category == "non-technical" ? "text-purple" : "text-primary"}`}>
							{committee.category}
						</p>
						<h1 className='font-extrabold my-2'>{committee.title}</h1>
						<p className='font-medium text-sm text-slate-600 dark:text-slate-300'>{committee.subtitle}</p>
					</div>
				</div>
				<p className='dark:text-slate-300 text-center max-w-4xl mx-auto mt-12'>{committee.description}</p>
			</header>

			<div aria-hidden='true'>
				<hr
					className={`border-none h-[1px] my-8 max-w-3xl mx-auto bg-gradient-to-r from-transparent to-transparent ${
						committee.category === "non-technical" ? "via-purple" : "via-primary"
					}`}
				/>
			</div>

			<main>
				{/* Committee Goals */}
				<section>
					<h2 className='mb-8 text-center'>Committee Goals</h2>
					<ul className='grid md:grid-cols-2 gap-y-8 gap-x-12'>
						{committee.goals.map((goal, index) => (
							<li key={index} className={`border-l pl-4 ${committee.category == "non-technical" ? "border-purple" : "border-primary"}`}>
								<h3 className='text-base font-semibold mb-2'>{goal.title}</h3>
								<p className='dark:text-slate-300'>{goal.description}</p>
							</li>
						))}
					</ul>
				</section>

				{/* Committee Responsibilities */}
				<section>
					<h2 className='mb-8 text-center'>Roles and Responsibilities</h2>
					<ul className='grid md:grid-cols-2 gap-8'>
						{committee.roles.map((role, index) => (
							<li key={index}>
								<h3 className='text-base font-semibold mb-2'>{role.role}</h3>
								<ul className='dark:text-slate-300'>
									{role.responsibilities.map((responsibility, index) => (
										<li key={index} className='flex items-baseline gap-2'>
											<ArrowRightIcon className={`size-3 ${committee.category == "non-technical" ? "text-purple" : "text-primary"}`} />{" "}
											{responsibility}
										</li>
									))}
								</ul>
							</li>
						))}
					</ul>
				</section>

				{/* Key Activities */}
				<section>
					<h2 className='mb-8 text-center'>Key Activities</h2>
					<ul className='flex justify-center gap-4 flex-wrap'>
						{committee.activities.map((activity, index) => (
							<li key={index} className='p-4 shadow-sm rounded-xl max-w-sm border border-border text-center'>
								<h3 className='text-base font-semibold mb-1'>{activity.title}</h3>
								<p className='dark:text-slate-300'>{activity.description}</p>
							</li>
						))}
					</ul>
				</section>

				{/* Committee Board */}
				{committeeHead && (
					<section>
						<h2 className='mb-8 text-center'>Committee&apos;s {committeeVice ? "Board" : "Head"}</h2>
						<div className={committeeVice ? "grid gap-8" : ""}>
							<BoardCard
								category={committee.category}
								name={committeeHead.name}
								position={`${committee.title} Head`}
								bio={committeeHead.bio}
								linkedin={committeeHead.linkedin}
								mail={committeeHead.mail}
								image={{
									src: committeeHead.image.src,
									alt: committeeHead.image.alt,
								}}
							/>
							{committeeVice && (
								<>
									{Array.isArray(committeeVice) ? (
										// Multiple vices
										committeeVice.map((vice, index) => (
											<BoardCard
												key={index}
												category={committee.category}
												name={vice.name}
												position={`${committee.title} Vice Head`}
												bio={vice.bio}
												linkedin={vice.linkedin}
												mail={vice.mail}
												image={{
													src: vice.image.src,
													alt: vice.image.alt,
												}}
											/>
										))
									) : (
										// Single vice
										<BoardCard
											category={committee.category}
											name={committeeVice.name}
											position={`${committee.title} Vice Head`}
											bio={committeeVice.bio}
											linkedin={committeeVice.linkedin}
											mail={committeeVice.mail}
											image={{
												src: committeeVice.image.src,
												alt: committeeVice.image.alt,
											}}
										/>
									)}
								</>
							)}
						</div>
					</section>
				)}

				<div className='mx-auto'>
					<NextPageLink href='/join'>Interested in Joining Us?</NextPageLink>
				</div>
			</main>
		</>
	);
}

export async function generateStaticParams() {
	return committees.map((committee) => ({id: committee.id}));
}
