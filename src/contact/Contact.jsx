import React from "react";
import "./Contact.css"; // Import the CSS file for Contact component

export default function Contact() {
  return (
    <div className="Contact">
      <div className="contact-container">
        <p className="contact-text-p1">Get in Touch &</p>
        <p className="contact-text-title">Contact Me</p>
        <div className="contact-info">
          <div className="contact-item me-4">
            <i className="bi bi-linkedin me-2"></i>
            <a
              href="https://www.linkedin.com/in/victor-kim-1b5047b9/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none fw-medium"
            >
              LinkedIn
            </a>
          </div>
          <div className="contact-item">
            <i className="bi bi-envelope-fill me-2"></i>
            <a
              href="mailto:vskimjr@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none fw-medium"
            >
              vskimjr@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
