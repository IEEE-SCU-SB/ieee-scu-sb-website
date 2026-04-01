import {Committee} from "./types";

// Illustrations
import cyberImage from "@/assets/illustrations/cyber.svg";
import aiImage from "@/assets/illustrations/ai.svg";
import webDevImage from "@/assets/illustrations/web.svg";
import roboticsImage from "@/assets/illustrations/robotics.svg";
import flutterImage from "@/assets/illustrations/flutter.svg";
import devopsImage from "@/assets/illustrations/cloud.svg";

import mediaImage from "@/assets/illustrations/media.svg";
import hrImage from "@/assets/illustrations/hr.svg";
import prImage from "@/assets/illustrations/pr.svg";
import eventImage from "@/assets/illustrations/event.svg";
import entrepreneurshipImage from "@/assets/illustrations/entrepreneurship.svg";

export const committees: Committee[] = [
	/* ------------------- Web Development ------------------- */
	{
		id: "web-development",
		category: "technical",
		title: "Web Development",
		subtitle: "From concept to code, bringing ideas online.",
		description:
			"Web development is the process of planning, creating, and maintaining websites and applications, focusing on content, structure, and functionality. It involves both frontend (user interface and interaction) and backend (server and database) development.",
		image: {src: webDevImage, alt: "Web Development Illustration"},
		goals: [
			{
				title: "Building Technical Excellence",
				description:
					"Provide structured learning in both Frontend and Backend through level-based tasks, projects, and advanced sessions, ensuring members gain practical, industry-relevant skills.",
			},
			{
				title: "Strengthening Soft Skills",
				description:
					"Focus on communication, teamwork, leadership, and problem-solving to help members grow beyond coding and prepare them for professional success.",
			},
			{
				title: "Effective External Outreach & Hands-On Practice",
				description:
					"Organize offline bootcamps, Git/GitHub workshops, and competitions that allow members to apply what they learn and work as a team.",
			},
			{
				title: "Encouraging Active Participation",
				description:
					"Engage members through short offline presentations and team activities that boost confidence, presentation skills, and teamwork while keeping the committee dynamic and motivated.",
			},
		],
		roles: [
			{
				role: "All Members",
				responsibilities: [
					"Complete assigned level-based tasks and projects on time.",
					"Actively participate in internal sessions, workshops, and team activities.",
					"Collaborate with teammates in competitions and projects.",
				],
			},
			{
				role: "Bootcamp Speakers",
				responsibilities: [
					"Deliver sessions in external bootcamps, workshops, and public events.",
					"Present technical concepts in a clear and engaging way.",
					"While the speaker leads, the rest of the team supports participants by guiding them through writing and practicing the code.",
				],
			},
			{
				role: "Team Leaders",
				responsibilities: [
					"Lead small groups during competitions, projects, or workshops.",
					"Distribute tasks according to skill levels to ensure fairness and balanced learning.",
					"Motivate members, encourage collaboration, and ensure deadlines are met.",
				],
			},
		],
		activities: [
			{
				title: "Structured Learning Path",
				description: "Level-based tasks and projects in Frontend and Backend to build practical technical skills.",
			},
			{
				title: "Internal Development Sessions",
				description: "Workshops including Git/GitHub and advanced topics by senior developers to bridge learning with real-world work.",
			},
			{
				title: "External Bootcamps & Public Events",
				description: "Speaker-led bootcamps where the team helps participants practice coding and apply concepts.",
			},
			{
				title: "Competitions",
				description: "Hands-on challenges that promote collaboration, problem-solving, and practical application of skills.",
			},
			{
				title: "Soft Skills Development",
				description: "Presentations and activities to enhance communication, teamwork, leadership, and professional growth.",
			},
		],
	},

	/* ------------------- AI ------------------- */
	{
		id: "ai",
		category: "technical",
		title: "Artificial Intelligence",
		subtitle: "Guiding machines to learn so they don't guide us (yet).",
		description:
			"Artificial Intelligence (AI) is the simulation of human intelligence in machines, allowing them to perform tasks like learning, reasoning, and problem-solving. AI can be narrow, designed for specific tasks, or general, aiming to handle any intellectual task a human can do. Machine learning and deep learning are key technologies that enable AI systems to improve through experience.",
		image: {src: aiImage, alt: "Artificial Intelligence Illustration"},
		goals: [
			{
				title: "Explore AI Concepts",
				description: "Introduce members to the foundations of Artificial Intelligence and its role in shaping the future of technology.",
			},
			{
				title: "Encourage Collaboration",
				description: "Create a space where students share ideas, work on projects together, and learn from one another.",
			},
			{
				title: "Promote Creativity",
				description: "Inspire innovative thinking by applying AI in fun, practical, and impactful ways.",
			},
			{
				title: "Advance AI Knowledge",
				description: "Provide resources and sessions that help members deepen their understanding of AI tools and techniques.",
			},
			{
				title: "Connect Theory to Practice",
				description: "Turn classroom knowledge into real-world applications through workshops and hands-on projects.",
			},
			{
				title: "Empower Growth",
				description: "Support members in building confidence, teamwork, and leadership skills through AI projects.",
			},
		],
		roles: [
			{
				role: "All Members",
				responsibilities: [
					"Attend all meetings, workshops, and activities regularly to stay engaged and contribute effectively.",
					"Provide learning resources, mentorship, and discussions that help members grow technically and professionally.",
					"Encourage collaboration and create an environment where ideas are shared, and innovation thrives.",
				],
			},
		],
		activities: [
			{
				title: "Educational Sessions",
				description:
					"Conducting interactive sessions on AI concepts, tools, and real-world applications to help members strengthen their technical skills.",
			},
			{
				title: "Competitive Challenges",
				description:
					"Organizing and participating in AI competitions, challenging members to apply their knowledge, solve complex problems, and develop innovative solutions.",
			},
			{
				title: "Workshops & Training",
				description: "Organizing practical workshops to strengthen members' technical and problem-solving skills.",
			},
		],
	},

	/* ------------------- Robotics ------------------- */
	{
		id: "robotics",
		category: "technical",
		title: "Robotics",
		subtitle: "Building intelligent machines that move, sense, and interact.",
		description:
			"Robotics is the field that combines mechanical design, electronics, and embedded systems to create machines capable of performing tasks autonomously or with human guidance. The Robotics Committee focuses on developing skills in mechanical design, control systems, and embedded programming, enabling members to design, build, and optimize robots for real-world applications and competitions.",
		image: {src: roboticsImage, alt: "Robotics Illustration"},
		goals: [
			{
				title: "Advance Robotics Skills",
				description:
					"Provide members with hands-on experience in mechanical design, electronics, and embedded systems to build a strong foundation in robotics.",
			},
			{
				title: "Innovate Through Competitions",
				description:
					"Encourage creativity and teamwork by preparing members to design and build robots that solve real-world challenges in local and international competitions.",
			},
			{
				title: "Bridge Academia and Industry",
				description:
					"Equip members with practical robotics knowledge and problem-solving abilities that align with modern industry demands and future career opportunities.",
			},
		],
		roles: [
			{
				role: "All Members",
				responsibilities: [
					"Complete assigned tasks in design, programming, or testing efficiently and on time.",
					"Collaborate with others during workshops, bootcamps, and competition preparations.",
					"Actively contribute to the committee's projects and knowledge-sharing sessions.",
				],
			},
			{
				role: "Mechanical Team",
				responsibilities: ["Design and assemble robot structures, ensuring stability, functionality, and innovation in mechanical solutions."],
			},
			{
				role: "Embedded Team",
				responsibilities: ["Develop and program microcontrollers (e.g., Arduino, ESP32), integrate sensors, and implement control algorithms."],
			},
			{
				role: "Electronics Team",
				responsibilities: ["Handle wiring, power management, and circuit design to ensure reliable performance of robots."],
			},
			{
				role: "Competitors",
				responsibilities: [
					"Represent the committee in local and international competitions, applying technical and teamwork skills to achieve success.",
				],
			},
		],
		activities: [
			{
				title: "Technical Workshops",
				description: "Deliver hands-on training in mechanical design, embedded systems, and electronics to strengthen members' robotics knowledge.",
			},
			{
				title: "Robotics Bootcamps",
				description: "Organize intensive bootcamps where members learn to design, build, and program robots from scratch.",
			},
			{
				title: "Project Development",
				description: "Encourage members to work on real-world robotics projects, fostering teamwork, creativity, and problem-solving.",
			},
			{
				title: "Competitions",
				description:
					"Participate in robotics challenges, such as line-following, obstacle-avoidance, or open innovation contests, to apply and showcase skills.",
			},
			{
				title: "Knowledge Sharing",
				description:
					"Host internal sessions where experienced members share expertise, ensuring continuous learning and growth within the committee.",
			},
		],
	},

	/* ------------------- Flutter Development ------------------- */
	{
		id: "flutter",
		category: "technical",
		title: "Flutter",
		subtitle: "One codebase, endless possibilities.",
		description:
			"Flutter Development is Google's open-source UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase. It uses the Dart programming language and provides a rich set of pre-designed widgets, enabling developers to create beautiful, fast, and expressive user interfaces across multiple platforms.",
		image: {src: flutterImage, alt: "Flutter Development Illustration"},
		goals: [
			{
				title: "Cross-Platform Mobile Expertise",
				description: "Master Flutter framework to build high-performance mobile applications that run seamlessly on both iOS and Android platforms.",
			},
			{
				title: "Modern UI/UX Implementation",
				description:
					"Develop skills in creating responsive, intuitive, and visually appealing user interfaces using Flutter's rich widget ecosystem and Material Design principles.",
			},
			{
				title: "Industry-Ready App Development",
				description:
					"Build real-world mobile applications with proper architecture, state management, and integration with backend services and APIs.",
			},
			{
				title: "Community Building & Knowledge Sharing",
				description:
					"Foster a collaborative environment where members share Flutter best practices, contribute to open-source projects, and mentor newcomers to mobile development.",
			},
		],
		roles: [
			{
				role: "Beginners",
				responsibilities: [
					"Learn Dart programming fundamentals and Flutter widget basics through guided tutorials and workshops.",
					"Complete hands-on projects to practice UI development and app navigation concepts.",
					"Collaborate with experienced members on simple app features and components.",
				],
			},
			{
				role: "Intermediate Developers",
				responsibilities: [
					"Build complete mobile applications with proper state management and architecture patterns.",
					"Mentor beginners in Flutter development concepts and troubleshooting.",
					"Contribute to committee projects and participate in mobile app competitions.",
				],
			},
			{
				role: "Advanced Developers",
				responsibilities: [
					"Lead complex app development projects and implement advanced Flutter features like custom animations and platform channels.",
					"Conduct technical workshops on advanced topics such as performance optimization and testing.",
					"Represent the committee in external events and collaborate with industry professionals.",
				],
			},
			{
				role: "Project Leaders",
				responsibilities: [
					"Coordinate team efforts for large-scale mobile app projects and hackathons.",
					"Ensure code quality, project timelines, and effective collaboration among team members.",
					"Bridge communication between technical teams and other committees for cross-functional projects.",
				],
			},
		],
		activities: [
			{
				title: "Flutter Workshops & Training",
				description: "Conduct hands-on workshops covering Dart programming, Flutter widgets, state management, and mobile app architecture.",
			},
			{
				title: "Mobile App Development Projects",
				description:
					"Build real-world mobile applications for various use cases, from productivity tools to gaming apps, applying industry best practices.",
			},
			{
				title: "Hackathons & Competitions",
				description:
					"Participate in mobile development competitions and organize internal hackathons to challenge creativity and problem-solving skills.",
			},
			{
				title: "UI/UX Design Implementation",
				description: "Transform design mockups into functional Flutter interfaces, focusing on user experience and responsive design principles.",
			},
			{
				title: "Community Bootcamps & Outreach",
				description:
					"Host public Flutter bootcamps and workshops to introduce mobile development to students and professionals in the broader community.",
			},
		],
	},

	/* ------------------- DevOps & Cloud ------------------- */
	{
		id: "devops-cloud",
		category: "technical",
		title: "DevOps & Cloud",
		subtitle: "Code to cloud, seamlessly automated.",
		description:
			"The DevOps & Cloud Committee focuses on integrating software development with IT operations to deliver faster, more reliable, and secure solutions. By leveraging cloud platforms and DevOps practices, the committee aims to streamline workflows, automate processes, and foster collaboration between teams. Our work covers infrastructure as code (IaC), CI/CD pipelines, containerization, monitoring, and cloud-native solutions that drive efficiency and innovation across projects.",
		image: {src: devopsImage, alt: "DevOps & Cloud Illustration"},
		goals: [
			{
				title: "Automation & Efficiency",
				description:
					"Implement modern DevOps practices like CI/CD, infrastructure as code, and containerization to reduce manual work, accelerate delivery, and improve system reliability.",
			},
			{
				title: "Cloud Adoption & Scalability",
				description:
					"Leverage cloud platforms to provide flexible, scalable, and secure environments for applications, ensuring resilience and cost-effectiveness.",
			},
			{
				title: "Collaboration & Learning",
				description:
					"Promote a culture of teamwork and continuous learning by organizing workshops, training, and projects that help members master DevOps and cloud technologies.",
			},
		],
		roles: [
			{
				role: "All Members",
				responsibilities: [
					"Complete assigned tasks efficiently and on time.",
					"Collaborate with other teams (like AI development) to ensure smooth integration and deployment.",
					"Contribute to the committee's goals through active participation and learning.",
				],
			},
			{
				role: "DevOps and Cloud Head",
				responsibilities: [
					"Lead the design, implementation, and maintenance of the club's cloud infrastructure and CI/CD pipelines.",
					"Establish best practices for security, monitoring, and cost-management in the cloud.",
					"Mentor team members on DevOps principles and cloud technologies.",
					"Oversee the automation of development, testing, and deployment processes.",
				],
			},
			{
				role: "Infrastructure Engineers",
				responsibilities: [
					"Implement and manage Infrastructure as Code (IaC) using tools like Terraform or CloudFormation.",
					"Provision and configure cloud resources (compute, storage, networking) for various projects.",
					"Ensure the high availability and scalability of systems.",
				],
			},
			{
				role: "Automation & CI/CD Specialists",
				responsibilities: [
					"Develop and maintain robust CI/CD pipelines to automate testing and deployment.",
					"Manage source control, build, and release processes.",
					"Work on containerization (Docker) and orchestration (Kubernetes) strategies.",
				],
			},
			{
				role: "Cloud Security & Reliability Engineers",
				responsibilities: [
					"Implement security controls and compliance checks across the cloud environment.",
					"Set up monitoring, logging, and alerting systems to ensure system reliability and performance.",
					"Conduct post-incident reviews and help build resilient systems.",
				],
			},
		],
		activities: [
			{
				title: "Infrastructure Automation",
				description:
					"Designing and implementing infrastructure using code to automatically provision and manage cloud resources, ensuring consistent and repeatable environments.",
			},
			{
				title: "CI/CD Pipeline Development",
				description:
					"Building and maintaining continuous integration and deployment pipelines to automate testing, security checks, and the delivery of applications.",
			},
			{
				title: "Cloud Management & Optimization",
				description:
					"Managing cloud platforms and services, implementing cost-control measures, and ensuring systems are secure, scalable, and performant.",
			},
			{
				title: "Containerization & Orchestration",
				description:
					"Containerizing applications and deploying them at scale using orchestration platforms like Kubernetes to ensure reliability and efficient resource use.",
			},
			{
				title: "System Monitoring & Reliability",
				description:
					"Implementing comprehensive monitoring, logging, and alerting systems to maintain platform health, quickly diagnose issues, and ensure high availability.",
			},
		],
	},

	/* ------------------- Cyber Security ------------------- */
	{
		id: "cyber-security",
		category: "technical",
		title: "Cyber Security",
		subtitle: "Your data's bodyguard, 24/7.",
		description:
			"The Cybersecurity Committee is a community for anyone passionate about exploring the world of security. We dive into both Red Team (offensive) and Blue Team (defensive) skills, giving members the chance to understand attacks and defenses from every angle. Through CTFs, bootcamps, and hands-on workshops, we create an environment where learning is practical, engaging, and fun. Our journey covers the basics of every security track — from networking and Linux, to web security, penetration testing, digital forensics, and defensive operations. Whether you're starting with zero experience or already have a background, our goal is to take you from zero to hero in cybersecurity.",
		image: {src: cyberImage, alt: "Cyber Security Illustration"},
		goals: [
			{
				title: "Hands-On Red Team and Blue Team Skills",
				description: "Provide hands-on learning in both Red Team (offense) and Blue Team (defense) skills.",
			},
			{
				title: "Practical Experience Through Events",
				description: "Organize CTFs, bootcamps, and workshops to give members practical experience.",
			},
			{
				title: "Comprehensive Security Education",
				description: "Teach the basics of all major security tracks (networking, Linux, web security, penetration testing, forensics, defense).",
			},
			{
				title: "Zero to Hero Development",
				description: "Support members in growing their skills from beginner (zero) to advanced (hero) level.",
			},
			{
				title: "Collaborative Security Community",
				description: "Build an engaging and collaborative community for anyone passionate about cybersecurity.",
			},
		],
		roles: [
			{
				role: "All Members",
				responsibilities: [
					"Complete assigned tasks efficiently and on time.",
					"Collaborate with peers during bootcamp preparations, CTFs, and group activities.",
					"Contribute to the committee's goals through active learning and participation.",
				],
			},
			{
				role: "Bootcamp Speakers",
				responsibilities: [
					"Skilled cybersecurity practitioners who deliver sessions in bootcamps, guiding members through red team, blue team, and foundational topics.",
				],
			},
			{
				role: "Internal Speakers",
				responsibilities: [
					"Explain cybersecurity concepts, tools, and methodologies to help members strengthen their technical knowledge and practical skills.",
				],
			},
			{
				role: "Competitors",
				responsibilities: [
					"Represent the committee in CTFs and competitions at national and international levels, applying offensive and defensive skills in real challenges.",
				],
			},
		],
		activities: [
			{
				title: "Educational Sessions",
				description:
					"Conducting interactive sessions on cybersecurity fundamentals, tools, and real-world scenarios to help members strengthen their technical and practical skills.",
			},
			{
				title: "Competitive Challenges",
				description:
					"Organizing and participating in CTFs and security competitions, challenging members to apply their knowledge, solve problems, and sharpen both offensive and defensive skills.",
			},
			{
				title: "Cybersecurity Bootcamps",
				description:
					"Hosting hands-on bootcamps where committee members and invited experts act as instructors, sharing knowledge in red team, blue team, and general security tracks to educate and inspire others.",
			},
		],
	},

	/* ------------------- Electronics ------------------- */
	// {
	//   id: "electronics",
	//   category: "technical",
	//   title: "Electronics",
	//   subtitle: "Wiring ideas into reality.",
	//   description:
	//     "Electronics is the branch of physics and engineering that deals with the design and application of circuits and devices using electricity and electromagnetism. It covers everything from semiconductors to communication systems and power generation.",
	//   image: { src: electronicsImage, alt: "Electronics Illustration" },
	//   goals: [
	//     {
	//       title: "Enhance Technical Proficiency",
	//       description:
	//         "Develop expertise in circuit design, embedded systems, and hardware development.",
	//     },
	//     {
	//       title: "Real-World Project Exposure",
	//       description:
	//         "Engage in hands-on projects to apply theoretical knowledge in practical applications.",
	//     },
	//     {
	//       title: "Innovation & Problem-Solving",
	//       description:
	//         "Encourage creativity in designing and optimizing electronic systems.",
	//     },
	//     {
	//       title: "Leadership & Teamwork",
	//       description:
	//         "Cultivate leadership skills and effective collaboration within technical teams.",
	//     },
	//   ],
	//   roles: [
	//     {
	//       role: "All Members",
	//       responsibilities: [
	//         "Complete assigned tasks and contribute to projects.",
	//         "Engage in learning sessions and practical applications.",
	//       ],
	//     },
	//     {
	//       role: "Instructors",
	//       responsibilities: [
	//         "Deliver technical sessions on electronics topics such as microcontrollers, PCB design, and IoT.",
	//         "Provide guidance to members on project development and troubleshooting.",
	//       ],
	//     },
	//     {
	//       role: "Project Leaders",
	//       responsibilities: [
	//         "Oversee project teams, distribute tasks, and ensure timely completion.",
	//         "Support and guide members to maximize team performance.",
	//       ],
	//     },
	//     {
	//       role: "Speakers",
	//       responsibilities: [
	//         "Represent the committee in external workshops, bootcamps, and technical events.",
	//         "Share insights on emerging trends in electronics and embedded systems.",
	//       ],
	//     },
	//   ],
	//   activities: [
	//     {
	//       title: "Technical Training Sessions",
	//       description:
	//         "Conduct hands-on workshops on circuit design, embedded programming, and PCB development.",
	//     },
	//     {
	//       title: "Electronics & Embedded Systems Projects",
	//       description:
	//         "Work on real-world applications like IoT systems, automation, and robotics integration.",
	//     },
	//     {
	//       title: "Competitions & Hackathons",
	//       description:
	//         "Participate in national and international electronics competitions to test and refine skills.",
	//     },
	//     {
	//       title: "Hardware Prototyping & Testing",
	//       description:
	//         "Develop, test, and iterate on hardware designs to improve performance and reliability.",
	//     },
	//     {
	//       title: "External Bootcamps & Knowledge Sharing",
	//       description:
	//         "Organize public workshops to teach electronics and embedded systems to a broader audience.",
	//     },
	//   ],
	// },

	/* ------------------- HR ------------------- */
	{
		id: "hr",
		category: "non-technical",
		title: "Human Resources",
		subtitle: "People-first, always.",
		description:
			"The HR Committee ensures smooth internal operations by managing recruitment, member support, evaluations, and training. We serve as the backbone of the organization, maintaining professionalism and fostering a positive environment where members can grow. We go beyond internal tasks, connecting internal and external needs to ensure seamless operations and complete alignment.",
		image: {src: hrImage, alt: "HR Illustration"},
		goals: [
			{
				title: "Recruit & Retain Talent",
				description: "Bring in the right members and support them throughout their journey.",
			},
			{
				title: "Strengthen Team Culture",
				description: "Build collaboration, trust, and professionalism across all committees.",
			},
			{
				title: "Develop Skills",
				description: "Equip members with practical HR, organizational, and communication skills.",
			},
			{
				title: "Ensure Accountability",
				description: "Monitor performance through evaluations, attendance, and feedback.",
			},
		],
		roles: [
			{
				role: "All Members",
				responsibilities: [
					"Support recruitment, interviews, and onboarding.",
					"Track attendance and activities of assigned members.",
					"Submit session reports and contribute to monthly evaluations.",
					"Provide fair and constructive feedback in evaluations.",
				],
			},
			{
				role: "Internal Trainers (Senior HRs)",
				responsibilities: [
					"Lead workshops on recruitment, communication, and form-writing.",
					"Mentor new HR members, helping them build confidence and skills.",
					"Share experience and best practices to strengthen the team.",
				],
			},
			{
				role: "Speakers",
				responsibilities: ["Represent HR in external sessions and workshops.", "Deliver presentations and share knowledge with wider audiences."],
			},
		],
		activities: [
			{
				title: "Recruitment Cycle",
				description: "Plan, source, interview, and onboard new members.",
			},
			{
				title: "Training Sessions",
				description: "Internal HR workshops on policies, forms, and communication.",
			},
			{
				title: "Evaluations",
				description: "Monthly reviews to recognize Golden Members and support struggling ones.",
			},
			{
				title: "Recognition Programs",
				description: "Highlight outstanding members and encourage motivation.",
			},
			{
				title: "Support & Mediation",
				description: "Handle issues, ensure fairness, and maintain professionalism.",
			},
		],
	},

	/* ------------------- PR ------------------- */
	{
		id: "pr",
		category: "non-technical",
		title: "PR & Fundraising",
		subtitle: "Building connections and promoting growth.",
		description:
			"The PR & Fundraising Committee manages the organization's public image and reputation while securing financial support for events and initiatives. The PR team focuses on creating engaging content, building relationships, and enhancing our visibility, while the Fundraising team develops partnerships with sponsors and organizes funding campaigns to support our long-term sustainability and growth.",
		image: {src: prImage, alt: "Public Relations Illustration"},
		goals: [
			{
				title: "Strengthen Public Image",
				description:
					"Enhance the organization's visibility and reputation through strategic communication and creative content across multiple platforms.",
			},
			{
				title: "Build Strategic Partnerships",
				description:
					"Establish and maintain relationships with sponsors, media outlets, and industry professionals to support organizational growth.",
			},
			{
				title: "Secure Financial Support",
				description:
					"Develop sustainable funding streams through sponsorships, partnerships, and fundraising activities to support events and initiatives.",
			},
			{
				title: "Enhance Community Engagement",
				description:
					"Foster strong connections with both internal members and external stakeholders through effective communication and outreach programs.",
			},
		],
		roles: [
			{
				role: "PR Team Members",
				responsibilities: [
					"Create and manage engaging content for social media and marketing materials.",
					"Handle media relations and coordinate press coverage for events.",
					"Develop communication strategies to enhance the organization's public image.",
				],
			},
			{
				role: "Fundraising Team Members",
				responsibilities: [
					"Research potential sponsors and prepare professional sponsorship proposals.",
					"Maintain relationships with existing sponsors and donors.",
					"Organize fundraising campaigns and activities to support organizational goals.",
				],
			},
			{
				role: "Team Leaders",
				responsibilities: [
					"Coordinate efforts between PR and Fundraising teams for aligned messaging.",
					"Oversee strategic planning and execution of major campaigns.",
					"Represent the committee in external meetings and mentor team members.",
				],
			},
		],
		activities: [
			{
				title: "Content Creation & Social Media Management",
				description: "Develop engaging content and manage social media campaigns to enhance online presence and engagement.",
			},
			{
				title: "Partnership Development & Sponsorship Acquisition",
				description: "Research partners, prepare proposals, and build relationships with sponsors to secure funding and support.",
			},
			{
				title: "Media Relations & Communications",
				description: "Handle press releases, coordinate media coverage, and manage external communications for positive public image.",
			},
			{
				title: "Fundraising Campaigns & Events",
				description: "Plan and execute fundraising activities and creative campaigns to generate financial support for initiatives.",
			},
		],
	},

	/* ------------------- Event Coordination ------------------- */
	{
		id: "event-coordination",
		category: "non-technical",
		title: "Event Coordination",
		subtitle: "Crafting events that click.",
		description:
			"Event Coordination involves planning and organizing events, from logistics to execution. It includes tasks like securing venues, managing schedules, handling vendors, and ensuring that all elements of the event run smoothly.",
		image: {src: eventImage, alt: "Event Coordination Illustration"},
		goals: [
			{
				title: "Organizing Impactful Events",
				description: "Plan and execute well-structured events, ensuring smooth logistics and engaging experiences for attendees.",
			},
			{
				title: "Enhancing Collaboration",
				description: "Coordinate with other committees, speakers, and external partners to deliver high-quality events.",
			},
			{
				title: "Maximizing Attendance & Engagement",
				description: "Develop strategies to attract participants, encourage interaction, and maintain high engagement throughout events.",
			},
			{
				title: "Ensuring Seamless Execution",
				description: "Handle scheduling, venue arrangements, and technical requirements to ensure events run smoothly.",
			},
		],
		roles: [
			{
				role: "Logistics Team",
				responsibilities: [
					"Manage logistical planning and event setup.",
					"Coordinate venue arrangements, equipment, and supplies.",
					"Oversee event-day operations to ensure smooth execution.",
				],
			},
			{
				role: "Marketing Team",
				responsibilities: [
					"Promote events through social media and various marketing channels.",
					"Collaborate with the Media Team to develop and distribute promotional materials.",
					"Engage with the target audience to boost attendance and excitement for upcoming events.",
				],
			},
		],
		activities: [
			{
				title: "Event Planning & Logistics",
				description: "Organize and manage event schedules, venues, and technical requirements to ensure smooth execution.",
			},
			{
				title: "Speaker & Guest Coordination",
				description: "Communicate with speakers, panelists, and guests to arrange sessions, logistics, and schedules.",
			},
			{
				title: "Marketing & Promotion",
				description: "Work with the media team to create promotional materials and campaigns to maximize event reach and engagement.",
			},
			{
				title: "On-Site Management",
				description: "Oversee event setup, coordinate volunteers, and ensure everything runs according to plan during the event.",
			},
		],
	},
	/* ------------------- Media ------------------- */
	{
		id: "media",
		category: "non-technical",
		title: "Media",
		subtitle: "Turning Moments into Memories.",
		description:
			"Social Media Management involves creating, curating, and overseeing content across social media platforms to build an online presence, engage with audiences, and promote a brand. It includes tasks like scheduling posts, analyzing performance metrics, responding to comments, and developing strategies to increase reach and engagement.",
		image: {src: mediaImage, alt: "Media Illustration"},
		goals: [
			{
				title: "Creative Design Alignment",
				description: "Deliver creative designs that match the vision and goals of events and projects.",
			},
			{
				title: "Event Documentation",
				description: "Document events through professional photography and video for archiving and promotion.",
			},
			{
				title: "Visual Content Enhancement",
				description: "Improve the quality of visual content and enhance engagement on social media platforms.",
			},
			{
				title: "Media Content Support",
				description: "Support media activities by creating unique visual content.",
			},
		],
		roles: [
			{
				role: "Graphic Design & Content Creation Section",
				responsibilities: [
					"Design promotional materials like posters, flyers, and social media posts.",
					"Write creative copy that complements graphic designs to increase impact.",
					"Create integrated visual content to engage the audience and encourage participation.",
				],
			},
			{
				role: "Photography & Video Editing Section",
				responsibilities: [
					"Capture events and activities professionally to document key moments.",
					"Edit videos and photos after events to produce high-quality visual content.",
					"Create short video clips for social media engagement and event promotion.",
				],
			},
		],
		activities: [
			{
				title: "Photography and Documentation",
				description: "Photographing and documenting events, conferences, and activities.",
			},
			{
				title: "Visual Content Creation",
				description: "Designing and creating visual content for social media platforms.",
			},
			{
				title: "Video Production",
				description: "Producing promotional, educational, and live event videos.",
			},
			{
				title: "Event Media Management",
				description: "Managing photography and video coverage during events to ensure full documentation.",
			},
		],
	},

	/* ------------------- Entrepreneurship ------------------- */
	{
		id: "entrepreneurship",
		category: "non-technical",
		title: "Entrepreneurship",
		subtitle: "Where Innovation Meets Opportunity.",
		description:
			"Entrepreneurship is the process of identifying real problems or uncovering hidden opportunities, creating innovative solutions, and transforming them into sustainable business ventures. It is not only about starting companies, but about developing an entrepreneurial mindset that sees opportunities where others see challenges. It focuses on validating ideas, building business models, prototyping, and pitching solutions that generate long-term value for both the market and the community.",
		image: {src: entrepreneurshipImage, alt: "Entrepreneurship Illustration"},
		goals: [
			{
				title: "Cultivating an Entrepreneurial Mindset",
				description:
					"Encouraging creative thinking and the ability to spot problems or opportunities in the environment and turn them into potential ventures.",
			},
			{
				title: "Driving Innovation and Problem-Solving",
				description: "Applying design thinking, idea validation, and business modeling to create solutions that address real-world gaps.",
			},
			{
				title: "Building Bridges Between Technology and Business",
				description: "Integrating entrepreneurship with technical fields to ensure projects and innovations can grow into market-ready solutions.",
			},
			{
				title: "Transforming Ideas into Real Impact",
				description: "Supporting the journey from idea generation to prototyping, pitching, and developing sustainable opportunities.",
			},
		],
		roles: [
			{
				role: "All Members",
				responsibilities: [
					"Participate in workshops and activities to build knowledge in entrepreneurship, design thinking, business models, and pitching.",
					"Contribute actively in brainstorming sessions, idea development, and prototyping.",
					"Collaborate effectively and complete assigned tasks on time.",
				],
			},
			{
				role: "Mentors",
				responsibilities: [
					"Guide teams through customer research and idea validation.",
					"Ensure that proposed solutions address real problems and align with market needs.",
					"Provide continuous feedback during the development of business models and plans.",
				],
			},
			{
				role: "Partnerships & Outreach",
				responsibilities: [
					"Build connections with entrepreneurs, incubators, accelerators, and external partners.",
					"Create opportunities for mentorship, exposure, and collaboration with the startup ecosystem.",
				],
			},
		],
		activities: [
			{
				title: "Workshops & Training",
				description: "Provide sessions on entrepreneurship basics, design thinking, business models, and pitching to build practical knowledge.",
			},
			{
				title: "Ideation & Validation",
				description:
					"Guide participants in identifying real problems, generating innovative solutions, and validating ideas through research and analysis.",
			},
			{
				title: "Prototyping",
				description: "Support teams in developing simple prototypes or demos that transform ideas into tangible solutions.",
			},
			{
				title: "Pitching & Competitions",
				description:
					"Train members to prepare pitch decks and present effectively, culminating in a mini startup competition to showcase their work.",
			},
		],
	},
];
