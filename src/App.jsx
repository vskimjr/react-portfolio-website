import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./routes-nav/Navigation";
import RoutesList from "./routes-nav/RoutesList";

/** Portfolio app
 *
 *
 */
export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <RoutesList />
      </div>
    </BrowserRouter>
  );
}
