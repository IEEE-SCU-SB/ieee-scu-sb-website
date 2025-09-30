import {StaticImageData} from "next/image";

export interface Developer {
	id: string;
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
		src: StaticImageData;
		alt: string;
	};
}

export interface TechStack {
	id: string;
	name: string;
	icon: string;
	description: string;
}

// Import developer images
import webmaster1 from "@/assets/developers/webmaster1.webp";
import webmaster2 from "@/assets/developers/webmaster2.webp";

// Import technology stack icons
import nextIcon from "@/assets/stack/next.svg";
import reactIcon from "@/assets/stack/react.svg";
import typescriptIcon from "@/assets/stack/typescript.svg";
import tailwindIcon from "@/assets/stack/tailwind.svg";
import vercelIcon from "@/assets/stack/vercel.svg";

export const techStack: TechStack[] = [
	{
		id: "nextjs",
		name: "Next.js",
		icon: nextIcon,
		description: "React framework with App Router and optimization",
	},
	{
		id: "react",
		name: "React",
		icon: reactIcon,
		description: "JavaScript library for building user interfaces",
	},
	{
		id: "typescript",
		name: "TypeScript",
		icon: typescriptIcon,
		description: "Type-safe development environment",
	},
	{
		id: "tailwind",
		name: "Tailwind CSS",
		icon: tailwindIcon,
		description: "Utility-first CSS framework",
	},
	{
		id: "vercel",
		name: "Vercel",
		icon: vercelIcon,
		description: "Deployment and hosting platform",
	},
];

export const developers: Developer[] = [
	{
		id: "webmaster-2",
		name: "Mohamed Alsaeed",
		role: "Sep 2025 - Present",
		achievements: [
			"Expanding the website to support registrations and interactive engagement with members and visitors",
			"Showcasing partnerships and collaborations in a structured and professional way",
			"Documenting the branch's seasonal journey with boards, events, and achievements highlighted",
			"Supporting operations with internal tools that simplify HR and team management",
			"Expanding the website into a full operations ecosystem serving both public visitors and internal members",
		],
		linkedin: "https://www.linkedin.com/in/saeedinum",
		email: "saeedinum@gmail.com",
		image: {
			src: webmaster2,
			alt: "Mohamed Alsaeed",
		},
	},
	{
		id: "webmaster-1",
		name: "Mostafa Hashem",
		role: "Sep 2024 - Aug 2025",
		achievements: [
			"Established the first structured version of the IEEE SCU website.",
			"Developed solid core content (Home, About, Committees, Events, Contact).",
			"Focused on clear presentation and navigability, making it easy for students and members to find essential information",
			"Added originality by introducing IEEE SCU's identity and branding to the digital space",
			"The website, under his leadership, won the 2025 Egypt Section – Outstanding Student Branch Website of the Year Award (July 2025) for its excellence in usability, accessibility, content, presentation, navigability, originality, and portability",
		],
		award: {
			title: "Outstanding Student Branch Website",
			year: "July-2025",
			organization: "IEEE Egypt Section",
		},
		linkedin: "https://www.linkedin.com/in/mostafaaa-hashem",
		email: "mostafahashem.fe@gmail.com",
		image: {
			src: webmaster1,
			alt: "Mostafa Hashem",
		},
	},
];
