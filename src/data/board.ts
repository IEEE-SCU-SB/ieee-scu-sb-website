import {Board} from "./types";

// Board Photos - Head
import techHeadImg from "@/assets/board/head/tech.webp";
import aiHeadImg from "@/assets/board/head/ai.webp";
import cyberHeadImg from "@/assets/board/head/cyber.webp";
import flutterHeadImg from "@/assets/board/head/flutter.webp";
import webHeadImg from "@/assets/board/head/web.webp";
import roboticsHeadImg from "@/assets/board/head/robotics.webp";
import cloudHeadImg from "@/assets/board/head/cloud.webp";

import prHeadImg from "@/assets/board/head/pr.webp";
import eventHeadImg from "@/assets/board/head/event.webp";
import hrHeadImg from "@/assets/board/head/hr.webp";
import mediaHeadImg from "@/assets/board/head/media.webp";
import entrepreneurshipHeadImg from "@/assets/board/head/entrepreneurship.webp";

// Board Photos - Vice
import hrViceImg from "@/assets/board/vice/hr1.webp";
import roboticsViceImg from "@/assets/board/vice/robotics.webp";
import aiViceImg from "@/assets/board/vice/ai.webp";
import hrVice2Img from "@/assets/board/vice/hr2.webp";
import mediaViceImg from "@/assets/board/vice/media.webp";

