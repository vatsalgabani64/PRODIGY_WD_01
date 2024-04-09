import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./Home";
import Gallery from "./Gallery";
import AboutUs from "./AboutUs";
import Navbar from "./Navbar"; // Assuming Navbar component contains the navigation menu
import "../App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
