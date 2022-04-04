import React from "react";
import NormalButton from "../NormalButton";
const SingleHelper = (props) => {
  return (
    <div className={props.classVal}>
      <div className="service-img">
        <img alt="" src={`assets/icons/${props.image1}`} />
      </div>
      <div className="service-description">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <NormalButton value={props.btnVal} url="#" image="right-purple@1x.svg" />
      </div>
    </div>
  );
};
export default SingleHelper;
