import { LatestEvent, UpcomingEvent } from "./types";
// upcoming Events Images
/* --------------------------------------------------------------- */
// Latest Events Images
import techNights from "@/public/events/latest/tech_nights.webp";
import robotiva from "@/public/events/latest/robotiva.webp";
import promptEng from "@/public/events/latest/prompt_eng.webp";
import huaweiIct from "@/public/events/latest/huawei_ict.webp";
import uiuxEssentials from "@/public/events/latest/uiux_essentials.webp";
import hrGuided from "@/public/events/latest/hr_guided.webp";
import makeYourReel from "@/public/events/latest/make_your_reel.webp";

// Note: Events are in chronological order with the most recent event being first in the data structure.

export const upcomingEvents: UpcomingEvent[] = [];

export const latestEvents: LatestEvent[] = [
  {
    category: "technical",
    title: "Tech Nights - Bootcamp Series",
    date: "Mar 6 - Mar 22, 2025",
    location: "Online",
    description:
      "A multi-track bootcamp series organized by IEEE, offering students a solid introduction to key tech fields including AI, Web Development, Cybersecurity, and Electronics. Each track offers hands-on sessions led by experienced mentors, aiming to equip students with practical skills and foundational knowledge in a collaborative, beginner-friendly environment.",
    image: { src: techNights, alt: "Tech Nights" },
  },
  {
    category: "technical",
    title: "Robotiva - Robotics Competition",
    date: "Feb 28, 2024",
    location: "Creativa Hub, Ismailia",
    description:
      "Robotiva was a robotics competition organized by IEEE in collaboration with Creativa Hub, Ismailia. The event brought together aspiring engineers and tech enthusiasts to design, build, and compete with their own robots in a high-energy, challenge-based environment. Participants showcased their creativity, teamwork, and problem-solving skills as they tackled real-world robotics scenarios, making Robotiva a standout experience in hands-on engineering.",
    image: { src: robotiva, alt: "Robotiva Competition" },
    socialMediaPostLinks: {
      facebook: "https://www.facebook.com/share/r/1AXQdMwQo3",
      instagram:
        "https://www.instagram.com/reel/DGncONGMjJ-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
  },
  {
    category: "technical",
    title: "Prompt Engineering Workshop",
    date: "Dec 5, 2024",
    location: "ITI, Ismailia",
    description:
      "The event explored the transformative power of AI in enhancing creativity. Participants discovered how AI can be used to design stunning videos, create catchy songs, generate breathtaking images, craft unique logos, develop responsive websites, and optimize LinkedIn profiles, showcasing its vast potential across various creative fields.",
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
      "The event introduced participants to the world of UI/UX design, focusing on UX Research and the importance of UX in the industry. They learned to use Figma to create their first UI design, achieving impressive results in a short amount of time.",
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
      "The event focused on essential key skills and tools to help participants kickstart their careers. Attendees learned how to develop key soft skills, craft a winning CV and cover letter, optimize their LinkedIn profiles, and ace job interviews, providing them with valuable tools for career success.",
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
      "The event focused on video editing, teaching participants how to transform raw material into professional-quality Reels or Shorts. Attendees learned essential editing skills, added professional touches to their videos, and elevated their editing techniques to create engaging and eye-catching content.",
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
