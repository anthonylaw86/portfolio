import React from "react";
import "./About.css";
import self from "../../../assets/self_cropped.png";
import logo from "../../../assets/logo.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1 className="about-title_h1">About me</h1>
        <img className="about-title_img" src={logo} alt="theme pattern" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img className="about-sections_img" src={self} alt="self" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a passionate and adaptable Full Stack Software Engineer
              transitioning from a diverse background in hospitality and retail
              management to the world of software development. With hands-on
              experience in the MERN stack, JavaScript, and modern tools like
              React, Node.js, and Vite, I have honed my ability to build
              user-friendly, efficient, and secure software solutions.
            </p>
            <p>
              My journey from hospitality to software engineering has given me a
              unique perspective on customer experience and team dynamics, which
              I leverage to create seamless and enjoyable digital experiences. I
              have successfully led multiple solo projects, including a
              weather-based wardrobe app, a social music sharing platform, and a
              dynamic photography site, utilizing a range of technologies such
              as RESTful APIs, React Context API, Express, MongoDB, and secure
              coding practices.
            </p>
            <p>
              With a solid foundation in software engineering principles from my
              Full Stack Bootcamp at TripleTen, I am excited to bring my strong
              problem-solving skills, creativity, and collaborative mindset to a
              team that values innovation and continuous growth. I am open to
              new opportunities and challenges where I can make an impact by
              combining my technical skills and customer-focused approach.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p className="about-skill_p">HTML & CSS</p>
              <hr className="about-skill_hr" style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p className="about-skill_p">React JS</p>
              <hr className="about-skill_hr" style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p className="about-skill_p">Express</p>
              <hr className="about-skill_hr" style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p className="about-skill_p">JavaScript</p>
              <hr className="about-skill_hr" style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1 className="about-achievement_h1">4+</h1>
          <p className="about-achievement_p">Years of management experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1 className="about-achievement_h1">8</h1>
          <p className="about-achievement_p">Years of hospitality industry</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1 className="about-achievement_h1">Always</h1>
          <p className="about-achievement_p">Striving for better</p>
        </div>
      </div>
    </div>
  );
};

export default About;
