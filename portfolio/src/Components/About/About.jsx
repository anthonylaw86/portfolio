import React from "react";
import "./About.css";
import self from "../../../assets/self_cropped.png";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1 className="about-title_h1">About me</h1>
        <svg
          className="about-title_img"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 2000 2500"
          enableBackground="new 0 0 2000 2000"
          xmlSpace="preserve"
        >
          <defs>
            <linearGradient id="gradient1" x1="100%" y1="0%" x2="0%" y2="0%">
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

          <path
            fill="url(#gradient1)"
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
