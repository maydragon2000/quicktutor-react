import React from "react";
const SingleIntroduce = (props) => {
  return (
    <div className="single-introduce">
      <div className="title-image">
        <img alt="" src={`assets/icons/${props.data.image}`} />
      </div>
      <div className="description">
        <h5>{props.data.title}</h5>
        <p>{props.data.description}</p>
      </div>
    </div>
  );
};
export default SingleIntroduce;
