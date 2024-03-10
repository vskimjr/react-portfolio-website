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
              Throughout my professional journey, I have dedicated myself to serving communities and individuals in need through non-profit organizations and educational institutions. After recognizing the transformative potential of technology and software, I became a software engineer to facilitate greater outreach, efficiency, and effectiveness in serving marginalized communities.
            </p>
          </div>
          <div className="about-button-container">
            <div className="about-cv-button">
              <a
                href="./assets/victor-kim-jr-cv.pdf"
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
