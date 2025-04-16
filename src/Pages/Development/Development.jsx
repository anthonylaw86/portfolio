import Projects from "../../Components/Projects/Projects";
import "./Development.css";

const Development = () => {
  const skills = {
    frontend: [
      "React.js",
      "JavaScript",
      "HTML/CSS",
      "Tailwind CSS",
      "Ionic",
      "UI/UX Design",
      "Responsive Design",
      "BEM Methodology",
    ],
    backend: [
      "Node.js",
      "Express",
      "MongoDB",
      "Supabase",
      "PostgreSQL",
      "RESTful APIs",
      "API Integration",
      "Cloudinary",
    ],
    tools: [
      "Git",
      "Postman",
      "Agile Methodology",
      "Scrum",
      "JWT",
      "bcrypt",
      "Helmet",
      "CORS",
    ],
  };

  return (
    <div className="development-page">
      <div className="development-container">
        <div className="development-header">
          <h1>Development</h1>
          <p>
            Full Stack Software Engineer with expertise in building modern web
            and mobile applications. Proficient in React, Node.js, and MongoDB
            for full-stack development, with experience in cross-platform mobile
            development using Ionic. Skilled in creating responsive user
            interfaces, implementing RESTful APIs, and working with various
            databases including PostgreSQL and Supabase. Experienced in cloud
            deployment with AWS and containerization using Docker. Passionate
            about writing clean, maintainable code and creating scalable
            solutions that deliver exceptional user experiences.
          </p>
        </div>

        <div className="skills-grid">
          <div className="skills-section">
            <h2>Frontend Development</h2>
            <div className="skills-list">
              {skills.frontend.map((skill, index) => (
                <div key={index} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="skills-section">
            <h2>Backend Development</h2>
            <div className="skills-list">
              {skills.backend.map((skill, index) => (
                <div key={index} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="skills-section">
            <h2>Tools & Technologies</h2>
            <div className="skills-list">
              {skills.tools.map((skill, index) => (
                <div key={index} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        <Projects />
      </div>
    </div>
  );
};

export default Development;
