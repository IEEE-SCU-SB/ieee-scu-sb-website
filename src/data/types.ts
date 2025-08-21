import { StaticImageData } from "next/image";

export interface ImageType {
  src: StaticImageData | string;
  alt: string;
}

export interface BranchStatistics {
  label: string;
  number: number;
}

export interface Officer {
  name: string;
  position: string;
  image: ImageType;
  linkedin: string;
  mail: string;
}

export interface BoardMember {
  name: string;
  bio: string;
  linkedin: string;
  mail: string;
  image: ImageType;
}

export interface Board {
  id: string;
  head: BoardMember;
  vice?: BoardMember;
}

export type Motm = {
  name: string;
  committee: string;
  image?: ImageType;
  linkedin?: string;
  published: boolean;
}

export interface SocialMedia {
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  tiktok?: string;
}

export interface LatestEvent {
  category: "technical" | "non-technical";
  title: string;
  date: string;
  location: string;
  description: string;
  image: ImageType;
  socialMediaPostLinks?: SocialMedia;
}

export interface UpcomingEvent extends LatestEvent {
  time?: string;
  tags?: string[];
  RegistrationLink: string;
}

export interface AboutSection {
  id: string;
  label: string;
  logo: ImageType;
  logoWhite: ImageType;
  description: string;
  learnMoreLink?: { title: string; url: string };
}

export interface Committee {
  id: string;
  category: "technical" | "non-technical";
  title: string;
  subtitle: string;
  description: string;
  image: ImageType;
  goals: { title: string; description: string }[];
  roles: { role: string; responsibilities: string[] }[];
  activities: { title: string; description: string }[];
}

export interface BranchContacts {
  mail: string;
  phoneNumber: string;
  prMail: string;
  prPhoneNumber: string;
}

export interface Recruitment {
  status: "open" | "closed";
  RegistrationLink: string;
}

export interface Award {
  subtitle: string;
  title: string;
  date: string
}
