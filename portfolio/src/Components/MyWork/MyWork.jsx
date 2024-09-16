import React from "react";
import "./MyWork.css";
import mywork_data from "../../../assets/mywork_data";
import rightArrow from "../../../assets/right-arrow-next-svgrepo-com.svg";

const MyWork = () => {
  return (
    <div className="mywork">
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
          style={{ width: 350, height: "auto" }}
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
