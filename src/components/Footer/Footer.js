import React from "react";
import DownloadApp from "../DownloadApp/DownloadApp";
import Manufacturer from "../Manufacturer/Manufacturer";
import SocialSite from "../SocialSite/SocialSite";
import FooterDate from "../FooterDate/FooterDate";
import AboutUs from "../SideBar/AboutUs";
import Community from "../SideBar/Community";
import Legal from "../SideBar/Legal";
import "./style.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-top row">
          <AboutUs
            classVal="footer-top-single col-lg-3 col-md-4"
            imageDisplay="initial"
          />
          <Community
            classVal="footer-top-single col-lg-3 col-md-4"
            imageDisplay="initial"
          />
          <Legal
            classVal="footer-top-single col-lg-3 col-md-4"
            imageDisplay="initial"
          />
          <div className="footer-top-single col-lg-3 col-md-12 text-center manufacture">
            <h5>
              Made with
              <a className="footer-manufacture" href="#">
                <i className="fa fa-heart heartColor"></i>
              </a>
              in Michigan
            </h5>
          </div>
        </div>
        <div className="footer-middle d-flex justify-content-between">
          <DownloadApp classVal="footer-dropdown" />
          <Manufacturer classVal="footer-company" />
          <SocialSite classVal="footer-icon" />
        </div>
        <FooterDate classVal="footer-bottom text-center" />
      </div>
    </div>
  );
};
export default Footer;
