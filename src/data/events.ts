import {LatestEvent, UpcomingEvent} from "./types";

export const upcomingEvents: UpcomingEvent[] = [];

export const latestEvents: LatestEvent[] = [
	{
		category: "technical",
		title: "TechXplore",
		date: "Nov, Dec 2025",
		location: "Creativa & ITI",
		description:
			"TechXplore is IEEE’s flagship bootcamp series offering hands-on tracks in AI & Machine Learning, Robotics, and Front-End Web Development, enabling participants to build practical skills and confidently launch their tech journey.",
		image: {src: "https://res.cloudinary.com/ieeescusb/image/upload/v1765382648/web_Explor_nxuisv.webp", alt: "TechXplore event image"},
		socialMediaPostLinks: {
			facebook: "https://www.facebook.com/share/p/1BPsGc3VMn/?mibextid=wwXIfr",
			instagram: "https://www.instagram.com/p/DQ-JENojF2P/?igsh=bXA5ZHg1cDZqb2U1",
			linkedin:
				"https://www.linkedin.com/posts/ieee-suez-canal-university-student-branch_techxplore-ieee-ieeescusb-activity-7394481317310083073-X7wn",
			tiktok: "",
		},
		megaEvent: {id: "techxplore", nestedPath: "/techxplore"},
	},
	{
		category: "non-technical",
		title: "IEEE Club",
		date: "2025 - 2026 Season ",
		location: "Creativa Hub, Ismailia",
		description:
			"The IEEE Club is a weekly recurring internal gathering designed to strengthen collaboration and connection across all committees within our branch. Each week, one or more committees take the lead in organizing an engaging offline session where members can learn about the roles, goals, and ongoing projects of other committees.",
		image: {src: "https://res.cloudinary.com/ieeescusb/image/upload/v1765382647/Untitled-1_kpbvoj.webp", alt: "IEEE Club event image"},
		// socialMediaPostLinks: {
		// 	facebook:
		// 		"",
		// 	instagram: "",
		// 	linkedin:
		// 		"",
		// 	tiktok: "",
		// },
		megaEvent: {id: "ieee-club", nestedPath: "/ieee-club"},
	},
	{
		category: "non-technical",
		title: "Orientation Day 2025",
		date: "Oct 29, 2025",
		location: "Creativa Hub, Ismailia",
		description:
			"IEEE Orientation Day was a vibrant and engaging kickoff that opened a new season with energy and excitement. The event brought together new and returning members in a welcoming atmosphere designed to strengthen connections and introduce everyone to the community spirit of IEEE. Throughout the day, participants enjoyed team activities, interactive games, and plenty of opportunities to network.",
		image: {src: "https://res.cloudinary.com/ieeescusb/image/upload/v1763126724/orientation_2025_jqigfx.webp", alt: "Orientation Day 2025"},
		socialMediaPostLinks: {
			facebook:
				"https://m.facebook.com/story.php?story_fbid=pfbid02XJ66Te4qbpNU9CE3ML72wME2zQQA4X29tZp4c6T2DtSJbqzR4zHYPTwbdD8caEGNl&id=100064157166643&mibextid=wwXIfr",
			instagram: "https://www.instagram.com/reel/DQ4sP2CjMEa/?igsh=ZGw0YXRidXpmdnJ3",
			linkedin:
				"https://www.linkedin.com/posts/ieee-suez-canal-university-student-branch_orientationday-newseason-creativahub-activity-7388653061898055680-HtAd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEB4xzkBAtcmu7T_ZGmJYYVma6WUQHDoPHA",
			tiktok: "https://vt.tiktok.com/ZSybY7Vjk/",
		},
		megaEvent: false,
	},
	{
		category: "non-technical",
		title: "Skill it up",
		date: "Apr 29, 2024",
		location: "Creativa & ITI",
		description:
			"Skill It Up was a practical, hands-on event at Creativa Hub and ITI that empowered students and early-career professionals with essential workplace and creative skills. Sessions covered Marketing & Video Editing, Voice & Body Language for confident communication, Professional Writing for effective emails and reports, and Business Negotiation techniques.",
		image: {src: "https://res.cloudinary.com/ieeescusb/image/upload/v1763126697/skill_it_up_v1hiwz.webp", alt: "Skill it up"},
		socialMediaPostLinks: {
			facebook: "https://www.facebook.com/share/p/1CbVEwAUoF/?mibextid=wwXIfr",
			instagram: "https://www.instagram.com/p/DJCgvHEMCUY/?igsh=MWNzenVqdHo1OG51Mw==",
			linkedin:
				"https://www.linkedin.com/posts/ieee-suez-canal-university-student-branch_skills-ieeeabrscuabrsb-ieee-activity-7323038764308545536-SkKL?utm_medium=ios_app&rcm=ACoAAE13QrAB2ySkg-lbv8oyADDua8ExsmWbo_s&utm_source=social_share_send&utm_campaign=copy_link",
		},
		megaEvent: false,
	},
	{
		category: "technical",
		title: "Tech Nights",
		date: "Mar 1, 2024",
		location: "online",
		description:
			"Tech Nights is an online learning series that brings together learners and tech enthusiasts to explore modern technologies through focused sessions. Topics included Artificial Intelligence, Cybersecurity, Front- and Back-end Web Development, and Electronics. The series provided practical insights, demos, and guidance to help attendees stay current in today's fast-paced tech landscape.",
		image: {src: "https://res.cloudinary.com/ieeescusb/image/upload/v1763126697/tech_nights_ofpqrp.webp", alt: "Tech Nights"},
		socialMediaPostLinks: {
			facebook: "https://www.facebook.com/share/p/1YwUQkmgsK/?mibextid=wwXIfr",
			instagram: "https://www.instagram.com/p/DGq1HV-sPHc/?igsh=MXF3aTB0eTF1MWF3eQ==",
			linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7301691438315036672",
		},
		megaEvent: false,
	},
	{
		category: "technical",
		title: "Robotiva - Robotics Competition",
		date: "Feb 28, 2025",
		location: "Creativa Hub, Ismailia",
		description:
			"Robotiva, organized by IEEE in collaboration with Creativa Hub, Ismailia, brought together aspiring engineers and tech enthusiasts to design, build, and compete with their own robots.The event offered a high-energy, challenge-driven environment where participants showcased creativity, teamwork, and problem-solving skills in real-world robotics scenarios.",
		image: {src: "https://res.cloudinary.com/ieeescusb/image/upload/v1763109238/robotiva_asq0xv.webp", alt: "Robotiva Competition"},
		socialMediaPostLinks: {
			facebook: "https://www.facebook.com/share/r/1AXQdMwQo3",
			instagram: "https://www.instagram.com/reel/DGncONGMjJ-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
		},
		megaEvent: false,
	},
	{
		category: "technical",
		title: "Behind the screens: Anti-The Hack Session",
		date: "Feb 26, 2025",
		location: "Faculty of Engineering, SCU",
		description:
			"Our Cybersecurity Session, led by Eng. Mohamed Fareed — Head of Cybersecurity, offered participants a solid and accessible introduction to digital security. The session covered essential topics such as malware, social engineering, and major cybersecurity threats, while also providing practical guidance on staying protected in today's connected world.",
		image: {src: "https://res.cloudinary.com/ieeescusb/image/upload/v1763109235/anti_the_hack_loi2pu.webp", alt: "Anti The Hack Session"},
		socialMediaPostLinks: {
			facebook: "https://www.facebook.com/share/r/1DNcEHFW6R",
			instagram: "https://www.instagram.com/reel/DGi3u-1M8yK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
		},
		megaEvent: false,
	},
	{
		category: "technical",
		title: "Coding Hive Hackathon",
		date: "Feb 24, 2025",
		location: "ITI, Ismailia",
		description:
			"The Coding Hive Hackathon, organized by IEEE in collaboration with MarketAix Agency, introduced participants to the world of programming from scratch—literally! Using Scratch, participants worked in teams to design and build creative projects, learning core programming concepts step by step. With interactive challenges and a special prize, the event made learning to code both exciting and accessible.",
		image: {src: "https://res.cloudinary.com/ieeescusb/image/upload/v1763109236/coding_hive_nhh1hu.webp", alt: "Coding Hive Hackathon"},
		socialMediaPostLinks: {
			facebook: "https://www.facebook.com/share/p/1KVtyA8E8N",
			instagram: "https://www.instagram.com/p/DGdgboyMs8B/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
			linkedin:
				"https://www.linkedin.com/posts/ieee-suez-canal-university-student-branch_ieee-ieeeegypt-ieeeabrscu-activity-7299816426360467456-53zf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD14GpMBogyIDtW3oqGLTmdFUzCtFD7ZU54",
		},
		megaEvent: false,
	},
	{
		category: "technical",
		title: "Prompt Engineering Workshop",
		date: "Dec 5, 2024",
		location: "ITI, Ismailia",
		description:
			"From designing stunning videos and generating original songs to building responsive websites and crafting logos, this session showcased the power of AI as a creative tool. Participants explored a wide range of AI-driven applications and left inspired by how these tools can enhance creativity across nearly every field.",
		image: {src: "https://res.cloudinary.com/ieeescusb/image/upload/v1763109238/prompt_eng_pqik0f.webp", alt: "Prompt Engineering Workshop"},
		socialMediaPostLinks: {
			facebook: "https://www.facebook.com/100064157166643/posts/954951156653448/?mibextid=rS40aB7S9Ucbxw6v",
			instagram: "https://www.instagram.com/p/DDNIKXjMRjv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
			linkedin:
				"https://www.linkedin.com/posts/ieee-suez-canal-university-student-branch_ieee-ieeeegypt-ieeeabrscu-activity-7270534687524110336-8jlu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD14GpMBogyIDtW3oqGLTmdFUzCtFD7ZU54",
		},
		megaEvent: false,
	},
	{
		category: "non-technical",
		title: "Huawei Global ICT Competition for 2024-2025 Launch",
		date: "Nov 18, 2024",
		location: "Faculty of Engineering, SCU",
		description:
			"The Huawei Global ICT Competition 2024-2025 launch was successfully held at the Faculty of Engineering, Suez Canal University. The event featured insightful discussions and gave students the opportunity to explore advanced technologies in AI, Cloud Computing, Communications, and Networks, fostering innovation and technical expertise.",
		image: {
			src: "https://res.cloudinary.com/ieeescusb/image/upload/v1763109237/huawei_ict_tpioa1.webp",
			alt: "Huawei Global ICT Competition for 2024-2025 Launch",
		},
		socialMediaPostLinks: {
			facebook: "https://www.facebook.com/share/p/1A3b4oqgrP/",
			instagram: "https://www.instagram.com/p/DCpWbGixkjK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
			linkedin:
				"https://www.linkedin.com/posts/ieee-suez-canal-university-student-branch_huaweiacademy-ictcompetition-facultyofengineering-activity-7265453940954058752-Lrx7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD14GpMBogyIDtW3oqGLTmdFUzCtFD7ZU54",
		},
		megaEvent: false,
	},
	{
		category: "non-technical",
		title: "UI/UX Essentials Workshop",
		date: "Sep 9, 2024",
		location: "Creativa Hub, Ismailia",
		description:
			"Creativity met functionality in this hands-on UI/UX design session. Participants explored the basics of user experience design, discovered the importance of UX research, and brought ideas to life using Figma. By the end, many had created their first UI screens—walking away with both inspiration and practical skills.",
		image: {src: "https://res.cloudinary.com/ieeescusb/image/upload/v1763109240/uiux_essentials_mnremt.webp", alt: "UI/UX Essentials Workshop"},
		socialMediaPostLinks: {
			facebook: "https://www.facebook.com/share/p/18WKwyG9jn/",
			instagram: "https://www.instagram.com/p/C_8oYSbssH4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
			linkedin:
				"https://www.linkedin.com/posts/ieee-suez-canal-university-student-branch_ieeeabrscuabrsb-ui-uiabrux-activity-7241146491409428480-5OBj?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD14GpMBogyIDtW3oqGLTmdFUzCtFD7ZU54",
		},
		megaEvent: false,
	},
	{
		category: "non-technical",
		title: "HR Guided Workshop",
		date: "Sep 8, 2024",
		location: "Creativa Hub, Ismailia",
		description:
			"Landing your dream job takes more than just a good degree. In this session, participants honed essential career-launching skills—from writing standout CVs and cover letters to acing interviews and optimizing LinkedIn profiles. Soft skills and strategic thinking were front and center, giving attendees a solid foundation for career growth.",
		image: {src: "https://res.cloudinary.com/ieeescusb/image/upload/v1763109236/hr_guided_ph3loo.webp", alt: "HR Guided Workshop"},
		socialMediaPostLinks: {
			facebook: "https://www.facebook.com/share/p/188UCBAs4e/",
			instagram: "https://www.instagram.com/p/C_0y9iPsEiM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
			linkedin:
				"https://www.linkedin.com/posts/ieee-suez-canal-university-student-branch_ieeeabrscuabrsb-hr-hrabrguided-activity-7240043909492408320-1xhf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD14GpMBogyIDtW3oqGLTmdFUzCtFD7ZU54",
		},
		megaEvent: false,
	},
	{
		category: "non-technical",
		title: "Make Your Reel Workshop",
		date: "Aug 31, 2024",
		location: "Creativa Hub, Ismailia",
		description:
			"Creating engaging content takes more than just hitting “record.” This session took participants through the essentials of video editing, focusing on how to turn raw footage into polished Reels and Shorts. From trimming clips to adding professional flair, attendees learned how to make videos that truly stand out.",
		image: {src: "https://res.cloudinary.com/ieeescusb/image/upload/v1763109236/make_your_reel_w7bwin.webp", alt: "Make Your Reel Workshop"},
		socialMediaPostLinks: {
			facebook: "https://www.facebook.com/share/p/1B8paCCeRP/",
			linkedin:
				"https://www.linkedin.com/posts/ieee-suez-canal-university-student-branch_ieeeabrscuabrsb-media-videoediting-activity-7237527159597105152-LpW0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD14GpMBogyIDtW3oqGLTmdFUzCtFD7ZU54",
			instagram: "https://www.instagram.com/p/C_i6zaEsVfU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
		},
		megaEvent: false,
	},
];
