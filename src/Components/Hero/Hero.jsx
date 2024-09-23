import React from "react";
import "./Hero.css";
import self from "../../../assets/self_cropped.png";

const Hero = () => {
  const openResume = () => {
    window.open(
      "https://docs.google.com/document/d/10gx1wQRE1UBsRXQGxHkaiLc_KepsJh8L/edit?usp=sharing&ouid=100622874604305250875&rtpof=true&sd=true",
      "_blank"
    );
  };

  return (
    <div id="home" className="hero">
      <img className="hero_img" src={self} alt="self" />
      <h1 className="hero_h1">
        <span>Hey I'm Anthony, </span> a full-stack developer with a primary
        focus in React & Express.
      </h1>
      <p className="hero_p">
        I am a full-stack developer located in Salt Lake, looking to break into
        tech. Excited to work with you & continue to learn & grow.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <a className="anchor-link" offset={50} href="#contact">
            Connect with me
          </a>
        </div>
        <button onClick={openResume} className="hero-resume">
          My resume
        </button>
      </div>
    </div>
  );
};

export default Hero;
