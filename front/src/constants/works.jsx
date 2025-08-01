import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";

export const HERO_CONTENT = `I am an undergraduate Computer Science student passionate about Programming. With a strong foundation in Web Development & Technology, I excel in creating and enhancing websites. My team management, problem-solving, and communication skills enable me to thrive in collaborative environments and tackle challenges effectively. Committed to continuous learning, I am very eager to expand my experience and share my knowledge to the industry.`;

export const ABOUT_TEXT = `I also excel in communication and enjoy engaging with diverse individuals. I believe that collaboration and different perspectives enhance creativity and lead to better project outcomes. I am committed to continuous learning and expanding my experience in the industry`;

export const EXPERIENCES = [
  {
    year: "2025",
    role: "Intern Web Developer",
    company: "CBZN Perspective Co.",
    description: `Led frontend development using Javascript, ReactJS, and TailwindCSS, creating accessible designs that strike a balance between functionality and aesthetics. Utilized a variety of npm packages with JavaScript to enhance interactivity and overall frontend performance. Prioritized responsive, mobile-first design and ensured cross-browser compatibility for optimal user experience. Consistently delivered high-quality solutions, earning trust and recognition for reliability and attention to detail.`,
    technologies: ["Javascript", "React.js", "TailwindCSS", "NodeJS", "mongoDB"],
  },
  {
    year: "2023 - 2025",
    role: "Web Developer",
    company: "University Timetabling Website (CEU Makati)",
    description: `Designed and developed a responsive website using the MERN stack and Vanilla JavaScript, ensuring smooth integration between frontend and backend systems. Leveraged MySQL databases for efficient data handling and implemented responsive layouts with TailwindCSS, custom sizing, and adaptive breakpoints. Integrated APIs using Axios to give a faster and easier system communication and delivered the project on time, maintaining high performance and functionality standards throughout.`,
    technologies: ["HTML", "CSS", "ReactJS", "JavaScript", "MySQL"],
  },
  {
    year: "2023 - Present",
    role: "UI/UX Designer",
    description: `Crafted minimalist, user-focused designs for two web development projects using Figma, emphasizing modern aesthetics and intuitive user experiences. Transformed creative concepts into polished, visually engaging designs that enhanced overall usability and appeal.`,
    technologies: ["Figma", "React Icons","Google Icons"],
  },
  {
    year: "2023 - Present",
    role: "Computer Building & Sales",
    company: "Freelancing",
    description: `Experienced in assembling and selling custom-built PCs 
    across various form factors, including Small Form Factor (SFF), Micro-ATX (mATX),
     and ATX, tailored to diverse performance needs. Built and configured systems using 
     both Intel and AMD Ryzen platforms, optimizing for gaming, productivity, and 
     professional workloads. Developed strong expertise in selecting high-quality components for both performance-oriented and budget-conscious builds. 
     Well-versed in CPUs, GPUs, and monitor types including FHD, QHD, and OLED.`,
  },
];

export const PROJECTS = [
  {
    title: "University Timetabling Website (CEU Makati)",
    image: project1,
    description:
      "An automated timetabling system for Centro Escolar University Makati using backtracking algorithms to efficiently allocate classrooms, faculty, and schedules. Reduces scheduling conflicts and administrative workload with an intuitive interface for easy timetable management.",
    technologies: ["HTML", "CSS3", "React","JavaScript", "TailwindCSS", "Node.js", "MySQL", "Aiven"],
    url: "https://ease-scheduler.vercel.app/"
  },
  {
    title: "CBZN Perspective co. Daily Time Record Page",
    image: project2,
    description:
      "A comprehensive Daily Time Record (DTR) application for CBZN Perspective featuring automated logging, manager approval workflows, and detailed analytics. Supports both in-office and remote work with visual dashboards for productivity insights.",
    technologies: ["HTML", "CSS3", "ReactJS","JavaScript", "TailwindCSS", "MySQL", "Node.js","Digital Ocean"],
  },
  {
    title: "Burger Buddy",
    image: project3,
    description:
      "An interactive restaurant website with online ordering, real-time menu updates, and program integration, mainly focusing on frontend development.",
    technologies: ["HTML", "CSS3", "ReactJS", "TailwindCSS", "NodeJS","JavaScript"],
    url: "https://food-app-project-six.vercel.app/"
  },
  {
    title: "24VR Page",
    image: project4,
    description:
      "A personal portfolio website showcasing projects and skills. Subscription Based website, mainly focusing on frontend development.",
    technologies: ["HTML", "CSS3", "ReactJS", "TailwindCSS","JavaScript"],
    url: "https://24vrproj.vercel.app/"
  },
];

export const CONTACT = {
  address: "Taguig, Metro Manila",
  phoneNo: "+63 976 593 9867",
  email: "rouenpads@gmail.com",
};