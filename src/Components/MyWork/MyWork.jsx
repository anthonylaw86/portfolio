import React from "react";
import "./MyWork.css";
import mywork_data from "../../../assets/mywork_data";
import rightArrow from "../../../assets/right-arrow-next-svgrepo-com.svg";
import icon from "../../../assets/pikaso.png";

const MyWork = ({ onCardClick }) => {
  const gitHub = () => {
    window.open("https://github.com/anthonylaw86", "_blank");
  };

  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1 className="mywork-title_h1">My latest work</h1>
        <img src={icon} alt="mywork title img" className="mywork-title_img" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <img
              onClick={() => {
                onCardClick(work);
              }}
              className="mywork-container_img"
              key={index}
              src={work.work_image}
              alt="project"
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
