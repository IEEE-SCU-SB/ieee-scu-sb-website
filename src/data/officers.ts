import {Officer} from "./types";
import chair from "@/assets/highboard/chair.webp";
import treasurer from "@/assets/highboard/treasurer.webp";
import vice2 from "@/assets/highboard/vice2.webp";
import vice1 from "@/assets/highboard/vice1.webp";
import webmaster from "@/assets/highboard/webmaster.webp";
import secretary from "@/assets/highboard/secretary.webp";

export const officers: Officer[] = [
	{
		name: "Ahmed Singab",
		position: "Vice Chair",
		image: {src: vice1, alt: "Vice Chair"},
		linkedin: "https://www.linkedin.com/in/ahmed-singab-69a692272",
		mail: "ahmedsingab06@gmail.com",
	},
	{
		name: "Ashrakat Rashwan",
		position: "Chairwoman",
		image: {src: chair, alt: "Chair"},
		linkedin: "https://www.linkedin.com/in/ashrakat-rashwan",
		mail: "ashrakat_rashwan@ieee.org",
	},
	{
		name: "Yara Ali",
		position: "Vice Chair",
		image: {src: vice2, alt: "Vice Chair"},
		linkedin: "https://www.linkedin.com/in/yara-ali-821061344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
		mail: "yaraalimaati2@gmail.com",
	},
	{
		name: "Arwa Ahmed",
		position: "Treasurer",
		image: {src: treasurer, alt: "Treasurer"},
		linkedin: "https://www.linkedin.com/in/arwa-ahmed-55a343367",
		mail: "arwaahmeddsoliman28@gmail.com",
	},
	{
		name: "Mariam Abdou",
		position: "Secretary",
		image: {src: secretary, alt: "Secretary"},
		linkedin: "https://www.linkedin.com/in/mariam-abdou-ibrahim",
		mail: "mariamabddoo@gmail.com",
	},
	{
		name: "Mohamed Alsaeed",
		position: "Webmaster",
		image: {src: webmaster, alt: "Webmaster"},
		linkedin: "https://www.linkedin.com/in/saeedinum",
		mail: "saeedinum@gmail.com",
	},
];
