import React, { useRef, useState } from "react";
import "./NavBar.css";
import logo from "../../../assets/logo.png";
import menuIcon from "../../../assets/menu-bars.svg";
import xIcon from "../../../assets/close-icon.svg";
import icon from "../../../assets/pikaso.png";

const NavBar = () => {
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
          <a className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </a>
          {menu === "home" ? <img src={icon} alt="" /> : <></>}
        </li>
        <li>
          <a className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </a>
          {menu === "about" ? <img src={icon} alt="" /> : <></>}
        </li>
        <li>
          <a className="anchor-link" offset={50} href="#work">
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </a>
          {menu === "work" ? <img src={icon} alt="" /> : <></>}
        </li>
        <li>
          <a className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </a>
          {menu === "contact" ? <img src={icon} alt="" /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">
        <a className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </a>
      </div>
    </div>
  );
};

export default NavBar;
