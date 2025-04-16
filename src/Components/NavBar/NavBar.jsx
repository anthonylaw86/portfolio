import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/portfolio">Anthony Law</Link>
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`navbar-menu ${isMenuOpen ? "is-active" : ""}`}>
        <Link to="/about" className="navbar-item">
          About
        </Link>
        <Link to="/development" className="navbar-item">
          Development
        </Link>
        <Link to="/real-estate" className="navbar-item">
          Real Estate
        </Link>

        <Link to="/personal" className="navbar-item">
          Personal
        </Link>
        <Link to="/contact" className="navbar-item">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
