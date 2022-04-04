import React from "react";
import "./style.css";
const DownloadApp = (props) => {
  return (
    <div className={props.classVal}>

      <a href="#">
        {" "}
        <img className="" src={"assets/icons/Download@1x.svg"} />
      </a>
      <a href="#">
        {" "}
        <img className="" src={"assets/icons/google-play-badge.svg"} />
      </a>
    </div>
  );
};

export default DownloadApp;
