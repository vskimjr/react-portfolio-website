import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";

/** Navigation bar for website. Shows up on every page.
 *
 *
 * Rendered by App.
 */

export default function Navigation() {
  console.debug("Navigation");

  return (
    <nav className="Navigation navbar navbar-expand-md">
      <div className="container-fluid">
        <Link className="navbar-brand fw-medium" to="/">
          vskimjr
        </Link>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item me-4">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item me-4">
            <NavLink className="nav-link" to="/projects">
              Projects
            </NavLink>
          </li>
          <li className="nav-item me-4">
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>

        </ul>
      </div>
    </nav>
  );
}
