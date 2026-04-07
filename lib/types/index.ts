import { StaticImageData } from "next/image";

export interface ImageType {
  src: StaticImageData | string;
  alt: string;
}
