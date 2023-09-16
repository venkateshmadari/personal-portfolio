import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <nav>
      <div class="logo">
        <h2>VENKATESH </h2>
        <h3>MADARI</h3>
      </div>
      <div class="hamburger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
      <ul class="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Skills</a>
        </li>
        <li>
          <a href="#">Skills</a>
        </li>
        <a href="#foot-section">
          <button class="login-button" href="#">
            Contact Me
          </button>
        </a>
      </ul>
      <div className="contact">
        
      </div>
    </nav>
  );
}

export default Navbar;
