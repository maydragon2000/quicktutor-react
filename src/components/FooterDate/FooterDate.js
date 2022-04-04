import React from "react";
const FooterDate = (props) => {
  var dt = new Date();
  return (
    <div className={props.classVal}>
      <a>{`© ${dt.getFullYear()} QuickTutor, LLC. All Rights Reserved.`}</a>
    </div>
  );
};
export default FooterDate;
