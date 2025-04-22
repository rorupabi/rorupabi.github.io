import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

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
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};