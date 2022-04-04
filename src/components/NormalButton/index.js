import React from "react";
import { Link } from "react-router-dom";
const NormalButton = (props) => {
  return (
    <div className={props.class}>
      <Link to={props.url} className="btn">
        {props.value}
        <img
          style={{ display: props.imageDisplay }}
          src={`assets/icons/${props.image}`}
        />
      </Link>
      {/* <a className="btn" href="#">
        {props.value}
        <img
          style={{ display: props.imageDisplay }}
          src={`assets/icons/${props.image}`}
        />
      </a> */}
    </div>
  );
};
export default NormalButton;
