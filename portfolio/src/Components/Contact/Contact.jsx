import React from "react";
import "./Contact.css";
import logo from "../../../assets/logo.png";
import phone from "../../../assets/phone1.svg";
import letter from "../../../assets/letter1.svg";
import location from "../../../assets/location1.svg";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1 className="contact-title_h1">Get in touch</h1>
        <svg
          className="contact-title_img"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 2000 2500"
          enableBackground="new 0 0 2000 2000"
          xmlSpace="preserve"
          style={{ width: 300, height: "auto" }}
        >
          {/* Define the linear gradient */}
          <defs>
            <linearGradient id="gradient1" x1="100%" y1="0%" x2="0%" y2="0%">
              {/* Adjusted color stops */}
              <stop
                offset="0%"
                style={{ stopColor: "#5d6767", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#68d2df", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>

          {/* Apply the gradient to the path's fill */}
          <path
            fill="url(#gradient1)" // Reference the gradient by its ID
            d="M1658.521,472.265c93.07,61.928,154.628,103.417,88.775,223.009  
          c-109.566,198.973-722.723,36.977-920.529,2.078c-211.039-37.233-576.332-128.943-643.958,160.521  
          c-49.61,212.352,136.548,331.546,338.856,311.909c179.833-17.462,770.364-151.3,919.52-105.622  
          c-47.613,41.062-401.747,68.202-449.815,78.473c-79.486,16.988-217.878,69.167-168.748,177.855  
          c40.376,89.333,150.311,45.729,165.157,176.324l3.701,30.924c88.054-162.688-138.307-176.034-113.309-253.201  
          c25.954-80.119,431.852-61.291,535.051-84.532c88.316-19.89,189.258-92.233,134.21-185.681  
          c-97.033-164.707-855.958-4.896-1039.549,6.032c-105.044,6.252-228.064-46.869-158.768-157.548  
          c59.974-95.792,309.307-47.319,403.924-36.11c255.87,30.311,932.786,181.626,1050.381-94.732  
          C1858.877,591.646,1808.295,481.479,1658.521,472.265z"
          />

          {/* Optional: Text at the bottom */}
          <text
            x="0"
            y="2015"
            fill="#000000"
            fontSize="5px"
            fontWeight="bold"
            fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
          >
            Created by Adi Waluyo Noto Carito
          </text>
          <text
            x="0"
            y="2020"
            fill="#000000"
            fontSize="5px"
            fontWeight="bold"
            fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
          >
            from the Noun Project
          </text>
        </svg>
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
