import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./routes-nav/Navigation";
import RoutesList from "./routes-nav/RoutesList";

/** Personal website application
 *
 * App -> {Navigation, RoutesList}
 */

export default function App() {
  console.debug("App");

  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <RoutesList />
      </div>
    </BrowserRouter>
  );
}
