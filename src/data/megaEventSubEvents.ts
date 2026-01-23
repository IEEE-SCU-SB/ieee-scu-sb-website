export interface SubEvent {
	id: string;
	title: string;
	date: string;
	gallery: string[];
}

export interface MegaEventData {
	[eventId: string]: {
		subEvents: SubEvent[];
		description: string;
	};
}

export const megaEventSubEvents: MegaEventData = {
	"techxplore": {
		description:
			"TechXplore is IEEE's flagship technical bootcamp series designed to help students explore, understand, and build real-world technology skills in today's most in-demand fields.\n\nThrough a set of carefully structured, hands-on bootcamps, TechXplore takes participants on a guided journey from core fundamentals to practical application. Each track is led by experienced mentors and focuses on both technical understanding and real implementation, ensuring participants gain skills they can actually use beyond the event.\n\nTechXplore offers multiple specialized tracks under one umbrella, including Artificial Intelligence & Machine Learning, Robotics, and Front-End Web Development. Each bootcamp is tailored to be beginner-friendly while still delivering meaningful depth, real projects, and interactive learning experiences.\n\nWhether you are taking your first steps into tech or looking to strengthen your foundation, TechXplore provides the environment, guidance, and community to help you grow, build, and innovate.",
		subEvents: [
			{
				id: "ai-ml-track",
				title: "AI & ML ",
				date: "Nov 15-20, 2025",
				gallery: [
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769105736/14_bqi5uq.webp", //1
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100032/20251120_175605_0_a5zgoe.webp", //2
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100027/20251120_173555_mi9lyk.webp", //3
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100026/IMG20251124154747_BURST000_COVER_qbr1bv.webp", //4
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100024/IMG20251124154728_d4lsdm.webp", //5
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100024/IMG_9022_n1qihx.webp", //6
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100019/20251127_153243_xcejle.webp", //7
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100015/IMG20251124154757_lgc0w4.webp", //8
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100014/20251124_154144_d78v4u.webp", //9
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100013/20251120_173659_1_rz852c.webp", //10
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100012/20251120_173932_eqivhy.webp", //11
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100010/20251120_172649_bfy0zs.webp", //12
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100009/20251120_174115_fufgaf.webp", //13
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100035/IMG_9028_zfxvf1.webp", //14
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100004/20251120_153643_cqmtos.webp", //15
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100003/IMG20251124155512_ionf6y.webp", //16
				],
			},
			{
				id: "robotics-track",
				title: "Robotics ",
				date: "Nov 22-27, 2025",
				gallery: [
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100056/IMG_9245_qyxikv.webp", //1
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100055/IMG_9233_cga3cm.webp", //2
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100053/IMG_9228_obanv6.webp", //3
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100052/IMG_9231_kgehdw.webp", //4
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100051/IMG_9291_mpmdm8.webp", //5
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100049/IMG_9235_un4f5z.webp", //6
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100043/IMG_9294_pf8rlw.webp", //7
				],
			},
			{
				id: "web-dev-track",
				title: "Front-End ",
				date: "Dec 1-6, 2025",
				gallery: [
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100072/IMG_9136_qstnel.webp", //1
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100071/IMG_9169_yubrfh.webp", //2
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100071/IMG_9147_svs4g2.webp", //3
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100069/IMG_9130_stjyep.webp", //4
				],
			},
			{
				id: "cybersecurity",
				title: "Cybersecurity",
				date: "Nov 16, 2025",
				gallery: [
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100156/20251116_173511_ylnds2.webp", //1
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100127/IMG_8696_fjbqyo.webp", //2
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100121/IMG_8692_nnouwm.webp", //3
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100112/IMG_8701_lxuudv.webp", //4
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100110/IMG_8681_m7wkyx.webp", //5
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100108/IMG_8711_nly8xe.webp", //6
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100104/IMG_9242_z1n46i.webp", //7
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100100/IMG_8677_rrrlaw.webp", //8
				],
			},
		],
	},
	"ieee-club": {
		description:
			"The IEEE Club is a weekly recurring internal gathering designed to strengthen collaboration and connection across all committees within our branch. Each week, one or more committees take the lead in organizing an engaging offline session where members can learn about the roles, goals, and ongoing projects of other committees.\n\nThese sessions foster a deeper understanding of how each team contributes to the branch's mission, while also giving members the opportunity to meet, interact, and build strong cross-committee relationships.\n\nBeyond knowledge-sharing, the event also features fun activities, interactive challenges, and exciting prizes, making every session both informative and enjoyable.",
		subEvents: [
			{
				id: "club-week-1",
				title: "AI & Robotics",
				date: "Jan 10, 2026",
				gallery: [
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100211/IMG_8930_sepidw.webp", //1
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100211/IMG_8905_1_bw99vz.webp", //2
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100210/IMG_8927_frnvf5.webp", //3
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100201/IMG_8500_lbhqqp.webp", //4
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100201/IMG_8917_1_whwtqv.webp", //5
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100200/IMG_8921_n7zxyi.webp", //6
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100198/IMG_8909_zqlaj6.webp", //7
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100198/IMG_8901_iuvsnl.webp", //8
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100190/IMG_8476_pnxvqa.webp", //9
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100187/IMG_8506_g2wnq0.webp", //10
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100184/IMG_8474_aojesq.webp", //11
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100179/IMG_8479_czxztm.webp", //12
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100179/IMG_8472_pmtwj4.webp", //13
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100178/IMG_8496_kqci7b.webp", //14
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100174/IMG_9559_jdfwjw.webp", //15
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100174/IMG_8949_vfojxq.webp", //16
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100174/IMG_9525_wbzbh6.webp", //17
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100173/IMG_9374_t68jmq.webp", //18
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100170/IMG_8946_jyjo8m.webp", //19
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100164/IMG_8939_dvvtk9.webp", //20
				],
			},
			{
				id: "club-week-2",
				title: "HR & Event",
				date: "Jan 17, 2026",
				gallery: [
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100241/IMG_5080_ukfv2t.webp", //1
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100241/IMG_5117_mpufct.webp", //2
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100239/IMG_5101_omlwv9.webp", //3
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100236/IMG_5109_btmfj9.webp", //4
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100236/IMG_5125_jsiun8.webp", //5
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100234/IMG_5121_fqmhme.webp", //6
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100228/IMG_5108_wpdwcq.webp", //7
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100226/IMG_5110_n9ndtt.webp", //8
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100226/IMG_5144_hhf5oi.webp", //9
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100225/IMG_5102_vyff5n.webp", //10
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100225/IMG_5091_gbiryh.webp", //11
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100224/IMG_5105_v5jlxz.webp", //12
					"https://res.cloudinary.com/ieeescusb/image/upload/v1769100216/IMG_5076_ex6xqb.webp", //13
				],
			},
		],
	},
};
