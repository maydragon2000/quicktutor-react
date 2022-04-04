import React from "react";
import SingleHelper from "../../components/SingleHelper/SingleHelper";
const Helper = () => {
  return (
    <div className="service">
      <div className="service-inner container ">
        <div className="row">
          <SingleHelper
            classVal="col-lg-6 col-md-6 col-sm-6 Service-left"
            title="Frequently asked questions"
            image1="FAQ.png"
            description="Support is just a tap away. We can also answer any questions you might have in our FAQ section."
            btnVal=" Get help"
          />
          <SingleHelper
            classVal="col-lg-6 col-md-6 col-sm-6 service-right"
            title="Why QuickTutor?"
            image1="Why_QT.png"
            description="Turn your knowledge into dollars & become your own boss today."
            btnVal=" Learn more"
          />
        </div>
      </div>
    </div>
  );
};
export default Helper;
