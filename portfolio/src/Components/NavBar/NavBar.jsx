import React from "react";
import { useState } from "react";
import "./NavBar.css";
import logo from "../../../assets/logo.png";
import swoosh from "../../../assets/noun-swoosh-6638987.svg";

const NavBar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="navbar-logo" />
      <ul className="nav-menu">
        <li>
          <a className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </a>
          {menu === "home" ? <img src={swoosh} alt="" /> : <></>}
        </li>
        <li>
          <a className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </a>
          {menu === "about" ? <img src={swoosh} alt="" /> : <></>}
        </li>
        <li>
          <a className="anchor-link" offset={50} href="#work">
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </a>
          {menu === "work" ? <img src={swoosh} alt="" /> : <></>}
        </li>
        <li>
          <a className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </a>
          {menu === "contact" ? <img src={swoosh} alt="" /> : <></>}
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
