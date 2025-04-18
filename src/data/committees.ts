import { Committee } from "./types";
// Illustrations
import cyberImage from "@/assets/illustrations/cyber.svg";
import electronicsImage from "@/assets/illustrations/electronics.svg";
import aiImage from "@/assets/illustrations/ai.svg";
import webDevImage from "@/assets/illustrations/web.svg";
import roboticsImage from "@/assets/illustrations/robotics.svg";
import mediaImage from "@/assets/illustrations/media.svg";
import hrImage from "@/assets/illustrations/hr.svg";
import prImage from "@/assets/illustrations/pr.svg";
import eventImage from "@/assets/illustrations/event.svg";

export const committees: Committee[] = [
  /* ------------------- Web Development ------------------- */
  {
    id: "web-development",
    category: "technical",
    title: "Web Development",
    subtitle: "Crafting the digital world, one pixel at a time.",
    description:
      "Web Development is the process of creating and maintaining websites, focusing on aspects like design, content, structure, and functionality. It involves both frontend (user interface) and backend (server-side) development, using technologies like HTML, CSS, JavaScript, and databases.",
    image: { src: webDevImage, alt: "Web Development Illustration" },
    goals: [
      {
        title: "Empowering Web Developers",
        description:
          "Provide a strong foundation in Front-end and Back-end development, ensuring members gain hands-on experience and industry-relevant skills.",
      },
      {
        title: "Bridging the Gap Between Theory & Practice",
        description:
          "Emphasizing hands-on learning, enabling members to apply their knowledge through projects, hackathons, and real-world web applications",
      },
      {
        title: "Building a Strong Developer Community",
        description:
          "Create an environment that fosters collaboration, knowledge-sharing, and mentorship among aspiring developers.",
      },
      {
        title: "Enhancing Soft & Technical Skills",
        description:
          "Encourage members to develop leadership, teamwork, and presentation skills, making them industry-ready.",
      },
    ],
    roles: [
      {
        role: "All Members",
        responsibilities: [
          "Complete assigned tasks on time and maintain consistency.",
          "Engage in sessions and contribute to team activities.",
          "Collaborate with teammates and participate in discussions.",
        ],
      },
      {
        role: "Instructors",
        responsibilities: [
          "Teach and mentor members on web development concepts.",
          "Ensure continuous learning and improvement within the team.",
        ],
      },
      {
        role: "Speakers",
        responsibilities: [
          "Present in external bootcamps and public events.",
          "Share knowledge in an engaging and structured manner.",
        ],
      },
      {
        role: "Team Leaders (When Applicable)",
        responsibilities: [
          "Lead and coordinate team efforts during competitions or projects.",
          "Distribute tasks efficiently and support teamwork for optimal performance.",
        ],
      },
    ],
    activities: [
      {
        title: "Internal Sessions",
        description:
          "Technical and soft skills sessions to enhance knowledge and collaboration.",
      },
      {
        title: "Real-World Projects",
        description:
          "Practical tasks and website-building exercises to simulate industry experience.",
      },
      {
        title: "Bootcamps",
        description:
          "Open events for a broader audience to introduce web development fundamentals.",
      },
      {
        title: "Competitions & Hackathons",
        description:
          "Hands-on challenges to test and improve problem-solving skills.",
      },
      {
        title: "Soft Skills Development",
        description:
          "Presentations, group discussions, and activities that build public speaking, teamwork, and leadership skills.",
      },
    ],
  },

  /* ------------------- AI ------------------- */
  {
    id: "ai",
    category: "technical",
    title: "Artificial Intelligence",
    subtitle: "Teaching machines to think (so you don't have to).",
    description:
      "Artificial Intelligence (AI) is the simulation of human intelligence in machines, allowing them to perform tasks like learning, reasoning, and problem-solving. AI can be narrow, designed for specific tasks, or general, aiming to handle any intellectual task a human can do. Machine learning and deep learning are key technologies that enable AI systems to improve through experience.",
    image: { src: aiImage, alt: "Artificial Intelligence Illustration" },
    goals: [
      {
        title: "Leverage AI Technology",
        description:
          "Use cutting-edge AI tools to enhance productivity and solve complex problems across various fields.",
      },
      {
        title: "Drive Creative AI Solutions",
        description:
          "Encourage the development of AI that enhances daily life, streamlines processes, and inspires new ideas.",
      },
      {
        title: "Prepare for Industry",
        description:
          "Equip members with practical AI skills and real-world applications, preparing them for industry roles and challenges.",
      },
    ],
    roles: [
      {
        role: "All Members",
        responsibilities: [
          "Complete assigned tasks efficiently and on time.",
          "Collaborate with others when needed, especially during bootcamp preparations or group activities.",
          "Contribute to the committee's goals through active participation.",
        ],
      },
      {
        role: "Internal Speakers",
        responsibilities: [
          "Explain AI topics and algorithms to help members develop their knowledge and skills.",
        ],
      },
      {
        role: "Bootcamp Speakers",
        responsibilities: [
          "Expert AI engineers who lecture in bootcamps, helping enthusiasts gain the skills and knowledge to enter the AI field.",
        ],
      },
      {
        role: "Competitors",
        responsibilities: [
          "Top-level professionals in the team who compete in national and international competitions.",
        ],
      },
    ],
    activities: [
      {
        title: "Educational Sessions",
        description:
          "Conducting interactive sessions on AI concepts, tools, and real-world applications to help members strengthen their technical skills.",
      },
      {
        title: "Competitive Challenges",
        description:
          "Organizing and participating in AI competitions, challenging members to apply their knowledge, solve complex problems, and develop innovative solutions.",
      },
      {
        title: "AI Bootcamps",
        description:
          "Hosting AI bootcamps where committee members take on the role of instructors, sharing their expertise to educate and inspire others.",
      },
    ],
  },

  /* ------------------- Robotics ------------------- */
  {
    id: "robotics",
    category: "technical",
    title: "Robotics",
    subtitle: "Building the future, one robot at a time.",
    description:
      "Robotics involves designing and building robots, integrating embedded systems (hardware and software) and mechanical design to create machines that perform tasks autonomously or with minimal human input. It combines electrical engineering, computer science, and mechanical engineering.",
    image: { src: roboticsImage, alt: "Robotics Illustration" },
    goals: [
      {
        title: "Robotics Skill Development",
        description:
          "Organize workshops and training sessions to teach fundamental and advanced robotics skills.",
      },
      {
        title: "Innovative Robotics Projects",
        description:
          "Encourage the design and development of innovative robotics projects that solve practical problems.",
      },
      {
        title: "Competition Readiness",
        description:
          "Prepare members for local and international robotics competitions through targeted training and practice.",
      },
      {
        title: "Hardware and Software Integration",
        description:
          "Promote knowledge of integrating hardware components with software to build functional robots.",
      },
    ],
    roles: [
      {
        role: "Embedded Systems Team",
        responsibilities: [
          "Design and program microcontroller-based systems for robotic applications.",
          "Develop and test control algorithms for autonomous and semi-autonomous robots.",
          "Integrate sensors, actuators, and communication modules into robotic systems.",
        ],
      },
      {
        role: "Mechanical Design Team",
        responsibilities: [
          "Design and fabricate mechanical components for robots.",
          "Optimize robot structures for durability and performance in competitions.",
          "Collaborate on CAD designs and prototyping for innovative robotic solutions.",
        ],
      },
    ],
    activities: [
      {
        title: "Internal Training Sessions",
        description:
          "Hands-on workshops covering robotics fundamentals, microcontrollers, and embedded systems.",
      },
      {
        title: "Competitions & Hackathons",
        description:
          "Participate in national and international robotics competitions to test and improve skills.",
      },
      {
        title: "Project Development",
        description:
          "Build real-world robotics projects to apply theoretical knowledge and gain practical experience.",
      },
      {
        title: "External Bootcamps & Outreach",
        description:
          "Host bootcamps and outreach programs to introduce robotics concepts to a wider audience.",
      },
    ],
  },

  /* ------------------- Cyber Security ------------------- */
  {
    id: "cyber-security",
    category: "technical",
    title: "Cyber Security",
    subtitle: "Your data's bodyguard, 24/7.",
    description:
      "Cybersecurity is a rapidly evolving field that focuses on protecting computer systems, networks, and data from unauthorized access, theft, or damage. It encompasses various practices, technologies, and strategies to ensure that information remains secure and available only to authorized individuals.",
    image: { src: cyberImage, alt: "Cyber Security Illustration" },
    goals: [
      {
        title: "Raising Awareness About Cybersecurity",
        description:
          "Educate students about the basics of cybersecurity and its importance in the modern world.",
      },
      {
        title: "Providing Hands-On Experience",
        description:
          "Offer practical experience in cybersecurity tools and practices.",
      },
      {
        title: "Building a Community of Cybersecurity Enthusiasts",
        description:
          "Create a student-driven community of like-minded individuals passionate about cybersecurity.",
      },
      {
        title: "Providing Career Development and Networking Opportunities",
        description:
          "Help students explore career paths in cybersecurity and build professional networks.",
      },
      {
        title: "Increasing Engagement Through Competitions and Challenges",
        description:
          "Encourage students to participate in cybersecurity competitions to enhance their problem-solving skills.",
      },
      {
        title: "Collaborating with Other IEEE Chapters and Organizations",
        description:
          "Expand the scope of learning by collaborating with other IEEE chapters or cybersecurity organizations.",
      },
    ],
    roles: [
      {
        role: "Beginners",
        responsibilities: [
          "Learn cybersecurity fundamentals through workshops, training sessions, and projects.",
          "Participate in CTF challenges, hands-on labs, and guided learning activities.",
          "Collaborate with peers and seek mentorship from intermediate members and leaders.",
        ],
      },
      {
        role: "Intermediate Members",
        responsibilities: [
          "Assist in conducting workshops and guiding beginners in hands-on exercises.",
          "Contribute to cybersecurity projects, research initiatives, and tool development.",
          "Take part in external bootcamps, competitions, and networking events.",
          "Advance technical skills and prepare for leadership roles.",
        ],
      },
      {
        role: "Speakers",
        responsibilities: [
          "Deliver technical sessions on ethical hacking, cryptography, and cybersecurity fundamentals.",
          "Lead hands-on workshops, Capture The Flag (CTF) challenges, and training sessions.",
          "Stay updated on cybersecurity trends and share insights with the committee.",
          "Guide members in developing cybersecurity skills through structured learning paths.",
        ],
      },
      {
        role: "Leaders",
        responsibilities: [
          "Organize and oversee committee activities, including training sessions, competitions, and projects.",
          "Ensure smooth collaboration between members, speakers, and external partners.",
          "Provide mentorship and support to members in their cybersecurity learning journey.",
          "Plan strategic initiatives to enhance the committee's impact and outreach.",
        ],
      },
    ],
    activities: [
      {
        title: "Internal Training Sessions",
        description:
          "Conduct workshops on ethical hacking, cryptography, and cybersecurity fundamentals.",
      },
      {
        title: "Capture The Flag (CTF) Challenges",
        description:
          "Organize and participate in CTF competitions to enhance practical cybersecurity skills.",
      },
      {
        title: "External Bootcamps & Awareness Sessions",
        description:
          "Host bootcamps and public sessions to educate people on cybersecurity best practices.",
      },
      {
        title: "Collaborative Research & Tool Development",
        description:
          "Work on cybersecurity research projects and develop security tools or scripts.",
      },
    ],
  },

  /* ------------------- Electronics ------------------- */
  {
    id: "electronics",
    category: "technical",
    title: "Electronics",
    subtitle: "Wiring ideas into reality.",
    description:
      "Electronics is the branch of physics and engineering that deals with the design and application of circuits and devices using electricity and electromagnetism. It covers everything from semiconductors to communication systems and power generation.",
    image: { src: electronicsImage, alt: "Electronics Illustration" },
    goals: [
      {
        title: "Enhance Technical Proficiency",
        description:
          "Develop expertise in circuit design, embedded systems, and hardware development.",
      },
      {
        title: "Real-World Project Exposure",
        description:
          "Engage in hands-on projects to apply theoretical knowledge in practical applications.",
      },
      {
        title: "Innovation & Problem-Solving",
        description:
          "Encourage creativity in designing and optimizing electronic systems.",
      },
      {
        title: "Leadership & Teamwork",
        description:
          "Cultivate leadership skills and effective collaboration within technical teams.",
      },
    ],
    roles: [
      {
        role: "All Members",
        responsibilities: [
          "Complete assigned tasks and contribute to projects.",
          "Engage in learning sessions and practical applications.",
        ],
      },
      {
        role: "Instructors",
        responsibilities: [
          "Deliver technical sessions on electronics topics such as microcontrollers, PCB design, and IoT.",
          "Provide guidance to members on project development and troubleshooting.",
        ],
      },
      {
        role: "Project Leaders",
        responsibilities: [
          "Oversee project teams, distribute tasks, and ensure timely completion.",
          "Support and guide members to maximize team performance.",
        ],
      },
      {
        role: "Speakers",
        responsibilities: [
          "Represent the committee in external workshops, bootcamps, and technical events.",
          "Share insights on emerging trends in electronics and embedded systems.",
        ],
      },
    ],
    activities: [
      {
        title: "Technical Training Sessions",
        description:
          "Conduct hands-on workshops on circuit design, embedded programming, and PCB development.",
      },
      {
        title: "Electronics & Embedded Systems Projects",
        description:
          "Work on real-world applications like IoT systems, automation, and robotics integration.",
      },
      {
        title: "Competitions & Hackathons",
        description:
          "Participate in national and international electronics competitions to test and refine skills.",
      },
      {
        title: "Hardware Prototyping & Testing",
        description:
          "Develop, test, and iterate on hardware designs to improve performance and reliability.",
      },
      {
        title: "External Bootcamps & Knowledge Sharing",
        description:
          "Organize public workshops to teach electronics and embedded systems to a broader audience.",
      },
    ],
  },

  /* ------------------- Media ------------------- */
  {
    id: "media",
    category: "non-technical",
    title: "Media",
    subtitle: "Turning Moments into Memories.",
    description:
      "Social Media Management involves creating, curating, and overseeing content across social media platforms to build an online presence, engage with audiences, and promote a brand. It includes tasks like scheduling posts, analyzing performance metrics, responding to comments, and developing strategies to increase reach and engagement.",
    image: { src: mediaImage, alt: "Media Illustration" },
    goals: [
      {
        title: "Creative Design Alignment",
        description:
          "Deliver creative designs that match the vision and goals of events and projects.",
      },
      {
        title: "Event Documentation",
        description:
          "Document events through professional photography and video for archiving and promotion.",
      },
      {
        title: "Visual Content Enhancement",
        description:
          "Improve the quality of visual content and enhance engagement on social media platforms.",
      },
      {
        title: "Media Content Support",
        description:
          "Support media activities by creating unique visual content.",
      },
    ],
    roles: [
      {
        role: "Graphic Design & Content Creation Section",
        responsibilities: [
          "Design promotional materials like posters, flyers, and social media posts.",
          "Write creative copy that complements graphic designs to increase impact.",
          "Create integrated visual content to engage the audience and encourage participation.",
        ],
      },
      {
        role: "Photography & Video Editing Section",
        responsibilities: [
          "Capture events and activities professionally to document key moments.",
          "Edit videos and photos after events to produce high-quality visual content.",
          "Create short video clips for social media engagement and event promotion.",
        ],
      },
    ],
    activities: [
      {
        title: "Photography and Documentation",
        description:
          "Photographing and documenting events, conferences, and activities.",
      },
      {
        title: "Visual Content Creation",
        description:
          "Designing and creating visual content for social media platforms.",
      },
      {
        title: "Video Production",
        description:
          "Producing promotional, educational, and live event videos.",
      },
      {
        title: "Event Media Management",
        description:
          "Managing photography and video coverage during events to ensure full documentation.",
      },
    ],
  },

  /* ------------------- HR ------------------- */
  {
    id: "hr",
    category: "non-technical",
    title: "Human Resources",
    subtitle: "People-first, always.",
    description:
      "Human Resources (HR) focuses on managing an organization's workforce, including recruitment, training, performance management, employee relations, and ensuring compliance with labor laws. HR plays a key role in creating a productive work environment.",
    image: { src: hrImage, alt: "HR Illustration" },
    goals: [
      {
        title: "Attract and Retain Talent",
        description:
          "Implement recruitment strategies to bring in qualified, motivated individuals and develop initiatives to retain and support current members.",
      },
      {
        title: "Foster a Positive Work Environment",
        description:
          "Promote a culture of respect, collaboration, and open communication, ensuring a supportive and inclusive space for all members.",
      },
      {
        title: "Enhance Performance Management",
        description:
          "Create a performance management system that sets clear expectations, provides regular feedback, and recognizes outstanding contributions.",
      },
    ],
    roles: [
      {
        role: "Recruitment and Onboarding",
        responsibilities: [
          "Design and execute recruitment campaigns to attract talented and committed members.",
          "Manage the application and interview process to ensure fair and transparent selection.",
          "Conduct onboarding programs to integrate new members into the organization effectively.",
        ],
      },
      {
        role: "Member Engagement and Support",
        responsibilities: [
          "Serve as a bridge between committees to ensure seamless communication and collaboration.",
          "Plan and organize initiatives that strengthen relationships among members and promote a cohesive environment.",
        ],
      },
      {
        role: "Performance Management and Member Relations",
        responsibilities: [
          "Implement systems to evaluate members' contributions and provide constructive feedback.",
          "Address member concerns and mediate conflicts fairly and professionally.",
          "Ensure adherence to HR policies and update them as necessary to align with organizational goals.",
        ],
      },
    ],
    activities: [
      {
        title: "Recruitment Drives",
        description:
          "Conduct outreach campaigns and manage interviews to attract and select the best talent.",
      },
      {
        title: "Onboarding Programs",
        description:
          "Welcome new members and provide them with the necessary guidance to succeed.",
      },
      {
        title: "Member Recognition",
        description:
          "Highlight and reward exceptional contributions to inspire continued excellence.",
      },
      {
        title: "Conflict Resolution and Mediation",
        description:
          "Address and resolve disputes to maintain a harmonious and productive environment.",
      },
      {
        title: "Policy Development and Implementation",
        description:
          "Create and enforce HR policies that align with the organization's vision and ensure consistency across all activities.",
      },
    ],
  },

  /* ------------------- PR ------------------- */
  {
    id: "pr",
    category: "non-technical",
    title: "PR & Fundraising",
    subtitle: "Building connections and promoting growth.",
    description:
      "PR & Fundraising refers to managing an organization's public image and reputation while also organizing efforts to raise financial support. It includes media relations, strategic communications, and donor engagement to support organizational goals.",
    image: { src: prImage, alt: "Public Relations Illustration" },
    goals: [
      {
        title: "Brand Awareness",
        description:
          "Enhance the visibility of the organization through strategic PR and marketing activities.",
      },
      {
        title: "Partnership Building",
        description:
          "Establish and maintain relationships with sponsors and partners for long-term support.",
      },
      {
        title: "Social Media Engagement",
        description:
          "Boost engagement across social media platforms through creative campaigns and posts.",
      },
      {
        title: "Event Promotion",
        description:
          "Drive participation by effectively promoting events and their benefits to the target audience.",
      },
    ],
    roles: [
      {
        role: "PR Team",
        responsibilities: [
          "Establish and maintain partnerships with external organizations.",
          "Craft compelling content for newsletters and public announcements.",
          "Promote branch activities to the community and external stakeholders.",
        ],
      },
      {
        role: "Fundraising Team",
        responsibilities: [
          "Develop strategies to secure sponsorships and funding for events.",
          "Maintain relationships with sponsors and donors.",
          "Organize fundraising campaigns and activities to support branch initiatives.",
        ],
      },
    ],
    activities: [
      {
        title: "Building External Partnerships",
        description:
          "Establish and maintain relationships with sponsors, media outlets, and industry professionals to enhance the organization's outreach.",
      },
      {
        title: "PR Training & Knowledge Sharing",
        description:
          "Conduct sessions to educate members on PR strategies, communication techniques, and professional networking.",
      },
      {
        title: "Community Engagement",
        description:
          "Engage with the public and stakeholders through networking, outreach programs, and strategic communication efforts.",
      },
      {
        title: "Managing Public Relations Campaigns",
        description:
          "Develop and execute PR strategies to strengthen the organization's brand and public image.",
      },
    ],
  },

  /* ------------------- Event Coordination ------------------- */
  {
    id: "event-coordination",
    category: "non-technical",
    title: "Event Coordination",
    subtitle: "Crafting events that click.",
    description:
      "Event Coordination involves planning and organizing events, from logistics to execution. It includes tasks like securing venues, managing schedules, handling vendors, and ensuring that all elements of the event run smoothly.",
    image: { src: eventImage, alt: "Event Coordination Illustration" },
    goals: [
      {
        title: "Organizing Impactful Events",
        description:
          "Plan and execute well-structured events, ensuring smooth logistics and engaging experiences for attendees.",
      },
      {
        title: "Enhancing Collaboration",
        description:
          "Coordinate with other committees, speakers, and external partners to deliver high-quality events.",
      },
      {
        title: "Maximizing Attendance & Engagement",
        description:
          "Develop strategies to attract participants, encourage interaction, and maintain high engagement throughout events.",
      },
      {
        title: "Ensuring Seamless Execution",
        description:
          "Handle scheduling, venue arrangements, and technical requirements to ensure events run smoothly.",
      },
    ],
    roles: [
      {
        role: "Logistics Team",
        responsibilities: [
          "Manage logistical planning and event setup.",
          "Coordinate venue arrangements, equipment, and supplies.",
          "Oversee event-day operations to ensure smooth execution.",
        ],
      },
      {
        role: "Marketing Team",
        responsibilities: [
          "Promote events through social media and various marketing channels.",
          "Collaborate with the Media Team to develop and distribute promotional materials.",
          "Engage with the target audience to boost attendance and excitement for upcoming events.",
        ],
      },
    ],
    activities: [
      {
        title: "Event Planning & Logistics",
        description:
          "Organize and manage event schedules, venues, and technical requirements to ensure smooth execution.",
      },
      {
        title: "Speaker & Guest Coordination",
        description:
          "Communicate with speakers, panelists, and guests to arrange sessions, logistics, and schedules.",
      },
      {
        title: "Marketing & Promotion",
        description:
          "Work with the media team to create promotional materials and campaigns to maximize event reach and engagement.",
      },
      {
        title: "On-Site Management",
        description:
          "Oversee event setup, coordinate volunteers, and ensure everything runs according to plan during the event.",
      },
    ],
  },
];