export const board: Board[] = [
	{
		id: "robotics",
		head: {
			name: "Eslam Mohammed Shehata",
			bio: "A motivated mechanical power engineering student with a strong foundation in robotics and mechanical design. He has actively participated in robotics competitions, developing solid problem-solving and teamwork skills. With a passion for innovation and leadership, he is dedicated to inspiring others, driving progress, and shaping the future of robotics and automation.",
			linkedin: "https://www.linkedin.com/in/eslam-m-shehata-250243315",
			mail: "eslam.m.shehata.21@gmail.com",
			image: {
				src: roboticsHeadImg,
				alt: "Head of Robotics Committee",
			},
		},
		vice: {
			name: "Noha Mohammed El-Sayed",
			bio: "I am passionate about embedded systems, IoT, and robotics, with hands-on experience in Arduino and ESP projects. I have competed in multiple competitions, gaining strong skills in coding, teamwork, and problem-solving. Known for my knowledge-sharing and leadership spirit, I enjoy helping others learn and grow while contributing to innovative projects.",
			linkedin: "https://www.linkedin.com/in/noha-nakeeb-b89b9a242",
			mail: "nohanakeeb@gmail.com",
			image: {
				src: roboticsViceImg,
				alt: "Vice of Robotics Committee",
			},
		},
	},
	{
		id: "ai",
		head: {
			name: "Rana Nader Badran",
			bio: "A professional AI Engineer, Her academic specialization is AI Engineering at NINU. She has completed advanced training programs with BUE, Zewail City, ITI, and NTI, and developed strong expertise in ML, DL, CV, NLP, Optimization and GenAI. With active participation & teaching in numerous AI-related sessions and events, she has strengthened both her technical, presentation and leadership skills. Combining a solid academic foundation with practical experience, she continues to drive innovation and deliver impactful AI solutions.",
			linkedin: "https://www.linkedin.com/in/rana-nader",
			mail: "rana.nader.badran@gmail.com",
			image: {
				src: aiHeadImg,
				alt: "Head of AI Committee",
			},
		},
		vice: {
			name: "Salma Adel Maaly Mostafa",
			bio: "An AI enthusiast with hands-on experience in real projects that apply artificial intelligence to practical challenges. She is recognized for her strong communication skills, delivering sessions with clear explanations and excellent feedback. Passionate about supporting and motivating others, she strives to create meaningful learning experiences that empower her team.",
			linkedin: "https://www.linkedin.com/in/salma-adel-7645922a3",
			mail: "salma.adel2015maaly@gmail.com",
			image: {
				src: aiViceImg,
				alt: "Vice of AI Committee",
			},
		},
	},
	{
		id: "web-development",
		head: {
			name: "Ziad Elsaid",
			bio: "A MERN Stack Developer with expertise in both Front-end and Back-end development, currently leading the Web Committee. He focuses on empowering members through structured learning paths, starting with the basics and advancing through practical projects. Beyond technical growth, he emphasizes the importance of soft skills such as teamwork, communication, and problem-solving, ensuring members develop both professionally and personally. His approach blends training with mentorship, encouraging teamwork and building an environment where members can grow.",
			linkedin: "https://www.linkedin.com/in/ziadelsaid",
			mail: "ziadelsaidibrahem@gmail.com",
			image: {
				src: webHeadImg,
				alt: "Head of Web Committee",
			},
		},
	},
	{
		id: "cyber-security",
		head: {
			name: "Moahmed Sarhan",
			bio: "I am a cybersecurity specialist with expertise in web penetration testing and bug bounty hunting. I hold Network+, Security+, Linux+, and eJPT certifications, and I focus on practical security testing of modern web applications. My interests center on improving security through hands-on assessment and continuous learning.",
			linkedin: "https://www.linkedin.com/in/mohamed-sarhan-9790a6254",
			mail: "mhmmsrhan@gmail.com",
			image: {
				src: cyberHeadImg,
				alt: "Head of Cyber Security Committee",
			},
		},
	},
	{
		id: "hr",
		head: {
			name: "Asma Onsy",
			bio: "An HR leader with experience in recruitment, training, and member development. Contributed to running recruitment cycles, interviews, and evaluations, while also gaining exposure to management and technical tools through internships, conferences, and competitions. Committed to building a fair, supportive, and professional environment that helps members grow and perform at their best.",
			linkedin: "https://www.linkedin.com/in/asma-onsy-5a26072a0",
			mail: "asmaonsy2005@gmail.com",
			image: {
				src: hrHeadImg,
				alt: "Head of HR Committee",
			},
		},
		vice: [
			{
				name: "Alaa Ahmed Salah",
				bio: "A motivated HR leader with strong skills in coordination, member engagement, and organizational development. She collaborates with the Head to support members in delivering better outcomes through closer follow-up, while empowering new members with training and guidance. Committed to building supportive and well-structured environments, she works to enhance member experience and contribute to the organization's success.",
				linkedin: "https://www.linkedin.com/in/alaa-ahmed-soltan-2a3130384",
				mail: "alaaahmedsoltan@gmail.com",
				image: {
					src: hrViceImg,
					alt: "Vice of HR Committee",
				},
			},
			{
				name: "Sara Ahmed Elaraby",
				bio: "A dedicated HR professional focused on member support and organizational development. She works collaboratively to enhance team performance and foster a positive work environment. With strong interpersonal skills and attention to detail, she contributes to building efficient processes and ensuring smooth operations within the committee.",
				linkedin: "",
				mail: "shskebw45@gmail.com",
				image: {
					src: hrVice2Img,
					alt: "Vice of HR Committee",
				},
			},
		],
	},
	{
		id: "media",
		head: {
			name: "AbdElrhman Asaad Mohamed",
			bio: "I'm a Graphic Designer with 4 years of experience in branding, social media design, and creating unique visuals. Skilled in Adobe Creative Suite (Photoshop, Illustrator, Davinci), with a strong eye for detail and creativity in delivering impactful designs. Passionate about turning ideas into visuals that inspire and engage.",
			linkedin: "https://www.linkedin.com/in/abdelrhman-asaad-negeda",
			mail: "body.negeda@gmail.com",
			image: {
				src: mediaHeadImg,
				alt: "Head of Media Committee",
			},
		},
		vice: {
			name: "Miral Milad Zikery",
			bio: "I am a creative media enthusiast with a passion for visual storytelling and impactful design. As Vice Visual Content, I focus on crafting engaging visuals, managing media strategies, and delivering content that connects with people. My skills include graphic design, video editing, social media management, and digital branding. I always aim to bring ideas to life in a unique and inspiring way, using media as a powerful tool for communication and influence.",
			linkedin: "https://www.linkedin.com/in/miral-milad-23374a350",
			mail: "miralmido5200@gmail.com",
			image: {
				src: mediaViceImg,
				alt: "Vice of Media Committee",
			},
		},
	},
	{
		id: "event-coordination",
		head: {
			name: "Mohamed Sayed",
			bio: "Event coordination specialist with expertise in organizing technical workshops, seminars, and networking events. Dedicated to creating engaging experiences that bring the IEEE community together and foster learning and collaboration.",
			linkedin: "https://www.linkedin.com/in/mohamed-sayed-395a71331",
			mail: "mohamedsayed.scurt@gmail.com",
			image: {
				src: eventHeadImg,
				alt: "Head of Event Coordination Committee",
			},
		},
	},
	{
		id: "pr",
		head: {
			name: "Mohamed Ahmed Raafat",
			bio: "I am an enthusiastic and goal-oriented student leader with strong experience in Public Relations and Fundraising. Throughout my journey, I have developed solid skills in communication, negotiation, and partnership building, which enabled me to secure collaborations, manage external relations, and represent organizations professionally. As a PR & FR Head, I aim to create impactful strategies that enhance visibility, strengthen the brand image, and ensure sustainable fundraising opportunities.",
			linkedin: "https://www.linkedin.com/in/mohamed-raafat-22b3a02a2",
			mail: "moehamada732@gmail.com",
			image: {
				src: prHeadImg,
				alt: "Head of PR Committee",
			},
		},
	},
	{
		id: "entrepreneurship",
		head: {
			name: "Hana Gamal",
			bio: "Passionate about entrepreneurship and fostering an entrepreneurial mindset. Experienced in idea validation and design thinking, guiding teams from identifying real problems to building prototypes and pitching solutions. Believes in entrepreneurship as a driver for innovation and community impact.",
			linkedin: "https://www.linkedin.com/in/hana-gamal-abuelyazeed",
			mail: "hanagamal989@gmail.com",
			image: {
				src: entrepreneurshipHeadImg,
				alt: "Head of Entrepreneurship Committee",
			},
		},
	},
	{
		id: "devops-cloud",
		head: {
			name: "Amr Elabbasy",
			bio: "Passionate and driven Computer Engineering student specializing in DevOps, system administration, and cloud technologies. Aim to apply technical expertise and problem-solving skills to build scalable, secure, and efficient systems. Eager to contribute to projects enhancing infrastructure automation, CI/CD pipelines, and cloud-native deployments. Seeking an opportunity to grow, innovate, and make a meaningful impact in a forward-thinking, fast-paced tech environment.",
			linkedin: "https://www.linkedin.com/in/amr-elabbasy-392293318",
			mail: "amrelabbasy2003@gmail.com",
			image: {
				src: cloudHeadImg,
				alt: "Head of DevOps and Cloud Committee",
			},
		},
	},
	{
		id: "tech",
		head: {
			name: "Ahmed Gamal Ghanem",
			bio: "I am passionate about Cyber Security and computer networks, with a focus on network security, penetration testing, and infrastructure management. I was a member of the IEEE Security Committee, I enhanced my technical skills and gained a deeper understanding of security policies and practices. I have also completed various training programs that provided me with hands-on experience in attack analysis, network administration, and programming fundamentals. I am continuously developing my expertise with the goal of becoming an Offensive Security Engineer and penetration tester, contributing to strengthening cybersecurity and protecting IT systems against evolving threats.",
			linkedin: "https://www.linkedin.com/in/ahmed7ghanem",
			mail: "ahmedghanem.3777@gmail.com",
			image: {
				src: techHeadImg,
				alt: "Head of Technical Committee",
			},
		},
	},
	{
		id: "flutter",
		head: {
			name: "Rahma Ibrahim",
			bio: "A passionate Flutter developer with expertise in cross-platform mobile application development. Skilled in building high-performance apps for both iOS and Android using Dart and Flutter framework. With experience in modern UI/UX design principles, state management, and API integration, she is dedicated to creating seamless user experiences. Committed to fostering innovation in mobile development and mentoring fellow developers to master Flutter's powerful capabilities for building beautiful, natively compiled applications.",
			linkedin: "https://www.linkedin.com/in/rahma-ibrahim-b91a2b236",
			mail: "Rahmaibrahim315@gmail.com",
			image: {
				src: flutterHeadImg,
				alt: "Head of Flutter Committee",
			},
		},
	},
];
