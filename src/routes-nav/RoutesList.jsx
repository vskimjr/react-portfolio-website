import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import About from "../about/About";
import Contact from "../contact/Contact";
import Projects from "../projects/Projects";

/** Site-wide routes.
 *
 * Visiting a non-existent route navigates to the homepage.
 */

export default function RoutesList() {
  return (
    <div className="pt-5">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}
