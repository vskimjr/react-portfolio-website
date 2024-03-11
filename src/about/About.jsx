import React from "react";
import "./About.css";

/** About page of site
 *
 * Routed at /about
 *
 * RoutesList -> About
 */

export default function About() {
  console.debug("About");

  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="About">
        <div className="about-container text-center">
          <p className="about-text-p1">Get to Know More</p>
          <p className="about-text-title">About Me</p>
          <div className="about-text-paragraph">
            <p className="about-text-long">
            Throughout my professional journey, I have dedicated myself to researching and implementing software solutions to streamline processes and communication that contribute to an organization’s success. After recognizing the pivotal role of technology in driving operational excellence, I became a software engineer to create tangible solutions to address nuanced and complex organizational challenges. By leveraging my expertise in software development, I am committed to designing solutions that drive productivity and foster innovation. 
            </p>
          </div>
          <div className="about-button-container">
            <div className="about-cv-button">
              <a
                href="./assets/victor-kim-cv.pdf"
                className="btn btn-about"
                target="_blank"
              >
                View CV
              </a>
            </div>
            <div className="about-github">
              <a
                href="https://github.com/vskimjr"
                className="btn btn-about"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="about-container-details">
            <div className="detail-heading">
              <i className="bi bi-book"></i>
              <p className="about-section-header">Education</p>
            </div>
            <div className="detail">
              <p className="about-text-p3">Rithm School</p>
              <p className="about-text-p4">
                Full Stack Web Development Bootcamp
              </p>
              <p className="about-text-p3">Westminster Theological Seminary</p>
              <p className="about-text-p4">Master of Divinity | May 2017</p>
              <p className="about-text-p3">CUNY City College</p>
              <p className="about-text-p4">BA in Central Asian History</p>
            </div>
          </div>
          <div className="about-container-details">
            <div className="detail-heading">
              <i className="bi bi-laptop"></i>
              <p className="about-section-header">Technical Skills</p>
            </div>
            <div className="detail">
              <p className="about-text-p3">Languages</p>
              <p className="about-text-p4">
                JavaScript, Python, TypeScript, SQL, PostgreSQL, HTML, CSS
              </p>
              <p className="about-text-p3">Libraries</p>
              <p className="about-text-p4">
                React, React Native, React Testing Library, JQuery
              </p>
              <p className="about-text-p3">Frameworks/Tools</p>
              <p className="about-text-p4">
                Node, Express, Jest, Flask, SQLAlchemy, Jinja, Bootstrap, SASS,
                VSCode, Git, Github, AWS S3
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
