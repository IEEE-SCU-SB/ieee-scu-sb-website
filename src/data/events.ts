import { LatestEvent, UpcomingEvent } from "./types";
// upcoming Events Images

// Latest Events Images
import robotiva from "@/assets/events/latest/robotiva.webp";
import antiTheHack from "@/assets/events/latest/anti_the_hack.webp";
import codingHive from "@/assets/events/latest/coding_hive.webp";
import promptEng from "@/assets/events/latest/prompt_eng.webp";
import huaweiIct from "@/assets/events/latest/huawei_ict.webp";
import uiuxEssentials from "@/assets/events/latest/uiux_essentials.webp";
import hrGuided from "@/assets/events/latest/hr_guided.webp";
import makeYourReel from "@/assets/events/latest/make_your_reel.webp";

// Note: Events are in reverse chronological order with the most recent event being first in the data structure.

export const upcomingEvents: UpcomingEvent[] = [];

/* ------------------------------------------------------------------------------------ */

export const latestEvents: LatestEvent[] = [
  {
    category: "technical",
    title: "Robotiva - Robotics Competition",
    date: "Feb 28, 2025",
    location: "Creativa Hub, Ismailia",
    description: `Robotiva, organized by IEEE in collaboration with Creativa Hub, Ismailia, brought together aspiring engineers and tech enthusiasts to design, build, and compete with their own robots.
    The event offered a high-energy, challenge-driven environment where participants showcased creativity, teamwork, and problem-solving skills in real-world robotics scenarios.`,
    image: { src: robotiva, alt: "Robotiva Competition" },
    socialMediaPostLinks: {
      facebook: "https://www.facebook.com/share/r/1AXQdMwQo3",
      instagram:
        "https://www.instagram.com/reel/DGncONGMjJ-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
  },
  {
    category: "technical",
    title: "Behind the screens: Anti-The Hack Session",
    date: "Feb 26, 2025",
    location: "Faculty of Engineering, SCU",
    description: `Our Cybersecurity Session, led by Eng. Mohamed Fareed — Head of Cybersecurity, offered participants a solid and accessible introduction to digital security. The session covered essential topics such as malware, social engineering, and major cybersecurity threats, while also providing practical guidance on staying protected in today's connected world.`,
    image: { src: antiTheHack, alt: "Anti The Hack Session" },
    socialMediaPostLinks: {
      facebook: "https://www.facebook.com/share/r/1DNcEHFW6R",
      instagram:
        "https://www.instagram.com/reel/DGi3u-1M8yK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
  },
  {
    category: "technical",
    title: "Coding Hive Hackathon",
    date: "Feb 24, 2025",
    location: "ITI, Ismailia",
    description: `The Coding Hive Hackathon, organized by IEEE in collaboration with MarketAix Agency, introduced participants to the world of programming from scratch—literally! 
    Using Scratch, participants worked in teams to design and build creative projects, learning core programming concepts step by step. With interactive challenges and a special prize, the event made learning to code both exciting and accessible.`,
    image: { src: codingHive, alt: "Coding Hive Hackathon" },
    socialMediaPostLinks: {
      facebook: "https://www.facebook.com/share/p/1KVtyA8E8N",
      instagram:
        "https://www.instagram.com/p/DGdgboyMs8B/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      linkedin:
        "https://www.linkedin.com/posts/ieee-suez-canal-university-student-branch_ieee-ieeeegypt-ieeeabrscu-activity-7299816426360467456-53zf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD14GpMBogyIDtW3oqGLTmdFUzCtFD7ZU54",
    },
  },
  {
    category: "technical",
    title: "Prompt Engineering Workshop",
    date: "Dec 5, 2024",
    location: "ITI, Ismailia",
    description: `From designing stunning videos and generating original songs to building responsive websites and crafting logos, this session showcased the power of AI as a creative tool. 
      Participants explored a wide range of AI-driven applications and left inspired by how these tools can enhance creativity across nearly every field.`,
    image: { src: promptEng, alt: "Prompt Engineering Workshop" },
    socialMediaPostLinks: {
      facebook:
        "https://www.facebook.com/100064157166643/posts/954951156653448/?mibextid=rS40aB7S9Ucbxw6v",
      instagram:
        "https://www.instagram.com/p/DDNIKXjMRjv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      linkedin:
        "https://www.linkedin.com/posts/ieee-suez-canal-university-student-branch_ieee-ieeeegypt-ieeeabrscu-activity-7270534687524110336-8jlu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD14GpMBogyIDtW3oqGLTmdFUzCtFD7ZU54",
    },
  },
  {
    category: "non-technical",
    title: "Huawei Global ICT Competition for 2024-2025 Launch",
    date: "Nov 18, 2024",
    location: "Faculty of Engineering, SCU",
    description:
      "The Huawei Global ICT Competition 2024-2025 launch was successfully held at the Faculty of Engineering, Suez Canal University. The event featured insightful discussions and gave students the opportunity to explore advanced technologies in AI, Cloud Computing, Communications, and Networks, fostering innovation and technical expertise.",
    image: {
      src: huaweiIct,
      alt: "Huawei Global ICT Competition for 2024-2025 Launch",
    },
    socialMediaPostLinks: {
      facebook: "https://www.facebook.com/share/p/1A3b4oqgrP/",
      instagram:
        "https://www.instagram.com/p/DCpWbGixkjK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      linkedin:
        "https://www.linkedin.com/posts/ieee-suez-canal-university-student-branch_huaweiacademy-ictcompetition-facultyofengineering-activity-7265453940954058752-Lrx7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD14GpMBogyIDtW3oqGLTmdFUzCtFD7ZU54",
    },
  },
  {
    category: "non-technical",
    title: "UI/UX Essentials Workshop",
    date: "Sep 9, 2024",
    location: "Creativa Hub, Ismailia",
    description:
      "Creativity met functionality in this hands-on UI/UX design session. Participants explored the basics of user experience design, discovered the importance of UX research, and brought ideas to life using Figma. By the end, many had created their first UI screens—walking away with both inspiration and practical skills.",
    image: { src: uiuxEssentials, alt: "UI/UX Essentials Workshop" },
    socialMediaPostLinks: {
      facebook: "https://www.facebook.com/share/p/18WKwyG9jn/",
      instagram:
        "https://www.instagram.com/p/C_8oYSbssH4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      linkedin:
        "https://www.linkedin.com/posts/ieee-suez-canal-university-student-branch_ieeeabrscuabrsb-ui-uiabrux-activity-7241146491409428480-5OBj?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD14GpMBogyIDtW3oqGLTmdFUzCtFD7ZU54",
    },
  },
  {
    category: "non-technical",
    title: "HR Guided Workshop",
    date: "Sep 8, 2024",
    location: "Creativa Hub, Ismailia",
    description:
      "Landing your dream job takes more than just a good degree. In this session, participants honed essential career-launching skills—from writing standout CVs and cover letters to acing interviews and optimizing LinkedIn profiles. Soft skills and strategic thinking were front and center, giving attendees a solid foundation for career growth.",
    image: { src: hrGuided, alt: "HR Guided Workshop" },
    socialMediaPostLinks: {
      facebook: "https://www.facebook.com/share/p/188UCBAs4e/",
      instagram:
        "https://www.instagram.com/p/C_0y9iPsEiM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      linkedin:
        "https://www.linkedin.com/posts/ieee-suez-canal-university-student-branch_ieeeabrscuabrsb-hr-hrabrguided-activity-7240043909492408320-1xhf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD14GpMBogyIDtW3oqGLTmdFUzCtFD7ZU54",
    },
  },
  {
    category: "non-technical",
    title: "Make Your Reel Workshop",
    date: "Aug 31, 2024",
    location: "Creativa Hub, Ismailia",
    description:
      "Creating engaging content takes more than just hitting “record.” This session took participants through the essentials of video editing, focusing on how to turn raw footage into polished Reels and Shorts. From trimming clips to adding professional flair, attendees learned how to make videos that truly stand out.",
    image: { src: makeYourReel, alt: "Make Your Reel Workshop" },
    socialMediaPostLinks: {
      facebook: "https://www.facebook.com/share/p/1B8paCCeRP/",
      linkedin:
        "https://www.linkedin.com/posts/ieee-suez-canal-university-student-branch_ieeeabrscuabrsb-media-videoediting-activity-7237527159597105152-LpW0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD14GpMBogyIDtW3oqGLTmdFUzCtFD7ZU54",
      instagram:
        "https://www.instagram.com/p/C_i6zaEsVfU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
  },
];
