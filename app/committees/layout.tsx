import type {Metadata} from "next";

export const metadata: Metadata = {
	title: "Committees | IEEE SCU SB",
	description:
		"Explore our diverse committees combining technical innovation with organizational excellence. Join AI, Web Development, Robotics, HR, Media, and more committees to make an impact.",
	keywords: [
		"IEEE",
		"SCU",
		"committees",
		"technical",
		"non-technical",
		"AI",
		"robotics",
		"web development",
		"student branch",
		"HR",
		"media",
		"event",
		"entrepreneurship",
		"cloud",
		"flutter",
		"public relations",
		"IEEE SCU SB",
	],
	openGraph: {
		title: "Committees | IEEE SCU Student Branch",
		description: "Discover technical and non-technical committees where you can grow, learn, and make an impact.",
		type: "website",
	},
};

export default function CommitteesLayout({children}: {children: React.ReactNode}) {
	return <>{children}</>;
}
