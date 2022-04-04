import React from "react";
const SocialSite = (props) => {
  return (
    <div className={props.classVal}>
      <a href="#">
        <img src={"assets/icons/twitter-color.svg"} />
      </a>
      <a href="#">
        <img src={"assets/icons/linkedin-color.svg"} />
      </a>
      <a href="#">
        <img src={"assets/icons/instagram-color.svg"} />
      </a>
      <a href="#">
        <img src={"assets/icons/youtube-color.svg"} />
      </a>
      <a href="#">
        <img src={"assets/icons/facebook-color.svg"} />
      </a>
    </div>
  );
};

export default SocialSite;
