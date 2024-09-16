import React from "react";
import "./Footer.css";
import fullLogo from "../../../assets/full.logo.png";
import user from "../../../assets/user.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img className="footer-top-left_img" src={fullLogo} alt="Full Logo" />
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img
              src={user}
              alt="email icon"
              className="footer-email-input_img"
            />
            <input
              className="footer-email-input_input"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          @copy 2024 Anthony Law. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
