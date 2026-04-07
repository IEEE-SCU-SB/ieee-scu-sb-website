import { ImageType } from "@/lib/types"


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
  vice?: BoardMember | BoardMember[];
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
