import React from "react";
import "./About.css";
import self from "../../../assets/self_cropped.png";
import logo from "../../../assets/logo.png";
import swoosh from "../../../assets/noun-swoosh-6638987.svg";

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
          style={{ width: 250, height: "auto" }}
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1715.188,729.187c-94.363-76.542-172.88-77.565-284.243-63.666  c128.962,37.677,323.764,93.629,302.921,274.029c-26.078,225.793-367.483,215.35-533.242,157.771  c111.358-60.957,193.761-97.569,364.571-100.555v-0.005c-52.929-27.559-47.425-31.584-107.539-35.4  c-93.567-5.942-222.301,41.244-354.326,95.411C875.353,949.108,632.194,764.303,365.138,857.509  c-370.229,129.212-207.603,781.721,684.252,321.955c149.517,64.09,299.14,105.692,495.865,54.344  C1803.544,1166.396,1920.858,896.023,1715.188,729.187z M743.992,1190.888c-83.484,19.482-427.349,69.532-420.217-94.088  c7.137-163.752,336.614-83.517,425.137-50.002c65.14,24.663,125.795,52.717,184.674,80.117  C865.998,1153.983,801.268,1177.523,743.992,1190.888z"
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
