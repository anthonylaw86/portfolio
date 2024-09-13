import React from "react";
import "./MyWork.css";
import mywork_data from "../../../assets/mywork_data";
import rightArrow from "../../../assets/right-arrow-next-svgrepo-com.svg";

const MyWork = () => {
  return (
    <div className="mywork">
      <div className="mywork-title">
        <h1 className="mywork-title_h1">My latest work</h1>
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
      <div className="mywork-showmore">
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
