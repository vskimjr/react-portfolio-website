import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="Projects">
      <div className="projects-container">
        <p className="projects-text-title">Projects</p>
        <div className="project-container">
          <div className="project-heading d-flex align-items-center">
            <i className="bi bi-chat-left-quote mr-2"></i>
            <p className="project-section-header mb-0">Warbler</p>
          </div>
          <p className="project-text-description">
            Social media messaging clone built with Python, Flask, and PostgreSQL
          </p>
          <div className="project-links-containers">
            <div className="project-link">
              <i className="bi bi-link-45deg"></i>
              <a
                href="https://vskimjr-warbler.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
            <div className="project-link">
              <i className="bi bi-github"></i>
              <a
                href="https://github.com/vskimjr/flask-warbler"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="project-container">
          <div className="project-heading d-flex align-items-center">
            <i className="bi bi-file-earmark-person mr-2"></i>
            <p className="project-section-header-1 mb-0">Jobly</p>
          </div>
          <p className="project-text-description">
            Job search app built with React
          </p>
          <div className="project-links-containers">
            <div className="project-link">
              <i className="bi bi-link-45deg"></i>
              <a
                href="https://vskimjr-jobly.surge.sh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
            <div className="project-link">
              <i className="bi bi-github"></i>
              <a
                href="https://github.com/vskimjr/react-jobly"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
