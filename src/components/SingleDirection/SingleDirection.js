import React from "react";
const SingleDirection = (props) => {
  return (
    <div className="single-direction">
      <a href="#">
        <div className="direction-title">
          <span>{props.data}</span>
        </div>
        <div className="direction-img">
          <img alt=""  src="assets/image/d5ddd913484f0e1bf3f0ce47034ff8bf.svg" />
        </div>
      </a>
    </div>
  );
};
export default SingleDirection;
