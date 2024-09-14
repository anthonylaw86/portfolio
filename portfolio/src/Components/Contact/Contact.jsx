import React from "react";
import "./Contact.css";
import logo from "../../../assets/logo.png";
import phone from "../../../assets/phone1.svg";
import letter from "../../../assets/letter1.svg";
import location from "../../../assets/location1.svg";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1 className="contact-title_h1">Get in touch</h1>
        <img className="contact-title_img" src={logo} alt="logo" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1 className="contact-left_h1">Let's Talk</h1>
          <p className="contact-left_p">
            I'm open to new projects at the moment, so don't hesitate to reach
            out if you have something in mind you'd like to work on. Feel free
            to contact me anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img className="contact-detail_img" src={letter} alt="email" />
              <p>alawcodes@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img className="contact-detail_img" src={phone} alt="phone" />
              <p>385-529-7116</p>
            </div>
            <div className="contact-detail">
              <img
                className="contact-detail_img"
                src={location}
                alt="location"
              />
              <p>Salt Lake City, UT.</p>
            </div>
          </div>
        </div>
        <form className="contact-right">
          <label className="contact-right_label" htmlFor="">
            Your Name
          </label>
          <input
            className="contact-right_input"
            type="text"
            placeholder="Enter your name"
            name="name"
          />
          <label className="contact-right_label" htmlFor="">
            Your Email
          </label>
          <input
            className="contact-right_input"
            type="email"
            placeholder="Enter your email"
            name="email"
          />
          <label className="contact-right_label" htmlFor="">
            Write your message here
          </label>
          <textarea
            className="contact-right_textarea"
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button className="contact-submit" type="submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
