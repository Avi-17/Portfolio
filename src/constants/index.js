import project1 from "../assets/projects/files.png";
import project2 from "../assets/projects/sony.png";
import project3 from "../assets/projects/globes.png";

export const HERO_CONTENT = `A dedicated technology enthusiast with a strong foundation in software development. Skilled in collaborative problem-solving, with a keen focus on leveraging technology for impactful solutions. Eager to learn new technologies and drive innovation in tech industries through AI-based projects and teamwork.`;

export const PROJECTS = [
  {
    title: "File Management System",
    image: project1,
    description:"Implemented secure JWT-based user authentication, CRUD functionality, MySQL with Prisma ORM integration, and Firebase for enhanced security and real-time data management. Backend only project.",
    technologies: ["Node.js", "Express", "MySQL", "Prisma ORM", "Firebase"],
    link: "https://file-management-backend-fohf.onrender.com/",
  },
  {
    title: "SonyLIV clone",
    image: project2,
    description:
    "Developed an interactive React.js front-end with Sign In/Sign Up, dynamic movie cards, and Sony-Liv-inspired UI, styled responsively with Tailwind CSS.",
    technologies: ["ReactJS", "Tailwind CSS"],
    link:"https://endsem-project-sony-git-07d3e8-aviral-singhs-projects-ba7f766a.vercel.app/",
  },
  {
    title: "Countries Website",
    image: project3,
    description:
    "Built a user-friendly country search interface with HTML, CSS, and JavaScript, featuring a continent filter and clean, accessible UI for easy navigation.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link:"https://avi-17.github.io/Countries-Website/",
  }
];

export const CONTACT = {
  address: "Newton School Of Technology, Rishihood University, Sonipat, Harayana",
  email: "aviral.s23csai@nst.rishihood.edu.in",
};
