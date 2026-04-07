import { ImageType } from "@/lib/types";

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
  megaEvent:
    | {
        id: string;
        nestedPath: string;
      }
    | false;
}

export interface UpcomingEvent extends LatestEvent {
  time?: string;
  tags?: string[];
  RegistrationLink: string;
}
