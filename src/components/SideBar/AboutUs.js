import React from "react";
import { Link } from "react-router-dom";
const AboutUs = (props) => {
  return (
    <div className={props.classVal}>
      <h5>About Us</h5>
      <Link to="#">
        Careers{" "}
        <img
          alt=""
          src="assets/icons/right@1x.svg"
          style={{ display: props.imageDisplay }}
        />
      </Link>
      <Link to="#">
        Contact Us{" "}
        <img
          alt=""
          src="assets/icons/right@1x.svg"
          style={{ display: props.imageDisplay }}
        />
      </Link>
      <Link to="#">
        FAQ{" "}
        <img
          alt=""
          src="assets/icons/right@1x.svg"
          style={{ display: props.imageDisplay }}
        />
      </Link>
      <Link to="#">
        Why QuickTutor{" "}
        <img
          alt=""
          src="assets/icons/right@1x.svg"
          style={{ display: props.imageDisplay }}
        />
      </Link>
    </div>
  );
};
export default AboutUs;
