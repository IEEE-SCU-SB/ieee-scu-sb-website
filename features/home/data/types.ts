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

export type Motm = {
  name: string;
  committee: {
    name: string;
    link: string;
  };
  image?: ImageType;
  linkedin?: string;
  published: boolean;
};

export interface Award {
  subtitle: string;
  title: string;
  date: string;
  place?: string;
}
