import { Officer } from "./types";
import ethar from "@/assets/highboard/ethar.webp";
import abdelkhalek from "@/assets/highboard/abdelkhalek.webp";
import marwan from "@/assets/highboard/marwan.webp";
import singab from "@/assets/highboard/singab.webp";
import ashrakat from "@/assets/highboard/ashrakat.webp";
import mostafa from "@/assets/highboard/mostafa.webp";

export const officers: Officer[] = [
  {
    name: "Marwan Ashraf",
    position: "Vice Chair",
    image: { src: marwan, alt: "Vice Chair" },
    linkedin: "https://www.linkedin.com/in/marwan-ashraf-ibrahim",
    mail: "marwanelgammal0@gmail.com",
  },
  {
    name: "Ethar Hassan",
    position: "Chairwoman",
    image: { src: ethar, alt: "Chair" },
    linkedin: "https://www.linkedin.com/in/etharhassan22",
    mail: "etharhassan126@gmail.com",
  },
  {
    name: "Ahmed Singab",
    position: "Vice Chair",
    image: { src: singab, alt: "Vice Chair" },
    linkedin: "https://www.linkedin.com/in/ahmed-singab-69a692272",
    mail: "ahmedsingab06@gmail.com",
  },
  {
    name: "Ashrakat Rashwan",
    position: "Treasurer",
    image: { src: ashrakat, alt: "Treasurer" },
    linkedin: "https://www.linkedin.com/in/ashrakat-rashwan",
    mail: "ashrakat_rashwan@ieee.org",
  },
  {
    name: "M. Abdelkhalek",
    position: "Secretary",
    image: { src: abdelkhalek, alt: "Secretary" },
    linkedin: "https://www.linkedin.com/in/muhammed-abdelkhalek-33055420a",
    mail: "mohamma2002@yahoo.com",
  },
  {
    name: "Mostafa Hashem",
    position: "Webmaster",
    image: { src: mostafa, alt: "Webmaster" },
    linkedin: "https://www.linkedin.com/in/mostafaaa-hashem",
    mail: "mostafahashem.fe@gmail.com",
  },
];
