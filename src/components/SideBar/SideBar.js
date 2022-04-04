import React from "react";
import DownloadApp from "../DownloadApp/DownloadApp";
import SocialSite from "../SocialSite/SocialSite";
import Manufacturer from "../Manufacturer/Manufacturer";
import FooterDate from "../FooterDate/FooterDate";
import AboutUs from "./AboutUs";
import Community from "./Community";
import Legal from "./Legal";
import "./style.css";
const SideBar = (props) => {
  var sideheight = window.innerHeight - 100;
  return (
    <>
      <div
        id="mySidepanel"
        className="sidepanel"
        style={{ right: props.sidePanelRightValue, height: sideheight }}
      >
        <div className="sidepanel-inner">
          <AboutUs classVal="about" imageDisplay="none" />
          <Community classVal="community" imageDisplay="none" />
          <Legal classVal="legal" imageDisplay="none" />
          <div className="made-with text-center">
            <h6 className="d-flex">
              Made with{" "}
              <a href="#">
                <i className="fa fa-heart heartColor"></i>
              </a>{" "}
              in Michigan
            </h6>
          </div>
          <DownloadApp classVal="download-app d-flex justify-content-center" />
          <SocialSite classVal="icon d-flex justify-content-between" />
          <Manufacturer classVal="company" />
          <FooterDate classVal="side-footer text-center" />
        </div>
      </div>
    </>
  );
};
export default SideBar;
