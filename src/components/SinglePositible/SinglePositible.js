import React from "react";
const SinglePositible = (props) => {
  return (
    <div className="single">
      <a href="#">
        <div className="up">
          <img alt="" src={`assets/image/${props.data.image1}`} />
        </div>
        <div className="down">
          <div className="down-img">
            <img
              alt=""
              src={`assets/icons/comunity-icons/${props.data.image2}`}
            />
          </div>
          <div className="down-title">
            <span>{props.data.title}</span>
          </div>
        </div>
      </a>
    </div>
  );
};
export default SinglePositible;
