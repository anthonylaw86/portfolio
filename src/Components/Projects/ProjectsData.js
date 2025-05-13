import beatApp from "../../assets/images/development/beatApp.1.png";
import beatApp2 from "../../assets/images/development/beatApp.2.png";
import aroundUS from "../../assets/images/development/aroundTheUS.1.png";
import aroundUS2 from "../../assets/images/development/aroundTheUS.2.png";
import wtwr from "../../assets/images/development/WTWR.2.png";
import wtwr2 from "../../assets/images/development/WTWR.1.png";
import darkDeco from "../../assets/images/development/darkDeco.png";
import darkDeco2 from "../../assets/images/development/darkDeco2.png";
import darkDeco3 from "../../assets/images/development/darkDeco3.png";
import darkDeco5 from "../../assets/images/development/darkDeco5.png";
import volunQueer1 from "../../assets/images/development/VQLogo.png";
import volunQueer2 from "../../assets/images/development/VQ1.png";
import volunQueer3 from "../../assets/images/development/VQ2.png";
import volunQueer4 from "../../assets/images/development/VQ3.png";
import volunQueer5 from "../../assets/images/development/VQ4.png";
import volunQueer6 from "../../assets/images/development/VQ5.png";

const projects_data = [
  {
    work_no: 1,
    work_name: "Dark Deco E-Commerce",
    work_images: [darkDeco, darkDeco2, darkDeco3, darkDeco5],
    description:
      "Full-stack e-commerce site featuring a frontend, backend & admin panel. Built with React and Tailwind CSS for the frontend, and Express, MongoDB & Cloudinary for the backend. Includes order & product management for administrators to update products and track customer orders.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Express",
      "MongoDB",
      "Cloudinary",
      "JWT",
      "bcrypt",
    ],
    status: "Completed",
    github: "https://github.com/anthonylaw86/ecom-app-FE",
    demo: "https://youtu.be/hNmqv4QyDEU?si=WRLXq9P4QTJ7u0Ps",
  },

  {
    work_no: 2,
    work_name: "WTWR App",
    work_images: [wtwr, wtwr2],
    description:
      "Full-stack weather app that allows users to upload clothing items and returns options based on current weather conditions. Features React Context API for dependency injection and integrates both internal and external RESTful APIs.",
    technologies: [
      "React",
      "Express",
      "Node.js",
      "MongoDB",
      "Helmet",
      "JWT",
      "CORS",
    ],
    status: "Completed",
    github: "https://github.com/anthonylaw86/se_project_react",
    demo: "https://youtu.be/aLsh-bjeKOE?si=6ODVeli5gTZttWXT",
  },

  {
    work_no: 3,
    work_name: "Beat App",
    work_images: [beatApp, beatApp2],
    description:
      "Full-stack music app with React & Express where users add their favorite songs to share with friends while listening to Spotify music. Features API integration with Spotify and internal services, with React hooks for state management.",
    technologies: ["React", "Express", "Node.js", "Spotify API", "JWT", "BEM"],
    status: "Completed",
    github: "https://github.com/anthonylaw86/final-project-frontend",
    demo: "https://www.youtube.com/watch?v=CHRnHvXvGNQ",
  },

  {
    work_no: 4,
    work_name: "Around The US",
    work_images: [aroundUS, aroundUS2],
    description:
      "A responsive web application showcasing beautiful locations across the United States. Built with modern web technologies and following industry best practices.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design", "BEM"],
    status: "Completed",
    github: "https://github.com/anthonylaw86/aroundtheus",
    demo: "https://anthonylaw86.github.io/aroundtheus/",
  },

  {
    work_no: 5,
    work_name: "VolunQueer",
    work_images: [
      volunQueer1,
      volunQueer2,
      volunQueer3,
      volunQueer4,
      volunQueer5,
      volunQueer6,
    ],
    description:
      "A cross-platform mobile application connecting LGBTQ+ individuals with volunteer opportunities in their community. Built with React and Ionic for iOS and Android, featuring Supabase for backend services. Currently under development with a focus on creating a safe and inclusive space for community engagement.",
    technologies: [
      "React",
      "Ionic",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Supabase",
      "iOS",
      "Android",
      "Docker",
    ],
    status: "In Development",
  },
];

export default projects_data;
