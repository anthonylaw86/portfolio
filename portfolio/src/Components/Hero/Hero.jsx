import React from "react";
import "./Hero.css";
import self from "../../../assets/self_cropped.png";

const Hero = () => {
  return (
    <div className="hero">
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
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
