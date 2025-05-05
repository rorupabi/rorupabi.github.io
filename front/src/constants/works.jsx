import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";

export const HERO_CONTENT = `I am an undergraduate Computer Science student passionate about Programming. With a strong foundation in Web Development & Technology, I excel in creating and enhancing websites. My team management, problem-solving, and communication skills enable me to thrive in collaborative environments and tackle challenges effectively. Committed to continuous learning, I am very eager to expand my experience and share my knowledge to the industry.`;

export const ABOUT_TEXT = `I also excel in communication and enjoy engaging with diverse individuals. I believe that collaboration and different perspectives enhance creativity and lead to better project outcomes. I am committed to continuous learning and expanding my experience in the industry`;

export const EXPERIENCES = [
  {
    year: "2025 - Present",
    role: "Intern Web Developer",
    company: "CBZN Perspective.",
    description: `Led frontend development using ReactJS and TailwindCSS, creating accessible designs that strike a balance between functionality and aesthetics. Utilized a variety of npm packages with JavaScript to enhance interactivity and overall frontend performance. Prioritized responsive, mobile-first design and ensured cross-browser compatibility for optimal user experience. Consistently delivered high-quality solutions, earning trust and recognition for reliability and attention to detail.`,
    technologies: ["Javascript", "React.js", "TailwindCSS", "NodeJS", "mongoDB"],
  },
  {
    year: "2023 - Present",
    role: "Web Developer (CEU Makati)",
    description: `Designed and developed a responsive website using the MERN stack and Vanilla JavaScript, ensuring smooth integration between frontend and backend systems. Leveraged NoSQL databases for efficient data handling and implemented responsive layouts with TailwindCSS, custom sizing, and adaptive breakpoints. Integrated APIs using Axios to streamline system communication and delivered the project on time, maintaining high performance and functionality standards throughout.`,
    technologies: ["HTML", "CSS", "ReactJS", "JavaScript", "mySQL"],
  },
  {
    year: "2023 - Present",
    role: "UI/UX Designer",
    company: "CEU Makati",
    description: `Crafted minimalist, user-focused designs for two web development projects using Figma, emphasizing modern aesthetics and intuitive user experiences. Transformed creative concepts into polished, visually engaging designs that enhanced overall usability and appeal. Collaborated closely with team members to refine interfaces and ensure alignment with both project goals and user needs.`,
    technologies: ["Figma", "NpmJS"],
  },
  {
    year: "2023 - Present",
    role: "Computer Building & Sales",
    company: "Self-Employed",
    description: `Experienced in assembling and selling custom-built PCs across various form factors, including Small Form Factor (SFF), Micro-ATX (mATX), and ATX, tailored to diverse performance needs. Built and configured systems using both Intel and AMD Ryzen platforms, optimizing for gaming, productivity, and professional workloads. Successfully delivered custom PCs to clients across multiple locations, offering technical support, troubleshooting, and upgrade guidance. Developed strong expertise in selecting high-quality components for both performance-oriented and budget-conscious builds. Managed pricing, sourcing, and logistics, operating a profitable buy-and-sell business while maintaining a solid reputation as a reliable and trustworthy seller. Well-versed in CPUs, GPUs, and monitor types including FHD, QHD, and OLED.`,
  },
];

export const PROJECTS = [
  {
    title: "Automated Timetabling Management for CEU Makati",
    image: project1,
    description:
      "A fully functional Automated Timetabling Management system developed for Centro Escolar University Makati that implements a Backtracking Algorithm to efficiently allocate classrooms, faculty, and course schedules. This system reduced scheduling conflicts decreased administrative workload by automating a previously manual process. The intuitive interface allows administrators to easily view, modify, and optimize timetables across departments while accommodating constraints such as faculty availability and room capacity.",
    technologies: ["HTML", "CSS3", "React", "TailwindCSS", "Node.js", "MySQL"],
  },
  {
    title: "CBZN Perspective co. Daily Time Record Page",
    image: project2,
    description:
      "A comprehensive time tracking application built for CBZN Perspective company that streamlines employee attendance monitoring and project hour allocation. Features include automated time logging, approval workflows for managers, leave management integration, and detailed reporting capabilities. The system supports both in-office and remote work tracking, with visual analytics dashboards that provide insights into productivity patterns and project resource allocation.",
    technologies: ["HTML", "CSS3", "ReactJS", "TailwindCSS", "MySQL", "Node.js"],
  },
  {
    title: "Burger Buddy Restaurant Based Page",
    image: project3,
    description:
      "An interactive restaurant website for Burger Buddy featuring online ordering capabilities, real-time menu updates, and customer loyalty program integration. The responsive design provides seamless experiences across devices, while the customized CMS allows restaurant staff to easily update menu items, prices, and promotional offers without technical knowledge.",
    technologies: ["HTML", "CSS3", "ReactJS", "TailwindCSS", "NodeJS"],
  },
  {
    title: "24VR Page",
    image: project4,
    description:
      "A personal portfolio website showcasing projects and skills",
    technologies: ["HTML", "CSS3", "ReactJS", "TailwindCSS",],
  },
];

export const CONTACT = {
  address: "Taguig, Metro Manila",
  phoneNo: "+63 976 593 9867",
  email: "rouenpads@gmail.com",
};