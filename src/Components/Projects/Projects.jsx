import { useState } from "react";
import projects_data from "./ProjectsData";
import "./Projects.css";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const handleNextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % selectedProject.work_images.length
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + selectedProject.work_images.length) %
        selectedProject.work_images.length
    );
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects-page">
      <section className="projects-hero">
        <h1>Development Projects</h1>
        <p>Building solutions that make a difference</p>
      </section>

      <section className="projects-grid">
        {projects_data.map((project) => (
          <div
            key={project.work_no}
            className="project-card"
            onClick={() => handleProjectClick(project)}
          >
            <div className="project-image">
              <img
                src={project.work_images[0]}
                alt={`${project.work_name} - Preview`}
              />
            </div>
            <div className="project-content">
              <h3>{project.work_name}</h3>
              {project.description && <p>{project.description}</p>}
              {project.technologies && (
                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              {project.status && (
                <div className="project-status">
                  Status:{" "}
                  <span className={`status-${project.status.toLowerCase()}`}>
                    {project.status}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </section>

      {selectedProject && (
        <div className="project-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              ×
            </button>
            <div className="modal-header">
              <h2>{selectedProject.work_name}</h2>
              <div className="project-status">
                Status:{" "}
                <span
                  className={`status-${selectedProject.status.toLowerCase()}`}
                >
                  {selectedProject.status}
                </span>
              </div>
            </div>

            <div className="modal-image-container">
              <button className="nav-button prev" onClick={handlePrevImage}>
                ‹
              </button>
              <img
                src={selectedProject.work_images[currentImageIndex]}
                alt={`${selectedProject.work_name} - Image ${
                  currentImageIndex + 1
                }`}
              />
              <button className="nav-button next" onClick={handleNextImage}>
                ›
              </button>
              <div className="image-counter">
                {currentImageIndex + 1} / {selectedProject.work_images.length}
              </div>
            </div>

            <div className="modal-details">
              <p>{selectedProject.description}</p>
              <div className="project-technologies">
                {selectedProject.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    GitHub
                  </a>
                )}
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
