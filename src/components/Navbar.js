import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav id="navbar">
      <div className="logo">
        <img className='logo' src={logo} alt="Logo" />
      </div>
      <ul  className="menu-items">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

