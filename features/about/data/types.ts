import { StaticImageData } from "next/image";

export interface ImageType {
  src: StaticImageData | string;
  alt: string;
}

export interface AboutSection {
  id: string;
  label: string;
  logo: ImageType;
  logoWhite: ImageType;
  description: string;
  learnMoreLink?: { title: string; url: string };
}
