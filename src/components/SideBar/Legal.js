import React from "react";
import { Link } from "react-router-dom";
const Legal = (props) => {
  return (
    <div className={props.classVal}>
      <h5>Legal</h5>
      <Link to="#">
        Privacy Policy{" "}
        <img
          alt=""
          src="assets/icons/right@1x.svg"
          style={{ display: props.imageDisplay }}
        />
      </Link>
      <Link to="#">
        Service Terms of Use{" "}
        <img
          alt=""
          src="assets/icons/right@1x.svg"
          style={{ display: props.imageDisplay }}
        />
      </Link>
      <Link to="#">
        Payment Terms of service{" "}
        <img
          alt=""
          src="assets/icons/right@1x.svg"
          style={{ display: props.imageDisplay }}
        />
      </Link>
      <Link to="#">
        Independent Tutor Agrement{" "}
        <img
          alt=""
          src="assets/icons/right@1x.svg"
          style={{ display: props.imageDisplay }}
        />
      </Link>
    </div>
  );
};
export default Legal;
