import chair from "@/features/home/assets/chair.webp";
import secretary from "@/features/home/assets/secretary.webp";
import treasurer from "@/features/home/assets/treasurer.webp";
import vice1 from "@/features/home/assets/vice1.webp";
import vice2 from "@/features/home/assets/vice2.webp";
import webmaster from "@/features/home/assets/webmaster.webp";
import { ImageType } from "@/lib/types";

export interface Officer {
  name: string;
  position: string;
  image: ImageType;
  linkedin: string;
  mail: string;
}

export const officers: Officer[] = [
  {
    name: "Ahmed Singab",
    position: "Vice Chair",
    image: { src: vice1, alt: "Vice Chair" },
    linkedin: "https://www.linkedin.com/in/ahmed-singab-69a692272",
    mail: "ahmedsingab06@gmail.com",
  },
  {
    name: "Ashrakat Rashwan",
    position: "Chairwoman",
    image: { src: chair, alt: "Chair" },
    linkedin: "https://www.linkedin.com/in/ashrakat-rashwan",
    mail: "ashrakat_rashwan@ieee.org",
  },
  {
    name: "Yara Ali",
    position: "Vice Chair",
    image: { src: vice2, alt: "Vice Chair" },
    linkedin: "https://www.linkedin.com/in/yara-ali-821061344",
    mail: "yaraalimaati2@gmail.com",
  },
  {
    name: "Arwa Ahmed",
    position: "Treasurer",
    image: { src: treasurer, alt: "Treasurer" },
    linkedin: "https://www.linkedin.com/in/arwa-ahmed-55a343367",
    mail: "arwaahmeddsoliman28@gmail.com",
  },
  {
    name: "Mariam Abdou",
    position: "Secretary",
    image: { src: secretary, alt: "Secretary" },
    linkedin: "https://www.linkedin.com/in/mariam-abdou-ibrahim",
    mail: "mariamabddoo@gmail.com",
  },
  {
    name: "Mohamed Alsaeed",
    position: "Webmaster",
    image: { src: webmaster, alt: "Webmaster" },
    linkedin: "https://www.linkedin.com/in/saeedinum",
    mail: "saeedinum@gmail.com",
  },
];
