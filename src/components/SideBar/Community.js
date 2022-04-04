import React from "react";
import { Link } from "react-router-dom";
const Community = (props) => {
  return (
    <div className={props.classVal}>
      <h5>Community</h5>
      <Link to="#">
        Blog{" "}
        <img
          alt=""
          src="assets/icons/right@1x.svg"
          style={{ display: props.imageDisplay }}
        />
      </Link>
      <Link to="#">
        Community GuideLines{" "}
        <img
          alt=""
          src="assets/icons/right@1x.svg"
          style={{ display: props.imageDisplay }}
        />
      </Link>
      <Link to="#">
        User safety{" "}
        <img
          alt=""
          src="assets/icons/right@1x.svg"
          style={{ display: props.imageDisplay }}
        />
      </Link>
      <Link to="#">
        Non Discrimition Policy{" "}
        <img
          alt=""
          src="assets/icons/right@1x.svg"
          style={{ display: props.imageDisplay }}
        />
      </Link>
    </div>
  );
};
export default Community;
