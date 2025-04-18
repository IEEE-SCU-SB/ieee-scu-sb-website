import { Board } from "./types";
// Board Photos
import webHead from "@/assets/board/web_head.webp";
import aiHead from "@/assets/board/ai_head.webp";
import roboticsHead from "@/assets/board/robotics_head.webp";
import cyberHead from "@/assets/board/cyber_head.webp";
import mediaHead from "@/assets/board/media_head.webp";
import hrHead from "@/assets/board/hr_head.webp";
import eventHead from "@/assets/board/event_head.webp";

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
  // {
  //   id: "electronics",
  //   head: {
  //     name: "Ali Ayman",
  //     bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad magnam illo, itaque dolor quaerat harum est non labore quia expedita repudiandae minus cupiditate hic asperiores cumque deleniti nemo. Pariatur repudiandae esse sunt libero iusto animi delectus aliquam, necessitatibus quidem laudantium.",
  //     linkedin: "",
  //     mail: "",
  //     image: {
  //       src: electronicsHead,
  //       alt: "Head of Electronics Committee",
  //     },
  //   },
  // },
  {
    id: "media",
    head: {
      name: "Youmna Mohammed",
      bio: "Supporting the creative vision of the Committee by skilfully handling multimedia tasks, including graphic design, photography and video production. Assisting in bringing ideas to life through visuals that align with our goals.",
      linkedin: "https://www.linkedin.com/in/youmna-muhammed-b00306303",
      mail: "Y60812344@gmail.com",
      image: {
        src: mediaHead,
        alt: "Head of Media Committee",
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
  // {
  //   id: "pr",
  //   head: {
  //     name: "Jumannah Farouk",
  //     bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad magnam illo, itaque dolor quaerat harum est non labore quia expedita repudiandae minus cupiditate hic asperiores cumque deleniti nemo. Pariatur repudiandae esse sunt libero iusto animi delectus aliquam, necessitatibus quidem laudantium.",
  //     linkedin: "",
  //     mail: "",
  //     image: {
  //       src: prHead,
  //       alt: "Head of PR Committee",
  //     },
  //   },
  // },
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
