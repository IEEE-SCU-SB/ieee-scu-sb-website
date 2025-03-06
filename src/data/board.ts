import { Board } from "./types";
// Board Photos
import webHead from "@/public/board/web_head.webp";
import webVice from "@/public/board/web_vice.webp";
import aiHead from "@/public/board/ai_head.webp";
import roboticsHead from "@/public/board/robotics_head.webp";
import roboticsVice from "@/public/board/robotics_vice.webp";
import cyberHead from "@/public/board/cyber_head.webp";
import electronicsHead from "@/public/board/electronics_head.webp";
import mediaHead from "@/public/board/media_head.webp";
import mediaVice from "@/public/board/media_vice.webp";
import hrHead from "@/public/board/hr_head.webp";
import prHead from "@/public/board/pr_head.webp";
import eventHead from "@/public/board/event_head.webp";

export const board: Board[] = [
  {
    id: "web-development",
    head: {
      name: "Mohammed Aboellil",
      bio: "A passionate Full-Stack Web Developer with expertise in both Front-end and Back-end development, actively leading training sessions, participating in hackathons, and mentoring new members. His goal is to equip members with the latest industry knowledge and practical skills through hands-on sessions, workshops, and mentorship, ensuring they have the resources and support to grow.",
      linkedin: "https://www.linkedin.com/in/mohammed-aboellil-628360296",
      mail: "mohamed.aboellil0@gmail.com",
      image: {
        src: webHead,
        alt: "Head of Web Development Committee",
      },
    },
    vice: {
      name: "Ahmed Negm",
      bio: "A web development professional with previous experience in freelance work, having built numerous web pages. With strong management skills and the ability to effectively motivate and guide the team. He organizes training sessions to explain web development, assign tasks, and track the progress of team members to ensure continuous growth and improvement.",
      linkedin: "https://www.linkedin.com/in/ahmed-negm-758273230",
      mail: "negm3266@gmail.com",
      image: {
        src: webVice,
        alt: "Vice Head of Web Development Committee",
      },
    },
  },
  {
    id: "ai",
    head: {
      name: "Ahmed Elsaid",
      bio: "An AI expert with a strong background in developing and applying artificial intelligence solutions. He has participated in multiple competitions, demonstrating his problem-solving skills and innovation in the field. As a dedicated educator, he has led numerous sessions, teaching others how to build and utilize AI effectively. His passion for AI and knowledge sharing continues to inspire and empower aspiring professionals.",
      image: {
        src: aiHead,
        alt: "Head of AI Committee",
      },
      linkedin: "https://www.linkedin.com/in/ahmed-elsaid1",
      mail: "Ahmedalsaid2003@gmail.com",
    },
  },
  {
    id: "robotics",
    head: {
      name: "Mohammed Ahmed",
      bio: "A Communication and Electronics Engineer and Robotics Head at IEEE. Passionate about embedded systems, microcontroller interfacing, and real-time operating systems, with hands-on experience in developing projects such as smart home systems, and automotive control systems. Skilled in ARM Cortex-M architecture, programming, and debugging techniques. Dedicated to mentoring students and contributing to engineering competitions and team projects.",
      linkedin: "https://www.linkedin.com/in/mohammed-elnageb",
      mail: "mohammedelnageb@gmail.com",
      image: {
        src: roboticsHead,
        alt: "Head of Robotics Committee",
      },
    },
    vice: {
      name: "Mohammed Abdelmogeth",
      bio: "A Mechatronics Engineer and Vice Head of Robotics (Head of the Mechanical Department). Passionate about mechanical design, automation, and manufacturing, with experience in developing mechanical systems and performance analysis. Committed to fostering a hands-on learning environment and enhancing the team's skills in design and fabrication.",
      linkedin: "https://www.linkedin.com/in/mohammed-abdelmogeth-516247329",
      mail: "mohammedabdelmogeth18@gmail.com",
      image: {
        src: roboticsVice,
        alt: "Vice Head of Robotics Committee",
      },
    },
  },
  {
    id: "cyber-security",
    head: {
      name: "Mohammed Fareed",
      bio: "A passionate Junior Engineer specializing in cybersecurity, with a focus on penetration testing and ethical hacking. He completed the DEPI internship, gaining hands-on experience in real-world cybersecurity scenarios. He holds certifications in CCNA, Linux Admin 1, and eJPTv2, demonstrating expertise in networks, system administration, and penetration testing. Currently, he is pursuing the Red Teaming Diploma to further develop his skills in offensive security techniques.",
      linkedin: "https://www.linkedin.com/in/mohamed-fareed1",
      mail: "faridmohamed395@gmail.com",
      image: {
        src: cyberHead,
        alt: "Head of Cyber Security Committee",
      },
    },
  },
  {
    id: "electronics",
    head: {
      name: "Ali Ayman",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad magnam illo, itaque dolor quaerat harum est non labore quia expedita repudiandae minus cupiditate hic asperiores cumque deleniti nemo. Pariatur repudiandae esse sunt libero iusto animi delectus aliquam, necessitatibus quidem laudantium.",
      linkedin: "",
      mail: "",
      image: {
        src: electronicsHead,
        alt: "Head of Electronics Committee",
      },
    },
  },
  {
    id: "media",
    head: {
      name: "Samia Amr",
      bio: "An experienced media professional with skills in graphic design, photography, and video editing. She leads the team with creativity and a focus on delivering high-quality visual content that enhances audience engagement and supports event success.",
      linkedin: "https://www.linkedin.com/in/samia-amr-25b157248",
      mail: "samiaamr26@gmail.com",
      image: {
        src: mediaHead,
        alt: "Head of Media Committee",
      },
    },
    vice: {
      name: "Youmna Mohammed",
      bio: "Supporting the creative vision of the Committee by skilfully handling multimedia tasks, including graphic design, photography and video production. Assisting in bringing ideas to life through visuals that align with our goals.",
      linkedin: "https://www.linkedin.com/in/youmna-muhammed-b00306303",
      mail: "Y60812344@gmail.com",
      image: {
        src: mediaVice,
        alt: "Vice Head of Media Committee",
      },
    },
  },
  {
    id: "hr",
    head: {
      name: "Sara Ahmed",
      bio: "An experienced leader with expertise in team management, conflict resolution, and performance evaluation. She leads the HR team with a focus on fostering collaboration, enhancing communication, and ensuring a positive and inclusive environment. She is dedicated to empowering members and driving organizational success, making the HR Committee a cornerstone of the organization’s achievements.",
      linkedin: "https://www.linkedin.com/in/saraelbaaly",
      mail: "Sara.ah.soliman999963@gmail.com",
      image: {
        src: hrHead,
        alt: "Head of HR Committee",
      },
    },
  },
  {
    id: "pr",
    head: {
      name: "Jumannah Farouk",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad magnam illo, itaque dolor quaerat harum est non labore quia expedita repudiandae minus cupiditate hic asperiores cumque deleniti nemo. Pariatur repudiandae esse sunt libero iusto animi delectus aliquam, necessitatibus quidem laudantium.",
      linkedin: "",
      mail: "",
      image: {
        src: prHead,
        alt: "Head of PR Committee",
      },
    },
  },
  {
    id: "event-coordination",
    head: {
      name: "Sohila Waleed",
      bio: "An experienced event organizer with a strong background in planning and managing various activities within IEEE SCU. She has played a key role in executing multiple events, demonstrating excellent communication and team management skills. Committed to enhancing attendee experiences, she ensures every event is distinguished and professionally executed.",
      linkedin: "https://www.linkedin.com/in/sohilaaa-waleed-ab7ab22a7",
      mail: "sohilaaawaleed@gmail.com",
      image: {
        src: eventHead,
        alt: "Head of Event Coordination Committee",
      },
    },
  },
];
