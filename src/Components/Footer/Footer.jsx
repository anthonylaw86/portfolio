import React, { useState } from "react";
import "./Footer.css";
import fullLogo from "../../../assets/full.logo.png";
import user from "../../../assets/user.svg";

const Footer = ({ className }) => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8da0e542-818e-46cd-9669-e8a476d06111");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      alert(data.message);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className={`footer ${className}`}>
      <div className="footer-top">
        <div className="footer-top-left">
          <img className="footer-top-left_img" src={fullLogo} alt="Full Logo" />
        </div>
        <div className="footer-top-right">
          <form onSubmit={onSubmit} className="footer-form">
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
            <button type="submit" className="footer-subscribe">
              Subscribe
            </button>
          </form>
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
