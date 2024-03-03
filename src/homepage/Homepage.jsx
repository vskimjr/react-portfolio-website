import React from "react";
import "./Homepage.css";

export default function Homepage() {
  return (
    <div className="Homepage">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 offset-lg-2 mb-4 mb-lg-0 d-flex justify-content-center align-items-center">
            <div className="homepage-picture">
              <img src="./img/profile-pic-main.png" alt="profile picture" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-4 d-flex justify-content-center align-items-center homepage-text">
            <div>
              <p className="homepage-text-p1 mb-1 fw-medium">Hello, I'm</p>
              <p className="homepage-text-title">Victor Kim Jr</p>
              <p className="homepage-text-p2 fw-medium">Full Stack Developer</p>
              <p className="homepage-text-p3 fw-medium"><i class="bi bi-geo-alt-fill"></i> Philadelphia, PA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
