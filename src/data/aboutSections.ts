import { AboutSection } from "./types";
import logo from "@/public/assets/logo.webp";
import logoWhite from "@/public/assets/logo-white.webp";
import ieeeLogo from "@/public/assets/ieee-logo.webp";
import ieeeLogoWhite from "@/public/assets/ieee-logo-white.webp";
import sacLogo from "@/public/assets/sac-logo.svg";
import sacLogoWhite from "@/public/assets/sac-logo-white.svg";
import region8Logo from "@/public/assets/region8-logo.webp";
import region8LogoWhite from "@/public/assets/region8-logo-white.webp";

export const aboutSections: AboutSection[] = [
  {
    id: "ieeescusb",
    label: "IEEE Suez Canal University Student Branch",
    logo: { src: logo, alt: "IEEE SCU SB Logo" },
    logoWhite: { src: logoWhite, alt: "IEEE SCU SB Logo" },
    description:
      "Located in Ismailia, Suez Canal University as part of the Egypt section in Region 8, our branch is committed to bridging the gap between academia and industry, providing a platform for students to develop their skills and network with like-minded individuals.",
  },
  {
    id: "ieee",
    label: "IEEE: Institute of Electrical and Electronics Engineers",
    logo: { src: ieeeLogo, alt: "IEEE Logo" },
    logoWhite: { src: ieeeLogoWhite, alt: "IEEE Logo" },
    description:
      "IEEE Pronounced &quot;I-triple-E&quot; is the world&apos;s largest technical professional organization, uniting over 400,000 members globally to advance technology for humanity. It is the trusted voice for engineering, computing, and technology information around the globe.",
    learnMoreLink: {
      title: "Visit IEEE official website",
      url: "https://www.ieee.org",
    },
  },
  {
    id: "region8",
    label: "IEEE Region-8",
    logo: { src: region8Logo, alt: "IEEE Region 8 Logo" },
    logoWhite: { src: region8LogoWhite, alt: "IEEE Region 8 Logo" },
    description:
      "IEEE is divided into 10 global regions, each representing a geographical area to better organize and serve its members. Region 8, to which we belong, covers Europe, Africa, and the Middle East.",
    learnMoreLink: {
      title: "Learn more about IEEE Region-8",
      url: "https://ieeer8.org",
    },
  },
  {
    id: "ieeeEgyptSection",
    label: "IEEE Egypt Section",
    logo: { src: sacLogo, alt: "IEEE Egypt SAC Logo" },
    logoWhite: { src: sacLogoWhite, alt: "IEEE Egypt SAC Logo" },
    description:
      "Within each IEEE region, geographical areas are further divided into Sections to manage local activities and member engagement. We are part of the Egypt Section, one of over 50 Sections in Region 8, which includes more than 70 student branches across the country.",
    learnMoreLink: {
      title: "Explore IEEE Egypt Section",
      url: "https://sac.ieee.org.eg",
    },
  },
];
