import React from "react";

function NavBar() {
  return (
    <div className="nav-container">
      <div className="nav-header">
        <h2>ALI FIT</h2>
      </div>
      <nav className="nav-list">
        <a href="#" className="nav-link">
          Home
        </a>
        <a href="#" className="nav-link">
          About
        </a>
        <a href="#" className="nav-link">
          FAQ
        </a>
      </nav>
    </div>
  );
}

export default NavBar;
