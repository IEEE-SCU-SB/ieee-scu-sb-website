import { ImageType } from "@/lib/types";

type Motm = {
  name: string;
  committee: {
    name: string;
    link: string;
  };
  image?: ImageType;
  linkedin?: string;
  published: boolean;
};

export const motm: Motm = {
  name: "Amira Ashraf",
  committee: {
    name: "Human Resources",
    link: "/committees/hr",
  },
  image: {
    src: "https://res.cloudinary.com/ieeescusb/image/upload/v1765855735/motm_pvh60t.webp",
    alt: "Member of The Month",
  },
  linkedin: "https://www.linkedin.com/in/amira-ashraf-5802a4357",
  published: true,
};
