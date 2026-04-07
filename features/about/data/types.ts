import { ImageType } from "@/lib/types"

export interface AboutSection {
  id: string;
  label: string;
  logo: ImageType;
  logoWhite: ImageType;
  description: string;
  learnMoreLink?: { title: string; url: string };
}
