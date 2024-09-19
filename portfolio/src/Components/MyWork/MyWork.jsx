import React from "react";
import "./MyWork.css";
import mywork_data from "../../../assets/mywork_data";
import rightArrow from "../../../assets/right-arrow-next-svgrepo-com.svg";

const MyWork = () => {
  const gitHub = () => {
    window.open("https://github.com/anthonylaw86", "_blank");
  };

  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1 className="mywork-title_h1">My latest work</h1>
        <svg
          className="mywork-title_img"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 2000 2500"
          enableBackground="new 0 0 2000 2000"
          xmlSpace="preserve"
          style={{ width: 300, height: "auto" }}
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
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <img
              className="mywork-container_img"
              key={index}
              src={work.work_image}
              alt="Around US"
            />
          );
        })}
      </div>
      <div onClick={gitHub} className="mywork-showmore">
        <p>Show More</p>
        <img
          className="mywork-showmore_img"
          src={rightArrow}
          alt="Arrow Icon"
        />
      </div>
    </div>
  );
};

export default MyWork;
