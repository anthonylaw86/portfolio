import React, { useRef, useState } from "react";
import "./NavBar.css";
import logo from "../../../assets/logo.png";
import menuIcon from "../../../assets/menu-bars.svg";
import xIcon from "../../../assets/close-icon.svg";
import icon from "../../../assets/pikaso.png";
import { Link } from "react-scroll";

const NavBar = ({ onNavigate }) => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="navbar-logo" />
      <img
        src={menuIcon}
        onClick={openMenu}
        alt="menu icon"
        className="nav-mob-open"
      />
      <ul ref={menuRef} className="nav-menu">
        <img src={xIcon} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li>
          <Link to="home" smooth={true} duration={500}>
            <p
              onClick={() => {
                setMenu("home");
                onNavigate("hero");
              }}
            >
              Home
            </p>
          </Link>
          {menu === "home" ? <img src={icon} alt="" /> : <></>}
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            <p
              onClick={() => {
                setMenu("about");
                onNavigate("about");
              }}
            >
              About Me
            </p>
          </Link>
          {menu === "about" ? <img src={icon} alt="" /> : <></>}
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            <p
              onClick={() => {
                setMenu("work");
                onNavigate("work");
              }}
            >
              Portfolio
            </p>
          </Link>
          {menu === "work" ? <img src={icon} alt="" /> : <></>}
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            <p
              onClick={() => {
                setMenu("contact");
                onNavigate("contact");
              }}
            >
              Contact
            </p>
          </Link>
          {menu === "contact" ? <img src={icon} alt="" /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">
        <Link to="contact" smooth={true} duration={500}>
          Connect With Me
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
