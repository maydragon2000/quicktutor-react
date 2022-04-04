import React from "react";
const Manufacturer = (props) => {
  return (
    <div className={props.classVal}>
      <a href="#">
        <img className="BBB" src={"assets/icons/BBB.png"} />
      </a>
      <a href="#">
        <img className="green" src={"assets/icons/green.png"} />
      </a>
    </div>
  );
};

export default Manufacturer;
